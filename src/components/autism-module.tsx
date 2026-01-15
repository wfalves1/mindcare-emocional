"use client"

import { useState } from "react"
import { Brain, Volume2, VolumeX, Clock, Calendar, Lightbulb, Users, BookOpen, Shield } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const sensoryLevels = [
  { level: 1, label: "Muito Baixo", color: "bg-green-500" },
  { level: 2, label: "Baixo", color: "bg-blue-500" },
  { level: 3, label: "Moderado", color: "bg-yellow-500" },
  { level: 4, label: "Alto", color: "bg-orange-500" },
  { level: 5, label: "Sobrecarga", color: "bg-red-500" },
]

const educationTopics = [
  { title: "O que é TEA?", icon: Brain, description: "Entenda o Transtorno do Espectro Autista" },
  { title: "Níveis de Suporte", icon: Shield, description: "Conheça os diferentes níveis de apoio" },
  { title: "Regulação Sensorial", icon: Volume2, description: "Como lidar com estímulos sensoriais" },
  { title: "Neurodiversidade", icon: Users, description: "Celebrando as diferenças neurológicas" },
]

export function AutismModule() {
  const [lowStimMode, setLowStimMode] = useState(false)
  const [sensoryLevel, setSensoryLevel] = useState<number | null>(null)

  return (
    <div className={`space-y-6 ${lowStimMode ? "filter grayscale" : ""}`}>
      {/* Header with Low Stim Toggle */}
      <Card className="bg-white/80 backdrop-blur-sm border-indigo-100">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Brain className="w-6 h-6 text-indigo-500" />
                Módulo Autismo
              </CardTitle>
              <CardDescription>
                Ferramentas especializadas para pessoas autistas e familiares
              </CardDescription>
            </div>
            <Button
              onClick={() => setLowStimMode(!lowStimMode)}
              variant={lowStimMode ? "gradient" : "outline"}
              size="sm"
            >
              {lowStimMode ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              {lowStimMode ? "Modo Normal" : "Baixo Estímulo"}
            </Button>
          </div>
        </CardHeader>
      </Card>

      {/* Sensory Overload Monitor */}
      <Card className="bg-white/80 backdrop-blur-sm border-indigo-100">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Volume2 className="w-6 h-6 text-indigo-500" />
            Monitor de Sobrecarga Sensorial
          </CardTitle>
          <CardDescription>
            Registre seu nível de estímulo sensorial atual
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-5 gap-2">
            {sensoryLevels.map((item) => (
              <button
                key={item.level}
                onClick={() => setSensoryLevel(item.level)}
                className={`p-4 rounded-xl transition-all ${
                  sensoryLevel === item.level
                    ? `${item.color} text-white shadow-lg scale-105`
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                <div className="text-2xl font-bold mb-1">{item.level}</div>
                <div className="text-xs">{item.label}</div>
              </button>
            ))}
          </div>

          {sensoryLevel && sensoryLevel >= 4 && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-xl animate-in fade-in slide-in-from-bottom-4">
              <p className="text-sm text-red-800 font-medium mb-2">⚠️ Sobrecarga detectada</p>
              <p className="text-sm text-red-700">
                Recomendamos: encontrar um ambiente calmo, usar fones com cancelamento de ruído, 
                praticar respiração profunda ou usar técnicas de pressão profunda.
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Visual Timer */}
      <Card className="bg-white/80 backdrop-blur-sm border-indigo-100">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="w-6 h-6 text-indigo-500" />
            Timer Visual
          </CardTitle>
          <CardDescription>
            Organize seu tempo com visualização clara (estilo Time Timer)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center">
            <div className="relative w-48 h-48 bg-gray-100 rounded-full flex items-center justify-center">
              <div className="text-4xl font-bold text-gray-700">15:00</div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2 mt-4">
            {[5, 10, 15, 30].map((min) => (
              <Button key={min} variant="outline" size="sm">
                {min} min
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Daily Routine */}
      <Card className="bg-white/80 backdrop-blur-sm border-indigo-100">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-6 h-6 text-indigo-500" />
            Agenda Visual Estruturada
          </CardTitle>
          <CardDescription>
            Organize sua rotina diária com suporte visual
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { time: "08:00", activity: "Café da manhã", icon: "🍳" },
              { time: "09:00", activity: "Atividade matinal", icon: "📚" },
              { time: "12:00", activity: "Almoço", icon: "🍽️" },
              { time: "14:00", activity: "Tempo livre", icon: "🎮" },
              { time: "18:00", activity: "Jantar", icon: "🍕" },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4 p-3 bg-gray-50 rounded-xl">
                <div className="text-3xl">{item.icon}</div>
                <div className="flex-1">
                  <div className="font-medium text-gray-800">{item.activity}</div>
                  <div className="text-sm text-gray-500">{item.time}</div>
                </div>
                <Button variant="ghost" size="sm">✓</Button>
              </div>
            ))}
          </div>
          <Button variant="gradient" className="w-full mt-4">
            Adicionar Atividade
          </Button>
        </CardContent>
      </Card>

      {/* Psychoeducation */}
      <Card className="bg-white/80 backdrop-blur-sm border-indigo-100">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-indigo-500" />
            Psicoeducação sobre Autismo
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-3">
            {educationTopics.map((topic, index) => {
              const Icon = topic.icon
              return (
                <Card key={index} className="border-gray-200 hover:shadow-lg transition-all cursor-pointer">
                  <CardHeader>
                    <div className="w-10 h-10 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-xl flex items-center justify-center mb-2">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <CardTitle className="text-base">{topic.title}</CardTitle>
                    <CardDescription className="text-sm">{topic.description}</CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Self-Regulation Tools */}
      <Card className="bg-gradient-to-br from-indigo-500 to-purple-500 text-white border-0">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="w-6 h-6" />
            Ferramentas de Autorregulação
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
              Pressão Profunda
            </Button>
            <Button variant="outline" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
              Respiração Guiada
            </Button>
            <Button variant="outline" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
              Movimento Rítmico
            </Button>
            <Button variant="outline" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
              Estímulo Visual
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Family Support */}
      <Card className="bg-white/80 backdrop-blur-sm border-indigo-100">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-6 h-6 text-indigo-500" />
            Apoio para Familiares
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button variant="outline" className="w-full justify-start">
            📖 Guia de Convivência
          </Button>
          <Button variant="outline" className="w-full justify-start">
            🆘 Manejo de Crise Sensorial
          </Button>
          <Button variant="outline" className="w-full justify-start">
            💬 Comunicação Eficaz
          </Button>
          <Button variant="outline" className="w-full justify-start">
            ⚖️ Guia de Direitos
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
