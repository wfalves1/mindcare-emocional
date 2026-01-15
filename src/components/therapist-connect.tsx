"use client"

import { Phone, Video, MessageCircle, Calendar, Star, MapPin, Clock } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const therapists = [
  {
    id: 1,
    name: "Dra. Ana Silva",
    specialty: "Psicóloga Clínica",
    approach: "TCC e ACT",
    rating: 4.9,
    reviews: 127,
    price: "R$ 150",
    available: true,
    image: "👩‍⚕️",
  },
  {
    id: 2,
    name: "Dr. Carlos Santos",
    specialty: "Psiquiatra",
    approach: "Psicofarmacologia",
    rating: 4.8,
    reviews: 98,
    price: "R$ 200",
    available: true,
    image: "👨‍⚕️",
  },
  {
    id: 3,
    name: "Dra. Maria Costa",
    specialty: "Psicóloga Perinatal",
    approach: "Pós-parto e Maternidade",
    rating: 5.0,
    reviews: 156,
    price: "R$ 180",
    available: false,
    image: "👩‍⚕️",
  },
  {
    id: 4,
    name: "Dr. João Oliveira",
    specialty: "Psicólogo Infantil",
    approach: "TEA e Neurodiversidade",
    rating: 4.9,
    reviews: 143,
    price: "R$ 160",
    available: true,
    image: "👨‍⚕️",
  },
]

const consultationTypes = [
  { type: "video", icon: Video, label: "Videochamada", description: "Consulta online ao vivo" },
  { type: "phone", icon: Phone, label: "Telefone", description: "Ligação de voz" },
  { type: "chat", icon: MessageCircle, label: "Chat", description: "Mensagens de texto" },
  { type: "presential", icon: MapPin, label: "Presencial", description: "Consultório físico" },
]

export function TherapistConnect() {
  return (
    <div className="space-y-6">
      <Card className="bg-white/80 backdrop-blur-sm border-blue-100">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Phone className="w-6 h-6 text-blue-500" />
            Conecte-se com Terapeutas
          </CardTitle>
          <CardDescription>
            Encontre profissionais qualificados para te acompanhar
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Consultation Types */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {consultationTypes.map((item) => {
          const Icon = item.icon
          return (
            <Card key={item.type} className="bg-white/80 backdrop-blur-sm border-gray-200 hover:shadow-lg transition-all cursor-pointer">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-2">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-sm">{item.label}</CardTitle>
                <CardDescription className="text-xs">{item.description}</CardDescription>
              </CardHeader>
            </Card>
          )
        })}
      </div>

      {/* Therapist List */}
      <div className="space-y-4">
        {therapists.map((therapist) => (
          <Card key={therapist.id} className="bg-white/80 backdrop-blur-sm border-gray-200 hover:shadow-lg transition-all">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center text-4xl">
                    {therapist.image}
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1 space-y-2">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{therapist.name}</h3>
                    <p className="text-sm text-gray-600">{therapist.specialty}</p>
                  </div>

                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="font-medium">{therapist.rating}</span>
                      <span className="text-gray-500">({therapist.reviews})</span>
                    </div>
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-lg text-xs font-medium">
                      {therapist.approach}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{therapist.available ? "Disponível hoje" : "Próxima vaga: 3 dias"}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-2 justify-center md:w-48">
                  <div className="text-center mb-2">
                    <span className="text-2xl font-bold text-gray-800">{therapist.price}</span>
                    <span className="text-sm text-gray-500">/sessão</span>
                  </div>
                  <Button variant="gradient" className="w-full">
                    <Calendar className="w-4 h-4" />
                    Agendar
                  </Button>
                  <Button variant="outline" className="w-full">
                    Ver Perfil
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Filters */}
      <Card className="bg-white/80 backdrop-blur-sm border-gray-200">
        <CardHeader>
          <CardTitle className="text-base">Filtrar Profissionais</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-3">
            <Button variant="outline" className="justify-start">
              🎯 Especialidade
            </Button>
            <Button variant="outline" className="justify-start">
              💰 Faixa de Preço
            </Button>
            <Button variant="outline" className="justify-start">
              📅 Disponibilidade
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Public Services */}
      <Card className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white border-0">
        <CardHeader>
          <CardTitle>Serviços Públicos Gratuitos</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm opacity-90 mb-4">
            Não pode pagar por terapia particular? Conheça os serviços públicos disponíveis:
          </p>
          <div className="space-y-2">
            <Button variant="outline" className="w-full bg-white text-blue-600 hover:bg-gray-100 justify-start">
              🏥 CAPS - Centros de Atenção Psicossocial
            </Button>
            <Button variant="outline" className="w-full bg-white text-blue-600 hover:bg-gray-100 justify-start">
              🎓 Clínicas-Escola de Psicologia
            </Button>
            <Button variant="outline" className="w-full bg-white text-blue-600 hover:bg-gray-100 justify-start">
              📞 CVV - Centro de Valorização da Vida (188)
            </Button>
            <Button variant="outline" className="w-full bg-white text-blue-600 hover:bg-gray-100 justify-start">
              🏛️ UBS - Unidades Básicas de Saúde
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* How it Works */}
      <Card className="bg-white/80 backdrop-blur-sm border-gray-200">
        <CardHeader>
          <CardTitle>Como Funciona</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-1">Escolha o Profissional</h4>
                <p className="text-sm text-gray-600">
                  Navegue pelos perfis e escolha o terapeuta que melhor se adequa às suas necessidades
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-1">Agende sua Sessão</h4>
                <p className="text-sm text-gray-600">
                  Escolha data, horário e tipo de consulta (online ou presencial)
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-1">Realize a Consulta</h4>
                <p className="text-sm text-gray-600">
                  Conecte-se com seu terapeuta no horário marcado de forma segura e privada
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
