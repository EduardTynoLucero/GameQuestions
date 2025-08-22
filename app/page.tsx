"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Play, Trophy, Users, LogOut } from "lucide-react"
import Link from "next/link"

interface User {
  id: number
  email: string
  display_name?: string
  total_score: number
  games_played: number
  correct_answers: number
  total_questions: number
}

export default function Home() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = async () => {
    try {
      const response = await fetch("/api/auth/me")
      if (response.ok) {
        const data = await response.json()
        setUser(data.user)
      } else {
        router.push("/auth/login")
      }
    } catch (error) {
      console.error("Auth check failed:", error)
      router.push("/auth/login")
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" })
      router.push("/auth/login")
    } catch (error) {
      console.error("Logout failed:", error)
    }
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-xl font-semibold">Cargando...</div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  const accuracy = user.total_questions > 0 ? ((user.correct_answers / user.total_questions) * 100).toFixed(1) : "0"

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">EduGame</h1>
              <p className="text-gray-600">Aprende jugando</p>
            </div>
          </div>
          <Button onClick={handleLogout} variant="outline" size="sm">
            <LogOut className="h-4 w-4 mr-2" />
            Salir
          </Button>
        </div>

        {/* Welcome Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            ¡Bienvenido, {user.display_name || user.email.split("@")[0]}!
          </h2>
          <p className="text-xl text-gray-600 mb-8">¿Listo para poner a prueba tus conocimientos?</p>
          <Link href="/game">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-medium rounded-lg h-auto">
              <Play className="w-6 h-6 mr-2" />
              Comenzar a Jugar
            </Button>
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                <Trophy className="w-6 h-6 text-blue-600" />
              </div>
              <CardTitle className="text-2xl font-bold text-blue-600">{user.total_score}</CardTitle>
              <CardDescription>Puntos Totales</CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2">
                <Play className="w-6 h-6 text-green-600" />
              </div>
              <CardTitle className="text-2xl font-bold text-green-600">{user.games_played}</CardTitle>
              <CardDescription>Juegos Jugados</CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-2">
                <Users className="w-6 h-6 text-yellow-600" />
              </div>
              <CardTitle className="text-2xl font-bold text-yellow-600">{accuracy}%</CardTitle>
              <CardDescription>Precisión</CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <Link href="/game">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Play className="w-6 h-6 text-blue-600" />
                  Juego Rápido
                </CardTitle>
                <CardDescription>Comienza un juego con preguntas aleatorias de todas las categorías</CardDescription>
              </CardHeader>
            </Link>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <Link href="/ranking">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Trophy className="w-6 h-6 text-yellow-600" />
                  Ver Ranking
                </CardTitle>
                <CardDescription>Consulta tu posición en la tabla de clasificación global</CardDescription>
              </CardHeader>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  )
}
