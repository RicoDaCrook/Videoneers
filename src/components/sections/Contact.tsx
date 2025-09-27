'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Mic, 
  Send, 
  Phone, 
  Mail, 
  MessageSquare,
  Calendar,
  Loader2,
  CheckCircle,
  Globe,
  MapPin
} from 'lucide-react'
import GlowCard from '@/components/ui/GlowCard'
import { toast } from 'sonner'

export default function Contact() {
  const [isRecording, setIsRecording] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    budget: '',
    message: '',
    projectType: [] as string[],
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleVoiceRecord = () => {
    if (isRecording) {
      setIsRecording(false)
      return
    }

    setIsRecording(true)
    toast.warning('Voice Upload benötigt eine Speech-to-Text API. Bitte hinterlege den Service, bevor du hier startest.')
    setTimeout(() => setIsRecording(false), 2000)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          projectType: formData.projectType,
        }),
      })

      if (!response.ok) {
        const payload = await response.json().catch(() => null)
        throw new Error(payload?.error ?? 'Anfrage konnte nicht gesendet werden.')
      }

      toast.success('Nachricht gesendet! Wir melden uns in < 2 Stunden.')
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        budget: '',
        message: '',
        projectType: [],
      })
    } catch (error) {
      console.error('contact form submit failed', error)
      toast.error('Bitte API-Key für RESEND konfigurieren oder erneut versuchen.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const projectTypes = [
    'Website', 'App', 'SEO', 'Social Media', 'Branding', 'E-Commerce', 'Andere'
  ]

  return (
    <section className="py-32 relative" id="contact">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rich-gray-800/50 backdrop-blur-sm border border-rich-gray-700 mb-6"
          >
            <MessageSquare className="w-4 h-4 text-cyber-cyan" />
            <span className="text-sm text-rich-gray-300">Let's Talk</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Projekt <span className="bg-gradient-to-r from-cyber-cyan to-neon-lime bg-clip-text text-transparent">starten</span>
          </h2>
          
          <p className="text-xl text-rich-gray-400 max-w-2xl mx-auto">
            Antwort in unter 2 Stunden. Garantiert.
            <span className="text-white"> Sprechen, schreiben oder anrufen.</span>
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Form - 3 columns */}
          <div className="lg:col-span-3">
            <GlowCard>
              <form onSubmit={handleSubmit} className="p-8 space-y-6">
                {/* Voice Input Option */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="p-4 bg-gradient-to-r from-cyber-cyan/10 to-neon-lime/10 rounded-xl border border-cyber-cyan/20"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-white">Keine Lust zu tippen?</p>
                      <p className="text-sm text-rich-gray-400">Sprechen Sie Ihre Anfrage einfach ein</p>
                    </div>
                    <button
                      type="button"
                      onClick={handleVoiceRecord}
                      className={`p-4 rounded-xl transition-all duration-300 ${
                        isRecording 
                          ? 'bg-red-500 animate-pulse' 
                          : 'bg-cyber-cyan hover:bg-cyber-cyan/80'
                      }`}
                    >
                      <Mic className="w-6 h-6 text-white" />
                    </button>
                  </div>
                </motion.div>

                {/* Project Types */}
                <div>
                  <label className="block text-sm font-medium text-rich-gray-300 mb-3">
                    Was brauchen Sie? (Mehrfachauswahl)
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {projectTypes.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => {
                          const types = formData.projectType.includes(type)
                            ? formData.projectType.filter(t => t !== type)
                            : [...formData.projectType, type]
                          setFormData({ ...formData, projectType: types })
                        }}
                        className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
                          formData.projectType.includes(type)
                            ? 'bg-cyber-cyan text-deep-black border-cyber-cyan'
                            : 'border-rich-gray-700 hover:border-cyber-cyan'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Form Fields */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-rich-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-rich-gray-800/50 border border-rich-gray-700 rounded-lg focus:border-cyber-cyan focus:outline-none transition-colors"
                      placeholder="Max Mustermann"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-rich-gray-300 mb-2">
                      E-Mail *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-rich-gray-800/50 border border-rich-gray-700 rounded-lg focus:border-cyber-cyan focus:outline-none transition-colors"
                      placeholder="max@unternehmen.de"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-rich-gray-300 mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-rich-gray-800/50 border border-rich-gray-700 rounded-lg focus:border-cyber-cyan focus:outline-none transition-colors"
                      placeholder="+49 176 12345678"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-rich-gray-300 mb-2">
                      Budget-Rahmen
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 bg-rich-gray-800/50 border border-rich-gray-700 rounded-lg focus:border-cyber-cyan focus:outline-none transition-colors"
                    >
                      <option value="">Bitte wählen</option>
                      <option value="5-15k">5.000 - 15.000 €</option>
                      <option value="15-30k">15.000 - 30.000 €</option>
                      <option value="30-50k">30.000 - 50.000 €</option>
                      <option value="50k+">50.000+ €</option>
                      <option value="custom">Individuell besprechen</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-rich-gray-300 mb-2">
                    Ihre Nachricht
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 bg-rich-gray-800/50 border border-rich-gray-700 rounded-lg focus:border-cyber-cyan focus:outline-none transition-colors resize-none"
                    placeholder="Erzählen Sie uns von Ihrem Projekt..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-cyber-cyan to-neon-lime rounded-xl font-semibold text-deep-black hover:scale-[1.02] transition-transform duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Wird gesendet...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Nachricht senden</span>
                    </>
                  )}
                </button>

                <p className="text-xs text-rich-gray-500 text-center">
                  Mit dem Absenden stimmen Sie unserer Datenschutzerklärung zu.
                </p>
              </form>
            </GlowCard>
          </div>

          {/* Contact Info - 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Contact */}
            <GlowCard>
              <div className="p-8 space-y-6">
                <h3 className="text-2xl font-bold mb-6">Direkter Draht</h3>
                
                <a
                  href="https://wa.me/4917612345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-green-500/10 rounded-xl border border-green-500/20 hover:bg-green-500/20 transition-colors"
                >
                  <MessageSquare className="w-6 h-6 text-green-500" />
                  <div>
                    <p className="font-semibold">WhatsApp Business</p>
                    <p className="text-sm text-rich-gray-400">Schnellste Antwort</p>
                  </div>
                </a>

                <a
                  href="tel:+4917612345678"
                  className="flex items-center gap-4 p-4 bg-rich-gray-800/50 rounded-xl hover:bg-rich-gray-800 transition-colors"
                >
                  <Phone className="w-6 h-6 text-cyber-cyan" />
                  <div>
                    <p className="font-semibold">+49 176 12345678</p>
                    <p className="text-sm text-rich-gray-400">Mo-Fr 9-18 Uhr</p>
                  </div>
                </a>

                <a
                  href="mailto:kontakt@videoneers.de"
                  className="flex items-center gap-4 p-4 bg-rich-gray-800/50 rounded-xl hover:bg-rich-gray-800 transition-colors"
                >
                  <Mail className="w-6 h-6 text-cyber-cyan" />
                  <div>
                    <p className="font-semibold">kontakt@videoneers.de</p>
                    <p className="text-sm text-rich-gray-400">24h Antwort</p>
                  </div>
                </a>
              </div>
            </GlowCard>

            {/* Office Info */}
            <GlowCard>
              <div className="p-8 space-y-4">
                <h3 className="text-2xl font-bold mb-4">Headquarter</h3>
                
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-cyber-cyan mt-1" />
                  <div>
                    <p className="font-semibold">videoneers</p>
                    <p className="text-rich-gray-400">
                      Weimarerstraße 55<br />
                      71065 Sindelfingen<br />
                      Deutschland
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-cyber-cyan mt-1" />
                  <div>
                    <p className="font-semibold">International</p>
                    <p className="text-rich-gray-400">
                      Projekte weltweit<br />
                      Remote-First Arbeitsweise
                    </p>
                  </div>
                </div>
              </div>
            </GlowCard>

            {/* Quick Booking */}
            <GlowCard>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-6 h-6 text-neon-lime" />
                  <h3 className="text-xl font-bold">Termin buchen</h3>
                </div>
                
                <p className="text-rich-gray-400 mb-4">
                  30 Min. kostenloses Strategiegespräch
                </p>
                
                <a
                  href="https://cal.com/videoneers/strategie-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-6 py-3 bg-neon-lime text-deep-black rounded-lg font-semibold text-center hover:bg-neon-lime/90 transition-colors"
                >
                  Kalender öffnen
                </a>
              </div>
            </GlowCard>
          </div>
        </div>
      </div>
    </section>
  )
}
