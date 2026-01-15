"use client"

import { useState } from "react"
import { AlertCircle, Phone, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function EmergencyButton() {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <Button
        onClick={() => setShowModal(true)}
        variant="destructive"
        className="bg-red-500 hover:bg-red-600 shadow-lg"
      >
        <AlertCircle className="w-4 h-4" />
        <span className="hidden sm:inline">Emergência</span>
      </Button>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 space-y-4 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                <AlertCircle className="w-6 h-6 text-red-500" />
                Ajuda Emergencial
              </h2>
              <button
                onClick={() => setShowModal(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm text-gray-600">
              Se você está em crise ou pensando em fazer mal a si mesmo, 
              busque ajuda profissional imediatamente:
            </p>

            <div className="space-y-3">
              <a
                href="tel:188"
                className="flex items-center gap-3 p-4 bg-red-50 border-2 border-red-200 rounded-xl hover:bg-red-100 transition-colors"
              >
                <Phone className="w-6 h-6 text-red-600" />
                <div className="flex-1 text-left">
                  <div className="font-semibold text-red-800">CVV - 188</div>
                  <div className="text-sm text-red-600">Apoio emocional 24h (gratuito)</div>
                </div>
              </a>

              <a
                href="tel:192"
                className="flex items-center gap-3 p-4 bg-orange-50 border-2 border-orange-200 rounded-xl hover:bg-orange-100 transition-colors"
              >
                <Phone className="w-6 h-6 text-orange-600" />
                <div className="flex-1 text-left">
                  <div className="font-semibold text-orange-800">SAMU - 192</div>
                  <div className="text-sm text-orange-600">Emergência médica</div>
                </div>
              </a>

              <a
                href="tel:190"
                className="flex items-center gap-3 p-4 bg-blue-50 border-2 border-blue-200 rounded-xl hover:bg-blue-100 transition-colors"
              >
                <Phone className="w-6 h-6 text-blue-600" />
                <div className="flex-1 text-left">
                  <div className="font-semibold text-blue-800">Polícia - 190</div>
                  <div className="text-sm text-blue-600">Emergência policial</div>
                </div>
              </a>

              <div className="p-4 bg-purple-50 border border-purple-200 rounded-xl">
                <div className="font-semibold text-purple-800 mb-2">CAPS - Centro de Atenção Psicossocial</div>
                <div className="text-sm text-purple-600">
                  Procure a unidade mais próxima para atendimento gratuito em saúde mental
                </div>
              </div>
            </div>

            <p className="text-xs text-gray-500 text-center">
              Você não está sozinho. Sempre há ajuda disponível.
            </p>
          </div>
        </div>
      )}
    </>
  )
}
