import Header from '../../../components/Header'
import AdUnit from '../../components/AdUnit'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import FaqSchema from '../../../components/FaqSchema'

export const metadata = {
  alternates: { canonical: 'https://www.wordcountertool.net/blog/swedish-content-length-guide' },
  title: 'Optimal textlängd på svenska: datadriven guide (2026)',
  description: 'Hur lång ska din svenska text vara? Blogginlägg, landningssidor, e-handel — med data från Google.se och SEMrush.',
  openGraph: {
    title: 'Optimal textlängd på svenska: datadriven guide (2026)',
    description: 'Hur lång ska din svenska text vara? Blogginlägg, landningssidor, e-handel — med data från Google.se och SEMrush.',
    url: 'https://www.wordcountertool.net/blog/swedish-content-length-guide',
    siteName: 'WordCounterTool',
    type: 'article',
  },
}

const faqs = [
  { q: 'Hur långt ska ett svenskt blogginlägg vara?', a: 'Topp-10 på Google.se har i genomsnitt 1 700 ord. Vi rekommenderar 1 200-2 000 ord. Position 1 har i snitt 2 100 ord. Kvalitet är dock viktigare än kvantitet.' },
  { q: 'Är svenska texter kortare än engelska?', a: 'Ja, i genomsnitt 5-10% kortare i ordantal tack vare sammansättningar. Informationsinnehållet är detsamma — sammansättningarna komprimerar flera engelska ord till ett.' },
  { q: 'Hur lång ska en landningssida vara?', a: '600-1 000 ord. Data visar att sidor med 700-900 ord har högst konverteringsgrad på den svenska marknaden.' },
  { q: 'Påverkar textlängd Google-rankingen?', a: 'Det finns en positiv korrelation, men Google belönar djup och relevans. En fokuserad text på 1 500 ord kan ranka bättre än en utsvävande text på 3 000 ord.' },
  { q: 'Hur ofta ska jag använda underrubriker?', a: 'Var 200-300:e ord — H2 eller H3. Med 83% mobiltrafik i Sverige är underrubriker avgörande för navigering vid scrollning.' },
  { q: 'Hur stor är den svenska internetmarknaden?', a: 'Sverige har 10 miljoner internetanvändare (96% penetration). Google.se har 95,3% marknadsandel. E-handeln uppgår till 165 miljarder kronor. 35% av trafiken kommer från organisk sökning.' }
]

