import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { pool } from "./database"
import type { User } from "./database"

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key-change-in-production"

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12)
}

export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword)
}

export function generateToken(userId: number): string {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: "7d" })
}

export function verifyToken(token: string): { userId: number } | null {
  try {
    return jwt.verify(token, JWT_SECRET) as { userId: number }
  } catch {
    return null
  }
}

export async function createUser(email: string, password: string, displayName?: string): Promise<User> {
  const hashedPassword = await hashPassword(password)

  const [result] = (await pool.execute(
    `INSERT INTO users (email, password_hash, display_name) 
     VALUES (?, ?, ?)`,
    [email, hashedPassword, displayName],
  )) as any

  const [newUser] = (await pool.execute(
    `SELECT id, email, display_name, total_score, games_played, correct_answers, total_questions, created_at, updated_at 
     FROM users WHERE id = ?`,
    [result.insertId],
  )) as any

  return newUser[0]
}

export async function authenticateUser(email: string, password: string): Promise<User | null> {
  const [result] = (await pool.execute("SELECT * FROM users WHERE email = ?", [email])) as any

  if (result.length === 0) {
    return null
  }

  const user = result[0]
  const isValid = await verifyPassword(password, user.password_hash)

  if (!isValid) {
    return null
  }

  // Remove password_hash from returned user
  const { password_hash, ...userWithoutPassword } = user
  return userWithoutPassword
}

export async function getUserById(id: number): Promise<User | null> {
  const [result] = (await pool.execute(
    "SELECT id, email, display_name, total_score, games_played, correct_answers, total_questions, created_at, updated_at FROM users WHERE id = ?",
    [id],
  )) as any

  return result[0] || null
}
