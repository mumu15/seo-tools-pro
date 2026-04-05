import Header from '../../../components/Header'
import AdUnit from '../../components/AdUnit'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import FaqSchema from '../../../components/FaqSchema'

export const metadata = {
  alternates: { canonical: 'https://www.wordcountertool.net/blog/turkish-character-count-guide' },
  title: 'Türkçe karakter sayma: platform limitleriyle birlikte rehber (2026)',
  description: 'Türkçe karakter sayma — ç, ğ, ı, ö, ş, ü, UTF-8 ve Twitter, Google, Instagram limitleri. Ücretsiz karakter sayacı.',
  openGraph: { title: 'Türkçe karakter sayma: platform limitleriyle birlikte rehber (2026)', description: 'Türkçe karakter sayma — ç, ğ, ı, ö, ş, ü, UTF-8 ve Twitter, Google, Instagram limitleri. Ücretsiz karakter sayacı.', url: 'https://www.wordcountertool.net/blog/turkish-character-count-guide', siteName: 'WordCounterTool', type: 'article' },
}

const faqs = [
  { q: 'Türkçe metinde karakter nasıl sayılır?', a: 'WordCounterTool.net ücretsiz karakter sayacını kullanın. ç, ğ, ı, ö, ş, ü harflerini doğru şekilde tek karakter olarak sayar.' },
  { q: 'Türkçe karakterler 1 mi 2 karakter olarak mı sayılır?', a: 'Tüm platformlarda 1 karakter olarak sayılır. UTF-8 kodlamasında 2 byte yer kaplar, ancak bu sadece veritabanları ve byte-bazlı API limitlerini etkiler.' },
  { q: 'Google başlığı kaç karakter gösterir?', a: 'Yaklaşık 55-60 karakter (piksel olarak ölçülür). Türkçe kelimeler uzun olabildiğinden güvenli sınır 50-55 karakterdir.' },
  { q: 'Trendyol ürün başlığı kaç karakter?', a: 'Trendyol ürün başlığı limiti 70 karakterdir. Marka, model ve en önemli özelliği başa yazın. Trendyol 60+ milyon kullanıcıyla Türkiyenin en büyük e-ticaret platformudur.' },
  { q: 'SMS Türkçe karakterle farklı limit mi?', a: 'Evet. Türkçe karakterli SMS, GSM-7 yerine UCS-2 kodlaması kullanır ve limit 160 karakterden 70 karaktere düşer.' },
  { q: 'İ ve I farkı neden önemli?', a: 'Türkçe büyük İ (noktalı) ve büyük I (noktasız) ayrımına sahip tek dildir. Bu ayrım yazılımda, URL kodlamada ve veritabanı sorgularında sorun yaratabilir.' }
]

