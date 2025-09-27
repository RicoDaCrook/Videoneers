import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'

const resendApiKey = process.env.RESEND_API_KEY
const resend = resendApiKey ? new Resend(resendApiKey) : null

const contactSchema = z.object({
  name: z.string().min(2, 'Name ist zu kurz'),
  email: z.string().email('Ungültige E-Mail'),
  phone: z.string().optional(),
  company: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(10, 'Nachricht ist zu kurz'),
  projectType: z.array(z.string()).optional(),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // Validate input
    const validatedData = contactSchema.parse(body)
    
    if (!resend) {
      return NextResponse.json(
        { error: 'RESEND_API_KEY fehlt. Bitte in der Deployment-Umgebung hinterlegen.' },
        { status: 503 }
      )
    }

    // Create email HTML
    const emailHtml = `
      <h2>Neue Kontaktanfrage von ${validatedData.name}</h2>
      <p><strong>E-Mail:</strong> ${validatedData.email}</p>
      ${validatedData.phone ? `<p><strong>Telefon:</strong> ${validatedData.phone}</p>` : ''}
      ${validatedData.company ? `<p><strong>Unternehmen:</strong> ${validatedData.company}</p>` : ''}
      ${validatedData.budget ? `<p><strong>Budget:</strong> ${validatedData.budget}</p>` : ''}
      ${validatedData.projectType && validatedData.projectType.length > 0 ? 
        `<p><strong>Projekttyp:</strong> ${validatedData.projectType.join(', ')}</p>` : ''}
      <h3>Nachricht:</h3>
      <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
    `

    // Send email via Resend
    const { error } = await resend.emails.send({
      from: 'videoneers <noreply@videoneers.de>',
      to: [process.env.EMAIL_TO || 'kontakt@videoneers.de'],
      subject: `Neue Anfrage: ${validatedData.name} - ${validatedData.projectType?.join(', ') || 'Allgemein'}`,
      html: emailHtml,
      reply_to: validatedData.email,
    })

    if (error) {
      return NextResponse.json(
        { error: 'Fehler beim Senden der E-Mail' },
        { status: 500 }
      )
    }

    // Send auto-reply to customer
    await resend.emails.send({
      from: 'videoneers <noreply@videoneers.de>',
      to: [validatedData.email],
      subject: 'Ihre Anfrage bei videoneers - Wir melden uns in < 2 Stunden',
      html: `
        <h1>Vielen Dank für Ihre Anfrage, ${validatedData.name}!</h1>
        <p>Wir haben Ihre Nachricht erhalten und werden uns innerhalb der nächsten 2 Stunden bei Ihnen melden.</p>
        <p>In der Zwischenzeit können Sie gerne:</p>
        <ul>
          <li>Unser <a href="https://videoneers.de/portfolio">Portfolio</a> ansehen</li>
          <li>Unseren <a href="https://videoneers.de/blog">Blog</a> lesen</li>
          <li>Uns auf <a href="https://instagram.com/videoneers">Instagram</a> folgen</li>
        </ul>
        <p>Bei dringenden Anfragen erreichen Sie uns auch per WhatsApp: <a href="https://wa.me/4917612345678">+49 176 12345678</a></p>
        <br>
        <p>Mit besten Grüßen,<br>Ihr videoneers Team</p>
      `,
    })

    return NextResponse.json(
      { message: 'Anfrage erfolgreich gesendet' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Ein Fehler ist aufgetreten' },
      { status: 500 }
    )
  }
}
