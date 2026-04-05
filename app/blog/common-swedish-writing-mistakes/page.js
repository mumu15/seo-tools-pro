import Header from '../../../components/Header'
import AdUnit from '../../components/AdUnit'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import FaqSchema from '../../../components/FaqSchema'

export const metadata = {
  alternates: { canonical: 'https://www.wordcountertool.net/blog/common-swedish-writing-mistakes' },
  title: 'De 15 vanligaste skrivfelen på svenska och hur du undviker dem (2026)',
  description: 'De 15 vanligaste felen i svensk skrift — särskrivning, kommatering, de/dem, anglicismer och mer. Med data, exempel och gratis verktyg.',
  openGraph: {
    title: 'De 15 vanligaste skrivfelen på svenska och hur du undviker dem (2026)',
    description: 'De 15 vanligaste felen i svensk skrift — särskrivning, kommatering, de/dem, anglicismer och mer. Med data, exempel och gratis verktyg.',
    url: 'https://www.wordcountertool.net/blog/common-swedish-writing-mistakes',
    siteName: 'WordCounterTool',
    type: 'article',
  },
}

const faqs = [
  { q: 'Vilka är de vanligaste skrivfelen på svenska?', a: 'De vanligaste felen är: särskrivning (62%), de/dem-förväxling (48%), kommatering (40%), onödiga anglicismer (35%) och genitiv med apostrof (30%). Särskrivning är det överlägset vanligaste felet i svenska webbtexter.' },
  { q: 'Vad är särskrivning och varför är det fel?', a: 'Särskrivning innebär att ett sammansatt ord delas upp i två ord: "glass bil" istället för "glassbil". Det kan ändra betydelsen helt. På svenska skrivs sammansatta ord alltid ihop, till skillnad från engelskan.' },
  { q: 'Hur skiljer man på de och dem?', a: '"De" är subjektsform (de går), "dem" är objektsform (jag ser dem). Enkelt test: byt ut mot "vi/oss" — "vi går" (de), "jag ser oss" (dem). I informella texter accepteras "dom" allt mer, men i formella texter gäller de/dem.' },
  { q: 'Vad är idealisk meningslängd för svenska webbtexter?', a: '15-20 ord per mening. Över 25 ord sjunker förståelsen med 30%. Blanda korta (8 ord) och medellånga (18 ord) meningar för naturlig rytm.' },
  { q: 'Vilka gratisverktyg hjälper med svensk skrivning?', a: 'WordCounterTool.net erbjuder ordräknare, teckenräknare, läsbarhetskontroll och nyckelordsdensitet — allt gratis. LanguageTool har gratis grammatikkontroll. SAOL online är referensen för korrekt stavning.' },
  { q: 'Påverkar skrivfel Google-rankingen?', a: 'Ja. Google bedömer innehållskvalitet genom E-E-A-T. Texter med många fel signalerar bristande expertis. Enligt SEMrush rankar felfria texter i genomsnitt 7 positioner högre på Google.se.' }
]

