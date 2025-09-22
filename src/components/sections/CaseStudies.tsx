'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { ArrowUpRight, TrendingUp, Users, Eye, DollarSign } from 'lucide-react'
import GlowCard from '@/components/ui/GlowCard'

const caseStudies = [
  {
    id: 1,
    client: 'TechStart Berlin',
    industry: 'SaaS Startup',
    image: '/images/case-1.jpg',
    challenge: 'Keine Online-Präsenz, 0 Leads pro Monat',
    solution: 'Full-Stack Website + SEO + LinkedIn Ads',
    results: [
      { metric: 'Leads/Monat', value: '147', change: '+∞%', icon: TrendingUp },
      { metric: 'Conversion Rate', value: '4.2%', change: '+320%', icon: DollarSign },
      { metric: 'Organischer Traffic', value: '12.5K', change: '+890%', icon: Users },
    ],
    testimonial: 'videoneers hat unser Business transformiert. Von 0 auf 147 qualifizierte Leads im Monat!',
    duration: '3 Monate',
  },
  {
    id: 2,
    client: 'FashionForward',
    industry: 'E-Commerce',
    image: '/images/case-2.jpg',
    challenge: 'Stagnierender Online-Shop, hohe Absprungrate',
    solution: 'Shop-Redesign + Performance Marketing + Email Automation',
    results: [
      { metric: 'Umsatz', value: '+385%', change: '+385%', icon: DollarSign },
      { metric: 'ROAS', value: '8.7x', change: '+435%', icon: TrendingUp },
      { metric: 'Wiederkäufer', value: '42%', change: '+200%', icon: Users },
    ],
    testimonial: 'Der ROI war unglaublich. Jeder investierte Euro kam 8-fach zurück.',
    duration: '6 Monate',
  },
  {
    id: 3,
    client: 'Coach Excellence',
    industry: 'Personal Coaching',
    image: '/images/case-3.jpg',
    challenge: 'Lokaler Coach ohne digitale Reichweite',
    solution: 'Personal Brand Building + Content Strategy + Funnel',
    results: [
      { metric: 'Social Media Reach', value: '1.2M', change: '+12,000%', icon: Eye },
      { metric: 'Kunden', value: '+68', change: '+680%', icon: Users },
      { metric: 'Umsatz/Kunde', value: '€3.2K', change: '+150%', icon: DollarSign },
    ],
    testimonial: 'Von lokal zu international in 4 Monaten. Wahnsinn!',
    duration: '4 Monate',
  },
]

export default function CaseStudies() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section ref={ref} className="py-32 relative bg-gradient-to-b from-transparent via-rich-gray-900/20 to-transparent">
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
            <TrendingUp className="w-4 h-4 text-neon-lime" />
            <span className="text-sm text-rich-gray-300">Nachweisbare Erfolge</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Ergebnisse die <span className="bg-gradient-to-r from-neon-lime to-hot-orange bg-clip-text text-transparent">sprechen</span>
          </h2>
          
          <p className="text-xl text-rich-gray-400 max-w-3xl mx-auto">
            Keine Theorie. Keine Versprechen. 
            <span className="text-white"> Nur harte Fakten.</span>
          </p>
        </motion.div>

        {/* Case Studies */}
        <div className="space-y-32">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.2 }}
            >
              <GlowCard className="overflow-hidden">
                <div className={`grid lg:grid-cols-2 gap-12 p-8 lg:p-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Content Side */}
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="flex items-center gap-4">
                      <h3 className="text-3xl font-bold">{study.client}</h3>
                      <span className="px-3 py-1 bg-rich-gray-800 rounded-full text-sm text-rich-gray-400">
                        {study.industry}
                      </span>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <span className="text-rich-gray-500 text-sm">Challenge</span>
                        <p className="text-white mt-1">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <span className="text-rich-gray-500 text-sm">Lösung</span>
                        <p className="text-white mt-1">{study.solution}</p>
                      </div>

                      <div>
                        <span className="text-rich-gray-500 text-sm">Zeitraum</span>
                        <p className="text-cyber-cyan mt-1 font-semibold">{study.duration}</p>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="grid grid-cols-3 gap-4 py-6">
                      {study.results.map((result) => (
                        <div key={result.metric} className="text-center">
                          <result.icon className="w-5 h-5 text-neon-lime mx-auto mb-2" />
                          <div className="text-2xl font-bold text-white">{result.value}</div>
                          <div className="text-xs text-rich-gray-500">{result.metric}</div>
                        </div>
                      ))}
                    </div>

                    {/* Testimonial */}
                    <blockquote className="border-l-4 border-cyber-cyan pl-6 py-2">
                      <p className="text-rich-gray-300 italic">"{study.testimonial}"</p>
                    </blockquote>

                    {/* CTA */}
                    <button className="flex items-center gap-2 text-cyber-cyan hover:text-neon-lime transition-colors">
                      <span className="font-semibold">Case Study Details</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Image Side */}
                  <div className={`relative h-96 lg:h-auto ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyber-cyan/20 to-neon-lime/20 rounded-xl" />
                    <div className="relative h-full bg-rich-gray-800 rounded-xl overflow-hidden">
                      {/* Placeholder for actual screenshot */}
                      <div className="flex items-center justify-center h-full">
                        <div className="text-center">
                          <div className="text-6xl mb-4">🚀</div>
                          <p className="text-rich-gray-500">Website Screenshot</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>

        {/* Success Metrics Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-32 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { label: 'Durchschnittlicher ROI', value: '287%' },
              { label: 'Generierte Views', value: '2.7M+' },
              { label: 'Zufriedene Kunden', value: '100%' },
              { label: 'Projekte', value: '23' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyber-cyan to-neon-lime bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-rich-gray-500 mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
