'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, HelpCircle } from 'lucide-react'

const faqs = [
  {
    question: 'Wie lange dauert ein typisches Projekt?',
    answer: 'Die Projektdauer variiert je nach Umfang. Eine moderne Website ist in 2-4 Wochen live. Komplexe E-Commerce-Projekte oder Apps benötigen 2-3 Monate. Wir arbeiten agil und liefern bereits nach wenigen Tagen erste sichtbare Ergebnisse.',
  },
  {
    question: 'Was kostet eine professionelle Website?',
    answer: 'Unsere Projekte starten bei 5.000€ für eine optimierte Business-Website. Der finale Preis hängt von Ihren Anforderungen ab. Wir erstellen transparente Angebote ohne versteckte Kosten. Der ROI rechtfertigt die Investition immer.',
  },
  {
    question: 'Wie garantiert ihr 287% ROI?',
    answer: 'Dieser Wert basiert auf dem durchschnittlichen Erfolg unserer Kundenprojekte. Durch datengetriebene Optimierung, conversion-fokussiertes Design und kontinuierliche Performance-Analyse. Wir messen und optimieren jeden Aspekt Ihrer digitalen Präsenz.',
  },
  {
    question: 'Bietet ihr auch Wartung und Support?',
    answer: 'Ja, alle Projekte beinhalten 3 Monate kostenlosen Support. Danach bieten wir flexible Wartungspakete ab 199€/Monat. Darin enthalten: Updates, Backups, Monitoring und priorisierter Support mit garantierter Reaktionszeit.',
  },
  {
    question: 'Arbeitet ihr auch mit Startups?',
    answer: 'Absolut! Startups sind unsere Leidenschaft. Wir bieten spezielle Startup-Pakete mit flexiblen Zahlungsmodellen. Viele unserer erfolgreichsten Cases sind Startups, die wir von Tag 1 begleitet haben.',
  },
  {
    question: 'Wie unterscheidet ihr euch von anderen Agenturen?',
    answer: 'Wir versprechen nicht - wir liefern. Messbare Ergebnisse statt PowerPoints. Persönliche Betreuung statt Ticket-System. Und: Jeder Euro zeigt Wirkung. Unsere Erfolge sind nachweisbar und transparent dokumentiert.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-32 relative">
      <div className="max-w-3xl mx-auto px-6">
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
            <HelpCircle className="w-4 h-4 text-cyber-cyan" />
            <span className="text-sm text-rich-gray-300">Häufige Fragen</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Alles <span className="bg-gradient-to-r from-cyber-cyan to-neon-lime bg-clip-text text-transparent">Wichtige</span>
          </h2>
          
          <p className="text-xl text-rich-gray-400">
            Transparenz ist uns wichtig. Hier die Antworten.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 bg-rich-gray-900/50 hover:bg-rich-gray-900/70 rounded-xl transition-all duration-300 border border-rich-gray-800 hover:border-rich-gray-700"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-left pr-4">
                    {faq.question}
                  </h3>
                  <div className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-cyber-cyan" />
                    ) : (
                      <Plus className="w-5 h-5 text-cyber-cyan" />
                    )}
                  </div>
                </div>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-rich-gray-400 text-left mt-4 pr-8">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-rich-gray-400 mb-4">
            Noch Fragen? Wir sind für Sie da.
          </p>
          <a
            href="https://wa.me/4917612345678"
            className="inline-flex items-center gap-2 text-cyber-cyan hover:text-neon-lime transition-colors"
          >
            <MessageSquare className="w-5 h-5" />
            <span>WhatsApp Chat starten</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
