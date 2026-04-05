import Header from '../../../components/Header'
import AdUnit from '../../components/AdUnit'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import FaqSchema from '../../../components/FaqSchema'

export const metadata = {
  alternates: { canonical: 'https://www.wordcountertool.net/blog/how-to-count-words-in-swedish' },
  title: 'Räkna ord på svenska: komplett guide (2026)',
  description: 'Hur räknar man ord, tecken och meningar på svenska? Med sammansättningar, läshastighet och gratis verktyg.',
  openGraph: {
    title: 'Räkna ord på svenska: komplett guide (2026)',
    description: 'Hur räknar man ord, tecken och meningar på svenska? Med sammansättningar, läshastighet och gratis verktyg.',
    url: 'https://www.wordcountertool.net/blog/how-to-count-words-in-swedish',
    siteName: 'WordCounterTool',
    type: 'article',
  },
}

const faqs = [
  { q: 'Hur räknar jag ord i en svensk text?', a: 'Använd den gratis svenska ordräknaren på WordCounterTool.net. Klistra in din text och se direkt: ord, tecken, meningar, stycken och lästid. Verktyget hanterar å, ä, ö och sammansättningar korrekt.' },
  { q: 'Räknas svenska sammansättningar som ett ord?', a: 'Ja. "Sjukhusundersökningsresultat" räknas som ett ord oavsett längd. Ordräknare delar text vid mellanslag, så varje sammansatt ord räknas som ett ord. Detta är korrekt enligt svenska skrivregler.' },
  { q: 'Vad är läshastigheten på svenska?', a: 'Informativa texter: 230-260 ord/min. Skönlitteratur: 260-300 ord/min. Facktexter: 180-220 ord/min. Vårt verktyg beräknar lästiden baserat på 240 ord/min.' },
  { q: 'Är svenska texter kortare än engelska?', a: 'Ja, i genomsnitt 5-10% kortare i ordantal tack vare sammansättningar. Vid tekniska texter kan skillnaden vara upp till 15%. Informationsinnehållet är dock detsamma.' },
  { q: 'Hur många ord behövs för ett svenskt blogginlägg?', a: 'För SEO rekommenderar vi 1 200-2 000 ord. Topp-10-resultaten på Google.se innehåller i genomsnitt 1 700 ord. Längre artiklar rankar generellt bättre.' },
  { q: 'Är den svenska ordräknaren gratis?', a: 'Ja, helt gratis utan registrering. Inga data lagras eller skickas till servrar. Du kan använda den svenska ordräknaren obegränsat.' }
]

