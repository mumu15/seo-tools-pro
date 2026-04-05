import Header from '../../../components/Header'
import AdUnit from '../../components/AdUnit'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import FaqSchema from '../../../components/FaqSchema'

export const metadata = {
  alternates: { canonical: 'https://www.wordcountertool.net/blog/polish-character-count-guide' },
  title: 'Liczenie znaków po polsku: kompletny przewodnik z limitami platform (2026)',
  description: 'Wszystko o liczeniu polskich znaków — znaki diakrytyczne, UTF-8, limity Twittera/X, Google, Facebooka i Allegro. Darmowe narzędzie.',
  openGraph: {
    title: 'Liczenie znaków po polsku: kompletny przewodnik z limitami platform (2026)',
    description: 'Wszystko o liczeniu polskich znaków — znaki diakrytyczne, UTF-8, limity Twittera/X, Google, Facebooka i Allegro. Darmowe narzędzie.',
    url: 'https://www.wordcountertool.net/blog/polish-character-count-guide',
    siteName: 'WordCounterTool',
    type: 'article',
  },
}

const faqs = [
  { q: 'Jak liczyć znaki w polskim tekście?', a: 'Użyj darmowego licznika znaków na WordCounterTool.net. Liczy polskie znaki (ą, ć, ę, ł, ń, ó, ś, ź, ż) poprawnie jako pojedyncze znaki. Pokazuje liczbę ze spacjami i bez, w czasie rzeczywistym.' },
  { q: 'Czy polskie znaki diakrytyczne liczą się jako 1 czy 2 znaki?', a: 'Jako 1 znak na wszystkich platformach (Twitter, Instagram, Google). W UTF-8 zajmują 2 bajty, ale to wpływa tylko na bazy danych i API z limitami bajtowymi.' },
  { q: 'Jaki jest limit znaków na Allegro?', a: 'Tytuł produktu na Allegro: 50 znaków. To niewiele — skup się na najważniejszych cechach produktu. Allegro to największa polska platforma e-commerce z 14 mln aktywnych kupujących.' },
  { q: 'Ile znaków mieści tytuł Google?', a: 'Google wyświetla około 55-60 znaków (mierzone w pikselach). Polskie słowa są średnio dłuższe niż angielskie, więc mieści się mniej słów. Bezpieczny limit to 50-55 znaków.' },
  { q: 'SMS z polskimi znakami ma inny limit?', a: 'Tak. SMS z polskimi znakami (ą, ć, ę itd.) zmienia kodowanie z GSM-7 na UCS-2, co zmniejsza limit ze 160 do 70 znaków. Jeśli potrzebujesz 160 znaków, unikaj polskich znaków — ale to pogarsza jakość tekstu.' },
  { q: 'Co to jest "Zażółć gęślą jaźń"?', a: 'To zdanie testowe zawierające wszystkie 9 polskich znaków diakrytycznych (ą, ć, ę, ł, ń, ó, ś, ź, ż). Dosłownie oznacza "zabarwić żółcią instrumentu muzycznego duszę". Używane do testowania poprawnego wyświetlania polskich tekstów.' }
]

