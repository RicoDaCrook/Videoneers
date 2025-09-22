'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Globe, 
  Search, 
  Smartphone, 
  ShoppingBag,
  Video,
  Palette,
  Megaphone,
  Bot,
  Rocket,
  Code
} from 'lucide-react'
import ServiceCard from '@/components/ui/ServiceCard'

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Blitzschnelle, SEO-optimierte Websites die verkaufen. Next.js, React, Full-Stack.',
    features: ['100/100 PageSpeed', 'Mobile First', 'Conversion-optimiert'],
    color: 'cyber-cyan',
  },
  {
    icon: Search,
    title: 'SEO Dominanz',
    description: 'Platz 1 bei Google. Keine leeren Versprechen, nur messbare Ergebnisse.',
    features: ['Technisches SEO', 'Content-Strategie', 'Local SEO'],
    color: 'neon-lime',
  },
  {
    icon: Megaphone,
    title: 'Social Media',
    description: 'Von 0 auf 1 Million Views. Nachweislich. Viral. Authentisch.',
    features: ['Content Creation', 'Community Management', 'Influencer Marketing'],
    color: 'hot-orange',
  },
  {
    icon: Video,
    title: 'Video Content',
    description: 'Reels, TikToks, YouTube - Content der gesehen wird und konvertiert.',
    features: ['Konzeption', 'Produktion', 'Distribution'],
    color: 'cyber-cyan',
  },
  {
    icon: Smartphone,
    title: 'App Development',
    description: 'Native & Cross-Platform Apps die Nutzer lieben und täglich öffnen.',
    features: ['iOS & Android', 'React Native', 'Flutter'],
    color: 'neon-lime',
  },
  {
    icon: ShoppingBag,
    title: 'E-Commerce',
    description: 'Online-Shops die verkaufen. Shopify, WooCommerce, Custom Solutions.',
    features: ['Shop-Setup', 'Payment Integration', 'Conversion-Optimierung'],
    color: 'hot-orange',
  },
  {
    icon: Bot,
    title: 'KI Integration',
    description: 'ChatGPT, Automatisierung, Machine Learning - die Zukunft, heute.',
    features: ['Chatbots', 'Prozess-Automation', 'Predictive Analytics'],
    color: 'cyber-cyan',
  },
  {
    icon: Palette,
    title: 'Branding & Design',
    description: 'Marken die im Kopf bleiben. Logo, Corporate Design, Brand Strategy.',
    features: ['Logo Design', 'Brand Guidelines', 'UI/UX Design'],
    color: 'neon-lime',
  },
  {
    icon: Rocket,
    title: 'Performance Marketing',
    description: 'Google Ads, Meta Ads - jeder Euro arbeitet für Sie.',
    features: ['PPC Kampagnen', 'Retargeting', 'A/B Testing'],
    color: 'hot-orange',
  },
]

export default function Services() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section ref={ref} className="py-32 relative">
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
            <Code className="w-4 h-4 text-cyber-cyan" />
            <span className="text-sm text-rich-gray-300">Full-Service Digital</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Alles aus <span className="bg-gradient-to-r from-cyber-cyan to-neon-lime bg-clip-text text-transparent">einer Hand</span>
          </h2>
          
          <p className="text-xl text-rich-gray-400 max-w-3xl mx-auto">
            Keine Schnittstellen-Probleme. Keine Ausreden. 
            <span className="text-white"> Ein Team, das liefert.</span>
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-rich-gray-400 mb-6">
            Nicht das Richtige dabei? Wir finden eine Lösung.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-cyber-cyan to-neon-lime rounded-xl font-semibold text-deep-black hover:scale-105 transition-transform duration-300">
            Individuelles Projekt besprechen
          </button>
        </motion.div>
      </div>
    </section>
  )
}
