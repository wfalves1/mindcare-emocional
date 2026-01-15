"use client"

import { useState } from "react"
import { Brain, Heart, Baby, Sparkles, Users, BookOpen, Activity, Settings } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MoodTracker } from "@/components/mood-tracker"
import { MeditationHub } from "@/components/meditation-hub"
import { AutismModule } from "@/components/autism-module"
import { PostpartumModule } from "@/components/postpartum-module"
import { YouthModule } from "@/components/youth-module"
import { EducationLibrary } from "@/components/education-library"
import { EmergencyButton } from "@/components/emergency-button"
import { FeedbackSystem } from "@/components/feedback-system"
import { PrivacySettings } from "@/components/privacy-settings"
import { AuthForm } from "@/components/auth/AuthForm"
import { useAuth } from "@/components/auth/AuthProvider"

export default function MindCarePage() {
  const [activeTab, setActiveTab] = useState("home")
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto">
            <Brain className="w-8 h-8 text-white animate-pulse" />
          </div>
          <p className="text-gray-600">Carregando MindCare...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return <AuthForm />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-purple-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-2 rounded-2xl">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  MindCare
                </h1>
                <p className="text-xs text-gray-500">Cuidando da sua saúde mental</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setActiveTab("settings")}
                className="hidden sm:flex"
              >
                <Settings className="w-4 h-4" />
                Configurações
              </Button>
              <EmergencyButton />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          {/* Navigation */}
          <TabsList className="grid grid-cols-4 lg:grid-cols-8 gap-2 bg-white/60 backdrop-blur-sm p-2 rounded-2xl h-auto">
            <TabsTrigger value="home" className="flex flex-col gap-1 py-3 data-[state=active]:bg-gradient-to-br data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white">
              <Heart className="w-4 h-4" />
              <span className="text-xs">Início</span>
            </TabsTrigger>
            <TabsTrigger value="mood" className="flex flex-col gap-1 py-3 data-[state=active]:bg-gradient-to-br data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white">
              <Activity className="w-4 h-4" />
              <span className="text-xs">Humor</span>
            </TabsTrigger>
            <TabsTrigger value="meditation" className="flex flex-col gap-1 py-3 data-[state=active]:bg-gradient-to-br data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs">Meditação</span>
            </TabsTrigger>
            <TabsTrigger value="education" className="flex flex-col gap-1 py-3 data-[state=active]:bg-gradient-to-br data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white">
              <BookOpen className="w-4 h-4" />
              <span className="text-xs">Aprender</span>
            </TabsTrigger>
            <TabsTrigger value="autism" className="flex flex-col gap-1 py-3 data-[state=active]:bg-gradient-to-br data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white">
              <Brain className="w-4 h-4" />
              <span className="text-xs">Autismo</span>
            </TabsTrigger>
            <TabsTrigger value="postpartum" className="flex flex-col gap-1 py-3 data-[state=active]:bg-gradient-to-br data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white">
              <Baby className="w-4 h-4" />
              <span className="text-xs">Mães</span>
            </TabsTrigger>
            <TabsTrigger value="youth" className="flex flex-col gap-1 py-3 data-[state=active]:bg-gradient-to-br data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white">
              <Users className="w-4 h-4" />
              <span className="text-xs">Jovens</span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex flex-col gap-1 py-3 data-[state=active]:bg-gradient-to-br data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white">
              <Settings className="w-4 h-4" />
              <span className="text-xs">Config</span>
            </TabsTrigger>
          </TabsList>

          {/* Home Tab */}
          <TabsContent value="home" className="space-y-6">
            <div className="text-center space-y-2 py-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Bem-vindo ao MindCare
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Seu espaço seguro para cuidar da saúde mental com ferramentas científicas,
                acessíveis e humanizadas
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card className="bg-white/80 backdrop-blur-sm border-purple-100 hover:shadow-xl transition-all cursor-pointer" onClick={() => setActiveTab("mood")}>
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center mb-2">
                    <Activity className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Registro de Humor</CardTitle>
                  <CardDescription>
                    Monitore suas emoções diariamente e identifique padrões
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-purple-100 hover:shadow-xl transition-all cursor-pointer" onClick={() => setActiveTab("meditation")}>
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mb-2">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Meditações Guiadas</CardTitle>
                  <CardDescription>
                    Técnicas de respiração, grounding e relaxamento
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-purple-100 hover:shadow-xl transition-all cursor-pointer" onClick={() => setActiveTab("education")}>
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center mb-2">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Psicoeducação</CardTitle>
                  <CardDescription>
                    Aprenda sobre ansiedade, depressão e autoconhecimento
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-purple-100 hover:shadow-xl transition-all cursor-pointer" onClick={() => setActiveTab("autism")}>
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-2xl flex items-center justify-center mb-2">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Módulo Autismo</CardTitle>
                  <CardDescription>
                    Ferramentas para autistas e familiares
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-purple-100 hover:shadow-xl transition-all cursor-pointer" onClick={() => setActiveTab("postpartum")}>
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center mb-2">
                    <Baby className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Apoio Pós-Parto</CardTitle>
                  <CardDescription>
                    Suporte especializado para mães no puerpério
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-purple-100 hover:shadow-xl transition-all cursor-pointer" onClick={() => setActiveTab("youth")}>
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-amber-500 rounded-2xl flex items-center justify-center mb-2">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Espaço Jovem</CardTitle>
                  <CardDescription>
                    Ferramentas adaptadas para adolescentes
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            {/* Quick Stats */}
            <Card className="bg-gradient-to-br from-purple-500 to-pink-500 text-white border-0">
              <CardHeader>
                <CardTitle>Seu Progresso Hoje</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold">0</div>
                    <div className="text-sm opacity-90">Registros</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">0</div>
                    <div className="text-sm opacity-90">Meditações</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">0</div>
                    <div className="text-sm opacity-90">Dias seguidos</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Feedback Section */}
            <FeedbackSystem />
          </TabsContent>

          {/* Mood Tracker Tab */}
          <TabsContent value="mood">
            <MoodTracker />
          </TabsContent>

          {/* Meditation Tab */}
          <TabsContent value="meditation">
            <MeditationHub />
          </TabsContent>

          {/* Education Tab */}
          <TabsContent value="education">
            <EducationLibrary />
          </TabsContent>

          {/* Autism Module Tab */}
          <TabsContent value="autism">
            <AutismModule />
          </TabsContent>

          {/* Postpartum Module Tab */}
          <TabsContent value="postpartum">
            <PostpartumModule />
          </TabsContent>

          {/* Youth Module Tab */}
          <TabsContent value="youth">
            <YouthModule />
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings">
            <PrivacySettings />
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-white/60 backdrop-blur-sm border-t border-purple-100 mt-12 py-6">
        <div className="container mx-auto px-4 text-center text-sm text-gray-600">
          <p>MindCare - Cuidando da sua saúde mental com ciência e humanização</p>
          <p className="text-xs mt-2 text-gray-500">
            Este app não substitui tratamento profissional. Em caso de emergência, procure ajuda imediata.
          </p>
        </div>
      </footer>
    </div>
  )
}