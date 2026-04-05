import Header from '../../../components/Header'
import AdUnit from '../../components/AdUnit'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import FaqSchema from '../../../components/FaqSchema'

export const metadata = {
  alternates: { canonical: 'https://www.wordcountertool.net/blog/how-to-count-words-in-turkish' },
  title: 'Türkçe kelime sayma: eksiksiz rehber (2026)',
  description: 'Türkçe metinlerde kelime, karakter ve cümle sayma. Sondan eklemeli yapı, okuma hızı ve ücretsiz araçlar.',
  openGraph: { title: 'Türkçe kelime sayma: eksiksiz rehber (2026)', description: 'Türkçe metinlerde kelime, karakter ve cümle sayma. Sondan eklemeli yapı, okuma hızı ve ücretsiz araçlar.', url: 'https://www.wordcountertool.net/blog/how-to-count-words-in-turkish', siteName: 'WordCounterTool', type: 'article' },
}

const faqs = [
  { q: 'Türkçe metinde kelime nasıl sayılır?', a: 'WordCounterTool.net ücretsiz Türkçe kelime sayacını kullanın. Metni yapıştırın, anında kelime, karakter, cümle ve okuma süresini görün. ç, ğ, ı, ö, ş, ü karakterlerini doğru işler.' },
  { q: 'Türkçe metinler İngilizceden daha kısa mıdır?', a: 'Evet, kelime sayısı olarak %15-25 daha kısa. Sondan eklemeli yapı sayesinde birden fazla İngilizce kelimeyi tek Türkçe kelimede ifade edebilirsiniz. Bilgi içeriği aynıdır.' },
  { q: 'Türkçe okuma hızı ne kadardır?', a: 'Bilgilendirici metinler: 200-250 kelime/dk. Edebiyat: 250-300 kelime/dk. Akademik: 150-200 kelime/dk. Aracımız 220 kelime/dk baz alarak okuma süresini hesaplar.' },
  { q: 'Türkçe blog yazısı kaç kelime olmalı?', a: 'SEO için 1200-2000 kelime önerilir. Google.com.tr ilk 10 sonuç ortalaması 1700 kelimedir. Daha uzun yazılar genellikle daha iyi sıralanır.' },
  { q: 'Türkçe kelime sayacı ücretsiz mi?', a: 'Evet, %100 ücretsiz ve kayıt gerektirmez. Hiçbir veri saklanmaz veya sunuculara gönderilmez.' },
  { q: 'Sondan eklemeli yapı kelime sayımını nasıl etkiler?', a: 'Türkçede ekler kelimeye bitişik yazıldığı için tek uzun kelime birden fazla İngilizce kelimeye karşılık gelir. Bu nedenle Türkçe metinlerde kelime sayısı daha azdır ama bilgi yoğunluğu aynıdır.' }
]

