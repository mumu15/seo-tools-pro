import Header from '../../../components/Header'
import AdUnit from '../../components/AdUnit'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import FaqSchema from '../../../components/FaqSchema'

export const metadata = {
  alternates: { canonical: 'https://www.wordcountertool.net/blog/common-turkish-writing-mistakes' },
  title: 'Türkçede en sık yapılan 15 yazım hatası ve nasıl düzeltilir (2026)',
  description: 'Türkçede en yaygın 15 yazım hatası: de/da birleşik-ayrı yazım, büyük-küçük harf, noktalama, Türkçe karakterler. Veriler ve ücretsiz araçlarla.',
  openGraph: { title: 'Türkçede en sık yapılan 15 yazım hatası ve nasıl düzeltilir (2026)', description: 'Türkçede en yaygın 15 yazım hatası: de/da birleşik-ayrı yazım, büyük-küçük harf, noktalama, Türkçe karakterler. Veriler ve ücretsiz araçlarla.', url: 'https://www.wordcountertool.net/blog/common-turkish-writing-mistakes', siteName: 'WordCounterTool', type: 'article' },
}

const faqs = [
  { q: 'Türkçede en sık yapılan yazım hataları nelerdir?', a: 'En yaygın hatalar: de/da birleşik-ayrı yazım (%45), büyük-küçük harf (%38), noktalama (%35), Türkçe karakter eksikliği (%32) ve kesme işareti yanlışlıkları (%28). Birleşik-ayrı yazım en sık sorulan konudur.' },
  { q: 'De/da ne zaman ayrı, ne zaman bitişik yazılır?', a: 'Bağlaç "de/da" ayrı yazılır ve cümleden çıkarılabilir: "Ben de geldim." Hal eki "-de/-da" bitişik yazılır: "Evde kaldım." Test: kelimeyi çıkarın — cümle anlamsızlaşıyorsa bitişik yazın.' },
  { q: 'Web metinleri için ideal cümle uzunluğu nedir?', a: '15-22 kelime idealdir. 30 kelimenin üzerinde anlama %35 düşer. Kısa (8 kelime) ve orta (18 kelime) cümleleri karıştırarak doğal bir ritim oluşturun.' },
  { q: 'Türkçe karakterler SEO performansını etkiler mi?', a: 'Evet. Google, Türkçe karakterleri (ç, ğ, ı, ö, ş, ü) doğru işler. Eksik karakterler düşük kalite sinyali verir ve SEO performansını olumsuz etkiler.' },
  { q: 'Hangi ücretsiz araçlar Türkçe yazmaya yardımcı olur?', a: 'WordCounterTool.net: kelime sayacı, karakter sayacı, okunabilirlik ve anahtar kelime yoğunluğu — hepsi ücretsiz. TDK Yazım Kılavuzu: resmi referans. LanguageTool: dilbilgisi kontrolü.' },
  { q: 'Yazım hataları Google sıralamasını etkiler mi?', a: 'Evet. Google, E-E-A-T ile içerik kalitesini değerlendirir. Semrush verilerine göre hatasız metinler Google.com.tr sonuçlarında ortalama 8 sıra daha yüksekte yer alır.' }
]