export default function Post() {
  return (
    <>
      <FaqSchema faqs={faqs} />
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8"><Link href="/blog" className="text-emerald-400 text-sm hover:underline">Tillbaka till Bloggen</Link></div>
        <article>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">De 15 vanligaste skrivfelen på svenska och hur du undviker dem (2026)</h1>
          <p className="text-slate-400 text-sm mb-8">Uppdaterad april 2026 | Lästid: 9 min</p>
          <div className="result-box mb-8 border-emerald-500/30">
            <h2 className="text-emerald-400 font-bold mb-3">Sammanfattning</h2>
            <p className="text-white">Svenska talas av <strong className="text-white">10 miljoner personer</strong> som modersmål i Sverige och Finland. Även infödda talare gör regelbundna fel, särskilt med <strong className="text-white">särskrivning</strong>, <strong className="text-white">de/dem</strong> och <strong className="text-white">kommatering</strong>. Enligt Språkrådet (2024) är särskrivning det vanligaste språkfelet i svenska texter. Använd vår <a href="/word-counter/language/swedish" className="text-emerald-400 underline">svenska ordräknare</a> för att analysera dina texter.</p>
          </div>
          <div className="space-y-8">

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Varför skrivfel på svenska är så vanliga</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Svenska är ett germanskt språk med en grammatik som kan verka enkel jämfört med exempelvis tyska eller polska — inga kasus (utom genitiv), bara två genus (en/ett) och relativt enkel verbböjning. Men det finns fallgropar: särskrivning, de/dem-förväxling, kommatering och det ökande inflödet av anglicismer skapar problem även för modersmålstalare.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Den digitala kommunikationen har förvärrat problemet. SMS, chattar, sociala medier och snabba e-postmeddelanden skrivs ofta utan korrekturläsning. Enligt en undersökning från Institutet för språk och folkminnen (2024) innehåller svenska webbtexter i genomsnitt 3,5 fel per 1 000 ord.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Ur SEO-perspektiv påverkar textkvaliteten rankingen direkt. Google bedömer innehållets expertis genom E-E-A-T, och texter med många fel anses vara mindre tillförlitliga. En SEMrush-studie (2024) visade att felfria texter rankar i genomsnitt 7 positioner högre på Google.se.</p>
            </section>

            <AdUnit slot="3248634657" />


            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Fel 1-5: Stavning och ordbildning</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">1. Särskrivning (den vanligaste felet):</strong> "Glass bilen" istället för "glassbilen", "rök fritt" istället för "rökfritt", "frukt salat" istället för "fruktsallad". Sammansatta ord skrivs ihop på svenska — det är en grundregel. Särskrivning kan ändra betydelsen helt: "rökfritt" (utan rök) vs "rök fritt" (rök obehindrat). Enligt Språkrådet är särskrivning det mest rapporterade språkfelet i Sverige.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">2. De/dem-förväxling:</strong> "De" är subjektsform ("de går"), "dem" är objektsform ("jag ser dem"). I talspråk uttalas båda som "dom", vilket gör skriftspråket förvirrande. 2024 föreslog Språkrådet att acceptera "dom" i informella texter, men i formella texter gäller fortfarande de/dem.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">3. Sär- och sammanskrivning av partikelverb:</strong> "Jag tänker på det" (partikel "på") vs "Vi påtänker en förändring" (sammansatt). "Sätta upp" (partikelverb, isär) vs "uppskatta" (sammansatt, ihop). Regeln: partikelverb är isär, sammansatta verb är ihop.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">4. Å, ä, ö — utelämnade eller felaktiga:</strong> Att skriva "a" istället för "å", "a" istället för "ä" eller "o" istället för "ö" i webbtexter signalerar bristande kvalitet. "Gar" istället för "går", "ar" istället för "är" — dessa bokstäver är inte utbytbara. De ändrar ordets betydelse helt.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">5. Genitiv med apostrof:</strong> "Annas bok" (korrekt) vs "Anna's bok" (engelska — fel på svenska). På svenska bildas genitiv genom att lägga till -s UTAN apostrof. Apostrof används bara när namnet slutar på s, z eller x: "Max' bok". Genitiv-apostrof är en av de vanligaste anglicismerna i modern svenska.</p>
              <div className="result-box mb-4">
                <svg viewBox="0 0 600 240" style={{width:'100%',height:'auto'}} xmlns="http://www.w3.org/2000/svg">
                  <text x="300" y="20" textAnchor="middle" fill="#e2e8f0" style={{fontSize:'14px',fontWeight:'700'}}>Vanligaste svenska skrivfelen (2024)</text>
                  <rect x="150" y="40" width="350" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="150" y="40" width={String(350*0.62)} height="28" rx="4" fill="#10b981" />
                  <text x="140" y="58" textAnchor="end" fill="#94a3b8" style={{fontSize:'12px'}}>Särskrivning</text>
                  <text x={String(150+350*0.62+8)} y="58" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>62%</text>
                  <rect x="150" y="76" width="350" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="150" y="76" width={String(350*0.48)} height="28" rx="4" fill="#10b981" />
                  <text x="140" y="94" textAnchor="end" fill="#94a3b8" style={{fontSize:'12px'}}>De/dem</text>
                  <text x={String(150+350*0.48+8)} y="94" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>48%</text>
                  <rect x="150" y="112" width="350" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="150" y="112" width={String(350*0.40)} height="28" rx="4" fill="#10b981" />
                  <text x="140" y="130" textAnchor="end" fill="#94a3b8" style={{fontSize:'12px'}}>Kommatering</text>
                  <text x={String(150+350*0.40+8)} y="130" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>40%</text>
                  <rect x="150" y="148" width="350" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="150" y="148" width={String(350*0.35)} height="28" rx="4" fill="#10b981" />
                  <text x="140" y="166" textAnchor="end" fill="#94a3b8" style={{fontSize:'12px'}}>Anglicismer</text>
                  <text x={String(150+350*0.35+8)} y="166" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>35%</text>
                  <rect x="150" y="184" width="350" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="150" y="184" width={String(350*0.30)} height="28" rx="4" fill="#10b981" />
                  <text x="140" y="202" textAnchor="end" fill="#94a3b8" style={{fontSize:'12px'}}>Genitiv-apostrof</text>
                  <text x={String(150+350*0.30+8)} y="202" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>30%</text>
                </svg>
              </div>
            </section>

            <AdUnit slot="3248634657" />

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Fel 6-10: Grammatik och stil</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">6. Anglicismer i onödan:</strong> "Vi behöver brainstorma och sen delivera resultat" — medan det finns bra svenska ord: "Vi behöver idéutveckla och sedan leverera resultat." Sverige har ett av världens högsta engelskkunskaper (EF English Proficiency Index, 2:a plats 2024), vilket gör att engelska ord smyger in i vardagsspråket.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">7. Kommatering före "och":</strong> På svenska sätter man normalt INTE komma före "och" i uppräkningar (till skillnad från engelskans Oxford-komma). "Äpplen, päron, och bananer" är fel — korrekt: "äpplen, päron och bananer". Undantag: när "och" inleder en ny sats.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">8. Passiva konstruktioner:</strong> "Det genomfördes en undersökning av teamet" → "Teamet genomförde en undersökning." Passiva meningar är längre och svagare. Begränsa passiv till max 15% av texten.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">9. Ordföljd i bisatser:</strong> I svenska bisatser kommer "inte" FÖRE verbet: "Jag vet att han inte kommer" (inte "att han kommer inte"). Denna regel, kallad BIFF-regeln (Bisats Inte Före Finit verb), är unik för skandinaviska språk.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">10. Sin/hans/hennes-förväxling:</strong> "Sin" refererar tillbaka till satsens subjekt: "Han tog sin bil" (hans egen bil). "Hans" refererar till någon annans: "Han tog hans bil" (någon annans bil). Denna distinktion finns inte i engelskan och ställer till problem.</p>
            </section>

            <AdUnit slot="3763639977" />


            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Fel 11-15: Digitalt skrivande och SEO</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">11. För långa meningar:</strong> Idealisk meningslängd för webbtexter är 15-20 ord. Över 25 ord sjunker förståelsen med 30% (Göteborgs universitet, 2024). Blanda korta (8 ord) och medellånga (18 ord) meningar.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">12. För långa stycken:</strong> På mobila enheter (83% av internettrafiken i Sverige — Internetstiftelsen 2024) blir stycken med fler än 4 rader "textväggar". Max 2-3 meningar per stycke.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">13. Du-tilltal vs man-tilltal:</strong> Svenska webbtexter använder vanligen "du" (direkt tilltal) snarare än "man" (opersonligt). "Du kan räkna ord med vårt verktyg" fungerar bättre än "Man kan räkna ord med verktyget." Dubbla inte — välj ett tilltal och håll dig till det.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">14. Versaler i rubriker:</strong> På svenska skrivs rubriker INTE med stora bokstäver på varje ord (så kallad "Title Case" på engelska). "Hur Du Räknar Ord På Svenska" är fel — korrekt: "Hur du räknar ord på svenska." Bara första ordet och egennamn har stor bokstav.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">15. Ignorera SEO:</strong> Bra svenska räcker inte för att ranka högt. Du behöver: naturliga nyckelord, H2/H3-rubriker, interna länkar och optimerade metabeskrivningar. Använd vårt <a href="/keyword-density" className="text-emerald-400 underline">verktyg för nyckelordsdensitet</a>.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Verktyg för att kontrollera svenska texter</h2>
              <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm" style={{borderCollapse:'collapse'}}>
                  <thead>
                    <tr style={{borderBottom:'1px solid rgba(52,211,153,0.2)'}}>
                      <th className="text-left text-emerald-400 py-2 px-3">Verktyg</th>
                      <th className="text-left text-emerald-400 py-2 px-3">Kontrollerar</th>
                      <th className="text-left text-emerald-400 py-2 px-3">Gratis?</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['WordCounterTool Svenska', 'Ord, tecken, meningar, lästid', 'Ja, 100%'],
                      ['LanguageTool', 'Grammatik, stavning, stil', 'Grundversion gratis'],
                      ['Nyckelordsdensitet', 'Frekvens och fördelning av nyckelord', 'Ja, 100%'],
                      ['Läsbarhetskontroll', 'LIX läsbarhetsindex', 'Ja, 100%'],
                      ['Svenska Akademiens ordlista (SAOL)', 'Stavning och ordformer', 'Ja, online'],
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
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Tips: Läs din text högt. Om du snubblar på en mening är den förmodligen för lång eller för komplicerad. Denna enkla metod hittar problem som inget automatiskt verktyg upptäcker.</p>
            </section>

            <AdUnit slot="3248634657" />


            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Vanliga Frågor</h2>
              <div className="space-y-4">{faqs.map((faq,i)=>(<div key={i} className="result-box"><h3 className="text-white font-bold mb-2">{faq.q}</h3><p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p></div>))}</div>
            </section>
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

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Article","headline":"De 15 vanligaste skrivfelen på svenska och hur du undviker dem (2026)","description":"De 15 vanligaste felen i svensk skrift — särskrivning, kommatering, de/dem, anglicismer och mer. Med data, exempel och gratis verktyg.","inLanguage":"sv","author":{"@type":"Organization","name":"WordCounterTool"},"publisher":{"@type":"Organization","name":"WordCounterTool"},"datePublished":"2026-04-05","dateModified":"2026-04-05","mainEntityOfPage":"https://www.wordcountertool.net/blog/common-swedish-writing-mistakes"})}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.wordcountertool.net"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.wordcountertool.net/blog"},{"@type":"ListItem","position":3,"name":"De 15 vanligaste skrivfelen på svenska och hur du undviker dem (2026)","item":"https://www.wordcountertool.net/blog/common-swedish-writing-mistakes"}]})}} />

      <Footer />
    </>
  )
}
