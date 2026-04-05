import Header from '../../../components/Header'
import AdUnit from '../../components/AdUnit'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import FaqSchema from '../../../components/FaqSchema'

export const metadata = {
  alternates: { canonical: 'https://www.wordcountertool.net/blog/russian-character-count-guide' },
  title: 'Подсчёт символов в русском тексте: полный гид с лимитами платформ (2026)',
  description: 'Всё о подсчёте символов в русском: кириллица, UTF-8, лимиты VK, Telegram, Яндекс, Google. Бесплатный инструмент подсчёта.',
  openGraph: {
    title: 'Подсчёт символов в русском тексте: полный гид с лимитами платформ (2026)',
    description: 'Всё о подсчёте символов в русском: кириллица, UTF-8, лимиты VK, Telegram, Яндекс, Google. Бесплатный инструмент подсчёта.',
    url: 'https://www.wordcountertool.net/blog/russian-character-count-guide',
    siteName: 'WordCounterTool',
    type: 'article',
  },
}

const faqs = [
  { q: 'Как подсчитать символы в русском тексте?', a: 'Используйте бесплатный счётчик символов на WordCounterTool.net. Он корректно считает кириллицу, показывая количество символов с пробелами и без, слова, предложения и время чтения.' },
  { q: 'Сколько байт занимает одна русская буква?', a: 'В UTF-8 каждая буква кириллицы занимает 2 байта (латинская — 1 байт). Буква «ё» тоже занимает 2 байта. Эмодзи — 4 байта. Это важно для систем с лимитами по байтам.' },
  { q: 'Какой лимит символов в Telegram?', a: 'Одно сообщение в Telegram — до 4 096 символов. Оптимальная длина для каналов — 500–1 500 символов. Посты до 1 000 символов получают на 28% больше просмотров (данные TGStat 2024).' },
  { q: 'Сколько символов показывает Яндекс в заголовке?', a: 'Яндекс показывает примерно 56 символов в Title. Но кириллица шире латиницы, поэтому безопасный лимит — 50 символов. Ключевое слово размещайте в первых 30 символах.' },
  { q: 'Почему в Twitter русский текст короче?', a: 'Twitter считает кириллические символы как 2 символа (из-за Unicode). Лимит 280 символов для русского текста фактически означает ~140 кириллических букв — вдвое меньше, чем для латиницы.' },
  { q: 'Как оптимизировать мета-описание для Яндекса?', a: 'Яндекс показывает ~160 символов мета-описания. Ключевое слово и ценностное предложение — в первых 100 символах. Завершите призывом к действию. Используйте счётчик символов для проверки длины.' }
]

