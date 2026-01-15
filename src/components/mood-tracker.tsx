"use client"

import { useState, useEffect } from "react"
import { Smile, Meh, Frown, Heart, TrendingUp, Calendar, AlertCircle, BarChart3 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/components/auth/AuthProvider"
import { saveMoodEntry, getMoodEntries } from "@/lib/supabase"

const moods = [
  { icon: Smile, label: "Ótimo", color: "from-green-400 to-emerald-500", value: 5 },
  { icon: Heart, label: "Bem", color: "from-blue-400 to-cyan-500", value: 4 },
  { icon: Meh, label: "Neutro", color: "from-yellow-400 to-amber-500", value: 3 },
  { icon: Frown, label: "Triste", color: "from-orange-400 to-red-500", value: 2 },
  { icon: AlertCircle, label: "Muito mal", color: "from-red-500 to-rose-600", value: 1 },
]

export function MoodTracker() {
  const [selectedMood, setSelectedMood] = useState<number | null>(null)
  const [notes, setNotes] = useState("")
  const [moodHistory, setMoodHistory] = useState<any[]>([])
  const [showInsights, setShowInsights] = useState(false)
  const [loading, setLoading] = useState(false)
  const [saving, setSaving] = useState(false)
  const { user } = useAuth()

  useEffect(() => {
    if (user) {
      loadMoodHistory()
    }
  }, [user])

  const loadMoodHistory = async () => {
    try {
      setLoading(true)
      const data = await getMoodEntries(user!.id)
      setMoodHistory(data)
    } catch (error) {
      console.error('Erro ao carregar histórico:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSave = async () => {
    if (selectedMood && user) {
      try {
        setSaving(true)
        await saveMoodEntry(user.id, selectedMood, notes || undefined)
        await loadMoodHistory() // Recarregar dados
        alert("Humor registrado com sucesso!")
        setSelectedMood(null)
        setNotes("")

        // Verificar padrões de risco
        if (selectedMood <= 2) {
          setShowInsights(true)
        }
      } catch (error) {
        console.error('Erro ao salvar:', error)
        alert("Erro ao salvar registro. Tente novamente.")
      } finally {
        setSaving(false)
      }
    }
  }

  const getMoodColor = (value: number) => {
    const mood = moods.find(m => m.value === value)
    return mood?.color || "from-gray-400 to-gray-500"
  }

  const averageMood = moodHistory.length > 0
    ? (moodHistory.reduce((sum, entry) => sum + entry.mood_value, 0) / moodHistory.length).toFixed(1)
    : "0"

  // Formatar dados para exibição semanal (últimos 7 dias)
  const getWeeklyData = () => {
    const last7Days = moodHistory.slice(-7)
    return last7Days.map(entry => ({
      day: new Date(entry.created_at).toLocaleDateString('pt-BR', { weekday: 'short' }),
      mood: entry.mood_value
    }))
  }

  const weeklyData = getWeeklyData()

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500 mx-auto mb-2"></div>
          <p className="text-gray-600">Carregando histórico...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <Card className="bg-white/80 backdrop-blur-sm border-purple-100">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-purple-500" />
            Como você está se sentindo hoje?
          </CardTitle>
          <CardDescription>
            Registre seu humor diariamente para identificar padrões e receber recomendações personalizadas
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Mood Selection */}
          <div className="grid grid-cols-5 gap-3">
            {moods.map((mood) => {
              const Icon = mood.icon
              const isSelected = selectedMood === mood.value
              return (
                <button
                  key={mood.value}
                  onClick={() => setSelectedMood(mood.value)}
                  className={`flex flex-col items-center gap-2 p-4 rounded-2xl transition-all ${
                    isSelected
                      ? `bg-gradient-to-br ${mood.color} text-white shadow-lg scale-105`
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  <Icon className="w-8 h-8" />
                  <span className="text-xs font-medium">{mood.label}</span>
                </button>
              )
            })}
          </div>

          {/* Notes */}
          {selectedMood && (
            <div className="space-y-3 animate-in fade-in slide-in-from-bottom-4">
              <label className="text-sm font-medium text-gray-700">
                O que aconteceu hoje? (opcional)
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Descreva como foi seu dia, gatilhos, situações importantes..."
                className="w-full min-h-[120px] p-4 rounded-xl border border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-200 outline-none resize-none"
              />
              <Button
                onClick={handleSave}
                variant="gradient"
                className="w-full"
                disabled={saving}
              >
                {saving ? "Salvando..." : "Salvar Registro"}
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Weekly Overview with Data */}
      <Card className="bg-white/80 backdrop-blur-sm border-purple-100">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-6 h-6 text-purple-500" />
            Visão Semanal
          </CardTitle>
          <CardDescription>
            Média da semana: {averageMood} / 5.0
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-7 gap-2">
            {weeklyData.map((entry, index) => {
              const moodColor = getMoodColor(entry.mood)
              return (
                <div key={index} className="text-center">
                  <div className="text-xs text-gray-500 mb-2">{entry.day}</div>
                  <div className={`w-full h-12 bg-gradient-to-br ${moodColor} rounded-lg flex items-center justify-center text-white font-bold shadow-md`}>
                    {entry.mood}
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Insights and Recommendations */}
      {showInsights && (
        <Card className="bg-gradient-to-br from-orange-500 to-red-500 text-white border-0 animate-in fade-in slide-in-from-bottom-4">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="w-6 h-6" />
              Alerta de Bem-Estar
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm opacity-90">
              Notamos que você está se sentindo para baixo. Aqui estão algumas recomendações:
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>Experimente uma meditação para ansiedade (aba Meditação)</span>
              </li>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>Pratique a técnica de respiração Box Breathing</span>
              </li>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>Considere conversar com alguém de confiança</span>
              </li>
            </ul>
            <Button
              onClick={() => setShowInsights(false)}
              variant="outline"
              className="w-full bg-white text-orange-600 hover:bg-gray-100"
            >
              Entendi
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Statistics Card */}
      <Card className="bg-gradient-to-br from-purple-500 to-pink-500 text-white border-0">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="w-6 h-6" />
            Estatísticas
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-3xl font-bold">{moodHistory.length}</div>
              <div className="text-sm opacity-90">Registros</div>
            </div>
            <div>
              <div className="text-3xl font-bold">{averageMood}</div>
              <div className="text-sm opacity-90">Média</div>
            </div>
            <div>
              <div className="text-3xl font-bold">
                {moodHistory.filter(e => e.mood_value >= 4).length}
              </div>
              <div className="text-sm opacity-90">Dias bons</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tips */}
      <Card className="bg-white/80 backdrop-blur-sm border-purple-100">
        <CardHeader>
          <CardTitle>💡 Dica do Dia</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600">
            Registrar seu humor regularmente ajuda a identificar gatilhos emocionais e padrões de comportamento.
            Tente fazer isso no mesmo horário todos os dias para obter insights mais precisos!
          </p>
        </CardContent>
      </Card>
    </div>
  )
}