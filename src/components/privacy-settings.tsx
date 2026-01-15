"use client"

import { useState, useEffect } from "react"
import { Shield, Lock, Eye, EyeOff, UserCheck, LogOut, User } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/components/auth/AuthProvider"

export function PrivacySettings() {
  const [settings, setSettings] = useState({
    dataEncryption: true,
    anonymousMode: false,
    shareAnalytics: true,
    parentalControl: false,
  })

  const { signOut, user } = useAuth()

  const toggleSetting = (key: keyof typeof settings) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  const handleSignOut = async () => {
    if (confirm('Tem certeza que deseja sair da sua conta?')) {
      await signOut()
    }
  }

  return (
    <div className="space-y-6">
      {/* Account Settings */}
      <Card className="bg-white/80 backdrop-blur-sm border-purple-100">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="w-6 h-6 text-purple-500" />
            Conta
          </CardTitle>
          <CardDescription>
            Gerencie sua conta e configurações pessoais
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-medium text-gray-800">Email</div>
                <div className="text-sm text-gray-500">{user?.email}</div>
              </div>
            </div>
          </div>

          <Button
            onClick={handleSignOut}
            variant="outline"
            className="w-full border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Sair da conta
          </Button>
        </CardContent>
      </Card>

      <Card className="bg-white/80 backdrop-blur-sm border-purple-100">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-purple-500" />
            Privacidade e Segurança
          </CardTitle>
          <CardDescription>
            Seus dados são protegidos com criptografia de ponta a ponta
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Data Encryption */}
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                <Lock className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-medium text-gray-800">Criptografia de Dados</div>
                <div className="text-sm text-gray-500">Seus dados são criptografados</div>
              </div>
            </div>
            <div className="w-12 h-6 bg-green-500 rounded-full flex items-center justify-end px-1">
              <div className="w-4 h-4 bg-white rounded-full" />
            </div>
          </div>

          {/* Anonymous Mode */}
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center">
                {settings.anonymousMode ? (
                  <EyeOff className="w-5 h-5 text-white" />
                ) : (
                  <Eye className="w-5 h-5 text-white" />
                )}
              </div>
              <div>
                <div className="font-medium text-gray-800">Modo Anônimo</div>
                <div className="text-sm text-gray-500">Ocultar informações pessoais</div>
              </div>
            </div>
            <button
              onClick={() => toggleSetting("anonymousMode")}
              className={`w-12 h-6 rounded-full transition-colors ${
                settings.anonymousMode ? "bg-purple-500" : "bg-gray-300"
              } flex items-center ${settings.anonymousMode ? "justify-end" : "justify-start"} px-1`}
            >
              <div className="w-4 h-4 bg-white rounded-full" />
            </button>
          </div>

          {/* Share Analytics */}
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center">
                <UserCheck className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-medium text-gray-800">Compartilhar Análises</div>
                <div className="text-sm text-gray-500">Ajude a melhorar o app (anônimo)</div>
              </div>
            </div>
            <button
              onClick={() => toggleSetting("shareAnalytics")}
              className={`w-12 h-6 rounded-full transition-colors ${
                settings.shareAnalytics ? "bg-blue-500" : "bg-gray-300"
              } flex items-center ${settings.shareAnalytics ? "justify-end" : "justify-start"} px-1`}
            >
              <div className="w-4 h-4 bg-white rounded-full" />
            </button>
          </div>

          {/* Parental Control */}
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-amber-500 rounded-xl flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-medium text-gray-800">Controle Parental</div>
                <div className="text-sm text-gray-500">Proteção para menores</div>
              </div>
            </div>
            <button
              onClick={() => toggleSetting("parentalControl")}
              className={`w-12 h-6 rounded-full transition-colors ${
                settings.parentalControl ? "bg-orange-500" : "bg-gray-300"
              } flex items-center ${settings.parentalControl ? "justify-end" : "justify-start"} px-1`}
            >
              <div className="w-4 h-4 bg-white rounded-full" />
            </button>
          </div>
        </CardContent>
      </Card>

      {/* Privacy Info */}
      <Card className="bg-gradient-to-br from-purple-500 to-pink-500 text-white border-0">
        <CardHeader>
          <CardTitle>🔒 Seus dados estão seguros</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm opacity-90">
            O MindCare utiliza criptografia de ponta a ponta para proteger todas as suas informações.
            Seus registros emocionais, anotações e dados pessoais são armazenados de forma segura e
            nunca são compartilhados com terceiros sem seu consentimento explícito.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}