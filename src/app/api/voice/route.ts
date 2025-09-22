import { NextResponse } from 'next/server'
import { z } from 'zod'

const voiceSchema = z.object({
  audio: z.string(), // Base64 encoded audio
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { audio } = voiceSchema.parse(body)

    // Here you would integrate with a speech-to-text service
    // For example: AssemblyAI, OpenAI Whisper, Google Speech-to-Text
    
    // Mock response for now
    const mockTranscription = "Ich möchte eine neue Website für mein Unternehmen erstellen lassen. Wir brauchen SEO-Optimierung und Social Media Integration."
    
    // You could also use OpenAI to summarize the transcription
    const summary = {
      transcription: mockTranscription,
      keywords: ['Website', 'SEO', 'Social Media'],
      estimatedBudget: '10.000 - 20.000 €',
      projectType: 'Website mit Marketing',
      urgency: 'Normal',
    }

    return NextResponse.json(summary, { status: 200 })
  } catch (error) {
    console.error('Voice processing error:', error)
    return NextResponse.json(
      { error: 'Fehler bei der Sprachverarbeitung' },
      { status: 500 }
    )
  }
}
