'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  MessageSquare, 
  Lightbulb, 
  PenTool, 
  Code2, 
  Rocket, 
  BarChart3 
} from 'lucide-react'

const processSteps = [
  {
    number: '01',
    title: 'Analyse & Strategie',
    description: 'Wir verstehen Ihr Business, Ihre Ziele und Ihre Zielgruppe. Gemeinsam entwickeln wir eine maßgeschneiderte Digital-Strategie.',
    icon: MessageSquare,
    duration: '1-2 Tage',
  },
  {
    number: '02',
    title: 'Konzept & Design',
    description: 'Kreative Konzepte die begeistern. UI/UX Design das konvertiert. Jedes Pixel hat einen Zweck.',
    icon: Lightbulb,
    duration: '3-5 Tage',
  },
  {
    number: '03',
    title: 'Entwicklung',
    description: 'Sauberer Code, moderne Technologien, höchste Performance. Agile Entwicklung mit täglichen Updates.',
    icon: Code2,
    duration: '2-4 Wochen',
  },
  {
    number: '04',
    title: 'Testing & Optimierung',
    description: 'Gründliche Tests auf allen Geräten. Performance-Optimierung bis zur Perfektion. SEO von Anfang an.',
    icon: PenTool,
    duration: '3-5 Tage',
  },
  {
    number: '05',
    title: 'Launch',
    description: 'Go-Live ohne Kompromisse. Nahtlose Migration. Ihre digitale Revolution beginnt.',
    icon: Rocket,
    duration: '1 Tag',
  },
  {
    number: '06',
    title: 'Growth & Scale',
    description: 'Kontinuierliche Optimierung. A/B Testing. Datengetriebene Entscheidungen für maximales Wachstum.',
    icon: BarChart3,
    duration: 'Ongoing',
  },
]

export default function Process() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section ref={ref} className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rich-gray-800/50 backdrop-blur-sm border border-rich-gray-700 mb-6"
          >
            <Rocket className="w-4 h-4 text-hot-orange" />
            <span className="text-sm text-rich-gray-300">Der Weg zum Erfolg</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Von der Idee zur <span className="bg-gradient-to-r from-hot-orange to-cyber-cyan bg-clip-text text-transparent">Sensation</span>
          </h2>
          
          <p className="text-xl text-rich-gray-400 max-w-3xl mx-auto">
            Strukturiert. Transparent. Erfolgreich.
            <span className="text-white"> Unser bewährter Prozess.</span>
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyber-cyan via-neon-lime to-hot-orange opacity-20 md:-translate-x-1/2" />

          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className={`inline-block ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                    <div className="bg-rich-gray-900/50 backdrop-blur-sm border border-rich-gray-800 rounded-xl p-6 hover:border-rich-gray-700 transition-colors">
                      <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        <step.icon className="w-8 h-8 text-cyber-cyan" />
                        <div>
                          <span className="text-4xl font-bold text-rich-gray-700">{step.number}</span>
                          <h3 className="text-xl font-bold text-white">{step.title}</h3>
                        </div>
                      </div>
                      <p className="text-rich-gray-400 mb-3">{step.description}</p>
                      <span className="inline-block px-3 py-1 bg-rich-gray-800 rounded-full text-sm text-cyber-cyan">
                        ⏱ {step.duration}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="relative z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    className="w-16 h-16 bg-deep-black border-4 border-cyber-cyan rounded-full flex items-center justify-center"
                  >
                    <div className="w-6 h-6 bg-gradient-to-r from-cyber-cyan to-neon-lime rounded-full animate-pulse" />
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-20"
        >
          <p className="text-rich-gray-400 mb-6">
            Bereit für Ihre digitale Transformation?
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-hot-orange to-cyber-cyan rounded-xl font-semibold text-deep-black hover:scale-105 transition-transform duration-300">
            Prozess starten
          </button>
        </motion.div>
      </div>
    </section>
  )
}
