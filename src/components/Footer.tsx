'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Instagram,
  Linkedin,
  Twitter,
  Github,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight
} from 'lucide-react'
import { useCookiePreferences } from '@/components/compliance/CookiePreferences'
import { toast } from 'sonner'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { openPreferences } = useCookiePreferences()
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const footerLinks = {
    services: [
      { label: 'Web Development', href: '#services' },
      { label: 'SEO & SEA', href: '#services' },
      { label: 'Social Media', href: '#services' },
      { label: 'App Development', href: '#services' },
      { label: 'E-Commerce', href: '#services' },
    ],
    company: [
      { label: 'Case Studies', href: '#case-studies' },
      { label: 'Unser Prozess', href: '#process' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Testimonials', href: '#testimonials' },
      { label: 'Kontakt', href: '#contact' },
    ],
    legal: [
      { label: 'Impressum', href: '/impressum' },
      { label: 'Datenschutz', href: '/datenschutz' },
      { label: 'AGB', href: '/agb' },
      { label: 'Cookie-Einstellungen', href: '#', onClick: openPreferences },
    ],
  }

  const handleNewsletterSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    if (!newsletterEmail) {
      toast.error('Bitte geben Sie Ihre E-Mail-Adresse ein.')
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: newsletterEmail }),
      })

      if (!response.ok) {
        const payload = await response.json().catch(() => null)
        throw new Error(payload?.error ?? 'Newsletter-Anmeldung fehlgeschlagen.')
      }

      toast.success('Danke! Bitte bestätigen Sie Ihre Anmeldung in Ihrem Postfach.')
      setNewsletterEmail('')
    } catch (error) {
      console.error('newsletter signup failed', error)
      toast.error('Newsletter-API benötigt einen RESEND_API_KEY oder ähnliche Integration.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/videoneers', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com/company/videoneers', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/videoneers', label: 'Twitter' },
    { icon: Github, href: 'https://github.com/videoneers', label: 'GitHub' },
  ]

  return (
    <footer className="relative bg-deep-black border-t border-rich-gray-800">
      {/* Newsletter Section */}
      <div className="border-b border-rich-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">
                Bleiben Sie am <span className="text-cyber-cyan">Puls der Zeit</span>
              </h3>
              <p className="text-rich-gray-400">
                Wöchentliche Insights zu Digital Marketing, Tech & Growth
              </p>
            </div>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-4 w-full md:w-auto">
              <input
                type="email"
                placeholder="ihre@email.de"
                value={newsletterEmail}
                onChange={(event) => setNewsletterEmail(event.target.value)}
                className="px-4 py-3 bg-rich-gray-900 border border-rich-gray-800 rounded-lg focus:border-cyber-cyan focus:outline-none transition-colors flex-1 md:w-64"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-gradient-to-r from-cyber-cyan to-neon-lime rounded-lg font-semibold text-deep-black hover:scale-105 transition-transform disabled:opacity-50 disabled:hover:scale-100"
              >
                {isSubmitting ? 'Wird gesendet…' : 'Abonnieren'}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyber-cyan to-neon-lime rounded-lg blur-xl opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="relative w-10 h-10 bg-gradient-to-r from-cyber-cyan to-neon-lime rounded-lg flex items-center justify-center">
                  <span className="text-deep-black font-bold text-xl">V</span>
                </div>
              </div>
              <span className="font-display font-bold text-xl">videoneers</span>
            </Link>
            
            <p className="text-rich-gray-400 mb-6 max-w-sm">
              Die Ingenieure für digitale Sichtbarkeit. Wir machen Ihr Unternehmen erfolgreich - messbar, nachhaltig, außergewöhnlich.
            </p>

            <div className="space-y-3 mb-6">
              <a href="tel:+4917612345678" className="flex items-center gap-3 text-rich-gray-400 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                <span>+49 176 12345678</span>
              </a>
              <a href="mailto:kontakt@videoneers.de" className="flex items-center gap-3 text-rich-gray-400 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                <span>kontakt@videoneers.de</span>
              </a>
              <div className="flex items-center gap-3 text-rich-gray-400">
                <MapPin className="w-4 h-4" />
                <span>Weimarerstraße 55, 71065 Sindelfingen</span>
              </div>
            </div>

            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-rich-gray-900 rounded-lg hover:bg-rich-gray-800 transition-colors group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-rich-gray-400 group-hover:text-cyber-cyan transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    scroll
                    className="text-rich-gray-400 hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Unternehmen</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    scroll
                    className="text-rich-gray-400 hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Rechtliches</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  {link.onClick ? (
                    <button
                      onClick={link.onClick}
                      className="text-rich-gray-400 hover:text-white transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-rich-gray-400 hover:text-white transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-rich-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-rich-gray-500 text-sm">
              © {currentYear} videoneers. Alle Rechte vorbehalten.
            </p>
            <p className="text-rich-gray-500 text-sm">
              Made with <span className="text-red-500">❤</span> in Stuttgart
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
