'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TrendingUp, Eye, Users, Clock } from 'lucide-react'

interface StatUpdate {
  id: string
  type: 'views' | 'conversion' | 'visitor' | 'engagement'
  value: string
  client: string
  timestamp: Date
}

export default function LiveStats() {
  const [stats, setStats] = useState<StatUpdate[]>([])
  const [totalViews, setTotalViews] = useState(2743892)

  useEffect(() => {
    // Simuliere Live-Updates
    const interval = setInterval(() => {
      const newStat: StatUpdate = {
        id: Date.now().toString(),
        type: ['views', 'conversion', 'visitor', 'engagement'][Math.floor(Math.random() * 4)] as any,
        value: getRandomValue(),
        client: getRandomClient(),
        timestamp: new Date(),
      }
      
      setStats(prev => [newStat, ...prev.slice(0, 4)])
      setTotalViews(prev => prev + Math.floor(Math.random() * 100))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  function getRandomValue() {
    const values = [
      '+127 Views',
      '+3.2% Conversion',
      '+42 Visitors',
      '2.5x Engagement',
      '+89 Clicks',
      '+5 Leads',
    ]
    return values[Math.floor(Math.random() * values.length)]
  }

  function getRandomClient() {
    const clients = [
      'TechStart Berlin',
      'FashionForward',
      'Coach Excellence',
      'Digital Solutions',
      'Growth Marketing',
    ]
    return clients[Math.floor(Math.random() * clients.length)]
  }

  const getIcon = (type: string) => {
    switch (type) {
      case 'views': return Eye
      case 'conversion': return TrendingUp
      case 'visitor': return Users
      case 'engagement': return Clock
      default: return Eye
    }
  }

  return (
    <div className="relative py-8 overflow-hidden bg-gradient-to-r from-rich-gray-900/50 via-transparent to-rich-gray-900/50">
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
                      key={stat.id}
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
