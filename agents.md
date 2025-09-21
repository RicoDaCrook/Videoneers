# AGENTS.md

## Projekt: Videoneers - Premium Digital Agency Website 🚀

### Ziel
Eine hochperformante, SEO-optimierte Agentur-Website, die mit Next.js 14 (App Router) gebaut ist.  
Alle Dateien, Ordner und Inhalte müssen so erstellt werden, dass das Projekt direkt build- und deployfähig ist.

---

## Tech-Stack
- Framework: Next.js 14 (App Router)
- Sprache: TypeScript
- Styling: Tailwind CSS (+ @tailwindcss/typography)
- Animationen: Framer Motion
- 3D: Three.js (@react-three/fiber + drei)
- CMS: Sanity
- E-Mail: Resend
- Analytics: Vercel Analytics + GA4
- Icons: lucide-react
- Toasts: sonner
- Validation: zod
- Utilities: clsx, tailwind-merge

---

## Projektstruktur (Basis)

Dies ist die **Startstruktur** des Projekts.  
Codex soll sie einhalten, aber **bei Bedarf darf er neue Dateien oder Unterordner ergänzen**, wenn ein Feature dies erfordert (z. B. Cookie-Banner, Analytics, Context Provider).

videoneers/
├── .github/workflows/deploy.yml
├── public/
│ ├── fonts/
│ ├── images/
│ ├── og/
│ └── icons/
├── src/
│ ├── app/ # App Router Pages & API Routes
│ ├── components/ # Reusable Components (UI, Sections, Animations, Forms)
│ ├── lib/ # Utilities, Constants, Animations
│ └── hooks/ # Custom React Hooks
├── sanity/ # CMS Config
├── .env.local # Environment Variables (nicht committen)
├── package.json
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── .gitignore
└── README.md


---

## Regeln für Codex
1. **Immer TypeScript verwenden.** Keine `.js`-Dateien.  
2. **Imports strikt prüfen** → z. B. `@/components/...`, `@/lib/...`.  
3. **Dateien exakt nach Struktur erstellen.** Wenn Inhalte nicht gegeben sind, minimal funktionsfähige Boilerplates anlegen.  
4. **Commits sauber benennen**:
   - `feat: ...` (Neue Features)  
   - `fix: ...` (Bugfixes)  
   - `chore: ...` (Konfigurationen, Minor Tasks)  
5. **Build-Check**: Nach jedem Schritt sicherstellen, dass `npm run build` ohne Fehler durchläuft.  
6. **Keine Dummy-Komponenten** → selbst leere Seiten müssen einen Default Export haben.  
7. **Environment Files**: `.env.local` niemals mit echten Keys ins Repo pushen.  
8. **SEO** berücksichtigen → `layout.tsx` enthält `metadata`, `sitemap.ts` und `robots.txt` müssen erstellt werden.  
9. **Styling** → Mobile-First, Dark Theme, mit definierten Farben:
   - Cyber Cyan: `#00D4FF`  
   - Neon Lime: `#00FF88`  
   - Hot Orange: `#FF6B35`  
   - Deep Black: `#0A0A0A`  
10. **Komponenten wiederverwendbar** halten (UI wie `GlowCard`, `MagneticButton`, `GradientText` etc.).  
11. **Projektstruktur ist eine Richtschnur, kein Limit.**  
    - Wenn ein neues Feature (z. B. Cookie-Banner, Analytics, Context Provider) eine neue Datei erfordert, darf Codex diese anlegen.  
    - Neue Dateien müssen sinnvoll im passenden Bereich erstellt werden (z. B. `components/ui`, `lib`, `hooks` oder `app/api`).  
    - Wichtig: Ordner- und Dateinamen müssen konsistent und logisch bleiben.

---

## Workflow für Codex
1. **Alle fehlenden Dateien & Ordner anlegen.**  
2. Code aus meinen Vorgaben (im Chat oder aus Repo) **einfügen**.  
3. Bei Unklarheiten **minimal funktionierende Boilerplates** generieren.  
4. Nach Fertigstellung: `npm install` und `npm run build`.  
5. Fehler **automatisch fixen** und nur validen Code committen.  
6. Jeder Commit: **saubere Commit-Message** nach Konvention.  

---

## Offene ToDos (nach Dateierstellung)
- Impressum & Datenschutz anpassen (Name, USt-ID, Mailadressen).  
- `.env.local` mit echten API Keys füllen (Sanity, Resend, OpenAI, Analytics).  
- Kontaktformular (`src/app/contact/page.tsx`) an `api/contact` anbinden.  
- Cookie-Banner Logik ausbauen (aktuell nur `console.log`).  
- Sanity-Anbindung für Blog & Portfolio vervollständigen.  
- Optional: 404-Seite + Light/Dark-Mode Toggle hinzufügen.  

---

## Wichtig
- **Maximaler Effort**: Vor jedem Schreibvorgang den Code doppelt prüfen.  
- **Keine Abkürzungen**: Alle Dateien so anlegen, dass das Projekt direkt lauffähig ist.  
- **Deployment**: Nach erfolgreichem Build → Vercel Deploy vorbereiten.  