export default function Post() {
  return (
    <>
      <FaqSchema faqs={faqs} />
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8"><Link href="/blog" className="text-emerald-400 text-sm hover:underline">Tillbaka till Bloggen</Link></div>
        <article>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Räkna ord på svenska: komplett guide (2026)</h1>
          <p className="text-slate-400 text-sm mb-8">Uppdaterad april 2026 | Lästid: 8 min</p>
          <div className="result-box mb-8 border-emerald-500/30">
            <h2 className="text-emerald-400 font-bold mb-3">Sammanfattning</h2>
            <p className="text-white">Svenska texter är i genomsnitt <strong className="text-white">5-10% kortare</strong> än engelska texter med samma information, tack vare sammansättningar. Genomsnittlig läshastighet på svenska är <strong className="text-white">230-260 ord per minut</strong>. Svenska har tre extra bokstäver: <strong className="text-white">å, ä, ö</strong>. Använd vår <a href="/word-counter/language/swedish" className="text-emerald-400 underline">svenska ordräknare</a> för exakta resultat.</p>
          </div>
          <div className="space-y-8">

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Varför ordräkning på svenska fungerar annorlunda</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Svenska är ett nordgermanskt språk som delar många egenskaper med norska och danska. Precis som tyska och nederländska kan svenska bilda extremt långa sammansatta ord: "sjukhusundersökningsresultat" (28 bokstäver, 1 ord). I engelskan skulle detta vara "hospital examination result" — tre ord.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Enligt en analys av Translated.net (2023) är svenska texter i genomsnitt 5-10% kortare i ordantal än engelska motsvarigheter. Vid tekniska texter kan skillnaden vara upp till 15%. Detta beror på sammansättningarna som komprimerar flera engelska ord till ett svenskt.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Svenska alfabetet har 29 bokstäver — 26 latinska plus å, ä och ö. Dessa tre bokstäver är separata bokstäver (inte varianter av a och o) och placeras sist i alfabetet. Vårt ordräkningsverktyg hanterar alla svenska tecken korrekt.</p>
            </section>

            <AdUnit slot="3248634657" />


            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Svenska sammansättningar och ordräkning</h2>
              <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm" style={{borderCollapse:'collapse'}}>
                  <thead>
                    <tr style={{borderBottom:'1px solid rgba(52,211,153,0.2)'}}>
                      <th className="text-left text-emerald-400 py-2 px-3">Svensk sammansättning</th>
                      <th className="text-left text-emerald-400 py-2 px-3">Engelska</th>
                      <th className="text-left text-emerald-400 py-2 px-3">Tecken</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Sjukhus', 'hospital (1 ord)', '7'],
                      ['Dammsugare', 'vacuum cleaner (2 ord)', '10'],
                      ['Hastighetsbegränsning', 'speed limit (2 ord)', '21'],
                      ['Sjukförsäkring', 'health insurance (2 ord)', '14'],
                      ['Barnomsorgsavgift', 'childcare fee (2 ord)', '17'],
                      ['Arbetsmarknadsdepartementet', 'Ministry of Employment (3 ord)', '27'],
                      ['Realisationsvinstbeskattning', 'capital gains taxation (3 ord)', '28'],
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
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Praktisk konsekvens: en svensk text om sjukförsäkring har färre ord än den engelska versionen, men samma informationsinnehåll. Vår ordräknare räknar varje sammansatt ord korrekt som ett ord.</p>
            </section>

            <AdUnit slot="3248634657" />

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Steg för steg: räkna ord på svenska</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">Steg 1:</strong> Öppna den <a href="/word-counter/language/swedish" className="text-emerald-400 underline">svenska ordräknaren</a> på WordCounterTool.net.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">Steg 2:</strong> Klistra in din svenska text. Verktyget känner automatiskt igen å, ä, ö och räknar dem korrekt.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">Steg 3:</strong> Se resultaten: ord, tecken (med och utan mellanslag), meningar, stycken och uppskattad lästid.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">Steg 4:</strong> Använd ordantal för bloggar och SEO, teckenantal för sociala medier och metabeskrivningar.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Läshastigheten på svenska är cirka 230-260 ord per minut för informativa texter och 260-300 ord/min för skönlitteratur. Vårt verktyg beräknar lästiden baserat på 240 ord per minut.</p>
            </section>

            <AdUnit slot="3763639977" />


            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Rekommenderat ordantal per innehållstyp</h2>
              <div className="result-box mb-4">
                <svg viewBox="0 0 600 260" style={{width:'100%',height:'auto'}} xmlns="http://www.w3.org/2000/svg">
                  <text x="300" y="20" textAnchor="middle" fill="#e2e8f0" style={{fontSize:'14px',fontWeight:'700'}}>Rekommenderat ordantal (svenskt innehåll)</text>
                  <rect x="180" y="45" width="340" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="180" y="45" width={String(340*0.75)} height="28" rx="4" fill="#10b981" />
                  <text x="170" y="63" textAnchor="end" fill="#94a3b8" style={{fontSize:'11px'}}>Blogginlägg</text>
                  <text x={String(180+340*0.75+8)} y="63" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>1 200-2 000</text>
                  <rect x="180" y="81" width="340" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="180" y="81" width={String(340*0.45)} height="28" rx="4" fill="#10b981" />
                  <text x="170" y="99" textAnchor="end" fill="#94a3b8" style={{fontSize:'11px'}}>Landningssida</text>
                  <text x={String(180+340*0.45+8)} y="99" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>600-1 000</text>
                  <rect x="180" y="117" width="340" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="180" y="117" width={String(340*0.28)} height="28" rx="4" fill="#10b981" />
                  <text x="170" y="135" textAnchor="end" fill="#94a3b8" style={{fontSize:'11px'}}>Produktsida</text>
                  <text x={String(180+340*0.28+8)} y="135" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>300-600</text>
                  <rect x="180" y="153" width="340" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="180" y="153" width={String(340*0.15)} height="28" rx="4" fill="#10b981" />
                  <text x="170" y="171" textAnchor="end" fill="#94a3b8" style={{fontSize:'11px'}}>Nyhetsbrev</text>
                  <text x={String(180+340*0.15+8)} y="171" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>200-400</text>
                  <rect x="180" y="189" width="340" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="180" y="189" width={String(340*1.0)} height="28" rx="4" fill="#10b981" />
                  <text x="170" y="207" textAnchor="end" fill="#94a3b8" style={{fontSize:'11px'}}>Uppsats</text>
                  <text x={String(180+340*1.0-100)} y="207" fill="#ffffff" style={{fontSize:'12px',fontWeight:'600'}}>8 000-15 000</text>
                </svg>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Sverige har 10,4 miljoner invånare varav 96% använder internet (Internetstiftelsen 2024). Google.se har 95,3% marktandel. E-handelsmarknaden i Sverige uppgår till 165 miljarder kronor (PostNord 2024), med 35% av trafiken från organisk sökning.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Vanliga Frågor</h2>
              <div className="space-y-4">{faqs.map((faq,i)=>(<div key={i} className="result-box"><h3 className="text-white font-bold mb-2">{faq.q}</h3><p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p></div>))}</div>
            </section>

            <AdUnit slot="3248634657" />

          </div>
        </article>
      </main>

      <div className="max-w-4xl mx-auto px-4 mb-8">
        <div className="bg-gradient-to-r from-emerald-900/20 to-teal-900/10 border border-emerald-500/20 rounded-2xl p-6">
          <h2 className="text-lg font-bold text-white mb-3">Svenska Skrivverktyg</h2>
          <div className="flex flex-wrap gap-2">
            <a href="/word-counter/language/swedish" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Svensk Ordräknare</a>
            <a href="/word-counter" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Ordräknare</a>
            <a href="/character-counter" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Teckenräknare</a>
            <a href="/reading-time" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Lästid</a>
            <a href="/readability-checker" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Läsbarhetskontroll</a>
            <a href="/keyword-density" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Nyckelordsdensitet</a>
          </div>
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Article","headline":"Räkna ord på svenska: komplett guide (2026)","description":"Hur räknar man ord, tecken och meningar på svenska? Med sammansättningar, läshastighet och gratis verktyg.","inLanguage":"sv","author":{"@type":"Organization","name":"WordCounterTool"},"publisher":{"@type":"Organization","name":"WordCounterTool"},"datePublished":"2026-04-05","dateModified":"2026-04-05","mainEntityOfPage":"https://www.wordcountertool.net/blog/how-to-count-words-in-swedish"})}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.wordcountertool.net"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.wordcountertool.net/blog"},{"@type":"ListItem","position":3,"name":"Räkna ord på svenska: komplett guide (2026)","item":"https://www.wordcountertool.net/blog/how-to-count-words-in-swedish"}]})}} />

      <Footer />
    </>
  )
}
