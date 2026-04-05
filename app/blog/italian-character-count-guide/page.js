import Header from '../../../components/Header'
import AdUnit from '../../components/AdUnit'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import FaqSchema from '../../../components/FaqSchema'

export const metadata = {
  alternates: { canonical: 'https://www.wordcountertool.net/blog/italian-character-count-guide' },
  title: 'Conteggio caratteri in italiano: guida con limiti delle piattaforme (2026)',
  description: 'Tutto sul conteggio dei caratteri in italiano — accenti, apostrofi, limiti di Twitter/X, Google, Instagram e WhatsApp. Strumento gratuito incluso.',
  openGraph: {
    title: 'Conteggio caratteri in italiano: guida con limiti delle piattaforme (2026)',
    description: 'Tutto sul conteggio dei caratteri in italiano — accenti, apostrofi, limiti di Twitter/X, Google, Instagram e WhatsApp. Strumento gratuito incluso.',
    url: 'https://www.wordcountertool.net/blog/italian-character-count-guide',
    siteName: 'WordCounterTool',
    type: 'article',
  },
}

const faqs = [
  { q: 'Come contare i caratteri in italiano?', a: 'Usa il contacaratteri gratuito su WordCounterTool.net. Conta correttamente le lettere accentate (à, è, é, ì, ò, ù) come singoli caratteri. Mostra il conteggio con e senza spazi in tempo reale.' },
  { q: 'Le lettere accentate contano come 1 o 2 caratteri?', a: '1 carattere su tutte le piattaforme (Twitter, Instagram, Google). In UTF-8 occupano 2 byte, ma questo influenza solo i database e le API che contano per byte.' },
  { q: 'Qual è il limite di caratteri di WhatsApp?', a: 'I messaggi WhatsApp non hanno un limite pratico. Lo Stato ha un limite di 700 caratteri. WhatsApp è molto popolare in Italia con 35 milioni di utenti attivi quotidiani.' },
  { q: 'Quanti caratteri mostra Google nel titolo?', a: 'Google mostra circa 55–60 caratteri, ma misura in pixel. Le parole italiane sono mediamente più lunghe di quelle inglesi, quindi potresti avere meno spazio. Resta sotto i 55 caratteri per sicurezza.' },
  { q: 'SMS con accenti ha un limite diverso?', a: 'Sì. SMS con lettere accentate passa da GSM-7 a UCS-2, riducendo il limite da 160 a 70 caratteri. Se hai bisogno di 160 caratteri, evita gli accenti — ma questo compromette la qualità del testo italiano.' },
  { q: 'Qual è la differenza tra "caratteri" e "battute"?', a: 'Nell\'editoria italiana, "battute" è sinonimo di "caratteri spazi inclusi". Una cartella editoriale standard è di 1.800 battute. Per il web, si usano di più "caratteri" e "parole".' }
]

