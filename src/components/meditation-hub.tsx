"use client"

import { useState, useEffect, useRef } from "react"
import { Play, Pause, Wind, Sparkles, Volume2, Download, RotateCcw, Clock } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const meditations = [
  {
    id: 1,
    title: "Respiração Box Breathing",
    description: "Técnica usada por militares para reduzir ansiedade",
    duration: 5,
    category: "Respiração",
    color: "from-blue-400 to-cyan-500",
  },
  {
    id: 2,
    title: "Meditação para Ansiedade",
    description: "Acalme sua mente e reduza pensamentos acelerados",
    duration: 10,
    category: "Ansiedade",
    color: "from-purple-400 to-pink-500",
  },
  {
    id: 3,
    title: "Grounding 5-4-3-2-1",
    description: "Técnica rápida para crises de ansiedade",
    duration: 3,
    category: "Emergência",
    color: "from-orange-400 to-red-500",
  },
  {
    id: 4,
    title: "Meditação para Dormir",
    description: "Relaxamento profundo para uma noite tranquila",
    duration: 15,
    category: "Sono",
    color: "from-indigo-400 to-purple-500",
  },
  {
    id: 5,
    title: "Respiração 4-7-8",
    description: "Técnica para reduzir estresse rapidamente",
    duration: 5,
    category: "Respiração",
    color: "from-emerald-400 to-teal-500",
  },
  {
    id: 6,
    title: "Meditação para Mães",
    description: "Autocuidado especial para o puerpério",
    duration: 8,
    category: "Pós-parto",
    color: "from-pink-400 to-rose-500",
  },
]

const soundscapes = [
  { id: 1, name: "Chuva Suave", icon: "🌧️" },
  { id: 2, name: "Ondas do Mar", icon: "🌊" },
  { id: 3, name: "Floresta", icon: "🌲" },
  { id: 4, name: "Fogo de Lareira", icon: "🔥" },
]

export function MeditationHub() {
  const [playing, setPlaying] = useState<number | null>(null)
  const [selectedSound, setSelectedSound] = useState<number | null>(null)
  const [timeRemaining, setTimeRemaining] = useState<number>(0)
  const [totalSessions, setTotalSessions] = useState(0)
  const [totalMinutes, setTotalMinutes] = useState(0)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    // Simular carregamento de estatísticas
    setTotalSessions(12)
    setTotalMinutes(87)
  }, [])

  useEffect(() => {
    if (playing && timeRemaining > 0) {
      timerRef.current = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            handleComplete()
            return 0
          }
          return prev - 1
        })
      }, 1000)
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [playing, timeRemaining])

  const handlePlay = (meditationId: number) => {
    if (playing === meditationId) {
      setPlaying(null)
    } else {
      const meditation = meditations.find(m => m.id === meditationId)
      if (meditation) {
        setPlaying(meditationId)
        setTimeRemaining(meditation.duration * 60) // converter para segundos
      }
    }
  }

  const handleComplete = () => {
    const meditation = meditations.find(m => m.id === playing)
    if (meditation) {
      setTotalSessions(prev => prev + 1)
      setTotalMinutes(prev => prev + meditation.duration)
      alert(`Parabéns! Você completou: ${meditation.title}`)
    }
    setPlaying(null)
    setTimeRemaining(0)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className="space-y-6">
      {/* Statistics Card */}
      <Card className="bg-gradient-to-br from-purple-500 to-pink-500 text-white border-0">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="w-6 h-6" />
            Seu Progresso
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-3xl font-bold">{totalSessions}</div>
              <div className="text-sm opacity-90">Sessões</div>
            </div>
            <div>
              <div className="text-3xl font-bold">{totalMinutes}</div>
              <div className="text-sm opacity-90">Minutos</div>
            </div>
            <div>
              <div className="text-3xl font-bold">
                {totalSessions > 0 ? Math.round(totalMinutes / totalSessions) : 0}
              </div>
              <div className="text-sm opacity-90">Média/sessão</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Active Session Timer */}
      {playing && timeRemaining > 0 && (
        <Card className="bg-gradient-to-br from-indigo-500 to-purple-500 text-white border-0 animate-in fade-in slide-in-from-bottom-4">
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <Clock className="w-16 h-16 mx-auto animate-pulse" />
              <div className="text-5xl font-bold">{formatTime(timeRemaining)}</div>
              <p className="text-sm opacity-90">
                {meditations.find(m => m.id === playing)?.title}
              </p>
              <div className="flex gap-3 justify-center">
                <Button
                  onClick={() => setPlaying(null)}
                  variant="outline"
                  className="bg-white text-purple-600 hover:bg-gray-100"
                >
                  <Pause className="w-4 h-4" />
                  Pausar
                </Button>
                <Button
                  onClick={handleComplete}
                  variant="outline"
                  className="bg-white text-purple-600 hover:bg-gray-100"
                >
                  <RotateCcw className="w-4 h-4" />
                  Concluir
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <Card className="bg-white/80 backdrop-blur-sm border-purple-100">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-purple-500" />
            Meditações e Técnicas
          </CardTitle>
          <CardDescription>
            Práticas guiadas para ansiedade, depressão, foco e bem-estar
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {meditations.map((meditation) => (
              <Card key={meditation.id} className="border-gray-200 hover:shadow-lg transition-all">
                <CardHeader>
                  <div className={`w-12 h-12 bg-gradient-to-br ${meditation.color} rounded-2xl flex items-center justify-center mb-2`}>
                    <Wind className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{meditation.title}</CardTitle>
                  <CardDescription>{meditation.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">{meditation.duration} min</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                      {meditation.category}
                    </span>
                  </div>
                  <Button
                    onClick={() => handlePlay(meditation.id)}
                    variant={playing === meditation.id ? "outline" : "gradient"}
                    className="w-full"
                  >
                    {playing === meditation.id ? (
                      <>
                        <Pause className="w-4 h-4" />
                        Em andamento
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4" />
                        Iniciar
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Soundscapes */}
      <Card className="bg-white/80 backdrop-blur-sm border-purple-100">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Volume2 className="w-6 h-6 text-purple-500" />
            Sons Relaxantes
          </CardTitle>
          <CardDescription>
            Ambientes sonoros para concentração e relaxamento
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {soundscapes.map((sound) => (
              <button
                key={sound.id}
                onClick={() => setSelectedSound(selectedSound === sound.id ? null : sound.id)}
                className={`p-6 rounded-2xl transition-all ${
                  selectedSound === sound.id
                    ? "bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-lg scale-105"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                <div className="text-4xl mb-2">{sound.icon}</div>
                <div className="text-sm font-medium">{sound.name}</div>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Offline Mode */}
      <Card className="bg-gradient-to-br from-emerald-500 to-teal-500 text-white border-0">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Download className="w-6 h-6" />
            Modo Offline
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm opacity-90 mb-4">
            Baixe suas meditações favoritas para praticar sem conexão com a internet
          </p>
          <Button variant="outline" className="bg-white text-emerald-600 hover:bg-gray-100">
            Gerenciar Downloads
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
