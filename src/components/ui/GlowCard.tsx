'use client'

import { motion } from 'framer-motion'

interface GlowCardProps {
  children: React.ReactNode
  className?: string
  glowColor?: string
}

export default function GlowCard({ 
  children, 
  className = '', 
  glowColor = 'from-cyber-cyan to-neon-lime' 
}: GlowCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.3 }}
      className="relative group"
    >
      {/* Glow Effect */}
      <div className={`absolute -inset-1 bg-gradient-to-r ${glowColor} rounded-xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
      
      {/* Card Content */}
      <div className={`relative bg-rich-gray-900/50 backdrop-blur-sm border border-rich-gray-800 rounded-xl overflow-hidden ${className}`}>
        {children}
      </div>
    </motion.div>
  )
}