export default function Post() {
  return (
    <>
      <FaqSchema faqs={faqs} />
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8"><Link href="/blog" className="text-emerald-400 text-sm hover:underline">Wróć do Bloga</Link></div>
        <article>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Liczenie znaków po polsku: kompletny przewodnik z limitami platform (2026)</h1>
          <p className="text-slate-400 text-sm mb-8">Aktualizacja: kwiecień 2026 | Czas czytania: 8 min</p>
          <div className="result-box mb-8 border-emerald-500/30">
            <h2 className="text-emerald-400 font-bold mb-3">Podsumowanie</h2>
            <p className="text-white">Polski alfabet zawiera <strong className="text-white">32 litery</strong> (23 podstawowe + 9 ze znakami: ą, ć, ę, ł, ń, ó, ś, ź, ż). Limity znaków wpływają na tweety (<strong className="text-white">280 znaków</strong>), tytuły Google (<strong className="text-white">55-60 znaków</strong>) i opisy meta (<strong className="text-white">155 znaków</strong>). Użyj naszego <a href="/character-counter" className="text-emerald-400 underline">darmowego licznika znaków</a>.</p>
          </div>
          <div className="space-y-8">

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">System znaków w języku polskim</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Polski alfabet składa się z 32 liter: 23 podstawowe litery łacińskie plus 9 liter ze znakami diakrytycznymi (ą, ć, ę, ł, ń, ó, ś, ź, ż). Każda z tych liter jest odrębnym znakiem — nie są to "ozdoby" nad literami. "Łaska" to coś innego niż "laska", "żona" to nie "zona".</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">W UTF-8 polskie znaki diakrytyczne zajmują 2 bajty każdy (standardowe litery łacińskie — 1 bajt). To oznacza, że polski tekst z wieloma znakami diakrytycznymi zajmuje około 5-10% więcej miejsca niż tekst bez nich. Nasze narzędzie liczy każdy znak poprawnie jako 1 znak, niezależnie od rozmiaru w bajtach.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Słynne zdanie testowe "Zażółć gęślą jaźń" (zabarwić żółcią instrumentu muzycznego duszę) zawiera wszystkie 9 polskich znaków diakrytycznych i jest używane do testowania poprawnego wyświetlania polskich tekstów.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Limity znaków na platformach</h2>
              <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm" style={{borderCollapse:'collapse'}}>
                  <thead>
                    <tr style={{borderBottom:'1px solid rgba(52,211,153,0.2)'}}>
                      <th className="text-left text-emerald-400 py-2 px-3">Platforma</th>
                      <th className="text-left text-emerald-400 py-2 px-3">Limit</th>
                      <th className="text-left text-emerald-400 py-2 px-3">Wskazówka</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Twitter/X', '280 znaków', 'Polskie słowa średnio dłuższe — ok. 40-50 słów'],
                      ['Google tytuł', '55-60 znaków', 'Słowo kluczowe w pierwszych 30 znakach'],
                      ['Opis meta', '150-155 znaków', 'Główna wartość w pierwszych 120 znakach'],
                      ['Facebook', '63 206 znaków', 'Optymalnie: 40-80 znaków dla zaangażowania'],
                      ['Instagram', '2 200 znaków', 'Pierwsze 125 znaków widoczne w feedzie'],
                      ['Google Ads nagłówek', '30 znaków', 'Bardzo ciasno w polskim — używaj skrótów'],
                      ['Allegro tytuł', '50 znaków', 'Najważniejsze cechy produktu na początku'],
                      ['LinkedIn', '3 000 znaków', 'Optymalnie: 1 200-1 800 znaków'],
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
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Allegro — największa polska platforma e-commerce — ma limit 50 znaków w tytule produktu. To wymaga precyzyjnego doboru słów. Użyj naszego <a href="/character-counter" className="text-emerald-400 underline">licznika znaków</a>, aby sprawdzić długość przed publikacją.</p>
            </section>

            <AdUnit slot="3248634657" />

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">UTF-8 i polskie znaki</h2>
              <div className="result-box mb-4">
                <svg viewBox="0 0 600 200" style={{width:'100%',height:'auto'}} xmlns="http://www.w3.org/2000/svg">
                  <text x="300" y="20" textAnchor="middle" fill="#e2e8f0" style={{fontSize:'14px',fontWeight:'700'}}>Rozmiar polskich znaków w UTF-8</text>
                  <rect x="160" y="45" width="340" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="160" y="45" width={String(340*0.25)} height="28" rx="4" fill="#10b981" />
                  <text x="150" y="63" textAnchor="end" fill="#94a3b8" style={{fontSize:'12px'}}>a-z, A-Z</text>
                  <text x={String(160+340*0.25+8)} y="63" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>1 bajt</text>
                  <rect x="160" y="81" width="340" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="160" y="81" width={String(340*0.50)} height="28" rx="4" fill="#f59e0b" />
                  <text x="150" y="99" textAnchor="end" fill="#94a3b8" style={{fontSize:'12px'}}>ą, ć, ę, ł, ń, ó, ś, ź, ż</text>
                  <text x={String(160+340*0.50+8)} y="99" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>2 bajty</text>
                  <rect x="160" y="117" width="340" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="160" y="117" width={String(340*0.75)} height="28" rx="4" fill="#f59e0b" />
                  <text x="150" y="135" textAnchor="end" fill="#94a3b8" style={{fontSize:'12px'}}>€ (Euro)</text>
                  <text x={String(160+340*0.75+8)} y="135" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>3 bajty</text>
                  <rect x="160" y="153" width="340" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="160" y="153" width={String(340*1.0)} height="28" rx="4" fill="#ef4444" />
                  <text x="150" y="171" textAnchor="end" fill="#94a3b8" style={{fontSize:'12px'}}>Emotikony</text>
                  <text x={String(160+340*1.0-60)} y="171" fill="#ffffff" style={{fontSize:'12px',fontWeight:'600'}}>4 bajty</text>
                </svg>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">SMS z polskimi znakami diakrytycznymi zmienia kodowanie z GSM-7 na UCS-2, co zmniejsza limit ze 160 do 70 znaków. To ważne dla kampanii SMS-owych w Polsce.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Praktyczne wskazówki dla polskich limitów znaków</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">Google Ads:</strong> Z 30 znakami na nagłówek, polski jest wyjątkowo ograniczony. "Ubezpieczenie samochodu" to już 23 znaki. Używaj skrótów ("OC/AC" zamiast "ubezpieczenie samochodu"), cyfr i krótkich CTA.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">Tytuły SEO:</strong> Google mierzy w pikselach, nie w znakach. Polskie litery są szerokości zbliżonej do angielskich, ale słowa są dłuższe. Bezpieczny limit to 50-55 znaków. Sprawdź w symulatorze SERP.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">Allegro:</strong> 50 znaków na tytuł produktu to wyzwanie. Skup się na najważniejszych cechach: markę, model, kluczowy parametr. "Samsung Galaxy S24 Ultra 256GB czarny" = 38 znaków.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Najczęściej Zadawane Pytania</h2>
              <div className="space-y-4">{faqs.map((faq,i)=>(<div key={i} className="result-box"><h3 className="text-white font-bold mb-2">{faq.q}</h3><p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p></div>))}</div>
            </section>
          </div>
        </article>
      </main>

      <div className="max-w-4xl mx-auto px-4 mb-8">
        <div className="bg-gradient-to-r from-emerald-900/20 to-teal-900/10 border border-emerald-500/20 rounded-2xl p-6">
          <h2 className="text-lg font-bold text-white mb-3">Narzędzia do Pisania po Polsku</h2>
          <div className="flex flex-wrap gap-2">
            <a href="/word-counter/language/polish" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Licznik Słów Polski</a>
            <a href="/word-counter" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Licznik Słów</a>
            <a href="/character-counter" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Licznik Znaków</a>
            <a href="/reading-time" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Czas Czytania</a>
            <a href="/readability-checker" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Sprawdzanie Czytelności</a>
            <a href="/keyword-density" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Gęstość Słów Kluczowych</a>
          </div>
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Article","headline":"Liczenie znaków po polsku: kompletny przewodnik z limitami platform (2026)","description":"Wszystko o liczeniu polskich znaków — znaki diakrytyczne, UTF-8, limity Twittera/X, Google, Facebooka i Allegro. Darmowe narzędzie.","inLanguage":"pl","author":{"@type":"Organization","name":"WordCounterTool"},"publisher":{"@type":"Organization","name":"WordCounterTool"},"datePublished":"2026-04-05","dateModified":"2026-04-05","mainEntityOfPage":"https://www.wordcountertool.net/blog/polish-character-count-guide"})}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.wordcountertool.net"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.wordcountertool.net/blog"},{"@type":"ListItem","position":3,"name":"Liczenie znaków po polsku: kompletny przewodnik z limitami platform (2026)","item":"https://www.wordcountertool.net/blog/polish-character-count-guide"}]})}} />

      <Footer />
    </>
  )
}
