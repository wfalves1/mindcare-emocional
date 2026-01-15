"use client"

import { useState } from "react"
import { Users, Heart, Shield, MessageCircle, TrendingUp, AlertCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const quickTests = [
  {
    id: 1,
    title: "Como está seu humor?",
    icon: Heart,
    questions: 5,
    time: "2 min",
    color: "from-blue-400 to-cyan-500",
  },
  {
    id: 2,
    title: "Nível de Estresse",
    icon: TrendingUp,
    questions: 7,
    time: "3 min",
    color: "from-purple-400 to-pink-500",
  },
  {
    id: 3,
    title: "Autoestima",
    icon: Shield,
    questions: 6,
    time: "3 min",
    color: "from-emerald-400 to-teal-500",
  },
  {
    id: 4,
    title: "Bullying",
    icon: AlertCircle,
    questions: 8,
    time: "4 min",
    color: "from-orange-400 to-red-500",
  },
]

const topics = [
  { emoji: "😰", title: "Ansiedade", description: "O que é e como lidar" },
  { emoji: "😔", title: "Tristeza", description: "Quando procurar ajuda" },
  { emoji: "💪", title: "Autoestima", description: "Construindo confiança" },
  { emoji: "🎯", title: "Foco", description: "Técnicas de concentração" },
  { emoji: "👥", title: "Amizades", description: "Relações saudáveis" },
  { emoji: "📱", title: "Redes Sociais", description: "Uso consciente" },
]

export function YouthModule() {
  const [selectedTest, setSelectedTest] = useState<number | null>(null)

  return (
    <div className="space-y-6">
      <Card className="bg-white/80 backdrop-blur-sm border-orange-100">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-6 h-6 text-orange-500" />
            Espaço Jovem
          </CardTitle>
          <CardDescription>
            Ferramentas e conteúdos adaptados para adolescentes e jovens adultos
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Quick Tests */}
      <Card className="bg-white/80 backdrop-blur-sm border-orange-100">
        <CardHeader>
          <CardTitle>Testes Rápidos</CardTitle>
          <CardDescription>
            Descubra como você está se sentindo com questionários simples
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {quickTests.map((test) => {
              const Icon = test.icon
              return (
                <Card key={test.id} className="border-gray-200 hover:shadow-lg transition-all cursor-pointer">
                  <CardHeader>
                    <div className={`w-12 h-12 bg-gradient-to-br ${test.color} rounded-2xl flex items-center justify-center mb-2`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{test.title}</CardTitle>
                    <CardDescription>
                      {test.questions} perguntas • {test.time}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="gradient" className="w-full">
                      Fazer Teste
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Youth Diary */}
      <Card className="bg-white/80 backdrop-blur-sm border-orange-100">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-orange-500" />
            Diário Emocional
          </CardTitle>
          <CardDescription>
            Escreva sobre seu dia, suas emoções e o que está rolando
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-5 gap-2">
            {["😊", "😐", "😔", "😰", "😡"].map((emoji, index) => (
              <button
                key={index}
                className="p-4 bg-gray-100 hover:bg-gray-200 rounded-xl transition-all text-3xl"
              >
                {emoji}
              </button>
            ))}
          </div>
          <textarea
            placeholder="Como foi seu dia? O que você sentiu? O que aconteceu na escola?"
            className="w-full min-h-[120px] p-4 rounded-xl border border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none resize-none"
          />
          <div className="flex gap-2">
            <Button variant="outline" className="flex-1">
              💾 Salvar
            </Button>
            <Button variant="gradient" className="flex-1">
              📊 Ver Histórico
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Educational Topics */}
      <Card className="bg-white/80 backdrop-blur-sm border-orange-100">
        <CardHeader>
          <CardTitle>Aprenda Sobre Saúde Mental</CardTitle>
          <CardDescription>
            Conteúdos em linguagem jovem sobre temas importantes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-3">
            {topics.map((topic, index) => (
              <Card key={index} className="border-gray-200 hover:shadow-lg transition-all cursor-pointer">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-2">{topic.emoji}</div>
                  <CardTitle className="text-base">{topic.title}</CardTitle>
                  <CardDescription className="text-xs">{topic.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Techniques */}
      <Card className="bg-white/80 backdrop-blur-sm border-orange-100">
        <CardHeader>
          <CardTitle>Técnicas Rápidas</CardTitle>
          <CardDescription>
            Ferramentas práticas para quando você precisar
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-3">
            <Button variant="outline" className="h-auto py-4 flex-col gap-2">
              <span className="text-2xl">🧘</span>
              <span className="text-sm font-medium">Respiração Anti-Ansiedade</span>
              <span className="text-xs text-gray-500">3 minutos</span>
            </Button>
            <Button variant="outline" className="h-auto py-4 flex-col gap-2">
              <span className="text-2xl">🎯</span>
              <span className="text-sm font-medium">Foco para Estudar</span>
              <span className="text-xs text-gray-500">5 minutos</span>
            </Button>
            <Button variant="outline" className="h-auto py-4 flex-col gap-2">
              <span className="text-2xl">💪</span>
              <span className="text-sm font-medium">Boost de Autoestima</span>
              <span className="text-xs text-gray-500">5 minutos</span>
            </Button>
            <Button variant="outline" className="h-auto py-4 flex-col gap-2">
              <span className="text-2xl">😌</span>
              <span className="text-sm font-medium">Relaxamento Rápido</span>
              <span className="text-xs text-gray-500">3 minutos</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* School & Social */}
      <Card className="bg-white/80 backdrop-blur-sm border-orange-100">
        <CardHeader>
          <CardTitle>Escola e Relações</CardTitle>
          <CardDescription>
            Dicas para lidar com pressão escolar e relacionamentos
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button variant="outline" className="w-full justify-start">
            📚 Lidando com Pressão Escolar
          </Button>
          <Button variant="outline" className="w-full justify-start">
            👥 Fazendo Amizades Saudáveis
          </Button>
          <Button variant="outline" className="w-full justify-start">
            🚫 Dizendo Não ao Bullying
          </Button>
          <Button variant="outline" className="w-full justify-start">
            💬 Conversando com os Pais
          </Button>
        </CardContent>
      </Card>

      {/* Emergency Help */}
      <Card className="bg-gradient-to-br from-orange-500 to-red-500 text-white border-0">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="w-6 h-6" />
            Precisa de Ajuda Agora?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm opacity-90">
            Se você está passando por uma crise, pensando em se machucar ou precisa conversar urgente:
          </p>
          <div className="space-y-2">
            <Button variant="outline" className="w-full bg-white text-orange-600 hover:bg-gray-100">
              📞 CVV - 188 (24h grátis)
            </Button>
            <Button variant="outline" className="w-full bg-white text-orange-600 hover:bg-gray-100">
              💬 Chat Anônimo
            </Button>
            <Button variant="outline" className="w-full bg-white text-orange-600 hover:bg-gray-100">
              🆘 Ajuda Imediata
            </Button>
          </div>
          <p className="text-xs opacity-75 text-center mt-4">
            Você não está sozinho. Sempre há alguém pronto para te ouvir.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