export default function Post() {
  return (
    <>
      <FaqSchema faqs={faqs} />
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8"><Link href="/blog" className="text-emerald-400 text-sm hover:underline">Вернуться в блог</Link></div>
        <article>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Подсчёт символов в русском тексте: полный гид с лимитами платформ (2026)</h1>
          <p className="text-slate-400 text-sm mb-8">Обновлено: апрель 2026 | Время чтения: 8 мин</p>
          <div className="result-box mb-8 border-emerald-500/30">
            <h2 className="text-emerald-400 font-bold mb-3">Краткое содержание</h2>
            <p className="text-white">Русский алфавит содержит <strong className="text-white">33 буквы</strong> (кириллица). Лимиты символов влияют на посты в VK (<strong className="text-white">15 895 символов</strong>), Telegram (<strong className="text-white">4 096 символов</strong>), мета-описания Яндекса (<strong className="text-white">~160 символов</strong>) и Google (<strong className="text-white">~155 символов</strong>). Используйте наш <a href="/character-counter" className="text-emerald-400 underline">бесплатный счётчик символов</a>.</p>
          </div>
          <div className="space-y-8">

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Русский алфавит и система символов</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Русский алфавит (кириллица) состоит из 33 букв: 21 согласная, 10 гласных и 2 знака (ъ и ь). Буква «ё» часто заменяется на «е» в печати, но это разные буквы с разными значениями. Для подсчёта символов каждая буква кириллицы считается как 1 символ — аналогично латинице.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Важная особенность: в UTF-8 каждая русская буква занимает 2 байта (латинская — 1 байт). Это влияет на платформы, которые считают лимиты по байтам, а не по символам. Но большинство современных платформ (VK, Telegram, Яндекс) считают именно символы.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Наш счётчик символов правильно обрабатывает кириллицу и показывает количество символов с пробелами и без, количество слов, предложений и расчётное время чтения.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Лимиты символов по платформам</h2>
              <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm" style={{borderCollapse:'collapse'}}>
                  <thead>
                    <tr style={{borderBottom:'1px solid rgba(52,211,153,0.2)'}}>
                      <th className="text-left text-emerald-400 py-2 px-3">Платформа</th>
                      <th className="text-left text-emerald-400 py-2 px-3">Лимит</th>
                      <th className="text-left text-emerald-400 py-2 px-3">Совет</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['VK (пост)', '15 895 символов', 'Оптимально: 300–500 символов для вовлечённости'],
                      ['Telegram (сообщение)', '4 096 символов', 'Каналы: 500–1 500 символов лучше читаются'],
                      ['Twitter/X', '140 символов (кириллица)', 'Каждая кириллическая буква = 2 символа Twitter'],
                      ['Яндекс Title', '~56 символов', 'Ключевое слово в первых 30 символах'],
                      ['Яндекс Description', '~160 символов', 'Суть предложения в первых 100 символах'],
                      ['Google Title', '~55–60 символов', 'Кириллица шире латиницы — реально ~50 символов'],
                      ['Google Description', '~155 символов', 'Ключевое слово + ценность + CTA'],
                      ['Instagram (подпись)', '2 200 символов', 'Первые 125 символов видны в ленте'],
                      ['Яндекс.Директ заголовок', '56 символов', 'Максимально конкретный оффер'],
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
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Обратите внимание на Twitter/X: кириллические символы считаются как 2 символа (из-за Unicode-кодирования). Это означает, что русский твит может содержать максимум ~140 кириллических символов, а не 280.</p>
            </section>

            <AdUnit slot="3248634657" />

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">UTF-8 и кириллица</h2>
              <div className="result-box mb-4">
                <svg viewBox="0 0 600 200" style={{width:'100%',height:'auto'}} xmlns="http://www.w3.org/2000/svg">
                  <text x="300" y="20" textAnchor="middle" fill="#e2e8f0" style={{fontSize:'14px',fontWeight:'700'}}>Размер символов в UTF-8</text>
                  <rect x="160" y="45" width="340" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="160" y="45" width={String(340*0.25)} height="28" rx="4" fill="#10b981" />
                  <text x="150" y="63" textAnchor="end" fill="#94a3b8" style={{fontSize:'12px'}}>Латиница (a–z)</text>
                  <text x={String(160+340*0.25+8)} y="63" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>1 байт</text>
                  <rect x="160" y="81" width="340" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="160" y="81" width={String(340*0.50)} height="28" rx="4" fill="#f59e0b" />
                  <text x="150" y="99" textAnchor="end" fill="#94a3b8" style={{fontSize:'12px'}}>Кириллица (а–я)</text>
                  <text x={String(160+340*0.50+8)} y="99" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>2 байта</text>
                  <rect x="160" y="117" width="340" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="160" y="117" width={String(340*0.50)} height="28" rx="4" fill="#f59e0b" />
                  <text x="150" y="135" textAnchor="end" fill="#94a3b8" style={{fontSize:'12px'}}>Буква «ё»</text>
                  <text x={String(160+340*0.50+8)} y="135" fill="#e2e8f0" style={{fontSize:'12px',fontWeight:'600'}}>2 байта</text>
                  <rect x="160" y="153" width="340" height="28" rx="4" fill="rgba(16,185,129,0.15)" />
                  <rect x="160" y="153" width={String(340*1.0)} height="28" rx="4" fill="#ef4444" />
                  <text x="150" y="171" textAnchor="end" fill="#94a3b8" style={{fontSize:'12px'}}>Эмодзи</text>
                  <text x={String(160+340*1.0-60)} y="171" fill="#ffffff" style={{fontSize:'12px',fontWeight:'600'}}>4 байта</text>
                </svg>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">В UTF-8 кириллица занимает 2 байта на символ — вдвое больше латиницы. Для русского текста из 1 000 символов потребуется ~2 КБ хранилища. Это важно для баз данных, API и систем, где лимиты установлены в байтах, а не в символах.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">На веб-страницах всегда указывайте <code className="text-emerald-400">&lt;meta charset=&quot;UTF-8&quot;&gt;</code>. Без этого кириллица может отображаться как «кракозябры» — проблема, знакомая многим разработчикам в Рунете.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Практические советы по лимитам</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">Яндекс.Директ:</strong> Заголовок — 56 символов, описание — 81 символ. Русские слова длиннее английских, поэтому уместить оффер сложнее. Используйте сокращения: «бесп.» вместо «бесплатно», цифры вместо слов.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">Title для Яндекса и Google:</strong> Яндекс показывает ~56 символов, Google — ~55–60. Но кириллица визуально шире латиницы, поэтому реально Яндекс обрезает заголовки раньше. Безопасный лимит — 50 символов. Наш <a href="/character-counter" className="text-emerald-400 underline">счётчик символов</a> поможет уложиться в лимит.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">Telegram-каналы:</strong> Лимит — 4 096 символов, но оптимальная длина поста — 500–1 500 символов. По данным TGStat (2024), посты до 1 000 символов получают на 28% больше просмотров, чем длинные.</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4"><strong className="text-white">VK:</strong> Лимит — 15 895 символов, но оптимальный пост для вовлечённости — 300–500 символов. Длинные посты (2 000+ символов) хорошо работают как статьи VK.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Часто задаваемые вопросы</h2>
              <div className="space-y-4">{faqs.map((faq,i)=>(<div key={i} className="result-box"><h3 className="text-white font-bold mb-2">{faq.q}</h3><p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p></div>))}</div>
            </section>
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

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Article","headline":"Подсчёт символов в русском тексте: полный гид с лимитами платформ (2026)","description":"Всё о подсчёте символов в русском: кириллица, UTF-8, лимиты VK, Telegram, Яндекс, Google. Бесплатный инструмент подсчёта.","inLanguage":"ru","author":{"@type":"Organization","name":"WordCounterTool"},"publisher":{"@type":"Organization","name":"WordCounterTool"},"datePublished":"2026-04-05","dateModified":"2026-04-05","mainEntityOfPage":"https://www.wordcountertool.net/blog/russian-character-count-guide"})}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.wordcountertool.net"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.wordcountertool.net/blog"},{"@type":"ListItem","position":3,"name":"Подсчёт символов в русском тексте: полный гид с лимитами платформ (2026)","item":"https://www.wordcountertool.net/blog/russian-character-count-guide"}]})}} />

      <Footer />
    </>
  )
}