export default function Post() {
  return (
    <>
      <FaqSchema faqs={faqs} />
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8"><Link href="/blog" className="text-emerald-400 text-sm hover:underline">Torna al Blog</Link></div>
        <article>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Conteggio caratteri in italiano: guida con limiti delle piattaforme (2026)</h1>
          <p className="text-slate-400 text-sm mb-8">Aggiornato ad aprile 2026 | Tempo di lettura: 8 min</p>
          <div className="result-box mb-8 border-emerald-500/30">
            <h2 className="text-emerald-400 font-bold mb-3">Riepilogo</h2>
            <p className="text-white">L'italiano usa l'<strong className="text-white">alfabeto latino con 21 lettere native</strong> più 5 lettere straniere e lettere accentate (à, è, é, ì, ò, ù). I limiti di caratteri influenzano Twitter/X (<strong className="text-white">280 caratteri</strong>), Google Title (<strong className="text-white">55–60 caratteri</strong>), e meta description (<strong className="text-white">155 caratteri</strong>). Usa il nostro <a href="/character-counter" className="text-emerald-400 underline">contacaratteri gratuito</a>.</p>
          </div>
          <div className="space-y-8">

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Il sistema di caratteri dell'italiano</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">L'alfabeto italiano nativo ha 21 lettere (mancano j, k, w, x, y rispetto all'inglese). Le lettere accentate (à, è, é, ì, ò, ù) sono essenziali e non decorative — "pèsca" (frutto) e "pésca" (attività) hanno significati diversi. Ogni lettera accentata conta come un singolo carattere.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">L'italiano ha una particolarità: usa sia l'accento grave (à, è, ì, ò, ù) che acuto (é). La maggior parte delle vocali accentate usa il grave, ma "perché", "poiché", "affinché" e "né" usano l'acuto. Questa distinzione non influenza il conteggio dei caratteri ma è fondamentale per la correttezza del testo.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">In UTF-8, le lettere accentate italiane occupano 2 byte ciascuna (le lettere normali occupano 1 byte). Il nostro contacaratteri conta correttamente ogni lettera accentata come un singolo carattere, non come due.</p>
            </section>

            <AdUnit slot="3248634657" />


            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Limiti di caratteri per piattaforma</h2>
              <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm" style={{borderCollapse:'collapse'}}>
                  <thead>
                    <tr style={{borderBottom:'1px solid rgba(52,211,153,0.2)'}}>
                      <th className="text-left text-emerald-400 py-2 px-3">Piattaforma</th>
                      <th className="text-left text-emerald-400 py-2 px-3">Limite</th>
                      <th className="text-left text-emerald-400 py-2 px-3">Consiglio per l'italiano</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Twitter/X', '280 caratteri', 'L\'italiano è più verboso — aspettati 40–50 parole'],
                      ['Google Title', '55–60 caratteri', 'Parola chiave nei primi 30 caratteri'],
                      ['Meta Description', '150–155 caratteri', 'Beneficio principale + CTA in 150 caratteri'],
                      ['Instagram', '2.200 caratteri', 'I primi 125 caratteri sono visibili nel feed'],
                      ['WhatsApp Stato', '700 caratteri', 'Popolare in Italia — 35M utenti attivi'],
                      ['Google Ads titolo', '30 caratteri', 'Molto stretto in italiano — usa abbreviazioni'],
                      ['LinkedIn Post', '3.000 caratteri', 'Ottimale: 1.200–1.800 per engagement'],
                      ['Facebook Post', '63.206 caratteri', 'Ottimale per engagement: 40–80 caratteri'],
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
              <p className="text-slate-400 text-sm leading-relaxed mb-4">WhatsApp è molto popolare in Italia: 35 milioni di utenti attivi quotidiani (dati Meta 2024). Lo Stato di WhatsApp ha un limite di 700 caratteri. I messaggi non hanno un limite pratico ma 300 caratteri sono ottimali per la leggibilità.</p>
            </section>

            <AdUnit slot="3248634657" />

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">UTF-8 e caratteri italiani</h2>
              <div className="result-box mb-4">
                <svg viewBox="0 0 600 180" style={{width:'100%',height:'auto'}} xmlns="http://www.w3.org/2000/svg">
                  <text x="300" y="20" textAnchor="middle" fill="#e2e8f0" style={{fontSize:'14px',fontWeight:'700'}}>Byte per carattere in UTF-8 (italiano)</text>
                  <rect x="150" y="45" width="350" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="150" y="45" width={String(350*0.25)} height="28" rx="4" fill="#10b981" />
                  <text x="140" y="63" textAnchor="end" fill="#94a3b8" style={{fontSize:'12px'}}>a–z, A–Z</text>
                  <text x={String(150+350*0.25+8)} y="63" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>1 byte</text>
                  <rect x="150" y="81" width="350" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="150" y="81" width={String(350*0.50)} height="28" rx="4" fill="#f59e0b" />
                  <text x="140" y="99" textAnchor="end" fill="#94a3b8" style={{fontSize:'12px'}}>à, è, é, ì, ò, ù</text>
                  <text x={String(150+350*0.50+8)} y="99" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>2 byte</text>
                  <rect x="150" y="117" width="350" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="150" y="117" width={String(350*1.0)} height="28" rx="4" fill="#ef4444" />
                  <text x="140" y="135" textAnchor="end" fill="#94a3b8" style={{fontSize:'12px'}}>Emoji</text>
                  <text x={String(150+350*1.0-60)} y="135" fill="#ffffff" style={{fontSize:'12px',fontWeight:'600'}}>4 byte</text>
                </svg>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Le lettere accentate italiane occupano 2 byte in UTF-8. Un testo con molti accenti occupa circa il 5–8% in più di spazio rispetto allo stesso testo senza accenti. Per gli SMS, gli accenti possono ridurre il limite da 160 a 70 caratteri (passaggio da GSM-7 a UCS-2).</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Nelle pagine web, dichiara sempre <code className="text-emerald-400">&lt;meta charset=&quot;UTF-8&quot;&gt;</code>. Senza questa dichiarazione, le lettere accentate possono apparire come simboli illeggibili.</p>
            </section>

            <AdUnit slot="3763639977" />


            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Consigli pratici per i limiti di caratteri</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">Google Ads:</strong> Con solo 30 caratteri per il titolo, l'italiano è particolarmente limitato. "Assicurazione auto" usa già 18 caratteri. Usa abbreviazioni dove possibile e numeri al posto delle parole.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">SEO Title:</strong> Google misura in pixel, non in caratteri. Le lettere larghe come "m" e "w" occupano più spazio. Un titolo italiano di 55 caratteri potrebbe essere tagliato. Testa sempre nel simulatore SERP.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">Instagram:</strong> I primi 125 caratteri appaiono nel feed prima del "altro". In italiano corrispondono a circa 20–25 parole. Metti il gancio più attraente in questo spazio iniziale.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Usa il nostro <a href="/character-counter" className="text-emerald-400 underline">contacaratteri</a> per verificare i tuoi testi prima della pubblicazione su qualsiasi piattaforma.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Domande Frequenti</h2>
              <div className="space-y-4">{faqs.map((faq,i)=>(<div key={i} className="result-box"><h3 className="text-white font-bold mb-2">{faq.q}</h3><p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p></div>))}</div>
            </section>

            <AdUnit slot="3248634657" />

          </div>
        </article>
      </main>

      <div className="max-w-4xl mx-auto px-4 mb-8">
        <div className="bg-gradient-to-r from-emerald-900/20 to-teal-900/10 border border-emerald-500/20 rounded-2xl p-6">
          <h2 className="text-lg font-bold text-white mb-3">Strumenti per la Scrittura in Italiano</h2>
          <div className="flex flex-wrap gap-2">
            <a href="/word-counter/language/italian" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Contaparole Italiano</a>
            <a href="/word-counter" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Contaparole</a>
            <a href="/character-counter" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Contacaratteri</a>
            <a href="/reading-time" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Tempo di Lettura</a>
            <a href="/readability-checker" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Verifica Leggibilità</a>
            <a href="/keyword-density" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Densità Parole Chiave</a>
          </div>
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Article","headline":"Conteggio caratteri in italiano: guida con limiti delle piattaforme (2026)","description":"Tutto sul conteggio dei caratteri in italiano — accenti, apostrofi, limiti di Twitter/X, Google, Instagram e WhatsApp. Strumento gratuito incluso.","inLanguage":"it","author":{"@type":"Organization","name":"WordCounterTool"},"publisher":{"@type":"Organization","name":"WordCounterTool"},"datePublished":"2026-04-05","dateModified":"2026-04-05","mainEntityOfPage":"https://www.wordcountertool.net/blog/italian-character-count-guide"})}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.wordcountertool.net"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.wordcountertool.net/blog"},{"@type":"ListItem","position":3,"name":"Conteggio caratteri in italiano: guida con limiti delle piattaforme (2026)","item":"https://www.wordcountertool.net/blog/italian-character-count-guide"}]})}} />

      <Footer />
    </>
  )
}
