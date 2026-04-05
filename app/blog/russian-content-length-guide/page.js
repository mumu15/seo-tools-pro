import Header from '../../../components/Header'
import AdUnit from '../../components/AdUnit'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import FaqSchema from '../../../components/FaqSchema'

export const metadata = {
  alternates: { canonical: 'https://www.wordcountertool.net/blog/russian-content-length-guide' },
  title: 'Оптимальная длина текста на русском: руководство с данными (2026)',
  description: 'Какой длины должен быть текст на русском? Статьи, лендинги, карточки товаров, посты в соцсетях — с реальными данными Яндекса, Serpstat и Mediascope.',
  openGraph: {
    title: 'Оптимальная длина текста на русском: руководство с данными (2026)',
    description: 'Какой длины должен быть текст на русском? Статьи, лендинги, карточки товаров, посты в соцсетях — с реальными данными Яндекса, Serpstat и Mediascope.',
    url: 'https://www.wordcountertool.net/blog/russian-content-length-guide',
    siteName: 'WordCounterTool',
    type: 'article',
  },
}

const faqs = [
  { q: 'Какой длины должна быть статья для SEO на русском?', a: '1 500–3 000 слов. Страницы в топ-10 Яндекса содержат в среднем 2 100 слов. Первые позиции — около 2 800 слов. Но качество и полнота раскрытия темы важнее чистого объёма.' },
  { q: 'Как длина текста влияет на позиции в Яндексе?', a: 'Существует корреляция между длиной и позициями, но Яндекс наказывает «водяные» тексты через алгоритм «Баден-Баден». Лучшая стратегия — полностью раскрыть тему, не добавляя лишних слов.' },
  { q: 'Сколько слов нужно для карточки товара на Ozon/Wildberries?', a: '500–1 000 слов. Включите характеристики, преимущества, сценарии использования и ответы на частые вопросы. По данным Ozon, подробные описания повышают конверсию на 22%.' },
  { q: 'На сколько русский текст длиннее английского?', a: 'На 10–15% по количеству слов при том же объёме информации. Это связано с более длинными словами, падежными формами и предлогами. При переводе учитывайте это увеличение.' },
  { q: 'Как часто нужно ставить подзаголовки?', a: 'Каждые 200–300 слов — H2 или H3. При мобильной аудитории 76% в России подзаголовки — критически важный элемент навигации для скроллинга.' },
  { q: 'Какой оптимальный объём поста в Яндекс.Дзене?', a: '2 000–4 000 символов (300–600 слов). Алгоритм Дзена продвигает статьи с высоким процентом дочитываний. Короткие насыщенные статьи читаются лучше длинных.' }
]

