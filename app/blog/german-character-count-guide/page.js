import Header from '../../../components/Header'
import AdUnit from '../../components/AdUnit'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import FaqSchema from '../../../components/FaqSchema'

export const metadata = {
  alternates: { canonical: 'https://www.wordcountertool.net/blog/german-character-count-guide' },
  title: 'Zeichen zählen auf Deutsch: Kompletter Guide mit Plattform-Limits (2026)',
  description: 'Alles über das Zählen deutscher Zeichen — Umlaute, ß, UTF-8, Social-Media-Limits und Google-Vorgaben. Mit kostenlosem Tool und Praxistipps.',
  openGraph: {
    title: 'Zeichen zählen auf Deutsch: Kompletter Guide mit Plattform-Limits (2026)',
    description: 'Alles über das Zählen deutscher Zeichen — Umlaute, ß, UTF-8, Social-Media-Limits und Google-Vorgaben. Mit kostenlosem Tool und Praxistipps.',
    url: 'https://www.wordcountertool.net/blog/german-character-count-guide',
    siteName: 'WordCounterTool',
    type: 'article',
  },
}

const faqs = [
  { q: 'Wie zähle ich Zeichen in einem deutschen Text?', a: 'Nutze den kostenlosen Zeichenzähler auf WordCounterTool.net. Er zählt Umlaute (ä, ö, ü) und ß korrekt als einzelne Zeichen. Du siehst die Zeichenanzahl mit und ohne Leerzeichen in Echtzeit.' },
  { q: 'Ist ä ein Zeichen oder zwei (ae)?', a: 'ä ist ein einzelnes Zeichen. Es ist kein Ersatz für „ae", sondern ein eigenständiger Buchstabe im deutschen Alphabet. In UTF-8 benötigt ä 2 Bytes, wird aber als 1 Zeichen gezählt.' },
  { q: 'Warum zeigt meine SMS nur 70 Zeichen statt 160?', a: 'Sobald ein Umlaut (ä, ö, ü) oder ß in der SMS vorkommt, wechselt das Encoding von GSM-7 auf UCS-2. GSM-7 erlaubt 160 Zeichen pro SMS, UCS-2 nur 70. Ersetze Umlaute durch ae/oe/ue, um bei 160 zu bleiben.' },
  { q: 'Wie lang darf ein Google-Titel auf Deutsch sein?', a: 'Google zeigt ca. 50–60 Zeichen an, misst aber nach Pixel-Breite (ca. 580 Pixel). Da deutsche Wörter länger sind als englische, passen weniger Wörter in den Titel. Nutze Abkürzungen und teste die Darstellung im SERP-Simulator.' },
  { q: 'Zählt das Leerzeichen als Zeichen?', a: 'Ja, bei den meisten Plattformen (Twitter/X, Instagram, SMS) zählen Leerzeichen als Zeichen. Unser Tool zeigt beide Werte: Zeichen mit und ohne Leerzeichen. Für Meta-Descriptions nutze den Wert mit Leerzeichen.' },
  { q: 'Wie optimiere ich deutsche Google-Ads-Anzeigen mit 30-Zeichen-Limit?', a: 'Nutze kurze Wörter, Abkürzungen (SEO, Kfz, inkl.) und brich Komposita auf, wenn es sinnvoll ist. Teste „Versicherung" (12 Zeichen) gegen „Vers." (5 Zeichen) — aber nur, wenn die Abkürzung verständlich ist. Zahlen statt Zahlwörter sparen ebenfalls Platz.' }
]