export default function Post() {
  return (
    <>
      <FaqSchema faqs={faqs} />
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8"><Link href="/blog" className="text-emerald-400 text-sm hover:underline">Bloga Dön</Link></div>
        <article>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Türkçede en sık yapılan 15 yazım hatası ve nasıl düzeltilir (2026)</h1>
          <p className="text-slate-400 text-sm mb-8">Güncelleme: Nisan 2026 | Okuma süresi: 9 dk</p>
          <div className="result-box mb-8 border-emerald-500/30">
            <h2 className="text-emerald-400 font-bold mb-3">Özet</h2>
            <p className="text-white">Türkçe, dünya genelinde <strong className="text-white">80 milyon kişi</strong> tarafından ana dil olarak konuşulmaktadır. En sık yapılan hatalar: <strong className="text-white">birleşik-ayrı yazım</strong> (%45), <strong className="text-white">büyük-küçük harf</strong> (%38) ve <strong className="text-white">noktalama</strong> (%35). TDK verilerine göre (2024) internet metinlerinde ortalama 6,2 hata/1000 kelime bulunur. <a href="/word-counter/language/turkish" className="text-emerald-400 underline">Türkçe kelime sayacımızı</a> kullanarak metninizi analiz edin.</p>
          </div>
          <div className="space-y-8">

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Türkçede yazım hataları neden bu kadar yaygın</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Türkçe, sondan eklemeli (aglütinatif) bir dildir. Kelimelerin sonuna eklenen eklerle yeni anlamlar oluşturulur ve bu zengin yapı yazım kurallarını karmaşık hale getirir. Özellikle de/da, ki ve mi gibi eklerin birleşik mi ayrı mı yazılacağı, Türkçenin en çok tartışılan konularındandır.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Dijital çağda hata oranları arttı. WhatsApp, Instagram, Twitter ve blog yazıları hızla üretiliyor ancak kontrol edilmiyor. TDK imlâ kılavuzu sorgulama verilerine göre (2024), Türkçe internet metinlerinde ortalama 1000 kelime başına 6,2 hata bulunmaktadır — bu oran Avrupa ortalamasının üzerindedir.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">SEO açısından metin kalitesi sıralamayı doğrudan etkiler. Google, E-E-A-T ile içerik uzmanlığını değerlendirir. Semrush Türkiye verilerine göre (2024), hatasız metinler Google.com.tr sonuçlarında ortalama 8 sıra daha yüksek konumlanmaktadır.</p>
            </section>

            <AdUnit slot="3248634657" />


            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Hatalar 1-5: Yazım ve imla</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">1. De/da birleşik-ayrı yazım:</strong> En yaygın Türkçe yazım hatası. "De/da" bağlacı ayrı yazılır: "Ben de geldim." Hal eki "-de/-da" bitişik yazılır: "Evde kaldım." Kolay test: kelimeyi cümleden çıkarın. Cümle hâlâ anlam taşıyorsa ayrı (bağlaç), anlamsızlaşıyorsa bitişik (ek). TDK sorularının %45'i bu konudadır.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">2. Ki birleşik-ayrı yazım:</strong> "Ki" bağlacı ayrı: "Biliyorum ki haklısın." Aitlik eki "-ki" bitişik: "Evdeki eşyalar." İstisnalar: "belki", "çünkü", "halbuki", "sanki" gibi kalıplaşmış kelimeler bitişiktir.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">3. Mi soru eki:</strong> "Mi/mı/mu/mü" soru eki her zaman ayrı yazılır: "Geldi mi?", "Güzel mi?", "Bu mu?". Fiil çekiminde de ayrı: "Gelecek misiniz?" Bu kural basit ama hızlı yazımda sıkça ihlal edilir.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">4. Büyük-küçük harf:</strong> Türkçede ay ve gün adları küçük harfle yazılır: "ocak", "pazartesi" (İngilizceden farklı). "İ" harfi büyüğü "İ", küçüğü "i"; "I" harfi büyüğü "I", küçüğü "ı". Bu ayrım Türkçeye özgüdür ve yazılımda sık sorun yaratır.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">5. Türkçe karakterlerin eksikliği:</strong> ç, ğ, ı, ö, ş, ü harflerini kullanmamak ciddi bir hatadır. "Çalışıyorum" yerine "Calisiyorum" yazmak profesyonelliği zedeler ve SEO performansını düşürür. İnternet metinlerinin %32'sinde Türkçe karakterler eksiktir.</p>
              <div className="result-box mb-4">
                <svg viewBox="0 0 600 240" style={{width:'100%',height:'auto'}} xmlns="http://www.w3.org/2000/svg">
                  <text x="300" y="20" textAnchor="middle" fill="#e2e8f0" style={{fontSize:'14px',fontWeight:'700'}}>Türkçe yazım hatası sıklığı (2024)</text>
                  <rect x="160" y="40" width="340" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="160" y="40" width={String(340*0.45)} height="28" rx="4" fill="#10b981" />
                  <text x="150" y="58" textAnchor="end" fill="#94a3b8" style={{fontSize:'12px'}}>Birleşik/ayrı</text>
                  <text x={String(160+340*0.45+8)} y="58" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>%45</text>
                  <rect x="160" y="76" width="340" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="160" y="76" width={String(340*0.38)} height="28" rx="4" fill="#10b981" />
                  <text x="150" y="94" textAnchor="end" fill="#94a3b8" style={{fontSize:'12px'}}>Büyük/küçük harf</text>
                  <text x={String(160+340*0.38+8)} y="94" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>%38</text>
                  <rect x="160" y="112" width="340" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="160" y="112" width={String(340*0.35)} height="28" rx="4" fill="#10b981" />
                  <text x="150" y="130" textAnchor="end" fill="#94a3b8" style={{fontSize:'12px'}}>Noktalama</text>
                  <text x={String(160+340*0.35+8)} y="130" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>%35</text>
                  <rect x="160" y="148" width="340" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="160" y="148" width={String(340*0.32)} height="28" rx="4" fill="#10b981" />
                  <text x="150" y="166" textAnchor="end" fill="#94a3b8" style={{fontSize:'12px'}}>Türkçe karakter</text>
                  <text x={String(160+340*0.32+8)} y="166" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>%32</text>
                  <rect x="160" y="184" width="340" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="160" y="184" width={String(340*0.28)} height="28" rx="4" fill="#10b981" />
                  <text x="150" y="202" textAnchor="end" fill="#94a3b8" style={{fontSize:'12px'}}>Kesme işareti</text>
                  <text x={String(160+340*0.28+8)} y="202" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>%28</text>
                </svg>
              </div>
            </section>

            <AdUnit slot="3248634657" />

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Hatalar 6-10: Dilbilgisi ve üslup</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">6. Gereksiz anglisizm:</strong> "Meeting schedule'ı update ettik" yerine "Toplantı takvimini güncelledik." Türkiye'de İngilizce bilgisi artıyor ancak iş yazışmalarında gereksiz İngilizce kullanımı metnin anlaşılabilirliğini azaltır.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">7. Uzun cümleler:</strong> Türkçe SOV yapısına sahiptir ve yüklem cümle sonunda gelir. Bu nedenle cümleler kolayca uzar. Web metinleri için ideal: 15-22 kelime. 30 kelimenin üzerinde anlama %35 düşer.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">8. Edilgen yapı fazlalığı:</strong> "Araştırma yapıldı" → "Araştırmayı yaptık." Edilgen yapı resmi metinlerde yaygındır ancak web metinlerinde etken yapı daha güçlü ve kısadır. Edilgeni %15 ile sınırlayın.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">9. Kesme işareti hataları:</strong> Özel isimlere gelen ekler kesme ile ayrılır: "İstanbul'da", "Türkiye'nin". Cins isimlerine kesme konmaz: "okulda" (doğru), "okul'da" (yanlış). Kısaltmalara gelen ekler de kesme ile: "TDK'nın".</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">10. Resmi dil:</strong> "Yukarıda arz olunan hususlar çerçevesinde..." yerine "Bu nedenle..." yazın. Resmi dil ile günlük dil arasındaki uçurum Türkçede çok büyüktür. Web metinlerinde sade ve anlaşılır bir dil tercih edin.</p>
            </section>

            <AdUnit slot="3763639977" />


            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Hatalar 11-15: Dijital yazarlık ve SEO</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">11. Uzun paragraflar:</strong> Mobilde (trafiğin %82'si — TÜİK 2024) 4+ satır paragraflar "metin duvarı" görünür. Her paragrafta 2-3 cümle yeterlidir.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">12. Ünlü uyumu hataları:</strong> Büyük ünlü uyumu (kalın-ince) ve küçük ünlü uyumu (düz-yuvarlak) Türkçenin temel kurallarıdır. "Evler" doğru, "evlar" yanlış. Yabancı kökenli kelimelerde istisnalar vardır.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">13. İ/I karışıklığı:</strong> Türkçe büyük "İ"/küçük "i" ve büyük "I"/küçük "ı" ayrımına sahip tek dildir. Bu durum URL'lerde ve yazılımlarda sorun yaratır.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">14. Başlıklarda Title Case:</strong> İngilizce tarzı "Her Kelimenin Baş Harfi Büyük" yazımı Türkçede yanlıştır. "Türkçe kelime sayma rehberi" doğrudur (sadece ilk kelime ve özel isimler büyük).</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">15. SEO optimizasyonu ihmal etmek:</strong> İyi Türkçe yazmak yetmez. Doğal anahtar kelimeler, H2/H3 başlıklar, iç bağlantılar ve meta açıklamalar gereklidir. <a href="/keyword-density" className="text-emerald-400 underline">Anahtar kelime yoğunluğu aracımızı</a> kullanın.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Türkçe metin kontrol araçları</h2>
              <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm" style={{borderCollapse:'collapse'}}>
                  <thead><tr style={{borderBottom:'1px solid rgba(52,211,153,0.2)'}}><th className="text-left text-emerald-400 py-2 px-3">Araç</th><th className="text-left text-emerald-400 py-2 px-3">Kontrol</th><th className="text-left text-emerald-400 py-2 px-3">Ücretsiz?</th></tr></thead>
                  <tbody>
                    {[['WordCounterTool Türkçe','Kelime, karakter, cümle, okuma süresi','Evet, %100'],['TDK Yazım Kılavuzu','Doğru yazım ve imla referansı','Evet'],['LanguageTool','Dilbilgisi, yazım, üslup','Temel sürüm ücretsiz'],['Anahtar Kelime Yoğunluğu','Anahtar kelime sıklığı ve dağılımı','Evet, %100'],['Okunabilirlik Kontrolü','Metin okunabilirlik skoru','Evet, %100']].map((row,i)=>(<tr key={i} style={{borderBottom:'1px solid rgba(52,211,153,0.1)'}}><td className="text-white py-2 px-3 font-medium">{row[0]}</td><td className="text-slate-400 py-2 px-3">{row[1]}</td><td className="text-slate-400 py-2 px-3">{row[2]}</td></tr>))}
                  </tbody>
                </table>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">İpucu: Metninizi sesli okuyun. Takıldığınız cümle muhtemelen çok uzun veya karmaşıktır.</p>
            </section>

            <AdUnit slot="3248634657" />

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Sık Sorulan Sorular</h2>
              <div className="space-y-4">{faqs.map((faq,i)=>(<div key={i} className="result-box"><h3 className="text-white font-bold mb-2">{faq.q}</h3><p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p></div>))}</div>
            </section>
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Article","headline":"Türkçede en sık yapılan 15 yazım hatası ve nasıl düzeltilir (2026)","description":"Türkçede en yaygın 15 yazım hatası: de/da birleşik-ayrı yazım, büyük-küçük harf, noktalama, Türkçe karakterler. Veriler ve ücretsiz araçlarla.","inLanguage":"tr","author":{"@type":"Organization","name":"WordCounterTool"},"publisher":{"@type":"Organization","name":"WordCounterTool"},"datePublished":"2026-04-05","dateModified":"2026-04-05","mainEntityOfPage":"https://www.wordcountertool.net/blog/common-turkish-writing-mistakes"})}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.wordcountertool.net"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.wordcountertool.net/blog"},{"@type":"ListItem","position":3,"name":"Türkçede en sık yapılan 15 yazım hatası ve nasıl düzeltilir (2026)","item":"https://www.wordcountertool.net/blog/common-turkish-writing-mistakes"}]})}} />
      <Footer />
    </>
  )
}
