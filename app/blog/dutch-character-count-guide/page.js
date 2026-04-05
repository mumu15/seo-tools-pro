import Header from '../../../components/Header'
import AdUnit from '../../components/AdUnit'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import FaqSchema from '../../../components/FaqSchema'

export const metadata = {
  alternates: { canonical: 'https://www.wordcountertool.net/blog/dutch-character-count-guide' },
  title: 'Tekens tellen in het Nederlands: complete gids met platformlimieten (2026)',
  description: 'Alles over het tellen van Nederlandse tekens. Met IJ-digraph, trema, limieten van Twitter/X, Google en social media. Gratis tekenteller inbegrepen.',
  openGraph: {
    title: 'Tekens tellen in het Nederlands: complete gids met platformlimieten (2026)',
    description: 'Alles over het tellen van Nederlandse tekens. Met IJ-digraph, trema, limieten van Twitter/X, Google en social media. Gratis tekenteller inbegrepen.',
    url: 'https://www.wordcountertool.net/blog/dutch-character-count-guide',
    siteName: 'WordCounterTool',
    type: 'article',
  },
}

const faqs = [
  { q: 'Hoe tel ik tekens in een Nederlandse tekst?', a: 'Gebruik de gratis tekenteller op WordCounterTool.net. De tool telt letters met trema correct als enkele tekens. Je ziet het aantal tekens met en zonder spaties in realtime.' },
  { q: 'Telt de IJ als 1 of 2 tekens?', a: 'IJ telt als 2 tekens (I + J). Hoewel IJ soms als een letter wordt beschouwd (bijv. in "IJsselmeer"), wordt het technisch gezien als twee afzonderlijke tekens geteld.' },
  { q: 'Hoeveel tekens past er in een Google-titel in het Nederlands?', a: 'Google toont circa 55-60 tekens (gemeten in pixels). Omdat Nederlandse woorden gemiddeld langer zijn dan Engelse, passen er minder woorden in. Blijf onder de 55 tekens voor veiligheid.' },
  { q: 'Hoe optimaliseer ik Google Ads in het Nederlands met 30 tekens?', a: 'Gebruik afkortingen, cijfers en korte woorden. "Vergelijk nu" (13 tekens) is beter dan "Vergelijk nu direct" (20 tekens). Breek lange samenstellingen op waar nodig.' },
  { q: 'Nemen letters met trema meer ruimte in?', a: 'In UTF-8 nemen letters met trema 2 bytes in beslag (normale letters 1 byte). Voor tekentelling tellen ze als 1 teken. Dit verschil is alleen relevant voor databases en APIs die op bytes tellen.' },
  { q: 'Wat is het verschil tussen tekens en woorden in het Nederlands?', a: 'Tekens zijn individuele lettertekens (inclusief spaties en leestekens). Woorden zijn eenheden gescheiden door spaties. Door samenstellingen heeft het Nederlands relatief meer tekens per woord dan het Engels.' }
]

