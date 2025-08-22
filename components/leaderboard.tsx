"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Trophy, Medal, Award, Target, TrendingUp } from "lucide-react"

interface LeaderboardEntry {
  username: string
  display_name: string
  total_score: number
  games_played: number
  accuracy: number
}

interface UserStats {
  total_score: number
  games_played: number
  correct_answers: number
  total_questions: number
  accuracy: number
  average_score: number
  rank: number
}

export default function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([])
  const [userStats, setUserStats] = useState<UserStats | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const [leaderboardResponse, statsResponse] = await Promise.all([
        fetch("/api/leaderboard"),
        fetch("/api/user/stats"),
      ])

      if (leaderboardResponse.ok) {
        const leaderboardData = await leaderboardResponse.json()
        setLeaderboard(leaderboardData.leaderboard || [])
      }

      if (statsResponse.ok) {
        const statsData = await statsResponse.json()
        setUserStats(statsData.stats)
      }
    } catch (error) {
      console.error("Error fetching data:", error)
    } finally {
      setLoading(false)
    }
  }

  const getRankIcon = (position: number) => {
    switch (position) {
      case 1:
        return <Trophy className="w-6 h-6 text-yellow-500" />
      case 2:
        return <Medal className="w-6 h-6 text-gray-400" />
      case 3:
        return <Award className="w-6 h-6 text-amber-600" />
      default:
        return (
          <span className="w-6 h-6 flex items-center justify-center text-sm font-bold text-gray-500">#{position}</span>
        )
    }
  }

  const getRankBadgeColor = (position: number) => {
    switch (position) {
      case 1:
        return "bg-yellow-100 text-yellow-800 border-yellow-300"
      case 2:
        return "bg-gray-100 text-gray-800 border-gray-300"
      case 3:
        return "bg-amber-100 text-amber-800 border-amber-300"
      default:
        return "bg-blue-100 text-blue-800 border-blue-300"
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* User Stats Card */}
      {userStats && (
        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-blue-900">
              <TrendingUp className="w-6 h-6" />
              Tus Estadísticas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{userStats.rank || "N/A"}</div>
                <div className="text-sm text-gray-600">Posición Global</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">{userStats.total_score}</div>
                <div className="text-sm text-gray-600">Puntos Totales</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">{userStats.accuracy.toFixed(1)}%</div>
                <div className="text-sm text-gray-600">Precisión</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">{userStats.average_score.toFixed(1)}</div>
                <div className="text-sm text-gray-600">Promedio por Juego</div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Leaderboard */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Trophy className="w-8 h-8 text-yellow-500" />
            Tabla de Clasificación
          </CardTitle>
        </CardHeader>
        <CardContent>
          {leaderboard.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              <Trophy className="w-16 h-16 mx-auto mb-4 text-gray-300" />
              <p className="text-lg">No hay datos de clasificación aún</p>
              <p className="text-sm">¡Sé el primero en jugar y aparecer en el ranking!</p>
            </div>
          ) : (
            <div className="space-y-3">
              {leaderboard.map((entry, index) => {
                const position = index + 1
                const isTopThree = position <= 3

                return (
                  <div
                    key={entry.username}
                    className={`flex items-center gap-4 p-4 rounded-lg border transition-all hover:shadow-md ${
                      isTopThree
                        ? "bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200"
                        : "bg-gray-50 border-gray-200"
                    }`}
                  >
                    {/* Rank */}
                    <div className="flex-shrink-0 w-12 flex justify-center">{getRankIcon(position)}</div>

                    {/* Avatar */}
                    <Avatar className="w-12 h-12">
                      <AvatarFallback className="bg-blue-100 text-blue-600 font-semibold">
                        {entry.display_name.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>

                    {/* User Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-gray-900 truncate">{entry.display_name}</h3>
                        {isTopThree && (
                          <Badge className={`text-xs ${getRankBadgeColor(position)}`}>
                            {position === 1 ? "Campeón" : position === 2 ? "Subcampeón" : "Tercer Lugar"}
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-gray-500">@{entry.username}</p>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center gap-6 text-sm">
                      <div className="text-center">
                        <div className="font-bold text-blue-600">{entry.total_score}</div>
                        <div className="text-gray-500">Puntos</div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-green-600">{entry.games_played}</div>
                        <div className="text-gray-500">Juegos</div>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center gap-1">
                          <Target className="w-4 h-4 text-purple-600" />
                          <span className="font-bold text-purple-600">{entry.accuracy.toFixed(1)}%</span>
                        </div>
                        <div className="text-gray-500">Precisión</div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
