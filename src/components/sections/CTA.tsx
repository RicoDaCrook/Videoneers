'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Zap, Calendar } from 'lucide-react'
import MagneticButton from '@/components/ui/MagneticButton'

export default function CTA() {
  return (
    <section id="cta" className="py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan/20 via-transparent to-neon-lime/20" />
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-cyber-cyan/30 rounded-full filter blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-neon-lime/30 rounded-full filter blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rich-gray-800/50 backdrop-blur-sm border border-rich-gray-700 mb-6"
          >
            <Zap className="w-4 h-4 text-hot-orange animate-pulse" />
            <span className="text-sm text-rich-gray-300">Bereit für Wachstum?</span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">
            Lassen Sie uns Ihr<br />
            <span className="bg-gradient-to-r from-hot-orange via-cyber-cyan to-neon-lime bg-clip-text text-transparent">
              Potenzial entfesseln
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-rich-gray-400 max-w-3xl mx-auto mb-12">
            Keine Ausreden. Keine leeren Versprechen. 
            <span className="text-white"> Nur messbare Ergebnisse.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <MagneticButton>
              <Link
                href="https://cal.com/videoneers/strategie-call"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-10 py-5 bg-gradient-to-r from-cyber-cyan to-neon-lime rounded-xl font-semibold text-deep-black text-lg overflow-hidden hover:scale-105 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <Calendar className="w-6 h-6" />
                  Kostenloses Strategiegespräch
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-neon-lime to-hot-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </MagneticButton>

            <MagneticButton>
              <Link
                href="#case-studies"
                className="px-10 py-5 border-2 border-rich-gray-700 rounded-xl font-semibold text-lg hover:border-cyber-cyan hover:text-cyber-cyan transition-all duration-300 backdrop-blur-sm group"
              >
                <span className="flex items-center gap-3">
                  Live-Erfolge ansehen
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </MagneticButton>
          </div>

          {/* Trust Elements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-rich-gray-400"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>Antwort in < 2 Stunden</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>100% Transparenz</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>Keine Vertragsbindung</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
