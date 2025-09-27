'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TrendingUp, Eye, Users, Clock } from 'lucide-react'

type StatType = 'views' | 'conversion' | 'visitor' | 'engagement'

type PreparedUpdate = {
  id: string
  type: StatType
  value: string
  client: string
  delta?: number
}

type StatUpdate = PreparedUpdate & {
  timestamp: Date
}

const updateTimeline: PreparedUpdate[] = [
  {
    id: 'vinyl-boost-1',
    type: 'views',
    value: '+1.240 organische Sitzungen',
    client: 'Vinyl Revival Store',
    delta: 1240,
  },
  {
    id: 'techstart-leads',
    type: 'conversion',
    value: '+18 qualifizierte B2B-Leads',
    client: 'TechStart Berlin',
  },
  {
    id: 'coach-community',
    type: 'visitor',
    value: '+312 Funnel-Registrierungen',
    client: 'Coach Excellence',
  },
  {
    id: 'fashion-engagement',
    type: 'engagement',
    value: '3.4x längere Verweildauer',
    client: 'FashionForward',
  },
  {
    id: 'vinyl-boost-2',
    type: 'views',
    value: '+985 SEO-Besucher',
    client: 'Vinyl Revival Store',
    delta: 985,
  },
  {
    id: 'logichain-deals',
    type: 'conversion',
    value: '+4 Enterprise-Deals',
    client: 'LogiChain Suite',
  },
  {
    id: 'clinic-visitors',
    type: 'visitor',
    value: '+206 Terminbuchungen',
    client: 'HeartCare Clinic',
  },
  {
    id: 'saas-engagement',
    type: 'engagement',
    value: '2.1x Produktnutzung',
    client: 'SaaS Velocity',
  },
]

export default function LiveStats() {
  const [stats, setStats] = useState<StatUpdate[]>(() =>
    updateTimeline.slice(0, 4).map(update => ({ ...update, timestamp: new Date() }))
  )
  const pointerRef = useRef(4)

  const totalViews = useMemo(() => {
    const baseline = 2743892
    const incremental = stats
      .filter(update => update.type === 'views')
      .reduce((sum, update) => sum + (update.delta ?? 0), 0)

    return baseline + incremental
  }, [stats])

  useEffect(() => {
    if (!updateTimeline.length) return

    const interval = setInterval(() => {
      setStats(prev => {
        const nextUpdate = updateTimeline[pointerRef.current % updateTimeline.length]
        pointerRef.current += 1

        const hydratedUpdate: StatUpdate = {
          ...nextUpdate,
          timestamp: new Date(),
        }

        return [hydratedUpdate, ...prev].slice(0, 4)
      })
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const getIcon = (type: StatType) => {
    switch (type) {
      case 'views':
        return Eye
      case 'conversion':
        return TrendingUp
      case 'visitor':
        return Users
      case 'engagement':
        return Clock
      default:
        return Eye
    }
  }

  return (
    <div
      id="live-stats"
      className="relative py-8 overflow-hidden bg-gradient-to-r from-rich-gray-900/50 via-transparent to-rich-gray-900/50"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,#00D4FF_50%,transparent_100%)] animate-slide" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Live Counter */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="absolute inset-0 bg-cyber-cyan rounded-full blur-xl animate-pulse" />
              <div className="relative w-3 h-3 bg-cyber-cyan rounded-full" />
            </div>
            <div>
              <span className="text-sm text-rich-gray-400">LIVE</span>
              <div className="text-2xl font-bold font-mono">
                {totalViews.toLocaleString('de-DE')} Views generiert
              </div>
            </div>
          </div>

          {/* Live Updates Ticker */}
          <div className="flex-1 max-w-2xl">
            <div className="relative h-10 overflow-hidden">
              <AnimatePresence mode="popLayout">
                {stats.map((stat, index) => {
                  const Icon = getIcon(stat.type)
                  return (
                    <motion.div
                      key={`${stat.id}-${stat.timestamp.getTime()}`}
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ 
                        y: index * 40,
                        opacity: index === 0 ? 1 : 0.3 
                      }}
                      exit={{ y: -50, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-x-0 flex items-center gap-3"
                    >
                      <Icon className="w-4 h-4 text-cyber-cyan" />
                      <span className="text-sm">
                        <span className="font-semibold text-neon-lime">{stat.value}</span>
                        {' für '}
                        <span className="text-white">{stat.client}</span>
                        {' • '}
                        <span className="text-rich-gray-500">vor wenigen Sekunden</span>
                      </span>
                    </motion.div>
                  )
                })}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
