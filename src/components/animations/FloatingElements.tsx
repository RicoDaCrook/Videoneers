'use client'

import { motion } from 'framer-motion'

export default function FloatingElements() {
  const shapes = [
    { size: 300, x: '10%', y: '20%', duration: 20, delay: 0 },
    { size: 200, x: '80%', y: '60%', duration: 25, delay: 2 },
    { size: 250, x: '50%', y: '80%', duration: 30, delay: 4 },
    { size: 150, x: '20%', y: '70%', duration: 22, delay: 1 },
    { size: 180, x: '70%', y: '30%', duration: 28, delay: 3 },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full"
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
            background: `radial-gradient(circle, ${
              index % 3 === 0 ? 'rgba(0, 212, 255, 0.1)' :
              index % 3 === 1 ? 'rgba(0, 255, 136, 0.1)' :
              'rgba(255, 107, 53, 0.1)'
            } 0%, transparent 70%)`,
            filter: 'blur(40px)',
          }}
          animate={{
            x: [0, 30, -30, 0],
            y: [0, -30, 30, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            delay: shape.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
