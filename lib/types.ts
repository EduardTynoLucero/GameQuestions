export interface Category {
  id: number
  name: string
  description: string
  color: string
  created_at: string
}

export interface Question {
  id: number
  category_id: number
  question_text: string
  correct_answer: string
  option_a: string
  option_b: string
  option_c: string
  option_d: string
  difficulty: 1 | 2 | 3
  points: number
  explanation: string
  created_at: string
}

export interface UserProfile {
  id: string
  username: string
  display_name: string
  total_score: number
  games_played: number
  correct_answers: number
  total_questions: number
  favorite_category: number | null
  created_at: string
  updated_at: string
}

export interface GameSession {
  id: number
  user_id: string
  category_id: number
  score: number
  questions_answered: number
  correct_answers: number
  started_at: string
  completed_at: string | null
  status: "active" | "completed" | "abandoned"
}

export interface UserAnswer {
  id: number
  session_id: number
  question_id: number
  user_answer: string
  is_correct: boolean
  points_earned: number
  time_taken: number | null
  answered_at: string
}

export interface GameState {
  session: GameSession | null
  currentQuestion: Question | null
  questionIndex: number
  totalQuestions: number
  timeLeft: number
  isLoading: boolean
  showExplanation: boolean
  selectedAnswer: string | null
}
