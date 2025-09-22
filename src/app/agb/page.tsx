import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AGB',
  description: 'Allgemeine Geschäftsbedingungen von videoneers',
}

export default function AGBPage() {
  return (
    <div className="min-h-screen py-32">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8">Allgemeine Geschäftsbedingungen</h1>
        
        <div className="prose prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">§ 1 Geltungsbereich</h2>
            <p>
              (1) Diese Allgemeinen Geschäftsbedingungen (nachfolgend "AGB") gelten für alle 
              Verträge zwischen videoneers und dem Auftraggeber über die Erbringung von 
              Dienstleistungen im Bereich Webentwicklung, Design, Online-Marketing und 
              verwandten digitalen Services.
            </p>
            <p>
              (2) Entgegenstehende oder von diesen AGB abweichende Bedingungen des Auftraggebers 
              erkennen wir nicht an, es sei denn, wir hätten ausdrücklich schriftlich ihrer 
              Geltung zugestimmt.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">§ 2 Vertragsgegenstand</h2>
            <p>
              (1) Gegenstand des Vertrages ist die Erbringung der im jeweiligen Angebot bzw. 
              Auftrag spezifizierten Leistungen.
            </p>
            <p>
              (2) Die detaillierte Beschreibung der zu erbringenden Leistungen ergibt sich aus 
              dem Angebot, dem Projektplan oder der Leistungsbeschreibung.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">§ 3 Vertragsschluss</h2>
            <p>
              (1) Unsere Angebote sind freibleibend und unverbindlich, sofern sie nicht 
              ausdrücklich als verbindlich gekennzeichnet sind.
            </p>
            <p>
              (2) Der Vertrag kommt durch die schriftliche Auftragsbestätigung oder durch 
              Beginn der Leistungserbringung zustande.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">§ 4 Leistungserbringung</h2>
            <p>
              (1) videoneers erbringt die vereinbarten Leistungen nach dem Stand der Technik 
              und mit der erforderlichen Sorgfalt.
            </p>
            <p>
              (2) Termine und Fristen sind nur verbindlich, wenn sie ausdrücklich als 
              verbindlich vereinbart wurden.
            </p>
            <p>
              (3) Der Auftraggeber stellt alle für die Durchführung des Auftrags benötigten 
              Informationen und Materialien rechtzeitig zur Verfügung.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">§ 5 Vergütung und Zahlungsbedingungen</h2>
            <p>
              (1) Die Vergütung richtet sich nach der jeweils gültigen Preisliste bzw. dem 
              individuellen Angebot.
            </p>
            <p>
              (2) Alle Preise verstehen sich zuzüglich der gesetzlichen Mehrwertsteuer.
            </p>
            <p>
              (3) Rechnungen sind innerhalb von 14 Tagen nach Rechnungsdatum ohne Abzug zahlbar.
            </p>
            <p>
              (4) Bei Projekten über 10.000€ ist eine Anzahlung von 50% bei Auftragserteilung fällig.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">§ 6 Mitwirkungspflichten</h2>
            <p>
              Der Auftraggeber ist verpflichtet:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>Alle erforderlichen Informationen rechtzeitig bereitzustellen</li>
              <li>Entscheidungen zeitnah zu treffen</li>
              <li>Zugänge und Passwörter zur Verfügung zu stellen</li>
              <li>Feedback innerhalb vereinbarter Fristen zu geben</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">§ 7 Urheberrecht und Nutzungsrechte</h2>
            <p>
              (1) An allen im Rahmen des Auftrages erstellten Arbeiten behält videoneers bis 
              zur vollständigen Bezahlung das Urheberrecht.
            </p>
            <p>
              (2) Nach vollständiger Bezahlung erhält der Auftraggeber die für den Vertragszweck 
              erforderlichen Nutzungsrechte.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">§ 8 Gewährleistung und Haftung</h2>
            <p>
              (1) videoneers gewährleistet die vertragsgemäße Erbringung der Leistungen.
            </p>
            <p>
              (2) Die Haftung ist auf Vorsatz und grobe Fahrlässigkeit beschränkt, soweit 
              nicht zwingende gesetzliche Vorschriften entgegenstehen.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">§ 9 Vertraulichkeit</h2>
            <p>
              Beide Parteien verpflichten sich, alle im Rahmen der Zusammenarbeit erlangten 
              vertraulichen Informationen geheim zu halten.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">§ 10 Schlussbestimmungen</h2>
            <p>
              (1) Es gilt das Recht der Bundesrepublik Deutschland.
            </p>
            <p>
              (2) Gerichtsstand ist Sindelfingen.
            </p>
            <p>
              (3) Sollten einzelne Bestimmungen unwirksam sein, bleibt die Wirksamkeit der 
              übrigen Bestimmungen unberührt.
            </p>
          </section>

          <section className="mb-8">
            <p className="text-sm text-rich-gray-400">
              Stand: {new Date().toLocaleDateString('de-DE')}<br />
              videoneers - Weimarerstraße 55, 71065 Sindelfingen
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