export default function Post() {
  return (
    <>
      <FaqSchema faqs={faqs} />
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8"><Link href="/blog" className="text-emerald-400 text-sm hover:underline">Terug naar Blog</Link></div>
        <article>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Tekens tellen in het Nederlands: complete gids met platformlimieten (2026)</h1>
          <p className="text-slate-400 text-sm mb-8">Bijgewerkt april 2026 | Leestijd: 8 min</p>
          <div className="result-box mb-8 border-emerald-500/30">
            <h2 className="text-emerald-400 font-bold mb-3">Samenvatting</h2>
            <p className="text-white">Het Nederlands gebruikt het <strong className="text-white">Latijnse alfabet met 26 letters</strong> plus de IJ-digraph en letters met trema. Tekenlimieten zijn belangrijk voor Twitter/X (<strong className="text-white">280 tekens</strong>), Google-titels (<strong className="text-white">55-60 tekens</strong>) en metabeschrijvingen (<strong className="text-white">155 tekens</strong>). Gebruik onze <a href="/character-counter" className="text-emerald-400 underline">gratis tekenteller</a>.</p>
          </div>
          <div className="space-y-8">

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Het Nederlandse tekensysteem</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Het Nederlands gebruikt het Latijnse alfabet met 26 letters. Bijzonder is de IJ-digraph, die soms als een letter wordt beschouwd (vandaar "IJsselmeer" met hoofdletter IJ). Het Nederlands gebruikt ook trema (twee punten boven een letter) om aan te geven dat klinkers apart worden uitgesproken: "coordinatie" bevat een trema op de tweede e om "co-ordinatie" aan te duiden.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Voor het tellen van tekens geldt: elke letter (inclusief letters met trema) telt als 1 teken. De IJ telt als 2 tekens (I + J). In UTF-8 nemen Nederlandse letters zonder diakritiek 1 byte in beslag; letters met trema nemen 2 bytes in beslag.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Onze tekenteller verwerkt alle Nederlandse tekens correct en toont het aantal tekens met en zonder spaties, het aantal woorden, zinnen en de geschatte leestijd.</p>
            </section>

            <AdUnit slot="3248634657" />


            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Tekenlimieten per platform</h2>
              <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm" style={{borderCollapse:'collapse'}}>
                  <thead>
                    <tr style={{borderBottom:'1px solid rgba(52,211,153,0.2)'}}>
                      <th className="text-left text-emerald-400 py-2 px-3">Platform</th>
                      <th className="text-left text-emerald-400 py-2 px-3">Limiet</th>
                      <th className="text-left text-emerald-400 py-2 px-3">Tip voor Nederlands</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Twitter/X', '280 tekens', 'Lange samenstellingen gebruiken meer tekens'],
                      ['Google Title', '55-60 tekens', 'Zoekwoord in de eerste 30 tekens'],
                      ['Meta Description', '150-155 tekens', 'Kernboodschap in de eerste 120 tekens'],
                      ['Instagram', '2.200 tekens', 'Eerste 125 tekens zijn zichtbaar in de feed'],
                      ['LinkedIn Post', '3.000 tekens', 'Optimaal: 1.200-1.800 tekens voor engagement'],
                      ['Google Ads kop', '30 tekens', 'Extreem krap in het Nederlands'],
                      ['Facebook Post', '63.206 tekens', 'Optimaal voor engagement: 40-80 tekens'],
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
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Let op: Nederlandse samenstellingen zijn lang. "Ziektekostenverzekering" is al 23 tekens — bijna de helft van een Google Ads-kop. Gebruik bij advertenties kortere woorden of afkortingen waar mogelijk.</p>
            </section>

            <AdUnit slot="3248634657" />

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">UTF-8 en Nederlandse tekens</h2>
              <div className="result-box mb-4">
                <svg viewBox="0 0 600 180" style={{width:'100%',height:'auto'}} xmlns="http://www.w3.org/2000/svg">
                  <text x="300" y="20" textAnchor="middle" fill="#e2e8f0" style={{fontSize:'14px',fontWeight:'700'}}>UTF-8 bytegrootte van Nederlandse tekens</text>
                  <rect x="150" y="45" width="350" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="150" y="45" width={String(350*0.25)} height="28" rx="4" fill="#10b981" />
                  <text x="140" y="63" textAnchor="end" fill="#94a3b8" style={{fontSize:'12px'}}>a-z, A-Z</text>
                  <text x={String(150+350*0.25+8)} y="63" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>1 byte</text>
                  <rect x="150" y="81" width="350" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="150" y="81" width={String(350*0.50)} height="28" rx="4" fill="#f59e0b" />
                  <text x="140" y="99" textAnchor="end" fill="#94a3b8" style={{fontSize:'12px'}}>Letters met trema</text>
                  <text x={String(150+350*0.50+8)} y="99" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>2 bytes</text>
                  <rect x="150" y="117" width="350" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="150" y="117" width={String(350*1.0)} height="28" rx="4" fill="#ef4444" />
                  <text x="140" y="135" textAnchor="end" fill="#94a3b8" style={{fontSize:'12px'}}>Emoji</text>
                  <text x={String(150+350*1.0-60)} y="135" fill="#ffffff" style={{fontSize:'12px',fontWeight:'600'}}>4 bytes</text>
                </svg>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Standaard Nederlandse letters (zonder diakritiek) nemen 1 byte in beslag in UTF-8 — net als Engelse letters. Letters met trema nemen 2 bytes in beslag. Voor de meeste toepassingen is dit verschil verwaarloosbaar.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Gebruik altijd <code className="text-emerald-400">&lt;meta charset=&quot;UTF-8&quot;&gt;</code> in je HTML. Zonder correcte codering kunnen letters met trema als vreemde tekens worden weergegeven.</p>
            </section>

            <AdUnit slot="3763639977" />


            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Praktische tips voor Nederlandse tekenlimieten</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">Google Ads:</strong> Met 30 tekens voor een kop is Nederlands bijzonder uitdagend. "Zorgverzekering vergelijken" is al 27 tekens. Gebruik afkortingen ("verz." voor "verzekering") en cijfers in plaats van woorden.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">SEO-titels:</strong> Google meet in pixels, niet in tekens. Nederlandse woorden zijn gemiddeld langer dan Engelse (5,2 vs 4,7 letters). Je past dus minder Nederlandse woorden in een titel van 60 tekens. Gebruik onze <a href="/character-counter" className="text-emerald-400 underline">tekenteller</a> om te controleren.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">Social media:</strong> Ondanks langere woorden is het Nederlands efficient dankzij samenstellingen. "Ziektekostenverzekering" is 1 woord en 23 tekens — in het Engels "health insurance" is 2 woorden en 16 tekens. Meer tekens, maar minder woorden.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Veelgestelde Vragen</h2>
              <div className="space-y-4">{faqs.map((faq,i)=>(<div key={i} className="result-box"><h3 className="text-white font-bold mb-2">{faq.q}</h3><p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p></div>))}</div>
            </section>

            <AdUnit slot="3248634657" />

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

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Article","headline":"Tekens tellen in het Nederlands: complete gids met platformlimieten (2026)","description":"Alles over het tellen van Nederlandse tekens. Met IJ-digraph, trema, limieten van Twitter/X, Google en social media. Gratis tekenteller inbegrepen.","inLanguage":"nl","author":{"@type":"Organization","name":"WordCounterTool"},"publisher":{"@type":"Organization","name":"WordCounterTool"},"datePublished":"2026-04-05","dateModified":"2026-04-05","mainEntityOfPage":"https://www.wordcountertool.net/blog/dutch-character-count-guide"})}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.wordcountertool.net"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.wordcountertool.net/blog"},{"@type":"ListItem","position":3,"name":"Tekens tellen in het Nederlands: complete gids met platformlimieten (2026)","item":"https://www.wordcountertool.net/blog/dutch-character-count-guide"}]})}} />

      <Footer />
    </>
  )
}
