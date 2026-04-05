import Header from '../../../components/Header'
import AdUnit from '../../components/AdUnit'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import FaqSchema from '../../../components/FaqSchema'

export const metadata = {
  alternates: { canonical: 'https://www.wordcountertool.net/blog/arabic-character-count-guide' },
  title: 'دليل عد الحروف العربية: لوسائل التواصل والإعلانات و SEO (2026)',
  description: 'كل ما تحتاج معرفته عن عد الحروف العربية. حدود الحروف في Twitter وInstagram وGoogle Ads. كيف تؤثر الحركات والتشكيل على العد.',
  openGraph: {
    title: 'دليل عد الحروف العربية: لوسائل التواصل والإعلانات و SEO (2026)',
    description: 'كل ما تحتاج معرفته عن عد الحروف العربية. حدود الحروف في Twitter وInstagram وGoogle Ads. كيف تؤثر الحركات والتشكيل على العد.',
    url: 'https://www.wordcountertool.net/blog/arabic-character-count-guide',
    siteName: 'WordCounterTool',
    type: 'article',
  },
}

const faqs = [
  { q: 'هل الحروف العربية تُحسب كحرف واحد على Twitter؟', a: 'نعم، كل حرف عربي يُحسب كحرف واحد على Twitter/X. لكن الحركات (فتحة، ضمة، كسرة) تُحسب عادة كحروف إضافية. تجنب التشكيل في التغريدات لتوفير المساحة.' },
  { q: 'كم حرفاً يجب أن يكون Meta Title بالعربية؟', a: 'الحد الأقصى 55-60 حرفاً. الحروف العربية أعرض، لذا 50-55 حرفاً أكثر أماناً. ضع الكلمة المفتاحية في أول 25-30 حرفاً.' },
  { q: 'هل التشكيل يؤثر على عدد الحروف؟', a: 'نعم، كل حركة (فتحة، ضمة، كسرة، شدة، تنوين) تُحسب كحرف إضافي في معظم المنصات. "كَتَبَ" = 6 حروف، "كتب" = 3 حروف. تجنب التشكيل في المحتوى ذي حدود الحروف.' },
  { q: 'كم تكلف إعلانات Google بالعربية؟', a: 'تكلفة النقرة بالعربية أقل بنسبة 30-50% من الإنجليزية. في قطاع التمويل: $1.50-3.00 مقابل $5-10 بالإنجليزية. السوق السعودي والإماراتي يقدمان أفضل عائد.' },
  { q: 'هل يجب استخدام أرقام عربية (١٢٣) أم هندية (123)؟', a: 'في المحتوى الرقمي، استخدم الأرقام الهندية (1, 2, 3) — وهي الأرقام المستخدمة عالمياً. Google يفهمها بشكل أفضل. الأرقام العربية (١، ٢، ٣) مقبولة في السياقات الأدبية والرسمية.' },
  { q: 'لماذا يجب تجنب الحروف العربية في URL؟', a: 'Google يشفر الحروف العربية (مثل %D8%A3) مما يجعل URL طويلاً جداً وغير قابل للمشاركة. استخدم الأحرف اللاتينية (transliteration): /dalil-ad-kalimat بدلاً من /دليل-عد-الكلمات.' }
]

