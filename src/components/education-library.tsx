"use client"

import { BookOpen, Video, Headphones, FileText, Play } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const categories = [
  {
    id: "anxiety",
    title: "Ansiedade",
    icon: "😰",
    color: "from-blue-400 to-cyan-500",
    topics: [
      "O que é ansiedade?",
      "Tipos de transtornos de ansiedade",
      "Sintomas físicos e emocionais",
      "Técnicas de manejo",
    ],
  },
  {
    id: "depression",
    title: "Depressão",
    icon: "😔",
    color: "from-purple-400 to-pink-500",
    topics: [
      "Entendendo a depressão",
      "Diferença entre tristeza e depressão",
      "Sinais de alerta",
      "Quando buscar ajuda",
    ],
  },
  {
    id: "stress",
    title: "Estresse",
    icon: "😫",
    color: "from-orange-400 to-red-500",
    topics: [
      "O que é estresse?",
      "Estresse agudo vs crônico",
      "Impactos na saúde",
      "Gestão do estresse",
    ],
  },
  {
    id: "selfcare",
    title: "Autocuidado",
    icon: "💆",
    color: "from-emerald-400 to-teal-500",
    topics: [
      "Importância do autocuidado",
      "Rotinas saudáveis",
      "Sono e alimentação",
      "Exercícios físicos",
    ],
  },
]

const contentTypes = [
  { type: "article", icon: FileText, label: "Artigos", count: 45 },
  { type: "video", icon: Video, label: "Vídeos", count: 28 },
  { type: "audio", icon: Headphones, label: "Áudios", count: 32 },
  { type: "course", icon: Play, label: "Cursos", count: 12 },
]

export function EducationLibrary() {
  return (
    <div className="space-y-6">
      <Card className="bg-white/80 backdrop-blur-sm border-emerald-100">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-emerald-500" />
            Biblioteca de Psicoeducação
          </CardTitle>
          <CardDescription>
            Aprenda sobre saúde mental com conteúdo científico e acessível
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Content Types */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {contentTypes.map((item) => {
          const Icon = item.icon
          return (
            <Card key={item.type} className="bg-white/80 backdrop-blur-sm border-gray-200 hover:shadow-lg transition-all cursor-pointer">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-2">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-base">{item.label}</CardTitle>
                <CardDescription className="text-xs">{item.count} disponíveis</CardDescription>
              </CardHeader>
            </Card>
          )
        })}
      </div>

      {/* Categories */}
      <div className="space-y-4">
        {categories.map((category) => (
          <Card key={category.id} className="bg-white/80 backdrop-blur-sm border-gray-200">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center text-2xl`}>
                  {category.icon}
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                  <CardDescription>{category.topics.length} tópicos disponíveis</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {category.topics.map((topic, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full justify-start hover:bg-gray-50"
                  >
                    <span className="text-sm">{topic}</span>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Featured Course */}
      <Card className="bg-gradient-to-br from-emerald-500 to-teal-500 text-white border-0">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Play className="w-6 h-6" />
            Curso em Destaque
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">
              Fundamentos da Saúde Mental
            </h3>
            <p className="text-sm opacity-90 mb-4">
              Curso completo com 8 módulos sobre ansiedade, depressão, autoconhecimento e técnicas de regulação emocional.
            </p>
            <div className="flex items-center gap-4 text-sm opacity-90 mb-4">
              <span>⏱️ 2 horas</span>
              <span>📚 8 módulos</span>
              <span>🎓 Certificado</span>
            </div>
          </div>
          <Button variant="outline" className="w-full bg-white text-emerald-600 hover:bg-gray-100">
            Começar Curso Gratuito
          </Button>
        </CardContent>
      </Card>

      {/* Quick Guides */}
      <Card className="bg-white/80 backdrop-blur-sm border-gray-200">
        <CardHeader>
          <CardTitle>Guias Práticos Rápidos</CardTitle>
          <CardDescription>
            Conteúdos curtos para consulta rápida
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-3">
            <Button variant="outline" className="h-auto py-4 flex-col gap-2 items-start">
              <span className="text-lg">📋</span>
              <span className="text-sm font-medium">Técnicas de Respiração</span>
              <span className="text-xs text-gray-500">Guia ilustrado - 2 min</span>
            </Button>
            <Button variant="outline" className="h-auto py-4 flex-col gap-2 items-start">
              <span className="text-lg">🧠</span>
              <span className="text-sm font-medium">Entendendo a Ansiedade</span>
              <span className="text-xs text-gray-500">Infográfico - 3 min</span>
            </Button>
            <Button variant="outline" className="h-auto py-4 flex-col gap-2 items-start">
              <span className="text-lg">💪</span>
              <span className="text-sm font-medium">Construindo Resiliência</span>
              <span className="text-xs text-gray-500">Card interativo - 5 min</span>
            </Button>
            <Button variant="outline" className="h-auto py-4 flex-col gap-2 items-start">
              <span className="text-lg">😴</span>
              <span className="text-sm font-medium">Higiene do Sono</span>
              <span className="text-xs text-gray-500">Checklist - 2 min</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
