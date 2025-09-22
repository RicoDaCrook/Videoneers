import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import MouseFollower from '@/components/animations/MouseFollower'
import { Toaster } from 'sonner'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  metadataBase: new URL('https://videoneers.de'),
  title: {
    default: 'videoneers | Die Ingenieure für digitale Sichtbarkeit',
    template: '%s | videoneers'
  },
  description: 'Wir machen Ihr Unternehmen digital sichtbar. ✓ Millionen Views generiert ✓ 287% durchschnittlicher ROI ✓ Web, SEO, Social Media & mehr',
  keywords: [
    'Webentwicklung Stuttgart',
    'SEO Agentur',
    'Social Media Marketing',
    'Digitalagentur Sindelfingen',
    'Website erstellen lassen',
    'Online Marketing Agentur',
    'Web Design Stuttgart',
    'App Entwicklung',
    'E-Commerce Agentur',
    'Performance Marketing'
  ],
  authors: [{ name: 'videoneers' }],
  creator: 'videoneers',
  publisher: 'videoneers',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    alternateLocale: 'en_US',
    url: 'https://videoneers.de',
    siteName: 'videoneers',
    title: 'videoneers | Die Ingenieure für digitale Sichtbarkeit',
    description: 'Wir machen Ihr Unternehmen digital sichtbar. Millionen Views generiert. 287% durchschnittlicher ROI.',
    images: [
      {
        url: '/og/home.jpg',
        width: 1200,
        height: 630,
        alt: 'videoneers - Digital Excellence',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'videoneers | Die Ingenieure für digitale Sichtbarkeit',
    description: 'Wir machen Ihr Unternehmen digital sichtbar. Millionen Views generiert.',
    images: ['/og/home.jpg'],
    creator: '@videoneers',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://videoneers.de',
    languages: {
      'de-DE': 'https://videoneers.de',
      'en-US': 'https://videoneers.de/en',
    },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'videoneers',
  url: 'https://videoneers.de',
  logo: 'https://videoneers.de/logo.svg',
  sameAs: [
    'https://instagram.com/videoneers',
    'https://linkedin.com/company/videoneers',
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Weimarerstraße 55',
    addressLocality: 'Sindelfingen',
    postalCode: '71065',
    addressCountry: 'DE',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+49-176-12345678',
    contactType: 'sales',
    availableLanguage: ['German', 'English'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-body bg-deep-black text-white antialiased`}>
        <MouseFollower />
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Toaster 
          theme="dark"
          position="bottom-right"
          toastOptions={{
            style: {
              background: '#171717',
              color: '#fff',
              border: '1px solid #262626',
            },
          }}
        />
        <Analytics />
      </body>
    </html>
  )
}
