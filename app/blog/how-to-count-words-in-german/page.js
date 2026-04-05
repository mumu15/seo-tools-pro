import Header from '../../../components/Header'
import AdUnit from '../../components/AdUnit'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import FaqSchema from '../../../components/FaqSchema'

export const metadata = {
  alternates: { canonical: 'https://www.wordcountertool.net/blog/how-to-count-words-in-german' },
  title: 'Wörter zählen auf Deutsch: Der komplette Leitfaden für 2026',
  description: 'Lerne, wie du Wörter, Zeichen und Sätze auf Deutsch korrekt zählst. Mit Komposita-Regeln, Lesezeit-Berechnung und kostenlosen Tools.',
  openGraph: {
    title: 'Wörter zählen auf Deutsch: Der komplette Leitfaden für 2026',
    description: 'Lerne, wie du Wörter, Zeichen und Sätze auf Deutsch korrekt zählst. Mit Komposita-Regeln, Lesezeit-Berechnung und kostenlosen Tools.',
    url: 'https://www.wordcountertool.net/blog/how-to-count-words-in-german',
    siteName: 'WordCounterTool',
    type: 'article',
  },
}

const faqs = [
  { q: 'Wie zähle ich Wörter in einem deutschen Text?', a: 'Nutze den kostenlosen deutschen Wortzähler auf WordCounterTool.net. Füge deinen Text ein und erhalte sofort Wörter, Zeichen, Sätze, Absätze und Lesezeit. Das Tool erkennt Komposita, Umlaute und ß korrekt.' },
  { q: 'Werden deutsche Komposita als ein Wort gezählt?', a: 'Ja. „Krankenversicherung" ist ein Wort, unabhängig von seiner Länge. Das ist korrekt nach den Regeln der deutschen Sprache. Wortzähler teilen Text an Leerzeichen, daher zählt jedes Kompositum als ein Wort.' },
  { q: 'Wie schnell liest man deutsche Texte?', a: 'Deutsche Muttersprachler lesen Sachtexte mit etwa 220–250 Wörtern pro Minute. Unterhaltungsliteratur wird etwas schneller gelesen (250–300 WPM). Fachtexte langsamer (150–200 WPM). Unser Tool berechnet die Lesezeit automatisch.' },
  { q: 'Ist der deutsche Wortzähler kostenlos?', a: 'Ja, komplett kostenlos und ohne Registrierung. Keine Daten werden gespeichert oder an Server gesendet. Du kannst den deutschen Wortzähler unbegrenzt nutzen.' },
  { q: 'Wie viele Wörter hat ein deutscher Blogbeitrag?', a: 'Für SEO empfehlen wir 1.500–2.500 Wörter. Da deutsche Texte durch Komposita kompakter sind als englische, entspricht das ca. 1.800–3.000 englischen Wörtern. Längere Texte ranken laut Backlinko-Studien besser bei Google.' },
  { q: 'Zählen Umlaute als ein oder zwei Zeichen?', a: 'Umlaute (ä, ö, ü) und ß sind jeweils ein Zeichen. Unser Tool zählt sie korrekt als einzelne Zeichen. In UTF-8 benötigen sie zwar 2 Bytes, aber das beeinflusst nicht die Zeichenzählung.' }
]