export default function Post() {
  return (
    <>
      <FaqSchema faqs={faqs} />
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8"><Link href="/blog" className="text-emerald-400 text-sm hover:underline">Zurück zum Blog</Link></div>
        <article>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Zeichen zählen auf Deutsch: Kompletter Guide mit Plattform-Limits (2026)</h1>
          <p className="text-slate-400 text-sm mb-8">Aktualisiert April 2026 | 8 Min. Lesezeit</p>
          <div className="result-box mb-8 border-emerald-500/30">
            <h2 className="text-emerald-400 font-bold mb-3">Zusammenfassung</h2>
            <p className="text-white">Deutsche Texte nutzen <strong className="text-white">30 Buchstaben</strong> (26 + ä, ö, ü, ß). Die <strong className="text-white">Zeichenzählung</strong> beeinflusst Social-Media-Posts, Meta-Descriptions (max. 155 Zeichen), Google Ads (30/90 Zeichen) und SMS (160 Zeichen). Unser <a href="/character-counter" className="text-emerald-400 underline">kostenloser Zeichenzähler</a> verarbeitet alle deutschen Sonderzeichen korrekt.</p>
          </div>
          <div className="space-y-8">

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Das deutsche Zeichensystem</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Das deutsche Alphabet umfasst 26 lateinische Grundbuchstaben plus die drei Umlaute ä, ö, ü und das Eszett (ß). In der Schweiz wird ß nicht verwendet — dort schreibt man stattdessen „ss". Diese 30 Zeichen bilden die Basis aller deutschen Texte.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Seit der Rechtschreibreform 2017 gibt es auch das große ß (ẞ), das in amtlichen Dokumenten und bei Versalien verwendet wird. Die Tastenkombination dafür ist auf den meisten Tastaturen noch nicht direkt verfügbar — ein weiteres Detail, das bei der Zeichenzählung relevant sein kann.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Bei der Zeichenzählung gibt es zwei Varianten: mit Leerzeichen und ohne Leerzeichen. Für Social-Media-Plattformen wie Twitter/X zählen Leerzeichen mit (280 Zeichen inklusive Leerzeichen). Für Google-Meta-Descriptions zählt Google die Pixel-Breite, nicht die Zeichenzahl — 155 Zeichen sind eine Faustregel.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Zeichenlimits für deutsche Inhalte</h2>
              <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm" style={{borderCollapse:'collapse'}}>
                  <thead>
                    <tr style={{borderBottom:'1px solid rgba(52,211,153,0.2)'}}>
                      <th className="text-left text-emerald-400 py-2 px-3">Plattform</th>
                      <th className="text-left text-emerald-400 py-2 px-3">Zeichenlimit</th>
                      <th className="text-left text-emerald-400 py-2 px-3">Tipp für Deutsch</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Twitter/X', '280 Zeichen', 'Deutsche Wörter sind länger — plane 30–40 Wörter ein'],
                      ['Google Title Tag', '50–60 Zeichen', 'Umlaute sind breiter als a/o/u — teste die Pixel-Breite'],
                      ['Meta Description', '150–155 Zeichen', 'Nutze das Hauptkeyword in den ersten 120 Zeichen'],
                      ['Instagram Caption', '2.200 Zeichen', 'Die ersten 125 Zeichen entscheiden über den Klick'],
                      ['LinkedIn Post', '3.000 Zeichen', 'Deutsche Business-Posts: 1.200–1.800 Zeichen optimal'],
                      ['Google Ads Headline', '30 Zeichen', 'Komposita hier bewusst aufbrechen: „Auto-Versicherung"'],
                      ['Google Ads Description', '90 Zeichen', 'Kürze deutsche Wendungen: „jetzt" statt „ab sofort"'],
                      ['Facebook Post', '63.206 Zeichen', 'Optimal: 40–80 Zeichen für Engagement'],
                      ['SMS', '160 Zeichen (GSM-7)', 'Umlaute reduzieren SMS-Limit auf 70 Zeichen bei UCS-2!'],
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
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Besonders wichtig: SMS mit Umlauten wechseln von GSM-7 (160 Zeichen) auf UCS-2-Encoding (70 Zeichen pro SMS). Eine SMS mit „ü" hat plötzlich nur noch 70 Zeichen statt 160. Das betrifft auch Marketing-SMS und Zwei-Faktor-Codes.</p>
            </section>

            <AdUnit slot="3248634657" />

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">UTF-8 und deutsche Zeichen</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Im modernen Web nutzen 98,2% aller Websites UTF-8-Encoding (Quelle: W3Techs, 2025). Für deutsche Zeichen bedeutet das:</p>
              <div className="result-box mb-4">
                <svg viewBox="0 0 600 200" style={{width:'100%',height:'auto'}} xmlns="http://www.w3.org/2000/svg">
                  <text x="300" y="20" textAnchor="middle" fill="#e2e8f0" style={{fontSize:'14px',fontWeight:'700'}}>UTF-8 Byte-Größe deutscher Zeichen</text>
                  <rect x="120" y="45" width="380" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="120" y="45" width={String(380*0.25)} height="28" rx="4" fill="#10b981" />
                  <text x="110" y="63" textAnchor="end" fill="#94a3b8" style={{fontSize:'12px'}}>a–z, A–Z</text>
                  <text x={String(120+380*0.25+8)} y="63" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>1 Byte</text>
                  <rect x="120" y="81" width="380" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="120" y="81" width={String(380*0.50)} height="28" rx="4" fill="#f59e0b" />
                  <text x="110" y="99" textAnchor="end" fill="#94a3b8" style={{fontSize:'12px'}}>ä, ö, ü, ß</text>
                  <text x={String(120+380*0.50+8)} y="99" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>2 Bytes</text>
                  <rect x="120" y="117" width="380" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="120" y="117" width={String(380*0.50)} height="28" rx="4" fill="#f59e0b" />
                  <text x="110" y="135" textAnchor="end" fill="#94a3b8" style={{fontSize:'12px'}}>€ (Euro)</text>
                  <text x={String(120+380*0.50+8)} y="135" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>3 Bytes</text>
                  <rect x="120" y="153" width="380" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="120" y="153" width={String(380*1.0)} height="28" rx="4" fill="#ef4444" />
                  <text x="110" y="171" textAnchor="end" fill="#94a3b8" style={{fontSize:'12px'}}>Emojis</text>
                  <text x={String(120+380*1.0-60)} y="171" fill="#ffffff" style={{fontSize:'12px',fontWeight:'600'}}>4 Bytes</text>
                </svg>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Warum ist das wichtig? Wenn eine API oder Datenbank nach Bytes statt nach Zeichen begrenzt, kann ein deutscher Text mit vielen Umlauten das Limit schneller erreichen. Zum Beispiel: 1.000 Bytes = 1.000 ASCII-Zeichen, aber nur ~667 Zeichen mit Umlauten.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">In HTML solltest du immer <code className="text-emerald-400">&lt;meta charset=&quot;UTF-8&quot;&gt;</code> setzen. Fehlt diese Angabe, zeigen Browser Umlaute als Fragezeichen oder Kästchen an — ein häufiger Fehler auf deutschen Websites.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Praxistipps für deutsche Zeichenlimits</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">Google-Titel optimieren:</strong> Deutsche Wörter sind durchschnittlich 6,3 Buchstaben lang (Englisch: 4,7). Das bedeutet, du passt weniger deutsche Wörter in einen 60-Zeichen-Titel. Tipp: Nutze Abkürzungen wo sinnvoll — „SEO" statt „Suchmaschinenoptimierung" spart 22 Zeichen.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">Meta-Descriptions:</strong> Google misst nach Pixel-Breite, nicht nach Zeichen. Deutsche Buchstaben wie „m" und „w" sind breiter als „i" und „l". Schreibe deine Description und prüfe sie im Google-SERP-Simulator. Unser <a href="/character-counter" className="text-emerald-400 underline">Zeichenzähler</a> hilft bei der schnellen Kontrolle.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">Social Media:</strong> Auf Twitter/X passen aufgrund der längeren deutschen Wörter nur ca. 35–45 Wörter in 280 Zeichen (Englisch: 45–55 Wörter). Plane deine Tweets entsprechend kürzer.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">Google Ads:</strong> 30 Zeichen für eine Headline sind auf Deutsch extrem knapp. Brich Komposita gezielt auf: „Auto Versicherung" (18 Zeichen) statt „Autoversicherung" (16 Zeichen) — hier spart Zusammenschreibung sogar Zeichen. Teste beide Varianten.</p>
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

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Article","headline":"Zeichen zählen auf Deutsch: Kompletter Guide mit Plattform-Limits (2026)","description":"Alles über das Zählen deutscher Zeichen — Umlaute, ß, UTF-8, Social-Media-Limits und Google-Vorgaben. Mit kostenlosem Tool und Praxistipps.","inLanguage":"de","author":{"@type":"Organization","name":"WordCounterTool"},"publisher":{"@type":"Organization","name":"WordCounterTool"},"datePublished":"2026-04-05","dateModified":"2026-04-05","mainEntityOfPage":"https://www.wordcountertool.net/blog/german-character-count-guide"})}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.wordcountertool.net"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.wordcountertool.net/blog"},{"@type":"ListItem","position":3,"name":"Zeichen zählen auf Deutsch: Kompletter Guide mit Plattform-Limits (2026)","item":"https://www.wordcountertool.net/blog/german-character-count-guide"}]})}} />

      <Footer />
    </>
  )
}
