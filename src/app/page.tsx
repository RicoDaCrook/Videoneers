'use client'

import dynamic from 'next/dynamic'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import CaseStudies from '@/components/sections/CaseStudies'
import TrustIndicators from '@/components/sections/TrustIndicators'
import Process from '@/components/sections/Process'
import PotentialScanner from '@/components/sections/PotentialScanner'
import Testimonials from '@/components/sections/Testimonials'
import FAQ from '@/components/sections/FAQ'
import CTA from '@/components/sections/CTA'
import LiveStats from '@/components/sections/LiveStats'
import FloatingElements from '@/components/animations/FloatingElements'
import Contact from '@/components/sections/Contact'

const ParticleBackground = dynamic(
  () => import('@/components/animations/ParticleBackground'),
  { ssr: false }
)

export default function HomePage() {
  return (
    <>
      <ParticleBackground />
      <FloatingElements />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Trust Indicators */}
      <TrustIndicators />
      
      {/* Live Stats Ticker */}
      <LiveStats />
      
      {/* Services */}
      <Services />
      
      {/* Case Studies */}
      <CaseStudies />
      
      {/* Growth Potential Scanner */}
      <PotentialScanner />
      
      {/* Process */}
      <Process />
      
      {/* Testimonials */}
      <Testimonials />

      {/* Contact */}
      <Contact />

      {/* FAQ */}
      <FAQ />

      {/* CTA */}
      <CTA />
    </>
  )
}
