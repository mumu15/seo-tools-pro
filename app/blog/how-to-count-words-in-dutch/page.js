import Header from '../../../components/Header'
import AdUnit from '../../components/AdUnit'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import FaqSchema from '../../../components/FaqSchema'

export const metadata = {
  alternates: { canonical: 'https://www.wordcountertool.net/blog/how-to-count-words-in-dutch' },
  title: 'Woorden tellen in het Nederlands: complete gids (2026)',
  description: 'Hoe tel je woorden, tekens en zinnen in het Nederlands? Met samenstellingen, leessnelheid en gratis tools voor nauwkeurig tellen.',
  openGraph: {
    title: 'Woorden tellen in het Nederlands: complete gids (2026)',
    description: 'Hoe tel je woorden, tekens en zinnen in het Nederlands? Met samenstellingen, leessnelheid en gratis tools voor nauwkeurig tellen.',
    url: 'https://www.wordcountertool.net/blog/how-to-count-words-in-dutch',
    siteName: 'WordCounterTool',
    type: 'article',
  },
}

const faqs = [
  { q: 'Hoe tel ik woorden in een Nederlandse tekst?', a: 'Gebruik de gratis Nederlandse woordenteller op WordCounterTool.net. Plak je tekst en zie direct: woorden, tekens, zinnen, alineas en leestijd. De tool herkent samenstellingen correct als een woord.' },
  { q: 'Tellen Nederlandse samenstellingen als een woord?', a: 'Ja. "Arbeidsongeschiktheidsverzekering" is een woord, ongeacht de lengte. Woordentellers splitsen tekst op spaties, dus elk samengesteld woord telt als een woord. Dit is correct volgens de Nederlandse spelling.' },
  { q: 'Wat is de leessnelheid in het Nederlands?', a: 'Informatieve teksten: 230-260 woorden per minuut. Fictie: 260-300 wpm. Technische teksten: 180-220 wpm. Onze tool berekent de leestijd op basis van 240 woorden per minuut.' },
  { q: 'Zijn Nederlandse teksten korter dan Engelse?', a: 'Ja, gemiddeld 5-10% korter in woordaantal dankzij samenstellingen. Bij technische teksten kan het verschil oplopen tot 15%. Dit is normaal en betekent niet dat er informatie ontbreekt.' },
  { q: 'Hoeveel woorden moet een Nederlands blogartikel bevatten?', a: 'Voor SEO adviseren we 1.200-2.000 woorden. De top-10 resultaten in Google.nl bevatten gemiddeld 1.800 woorden. Langere artikelen ranken doorgaans beter en trekken meer backlinks aan.' },
  { q: 'Is de Nederlandse woordenteller gratis?', a: 'Ja, volledig gratis en zonder registratie. Er worden geen gegevens opgeslagen of naar servers verstuurd. Je kunt de Nederlandse woordenteller onbeperkt gebruiken.' }
]

