import Header from '../../../components/Header'
import AdUnit from '../../components/AdUnit'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import FaqSchema from '../../../components/FaqSchema'

export const metadata = {
  alternates: { canonical: 'https://www.wordcountertool.net/blog/turkish-content-length-guide' },
  title: 'Türkçe içerik için ideal uzunluk: veriye dayalı rehber (2026)',
  description: 'Türkçe blog yazısı, açılış sayfası, e-ticaret sitesi için ideal metin uzunluğu. Google.com.tr, Semrush ve TÜİK verileriyle.',
  openGraph: { title: 'Türkçe içerik için ideal uzunluk: veriye dayalı rehber (2026)', description: 'Türkçe blog yazısı, açılış sayfası, e-ticaret sitesi için ideal metin uzunluğu. Google.com.tr, Semrush ve TÜİK verileriyle.', url: 'https://www.wordcountertool.net/blog/turkish-content-length-guide', siteName: 'WordCounterTool', type: 'article' },
}

const faqs = [
  { q: 'Türkçe blog yazısı kaç kelime olmalı?', a: 'SEO için 1200-2000 kelime. Google.com.tr ilk 10 ortalaması 1700 kelime. 1. sıra ortalaması 2100 kelime. Kalite hacimden önemlidir.' },
  { q: 'Türkçe metinler İngilizceden kısa mıdır?', a: 'Evet, kelime sayısı olarak %15-25 daha kısa. Sondan eklemeli yapı birden fazla İngilizce kelimeyi tek Türkçe kelimede ifade eder.' },
  { q: 'Açılış sayfası kaç kelime olmalı?', a: '600-1000 kelime. 700-900 kelime aralığı en yüksek dönüşüm oranını sağlar.' },
  { q: 'Metin uzunluğu Google sıralamasını etkiler mi?', a: 'Pozitif korelasyon var ama Google derinliği ödüllendirir. Odaklı 1500 kelimelik yazı dağınık 3000 kelimelik yazıdan daha iyi sıralanabilir.' },
  { q: 'Alt başlıklar ne sıklıkta kullanılmalı?', a: 'Her 200-300 kelimede bir H2 veya H3. Türkiyede mobil trafiğin %82 olduğu düşünülürse alt başlıklar zorunludur.' },
  { q: 'Türkiye internet pazarı ne kadar büyük?', a: '62 milyon internet kullanıcısı (%73 penetrasyon). Google.com.tr %96,5 pazar payı. E-ticaret: 650 milyar TL (TÜBİSAD 2024).' }
]