export default function Post() {
  return (
    <>
      <FaqSchema faqs={faqs} />
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8"><Link href="/blog" className="text-emerald-400 text-sm hover:underline">Zurück zum Blog</Link></div>
        <article>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Wörter zählen auf Deutsch: Der komplette Leitfaden für 2026</h1>
          <p className="text-slate-400 text-sm mb-8">Aktualisiert April 2026 | 8 Min. Lesezeit</p>
          <div className="result-box mb-8 border-emerald-500/30">
            <h2 className="text-emerald-400 font-bold mb-3">Zusammenfassung</h2>
            <p className="text-white">Deutsche Texte zählen anders als englische: <strong className="text-white">Komposita</strong> wie „Donaudampfschifffahrtsgesellschaft" sind ein einziges Wort mit 41 Buchstaben. Deutsche Texte haben durchschnittlich <strong className="text-white">15–20% weniger Wörter</strong> als englische Übersetzungen — bei gleichem Informationsgehalt. Nutze unseren <a href="/word-counter/language/german" className="text-emerald-400 underline">deutschen Wortzähler</a> für präzise Ergebnisse.</p>
          </div>
          <div className="space-y-8">

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Warum das Zählen deutscher Wörter anders funktioniert</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Deutsch hat eine Eigenschaft, die es von fast allen anderen europäischen Sprachen unterscheidet: unbegrenzte Wortzusammensetzung. Du kannst theoretisch unendlich lange Wörter bilden, indem du Substantive aneinanderreihst. „Kraftfahrzeughaftpflichtversicherung" (36 Buchstaben) ist ein alltägliches Wort. „Rindfleischetikettierungsüberwachungsaufgabenübertragungsgesetz" (63 Buchstaben) war ein echtes deutsches Gesetz.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Das hat praktische Auswirkungen: Ein deutscher Text über Kfz-Versicherung hat weniger Wörter als die englische Version, obwohl beide den gleichen Inhalt vermitteln. Im Englischen steht „motor vehicle liability insurance" — vier Wörter. Auf Deutsch: „Kraftfahrzeughaftpflichtversicherung" — ein Wort.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Laut einer Analyse von Translated.net aus 2023 sind englische Texte im Durchschnitt 17% länger in der Wortanzahl als ihre deutschen Entsprechungen. Bei technischen Texten steigt dieser Unterschied auf bis zu 25%.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Deutsche Komposita verstehen</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Komposita sind zusammengesetzte Wörter aus zwei oder mehr Substantiven (oder anderen Wortarten). Sie sind das Herzstück der deutschen Wortbildung und beeinflussen die Wortzählung erheblich.</p>
              <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm" style={{borderCollapse:'collapse'}}>
                  <thead>
                    <tr style={{borderBottom:'1px solid rgba(52,211,153,0.2)'}}>
                      <th className="text-left text-emerald-400 py-2 px-3">Deutsches Kompositum</th>
                      <th className="text-left text-emerald-400 py-2 px-3">Englisch (Wörter)</th>
                      <th className="text-left text-emerald-400 py-2 px-3">Zeichen</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Handschuh', 'glove (1 Wort)', '9'],
                      ['Kühlschrank', 'refrigerator (1 Wort)', '11'],
                      ['Staubsauger', 'vacuum cleaner (2 Wörter)', '11'],
                      ['Geschwindigkeitsbegrenzung', 'speed limit (2 Wörter)', '26'],
                      ['Krankenversicherung', 'health insurance (2 Wörter)', '19'],
                      ['Sehenswürdigkeit', 'tourist attraction (2 Wörter)', '17'],
                      ['Rechtsschutzversicherungsgesellschaft', 'legal protection insurance company (4 Wörter)', '37'],
                    ].map((row, i) => (
                      <tr key={i} style={{borderBottom:'1px solid rgba(52,211,153,0.1)'}}>
                        <td className="text-white py-2 px-3 font-medium">{row[0]}</td>
                        <td className="text-slate-400 py-2 px-3">{row[1]}</td>
                        <td className="text-slate-400 py-2 px-3">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Für die Wortzählung bedeutet das: Ein Satz mit vielen Komposita hat weniger Wörter, aber deutlich mehr Zeichen. Das ist wichtig für Plattformen, die nach Zeichen zählen (wie Twitter/X), versus Plattformen, die nach Wörtern rechnen (wie WordPress oder Word).</p>
            </section>

            <AdUnit slot="3248634657" />

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Schritt-für-Schritt: Wörter auf Deutsch zählen</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">Schritt 1:</strong> Öffne den <a href="/word-counter/language/german" className="text-emerald-400 underline">deutschen Wortzähler</a> auf WordCounterTool.net.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">Schritt 2:</strong> Füge deinen deutschen Text ein. Das Tool erkennt deutsche Zeichen (ä, ö, ü, ß) automatisch und zählt Komposita korrekt als einzelne Wörter.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">Schritt 3:</strong> Lies die Ergebnisse ab: Wörter, Zeichen (mit und ohne Leerzeichen), Sätze, Absätze und geschätzte Lesezeit.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">Schritt 4:</strong> Nutze die Zeichenanzahl für Social-Media-Posts und die Wortanzahl für Blogbeiträge, wissenschaftliche Arbeiten und SEO-Texte.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Tipp: Deutsche Lesegeschwindigkeit liegt bei etwa 220–250 Wörtern pro Minute für Sachtext. Romane werden mit ca. 250–300 WPM gelesen. Unser Tool berechnet die Lesezeit auf dieser Basis.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Wortanzahl für verschiedene deutsche Textformate</h2>
              <div className="result-box mb-4">
                <svg viewBox="0 0 600 280" style={{width:'100%',height:'auto'}} xmlns="http://www.w3.org/2000/svg">
                  <text x="300" y="20" textAnchor="middle" fill="#e2e8f0" style={{fontSize:'14px',fontWeight:'700'}}>Empfohlene Wortanzahl für deutsche Inhalte</text>
                  <rect x="180" y="45" width="340" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="180" y="45" width={String(340*0.85)} height="28" rx="4" fill="#10b981" />
                  <text x="170" y="63" textAnchor="end" fill="#94a3b8" style={{fontSize:'11px'}}>Blogpost</text>
                  <text x={String(180+340*0.85+8)} y="63" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>1.500–2.500</text>
                  <rect x="180" y="81" width="340" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="180" y="81" width={String(340*0.42)} height="28" rx="4" fill="#10b981" />
                  <text x="170" y="99" textAnchor="end" fill="#94a3b8" style={{fontSize:'11px'}}>Produktseite</text>
                  <text x={String(180+340*0.42+8)} y="99" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>500–800</text>
                  <rect x="180" y="117" width="340" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="180" y="117" width={String(340*0.25)} height="28" rx="4" fill="#10b981" />
                  <text x="170" y="135" textAnchor="end" fill="#94a3b8" style={{fontSize:'11px'}}>Newsletter</text>
                  <text x={String(180+340*0.25+8)} y="135" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>300–500</text>
                  <rect x="180" y="153" width="340" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="180" y="153" width={String(340*0.18)} height="28" rx="4" fill="#10b981" />
                  <text x="170" y="171" textAnchor="end" fill="#94a3b8" style={{fontSize:'11px'}}>Meta Description</text>
                  <text x={String(180+340*0.18+8)} y="171" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>130–155</text>
                  <rect x="180" y="189" width="340" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="180" y="189" width={String(340*0.08)} height="28" rx="4" fill="#10b981" />
                  <text x="170" y="207" textAnchor="end" fill="#94a3b8" style={{fontSize:'11px'}}>Tweet/X Post</text>
                  <text x={String(180+340*0.08+8)} y="207" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>40–50</text>
                  <rect x="180" y="225" width="340" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="180" y="225" width={String(340*1.0)} height="28" rx="4" fill="#10b981" />
                  <text x="170" y="243" textAnchor="end" fill="#94a3b8" style={{fontSize:'11px'}}>Bachelorarbeit</text>
                  <text x={String(180+340*1.0-100)} y="243" fill="#ffffff" style={{fontSize:'12px',fontWeight:'600'}}>10.000–15.000</text>
                </svg>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Beachte: Diese Zahlen gelten für deutsche Texte. Wenn du von einer englischen Vorlage übersetzt, wird der deutsche Text typischerweise 10–20% kürzer in der Wortanzahl. Das bedeutet nicht, dass Inhalt fehlt — die Komposita komprimieren die Information.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Umlaute und Sonderzeichen korrekt zählen</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Die deutschen Sonderzeichen ä, ö, ü und ß sind jeweils ein Zeichen — nicht zwei. „ä" ist ein Buchstabe, nicht „ae". In UTF-8 benötigt jeder Umlaut 2 Bytes, während ein normaler lateinischer Buchstabe nur 1 Byte braucht. Das spielt bei Zeichenlimits eine Rolle, die nach Bytes zählen.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Unser Wortzähler zählt Umlaute und ß als jeweils ein Zeichen — das ist das korrekte Verhalten für die deutsche Sprache. Einige ältere Tools zählen „ä" als zwei Zeichen, weil sie Bytes statt Unicode-Zeichen zählen. Das führt zu falschen Ergebnissen.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Für URLs werden Umlaute URL-encoded: ä → %C3%A4. In SEO-Titeln und Meta-Descriptions solltest du die echten Umlaute verwenden. Google zeigt sie korrekt in den Suchergebnissen an.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Häufig gestellte Fragen</h2>
              <div className="space-y-4">{faqs.map((faq,i)=>(<div key={i} className="result-box"><h3 className="text-white font-bold mb-2">{faq.q}</h3><p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p></div>))}</div>
            </section>
          </div>
        </article>
      </main>

      <div className="max-w-4xl mx-auto px-4 mb-8">
        <div className="bg-gradient-to-r from-emerald-900/20 to-teal-900/10 border border-emerald-500/20 rounded-2xl p-6">
          <h2 className="text-lg font-bold text-white mb-3">Deutsche Schreibwerkzeuge</h2>
          <div className="flex flex-wrap gap-2">
            <a href="/word-counter/language/german" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Deutscher Wortzähler</a>
            <a href="/word-counter" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Wortzähler</a>
            <a href="/character-counter" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Zeichenzähler</a>
            <a href="/reading-time" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Lesezeit-Rechner</a>
            <a href="/readability-checker" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Lesbarkeits-Checker</a>
            <a href="/keyword-density" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Keyword-Dichte-Checker</a>
          </div>
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Article","headline":"Wörter zählen auf Deutsch: Der komplette Leitfaden für 2026","description":"Lerne, wie du Wörter, Zeichen und Sätze auf Deutsch korrekt zählst. Mit Komposita-Regeln, Lesezeit-Berechnung und kostenlosen Tools.","inLanguage":"de","author":{"@type":"Organization","name":"WordCounterTool"},"publisher":{"@type":"Organization","name":"WordCounterTool"},"datePublished":"2026-04-05","dateModified":"2026-04-05","mainEntityOfPage":"https://www.wordcountertool.net/blog/how-to-count-words-in-german"})}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.wordcountertool.net"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.wordcountertool.net/blog"},{"@type":"ListItem","position":3,"name":"Wörter zählen auf Deutsch: Der komplette Leitfaden für 2026","item":"https://www.wordcountertool.net/blog/how-to-count-words-in-german"}]})}} />

      <Footer />
    </>
  )
}
