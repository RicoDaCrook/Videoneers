## Videoneers – Die Ingenieure für digitale Sichtbarkeit

Next.js 14 · TypeScript · Tailwind CSS · Framer Motion · Sanity CMS

### 🚀 Quick Start
```bash
# Dependencies installieren
npm install

# Lokale Entwicklung
npm run dev

# Produktions-Build
npm run build

# Produktion starten (nach npm run build)
npm start
```

### 🔐 Erforderliche ENV Variablen

Legen Sie eine `.env.local` an und ergänzen Sie bei Bedarf:

| Variable | Beschreibung |
| --- | --- |
| `RESEND_API_KEY` | API Key für das Versenden von Kontakt- und Newsletter-E-Mails |
| `EMAIL_TO` | Zieladresse für Kontaktformulare (Fallback: `kontakt@videoneers.de`) |
| `RESEND_NEWSLETTER_AUDIENCE` | Optional: Audience-ID für die Newsletter-Liste |
| `OPENAI_API_KEY` oder `ASSEMBLYAI_API_KEY` | Optional: Aktiviert Voice-to-Text im Voice Endpoint |

### 📁 Projektstruktur

- `src/app` – App Router Pages & API Routes
- `src/components` – UI- & Section-Komponenten
- `src/components/compliance` – DSGVO/Cookie Logik
- `src/lib` – Hilfsfunktionen & Konfigurationen

### ✅ Wichtige Hinweise

- Cookie-Banner & Präferenzen werden im Client gespeichert (`localStorage`).
- Newsletter- und Kontakt-Endpunkte liefern sinnvolle Fehlermeldungen, falls der `RESEND_API_KEY` fehlt.
- Voice-Uploads benötigen eine externe Speech-to-Text API – ohne Key liefert der Endpoint einen Hinweis.
