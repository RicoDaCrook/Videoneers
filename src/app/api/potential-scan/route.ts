import { NextResponse } from 'next/server'
import { z } from 'zod'
import { Resend } from 'resend'

const payloadSchema = z.object({
  answers: z.record(z.number()),
  score: z.number().min(0).max(100),
  opportunity: z.number().min(0).max(100),
  improvements: z.array(z.string()).optional(),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const data = payloadSchema.parse(body)

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        {
          message:
            'Analyse gespeichert. Hinterlege RESEND_API_KEY, um automatische Follow-ups an CRM/E-Mail zu senden.',
        },
        { status: 202 }
      )
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    await resend.emails.send({
      from: 'videoneers <noreply@videoneers.de>',
      to: [process.env.EMAIL_TO || 'kontakt@videoneers.de'],
      subject: `Neuer Growth Potential Scan (${data.score}% Score)`,
      html: `
        <h2>Neues Scanner-Ergebnis</h2>
        <p><strong>Score:</strong> ${data.score}%</p>
        <p><strong>Ungenutztes Potenzial:</strong> ${data.opportunity}%</p>
        ${
          data.improvements?.length
            ? `<p><strong>Top-Empfehlungen:</strong></p><ul>${data.improvements
                .map(item => `<li>${item}</li>`)
                .join('')}</ul>`
            : ''
        }
        <p><strong>Antwort-Details:</strong></p>
        <pre style="background:#111;padding:16px;border-radius:8px;color:#fff;">
${JSON.stringify(data.answers, null, 2)}
        </pre>
      `,
    })

    return NextResponse.json({ message: 'Potential Scan versendet' })
  } catch (error) {
    console.error('Potential scan API error:', error)
    return NextResponse.json({ error: 'Analyse konnte nicht verarbeitet werden.' }, { status: 500 })
  }
}
