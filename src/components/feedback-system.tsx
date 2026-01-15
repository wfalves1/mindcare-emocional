"use client"

import { useState } from "react"
import { MessageSquare, Star, Send, CheckCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function FeedbackSystem() {
  const [rating, setRating] = useState(0)
  const [feedback, setFeedback] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    if (rating > 0 && feedback.trim()) {
      // Aqui você salvaria no banco de dados
      console.log({ rating, feedback })
      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        setRating(0)
        setFeedback("")
      }, 3000)
    }
  }

  if (submitted) {
    return (
      <Card className="bg-gradient-to-br from-green-500 to-emerald-500 text-white border-0">
        <CardContent className="pt-6">
          <div className="text-center space-y-3">
            <CheckCircle className="w-16 h-16 mx-auto" />
            <h3 className="text-xl font-bold">Obrigado pelo seu feedback!</h3>
            <p className="text-sm opacity-90">
              Sua opinião é muito importante para melhorarmos o MindCare
            </p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-white/80 backdrop-blur-sm border-purple-100">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageSquare className="w-6 h-6 text-purple-500" />
          Nos ajude a melhorar
        </CardTitle>
        <CardDescription>
          Sua opinião é fundamental para tornar o MindCare ainda melhor
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Rating */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">
            Como você avalia sua experiência?
          </label>
          <div className="flex gap-2 justify-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setRating(star)}
                className="transition-transform hover:scale-110"
              >
                <Star
                  className={`w-8 h-8 ${
                    star <= rating
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Feedback Text */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">
            Conte-nos mais sobre sua experiência
          </label>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="O que você gostou? O que podemos melhorar? Sugestões de novas funcionalidades..."
            className="w-full min-h-[120px] p-4 rounded-xl border border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-200 outline-none resize-none"
          />
        </div>

        <Button
          onClick={handleSubmit}
          disabled={rating === 0 || !feedback.trim()}
          variant="gradient"
          className="w-full"
        >
          <Send className="w-4 h-4" />
          Enviar Feedback
        </Button>
      </CardContent>
    </Card>
  )
}
