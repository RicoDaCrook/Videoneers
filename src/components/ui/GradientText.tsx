'use client'

interface GradientTextProps {
  children: React.ReactNode
  gradient?: string
  className?: string
}

export default function GradientText({ 
  children, 
  gradient = 'from-cyber-cyan via-neon-lime to-hot-orange',
  className = ''
}: GradientTextProps) {
  return (
    <span className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent animate-gradient ${className}`}>
      {children}
    </span>
  )
}
