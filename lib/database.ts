import mysql from "mysql2/promise"

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
})

export { pool }

export interface User {
  id: number
  email: string
  display_name?: string
  total_score: number
  games_played: number
  correct_answers: number
  total_questions: number
  created_at: Date
  updated_at: Date
}

export interface Category {
  id: number
  name: string
  description?: string
  icon?: string
  color?: string
}

export interface Question {
  id: number
  category_id: number
  question_text: string
  option_a: string
  option_b: string
  option_c: string
  option_d: string
  correct_answer: "A" | "B" | "C" | "D"
  difficulty: number
  explanation?: string
}

export interface GameSession {
  id: number
  user_id: number
  category_id?: number
  total_questions: number
  correct_answers: number
  total_score: number
  time_taken: number
  completed_at: Date
}

export interface UserAnswer {
  id: number
  session_id: number
  question_id: number
  user_answer: "A" | "B" | "C" | "D"
  is_correct: boolean
  time_taken: number
  points_earned: number
  answered_at: Date
}

export interface LeaderboardEntry {
  rank: number
  user_id: number
  display_name?: string
  email: string
  total_score: number
  games_played: number
  accuracy: number
}
