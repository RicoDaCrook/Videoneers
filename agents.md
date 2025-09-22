# AGENTS.md

## Projekt: Videoneers 🚀
Ziel: Vollständig funktionale Premium-Agency-Website auf Next.js 14 mit TypeScript, Tailwind, Framer Motion, Sanity CMS, Vercel Deploy.

---

## Arbeitsweise von Codex

### 1. Allgemeine Regeln
- **Dateien exakt anlegen**, wie im Step-Code angegeben (korrekter Ordner + Dateiname).  
- Wenn eine Datei nicht vorhanden ist, **neu erstellen**.  
- Wenn ein Feature neue Dateien braucht (z. B. Cookie-Banner, API-Route), **selbstständig logisch ergänzen**.  
- **Immer TypeScript verwenden** (`.ts` / `.tsx`).  
- **Imports checken**: Pfade immer als `@/...`.  
- **Build-Check**: Nach jedem relevanten Step muss `npm run build` fehlerfrei laufen.  
- **Commit Messages**: Nutze `chore:`, `feat:`, `fix:` je nach Änderung.  

### 2. Workflow in Steps
Das Projekt wird **in klaren Steps** aufgebaut.  
- Ich (der Nutzer) gebe dir in jedem Step Code-Inhalte (als Text).  
- Du erstellst daraus **echte Dateien** im Repo.  
- Danach **commit & push**.  
- Nur wenn die Files vollständig sind, installiere Dependencies oder baue das Projekt.

Beispiel-Workflow:  
- **Step 1** → Base Files (`package.json`, `tailwind.config.ts`, `next.config.js`, `.gitignore`, `README.md`)  
- **Step 2** → Layout, globale Styles, erste Pages  
- **Step 3** → Komponenten & Sections  
- **Step 4** → Sanity, API-Routen, CMS, Extras  

### 3. Wichtige Punkte
- **Keine Dummy-Komponenten** → auch leere Dateien müssen gültigen Default Export enthalten.  
- `.env.local` niemals mit echten Keys pushen (nur Platzhalter).  
- `npm install` erst ausführen, wenn `package.json` im Repo liegt.  
- Wenn ein Step Code-Fehler hat → minimal korrigieren, damit Build läuft.  
- Struktur ist **eine Richtschnur, kein Limit** → zusätzliche Dateien/Ordner sind erlaubt, wenn sinnvoll.  

### 4. Setup-Regel
- Bevor `npm install` oder ein Build-Script ausgeführt wird, müssen alle Basisdateien (`package.json`, `tsconfig.json`, `next.config.js`, `tailwind.config.ts`, `.gitignore`) im Repository existieren und committed sein.  
- Setup-Skripte dürfen **nicht automatisch** laufen, bevor die Dateien erstellt wurden.  

---



---

## Offene ToDos (später in Steps)
- Impressum & Datenschutz anpassen  
- `.env.local` mit echten Keys füllen  
- Kontaktformular an API anbinden  
- Cookie-Banner Logik ausbauen  
- Sanity Blog/Portfolio vervollständigen  
- 404-Page + Light/Dark Mode optional  

---

## Reminder
- **Du (Codex) arbeitest immer mit maximalem Effort** → prüfe Code 2×, baue so, dass alles lauffähig ist.  
- **Ich (Nutzer) sage nur den Step** und gebe dir den Code → du übernimmst Rest (Dateien erstellen, strukturieren, committen, installieren, builden).  

