"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import CategorySelector from "@/components/category-selector"
import QuestionCard from "@/components/question-card"
import GameResults from "@/components/game-results"
import type { Question, GameSession } from "@/lib/types"

type GameState = "category-selection" | "playing" | "showing-result" | "completed"

interface GameData {
  session: GameSession | null
  questions: Question[]
  currentQuestionIndex: number
  timeLeft: number
  showResult: boolean
  lastResult: {
    isCorrect: boolean
    correctAnswer: string
    explanation: string
    pointsEarned: number
  } | null
}

export default function GamePage() {
  const router = useRouter()
  const [gameState, setGameState] = useState<GameState>("category-selection")
  const [gameData, setGameData] = useState<GameData>({
    session: null,
    questions: [],
    currentQuestionIndex: 0,
    timeLeft: 30,
    showResult: false,
    lastResult: null,
  })
  const [isLoading, setIsLoading] = useState(false)

  // Timer effect
  useEffect(() => {
    if (gameState === "playing" && !gameData.showResult && gameData.timeLeft > 0) {
      const timer = setTimeout(() => {
        setGameData((prev) => ({ ...prev, timeLeft: prev.timeLeft - 1 }))
      }, 1000)
      return () => clearTimeout(timer)
    } else if (gameState === "playing" && !gameData.showResult && gameData.timeLeft === 0) {
      // Time's up - auto submit with no answer
      handleAnswerSubmit("", 30)
    }
  }, [gameState, gameData.showResult, gameData.timeLeft])

  const startGame = async (categoryId?: number) => {
    setIsLoading(true)
    try {
      const response = await fetch("/api/game/start", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ categoryId }),
      })

      if (!response.ok) {
        throw new Error("Failed to start game")
      }

      const data = await response.json()
      setGameData({
        session: data.session,
        questions: data.questions,
        currentQuestionIndex: 0,
        timeLeft: 30,
        showResult: false,
        lastResult: null,
      })
      setGameState("playing")
    } catch (error) {
      console.error("Error starting game:", error)
      alert("Error al iniciar el juego. Por favor, intenta de nuevo.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleAnswerSubmit = async (answer: string, timeTaken: number) => {
    if (!gameData.session || !gameData.questions[gameData.currentQuestionIndex]) return

    try {
      const response = await fetch("/api/game/answer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sessionId: gameData.session.id,
          questionId: gameData.questions[gameData.currentQuestionIndex].id,
          userAnswer: answer,
          timeTaken,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to submit answer")
      }

      const result = await response.json()
      setGameData((prev) => ({
        ...prev,
        showResult: true,
        lastResult: {
          isCorrect: result.isCorrect,
          correctAnswer: result.correctAnswer,
          explanation: result.explanation,
          pointsEarned: result.pointsEarned,
        },
      }))

      setGameState("showing-result")

      // Auto advance after 4 seconds
      setTimeout(() => {
        nextQuestion()
      }, 4000)
    } catch (error) {
      console.error("Error submitting answer:", error)
      alert("Error al enviar la respuesta. Por favor, intenta de nuevo.")
    }
  }

  const nextQuestion = () => {
    const nextIndex = gameData.currentQuestionIndex + 1
    if (nextIndex < gameData.questions.length) {
      setGameData((prev) => ({
        ...prev,
        currentQuestionIndex: nextIndex,
        timeLeft: 30,
        showResult: false,
        lastResult: null,
      }))
      setGameState("playing")
    } else {
      completeGame()
    }
  }

  const completeGame = async () => {
    if (!gameData.session) return

    try {
      const response = await fetch("/api/game/complete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId: gameData.session.id }),
      })

      if (!response.ok) {
        throw new Error("Failed to complete game")
      }

      const result = await response.json()
      setGameData((prev) => ({ ...prev, session: result.session }))
      setGameState("completed")
    } catch (error) {
      console.error("Error completing game:", error)
      alert("Error al completar el juego.")
    }
  }

  const resetGame = () => {
    setGameData({
      session: null,
      questions: [],
      currentQuestionIndex: 0,
      timeLeft: 30,
      showResult: false,
      lastResult: null,
    })
    setGameState("category-selection")
  }

  const goHome = () => {
    router.push("/")
  }

  if (gameState === "category-selection") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
        <CategorySelector onCategorySelect={startGame} isLoading={isLoading} />
      </div>
    )
  }

  if (gameState === "playing" || gameState === "showing-result") {
    const currentQuestion = gameData.questions[gameData.currentQuestionIndex]
    if (!currentQuestion) return null

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
        <QuestionCard
          question={currentQuestion}
          questionNumber={gameData.currentQuestionIndex + 1}
          totalQuestions={gameData.questions.length}
          timeLeft={gameData.timeLeft}
          onAnswerSubmit={handleAnswerSubmit}
          showResult={gameData.showResult}
          isCorrect={gameData.lastResult?.isCorrect}
          correctAnswer={gameData.lastResult?.correctAnswer}
          explanation={gameData.lastResult?.explanation}
          pointsEarned={gameData.lastResult?.pointsEarned}
        />
      </div>
    )
  }

  if (gameState === "completed" && gameData.session) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100 py-12 px-4">
        <GameResults session={gameData.session} onPlayAgain={resetGame} onGoHome={goHome} />
      </div>
    )
  }

  return null
}
