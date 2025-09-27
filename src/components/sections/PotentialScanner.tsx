'use client'

import React, { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  TrendingUp,
  Globe,
  Users, 
  ShoppingBag,
  Target,
  Zap,
  ChevronRight,
  CheckCircle,
  AlertCircle
} from 'lucide-react'
import GlowCard from '@/components/ui/GlowCard'
import { toast } from 'sonner'

const questions = [
  {
    id: 'website',
    question: 'Haben Sie eine professionelle Website?',
    options: [
      { value: 0, label: 'Keine Website', impact: -40 },
      { value: 1, label: 'Veraltete Website', impact: -20 },
      { value: 2, label: 'Moderne Website', impact: 10 },
      { value: 3, label: 'Hochoptimierte Website', impact: 20 },
    ],
    icon: Globe,
  },
  {
    id: 'traffic',
    question: 'Wie viele Website-Besucher haben Sie monatlich?',
    options: [
      { value: 0, label: '< 1.000', impact: -30 },
      { value: 1, label: '1.000 - 10.000', impact: -10 },
      { value: 2, label: '10.000 - 50.000', impact: 10 },
      { value: 3, label: '> 50.000', impact: 25 },
    ],
    icon: Users,
  },
  {
    id: 'social',
    question: 'Wie aktiv sind Sie auf Social Media?',
    options: [
      { value: 0, label: 'Gar nicht', impact: -35 },
      { value: 1, label: 'Gelegentlich', impact: -15 },
      { value: 2, label: 'Regelmäßig', impact: 15 },
      { value: 3, label: 'Sehr aktiv & viral', impact: 30 },
    ],
    icon: TrendingUp,
  },
  {
    id: 'ads',
    question: 'Nutzen Sie bezahlte Werbung?',
    options: [
      { value: 0, label: 'Nein', impact: -25 },
      { value: 1, label: 'Kleines Budget', impact: 0 },
      { value: 2, label: 'Mittleres Budget', impact: 15 },
      { value: 3, label: 'Großes Budget + Optimiert', impact: 25 },
    ],
    icon: Target,
  },
  {
    id: 'conversion',
    question: 'Wie gut konvertiert Ihre Website?',
    options: [
      { value: 0, label: 'Keine Ahnung', impact: -30 },
      { value: 1, label: '< 1%', impact: -15 },
      { value: 2, label: '1-3%', impact: 10 },
      { value: 3, label: '> 3%', impact: 25 },
    ],
    icon: ShoppingBag,
  },
]

const improvementLibrary: Record<string, string> = {
  website: 'Website-Refresh mit Core-Web-Vitals-Optimierung und SEO-Grundgerüst starten.',
  traffic: 'Organischen Traffic über Content Hubs und gezielte Performance-Kampagnen skalieren.',
  social: 'Social-Media-Flywheel mit Kurzvideo-Content und Community-Building aufsetzen.',
  ads: 'Paid-Media-Framework mit klarer Attribution und laufender Budget-Optimierung etablieren.',
  conversion: 'Conversion-Rate-Optimierung inkl. Funnel-A/B-Tests und Marketing-Automation durchführen.',
}

type ScanResult = {
  score: number
  opportunity: number
  summary: string
  improvements: string[]
}

const evaluationBands = [
  {
    min: 0,
    title: 'Hoher Wachstumshebel',
    summary:
      'Ihre digitalen Kanäle sind kaum erschlossen. Mit gezielten Quick Wins lassen sich kurzfristig starke Umsatzsprünge erzielen.',
  },
  {
    min: 45,
    title: 'Solides Fundament, viel Luft nach oben',
    summary:
      'Einige Kernbereiche funktionieren bereits, allerdings liegen klare Chancen in Skalierung und Effizienz.',
  },
  {
    min: 70,
    title: 'Fast ausgeschöpft',
    summary:
      'Sie haben bereits viel umgesetzt. Jetzt geht es um Feintuning, Automatisierung und internationale Skalierung.',
  },
]

