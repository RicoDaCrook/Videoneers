import { NextResponse } from 'next/server'
import { z } from 'zod'

const calculatorSchema = z.object({
  projectType: z.enum(['website', 'app', 'ecommerce', 'marketing']),
  features: z.array(z.string()),
  timeline: z.enum(['urgent', 'normal', 'flexible']),
  budget: z.enum(['starter', 'professional', 'enterprise']),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const data = calculatorSchema.parse(body)

    // Base prices
    const basePrices = {
      website: 5000,
      app: 15000,
      ecommerce: 10000,
      marketing: 3000,
    }

    // Feature multipliers
    const featureMultipliers: Record<string, number> = {
      'seo': 1.3,
      'cms': 1.2,
      'multilingual': 1.4,
      'animations': 1.2,
      'api-integration': 1.5,
      'ai-features': 1.8,
      'payment': 1.3,
      'user-auth': 1.3,
    }

    // Timeline multipliers
    const timelineMultipliers = {
      urgent: 1.5,
      normal: 1.0,
      flexible: 0.9,
    }

    // Calculate estimated price
    let price = basePrices[data.projectType]
    
    // Apply feature multipliers
    data.features.forEach(feature => {
      if (featureMultipliers[feature]) {
        price *= featureMultipliers[feature]
      }
    })

    // Apply timeline multiplier
    price *= timelineMultipliers[data.timeline]

    // Round to nearest 500
    price = Math.round(price / 500) * 500

    // Create price range
    const minPrice = price * 0.8
    const maxPrice = price * 1.2

    // Generate insights
    const insights = [
      `Geschätzte Projektdauer: ${getEstimatedDuration(data.projectType, data.timeline)}`,
      `ROI-Potenzial: ${getROIPotential(data.projectType)}`,
      `Empfohlene Features: ${getRecommendedFeatures(data.projectType)}`,
    ]

    return NextResponse.json({
      estimatedPrice: {
        min: Math.round(minPrice),
        max: Math.round(maxPrice),
        average: Math.round(price),
      },
      insights,
      timeline: getEstimatedDuration(data.projectType, data.timeline),
      recommendedPackage: getRecommendedPackage(price),
    }, { status: 200 })
  } catch (error) {
    console.error('Calculator error:', error)
    return NextResponse.json(
      { error: 'Kalkulationsfehler' },
      { status: 500 }
    )
  }
}

function getEstimatedDuration(projectType: string, timeline: string): string {
  const durations: Record<string, Record<string, string>> = {
    website: { urgent: '2 Wochen', normal: '4 Wochen', flexible: '6 Wochen' },
    app: { urgent: '6 Wochen', normal: '3 Monate', flexible: '4 Monate' },
    ecommerce: { urgent: '4 Wochen', normal: '8 Wochen', flexible: '3 Monate' },
    marketing: { urgent: '1 Woche', normal: '2 Wochen', flexible: '4 Wochen' },
  }
  return durations[projectType][timeline]
}

function getROIPotential(projectType: string): string {
  const roi: Record<string, string> = {
    website: '250-400% in 12 Monaten',
    app: '300-500% in 18 Monaten',
    ecommerce: '400-800% in 12 Monaten',
    marketing: '200-350% in 6 Monaten',
  }
  return roi[projectType]
}

function getRecommendedFeatures(projectType: string): string {
  const features: Record<string, string> = {
    website: 'SEO, Analytics, CMS',
    app: 'Push Notifications, Analytics, Cloud Sync',
    ecommerce: 'Payment Gateway, Inventory, Analytics',
    marketing: 'A/B Testing, Analytics, Automation',
  }
  return features[projectType]
}

function getRecommendedPackage(price: number): string {
  if (price < 10000) return 'Starter Package'
  if (price < 25000) return 'Professional Package'
  return 'Enterprise Package'
}
