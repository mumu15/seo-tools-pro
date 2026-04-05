import Header from '../../../components/Header'
import AdUnit from '../../components/AdUnit'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import FaqSchema from '../../../components/FaqSchema'

export const metadata = {
  alternates: { canonical: 'https://www.wordcountertool.net/blog/dutch-content-length-guide' },
  title: 'De optimale tekstlengte in het Nederlands: datagedreven gids (2026)',
  description: 'Hoe lang moeten Nederlandse teksten zijn? Blogs, landingspaginas, webshops en social media, met echte data van Google.nl en SEMrush.',
  openGraph: {
    title: 'De optimale tekstlengte in het Nederlands: datagedreven gids (2026)',
    description: 'Hoe lang moeten Nederlandse teksten zijn? Blogs, landingspaginas, webshops en social media, met echte data van Google.nl en SEMrush.',
    url: 'https://www.wordcountertool.net/blog/dutch-content-length-guide',
    siteName: 'WordCounterTool',
    type: 'article',
  },
}

const faqs = [
  { q: 'Hoe lang moet een Nederlands blogartikel zijn voor SEO?', a: 'De top-10 in Google.nl bevat gemiddeld 1.800 woorden. We adviseren 1.200-2.000 woorden voor informatieve artikelen. Uitgebreide gidsen mogen langer zijn, maar de kwaliteit is belangrijker dan het aantal woorden.' },
  { q: 'Zijn Nederlandse teksten korter dan Engelse?', a: 'Ja, gemiddeld 5-10% korter in woordaantal dankzij samenstellingen. "Health insurance" (2 woorden) wordt "ziektekostenverzekering" (1 woord). De informatiewaarde is gelijk.' },
  { q: 'Hoe lang moet een landingspagina zijn in het Nederlands?', a: '600-1.000 woorden. Data van ConversionLab toont dat 700-900 woorden de hoogste conversieratio opleveren voor Nederlandse landingspaginas.' },
  { q: 'Beinvloedt tekstlengte de Google-ranking?', a: 'Er is een positieve correlatie tussen lengte en ranking, maar Google waardeert diepgang boven volume. Een gefocust artikel van 1.500 woorden kan beter scoren dan een afdwalend artikel van 3.000 woorden.' },
  { q: 'Hoe vaak moet ik tussenkopjes gebruiken?', a: 'Elke 200-300 woorden een H2 of H3. Met 81% mobiel verkeer in Nederland zijn tussenkopjes cruciaal voor de leesbaarheid op smartphones.' },
  { q: 'Hoe groot is de Nederlandse internetmarkt?', a: 'Nederland heeft 17,1 miljoen internetgebruikers (98% penetratie). De e-commerce markt is 33,8 miljard euro waard. Google.nl heeft 94,7% marktaandeel. Inclusief Vlaanderen: ~24 miljoen Nederlandstalige gebruikers.' }
]

