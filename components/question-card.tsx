"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Clock, CheckCircle, XCircle, Lightbulb } from "lucide-react"
import type { Question } from "@/lib/types"

interface QuestionCardProps {
  question: Question
  questionNumber: number
  totalQuestions: number
  timeLeft: number
  onAnswerSubmit: (answer: string, timeTaken: number) => void
  showResult?: boolean
  isCorrect?: boolean
  correctAnswer?: string
  explanation?: string
  pointsEarned?: number
}

export default function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  timeLeft,
  onAnswerSubmit,
  showResult = false,
  isCorrect,
  correctAnswer,
  explanation,
  pointsEarned,
}: QuestionCardProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string>("")
  const [startTime] = useState(Date.now())

  const options = [
    { key: "A", value: question.option_a },
    { key: "B", value: question.option_b },
    { key: "C", value: question.option_c },
    { key: "D", value: question.option_d },
  ]

  const handleSubmit = () => {
    if (selectedAnswer) {
      const timeTaken = Math.floor((Date.now() - startTime) / 1000)
      onAnswerSubmit(selectedAnswer, timeTaken)
    }
  }

  const getDifficultyColor = (difficulty: number) => {
    switch (difficulty) {
      case 1:
        return "bg-green-100 text-green-800"
      case 2:
        return "bg-yellow-100 text-yellow-800"
      case 3:
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getDifficultyText = (difficulty: number) => {
    switch (difficulty) {
      case 1:
        return "Fácil"
      case 2:
        return "Medio"
      case 3:
        return "Difícil"
      default:
        return "Normal"
    }
  }

  const timeProgress = (timeLeft / 30) * 100

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader className="space-y-4">
        <div className="flex items-center justify-between">
          <Badge variant="outline" className="text-sm">
            Pregunta {questionNumber} de {totalQuestions}
          </Badge>
          <Badge className={getDifficultyColor(question.difficulty)}>
            {getDifficultyText(question.difficulty)} • {question.points} pts
          </Badge>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Tiempo restante: {timeLeft}s
            </span>
            {showResult && (
              <span className="flex items-center gap-2 font-medium">
                {isCorrect ? (
                  <>
                    <CheckCircle className="w-4 h-4 text-green-600" />+{pointsEarned} puntos
                  </>
                ) : (
                  <>
                    <XCircle className="w-4 h-4 text-red-600" />0 puntos
                  </>
                )}
              </span>
            )}
          </div>
          <Progress value={timeProgress} className="h-2" />
        </div>

        <CardTitle className="text-2xl font-bold leading-relaxed">{question.question_text}</CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 gap-3">
          {options.map((option) => {
            let buttonClass = "justify-start text-left h-auto p-4 text-base font-medium"
            const isSelected = selectedAnswer === option.value

            if (showResult) {
              if (option.value === correctAnswer) {
                buttonClass += " bg-green-100 border-green-500 text-green-800"
              } else if (isSelected && !isCorrect) {
                buttonClass += " bg-red-100 border-red-500 text-red-800"
              } else {
                buttonClass += " bg-gray-50 text-gray-600"
              }
            } else if (isSelected) {
              buttonClass += " bg-blue-100 border-blue-500 text-blue-800"
            } else {
              buttonClass += " bg-white border-gray-200 hover:bg-gray-50"
            }

            return (
              <Button
                key={option.key}
                variant="outline"
                className={buttonClass}
                onClick={() => !showResult && setSelectedAnswer(option.value)}
                disabled={showResult}
              >
                <span className="flex items-center gap-3 w-full">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm font-bold">
                    {option.key}
                  </span>
                  <span className="flex-1">{option.value}</span>
                  {showResult && option.value === correctAnswer && (
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  )}
                  {showResult && isSelected && option.value !== correctAnswer && (
                    <XCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                  )}
                </span>
              </Button>
            )
          })}
        </div>

        {showResult && explanation && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium text-blue-900 mb-1">Explicación</h4>
                <p className="text-blue-800 text-sm leading-relaxed">{explanation}</p>
              </div>
            </div>
          </div>
        )}

        {!showResult && (
          <Button
            onClick={handleSubmit}
            disabled={!selectedAnswer}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg font-medium rounded-lg h-auto"
          >
            Confirmar Respuesta
          </Button>
        )}
      </CardContent>
    </Card>
  )
}
