import { NextResponse } from 'next/server'
import { z } from 'zod'
import { Resend } from 'resend'

const bodySchema = z.object({
  email: z.string().email('Ungültige E-Mail-Adresse'),
})

export async function POST(request: Request) {
  try {
    const payload = await request.json()
    const { email } = bodySchema.parse(payload)

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        {
          message:
            'Newsletter-Anmeldung registriert. Hinterlege RESEND_API_KEY, um Bestätigungs-E-Mails automatisch zu versenden.',
        },
        { status: 202 }
      )
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    const audienceId = process.env.RESEND_NEWSLETTER_AUDIENCE

    if (audienceId) {
      await resend.contacts.create({
        email,
        audienceId,
      })
    }

    await resend.emails.send({
      from: 'videoneers <newsletter@videoneers.de>',
      to: [email],
      subject: 'videoneers Newsletter – Bitte bestätigen',
      html: `
        <h1>Fast geschafft!</h1>
        <p>Bestätige deine Anmeldung zum videoneers Newsletter, um keine Growth Insights zu verpassen.</p>
        <p>Falls du diese Anmeldung nicht ausgelöst hast, ignoriere diese Mail einfach.</p>
      `,
    })

    return NextResponse.json({ message: 'Newsletter-Anmeldung versendet' })
  } catch (error) {
    console.error('Newsletter API error:', error)
    return NextResponse.json({ error: 'Newsletter-Anmeldung nicht möglich.' }, { status: 500 })
  }
}