export default function Post() {
  return (
    <>
      <FaqSchema faqs={faqs} />
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8"><Link href="/blog" className="text-emerald-400 text-sm hover:underline">Tillbaka till Bloggen</Link></div>
        <article>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Optimal textlängd på svenska: datadriven guide (2026)</h1>
          <p className="text-slate-400 text-sm mb-8">Uppdaterad april 2026 | Lästid: 10 min</p>
          <div className="result-box mb-8 border-emerald-500/30">
            <h2 className="text-emerald-400 font-bold mb-3">Sammanfattning</h2>
            <p className="text-white">Blogginlägg i topp-10 på Google.se innehåller i genomsnitt <strong className="text-white">1 700 ord</strong> (SEMrush 2024). Landningssidor konverterar bäst med <strong className="text-white">600-1 000 ord</strong>. Sverige har <strong className="text-white">10 miljoner internetanvändare</strong> (96% penetration). Använd vår <a href="/word-counter/language/swedish" className="text-emerald-400 underline">svenska ordräknare</a>.</p>
          </div>
          <div className="space-y-8">

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Vad säger data om svenska textlängder?</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">SEMrush analyserade topp-20-resultaten för 4 000 svenska sökord 2024. Resultat: sidor på position 1 i Google.se innehåller i genomsnitt 2 100 ord, på position 10 cirka 1 300 ord. Korrelationen mellan längd och ranking är tydlig.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Men längre är inte automatiskt bättre. Google belönar djup och relevans, inte bara volym. En artikel på 3 000 ord som svävar ut rankar sämre än en fokuserad artikel på 1 500 ord som besvarar alla frågor.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Sveriges e-handelsmarknad uppgick till 165 miljarder kronor 2024 (PostNord). 35% av trafiken kommer från organisk sökning. Bra SEO-innehåll är en av de mest lönsamma investeringarna för svenska företag.</p>
              <div className="result-box mb-4">
                <svg viewBox="0 0 600 240" style={{width:'100%',height:'auto'}} xmlns="http://www.w3.org/2000/svg">
                  <text x="300" y="20" textAnchor="middle" fill="#e2e8f0" style={{fontSize:'14px',fontWeight:'700'}}>Genomsnittligt ordantal: Google.se Topp 10 (2024)</text>
                  <rect x="130" y="45" width="390" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="130" y="45" width={String(390*0.84)} height="28" rx="4" fill="#10b981" />
                  <text x="120" y="63" textAnchor="end" fill="#94a3b8" style={{fontSize:'11px'}}>Position 1</text>
                  <text x={String(130+390*0.84+8)} y="63" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>2 100 ord</text>
                  <rect x="130" y="81" width="390" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="130" y="81" width={String(390*0.72)} height="28" rx="4" fill="#10b981" />
                  <text x="120" y="99" textAnchor="end" fill="#94a3b8" style={{fontSize:'11px'}}>Position 3</text>
                  <text x={String(130+390*0.72+8)} y="99" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>1 800 ord</text>
                  <rect x="130" y="117" width="390" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="130" y="117" width={String(390*0.62)} height="28" rx="4" fill="#10b981" />
                  <text x="120" y="135" textAnchor="end" fill="#94a3b8" style={{fontSize:'11px'}}>Position 5</text>
                  <text x={String(130+390*0.62+8)} y="135" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>1 550 ord</text>
                  <rect x="130" y="153" width="390" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="130" y="153" width={String(390*0.55)} height="28" rx="4" fill="#10b981" />
                  <text x="120" y="171" textAnchor="end" fill="#94a3b8" style={{fontSize:'11px'}}>Position 7</text>
                  <text x={String(130+390*0.55+8)} y="171" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>1 400 ord</text>
                  <rect x="130" y="189" width="390" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="130" y="189" width={String(390*0.52)} height="28" rx="4" fill="#10b981" />
                  <text x="120" y="207" textAnchor="end" fill="#94a3b8" style={{fontSize:'11px'}}>Position 10</text>
                  <text x={String(130+390*0.52+8)} y="207" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>1 300 ord</text>
                </svg>
              </div>
            </section>

            <AdUnit slot="3248634657" />


            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Textlängd per innehållstyp</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">Blogginlägg:</strong> 1 200-2 000 ord. Utförliga guider kan vara längre. Underrubriker var 200-300:e ord.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">Landningssidor:</strong> 600-1 000 ord. Enligt svensk konverteringsdata har sidor med 700-900 ord högst konverteringsgrad.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">E-handel (produktsidor):</strong> 300-600 ord. CDON och Zalando Sverige använder i genomsnitt 400 ord per produktsida.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">Nyhetsbrev:</strong> 200-400 ord. Kortare e-postmeddelanden har högre klickfrekvens på den svenska marknaden.</p>
            </section>

            <AdUnit slot="3763639977" />


            <AdUnit slot="3248634657" />

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Svenska vs engelska: längdförhållande</h2>
              <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm" style={{borderCollapse:'collapse'}}>
                  <thead>
                    <tr style={{borderBottom:'1px solid rgba(52,211,153,0.2)'}}>
                      <th className="text-left text-emerald-400 py-2 px-3">Engelska</th>
                      <th className="text-left text-emerald-400 py-2 px-3">Svenska</th>
                      <th className="text-left text-emerald-400 py-2 px-3">Förhållande</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['1 000 ord', '~900-950 ord', 'SV 5-10% kortare'],
                      ['1 500 ord', '~1 350-1 425 ord', 'SV 5-10% kortare'],
                      ['2 000 ord', '~1 800-1 900 ord', 'SV 5-10% kortare'],
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
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Använd vår <a href="/word-counter/language/swedish" className="text-emerald-400 underline">ordräknare</a> och <a href="/readability-checker" className="text-emerald-400 underline">läsbarhetskontroll</a> för att optimera dina svenska texter.</p>
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

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Article","headline":"Optimal textlängd på svenska: datadriven guide (2026)","description":"Hur lång ska din svenska text vara? Blogginlägg, landningssidor, e-handel — med data från Google.se och SEMrush.","inLanguage":"sv","author":{"@type":"Organization","name":"WordCounterTool"},"publisher":{"@type":"Organization","name":"WordCounterTool"},"datePublished":"2026-04-05","dateModified":"2026-04-05","mainEntityOfPage":"https://www.wordcountertool.net/blog/swedish-content-length-guide"})}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.wordcountertool.net"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.wordcountertool.net/blog"},{"@type":"ListItem","position":3,"name":"Optimal textlängd på svenska: datadriven guide (2026)","item":"https://www.wordcountertool.net/blog/swedish-content-length-guide"}]})}} />

      <Footer />
    </>
  )
}