export default function Post() {
  return (
    <>
      <FaqSchema faqs={faqs} />
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8"><Link href="/blog" className="text-emerald-400 text-sm hover:underline">Bloga Dön</Link></div>
        <article>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Türkçe karakter sayma: platform limitleriyle birlikte rehber (2026)</h1>
          <p className="text-slate-400 text-sm mb-8">Güncelleme: Nisan 2026 | Okuma süresi: 8 dk</p>
          <div className="result-box mb-8 border-emerald-500/30">
            <h2 className="text-emerald-400 font-bold mb-3">Özet</h2>
            <p className="text-white">Türk alfabesi <strong className="text-white">29 harf</strong> içerir (İngilizce + ç, ğ, ı, ö, ş, ü). Karakter limitleri: Twitter/X <strong className="text-white">280 karakter</strong>, Google başlığı <strong className="text-white">55-60 karakter</strong>, meta açıklaması <strong className="text-white">155 karakter</strong>. <a href="/character-counter" className="text-emerald-400 underline">Ücretsiz karakter sayacımızı</a> kullanın.</p>
          </div>
          <div className="space-y-8">

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Türk karakter sistemi</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Türk alfabesi 29 harften oluşur: 23 standart Latin harfi (q, w ve x hariç) artı ç, ğ, ı, ö, ş ve ü. Bu 6 ek harf Türkçeye özgüdür ve İngilizce karşılıkları yoktur. Her biri farklı bir ses temsil eder ve kelimenin anlamını değiştirir.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">UTF-8 kodlamasında Türkçeye özgü karakterler (ç, ğ, ı, ö, ş, ü ve büyük İ) 2 byte yer kaplar. Standart Latin harfleri 1 byte kaplar. Karakter sayacımız her harfi doğru şekilde 1 karakter olarak sayar.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Özel durum: "İ" ve "I" harfleri. Türkçe bu ayrımı yapan tek dildir. Büyük İ (noktalı) → küçük i. Büyük I (noktasız) → küçük ı. Bu durum yazılım geliştirmede sık sorun yaratır.</p>
            </section>

            <AdUnit slot="3248634657" />


            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Platform karakter limitleri</h2>
              <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm" style={{borderCollapse:'collapse'}}>
                  <thead><tr style={{borderBottom:'1px solid rgba(52,211,153,0.2)'}}><th className="text-left text-emerald-400 py-2 px-3">Platform</th><th className="text-left text-emerald-400 py-2 px-3">Limit</th><th className="text-left text-emerald-400 py-2 px-3">Türkçe ipucu</th></tr></thead>
                  <tbody>
                    {[['Twitter/X','280 karakter','Ekli kelimeler uzundur — dikkatli kullanın'],['Google başlığı','55-60 karakter','Anahtar kelimeyi ilk 30 karaktere yerleştirin'],['Meta açıklaması','150-155 karakter','Ana mesajı ilk 120 karakterde verin'],['Instagram','2200 karakter','İlk 125 karakter akışta görünür'],['WhatsApp Durum','700 karakter','Türkiyede 56 milyon aktif kullanıcı'],['Google Ads başlığı','30 karakter','Türkçe kelimeler uzundur — kısaltma kullanın'],['YouTube başlığı','100 karakter','İdeal: 40-60 karakter'],['Trendyol ürün başlığı','70 karakter','Marka, model ve özelliği önce yazın']].map((row,i)=>(<tr key={i} style={{borderBottom:'1px solid rgba(52,211,153,0.1)'}}><td className="text-white py-2 px-3 font-medium">{row[0]}</td><td className="text-slate-400 py-2 px-3">{row[1]}</td><td className="text-slate-400 py-2 px-3">{row[2]}</td></tr>))}
                  </tbody>
                </table>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Trendyol, Türkiyenin en büyük e-ticaret platformudur (60+ milyon kullanıcı). Ürün başlığı limiti 70 karakterdir. <a href="/character-counter" className="text-emerald-400 underline">Karakter sayacımızla</a> kontrol edin.</p>
            </section>

            <AdUnit slot="3248634657" />

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">UTF-8 ve Türkçe karakterler</h2>
              <div className="result-box mb-4">
                <svg viewBox="0 0 600 180" style={{width:'100%',height:'auto'}} xmlns="http://www.w3.org/2000/svg">
                  <text x="300" y="20" textAnchor="middle" fill="#e2e8f0" style={{fontSize:'14px',fontWeight:'700'}}>UTF-8 byte boyutu (Türkçe karakterler)</text>
                  <rect x="150" y="45" width="350" height="28" rx="4" fill="rgba(16,185,129,0.15)" /><rect x="150" y="45" width={String(350*0.25)} height="28" rx="4" fill="#10b981" /><text x="140" y="63" textAnchor="end" fill="#94a3b8" style={{fontSize:'12px'}}>a-z, A-Z</text><text x={String(150+350*0.25+8)} y="63" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>1 byte</text>
                  <rect x="150" y="81" width="350" height="28" rx="4" fill="rgba(16,185,129,0.15)" /><rect x="150" y="81" width={String(350*0.50)} height="28" rx="4" fill="#f59e0b" /><text x="140" y="99" textAnchor="end" fill="#94a3b8" style={{fontSize:'12px'}}>ç, ğ, ı, ö, ş, ü, İ</text><text x={String(150+350*0.50+8)} y="99" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>2 byte</text>
                  <rect x="150" y="117" width="350" height="28" rx="4" fill="rgba(16,185,129,0.15)" /><rect x="150" y="117" width={String(350*1.0)} height="28" rx="4" fill="#ef4444" /><text x="140" y="135" textAnchor="end" fill="#94a3b8" style={{fontSize:'12px'}}>Emoji</text><text x={String(150+350*1.0-60)} y="135" fill="#ffffff" style={{fontSize:'12px',fontWeight:'600'}}>4 byte</text>
                </svg>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">SMS ile Türkçe karakter kullanıldığında GSM-7 yerine UCS-2 kodlamasına geçilir ve limit 160 karakterden 70 karaktere düşer. HTML sayfalarınızda daima <code className="text-emerald-400">&lt;meta charset=&quot;UTF-8&quot;&gt;</code> belirtin.</p>
            </section>

            <AdUnit slot="3763639977" />


            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Pratik ipuçları</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">Google Ads:</strong> 30 karakterle Türkçe başlık yazmak zordur. "Araç sigortası karşılaştırma" zaten 28 karakterdir. Kısaltmalar ve sayılar kullanın.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">SEO başlıkları:</strong> Google pikselle ölçer. Türkçe kelimeler İngilizceden ortalama daha uzundur. Güvenli sınır: 50-55 karakter.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">WhatsApp:</strong> Türkiyede 56 milyon aktif kullanıcıyla en popüler mesajlaşma uygulamasıdır. Durum limiti 700 karakter. Mesajlarda 300 karakter en okunabilir uzunluktur.</p>
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Article","headline":"Türkçe karakter sayma: platform limitleriyle birlikte rehber (2026)","description":"Türkçe karakter sayma — ç, ğ, ı, ö, ş, ü, UTF-8 ve Twitter, Google, Instagram limitleri. Ücretsiz karakter sayacı.","inLanguage":"tr","author":{"@type":"Organization","name":"WordCounterTool"},"publisher":{"@type":"Organization","name":"WordCounterTool"},"datePublished":"2026-04-05","dateModified":"2026-04-05","mainEntityOfPage":"https://www.wordcountertool.net/blog/turkish-character-count-guide"})}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.wordcountertool.net"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.wordcountertool.net/blog"},{"@type":"ListItem","position":3,"name":"Türkçe karakter sayma: platform limitleriyle birlikte rehber (2026)","item":"https://www.wordcountertool.net/blog/turkish-character-count-guide"}]})}} />
      <Footer />
    </>
  )
}