export default function Post() {
  return (
    <>
      <FaqSchema faqs={faqs} />
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8"><Link href="/blog" className="text-emerald-400 text-sm hover:underline">Bloga Dön</Link></div>
        <article>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Türkçe içerik için ideal uzunluk: veriye dayalı rehber (2026)</h1>
          <p className="text-slate-400 text-sm mb-8">Güncelleme: Nisan 2026 | Okuma süresi: 10 dk</p>
          <div className="result-box mb-8 border-emerald-500/30">
            <h2 className="text-emerald-400 font-bold mb-3">Özet</h2>
            <p className="text-white">Google.com.tr ilk 10 sonuçtaki Türkçe yazılar ortalama <strong className="text-white">1700 kelime</strong> içerir (Semrush 2024). Açılış sayfaları <strong className="text-white">600-1000 kelime</strong> ile en iyi dönüşüm sağlar. Türkiyede <strong className="text-white">62 milyon internet kullanıcısı</strong> vardır. <a href="/word-counter/language/turkish" className="text-emerald-400 underline">Türkçe kelime sayacımızı</a> kullanın.</p>
          </div>
          <div className="space-y-8">

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Veriler Türkçe metin uzunluğu hakkında ne diyor?</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Semrush, 2024 yılında 4000 Türkçe anahtar kelime için ilk 20 sonucu analiz etti. Sonuç: Google.com.tr 1. sıradaki sayfalar ortalama 2100 kelime, 10. sıradakiler yaklaşık 1300 kelime içeriyor. Uzunluk ile sıralama arasında açık bir pozitif korelasyon var.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Ancak daha uzun her zaman daha iyi demek değildir. Google derinliği ve alaka düzeyini ödüllendirir, salt hacmi değil. Konudan sapan 3000 kelimelik bir yazı, soruları doğrudan yanıtlayan 1500 kelimelik odaklı bir yazıdan daha kötü sıralanır.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Türkiye e-ticaret pazarı 650 milyar TL'ye ulaştı (TÜBİSAD 2024). Trafiğin %34'ü organik aramadan geliyor. SEO içerik yatırımı Türk şirketleri için en karlı stratejilerden biridir.</p>
              <div className="result-box mb-4">
                <svg viewBox="0 0 600 240" style={{width:'100%',height:'auto'}} xmlns="http://www.w3.org/2000/svg">
                  <text x="300" y="20" textAnchor="middle" fill="#e2e8f0" style={{fontSize:'14px',fontWeight:'700'}}>Ortalama kelime sayısı: Google.com.tr İlk 10 (2024)</text>
                  <rect x="130" y="45" width="390" height="28" rx="4" fill="rgba(16,185,129,0.15)" /><rect x="130" y="45" width={String(390*0.84)} height="28" rx="4" fill="#10b981" /><text x="120" y="63" textAnchor="end" fill="#94a3b8" style={{fontSize:'11px'}}>1. sıra</text><text x={String(130+390*0.84+8)} y="63" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>2100 kelime</text>
                  <rect x="130" y="81" width="390" height="28" rx="4" fill="rgba(16,185,129,0.15)" /><rect x="130" y="81" width={String(390*0.71)} height="28" rx="4" fill="#10b981" /><text x="120" y="99" textAnchor="end" fill="#94a3b8" style={{fontSize:'11px'}}>3. sıra</text><text x={String(130+390*0.71+8)} y="99" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>1800 kelime</text>
                  <rect x="130" y="117" width="390" height="28" rx="4" fill="rgba(16,185,129,0.15)" /><rect x="130" y="117" width={String(390*0.60)} height="28" rx="4" fill="#10b981" /><text x="120" y="135" textAnchor="end" fill="#94a3b8" style={{fontSize:'11px'}}>5. sıra</text><text x={String(130+390*0.60+8)} y="135" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>1500 kelime</text>
                  <rect x="130" y="153" width="390" height="28" rx="4" fill="rgba(16,185,129,0.15)" /><rect x="130" y="153" width={String(390*0.55)} height="28" rx="4" fill="#10b981" /><text x="120" y="171" textAnchor="end" fill="#94a3b8" style={{fontSize:'11px'}}>7. sıra</text><text x={String(130+390*0.55+8)} y="171" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>1400 kelime</text>
                  <rect x="130" y="189" width="390" height="28" rx="4" fill="rgba(16,185,129,0.15)" /><rect x="130" y="189" width={String(390*0.52)} height="28" rx="4" fill="#10b981" /><text x="120" y="207" textAnchor="end" fill="#94a3b8" style={{fontSize:'11px'}}>10. sıra</text><text x={String(130+390*0.52+8)} y="207" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>1300 kelime</text>
                </svg>
              </div>
            </section>

            <AdUnit slot="3248634657" />


            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">İçerik türüne göre uzunluk</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">Blog yazıları:</strong> 1200-2000 kelime. Kapsamlı rehberler daha uzun olabilir. 200-300 kelimede bir alt başlık kullanın.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">Açılış sayfaları:</strong> 600-1000 kelime. 700-900 kelime aralığındaki sayfalar en yüksek dönüşüm oranına sahip.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">Ürün sayfaları (Trendyol, Hepsiburada):</strong> 300-600 kelime. Özellikler, avantajlar ve kullanım senaryoları dahil.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">E-posta bültenleri:</strong> 200-400 kelime. Kısa ve öz bültenler Türk pazarında en yüksek tıklama oranına sahip.</p>
            </section>

            <AdUnit slot="3248634657" />

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Türkçe vs İngilizce: uzunluk oranı</h2>
              <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm" style={{borderCollapse:'collapse'}}>
                  <thead><tr style={{borderBottom:'1px solid rgba(52,211,153,0.2)'}}><th className="text-left text-emerald-400 py-2 px-3">İngilizce</th><th className="text-left text-emerald-400 py-2 px-3">Türkçe</th><th className="text-left text-emerald-400 py-2 px-3">Oran</th></tr></thead>
                  <tbody>
                    {[['1000 kelime','~750-850 kelime','TR %15-25 kısa'],['1500 kelime','~1125-1275 kelime','TR %15-25 kısa'],['2000 kelime','~1500-1700 kelime','TR %15-25 kısa']].map((row,i)=>(<tr key={i} style={{borderBottom:'1px solid rgba(52,211,153,0.1)'}}><td className="text-white py-2 px-3 font-medium">{row[0]}</td><td className="text-slate-400 py-2 px-3">{row[1]}</td><td className="text-slate-400 py-2 px-3">{row[2]}</td></tr>))}
                  </tbody>
                </table>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Türkçe sondan eklemeli yapısı sayesinde İngilizceden daha az kelimeyle aynı bilgiyi ifade eder. <a href="/word-counter/language/turkish" className="text-emerald-400 underline">Kelime sayacımızla</a> son uzunluğu kontrol edin.</p>
            </section>

            <AdUnit slot="3763639977" />


            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Uzunluğu ölçme ve optimize etme</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">Rakip analizi:</strong> Hedef anahtar kelimenizde Google.com.tr ilk 5 sonucun kelime sayısını kontrol edin. Rakip ortalamasının %15-20 üzerini hedefleyin.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">Okuma süresi:</strong> Yazının başında okuma süresini gösterin. Türkçe bloglar için ideal: 6-8 dakika (1300-1700 kelime).</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">Alt başlıklar:</strong> Her 200-300 kelimede bir H2 veya H3. Mobil kullanıcılar Türkiyede trafiğin %82'sini oluşturur (TÜİK 2024) — alt başlıklar kaydırma navigasyonu için şarttır.</p>
            </section>
            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Sık Sorulan Sorular</h2>
              <div className="space-y-4">{faqs.map((faq,i)=>(<div key={i} className="result-box"><h3 className="text-white font-bold mb-2">{faq.q}</h3><p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p></div>))}</div>
            </section>

            <AdUnit slot="3248634657" />

          </div>
        </article>
      </main>
      <div className="max-w-4xl mx-auto px-4 mb-8">
        <div className="bg-gradient-to-r from-emerald-900/20 to-teal-900/10 border border-emerald-500/20 rounded-2xl p-6">
          <h2 className="text-lg font-bold text-white mb-3">Türkçe Yazma Araçları</h2>
          <div className="flex flex-wrap gap-2"><a href="/word-counter/language/turkish" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Türkçe Kelime Sayacı</a>
            <a href="/word-counter" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Kelime Sayacı</a>
            <a href="/character-counter" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Karakter Sayacı</a>
            <a href="/reading-time" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Okuma Süresi</a>
            <a href="/readability-checker" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Okunabilirlik Kontrolü</a>
            <a href="/keyword-density" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Anahtar Kelime Yoğunluğu</a></div>
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Article","headline":"Türkçe içerik için ideal uzunluk: veriye dayalı rehber (2026)","description":"Türkçe blog yazısı, açılış sayfası, e-ticaret sitesi için ideal metin uzunluğu. Google.com.tr, Semrush ve TÜİK verileriyle.","inLanguage":"tr","author":{"@type":"Organization","name":"WordCounterTool"},"publisher":{"@type":"Organization","name":"WordCounterTool"},"datePublished":"2026-04-05","dateModified":"2026-04-05","mainEntityOfPage":"https://www.wordcountertool.net/blog/turkish-content-length-guide"})}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.wordcountertool.net"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.wordcountertool.net/blog"},{"@type":"ListItem","position":3,"name":"Türkçe içerik için ideal uzunluk: veriye dayalı rehber (2026)","item":"https://www.wordcountertool.net/blog/turkish-content-length-guide"}]})}} />
      <Footer />
    </>
  )
}
