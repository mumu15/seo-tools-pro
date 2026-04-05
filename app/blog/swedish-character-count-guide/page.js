import Header from '../../../components/Header'
import AdUnit from '../../components/AdUnit'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import FaqSchema from '../../../components/FaqSchema'

export const metadata = {
  alternates: { canonical: 'https://www.wordcountertool.net/blog/swedish-character-count-guide' },
  title: 'Räkna tecken på svenska: guide med plattformsgränser (2026)',
  description: 'Allt om teckenräkning på svenska — å, ä, ö, UTF-8, gränser för Twitter/X, Google, Instagram och Facebook. Gratis verktyg.',
  openGraph: {
    title: 'Räkna tecken på svenska: guide med plattformsgränser (2026)',
    description: 'Allt om teckenräkning på svenska — å, ä, ö, UTF-8, gränser för Twitter/X, Google, Instagram och Facebook. Gratis verktyg.',
    url: 'https://www.wordcountertool.net/blog/swedish-character-count-guide',
    siteName: 'WordCounterTool',
    type: 'article',
  },
}

const faqs = [
  { q: 'Hur räknar jag tecken i en svensk text?', a: 'Använd den gratis teckenräknaren på WordCounterTool.net. Den räknar å, ä, ö korrekt som enstaka tecken. Visar tecken med och utan mellanslag i realtid.' },
  { q: 'Räknas å, ä, ö som 1 eller 2 tecken?', a: '1 tecken på alla plattformar (Twitter, Instagram, Google). I UTF-8 tar de 2 byte vardera, men det påverkar bara databaser och API:er som räknar i byte.' },
  { q: 'Hur många tecken visar Google i titeln?', a: 'Google visar cirka 55-60 tecken (mätt i pixlar). Å, ä och ö har samma bredd som a och o, så de påverkar inte titellängden nämnvärt. Håll dig under 55 tecken.' },
  { q: 'Har SMS med å, ä, ö annan gräns?', a: 'Ja. SMS med å, ä, ö byter kodning från GSM-7 till UCS-2, vilket minskar gränsen från 160 till 70 tecken. Undvik å, ä, ö om du behöver 160 tecken.' },
  { q: 'Vad är skillnaden mellan tecken och ord?', a: 'Tecken är enskilda bokstäver, siffror, mellanslag och skiljetecken. Ord är enheter separerade av mellanslag. Tack vare sammansättningar har svenska relativt fler tecken per ord än engelska.' },
  { q: 'Hur optimerar jag Google Ads på svenska med 30 tecken?', a: 'Använd förkortningar ("försäkr." istället för "försäkring"), siffror istället för ord, och korta CTA:er ("Jämför" istället för "Jämför nu direkt"). Testa alltid i förhandsvisning.' }
]

