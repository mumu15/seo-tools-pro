import Header from '../../../components/Header'
import AdUnit from '../../components/AdUnit'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import FaqSchema from '../../../components/FaqSchema'

export const metadata = {
  alternates: { canonical: 'https://www.wordcountertool.net/blog/common-dutch-writing-mistakes' },
  title: 'De 15 meest voorkomende schrijffouten in het Nederlands en hoe je ze vermijdt (2026)',
  description: 'Ontdek de 15 meest voorkomende fouten in het Nederlands: dt-fouten, samenstellingen, leestekens, anglicismen en meer. Met data, voorbeelden en gratis tools.',
  openGraph: {
    title: 'De 15 meest voorkomende schrijffouten in het Nederlands en hoe je ze vermijdt (2026)',
    description: 'Ontdek de 15 meest voorkomende fouten in het Nederlands: dt-fouten, samenstellingen, leestekens, anglicismen en meer. Met data, voorbeelden en gratis tools.',
    url: 'https://www.wordcountertool.net/blog/common-dutch-writing-mistakes',
    siteName: 'WordCounterTool',
    type: 'article',
  },
}

const faqs = [
  { q: 'Wat zijn de meest voorkomende schrijffouten in het Nederlands?', a: 'De meest voorkomende fouten zijn: samenstellingen los schrijven (42%), dt-fouten (34%), leestekens (30%), overmatige anglicismen (28%) en verkeerd hoofdlettergebruik (22%). Samenstellingen los schrijven is de nummer 1 fout in Nederlandse webteksten.' },
  { q: 'Hoe werkt de dt-regel?', a: 'Bij je/jij: stam zonder -t, behalve als de stam al op -d eindigt. Bij hij/zij/het: stam + t. Verleden tijd: nooit -dt. Controlevraag: vervang het werkwoord door "lopen". "Hij loopt" = hij vindt (met -t). "Loop jij?" = vind jij? (zonder -t).' },
  { q: 'Wanneer schrijf je samenstellingen aan elkaar?', a: 'In het Nederlands worden samenstellingen bijna altijd aan elkaar geschreven: "koffiezetapparaat", "zonnebloemolie", "telefoonoplader". Los schrijven (de "Engelse ziekte") is bijna altijd fout. Twijfel je? Zoek het woord op in Van Dale.' },
  { q: 'Wat is de ideale zinslengte voor Nederlandse webteksten?', a: '15-20 woorden per zin is ideaal. Boven de 25 woorden neemt het begrip af. Wissel korte zinnen (8-10 woorden) af met middellange zinnen (18-22 woorden) voor een natuurlijk ritme.' },
  { q: 'Welke gratis tools helpen bij het schrijven in het Nederlands?', a: 'WordCounterTool.net biedt een Nederlandse woordenteller, tekenteller, leesbaarheidscheck en zoekwoorddichtheidschecker — allemaal gratis. LanguageTool heeft een gratis grammaticacontrole voor het Nederlands. Van Dale Online biedt beperkt gratis woordenboekinformatie.' },
  { q: 'Beinvloeden schrijffouten de Google-ranking?', a: 'Ja. Google beoordeelt content op E-E-A-T (expertise, ervaring, autoriteit, betrouwbaarheid). Teksten met veel fouten scoren lager op expertise. Volgens SEMrush ranken foutloze teksten gemiddeld 8 posities hoger in Google.nl.' }
]

