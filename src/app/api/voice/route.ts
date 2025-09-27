import { NextResponse } from 'next/server'
import { z } from 'zod'

const voiceSchema = z.object({
  audio: z.string(), // Base64 encoded audio
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { audio } = voiceSchema.parse(body)

    if (!process.env.OPENAI_API_KEY && !process.env.ASSEMBLYAI_API_KEY) {
      return NextResponse.json(
        {
          error:
            'Kein Speech-to-Text-Anbieter konfiguriert. Bitte OPENAI_API_KEY oder ASSEMBLYAI_API_KEY in der Umgebung setzen.',
        },
        { status: 503 }
      )
    }

    // Hier würde die Integration mit dem konfigurierten Speech-to-Text-Dienst erfolgen.
    // Solange kein Provider eingebunden ist, liefern wir einen Platzhalter zurück.
    return NextResponse.json(
      {
        transcription:
          'Platzhalter: Bitte richten Sie Ihre Speech-to-Text API ein, um echte Voice Leads automatisch zu verarbeiten.',
        keywords: [],
        estimatedBudget: null,
        projectType: null,
        urgency: 'Unbekannt',
      },
      { status: 202 }
    )
  } catch (error) {
    console.error('Voice processing error:', error)
    return NextResponse.json(
      { error: 'Fehler bei der Sprachverarbeitung' },
      { status: 500 }
    )
  }
}