export default function Post() {
  return (
    <>
      <FaqSchema faqs={faqs} />
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8"><Link href="/blog" className="text-emerald-400 text-sm hover:underline">Tillbaka till Bloggen</Link></div>
        <article>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Räkna tecken på svenska: guide med plattformsgränser (2026)</h1>
          <p className="text-slate-400 text-sm mb-8">Uppdaterad april 2026 | Lästid: 8 min</p>
          <div className="result-box mb-8 border-emerald-500/30">
            <h2 className="text-emerald-400 font-bold mb-3">Sammanfattning</h2>
            <p className="text-white">Svenska alfabetet har <strong className="text-white">29 bokstäver</strong> (26 latinska + å, ä, ö). Teckengränser påverkar Twitter/X (<strong className="text-white">280 tecken</strong>), Google-titlar (<strong className="text-white">55-60 tecken</strong>) och metabeskrivningar (<strong className="text-white">155 tecken</strong>). Använd vår <a href="/character-counter" className="text-emerald-400 underline">gratis teckenräknare</a>.</p>
          </div>
          <div className="space-y-8">

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Det svenska teckensystemet</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Svenska alfabetet har 29 bokstäver — 26 grundläggande latinska bokstäver plus å, ä och ö. Dessa tre bokstäver är INTE varianter av a och o utan separata bokstäver med egna platser i alfabetet (sist, i ordningen å, ä, ö). De ändrar ordets betydelse: "for" vs "för", "bar" vs "bär", "val" vs "väl".</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">I UTF-8 tar å, ä och ö vardera 2 byte, medan vanliga latinska bokstäver tar 1 byte. Vår teckenräknare räknar varje bokstav korrekt som 1 tecken, oavsett bytesstorlek.</p>
            </section>

            <AdUnit slot="3248634657" />


            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Teckengränser per plattform</h2>
              <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm" style={{borderCollapse:'collapse'}}>
                  <thead>
                    <tr style={{borderBottom:'1px solid rgba(52,211,153,0.2)'}}>
                      <th className="text-left text-emerald-400 py-2 px-3">Plattform</th>
                      <th className="text-left text-emerald-400 py-2 px-3">Gräns</th>
                      <th className="text-left text-emerald-400 py-2 px-3">Tips för svenska</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Twitter/X', '280 tecken', 'Sammansättningar tar fler tecken'],
                      ['Google-titel', '55-60 tecken', 'Nyckelord i de första 30 tecknen'],
                      ['Metabeskrivning', '150-155 tecken', 'Huvudbudskap i de första 120 tecknen'],
                      ['Instagram', '2 200 tecken', 'Första 125 tecknen syns i flödet'],
                      ['LinkedIn', '3 000 tecken', 'Optimalt: 1 200-1 800 tecken'],
                      ['Google Ads rubrik', '30 tecken', 'Extremt trångt på svenska'],
                      ['Facebook', '63 206 tecken', 'Optimalt: 40-80 tecken för engagemang'],
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
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Observera att svenska sammansättningar är långa. "Sjukförsäkringskassan" är redan 20 tecken — två tredjedelar av en Google Ads-rubrik. Använd kortare ord eller förkortningar i annonser.</p>
            </section>

            <AdUnit slot="3248634657" />

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">UTF-8 och svenska tecken</h2>
              <div className="result-box mb-4">
                <svg viewBox="0 0 600 180" style={{width:'100%',height:'auto'}} xmlns="http://www.w3.org/2000/svg">
                  <text x="300" y="20" textAnchor="middle" fill="#e2e8f0" style={{fontSize:'14px',fontWeight:'700'}}>UTF-8 bytestorlek för svenska tecken</text>
                  <rect x="150" y="45" width="350" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="150" y="45" width={String(350*0.25)} height="28" rx="4" fill="#10b981" />
                  <text x="140" y="63" textAnchor="end" fill="#94a3b8" style={{fontSize:'12px'}}>a-z, A-Z</text>
                  <text x={String(150+350*0.25+8)} y="63" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>1 byte</text>
                  <rect x="150" y="81" width="350" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="150" y="81" width={String(350*0.50)} height="28" rx="4" fill="#f59e0b" />
                  <text x="140" y="99" textAnchor="end" fill="#94a3b8" style={{fontSize:'12px'}}>å, ä, ö</text>
                  <text x={String(150+350*0.50+8)} y="99" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>2 byte</text>
                  <rect x="150" y="117" width="350" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="150" y="117" width={String(350*1.0)} height="28" rx="4" fill="#ef4444" />
                  <text x="140" y="135" textAnchor="end" fill="#94a3b8" style={{fontSize:'12px'}}>Emojis</text>
                  <text x={String(150+350*1.0-60)} y="135" fill="#ffffff" style={{fontSize:'12px',fontWeight:'600'}}>4 byte</text>
                </svg>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">SMS med å, ä, ö byter kodning från GSM-7 till UCS-2, vilket minskar gränsen från 160 till 70 tecken per SMS. Deklarera alltid <code className="text-emerald-400">&lt;meta charset=&quot;UTF-8&quot;&gt;</code> i din HTML.</p>
            </section>

            <AdUnit slot="3763639977" />


            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Praktiska tips för svenska teckengränser</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">Google Ads:</strong> Med 30 tecken per rubrik är svenska utmanande. "Bilförsäkring jämför" är redan 20 tecken. Använd förkortningar och siffror istället för ord.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">SEO-titlar:</strong> Google mäter i pixlar, inte tecken. Å, ä och ö har samma bredd som a och o. Säkert gräns: 55 tecken. Använd vår <a href="/character-counter" className="text-emerald-400 underline">teckenräknare</a> för att kontrollera.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">Sociala medier:</strong> Trots längre sammansättningar är svenska effektivt. "Sjukförsäkring" är 1 ord och 14 tecken — på engelska "health insurance" är 2 ord och 16 tecken.</p>
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

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Article","headline":"Räkna tecken på svenska: guide med plattformsgränser (2026)","description":"Allt om teckenräkning på svenska — å, ä, ö, UTF-8, gränser för Twitter/X, Google, Instagram och Facebook. Gratis verktyg.","inLanguage":"sv","author":{"@type":"Organization","name":"WordCounterTool"},"publisher":{"@type":"Organization","name":"WordCounterTool"},"datePublished":"2026-04-05","dateModified":"2026-04-05","mainEntityOfPage":"https://www.wordcountertool.net/blog/swedish-character-count-guide"})}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.wordcountertool.net"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.wordcountertool.net/blog"},{"@type":"ListItem","position":3,"name":"Räkna tecken på svenska: guide med plattformsgränser (2026)","item":"https://www.wordcountertool.net/blog/swedish-character-count-guide"}]})}} />

      <Footer />
    </>
  )
}
