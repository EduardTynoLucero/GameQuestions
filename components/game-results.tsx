"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Trophy, Target, Star, RotateCcw, Home } from "lucide-react"
import type { GameSession } from "@/lib/types"

interface GameResultsProps {
  session: GameSession
  onPlayAgain: () => void
  onGoHome: () => void
}

export default function GameResults({ session, onPlayAgain, onGoHome }: GameResultsProps) {
  const accuracy = session.questions_answered > 0 ? (session.correct_answers / session.questions_answered) * 100 : 0
  const averageScore = session.questions_answered > 0 ? session.score / session.questions_answered : 0

  const getPerformanceLevel = (accuracy: number) => {
    if (accuracy >= 90) return { level: "Excelente", color: "bg-green-100 text-green-800", icon: "🏆" }
    if (accuracy >= 75) return { level: "Muy Bien", color: "bg-blue-100 text-blue-800", icon: "⭐" }
    if (accuracy >= 60) return { level: "Bien", color: "bg-yellow-100 text-yellow-800", icon: "👍" }
    return { level: "Sigue Practicando", color: "bg-gray-100 text-gray-800", icon: "💪" }
  }

  const performance = getPerformanceLevel(accuracy)

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <div className="mx-auto w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center">
          <Trophy className="w-10 h-10 text-yellow-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900">¡Juego Completado!</h1>
        <Badge className={`text-lg px-4 py-2 ${performance.color}`}>
          {performance.icon} {performance.level}
        </Badge>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-center">Resumen de tu Partida</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center space-y-2">
              <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Star className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-blue-600">{session.score}</div>
              <div className="text-sm text-gray-600">Puntos Totales</div>
            </div>

            <div className="text-center space-y-2">
              <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Target className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-green-600">{accuracy.toFixed(1)}%</div>
              <div className="text-sm text-gray-600">Precisión</div>
            </div>
          </div>

          <div className="border-t pt-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Preguntas respondidas:</span>
              <span className="font-medium">{session.questions_answered}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Respuestas correctas:</span>
              <span className="font-medium text-green-600">{session.correct_answers}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Respuestas incorrectas:</span>
              <span className="font-medium text-red-600">{session.questions_answered - session.correct_answers}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Promedio por pregunta:</span>
              <span className="font-medium">{averageScore.toFixed(1)} pts</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          onClick={onPlayAgain}
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg font-medium rounded-lg h-auto"
        >
          <RotateCcw className="w-5 h-5 mr-2" />
          Jugar de Nuevo
        </Button>
        <Button
          onClick={onGoHome}
          variant="outline"
          className="flex-1 border-2 border-gray-300 hover:border-gray-400 py-6 text-lg font-medium rounded-lg h-auto bg-transparent"
        >
          <Home className="w-5 h-5 mr-2" />
          Ir al Inicio
        </Button>
      </div>
    </div>
  )
}