export default function PotentialScanner() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [showResults, setShowResults] = useState(false)
  const [result, setResult] = useState<ScanResult | null>(null)

  const { minImpact, maxImpact } = useMemo(() => {
    return questions.reduce(
      (acc, question) => {
        const impacts = question.options.map(option => option.impact)
        return {
          minImpact: acc.minImpact + Math.min(...impacts),
          maxImpact: acc.maxImpact + Math.max(...impacts),
        }
      },
      { minImpact: 0, maxImpact: 0 }
    )
  }, [])

  const handleAnswer = (questionId: string, value: number) => {
    setAnswers(prev => {
      const nextAnswers = { ...prev, [questionId]: value }

      if (currentStep < questions.length - 1) {
        setTimeout(() => setCurrentStep(step => Math.min(step + 1, questions.length - 1)), 300)
      } else {
        calculateResults(nextAnswers)
      }

      return nextAnswers
    })
  }

  const calculateResults = async (currentAnswers: Record<string, number>) => {
    const totalImpact = questions.reduce((sum, question) => {
      const answer = question.options.find(option => option.value === currentAnswers[question.id])
      return sum + (answer?.impact ?? 0)
    }, 0)

    const normalizedScore = Math.round(
      ((totalImpact - minImpact) / Math.max(1, maxImpact - minImpact)) * 100
    )

    const opportunity = Math.max(0, 100 - normalizedScore)

    const improvementCandidates = questions
      .map(question => {
        const selectedImpact =
          question.options.find(option => option.value === currentAnswers[question.id])?.impact ?? 0
        const bestImpact = Math.max(...question.options.map(option => option.impact))

        return {
          id: question.id,
          gap: bestImpact - selectedImpact,
        }
      })
      .filter(item => item.gap > 0)
      .sort((a, b) => b.gap - a.gap)

    const improvements = improvementCandidates
      .slice(0, 3)
      .map(candidate => improvementLibrary[candidate.id])
      .filter(Boolean)

    const evaluation = evaluationBands
      .slice()
      .reverse()
      .find(band => normalizedScore >= band.min)

    const summary = evaluation
      ? evaluation.summary
      : 'Wir analysieren gemeinsam, wie wir Ihre digitalen Kanäle profitabel skalieren.'

    const computedResult: ScanResult = {
      score: Math.min(100, Math.max(0, normalizedScore)),
      opportunity,
      summary,
      improvements,
    }

    setResult(computedResult)
    setShowResults(true)

    try {
      const response = await fetch('/api/potential-scan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          answers: currentAnswers,
          score: computedResult.score,
          opportunity: computedResult.opportunity,
          improvements: computedResult.improvements,
        }),
      })

      if (!response.ok) {
        const payload = await response.json().catch(() => null)
        throw new Error(payload?.error ?? 'Lead konnte nicht gespeichert werden')
      }
    } catch (error) {
      console.error('Potential scan handoff failed:', error)
      toast.error('Analyse gespeichert. Für CRM-Automation bitte API-Keys hinterlegen.')
    }
  }

  const restart = () => {
    setCurrentStep(0)
    setAnswers({})
    setResult(null)
    setShowResults(false)
  }

  const score = result?.score ?? 0
  const opportunity = result?.opportunity ?? 0

  return (
    <section id="potential" className="py-32 relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rich-gray-800/50 backdrop-blur-sm border border-rich-gray-700 mb-6"
          >
            <Zap className="w-4 h-4 text-hot-orange" />
            <span className="text-sm text-rich-gray-300">Growth Potential Scanner</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Ihr ungenutztes <span className="bg-gradient-to-r from-hot-orange to-cyber-cyan bg-clip-text text-transparent">Potenzial</span>
          </h2>
          
          <p className="text-xl text-rich-gray-400 max-w-2xl mx-auto">
            5 Fragen. 30 Sekunden. 
            <span className="text-white"> Erfahren Sie, wie viel Wachstum möglich ist.</span>
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!showResults ? (
            <motion.div
              key="questions"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              <GlowCard className="p-8">
                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-rich-gray-400">
                      Frage {currentStep + 1} von {questions.length}
                    </span>
                    <span className="text-sm text-cyber-cyan">
                      {Math.round(((currentStep + 1) / questions.length) * 100)}%
                    </span>
                  </div>
                  <div className="h-2 bg-rich-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-cyber-cyan to-neon-lime"
                      initial={{ width: '0%' }}
                      animate={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>

                {/* Current Question */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      {questions[currentStep].icon && (
                        <questions[currentStep].icon className="w-8 h-8 text-cyber-cyan" />
                      )}
                      <h3 className="text-2xl font-bold">
                        {questions[currentStep].question}
                      </h3>
                    </div>

                    <div className="space-y-3">
                      {questions[currentStep].options.map((option) => (
                        <motion.button
                          key={option.value}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleAnswer(questions[currentStep].id, option.value)}
                          className="w-full p-4 bg-rich-gray-800/50 hover:bg-rich-gray-800 border border-rich-gray-700 hover:border-cyber-cyan rounded-xl text-left transition-all duration-300 flex items-center justify-between group"
                        >
                          <span>{option.label}</span>
                          <ChevronRight className="w-5 h-5 text-rich-gray-600 group-hover:text-cyber-cyan transition-colors" />
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </GlowCard>
            </motion.div>
          ) : (
            <motion.div
              key="results"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <GlowCard className="p-8 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    delay: 0.2,
                    type: "spring",
                    stiffness: 200,
                    damping: 15
                  }}
                  className="mb-8"
                >
                    <div className="relative inline-flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-r from-cyber-cyan to-neon-lime rounded-full blur-2xl opacity-50" />
                      <div className="relative text-7xl font-bold bg-gradient-to-r from-cyber-cyan to-neon-lime bg-clip-text text-transparent">
                      {score}%
                      </div>
                    </div>
                    <p className="text-2xl font-semibold mt-4">Wachstumspotenzial</p>
                  </motion.div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3 text-left">
                    <AlertCircle className="w-5 h-5 text-hot-orange mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-white">Ihre größten Chancen:</p>
                      <p className="text-rich-gray-400 text-sm mt-1">
                        Basierend auf Ihren Antworten liegen rund {opportunity}% ungenutztes Umsatzpotenzial bereit.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-left">
                    <CheckCircle className="w-5 h-5 text-neon-lime mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-white">Empfohlene Maßnahmen:</p>
                      <ul className="text-rich-gray-400 text-sm mt-1 space-y-1">
                        {result?.improvements?.length ? (
                          result.improvements.map(recommendation => (
                            <li key={recommendation}>• {recommendation}</li>
                          ))
                        ) : (
                          <li>• Feintuning & Skalierung – wir planen die nächsten Wachstumssprünge gemeinsam.</li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-rich-gray-900/60 border border-rich-gray-800 rounded-xl p-6 mb-8 text-left">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Auswertung
                  </h3>
                  <p className="text-rich-gray-400 text-sm leading-relaxed">
                    {result?.summary ?? 'Wir analysieren gemeinsam, wie wir Ihre digitalen Kanäle profitabel skalieren.'}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => {
                      const calendarUrl = 'https://cal.com/videoneers/strategie-call'
                      window.open(calendarUrl, '_blank', 'noopener')
                    }}
                    className="px-8 py-4 bg-gradient-to-r from-cyber-cyan to-neon-lime rounded-xl font-semibold text-deep-black hover:scale-105 transition-transform duration-300"
                  >
                    Kostenloses Strategiegespräch
                  </button>
                  
                  <button
                    onClick={restart}
                    className="px-8 py-4 border-2 border-rich-gray-700 rounded-xl font-semibold hover:border-cyber-cyan hover:text-cyber-cyan transition-all duration-300"
                  >
                    Nochmal analysieren
                  </button>
                </div>
              </GlowCard>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