export default function Post() {
  return (
    <>
      <FaqSchema faqs={faqs} />
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8"><Link href="/blog" className="text-emerald-400 text-sm hover:underline">Terug naar Blog</Link></div>
        <article>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">De optimale tekstlengte in het Nederlands: datagedreven gids (2026)</h1>
          <p className="text-slate-400 text-sm mb-8">Bijgewerkt april 2026 | Leestijd: 10 min</p>
          <div className="result-box mb-8 border-emerald-500/30">
            <h2 className="text-emerald-400 font-bold mb-3">Samenvatting</h2>
            <p className="text-white">Blogartikelen in de top-10 van Google.nl bevatten gemiddeld <strong className="text-white">1.800 woorden</strong> (SEMrush 2024). Landingspaginas converteren het best met <strong className="text-white">600-1.000 woorden</strong>. Nederland heeft <strong className="text-white">17,1 miljoen internetgebruikers</strong> (98% penetratie). Gebruik onze <a href="/word-counter/language/dutch" className="text-emerald-400 underline">Nederlandse woordenteller</a> om je tekstlengte te controleren.</p>
          </div>
          <div className="space-y-8">

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Wat zeggen de data over Nederlandse tekstlengte?</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">SEMrush heeft in 2024 de top-20 resultaten geanalyseerd voor 5.000 Nederlandse zoekwoorden. Het resultaat: paginas op positie 1 in Google.nl bevatten gemiddeld 2.200 woorden, op positie 10 gemiddeld 1.400 woorden. Er is een duidelijke positieve correlatie tussen lengte en ranking.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Maar langer is niet automatisch beter. Google waardeert diepgang en relevantie, niet puur volume. Een artikel van 3.000 woorden dat afdwaalt, scoort slechter dan een gefocust artikel van 1.500 woorden dat alle vragen beantwoordt.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">De Nederlandse e-commerce markt is 33,8 miljard euro waard (Thuiswinkel.org 2024). 37% van het verkeer komt uit organisch zoeken. Goede SEO-content is een van de meest rendabele investeringen voor Nederlandse bedrijven.</p>
              <div className="result-box mb-4">
                <svg viewBox="0 0 600 240" style={{width:'100%',height:'auto'}} xmlns="http://www.w3.org/2000/svg">
                  <text x="300" y="20" textAnchor="middle" fill="#e2e8f0" style={{fontSize:'14px',fontWeight:'700'}}>Gem. woordaantal: Google.nl Top 10 (2024)</text>
                  <rect x="130" y="45" width="390" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="130" y="45" width={String(390*0.82)} height="28" rx="4" fill="#10b981" />
                  <text x="120" y="63" textAnchor="end" fill="#94a3b8" style={{fontSize:'11px'}}>Positie 1</text>
                  <text x={String(130+390*0.82+8)} y="63" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>2.200 woorden</text>
                  <rect x="130" y="81" width="390" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="130" y="81" width={String(390*0.71)} height="28" rx="4" fill="#10b981" />
                  <text x="120" y="99" textAnchor="end" fill="#94a3b8" style={{fontSize:'11px'}}>Positie 3</text>
                  <text x={String(130+390*0.71+8)} y="99" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>1.900 woorden</text>
                  <rect x="130" y="117" width="390" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="130" y="117" width={String(390*0.62)} height="28" rx="4" fill="#10b981" />
                  <text x="120" y="135" textAnchor="end" fill="#94a3b8" style={{fontSize:'11px'}}>Positie 5</text>
                  <text x={String(130+390*0.62+8)} y="135" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>1.650 woorden</text>
                  <rect x="130" y="153" width="390" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="130" y="153" width={String(390*0.55)} height="28" rx="4" fill="#10b981" />
                  <text x="120" y="171" textAnchor="end" fill="#94a3b8" style={{fontSize:'11px'}}>Positie 7</text>
                  <text x={String(130+390*0.55+8)} y="171" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>1.500 woorden</text>
                  <rect x="130" y="189" width="390" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="130" y="189" width={String(390*0.52)} height="28" rx="4" fill="#10b981" />
                  <text x="120" y="207" textAnchor="end" fill="#94a3b8" style={{fontSize:'11px'}}>Positie 10</text>
                  <text x={String(130+390*0.52+8)} y="207" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>1.400 woorden</text>
                </svg>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Tekstlengte per contenttype</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">Blogartikelen:</strong> 1.200-2.000 woorden. Uitgebreide gidsen mogen langer zijn. Gebruik tussenkopjes elke 200-300 woorden voor de leesbaarheid.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">Landingspaginas:</strong> 600-1.000 woorden. Uit data van ConversionLab (2024) blijkt dat Nederlandse landingspaginas met 700-900 woorden de hoogste conversieratio hebben.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">Webshop productpaginas:</strong> 300-600 woorden. Bol.com en Coolblue gebruiken gemiddeld 400 woorden per productpagina. Inclusief specificaties, voordelen en gebruiksscenarios.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">Nieuwsbrieven:</strong> 200-400 woorden. Volgens Spotler (Nederlandse e-mailmarketing-tool) hebben nieuwsbrieven tot 300 woorden het hoogste klikpercentage.</p>
            </section>

            <AdUnit slot="3248634657" />

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Nederlands vs. Engels: lengteverhouding</h2>
              <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm" style={{borderCollapse:'collapse'}}>
                  <thead>
                    <tr style={{borderBottom:'1px solid rgba(52,211,153,0.2)'}}>
                      <th className="text-left text-emerald-400 py-2 px-3">Engels</th>
                      <th className="text-left text-emerald-400 py-2 px-3">Nederlands</th>
                      <th className="text-left text-emerald-400 py-2 px-3">Verhouding</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['1.000 woorden', '~900-950 woorden', 'NL is 5-10% korter'],
                      ['1.500 woorden', '~1.350-1.425 woorden', 'NL is 5-10% korter'],
                      ['2.000 woorden', '~1.800-1.900 woorden', 'NL is 5-10% korter'],
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
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Nederlandse teksten zijn korter dankzij samenstellingen. Dit is normaal — het betekent niet dat er informatie ontbreekt. Gebruik onze <a href="/word-counter/language/dutch" className="text-emerald-400 underline">woordenteller</a> om de lengte te controleren.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Tekstlengte meten en optimaliseren</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">Concurrentieanalyse:</strong> Controleer het woordaantal van de top-5 resultaten in Google.nl voor je doelzoekwoord. Mik op het gemiddelde plus 15-20%.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">Leestijd weergeven:</strong> Toon de leestijd bovenaan je artikel. De ideale leestijd voor Nederlandse blogartikelen is 6-8 minuten (1.400-1.900 woorden).</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">Tussenkopjes:</strong> Elke 200-300 woorden een H2 of H3. Met 81% mobiel verkeer in Nederland (CBS 2024) zijn tussenkopjes essentieel voor de navigatie bij het scrollen.</p>
            </section>

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

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Article","headline":"De optimale tekstlengte in het Nederlands: datagedreven gids (2026)","description":"Hoe lang moeten Nederlandse teksten zijn? Blogs, landingspaginas, webshops en social media, met echte data van Google.nl en SEMrush.","inLanguage":"nl","author":{"@type":"Organization","name":"WordCounterTool"},"publisher":{"@type":"Organization","name":"WordCounterTool"},"datePublished":"2026-04-05","dateModified":"2026-04-05","mainEntityOfPage":"https://www.wordcountertool.net/blog/dutch-content-length-guide"})}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.wordcountertool.net"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.wordcountertool.net/blog"},{"@type":"ListItem","position":3,"name":"De optimale tekstlengte in het Nederlands: datagedreven gids (2026)","item":"https://www.wordcountertool.net/blog/dutch-content-length-guide"}]})}} />

      <Footer />
    </>
  )
}
