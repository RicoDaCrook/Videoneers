'use client'

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

type CookiePreferences = {
  necessary: boolean
  analytics: boolean
  marketing: boolean
}

const STORAGE_KEY = 'videoneers-cookie-preferences'

const defaultPreferences: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
}

type CookiePreferencesContextType = {
  openPreferences: () => void
  preferences: CookiePreferences
}

const CookiePreferencesContext = createContext<CookiePreferencesContextType | undefined>(undefined)

type CookiePreferencesProviderProps = {
  children: ReactNode
}

export function CookiePreferencesProvider({ children }: CookiePreferencesProviderProps) {
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences)
  const [isBannerVisible, setIsBannerVisible] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)

      if (stored) {
        const parsed = JSON.parse(stored) as CookiePreferences
        setPreferences({ ...defaultPreferences, ...parsed })
        setIsBannerVisible(false)
      } else {
        setIsBannerVisible(true)
      }
    } catch (error) {
      console.error('Cookie preferences parse error:', error)
      setIsBannerVisible(true)
    }
  }, [])

  const savePreferences = (next: CookiePreferences) => {
    setPreferences(next)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
    setIsBannerVisible(false)
  }

  const acceptAll = () => {
    savePreferences({ necessary: true, analytics: true, marketing: true })
  }

  const rejectAll = () => {
    savePreferences({ necessary: true, analytics: false, marketing: false })
  }

  const value = useMemo(() => ({
    openPreferences: () => setIsModalOpen(true),
    preferences,
  }), [preferences])

  return (
    <CookiePreferencesContext.Provider value={value}>
      {children}

      <AnimatePresence>
        {isBannerVisible && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 left-1/2 z-[60] w-[95%] max-w-3xl -translate-x-1/2 rounded-2xl border border-rich-gray-800 bg-rich-gray-900/95 p-6 shadow-lg"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white">Cookies für ein besseres Erlebnis</h3>
                <p className="text-sm text-rich-gray-400">
                  Wir verwenden Cookies, um unsere Website zu optimieren und Marketing zu messen. Sie können Ihre Auswahl jederzeit anpassen.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={() => {
                    setIsModalOpen(true)
                    setIsBannerVisible(false)
                  }}
                  className="rounded-lg border border-rich-gray-700 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-cyber-cyan"
                >
                  Einstellungen
                </button>
                <button
                  onClick={rejectAll}
                  className="rounded-lg border border-rich-gray-700 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-cyber-cyan"
                >
                  Ablehnen
                </button>
                <button
                  onClick={acceptAll}
                  className="rounded-lg bg-gradient-to-r from-cyber-cyan to-neon-lime px-4 py-2 text-sm font-semibold text-deep-black transition-transform hover:scale-[1.02]"
                >
                  Alle akzeptieren
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 px-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-2xl rounded-2xl border border-rich-gray-800 bg-deep-black p-8 shadow-xl"
            >
              <div className="mb-6 flex items-start justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-semibold text-white">Cookie-Einstellungen</h3>
                  <p className="mt-2 text-sm text-rich-gray-400">
                    Entscheiden Sie, welche Daten wir analysieren dürfen. Notwendige Cookies sind immer aktiv.
                  </p>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-sm text-rich-gray-400 transition-colors hover:text-white"
                >
                  Schließen
                </button>
              </div>

              <div className="space-y-4">
                <PreferenceToggle
                  title="Notwendig"
                  description="Erforderlich für Grundfunktionen wie Formularversand und Sicherheit."
                  checked
                  disabled
                />
                <PreferenceToggle
                  title="Analytics"
                  description="Hilft uns, Nutzungsverhalten zu verstehen und die Website zu verbessern."
                  checked={preferences.analytics}
                  onChange={value => setPreferences(prev => ({ ...prev, analytics: value }))}
                />
                <PreferenceToggle
                  title="Marketing"
                  description="Aktiviert personalisierte Inhalte und Remarketing-Kampagnen."
                  checked={preferences.marketing}
                  onChange={value => setPreferences(prev => ({ ...prev, marketing: value }))}
                />
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-end">
                <button
                  onClick={() => {
                    setPreferences(defaultPreferences)
                    rejectAll()
                    setIsModalOpen(false)
                  }}
                  className="rounded-lg border border-rich-gray-700 px-5 py-2 text-sm font-semibold text-white transition-colors hover:border-cyber-cyan"
                >
                  Nur notwendige speichern
                </button>
                <button
                  onClick={() => {
                    savePreferences(preferences)
                    setIsModalOpen(false)
                  }}
                  className="rounded-lg bg-gradient-to-r from-cyber-cyan to-neon-lime px-5 py-2 text-sm font-semibold text-deep-black transition-transform hover:scale-[1.02]"
                >
                  Auswahl speichern
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </CookiePreferencesContext.Provider>
  )
}

type PreferenceToggleProps = {
  title: string
  description: string
  checked: boolean
  disabled?: boolean
  onChange?: (checked: boolean) => void
}

function PreferenceToggle({ title, description, checked, disabled, onChange }: PreferenceToggleProps) {
  return (
    <label className={`flex items-start gap-4 rounded-2xl border border-rich-gray-800 p-5 ${disabled ? 'opacity-60' : ''}`}>
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={event => onChange?.(event.target.checked)}
        className="mt-1 h-4 w-4 cursor-pointer accent-cyber-cyan"
      />
      <div>
        <p className="text-base font-semibold text-white">{title}</p>
        <p className="text-sm text-rich-gray-400">{description}</p>
      </div>
    </label>
  )
}

export function useCookiePreferences() {
  const context = useContext(CookiePreferencesContext)

  if (!context) {
    throw new Error('useCookiePreferences must be used within CookiePreferencesProvider')
  }

  return context
}
