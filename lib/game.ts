import { pool } from "./database"
import type { Category, Question, GameSession, UserAnswer, LeaderboardEntry } from "./database"

export async function getCategories(): Promise<Category[]> {
  const [result] = (await pool.execute("SELECT * FROM categories ORDER BY name")) as any
  return result
}

export async function getQuestionsByCategory(categoryId?: number, limit = 10): Promise<Question[]> {
  let query = "SELECT * FROM questions"
  const params: any[] = []

  if (categoryId) {
    query += " WHERE category_id = ?"
    params.push(categoryId)
  }

  query += " ORDER BY RAND() LIMIT ?"
  params.push(limit)

  const [result] = (await pool.execute(query, params)) as any
  return result
}

export async function createGameSession(userId: number, categoryId?: number): Promise<GameSession> {
  const [result] = (await pool.execute(
    `INSERT INTO game_sessions (user_id, category_id, total_questions, correct_answers, total_score, time_taken) 
     VALUES (?, ?, 0, 0, 0, 0)`,
    [userId, categoryId],
  )) as any

  const [newSession] = (await pool.execute("SELECT * FROM game_sessions WHERE id = ?", [result.insertId])) as any

  return newSession[0]
}

export async function saveUserAnswer(
  sessionId: number,
  questionId: number,
  userAnswer: "A" | "B" | "C" | "D",
  isCorrect: boolean,
  timeTaken: number,
  pointsEarned: number,
): Promise<UserAnswer> {
  const [result] = (await pool.execute(
    `INSERT INTO user_answers (session_id, question_id, user_answer, is_correct, time_taken, points_earned) 
     VALUES (?, ?, ?, ?, ?, ?)`,
    [sessionId, questionId, userAnswer, isCorrect, timeTaken, pointsEarned],
  )) as any

  const [newAnswer] = (await pool.execute("SELECT * FROM user_answers WHERE id = ?", [result.insertId])) as any

  return newAnswer[0]
}

export async function completeGameSession(
  sessionId: number,
  totalQuestions: number,
  correctAnswers: number,
  totalScore: number,
  timeTaken: number,
): Promise<GameSession> {
  const [result] = (await pool.execute(
    `UPDATE game_sessions 
     SET total_questions = ?, correct_answers = ?, total_score = ?, time_taken = ?, completed_at = CURRENT_TIMESTAMP
     WHERE id = ?`,
    [totalQuestions, correctAnswers, totalScore, timeTaken, sessionId],
  )) as any

  const [updatedSession] = (await pool.execute("SELECT * FROM game_sessions WHERE id = ?", [sessionId])) as any

  return updatedSession[0]
}

export async function getLeaderboard(limit = 10): Promise<LeaderboardEntry[]> {
  const [result] = (await pool.execute(
    `
    SELECT 
      ROW_NUMBER() OVER (ORDER BY total_score DESC) as rank,
      id as user_id,
      display_name,
      email,
      total_score,
      games_played,
      CASE 
        WHEN total_questions > 0 THEN ROUND((correct_answers * 100.0 / total_questions), 1)
        ELSE 0 
      END as accuracy
    FROM users 
    WHERE games_played > 0 
    ORDER BY total_score DESC 
    LIMIT ?
  `,
    [limit],
  )) as any

  return result
}

export async function getUserStats(userId: number) {
  const [userResult] = (await pool.execute("SELECT * FROM users WHERE id = ?", [userId])) as any

  if (userResult.length === 0) return null

  const [recentGames] = (await pool.execute(
    `
    SELECT 
      gs.id,
      c.name as category_name,
      gs.total_score,
      gs.correct_answers,
      gs.total_questions,
      gs.completed_at
    FROM game_sessions gs
    LEFT JOIN categories c ON gs.category_id = c.id
    WHERE gs.user_id = ?
    ORDER BY gs.completed_at DESC
    LIMIT 5
  `,
    [userId],
  )) as any

  return {
    ...userResult[0],
    recent_games: recentGames,
  }
}

export function calculateScore(isCorrect: boolean, difficulty: number, timeTaken: number): number {
  if (!isCorrect) return 0

  const baseScore = difficulty * 10
  const timeBonus = Math.max(0, 30 - timeTaken) // Bonus por responder rápido

  return baseScore + timeBonus
}