export default function Post() {
  return (
    <>
      <FaqSchema faqs={faqs} />
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8"><Link href="/blog" className="text-emerald-400 text-sm hover:underline">{'←'} العودة إلى المدونة</Link></div>
        <article>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">دليل عد الحروف العربية: لوسائل التواصل والإعلانات و SEO (2026)</h1>
          <p className="text-slate-400 text-sm mb-8">آخر تحديث: أبريل 2026 · 10 دقائق للقراءة</p>
          <div className="result-box mb-8 border-emerald-500/30">
            <h2 className="text-emerald-400 font-bold mb-3">ملخص سريع</h2>
            <p className="text-white">الحروف العربية تُحسب كحرف واحد في جميع المنصات الحديثة. العربية أكثر كثافة من الإنجليزية — يمكنك قول المزيد في <strong>حروف أقل</strong>. الحركات (فتحة، ضمة، كسرة) قد تُحسب كحروف إضافية. تحقق من نصوصك مع <a href="/character-counter" className="text-emerald-400 underline">عداد الحروف</a> المجاني.</p>
          </div>
          <div className="space-y-8">
            
            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">كيف تُحسب الحروف العربية في المنصات الرقمية</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">الحروف العربية (أ، ب، ت، ث...) تُحسب كحرف واحد في Twitter/X وInstagram وFacebook وGoogle Ads وجميع المنصات الحديثة. كل حرف عربي يأخذ نقطة رمز Unicode واحدة (code point). هذا يعني أن 280 حرفاً على Twitter تتسع لمحتوى عربي أكثر من الإنجليزي لأن الكلمات العربية أكثر كثافة من حيث المعنى.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">الحركات والتشكيل (َ ُ ِ ّ ً ٌ ٍ) هي نقاط رمز منفصلة في Unicode. هذا يعني أن "كَتَبَ" تحتوي على 6 نقاط رمز (ك + فتحة + ت + فتحة + ب + فتحة) بينما "كتب" تحتوي على 3 فقط. في Twitter/X، الحركات تُحسب عادة كحروف إضافية — لذلك تجنب التشكيل في التغريدات إلا للضرورة.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">ميزة العربية في منصات ذات حدود حروف: يمكنك التعبير عن فكرة كاملة بحروف أقل. "سافرت إلى باريس أمس" (21 حرفاً) بالعربية مقابل "I traveled to Paris yesterday" (28 حرفاً) بالإنجليزية. هذا يعطيك مساحة إضافية للتفاصيل أو الهاشتاغات.</p>
            </section>

            <AdUnit slot="3763639977" />


            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">حدود الحروف لكل منصة (2026)</h2>
              <div className="result-box mb-4">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead><tr className="border-b" style={{borderColor:'rgba(52,211,153,0.1)'}}><th className="text-left text-emerald-400 py-2 pr-4">المنصة</th><th className="text-left text-emerald-400 py-2 pr-4">الحد</th><th className="text-left text-emerald-400 py-2">نصائح للعربية</th></tr></thead>
                    <tbody>
                      {[['Twitter/X','280 حرف','180-230 حرف مثالي — العربية تتسع لأكثر'],['Instagram Caption','2,200 حرف','100-150 حرف للتفاعل الأمثل'],['Instagram Bio','150 حرف','120-140 حرف مع دعوة لاتخاذ إجراء'],['Facebook','63,206 حرف','40-80 حرف للمنشورات مع روابط'],['LinkedIn','3,000 حرف','1,000-1,500 حرف لقيادة الفكر'],['Google Ads عنوان','30 حرف','4-5 كلمات عربية'],['Google Ads وصف','90 حرف','12-15 كلمة عربية'],['Meta Title','60 حرف','50-55 حرف لتجنب الاقتطاع'],['Meta Description','160 حرف','145-155 حرف مع CTA'],['YouTube عنوان','100 حرف','60-70 حرف (المرئي)'],['TikTok','4,000 حرف','100-150 حرف مع هاشتاغات']].map((r,i) => (
                        <tr key={i} className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}><td className="text-white py-2 pr-4">{r[0]}</td><td className="text-slate-300 py-2 pr-4">{r[1]}</td><td className="text-slate-400 py-2 text-xs">{r[2]}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">استراتيجيات الكتابة المختصرة بالعربية</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">استخدم المصادر بدلاً من الجمل الفعلية:</strong> "يمكنك الاطلاع على المزيد من المعلومات" (7 كلمات) يمكن اختصارها إلى "لمزيد من المعلومات" (3 كلمات). المصادر العربية قوية ومختصرة.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">استغل نظام الجذور:</strong> بدلاً من "الأشخاص الذين يكتبون" (4 كلمات)، استخدم "الكُتّاب" (كلمة واحدة). بدلاً من "أشياء جديدة ومبتكرة"، استخدم "مستحدثات" (كلمة واحدة). العربية غنية بالمفردات التي تختصر عبارات كاملة.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">تجنب الحشو:</strong> "في واقع الأمر"، "من الجدير بالذكر"، "لا بد من الإشارة إلى" — هذه عبارات حشو لا تضيف معلومة. احذفها. مثال: "من الجدير بالذكر أن الشركة حققت أرباحاً" → "حققت الشركة أرباحاً". أقصر وأقوى.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">تجنب التشكيل في المحتوى الرقمي:</strong> التشكيل يضيف حروفاً إضافية ويجعل القراءة على الشاشة أصعب. استخدمه فقط عند الضرورة لتوضيح المعنى (مثل التفريق بين عَلِم وعَلَّم). في المحتوى التسويقي والإعلاني، التشكيل يستهلك حروفاً ثمينة بدون فائدة.</p>
            </section>

            <AdUnit slot="3248634657" />

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">SEO والحروف العربية</h2>
              <div className="result-box mb-6">
              <p className="text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">طول Meta Title العربي في Top 10 Google</p>
              <svg viewBox="0 0 560 204" style={{width:'100%',height:'auto'}} xmlns="http://www.w3.org/2000/svg">
              <text x="4" y="62" fill="#94a3b8" style={{fontSize:'12px'}}>المركز 1</text>
      <rect x="180" y="44" width="283.0188679245283" height="28" rx="4" fill="rgba(52,211,153,0.25)" />
      <text x="469.0188679245283" y="62" fill="#34d399" style={{fontSize:'12px',fontWeight:'600'}}>50 حرف</text>
              <text x="4" y="98" fill="#94a3b8" style={{fontSize:'12px'}}>المركز 2-3</text>
      <rect x="180" y="80" width="300" height="28" rx="4" fill="rgba(52,211,153,0.25)" />
      <text x="486" y="98" fill="#34d399" style={{fontSize:'12px',fontWeight:'600'}}>53 حرف</text>
              <text x="4" y="134" fill="#94a3b8" style={{fontSize:'12px'}}>المركز 4-5</text>
      <rect x="180" y="116" width="271.6981132075472" height="28" rx="4" fill="rgba(52,211,153,0.25)" />
      <text x="457.6981132075472" y="134" fill="#34d399" style={{fontSize:'12px',fontWeight:'600'}}>48 حرف</text>
              <text x="4" y="170" fill="#94a3b8" style={{fontSize:'12px'}}>المركز 6-10</text>
      <rect x="180" y="152" width="254.7169811320755" height="28" rx="4" fill="rgba(52,211,153,0.25)" />
      <text x="440.7169811320755" y="170" fill="#34d399" style={{fontSize:'12px',fontWeight:'600'}}>45 حرف</text>
              </svg>
            </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Google يقتطع عناوين الصفحات العربية عند حوالي 55-60 حرفاً. الحروف العربية أعرض من اللاتينية، لذا قد يحدث الاقتطاع عند 50-55 حرفاً أحياناً. الحل: ضع كلمتك المفتاحية الأساسية في أول 25-30 حرفاً.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">الوصف التعريفي (Meta Description) يُقتطع عند 155-160 حرفاً. اكتبه بالعربية مع دعوة واضحة لاتخاذ إجراء: "اكتشف أفضل..."، "تعرف على..."، "احصل على..." — هذه العبارات تزيد معدل النقر بنسبة 15-25% مقارنة بالأوصاف الجافة.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">عناوين URL: لا تستخدم الحروف العربية. اكتب URL بالأحرف اللاتينية (transliteration): /akhta-kitaba-arabiya بدلاً من /أخطاء-كتابة-عربية. Google يشفر الحروف العربية في URL مما يجعلها طويلة جداً وغير قابلة للمشاركة. استخدم <a href="/character-counter" className="text-emerald-400 underline">عداد الحروف</a> للتحقق من أطوال عناوينك.</p>
            </section>

            <AdUnit slot="3248634657" />


            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">إعلانات Google بالعربية</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">في إعلانات Google، كل عنوان يسمح بـ 30 حرفاً فقط. بالعربية، هذا يتسع لـ 4-5 كلمات — أكثر من الإنجليزية (5-6 كلمات) لكن المساحة لا تزال ضيقة. احذف أدوات التعريف غير الضرورية: "احصل على خصم" بدلاً من "احصل على الخصم" يوفر حرفين.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">خبر مفرح: تكلفة النقرة (CPC) للإعلانات العربية أقل بنسبة 30-50% من الإنجليزية في معظم القطاعات. وفقاً لبيانات WordStream لعام 2025، متوسط CPC بالعربية في قطاع التمويل $1.50-3.00 مقابل $5-10 بالإنجليزية. المنافسة أقل والتكلفة أقل — مما يجعل الإعلان بالعربية استثماراً ذكياً.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">السوق السعودي والإماراتي بالذات يقدمان فرصاً ممتازة. القوة الشرائية عالية، الإنفاق الإعلاني في نمو، والمنافسة على الكلمات المفتاحية العربية لا تزال منخفضة نسبياً مقارنة بالإنجليزية.</p>
            </section>

            <AdUnit slot="3248634657" />

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">الأسئلة الشائعة</h2>
              <div className="space-y-4">{faqs.map((faq,i)=>(<div key={i} className="result-box"><h3 className="text-white font-bold mb-2">{faq.q}</h3><p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p></div>))}</div>
            </section>
          </div>
        </article>
      </main>

      <div className="max-w-4xl mx-auto px-4 mb-8">
        <div className="bg-gradient-to-r from-emerald-900/20 to-teal-900/10 border border-emerald-500/20 rounded-2xl p-6">
          <h2 className="text-lg font-bold text-white mb-3">أدوات عربية مجانية</h2>
          <div className="flex flex-wrap gap-2">
            <a href="/word-counter/language/arabic" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">عداد الكلمات العربية</a>
            <a href="/word-counter" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Word Counter</a>
            <a href="/character-counter" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Character Counter</a>
            <a href="/reading-time" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Reading Time</a>
            <a href="/keyword-density" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Keyword Density</a>
            <a href="/readability-checker" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Readability Checker</a>
          </div>
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Article","headline":"دليل عد الحروف العربية: لوسائل التواصل والإعلانات و SEO (2026)","description":"كل ما تحتاج معرفته عن عد الحروف العربية. حدود الحروف في Twitter وInstagram وGoogle Ads. كيف تؤثر الحركات والتشكيل على العد.","author":{"@type":"Organization","name":"WordCounterTool"},"publisher":{"@type":"Organization","name":"WordCounterTool"},"datePublished":"2026-04-05","dateModified":"2026-04-05","mainEntityOfPage":"https://www.wordcountertool.net/blog/arabic-character-count-guide","inLanguage":"ar"})}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.wordcountertool.net"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.wordcountertool.net/blog"},{"@type":"ListItem","position":3,"name":"دليل عد الحروف العربية: لوسائل التواصل والإعلانات و SEO (2026)","item":"https://www.wordcountertool.net/blog/arabic-character-count-guide"}]})}} />

      <Footer />
    </>
  )
}
