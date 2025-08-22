import pool from "./db";
import type { RowDataPacket } from "mysql2";

/** Si quieres, define tipos más estrictos */
// export interface Question extends RowDataPacket {
//   id: number;
//   category_id: number;
//   question_text: string;
//   option_a: string;
//   option_b: string;
//   option_c: string;
//   option_d: string;
//   correct_answer: "A" | "B" | "C" | "D";
//   difficulty: number;
//   explanation?: string;
// }

export interface GameEngine {
  startGame: (userId: number, categoryId?: number) => Promise<any>;
  submitAnswer: (sessionId: number, questionId: number, userAnswer: string, timeTaken: number) => Promise<any>;
  completeGame: (sessionId: number) => Promise<any>;
  getCategories: () => Promise<any[]>;
  getUserStats: (userId: number) => Promise<any>;
  getLeaderboard: (limit?: number) => Promise<any>;
}

/* -------------------- Helpers -------------------- */
function clean(s: unknown): string {
  return String(s ?? "").trim().toLowerCase();
}

/** Normaliza múltiples formatos a A|B|C|D */
function normalizeAnswer(
  input: unknown,
  question: {
    option_a?: string;
    option_b?: string;
    option_c?: string;
    option_d?: string;
  }
): "A" | "B" | "C" | "D" | null {
  const raw = clean(input);
  if (!raw) return null;

  // 1) A/B/C/D con adornos (A)  A.  A:  A-
  if (/^a[\)\.\:\-_\s]*$/.test(raw)) return "A";
  if (/^b[\)\.\:\-_\s]*$/.test(raw)) return "B";
  if (/^c[\)\.\:\-_\s]*$/.test(raw)) return "C";
  if (/^d[\)\.\:\-_\s]*$/.test(raw)) return "D";

  // 2) option_a / option-a / optiona / opcion a
  if (/^(op(c|ci)on|option)[\s\-_]*a$/.test(raw)) return "A";
  if (/^(op(c|ci)on|option)[\s\-_]*b$/.test(raw)) return "B";
  if (/^(op(c|ci)on|option)[\s\-_]*c$/.test(raw)) return "C";
  if (/^(op(c|ci)on|option)[\s\-_]*d$/.test(raw)) return "D";

  // 3) 1..4 → A..D
  if (raw === "1") return "A";
  if (raw === "2") return "B";
  if (raw === "3") return "C";
  if (raw === "4") return "D";

  // 4) Texto exacto de la opción (case-insensitive + trim)
  const a = clean(question.option_a);
  const b = clean(question.option_b);
  const c = clean(question.option_c);
  const d = clean(question.option_d);

  if (a && raw === a) return "A";
  if (b && raw === b) return "B";
  if (c && raw === c) return "C";
  if (d && raw === d) return "D";

  // 5) Normaliza espacios múltiples
  const norm = (x: string) => x.replace(/\s+/g, " ");
  if (a && norm(raw) === norm(a)) return "A";
  if (b && norm(raw) === norm(b)) return "B";
  if (c && norm(raw) === norm(c)) return "C";
  if (d && norm(raw) === norm(d)) return "D";

  return null;
}

function calculatePoints(isCorrect: boolean, difficulty: number, timeTaken: number): number {
  if (!isCorrect) return 0;
  const base = Math.max(1, Number(difficulty || 1)) * 10;
  const t = Math.max(0, Math.min(300, Math.floor(Number(timeTaken) || 0))); // 0..300s
  const bonus = Math.max(0, (30 - t) / 30) * 0.5; // hasta +50%
  return Math.max(0, Math.floor(base * (1 + bonus)));
}

