'use client'

import { motion } from 'framer-motion'
import { Shield, Award, Zap, HeartHandshake } from 'lucide-react'

export default function TrustIndicators() {
  const indicators = [
    {
      icon: Shield,
      title: 'DSGVO Konform',
      description: 'Hosting in Deutschland',
    },
    {
      icon: Award,
      title: '100% Kundenzufriedenheit',
      description: 'Nachweislich',
    },
    {
      icon: Zap,
      title: '< 2h Antwortzeit',
      description: 'Garantiert',
    },
    {
      icon: HeartHandshake,
      title: 'Persönlicher Ansprechpartner',
      description: '24/7 erreichbar',
    },
  ]

  return (
    <section id="trust" className="py-16 border-y border-rich-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {indicators.map((indicator, index) => (
            <motion.div
              key={indicator.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <indicator.icon className="w-8 h-8 mx-auto mb-3 text-cyber-cyan" />
              <h3 className="font-semibold text-white mb-1">{indicator.title}</h3>
              <p className="text-sm text-rich-gray-400">{indicator.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