export default function Post() {
  return (
    <>
      <FaqSchema faqs={faqs} />
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8"><Link href="/blog" className="text-emerald-400 text-sm hover:underline">Вернуться в блог</Link></div>
        <article>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Оптимальная длина текста на русском: руководство с данными (2026)</h1>
          <p className="text-slate-400 text-sm mb-8">Обновлено: апрель 2026 | Время чтения: 10 мин</p>
          <div className="result-box mb-8 border-emerald-500/30">
            <h2 className="text-emerald-400 font-bold mb-3">Краткое содержание</h2>
            <p className="text-white">Статьи в топ-10 Яндекса содержат в среднем <strong className="text-white">2 100 слов</strong> (Serpstat, 2024). В Google — около <strong className="text-white">2 300 слов</strong>. Рунет насчитывает <strong className="text-white">~200 миллионов</strong> русскоязычных интернет-пользователей. Используйте наш <a href="/word-counter/language/russian" className="text-emerald-400 underline">счётчик слов</a>, чтобы проверить длину текста.</p>
          </div>
          <div className="space-y-8">

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Что говорят данные о длине текстов</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Serpstat проанализировал 5 000 ключевых запросов на русском языке в 2024 году. Результат: средняя длина страниц в топ-10 Яндекса — 2 100 слов, в Google — 2 300 слов. Страницы на 1-й позиции содержат в среднем 2 800 слов в Яндексе и 3 100 слов в Google.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Однако простое увеличение длины не гарантирует результат. Яндекс активно борется с «водяными» текстами через алгоритм «Баден-Баден», который снижает позиции сайтов с переоптимизированным контентом. Google использует аналогичные механизмы. Ключевой фактор — не количество слов, а полнота раскрытия темы.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">По данным Mediascope (2024), средний российский пользователь проводит 4,2 часа в день в интернете. Из них 38% времени — на мобильных устройствах. Это означает, что тексты должны быть не только содержательными, но и удобными для чтения с экрана смартфона.</p>
              <div className="result-box mb-4">
                <svg viewBox="0 0 600 240" style={{width:'100%',height:'auto'}} xmlns="http://www.w3.org/2000/svg">
                  <text x="300" y="20" textAnchor="middle" fill="#e2e8f0" style={{fontSize:'14px',fontWeight:'700'}}>Средняя длина текста: Яндекс/Google топ-10 (2024)</text>
                  <rect x="130" y="45" width="390" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="130" y="45" width={String(390*0.82)} height="28" rx="4" fill="#10b981" />
                  <text x="120" y="63" textAnchor="end" fill="#94a3b8" style={{fontSize:'11px'}}>Позиция 1</text>
                  <text x={String(130+390*0.82+8)} y="63" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>2 800 слов</text>
                  <rect x="130" y="81" width="390" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="130" y="81" width={String(390*0.72)} height="28" rx="4" fill="#10b981" />
                  <text x="120" y="99" textAnchor="end" fill="#94a3b8" style={{fontSize:'11px'}}>Позиция 3</text>
                  <text x={String(130+390*0.72+8)} y="99" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>2 450 слов</text>
                  <rect x="130" y="117" width="390" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="130" y="117" width={String(390*0.63)} height="28" rx="4" fill="#10b981" />
                  <text x="120" y="135" textAnchor="end" fill="#94a3b8" style={{fontSize:'11px'}}>Позиция 5</text>
                  <text x={String(130+390*0.63+8)} y="135" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>2 100 слов</text>
                  <rect x="130" y="153" width="390" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="130" y="153" width={String(390*0.55)} height="28" rx="4" fill="#10b981" />
                  <text x="120" y="171" textAnchor="end" fill="#94a3b8" style={{fontSize:'11px'}}>Позиция 7</text>
                  <text x={String(130+390*0.55+8)} y="171" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>1 850 слов</text>
                  <rect x="130" y="189" width="390" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="130" y="189" width={String(390*0.47)} height="28" rx="4" fill="#10b981" />
                  <text x="120" y="207" textAnchor="end" fill="#94a3b8" style={{fontSize:'11px'}}>Позиция 10</text>
                  <text x={String(130+390*0.47+8)} y="207" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>1 600 слов</text>
                </svg>
              </div>
            </section>

            <AdUnit slot="3248634657" />


            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Оптимальная длина по типам контента</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">SEO-статьи и блоги:</strong> 1 500–3 000 слов. Подробные руководства могут быть длиннее, если тема это оправдывает. Подзаголовки (H2/H3) — каждые 200–300 слов.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">Лендинги:</strong> 800–1 500 слов. Исследование Tilda Publishing (2024) показало, что лендинги с 900–1 200 словами имеют самую высокую конверсию в русскоязычном сегменте.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">Карточки товаров (Wildberries, Ozon):</strong> 500–1 000 слов. Подробные описания с характеристиками, преимуществами и сценариями использования повышают конверсию на 22% (данные Ozon, 2024).</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">Яндекс.Дзен (статьи):</strong> 2 000–4 000 символов (300–600 слов). Алгоритм Дзена продвигает статьи с высоким дочитыванием. Короткие, насыщенные статьи читаются лучше длинных.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">Email-рассылки:</strong> 200–400 слов. По данным Unisender (2024), письма до 300 слов имеют самый высокий CTR в русскоязычном сегменте.</p>
            </section>

            <AdUnit slot="3248634657" />

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Русский vs. английский: соотношение объёмов</h2>
              <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm" style={{borderCollapse:'collapse'}}>
                  <thead>
                    <tr style={{borderBottom:'1px solid rgba(52,211,153,0.2)'}}>
                      <th className="text-left text-emerald-400 py-2 px-3">Английский</th>
                      <th className="text-left text-emerald-400 py-2 px-3">Русский (аналогичная информация)</th>
                      <th className="text-left text-emerald-400 py-2 px-3">Соотношение</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['1 000 слов', '~1 100–1 150 слов', 'RU на 10–15% длиннее'],
                      ['1 500 слов', '~1 650–1 725 слов', 'RU на 10–15% длиннее'],
                      ['2 000 слов', '~2 200–2 300 слов', 'RU на 10–15% длиннее'],
                      ['3 000 слов', '~3 300–3 450 слов', 'RU на 10–15% длиннее'],
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
              <p className="text-slate-400 text-sm leading-relaxed mb-4">При переводе контента с английского на русский планируйте увеличение объёма на 10–15%. Используйте <a href="/word-counter/language/russian" className="text-emerald-400 underline">счётчик слов</a> для проверки итогового объёма.</p>
            </section>

            <AdUnit slot="3763639977" />


            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Как измерить и оптимизировать длину текста</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">Анализ конкурентов:</strong> Проверьте объём текстов из топ-5 Яндекса и Google по вашему ключевому запросу. Нацельтесь на средний объём конкурентов +15–20%.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">Время чтения:</strong> Указывайте время чтения в начале статьи. Оптимально для блога — 7–10 минут (1 500–2 200 слов). По данным VC.ru, статьи с указанным временем чтения получают на 16% больше дочитываний.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">Подзаголовки:</strong> Каждые 200–300 слов — подзаголовок H2 или H3. Мобильная аудитория России — 76% (Mediascope), подзаголовки критически важны для навигации при скроллинге.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">Короткие абзацы:</strong> 2–3 предложения на абзац. На смартфоне абзац из 5+ строк выглядит как «стена текста» и провоцирует уход с страницы.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Часто задаваемые вопросы</h2>
              <div className="space-y-4">{faqs.map((faq,i)=>(<div key={i} className="result-box"><h3 className="text-white font-bold mb-2">{faq.q}</h3><p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p></div>))}</div>
            </section>

            <AdUnit slot="3248634657" />

          </div>
        </article>
      </main>

      <div className="max-w-4xl mx-auto px-4 mb-8">
        <div className="bg-gradient-to-r from-emerald-900/20 to-teal-900/10 border border-emerald-500/20 rounded-2xl p-6">
          <h2 className="text-lg font-bold text-white mb-3">Инструменты для русского языка</h2>
          <div className="flex flex-wrap gap-2">
            <a href="/word-counter/language/russian" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Счётчик слов (русский)</a>
            <a href="/word-counter" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Счётчик слов</a>
            <a href="/character-counter" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Счётчик символов</a>
            <a href="/reading-time" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Время чтения</a>
            <a href="/readability-checker" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Проверка читаемости</a>
            <a href="/keyword-density" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Плотность ключевых слов</a>
          </div>
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Article","headline":"Оптимальная длина текста на русском: руководство с данными (2026)","description":"Какой длины должен быть текст на русском? Статьи, лендинги, карточки товаров, посты в соцсетях — с реальными данными Яндекса, Serpstat и Mediascope.","inLanguage":"ru","author":{"@type":"Organization","name":"WordCounterTool"},"publisher":{"@type":"Organization","name":"WordCounterTool"},"datePublished":"2026-04-05","dateModified":"2026-04-05","mainEntityOfPage":"https://www.wordcountertool.net/blog/russian-content-length-guide"})}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.wordcountertool.net"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.wordcountertool.net/blog"},{"@type":"ListItem","position":3,"name":"Оптимальная длина текста на русском: руководство с данными (2026)","item":"https://www.wordcountertool.net/blog/russian-content-length-guide"}]})}} />

      <Footer />
    </>
  )
}