/* -------------------- Implementación -------------------- */
export const gameEngine: GameEngine = {
  async startGame(userId: number, categoryId?: number) {
    const connection = await pool.getConnection();
    try {
      await connection.beginTransaction();

      const [sessionResult] = await connection.execute(
        "INSERT INTO game_sessions (user_id, category_id) VALUES (?, ?)",
        [userId, categoryId ?? null],
      );
      const sessionId = (sessionResult as any).insertId;

      const questionsQuery = `
        SELECT id, category_id, question_text, option_a, option_b, option_c, option_d,
               correct_answer, difficulty, explanation
        FROM questions
        WHERE (? IS NULL OR category_id = ?)
        ORDER BY RAND()
        LIMIT 10
      `;
      const [questions] = await connection.execute(questionsQuery, [categoryId ?? null, categoryId ?? null]);

      await connection.commit();
      return { session: { id: sessionId }, questions };
    } catch (error) {
      await connection.rollback();
      throw error;
    } finally {
      connection.release();
    }
  },

  async submitAnswer(sessionId: number, questionId: number, userAnswer: string, timeTaken: number) {
    const connection = await pool.getConnection();
    try {
      // 1) Traer la pregunta
      const [questionRows] = await connection.execute<RowDataPacket[]>(
        `SELECT id, category_id, question_text, option_a, option_b, option_c, option_d,
                correct_answer, difficulty, explanation
         FROM questions WHERE id = ?`,
        [questionId]
      );
      const question: any = (questionRows as any[])[0];
      if (!question) throw new Error("Question not found");

      // 2) Normalizar respuesta del usuario a A|B|C|D
      const normalized = normalizeAnswer(userAnswer, question);
      if (!normalized) {
        throw new Error("Invalid userAnswer (must be A, B, C or D, 1..4, option_a..d, o texto exacto)");
      }

      // 3) Calcular correcto y puntos
      const safeTime = Math.max(0, Math.min(300, Math.floor(Number(timeTaken) || 0)));
      const isCorrect = normalized === question.correct_answer;
      const pointsEarned = calculatePoints(isCorrect, Number(question.difficulty || 1), safeTime);

      // 4) Insertar cumpliendo CHECKs
      await connection.execute(
        `INSERT INTO user_answers
          (session_id, question_id, user_answer, is_correct, points_earned, time_taken)
         VALUES (?, ?, ?, ?, ?, ?)`,
        [sessionId, questionId, normalized, isCorrect ? 1 : 0, pointsEarned, safeTime]
      );

      return {
        isCorrect,
        correctAnswer: question.correct_answer,
        explanation: question.explanation,
        pointsEarned,
      };
    } finally {
      connection.release();
    }
  },

  async completeGame(sessionId: number) {
    const connection = await pool.getConnection();
    try {
      const [answerStats] = await connection.execute<RowDataPacket[]>(
        `SELECT 
          COUNT(*) as total_questions,
          SUM(CASE WHEN is_correct THEN 1 ELSE 0 END) as correct_answers,
          SUM(points_earned) as total_score,
          SUM(time_taken) as total_time
         FROM user_answers WHERE session_id = ?`,
        [sessionId],
      );

      const stats: any = (answerStats as any[])[0];

      await connection.execute(
        `UPDATE game_sessions
         SET total_questions = ?, correct_answers = ?, total_score = ?, time_taken = ?, completed_at = NOW()
         WHERE id = ?`,
        [stats.total_questions, stats.correct_answers, stats.total_score, stats.total_time, sessionId],
      );

      const [sessionRows] = await connection.execute<RowDataPacket[]>(
        "SELECT * FROM game_sessions WHERE id = ?",
        [sessionId]
      );
      return { session: (sessionRows as any[])[0] };
    } finally {
      connection.release();
    }
  },

  async getCategories() {
    const connection = await pool.getConnection();
    try {
      const [rows] = await connection.execute<RowDataPacket[]>(
        "SELECT id, name, color, description FROM categories ORDER BY name"
      );
      return rows as any[]; // siempre array
    } finally {
      connection.release();
    }
  },

  async getUserStats(userId: number) {
    const connection = await pool.getConnection();
    try {
      const [rows] = await connection.execute<RowDataPacket[]>(
        `SELECT 
          total_score,
          games_played,
          correct_answers,
          total_questions,
          CASE 
            WHEN total_questions > 0 THEN ROUND((correct_answers / total_questions) * 100, 2)
            ELSE 0 
          END as accuracy
         FROM users 
         WHERE id = ?`,
        [userId],
      );

      return (
        (rows as any[])[0] ??
        { total_score: 0, games_played: 0, correct_answers: 0, total_questions: 0, accuracy: 0 }
      );
    } finally {
      connection.release();
    }
  },

  async getLeaderboard(limit = 10) {
    const connection = await pool.getConnection();
    try {
      const [rows] = await connection.execute<RowDataPacket[]>(
        `SELECT 
          @rank := @rank + 1 as rank,
          display_name,
          email,
          total_score,
          games_played,
          CASE 
            WHEN total_questions > 0 THEN ROUND((correct_answers / total_questions) * 100, 2)
            ELSE 0 
          END as accuracy
         FROM users, (SELECT @rank := 0) r
         WHERE games_played > 0
         ORDER BY total_score DESC, games_played DESC
         LIMIT ?`,
        [limit],
      );
      return rows;
    } finally {
      connection.release();
    }
  },
};