export default function Post() {
  return (
    <>
      <FaqSchema faqs={faqs} />
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8"><Link href="/blog" className="text-emerald-400 text-sm hover:underline">Terug naar Blog</Link></div>
        <article>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">De 15 meest voorkomende schrijffouten in het Nederlands en hoe je ze vermijdt (2026)</h1>
          <p className="text-slate-400 text-sm mb-8">Bijgewerkt april 2026 | Leestijd: 9 min</p>
          <div className="result-box mb-8 border-emerald-500/30">
            <h2 className="text-emerald-400 font-bold mb-3">Samenvatting</h2>
            <p className="text-white">Nederlands wordt gesproken door <strong className="text-white">25 miljoen mensen</strong> als moedertaal in Nederland, Belgie en Suriname. Zelfs moedertaalsprekers maken regelmatig fouten, vooral bij <strong className="text-white">dt-werkwoorden</strong>, <strong className="text-white">samenstellingen</strong> en <strong className="text-white">hoofdlettergebruik</strong>. Volgens het Genootschap Onze Taal (2024) zijn dt-fouten goed voor 34% van alle taalvragen. Gebruik onze <a href="/word-counter/language/dutch" className="text-emerald-400 underline">Nederlandse woordenteller</a> om je teksten te analyseren.</p>
          </div>
          <div className="space-y-8">

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Waarom schrijffouten in het Nederlands zo vaak voorkomen</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Het Nederlands is een West-Germaanse taal met een aantal unieke uitdagingen. De dt-regels, de spelling van samengestelde woorden, het onderscheid tussen ei/ij, en de invloed van het Engels maken correct schrijven lastig. Uit onderzoek van het Meertens Instituut (2024) blijkt dat 58% van de Nederlanders minstens een keer per week twijfelt over de spelling.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">De digitale communicatie heeft het probleem vergroot. WhatsApp-berichten, tweets, blogposts en e-mails worden snel geschreven en zelden nagelezen. Volgens Taalunie-data uit 2024 bevatten Nederlandse webteksten gemiddeld 4,1 fouten per 1.000 woorden — hoger dan het Europese gemiddelde van 3,2.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Voor SEO is tekstkwaliteit direct van invloed op de ranking. Google beoordeelt de expertise van content via E-E-A-T, en teksten met veel fouten worden als minder betrouwbaar beschouwd. Een SEMrush-onderzoek (2024) toonde aan dat foutloze teksten gemiddeld 8 posities hoger ranken in Google.nl.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Fouten 1-5: Spelling en werkwoorden</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">1. Dt-fouten (wordt/word, vindt/vind):</strong> De beruchte dt-regel is de nummer 1 taalfout in het Nederlands. De regel: bij je/jij krijgt de stam geen -t ("jij wordt" maar ook "word jij?"). Bij hij/zij/het krijgt de stam wel een -t ("hij vindt"). Verleden tijd: nooit een -dt. Volgens Onze Taal is 34% van alle taalvragen dt-gerelateerd.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">2. Aan elkaar of los (samenstellingen):</strong> Nederlands staat bekend om zijn samenstellingen. "Pannenkoek" is een woord, niet "pannen koek". "Koffiezetapparaat" is correct, niet "koffie zet apparaat". De Taalunie noemt dit de "Engelse ziekte" — het onterecht los schrijven van samenstellingen. 42% van de spelfouten in Nederlandse webteksten betreft samenstellingen.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">3. Hun/hen verwarring:</strong> "Hun" is bezittelijk of meewerkend voorwerp ("hun boek", "ik gaf het hun"). "Hen" is lijdend voorwerp ("ik zag hen"). In de praktijk wordt dit onderscheid steeds minder gemaakt, en de Taalunie heeft in 2024 "hun" als lijdend voorwerp officieel geaccepteerd. Toch is het in formele teksten beter het onderscheid te handhaven.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">4. Trema en koppelteken:</strong> "Coordinatie" is fout — correct is "coordinatie" of "co-ordinatie". De trema voorkomt verwarring bij het lezen: "geuit" (zonder trema zou het "geuit" worden gelezen als "ge-uit"). Het koppelteken wordt gebruikt bij lastig leesbare combinaties: "zee-eend", niet "zeeeend".</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">5. Hoofdletters na dubbele punt:</strong> Na een dubbele punt volgt in het Nederlands GEEN hoofdletter, tenzij er een eigennaam of een citaat volgt. "Hij zei het volgende: het was goed" — geen hoofdletter na de dubbele punt. Dit verschilt van het Engels waar een hoofdletter soms wel correct is.</p>
              <div className="result-box mb-4">
                <svg viewBox="0 0 600 240" style={{width:'100%',height:'auto'}} xmlns="http://www.w3.org/2000/svg">
                  <text x="300" y="20" textAnchor="middle" fill="#e2e8f0" style={{fontSize:'14px',fontWeight:'700'}}>Frequentie van Nederlandse schrijffouten (2024)</text>
                  <rect x="160" y="40" width="340" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="160" y="40" width={String(340*0.42)} height="28" rx="4" fill="#10b981" />
                  <text x="150" y="58" textAnchor="end" fill="#94a3b8" style={{fontSize:'12px'}}>Samenstellingen</text>
                  <text x={String(160+340*0.42+8)} y="58" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>42%</text>
                  <rect x="160" y="76" width="340" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="160" y="76" width={String(340*0.34)} height="28" rx="4" fill="#10b981" />
                  <text x="150" y="94" textAnchor="end" fill="#94a3b8" style={{fontSize:'12px'}}>Dt-fouten</text>
                  <text x={String(160+340*0.34+8)} y="94" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>34%</text>
                  <rect x="160" y="112" width="340" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="160" y="112" width={String(340*0.30)} height="28" rx="4" fill="#10b981" />
                  <text x="150" y="130" textAnchor="end" fill="#94a3b8" style={{fontSize:'12px'}}>Leestekens</text>
                  <text x={String(160+340*0.30+8)} y="130" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>30%</text>
                  <rect x="160" y="148" width="340" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="160" y="148" width={String(340*0.28)} height="28" rx="4" fill="#10b981" />
                  <text x="150" y="166" textAnchor="end" fill="#94a3b8" style={{fontSize:'12px'}}>Anglicismen</text>
                  <text x={String(160+340*0.28+8)} y="166" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>28%</text>
                  <rect x="160" y="184" width="340" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="160" y="184" width={String(340*0.22)} height="28" rx="4" fill="#10b981" />
                  <text x="150" y="202" textAnchor="end" fill="#94a3b8" style={{fontSize:'12px'}}>Hoofdletters</text>
                  <text x={String(160+340*0.22+8)} y="202" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>22%</text>
                </svg>
              </div>
            </section>

            <AdUnit slot="3248634657" />

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Fouten 6-10: Stijl en grammatica</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">6. Anglicismen overmatig gebruiken:</strong> "We moeten de meeting reschedulen en de feedback implementen" — terwijl er prima Nederlandse woorden zijn: "We moeten de vergadering verzetten en de terugkoppeling verwerken." Het Nederlands neemt veel Engelse woorden over, maar overmatig gebruik maakt teksten onleesbaar voor een breed publiek.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">7. Tangconstructies (te lange zinnen):</strong> "Het bedrijf dat vorig jaar werd opgericht door twee ondernemers die elkaar hadden ontmoet op een conferentie die werd georganiseerd door..." — dit is een tangconstructie. De informatie zit "gevangen" in bijzinnen. Herschrijf naar kortere zinnen. De ideale zinslengte voor webteksten is 15-20 woorden.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">8. Komma voor "en":</strong> In het Nederlands staat er normaal GEEN komma voor "en" (anders dan de Engelse "Oxford comma"). "Appels, peren, en bananen" is incorrect — correct: "appels, peren en bananen". Uitzondering: als de structuur onduidelijk wordt.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">9. Passieve zinnen:</strong> "Er wordt door het team gewerkt aan het project" — dit is onnodig passief. Beter: "Het team werkt aan het project." Passieve constructies maken teksten langer en zwakker. Beperk passief gebruik tot maximaal 15% van je tekst.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">10. Verkeerd gebruik van "als" en "dan":</strong> "Groter als" is fout — correct is "groter dan". "Als" gebruik je bij gelijkheid ("net zo groot als"). "Dan" gebruik je bij vergrotende trap ("groter dan", "beter dan"). Deze fout komt vooral voor in gesproken Nederlands en wordt dan overgenomen in teksten.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Fouten 11-15: Digitaal schrijven en SEO</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">11. Te lange alineas:</strong> Op mobiele apparaten (81% van het internetverkeer in Nederland — CBS 2024) worden alineas van meer dan 4 regels als "tekstmuren" ervaren. Maximaal 2-3 zinnen per alinea. Een idee per alinea.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">12. Tussen-n bij samenstellingen:</strong> "Pannenkoekenrestaurant" of "pannenkoekrestaurant"? De regel is complex: de tussen-n komt als het eerste deel een meervoud op -en heeft dat ook zonder samenstelling bestaat. "Pannenkoek" bestaat, dus geen extra -n. "Ruggengraat" — "ruggen" als meervoud bestaat, dus met -n.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">13. Inconsequent taalgebruik (je/u):</strong> Wissel niet tussen "je" en "u" in dezelfde tekst. Kies een aanspreekstijl en houd die vol. Voor blogs en websites is "je" gebruikelijk, voor formele teksten "u". Inconsistentie irriteert lezers meer dan de keuze zelf.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">14. Geen verschil tussen Belgisch en Nederlands Nederlands:</strong> Als je doelgroep Belgisch is, houd dan rekening met Vlaamse voorkeuren: "GSM" in plaats van "mobiel", "voetpad" in plaats van "stoep", "middag" kan in Vlaanderen het middagmaal betekenen. Gebruik hreflang-tags (nl-NL en nl-BE) voor gerichte SEO.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">15. SEO-optimalisatie negeren:</strong> Goed Nederlands schrijven is niet genoeg om hoog te scoren in Google. Je hebt ook nodig: natuurlijke zoekwoorden, H2/H3-kopjes, interne links en geoptimaliseerde metabeschrijvingen. Gebruik onze <a href="/keyword-density" className="text-emerald-400 underline">zoekwoorddichtheidschecker</a> voor de juiste balans.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Tools voor het controleren van Nederlandse teksten</h2>
              <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm" style={{borderCollapse:'collapse'}}>
                  <thead>
                    <tr style={{borderBottom:'1px solid rgba(52,211,153,0.2)'}}>
                      <th className="text-left text-emerald-400 py-2 px-3">Tool</th>
                      <th className="text-left text-emerald-400 py-2 px-3">Wat het controleert</th>
                      <th className="text-left text-emerald-400 py-2 px-3">Gratis?</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['WordCounterTool Nederlands', 'Woorden, tekens, zinnen, leestijd', 'Ja, 100%'],
                      ['LanguageTool', 'Grammatica, spelling, stijl', 'Basis gratis'],
                      ['Zoekwoorddichtheid', 'Frequentie en verdeling van zoekwoorden', 'Ja, 100%'],
                      ['Leesbaarheidscheck', 'Flesch-Douma leesbaarheidsscore', 'Ja, 100%'],
                      ['Van Dale Online', 'Woordenboek en taaladvies', 'Beperkt gratis'],
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
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Tip: lees je tekst hardop voor. Als je struikelt over een zin, is die waarschijnlijk te lang of te ingewikkeld. Deze simpele methode vindt fouten die geen enkele tool detecteert.</p>
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

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Article","headline":"De 15 meest voorkomende schrijffouten in het Nederlands en hoe je ze vermijdt (2026)","description":"Ontdek de 15 meest voorkomende fouten in het Nederlands: dt-fouten, samenstellingen, leestekens, anglicismen en meer. Met data, voorbeelden en gratis tools.","inLanguage":"nl","author":{"@type":"Organization","name":"WordCounterTool"},"publisher":{"@type":"Organization","name":"WordCounterTool"},"datePublished":"2026-04-05","dateModified":"2026-04-05","mainEntityOfPage":"https://www.wordcountertool.net/blog/common-dutch-writing-mistakes"})}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.wordcountertool.net"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.wordcountertool.net/blog"},{"@type":"ListItem","position":3,"name":"De 15 meest voorkomende schrijffouten in het Nederlands en hoe je ze vermijdt (2026)","item":"https://www.wordcountertool.net/blog/common-dutch-writing-mistakes"}]})}} />

      <Footer />
    </>
  )
}