export default function Post() {
  return (
    <>
      <FaqSchema faqs={faqs} />
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8"><Link href="/blog" className="text-emerald-400 text-sm hover:underline">Terug naar Blog</Link></div>
        <article>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Woorden tellen in het Nederlands: complete gids (2026)</h1>
          <p className="text-slate-400 text-sm mb-8">Bijgewerkt april 2026 | Leestijd: 8 min</p>
          <div className="result-box mb-8 border-emerald-500/30">
            <h2 className="text-emerald-400 font-bold mb-3">Samenvatting</h2>
            <p className="text-white">Nederlandse teksten zijn gemiddeld <strong className="text-white">5-10% korter</strong> dan Engelse teksten met dezelfde informatie, dankzij samenstellingen. De gemiddelde leessnelheid in het Nederlands is <strong className="text-white">230-260 woorden per minuut</strong>. Het Nederlands staat bekend om extreem lange samengestelde woorden zoals "arbeidsongeschiktheidsverzekering" (36 letters, 1 woord). Gebruik onze <a href="/word-counter/language/dutch" className="text-emerald-400 underline">Nederlandse woordenteller</a> voor nauwkeurige resultaten.</p>
          </div>
          <div className="space-y-8">

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Waarom het tellen van Nederlandse woorden anders werkt</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Het Nederlands heeft een uniek kenmerk dat het tellen van woorden beinvloedt: onbeperkte woordsamenstelling. Net als het Duits kun je in het Nederlands theoretisch oneindig lange woorden vormen door zelfstandige naamwoorden aan elkaar te koppelen. "Arbeidsongeschiktheidsverzekering" is 36 letters lang maar telt als 1 woord.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Dit heeft praktische gevolgen: een Nederlandse tekst over ziekteverzekeringen heeft minder woorden dan de Engelse versie, terwijl beide dezelfde informatie bevatten. In het Engels staat "disability insurance" — twee woorden. In het Nederlands: "arbeidsongeschiktheidsverzekering" — een woord.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Volgens een analyse van Translated.net (2023) zijn Nederlandse teksten gemiddeld 5-10% korter in woordaantal dan Engelse equivalenten. Bij technische teksten kan dit oplopen tot 15%. Dit komt door de samenstellingen die meerdere Engelse woorden comprimeren tot een Nederlands woord.</p>
            </section>

            <AdUnit slot="3248634657" />


            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Nederlandse samenstellingen en woordtelling</h2>
              <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm" style={{borderCollapse:'collapse'}}>
                  <thead>
                    <tr style={{borderBottom:'1px solid rgba(52,211,153,0.2)'}}>
                      <th className="text-left text-emerald-400 py-2 px-3">Nederlandse samenstelling</th>
                      <th className="text-left text-emerald-400 py-2 px-3">Engels (woorden)</th>
                      <th className="text-left text-emerald-400 py-2 px-3">Tekens</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Ziekenhuis', 'hospital (1 woord)', '10'],
                      ['Stofzuiger', 'vacuum cleaner (2 woorden)', '10'],
                      ['Snelheidsbeperking', 'speed limit (2 woorden)', '18'],
                      ['Ziektekostenverzekering', 'health insurance (2 woorden)', '23'],
                      ['Arbeidsongeschiktheidsverzekering', 'disability insurance (2 woorden)', '36'],
                      ['Kinderopvangtoeslag', 'childcare allowance (2 woorden)', '19'],
                      ['Rijbewijsverlengingsaanvraag', 'license renewal application (3 woorden)', '28'],
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
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Voor het tellen van woorden betekent dit: een zin met veel samenstellingen heeft minder woorden maar meer tekens. Dit is belangrijk voor platforms die op tekens tellen (zoals Twitter/X) versus platforms die op woorden tellen (zoals WordPress).</p>
            </section>

            <AdUnit slot="3248634657" />

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Stap voor stap: woorden tellen in het Nederlands</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">Stap 1:</strong> Open de <a href="/word-counter/language/dutch" className="text-emerald-400 underline">Nederlandse woordenteller</a> op WordCounterTool.net.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">Stap 2:</strong> Plak je Nederlandse tekst. De tool herkent automatisch Nederlandse tekens inclusief trema (e), IJ-digraph en samenstellingen.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">Stap 3:</strong> Bekijk de resultaten: woorden, tekens (met en zonder spaties), zinnen, alineas en geschatte leestijd.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">Stap 4:</strong> Gebruik het woordaantal voor blogs en SEO, en het tekenaantal voor social media en metabeschrijvingen.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">De leessnelheid in het Nederlands ligt rond 230-260 woorden per minuut voor informatieve teksten en 260-300 wpm voor fictie. Onze tool berekent de leestijd op basis van 240 woorden per minuut.</p>
            </section>

            <AdUnit slot="3763639977" />


            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Aanbevolen woordaantal per contenttype</h2>
              <div className="result-box mb-4">
                <svg viewBox="0 0 600 260" style={{width:'100%',height:'auto'}} xmlns="http://www.w3.org/2000/svg">
                  <text x="300" y="20" textAnchor="middle" fill="#e2e8f0" style={{fontSize:'14px',fontWeight:'700'}}>Aanbevolen woordaantal voor Nederlandse content</text>
                  <rect x="180" y="45" width="340" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="180" y="45" width={String(340*0.80)} height="28" rx="4" fill="#10b981" />
                  <text x="170" y="63" textAnchor="end" fill="#94a3b8" style={{fontSize:'11px'}}>Blogartikel</text>
                  <text x={String(180+340*0.80+8)} y="63" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>1.200-2.000</text>
                  <rect x="180" y="81" width="340" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="180" y="81" width={String(340*0.45)} height="28" rx="4" fill="#10b981" />
                  <text x="170" y="99" textAnchor="end" fill="#94a3b8" style={{fontSize:'11px'}}>Landingspagina</text>
                  <text x={String(180+340*0.45+8)} y="99" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>600-1.000</text>
                  <rect x="180" y="117" width="340" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="180" y="117" width={String(340*0.30)} height="28" rx="4" fill="#10b981" />
                  <text x="170" y="135" textAnchor="end" fill="#94a3b8" style={{fontSize:'11px'}}>Productpagina</text>
                  <text x={String(180+340*0.30+8)} y="135" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>300-600</text>
                  <rect x="180" y="153" width="340" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="180" y="153" width={String(340*0.18)} height="28" rx="4" fill="#10b981" />
                  <text x="170" y="171" textAnchor="end" fill="#94a3b8" style={{fontSize:'11px'}}>Nieuwsbrief</text>
                  <text x={String(180+340*0.18+8)} y="171" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>200-400</text>
                  <rect x="180" y="189" width="340" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="180" y="189" width={String(340*1.0)} height="28" rx="4" fill="#10b981" />
                  <text x="170" y="207" textAnchor="end" fill="#94a3b8" style={{fontSize:'11px'}}>Scriptie</text>
                  <text x={String(180+340*1.0-100)} y="207" fill="#ffffff" style={{fontSize:'12px',fontWeight:'600'}}>8.000-15.000</text>
                </svg>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Houd er rekening mee dat Nederlandse teksten door samenstellingen compacter zijn dan Engelse. Als je een Engelse bron van 1.500 woorden vertaalt naar het Nederlands, krijg je circa 1.350-1.425 Nederlandse woorden — en dat is normaal.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">De Nederlandstalige internetmarkt</h2>
              <div className="result-box mb-4">
                <svg viewBox="0 0 600 200" style={{width:'100%',height:'auto'}} xmlns="http://www.w3.org/2000/svg">
                  <text x="300" y="20" textAnchor="middle" fill="#e2e8f0" style={{fontSize:'14px',fontWeight:'700'}}>Nederlandstalige internetgebruikers (2024)</text>
                  <rect x="140" y="45" width="370" height="30" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="140" y="45" width={String(370*0.68)} height="30" rx="4" fill="#10b981" />
                  <text x="130" y="64" textAnchor="end" fill="#94a3b8" style={{fontSize:'12px'}}>Nederland</text>
                  <text x={String(140+370*0.68+8)} y="64" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>17,1 mln</text>
                  <rect x="140" y="83" width="370" height="30" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="140" y="83" width={String(370*0.26)} height="30" rx="4" fill="#10b981" />
                  <text x="130" y="102" textAnchor="end" fill="#94a3b8" style={{fontSize:'12px'}}>Vlaanderen</text>
                  <text x={String(140+370*0.26+8)} y="102" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>6,7 mln</text>
                  <rect x="140" y="121" width="370" height="30" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="140" y="121" width={String(370*0.02)} height="30" rx="4" fill="#10b981" />
                  <text x="130" y="140" textAnchor="end" fill="#94a3b8" style={{fontSize:'12px'}}>Suriname</text>
                  <text x={String(140+370*0.02+8)} y="140" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>0,4 mln</text>
                  <rect x="140" y="159" width="370" height="30" rx="4" fill="rgba(240,200,66,0.15)" />
                  <rect x="140" y="159" width={String(370*1.0)} height="30" rx="4" fill="#f0c842" fillOpacity="0.6" />
                  <text x="130" y="178" textAnchor="end" fill="#f0c842" style={{fontSize:'12px',fontWeight:'700'}}>Totaal</text>
                  <text x={String(140+370*1.0-100)} y="178" fill="#1e293b" style={{fontSize:'13px',fontWeight:'700'}}>~24,2 mln gebruikers</text>
                </svg>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Het Nederlands is de 40e meest gebruikte taal op het internet. Nederland heeft een internetpenetratie van 98% — een van de hoogste ter wereld. De e-commerce markt in Nederland is 33,8 miljard euro waard (Thuiswinkel.org 2024). Google.nl heeft 94,7% marktaandeel.</p>
            </section>

            <AdUnit slot="3248634657" />


            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Veelgestelde Vragen</h2>
              <div className="space-y-4">{faqs.map((faq,i)=>(<div key={i} className="result-box"><h3 className="text-white font-bold mb-2">{faq.q}</h3><p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p></div>))}</div>
            </section>
          </div>
        </article>
      </main>

      <div className="max-w-4xl mx-auto px-4 mb-8">
        <div className="bg-gradient-to-r from-emerald-900/20 to-teal-900/10 border border-emerald-500/20 rounded-2xl p-6">
          <h2 className="text-lg font-bold text-white mb-3">Nederlandse Schrijftools</h2>
          <div className="flex flex-wrap gap-2">
            <a href="/word-counter/language/dutch" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Nederlandse Woordenteller</a>
            <a href="/word-counter" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Woordenteller</a>
            <a href="/character-counter" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Tekenteller</a>
            <a href="/reading-time" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Leestijd Calculator</a>
            <a href="/readability-checker" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Leesbaarheidscheck</a>
            <a href="/keyword-density" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Zoekwoorddichtheid</a>
          </div>
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Article","headline":"Woorden tellen in het Nederlands: complete gids (2026)","description":"Hoe tel je woorden, tekens en zinnen in het Nederlands? Met samenstellingen, leessnelheid en gratis tools voor nauwkeurig tellen.","inLanguage":"nl","author":{"@type":"Organization","name":"WordCounterTool"},"publisher":{"@type":"Organization","name":"WordCounterTool"},"datePublished":"2026-04-05","dateModified":"2026-04-05","mainEntityOfPage":"https://www.wordcountertool.net/blog/how-to-count-words-in-dutch"})}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.wordcountertool.net"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.wordcountertool.net/blog"},{"@type":"ListItem","position":3,"name":"Woorden tellen in het Nederlands: complete gids (2026)","item":"https://www.wordcountertool.net/blog/how-to-count-words-in-dutch"}]})}} />

      <Footer />
    </>
  )
}
