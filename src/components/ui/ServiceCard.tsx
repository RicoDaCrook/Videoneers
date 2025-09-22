'use client'

import { motion } from 'framer-motion'
import { LucideIcon, ArrowRight } from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  color: 'cyber-cyan' | 'neon-lime' | 'hot-orange'
}

export default function ServiceCard({ icon: Icon, title, description, features, color }: ServiceCardProps) {
  const colorClasses = {
    'cyber-cyan': 'from-cyber-cyan/20 to-cyber-cyan/5 border-cyber-cyan/20 text-cyber-cyan',
    'neon-lime': 'from-neon-lime/20 to-neon-lime/5 border-neon-lime/20 text-neon-lime',
    'hot-orange': 'from-hot-orange/20 to-hot-orange/5 border-hot-orange/20 text-hot-orange',
  }

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="group relative h-full"
    >
      {/* Glow Effect on Hover */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${colorClasses[color].split(' ')[0].replace('from-', 'from-').replace('/20', '')} ${colorClasses[color].split(' ')[1].replace('to-', 'to-').replace('/5', '')} rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />
      
      <div className="relative h-full bg-rich-gray-900/50 backdrop-blur-sm border border-rich-gray-800 rounded-xl p-6 hover:border-rich-gray-700 transition-all duration-300">
        {/* Icon Container */}
        <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${colorClasses[color]} flex items-center justify-center mb-4`}>
          <Icon className="w-7 h-7" />
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
        <p className="text-rich-gray-400 mb-4">{description}</p>

        {/* Features */}
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-sm text-rich-gray-300">
              <div className={`w-1.5 h-1.5 rounded-full ${colorClasses[color].split(' ')[3]}`} />
              {feature}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button className="flex items-center gap-2 text-sm font-semibold text-white hover:text-cyber-cyan transition-colors group/btn">
          <span>Mehr erfahren</span>
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  )
}
