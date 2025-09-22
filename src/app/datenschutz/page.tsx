import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description: 'Datenschutzerklärung von videoneers - DSGVO konform',
}

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen py-32">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8">Datenschutzerklärung</h1>
        
        <div className="prose prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Datenschutz auf einen Blick</h2>
            <h3 className="text-xl font-semibold mb-2">Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren 
              personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene 
              Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Allgemeine Hinweise und Pflichtinformationen</h2>
            <h3 className="text-xl font-semibold mb-2">Datenschutz</h3>
            <p>
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. 
              Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen 
              Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>

            <h3 className="text-xl font-semibold mb-2 mt-4">Verantwortliche Stelle</h3>
            <p>
              videoneers<br />
              [Ihr vollständiger Name]<br />
              Weimarerstraße 55<br />
              71065 Sindelfingen<br />
              Telefon: +49 176 12345678<br />
              E-Mail: datenschutz@videoneers.de
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Datenerfassung auf dieser Website</h2>
            <h3 className="text-xl font-semibold mb-2">Cookies</h3>
            <p>
              Unsere Internetseiten verwenden sogenannte „Cookies". Cookies sind kleine Datenpakete 
              und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend 
              für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) 
              auf Ihrem Endgerät gespeichert.
            </p>

            <h3 className="text-xl font-semibold mb-2 mt-4">Kontaktformular</h3>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus 
              dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks 
              Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. 
              Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>

            <h3 className="text-xl font-semibold mb-2 mt-4">Google Analytics</h3>
            <p>
              Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics. Anbieter ist 
              die Google Ireland Limited („Google"), Gordon House, Barrow Street, Dublin 4, Irland.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Ihre Rechte</h2>
            <p>Sie haben folgende Rechte:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Auskunft über Ihre bei uns gespeicherten Daten</li>
              <li>Berichtigung unrichtiger personenbezogener Daten</li>
              <li>Löschung Ihrer bei uns gespeicherten Daten</li>
              <li>Einschränkung der Datenverarbeitung</li>
              <li>Widerspruch gegen die Verarbeitung Ihrer Daten</li>
              <li>Datenübertragbarkeit</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Hosting</h2>
            <p>
              Diese Website wird bei Vercel gehostet. Die Server stehen in Frankfurt, Deutschland. 
              Vercel ist DSGVO-konform und erfüllt alle Anforderungen zum Schutz Ihrer Daten.
            </p>
          </section>

          <section className="mb-8">
            <p className="text-sm text-rich-gray-400">
              Stand: {new Date().toLocaleDateString('de-DE')}
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
