'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Menu, X, Globe, ChevronDown } from 'lucide-react'
import MagneticButton from '@/components/ui/MagneticButton'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [currentLang, setCurrentLang] = useState('de')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/about', label: 'Über uns' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Kontakt' },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-deep-black/80 backdrop-blur-xl border-b border-rich-gray-800' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyber-cyan to-neon-lime rounded-lg blur-xl opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="relative w-10 h-10 bg-gradient-to-r from-cyber-cyan to-neon-lime rounded-lg flex items-center justify-center">
                  <span className="text-deep-black font-bold text-xl">V</span>
                </div>
              </div>
              <span className="font-display font-bold text-xl">videoneers</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <MagneticButton key={item.href}>
                  <Link
                    href={item.href}
                    className="relative py-2 text-rich-gray-300 hover:text-white transition-colors group"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyber-cyan to-neon-lime group-hover:w-full transition-all duration-300" />
                  </Link>
                </MagneticButton>
              ))}

              {/* Language Switcher */}
              <div className="relative group">
                <button className="flex items-center gap-2 px-3 py-2 text-rich-gray-300 hover:text-white transition-colors">
                  <Globe className="w-4 h-4" />
                  <span className="uppercase">{currentLang}</span>
                  <ChevronDown className="w-3 h-3" />
                </button>
                <div className="absolute top-full right-0 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="bg-rich-gray-900 border border-rich-gray-800 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setCurrentLang('de')}
                      className="block w-full px-4 py-2 text-left hover:bg-rich-gray-800 transition-colors"
                    >
                      Deutsch
                    </button>
                    <button
                      onClick={() => setCurrentLang('en')}
                      className="block w-full px-4 py-2 text-left hover:bg-rich-gray-800 transition-colors"
                    >
                      English
                    </button>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <MagneticButton>
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-gradient-to-r from-cyber-cyan to-neon-lime rounded-lg font-semibold text-deep-black hover:scale-105 transition-transform"
                >
                  Projekt starten
                </Link>
              </MagneticButton>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 20 }}
              className="absolute right-0 top-0 h-full w-full sm:w-80 bg-deep-black/95 backdrop-blur-xl border-l border-rich-gray-800"
            >
              <div className="flex flex-col p-6 pt-24 space-y-6">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-2xl font-display text-white hover:text-cyber-cyan transition-colors"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="pt-6 border-t border-rich-gray-800"
                >
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full px-6 py-3 bg-gradient-to-r from-cyber-cyan to-neon-lime rounded-lg font-semibold text-deep-black text-center"
                  >
                    Projekt starten
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
