"use client"

import { useState } from "react"
import { Baby, Heart, Moon, AlertTriangle, BookOpen, Phone } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const epdsQuestions = [
  "Consegui rir e achar graça das coisas",
  "Senti prazer ao pensar no futuro",
  "Me culpei sem necessidade quando as coisas saíam erradas",
  "Fiquei ansiosa ou preocupada sem uma boa razão",
  "Senti medo ou pânico sem um bom motivo",
  "Senti que as coisas estavam me dominando",
  "Tive dificuldade para dormir por estar infeliz",
  "Me senti triste ou arrasada",
  "Fiquei tão infeliz que chorei",
  "Pensei em fazer mal a mim mesma",
]

export function PostpartumModule() {
  const [epdsScore, setEpdsScore] = useState<number | null>(null)
  const [showEPDS, setShowEPDS] = useState(false)

  return (
    <div className="space-y-6">
      <Card className="bg-white/80 backdrop-blur-sm border-pink-100">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Baby className="w-6 h-6 text-pink-500" />
            Apoio para Mães no Pós-Parto
          </CardTitle>
          <CardDescription>
            Suporte especializado para o puerpério com ferramentas científicas e humanizadas
          </CardDescription>
        </CardHeader>
      </Card>

      {/* EPDS Screening */}
      <Card className="bg-white/80 backdrop-blur-sm border-pink-100">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="w-6 h-6 text-pink-500" />
            Escala de Depressão Pós-Parto (EPDS)
          </CardTitle>
          <CardDescription>
            Questionário validado cientificamente para identificar sinais de depressão pós-parto
          </CardDescription>
        </CardHeader>
        <CardContent>
          {!showEPDS ? (
            <div className="space-y-4">
              <p className="text-sm text-gray-600">
                Este questionário ajuda a identificar sintomas de depressão pós-parto. 
                Leva apenas 5 minutos e é completamente confidencial.
              </p>
              <Button onClick={() => setShowEPDS(true)} variant="gradient" className="w-full">
                Iniciar Avaliação
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="space-y-3">
                {epdsQuestions.slice(0, 3).map((question, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-xl">
                    <p className="text-sm font-medium text-gray-800 mb-3">{question}</p>
                    <div className="grid grid-cols-4 gap-2">
                      {["Sempre", "Frequente", "Às vezes", "Nunca"].map((option) => (
                        <Button key={option} variant="outline" size="sm">
                          {option}
                        </Button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 text-center">
                Pergunta 3 de 10
              </p>
            </div>
          )}

          {epdsScore !== null && epdsScore >= 13 && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-red-800 mb-1">
                    Atenção: Sinais de Depressão Pós-Parto
                  </p>
                  <p className="text-sm text-red-700 mb-3">
                    Sua pontuação indica possível depressão pós-parto. É muito importante buscar ajuda profissional.
                  </p>
                  <Button variant="outline" size="sm" className="border-red-300 text-red-700 hover:bg-red-50">
                    <Phone className="w-4 h-4" />
                    Buscar Ajuda Agora
                  </Button>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Maternal Diary */}
      <Card className="bg-white/80 backdrop-blur-sm border-pink-100">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="w-6 h-6 text-pink-500" />
            Diário Emocional Materno
          </CardTitle>
          <CardDescription>
            Registre suas emoções, exaustão e rotina do bebê
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-pink-50 rounded-xl text-center">
              <div className="text-2xl mb-2">😊</div>
              <div className="text-sm font-medium text-gray-700">Humor</div>
              <div className="text-xs text-gray-500 mt-1">Como você está?</div>
            </div>
            <div className="p-4 bg-purple-50 rounded-xl text-center">
              <div className="text-2xl mb-2">😴</div>
              <div className="text-sm font-medium text-gray-700">Sono</div>
              <div className="text-xs text-gray-500 mt-1">Horas dormidas</div>
            </div>
            <div className="p-4 bg-blue-50 rounded-xl text-center">
              <div className="text-2xl mb-2">👶</div>
              <div className="text-sm font-medium text-gray-700">Bebê</div>
              <div className="text-xs text-gray-500 mt-1">Rotina do bebê</div>
            </div>
          </div>
          <Button variant="gradient" className="w-full">
            Registrar Dia
          </Button>
        </CardContent>
      </Card>

      {/* Quick Self-Care */}
      <Card className="bg-white/80 backdrop-blur-sm border-pink-100">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Moon className="w-6 h-6 text-pink-500" />
            Autocuidado Rápido
          </CardTitle>
          <CardDescription>
            Técnicas de 5 minutos para mães exaustas
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-3">
            <Button variant="outline" className="h-auto py-4 flex-col gap-2">
              <span className="text-2xl">🧘‍♀️</span>
              <span className="text-sm">Respiração Rápida</span>
              <span className="text-xs text-gray-500">3 minutos</span>
            </Button>
            <Button variant="outline" className="h-auto py-4 flex-col gap-2">
              <span className="text-2xl">💆‍♀️</span>
              <span className="text-sm">Relaxamento Guiado</span>
              <span className="text-xs text-gray-500">5 minutos</span>
            </Button>
            <Button variant="outline" className="h-auto py-4 flex-col gap-2">
              <span className="text-2xl">🎵</span>
              <span className="text-sm">Sons Relaxantes</span>
              <span className="text-xs text-gray-500">Livre</span>
            </Button>
            <Button variant="outline" className="h-auto py-4 flex-col gap-2">
              <span className="text-2xl">📝</span>
              <span className="text-sm">Redução de Culpa</span>
              <span className="text-xs text-gray-500">5 minutos</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Psychoeducation */}
      <Card className="bg-white/80 backdrop-blur-sm border-pink-100">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-pink-500" />
            Psicoeducação Pós-Parto
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button variant="outline" className="w-full justify-start">
            📚 Baby Blues vs Depressão Pós-Parto
          </Button>
          <Button variant="outline" className="w-full justify-start">
            🤱 Amamentação e Saúde Mental
          </Button>
          <Button variant="outline" className="w-full justify-start">
            😴 Sono e Rotina do Bebê
          </Button>
          <Button variant="outline" className="w-full justify-start">
            👨‍👩‍👧 Rede de Apoio
          </Button>
        </CardContent>
      </Card>

      {/* Emergency Support */}
      <Card className="bg-gradient-to-br from-pink-500 to-rose-500 text-white border-0">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Phone className="w-6 h-6" />
            Ajuda Emergencial
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm opacity-90">
            Se você está em crise ou pensando em fazer mal a si mesma ou ao bebê, 
            busque ajuda imediatamente:
          </p>
          <div className="space-y-2">
            <Button variant="outline" className="w-full bg-white text-pink-600 hover:bg-gray-100">
              📞 CVV - 188 (24h)
            </Button>
            <Button variant="outline" className="w-full bg-white text-pink-600 hover:bg-gray-100">
              🏥 SAMU - 192
            </Button>
            <Button variant="outline" className="w-full bg-white text-pink-600 hover:bg-gray-100">
              🆘 Serviços de Emergência
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
