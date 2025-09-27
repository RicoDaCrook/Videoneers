'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import type { LucideIcon } from 'lucide-react'
import { TrendingUp, Users, Eye, DollarSign } from 'lucide-react'
import GlowCard from '@/components/ui/GlowCard'

type CaseStudyResult = {
  metric: string
  value: string
  change?: string
  icon: LucideIcon
}

type CaseStudy = {
  id: number
  client: string
  industry: string
  image?: {
    src: string
    alt: string
    width: number
    height: number
  }
  challenge: string
  solution: string[]
  results: CaseStudyResult[]
  testimonial: string
  duration: string
  insights?: string[]
  outlook?: string
  dataSource?: string
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    client: 'Vinyl Revival Store',
    industry: 'Lokaler Handel → E-Commerce',
    image: {
      src: '/images/case-studies/vinyl-revival-seo-growth.png',
      alt: 'Google-Analytics-Dashboard mit organischem Wachstum und 10.000 € Monatsumsatz für einen Vinyl-Shop',
      width: 1000,
      height: 520,
    },
    challenge:
      'Stationärer Schallplattenhändler mit 200–300 täglichen Besuchern und nur 450 € Gesamtumsatz zwischen März und November 2024.',
    solution: [
      'Aufbau SEO-optimierter Filterstrukturen für Formate, Genres und Künstler.',
      'Saubere Indexierung und Crawling-Strategie inklusive interner Verlinkung.',
      'UX-Optimierungen im Checkout ohne weitere Marketing- oder Ads-Budgets.',
    ],
    results: [
      { metric: 'Monatsumsatz', value: '10.000 €', change: '↑ von 450 € in < 12 Monaten', icon: DollarSign },
      { metric: 'Aktive Nutzer (Sep 2025)', value: '8.000+', change: '+4.275 % YoY', icon: Users },
      { metric: 'Neue Nutzeranteil', value: '≈ 100 %', change: '+4.243 % YoY', icon: TrendingUp },
    ],
    testimonial:
      '„SEO war unser Gamechanger: Innerhalb eines Jahres sind wir von stagnierenden Verkäufen zu fünfstelligen Monatsumsätzen gewachsen.“',
    duration: 'Nov 2024 – Sep 2025',
    insights: [
      'Das Wachstum wurde vollständig organisch erzielt – die SEO-Filter erschlossen komplett neue Zielgruppen.',
      'Der Analytics-Screenshot belegt signifikante Steigerungen bei Nutzer:innen (+4.275 %), neuen Nutzer:innen (+4.243 %) und Ereignissen (+5.714 %).',
      'Die Umsatzkurve stieg nach der Implementierung der SEO-Architektur sprunghaft von 450 € Gesamtumsatz auf 10.000 € Monatsumsatz.',
    ],
    outlook:
      'Beschaffung und Lagerbestand werden aktuell skaliert; im nächsten Schritt folgen internationale SEO-Landingpages und Content-Hubs, um den Momentum-Effekt auszubauen.',
    dataSource: 'Google Analytics · 01.11.2024 – 18.09.2025',
  },
  {
    id: 2,
    client: 'FashionForward',
    industry: 'E-Commerce',
    challenge: 'Stagnierender Online-Shop, hohe Absprungrate',
    solution: [
      'Shop-Redesign mit Conversion-optimierten Templates.',
      'Always-on Performance-Marketing-Kampagnen.',
      'Lifecycle-E-Mail-Automation für Wiederkäufer:innen.',
    ],
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
    solution: [
      'Personal Branding inklusive Content-Redaktionsplan.',
      'Always-on Social-Media-Distribution mit Paid Push.',
      'High-Ticket-Funnel mit automatisierten Nurturing-Sequenzen.',
    ],
    challenge: 'Lokaler Coach ohne digitale Reichweite',
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
    <section
      ref={ref}
      id="case-studies"
      className="py-32 relative bg-gradient-to-b from-transparent via-rich-gray-900/20 to-transparent"
    >
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
                <div className="grid lg:grid-cols-2 gap-12 p-8 lg:p-12">
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
                        <ul className="mt-2 space-y-2 text-white">
                          {study.solution.map((item) => (
                            <li key={item} className="flex gap-2 text-sm md:text-base text-rich-gray-100">
                              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-neon-lime" aria-hidden />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <span className="text-rich-gray-500 text-sm">Zeitraum</span>
                        <p className="text-cyber-cyan mt-1 font-semibold">{study.duration}</p>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-6">
                      {study.results.map((result) => (
                        <div key={result.metric} className="text-center">
                          <result.icon className="w-5 h-5 text-neon-lime mx-auto mb-2" />
                          <div className="text-2xl font-bold text-white">{result.value}</div>
                          <div className="text-xs text-rich-gray-500">{result.metric}</div>
                          {result.change && (
                            <div className="text-[11px] text-rich-gray-600 mt-1">{result.change}</div>
                          )}
                        </div>
                      ))}
                    </div>

                    {study.insights && (
                      <div>
                        <span className="text-rich-gray-500 text-sm">Interpretation</span>
                        <ul className="mt-2 space-y-2">
                          {study.insights.map((insight) => (
                            <li key={insight} className="flex gap-3 text-sm text-rich-gray-300">
                              <span className="relative mt-1 h-1.5 w-1.5 rounded-full bg-cyber-cyan" aria-hidden />
                              <span>{insight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {study.outlook && (
                      <div>
                        <span className="text-rich-gray-500 text-sm">Ausblick</span>
                        <p className="text-rich-gray-300 mt-2 text-sm md:text-base leading-relaxed">{study.outlook}</p>
                      </div>
                    )}

                    {/* Testimonial */}
                    <blockquote className="border-l-4 border-cyber-cyan pl-6 py-2">
                      <p className="text-rich-gray-300 italic">"{study.testimonial}"</p>
                    </blockquote>
                  </div>

                  {/* Image Side */}
                  <div className={`space-y-4 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="relative w-full aspect-[1000/520] overflow-hidden rounded-xl border border-rich-gray-800/60 bg-rich-gray-900">
                      <div className="absolute inset-0 bg-gradient-to-r from-cyber-cyan/15 to-neon-lime/10 mix-blend-screen" aria-hidden />
                      {study.image ? (
                        <Image
                          src={study.image.src}
                          alt={study.image.alt}
                          fill
                          sizes="(min-width: 1024px) 45vw, 100vw"
                          priority={index === 0}
                          className="object-cover"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center text-rich-gray-500">
                            <div className="text-6xl mb-4">🚀</div>
                            <p>Screenshot in Vorbereitung</p>
                          </div>
                        </div>
                      )}
                    </div>

                    {study.dataSource && (
                      <div className="flex items-center gap-2 text-xs text-rich-gray-500">
                        <Eye className="w-4 h-4 text-cyber-cyan" />
                        <span>{study.dataSource}</span>
                      </div>
                    )}
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
