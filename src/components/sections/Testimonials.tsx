'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import Image from 'next/image'

const testimonials = [
  {
    id: 1,
    name: 'Marcus Schmidt',
    role: 'CEO, TechStart Berlin',
    image: '/avatars/1.jpg',
    content: 'videoneers hat unser Startup auf das nächste Level gebracht. Von 0 auf 150+ qualifizierte Leads im Monat - und das bei gleichbleibenden Marketingkosten. Der ROI ist unglaublich.',
    rating: 5,
    metrics: '+890% Traffic',
  },
  {
    id: 2,
    name: 'Sarah Weber',
    role: 'Founder, FashionForward',
    image: '/avatars/2.jpg',
    content: 'Endlich eine Agentur die liefert statt nur zu versprechen. Unser Online-Shop macht jetzt 8x mehr Umsatz. Die Zusammenarbeit ist professionell und die Ergebnisse sprechen für sich.',
    rating: 5,
    metrics: '8.7x ROAS',
  },
  {
    id: 3,
    name: 'Dr. Thomas Klein',
    role: 'Coach Excellence',
    image: '/avatars/3.jpg',
    content: 'Von lokalem Coach zu internationalem Speaker in 4 Monaten. Die Social Media Strategie hat 1.2 Millionen Views generiert und mein Business komplett transformiert.',
    rating: 5,
    metrics: '1.2M Reach',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [imageFallback, setImageFallback] = useState<Record<number, boolean>>({})

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, #00D4FF 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, #00FF88 0%, transparent 50%)`,
        }} />
      </div>

      <div className="relative max-w-5xl mx-auto px-6">
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
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="text-sm text-rich-gray-300">Was Kunden sagen</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Erfolge die <span className="bg-gradient-to-r from-cyber-cyan to-neon-lime bg-clip-text text-transparent">begeistern</span>
          </h2>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-rich-gray-900/50 backdrop-blur-sm border border-rich-gray-800 rounded-2xl p-8 md:p-12"
            >
              <Quote className="w-12 h-12 text-cyber-cyan/20 mb-6" />
              
              <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
                {testimonials[current].content}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyber-cyan to-neon-lime rounded-full p-0.5 overflow-hidden">
                    {testimonials[current].image && !imageFallback[testimonials[current].id] ? (
                      <Image
                        src={testimonials[current].image}
                        alt={`${testimonials[current].name} Portrait`}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover rounded-full"
                        onError={() =>
                          setImageFallback(prev => ({ ...prev, [testimonials[current].id]: true }))
                        }
                      />
                    ) : (
                      <div className="w-full h-full bg-deep-black rounded-full flex items-center justify-center text-2xl font-bold">
                        {testimonials[current].name[0]}
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <p className="font-semibold text-white">{testimonials[current].name}</p>
                    <p className="text-sm text-rich-gray-400">{testimonials[current].role}</p>
                    <div className="flex gap-1 mt-1">
                      {[...Array(testimonials[current].rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-sm text-rich-gray-400">Ergebnis</p>
                  <p className="text-2xl font-bold text-neon-lime">{testimonials[current].metrics}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-3 bg-rich-gray-800 rounded-lg hover:bg-rich-gray-700 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === current 
                      ? 'w-8 bg-gradient-to-r from-cyber-cyan to-neon-lime' 
                      : 'w-2 bg-rich-gray-700'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={next}
              className="p-3 bg-rich-gray-800 rounded-lg hover:bg-rich-gray-700 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
