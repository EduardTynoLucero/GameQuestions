"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Beaker, Clock, Calculator, Shuffle } from "lucide-react"
import type { Category } from "@/lib/types"

interface CategorySelectorProps {
  onCategorySelect: (categoryId?: number) => void
  isLoading?: boolean
}

const categoryIcons = {
  Ciencia: Beaker,
  Historia: Clock,
  Matemáticas: Calculator,
}

export default function CategorySelector({ onCategorySelect, isLoading = false }: CategorySelectorProps) {
  const [categories, setCategories] = useState<Category[]>([])
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchCategories()
  }, [])

  const fetchCategories = async () => {
    try {
      const response = await fetch("/api/categories")
      const data = await response.json()
      setCategories(data.categories || [])
    } catch (error) {
      console.error("Error fetching categories:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleCategorySelect = (categoryId: number) => {
    setSelectedCategory(categoryId)
  }

  const handleStartGame = () => {
    onCategorySelect(selectedCategory || undefined)
  }

  const handleRandomGame = () => {
    onCategorySelect(undefined)
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <div className="mx-auto w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
          <BookOpen className="w-10 h-10 text-blue-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900">Elige tu Desafío</h1>
        <p className="text-xl text-gray-600">Selecciona una categoría o juega con preguntas aleatorias</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category) => {
          const IconComponent = categoryIcons[category.name as keyof typeof categoryIcons] || BookOpen
          const isSelected = selectedCategory === category.id

          return (
            <Card
              key={category.id}
              className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                isSelected ? "ring-2 ring-blue-500 shadow-lg" : "hover:shadow-md"
              }`}
              onClick={() => handleCategorySelect(category.id)}
            >
              <CardHeader className="text-center pb-4">
                <div
                  className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${category.color}20` }}
                >
                  <IconComponent className="w-8 h-8" style={{ color: category.color }} />
                </div>
                <CardTitle className="text-xl font-bold">{category.name}</CardTitle>
                <CardDescription className="text-sm">{category.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Badge
                  variant="secondary"
                  className="w-full justify-center py-2"
                  style={{
                    backgroundColor: isSelected ? category.color : undefined,
                    color: isSelected ? "white" : undefined,
                  }}
                >
                  {isSelected ? "Seleccionado" : "Seleccionar"}
                </Badge>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          onClick={handleStartGame}
          disabled={!selectedCategory || isLoading}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-medium rounded-lg h-auto"
        >
          {isLoading ? "Iniciando..." : "Comenzar Juego"}
        </Button>
        <Button
          onClick={handleRandomGame}
          disabled={isLoading}
          variant="outline"
          className="border-2 border-gray-300 hover:border-gray-400 px-8 py-6 text-lg font-medium rounded-lg h-auto bg-transparent"
        >
          <Shuffle className="w-5 h-5 mr-2" />
          Preguntas Aleatorias
        </Button>
      </div>
    </div>
  )
}