export default function Post() {
  return (
    <>
      <FaqSchema faqs={faqs} />
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8"><Link href="/blog" className="text-emerald-400 text-sm hover:underline">Bloga Dön</Link></div>
        <article>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Türkçe kelime sayma: eksiksiz rehber (2026)</h1>
          <p className="text-slate-400 text-sm mb-8">Güncelleme: Nisan 2026 | Okuma süresi: 8 dk</p>
          <div className="result-box mb-8 border-emerald-500/30">
            <h2 className="text-emerald-400 font-bold mb-3">Özet</h2>
            <p className="text-white">Türkçe metinler, İngilizce eşdeğerlerinden kelime sayısı olarak <strong className="text-white">%15-25 daha kısadır</strong> — sondan eklemeli yapı sayesinde. Ortalama okuma hızı <strong className="text-white">dakikada 200-250 kelime</strong>dir. Türk alfabesi <strong className="text-white">29 harf</strong> içerir. <a href="/word-counter/language/turkish" className="text-emerald-400 underline">Türkçe kelime sayacımızı</a> kullanın.</p>
          </div>
          <div className="space-y-8">

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Türkçede kelime saymanın farklılıkları</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Türkçe sondan eklemeli bir dildir. Tek bir kelimeye ekler getirilerek karmaşık anlamlar oluşturulur: "evlerimizdekilere" (evlerimizde bulunanlara) tek bir kelimedir, İngilizcede "to those in our houses" şeklinde 5 kelimeye karşılık gelir.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">SDL/RWS Translation Memory verilerine göre (2024), İngilizceden Türkçeye çevirilerde kelime sayısı ortalama %15-25 azalır. Bu, Türkçenin birden fazla İngilizce kelimeyi tek ekli kelimede ifade edebilmesinden kaynaklanır.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Türk alfabesi 29 harften oluşur: 21 ünsüz ve 8 ünlü. Türkçeye özgü harfler: ç, ğ, ı, ö, ş, ü. Kelime sayacımız tüm Türkçe karakterleri doğru tanır.</p>
            </section>

            <AdUnit slot="3248634657" />


            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Sondan eklemeli yapı ve kelime sayımı</h2>
              <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm" style={{borderCollapse:'collapse'}}>
                  <thead><tr style={{borderBottom:'1px solid rgba(52,211,153,0.2)'}}><th className="text-left text-emerald-400 py-2 px-3">Türkçe (1 kelime)</th><th className="text-left text-emerald-400 py-2 px-3">İngilizce</th><th className="text-left text-emerald-400 py-2 px-3">İng. kelime</th></tr></thead>
                  <tbody>
                    {[['Evlerimizdekilere','To those in our houses','5'],['Yapamayacaklarımızdan','From those we cannot do','6'],['Görüşebileceğimizden','From the possibility of meeting','5'],['Okuduklarınızı','What you have read','4'],['Sevmediklerimize','To those we did not love','6']].map((row,i)=>(<tr key={i} style={{borderBottom:'1px solid rgba(52,211,153,0.1)'}}><td className="text-white py-2 px-3 font-medium">{row[0]}</td><td className="text-slate-400 py-2 px-3">{row[1]}</td><td className="text-slate-400 py-2 px-3">{row[2]}</td></tr>))}
                  </tbody>
                </table>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Pratik sonuç: Türkçe bir metin aynı bilgiyi daha az kelimeyle ifade edebilir. Kelime sayacımız her Türkçe kelimeyi doğru şekilde tek kelime olarak sayar.</p>
            </section>

            <AdUnit slot="3248634657" />

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Adım adım: Türkçe kelime sayma</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">Adım 1:</strong> <a href="/word-counter/language/turkish" className="text-emerald-400 underline">Türkçe kelime sayacını</a> açın.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">Adım 2:</strong> Türkçe metninizi yapıştırın. Araç ç, ğ, ı, ö, ş, ü harflerini otomatik tanır.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">Adım 3:</strong> Sonuçları görün: kelime, karakter, cümle, paragraf ve tahmini okuma süresi.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">Adım 4:</strong> Blog ve SEO için kelime sayısını, sosyal medya ve meta açıklamalar için karakter sayısını kullanın.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Türkçe okuma hızı: bilgilendirici metinler 200-250 kelime/dk, edebiyat 250-300 kelime/dk, akademik 150-200 kelime/dk.</p>
            </section>

            <AdUnit slot="3763639977" />


            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Türkçe içerik için önerilen kelime sayıları</h2>
              <div className="result-box mb-4">
                <svg viewBox="0 0 600 260" style={{width:'100%',height:'auto'}} xmlns="http://www.w3.org/2000/svg">
                  <text x="300" y="20" textAnchor="middle" fill="#e2e8f0" style={{fontSize:'14px',fontWeight:'700'}}>Önerilen kelime sayıları (Türkçe içerik)</text>
                  <rect x="170" y="45" width="340" height="28" rx="4" fill="rgba(16,185,129,0.15)" /><rect x="170" y="45" width={String(340*0.80)} height="28" rx="4" fill="#10b981" /><text x="160" y="63" textAnchor="end" fill="#94a3b8" style={{fontSize:'11px'}}>Blog yazısı</text><text x={String(170+340*0.80+8)} y="63" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>1200-2000</text>
                  <rect x="170" y="81" width="340" height="28" rx="4" fill="rgba(16,185,129,0.15)" /><rect x="170" y="81" width={String(340*0.45)} height="28" rx="4" fill="#10b981" /><text x="160" y="99" textAnchor="end" fill="#94a3b8" style={{fontSize:'11px'}}>Açılış sayfası</text><text x={String(170+340*0.45+8)} y="99" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>600-1000</text>
                  <rect x="170" y="117" width="340" height="28" rx="4" fill="rgba(16,185,129,0.15)" /><rect x="170" y="117" width={String(340*0.30)} height="28" rx="4" fill="#10b981" /><text x="160" y="135" textAnchor="end" fill="#94a3b8" style={{fontSize:'11px'}}>Ürün sayfası</text><text x={String(170+340*0.30+8)} y="135" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>300-600</text>
                  <rect x="170" y="153" width="340" height="28" rx="4" fill="rgba(16,185,129,0.15)" /><rect x="170" y="153" width={String(340*0.15)} height="28" rx="4" fill="#10b981" /><text x="160" y="171" textAnchor="end" fill="#94a3b8" style={{fontSize:'11px'}}>E-posta bülteni</text><text x={String(170+340*0.15+8)} y="171" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>200-400</text>
                  <rect x="170" y="189" width="340" height="28" rx="4" fill="rgba(16,185,129,0.15)" /><rect x="170" y="189" width={String(340*1.0)} height="28" rx="4" fill="#10b981" /><text x="160" y="207" textAnchor="end" fill="#94a3b8" style={{fontSize:'11px'}}>Yüksek lisans tezi</text><text x={String(170+340*1.0-100)} y="207" fill="#ffffff" style={{fontSize:'12px',fontWeight:'600'}}>15.000-30.000</text>
                </svg>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Türkiye 62 milyon internet kullanıcısına sahiptir (%73 penetrasyon — TÜİK 2024). Google.com.tr %96,5 pazar payına sahiptir. E-ticaret pazarı 650 milyar TL (TÜBİSAD 2024).</p>
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Article","headline":"Türkçe kelime sayma: eksiksiz rehber (2026)","description":"Türkçe metinlerde kelime, karakter ve cümle sayma. Sondan eklemeli yapı, okuma hızı ve ücretsiz araçlar.","inLanguage":"tr","author":{"@type":"Organization","name":"WordCounterTool"},"publisher":{"@type":"Organization","name":"WordCounterTool"},"datePublished":"2026-04-05","dateModified":"2026-04-05","mainEntityOfPage":"https://www.wordcountertool.net/blog/how-to-count-words-in-turkish"})}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.wordcountertool.net"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.wordcountertool.net/blog"},{"@type":"ListItem","position":3,"name":"Türkçe kelime sayma: eksiksiz rehber (2026)","item":"https://www.wordcountertool.net/blog/how-to-count-words-in-turkish"}]})}} />
      <Footer />
    </>
  )
}
