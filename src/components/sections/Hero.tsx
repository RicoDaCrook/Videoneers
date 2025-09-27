'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { ArrowDown, Sparkles, Zap, TrendingUp } from 'lucide-react'
import MagneticButton from '@/components/ui/MagneticButton'
import GradientText from '@/components/ui/GradientText'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Mesh */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan/20 via-transparent to-neon-lime/20 animate-morph" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-hot-orange/10 via-transparent to-transparent" />
      </div>

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-20 left-20 w-72 h-72 bg-cyber-cyan/20 rounded-full filter blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-neon-lime/20 rounded-full filter blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rich-gray-800/50 backdrop-blur-sm border border-rich-gray-700 mb-8"
        >
          <Sparkles className="w-4 h-4 text-cyber-cyan animate-pulse" />
          <span className="text-sm text-rich-gray-300">
            Über 2.7 Millionen generierte Views
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight mb-6"
        >
          Die Ingenieure für<br />
          <GradientText>
            <TypeAnimation
              sequence={[
                'digitale Sichtbarkeit',
                3000,
                'messbaren Erfolg',
                3000,
                'exponentielles Wachstum',
                3000,
                'virale Reichweite',
                3000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </GradientText>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-xl md:text-2xl text-rich-gray-400 max-w-3xl mx-auto mb-12"
        >
          Während andere Agenturen versprechen, <span className="text-white font-semibold">liefern wir</span>. 
          Jeder Euro zeigt Wirkung. <span className="text-cyber-cyan">287% durchschnittlicher ROI.</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <MagneticButton>
            <Link
              href="#potential"
              className="group relative px-8 py-4 bg-gradient-to-r from-cyber-cyan to-neon-lime rounded-xl font-semibold text-deep-black overflow-hidden transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Potenzial-Analyse starten
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-neon-lime to-cyber-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </MagneticButton>

          <MagneticButton>
            <Link
              href="#case-studies"
              className="px-8 py-4 border-2 border-rich-gray-700 rounded-xl font-semibold hover:border-cyber-cyan hover:text-cyber-cyan transition-all duration-300 backdrop-blur-sm"
            >
              <span className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Live-Erfolge ansehen
              </span>
            </Link>
          </MagneticButton>
        </motion.div>

        {/* Stats Preview */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-20"
        >
          {[
            { value: '2.7M+', label: 'Generierte Views' },
            { value: '287%', label: 'Ø ROI' },
            { value: '23', label: 'Erfolgreiche Projekte' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyber-cyan to-neon-lime bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-rich-gray-500 mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="w-6 h-6 text-rich-gray-600" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
