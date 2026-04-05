import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import AdUnit from '../../components/AdUnit'
import FaqSchema from '../../../components/FaqSchema'

export const metadata = {
  title: 'How Many Pages Is 20 000 Words? (2026) | WordCounterTool.net',
  description: '20 000 words is 80.0 pages double-spaced or 40.0 pages single-spaced. See page counts for every font and spacing. Free converter.',
  alternates: { canonical: 'https://www.wordcountertool.net/words-to-pages/20000-words' },
}

const faqs = [
  { q: 'How many pages is 20 000 words double-spaced?', a: '20 000 words is approximately 80.0 pages double-spaced using 12pt Times New Roman font with standard 1-inch margins (250 words per page).' },
  { q: 'How many pages is 20 000 words single-spaced?', a: '20 000 words is approximately 40.0 pages single-spaced using 12pt Times New Roman font with standard 1-inch margins (500 words per page).' },
  { q: 'How long does it take to read 20 000 words?', a: 'At the average reading speed of 200 words per minute, 20 000 words takes approximately 100 minutes to read.' },
  { q: 'How long does it take to speak 20 000 words?', a: 'At the average speaking rate of 130 words per minute, 20 000 words takes approximately 154 minutes to speak aloud.' },
]

export default function Page() {
  return (
    <>
      <FaqSchema faqs={faqs} />
      <Header />
      <main className="min-h-screen bg-slate-950 text-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <nav className="text-sm text-slate-500 mb-6">
            <a href="/" className="hover:text-emerald-400 transition-colors">Home</a>
            <span className="mx-2">/</span>
            <a href="/words-to-pages" className="hover:text-emerald-400 transition-colors">Words to Pages</a>
            <span className="mx-2">/</span>
            <span className="text-slate-300">20 000 Words</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">How Many Pages Is 20 000 Words?</h1>

          <div className="bg-slate-800/40 border border-emerald-500/20 rounded-2xl p-6 mb-10">
            <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2">Quick Answer</p>
            <p className="text-white text-lg leading-relaxed"><strong>20 000 words</strong> is approximately <strong>80.0 pages double-spaced</strong> or <strong>40.0 pages single-spaced</strong> using 12pt Times New Roman with 1-inch margins. At 1.5 spacing, it is approximately 60.1 pages. Reading time: 100 minutes. Speaking time: 154 minutes.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-5 text-center">
              <div className="text-3xl font-bold text-emerald-400">80.0</div>
              <div className="text-slate-500 text-xs mt-1">Pages (double-spaced)</div>
            </div>
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-5 text-center">
              <div className="text-3xl font-bold text-blue-400">40.0</div>
              <div className="text-slate-500 text-xs mt-1">Pages (single-spaced)</div>
            </div>
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-5 text-center">
              <div className="text-3xl font-bold text-purple-400">100 min</div>
              <div className="text-slate-500 text-xs mt-1">Reading Time</div>
            </div>
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-5 text-center">
              <div className="text-3xl font-bold text-orange-400">154 min</div>
              <div className="text-slate-500 text-xs mt-1">Speaking Time</div>
            </div>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">20 000 Words in Different Fonts</h2>
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 overflow-x-auto">
              <table className="w-full text-sm">
                <thead><tr className="border-b" style={{borderColor:'rgba(52,211,153,0.2)'}}><th className="text-left text-emerald-400 py-3 pr-4 font-semibold text-xs uppercase">Font (12pt)</th><th className="text-left text-emerald-400 py-3 pr-4 font-semibold text-xs uppercase">Single Spaced</th><th className="text-left text-emerald-400 py-3 pr-4 font-semibold text-xs uppercase">1.5 Spaced</th><th className="text-left text-emerald-400 py-3 font-semibold text-xs uppercase">Double Spaced</th></tr></thead>
                <tbody>
                  {[['Times New Roman',40.0,60.1,80.0],['Arial',44.4,66.7,88.9],['Calibri',44.4,66.7,88.9],['Courier New',72.7,109.3,146.0],['Georgia',47.6,71.4,95.2],['Garamond',36.4,54.5,72.7],['Verdana',52.6,79.1,105.3]].map((r, i) => (
                    <tr key={i} className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                      <td className="text-white font-medium py-3 pr-4">{r[0]}</td>
                      <td className="text-slate-300 py-3 pr-4">{r[1]} pages</td>
                      <td className="text-slate-300 py-3 pr-4">{r[2]} pages</td>
                      <td className="text-slate-300 py-3">{r[3]} pages</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <AdUnit slot="3763639977" />


          <AdUnit slot="3248634657" />

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">What Does 20 000 Words Look Like?</h2>
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6">
              <p className="text-slate-300 text-sm leading-relaxed mb-4">20 000 words is equivalent to approximately 4 000 characters, 1333 sentences, and 200 paragraphs of standard writing.</p>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">This is the length of a thesis chapter, a detailed white paper, or a novella. At 100 minutes reading time, this is extensive content that most readers will consume over multiple sessions.</p>
              <p className="text-slate-300 text-sm leading-relaxed">Common documents at this length: dissertations, book chapters, comprehensive guides, research theses.</p>
            </div>
          </section>

          <div className="bg-gradient-to-r from-emerald-900/30 to-teal-900/20 border border-emerald-500/30 rounded-2xl p-6 mb-10 text-center">
            <p className="text-white font-semibold text-lg mb-2">Check Your Exact Word Count</p>
            <p className="text-slate-400 text-sm mb-4">Paste your text for instant word count, page estimate, and reading time</p>
            <a href="/word-counter" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-8 py-3 rounded-xl transition-colors">Open Word Counter</a>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6">
              {faqs.map((faq, i) => (
                <div key={i} className={i < faqs.length - 1 ? "border-b pb-4 mb-4" : "pb-2"} style={{borderColor:'rgba(52,211,153,0.08)'}}>
                  <h3 className="text-white font-semibold mb-2 text-sm">{faq.q}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Other Word Counts</h2>
            <div className="flex flex-wrap gap-2">
              <a href="/words-to-pages/250-words" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-3 py-2 rounded-lg transition-colors">250 Words</a>
              <a href="/words-to-pages/300-words" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-3 py-2 rounded-lg transition-colors">300 Words</a>
              <a href="/words-to-pages/500-words" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-3 py-2 rounded-lg transition-colors">500 Words</a>
              <a href="/words-to-pages/600-words" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-3 py-2 rounded-lg transition-colors">600 Words</a>
              <a href="/words-to-pages/750-words" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-3 py-2 rounded-lg transition-colors">750 Words</a>
              <a href="/words-to-pages/800-words" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-3 py-2 rounded-lg transition-colors">800 Words</a>
              <a href="/words-to-pages/1000-words" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-3 py-2 rounded-lg transition-colors">1 000 Words</a>
              <a href="/words-to-pages/1200-words" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-3 py-2 rounded-lg transition-colors">1 200 Words</a>
              <a href="/words-to-pages/1500-words" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-3 py-2 rounded-lg transition-colors">1 500 Words</a>
              <a href="/words-to-pages/1750-words" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-3 py-2 rounded-lg transition-colors">1 750 Words</a>
              <a href="/words-to-pages" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-3 py-2 rounded-lg transition-colors">All Conversions</a>
            </div>
          </section>

          <AdUnit slot="3248634657" />


          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Related Tools</h2>
            <div className="flex flex-wrap gap-2">
              <a href="/word-counter" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Word Counter</a>
              <a href="/words-per-page" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Words Per Page</a>
              <a href="/reading-time" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Reading Time</a>
              <a href="/words-to-pages" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Words to Pages</a>
            </div>
          </section>

          <AdUnit slot="3763639977" />
        </div>
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.wordcountertool.net"},{"@type":"ListItem","position":2,"name":"Words to Pages","item":"https://www.wordcountertool.net/words-to-pages"},{"@type":"ListItem","position":3,"name":"20 000 Words","item":"https://www.wordcountertool.net/words-to-pages/20000-words"}]})}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebApplication","name":"20 000 Words to Pages","applicationCategory":"UtilityApplication","operatingSystem":"Web","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"}})}} />
      
        {/* === BEEFED-UP CONTENT: 1500+ words === */}
        <div className="max-w-4xl mx-auto mt-14 px-4 space-y-10">

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{color:'var(--text-primary)'}}>What Is 20 000 Words?</h2>
            <p className="leading-relaxed mb-3" style={{color:'var(--text-muted)'}}>20,000 words fills 80 double-spaced pages. This is a substantial thesis, a full ebook, a novella, or a comprehensive technical manual.</p>
            <p className="leading-relaxed" style={{color:'var(--text-muted)'}}>At 20,000 words you are writing a book-length document. This requires chapter-level planning, consistent voice across days or weeks of writing, and professional editing. Few people can write 20,000 quality words in less than a month.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{color:'var(--text-primary)'}}>Writing 20 000 Words: Structure and Strategy</h2>
            <p className="leading-relaxed mb-3" style={{color:'var(--text-muted)'}}>Use a chapter outline with target word counts for each chapter. Aim for 5-8 chapters of 2,500-4,000 words each. Build in time for revision — a 20,000-word document needs at least two full editing passes.</p>
            <p className="leading-relaxed" style={{color:'var(--text-muted)'}}>Reading time: about 84 minutes. This is a book you read over several sessions. Provide clear stopping points at the end of each chapter so readers can put it down and pick it up again easily.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{color:'var(--text-primary)'}}>Real-World Examples of 20 000-Word Documents</h2>
            <p className="leading-relaxed mb-3" style={{color:'var(--text-muted)'}}>A standard ebook for marketing purposes is 15,000-25,000 words. A novella is 17,500-40,000 words. An undergraduate thesis is 10,000-20,000 words. A detailed company handbook might run 20,000-30,000 words.</p>
            <p className="leading-relaxed" style={{color:'var(--text-muted)'}}>Tonal inconsistency becomes a serious problem at 20,000 words. If you write chapter 1 on Monday and chapter 7 two weeks later, they may read like different authors wrote them. Do a dedicated voice-consistency pass after completing the first draft.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{color:'var(--text-primary)'}}>20 000 Words in Different Formats</h2>
            <div className="overflow-x-auto rounded-xl" style={{border:'1px solid var(--border-color)'}}>
              <table className="w-full text-sm">
                <thead><tr style={{background:'var(--accent-bg)'}}>
                  <th className="text-left py-3 px-4 font-semibold" style={{color:'var(--accent)'}}>Format</th>
                  <th className="text-left py-3 px-4 font-semibold" style={{color:'var(--accent)'}}>Pages</th>
                  <th className="text-left py-3 px-4 font-semibold" style={{color:'var(--accent)'}}>Time</th>
                </tr></thead>
                <tbody>
                  <tr style={{borderBottom:'1px solid var(--border-subtle)'}}>
                    <td className="py-2.5 px-4 font-medium" style={{color:'var(--text-primary)'}}>Single spaced (Times New Roman 12pt)</td>
                    <td className="py-2.5 px-4" style={{color:'var(--text-muted)'}}>40.0 pages</td>
                    <td className="py-2.5 px-4" style={{color:'var(--text-muted)'}}>84 min read</td>
                  </tr>
                  <tr style={{borderBottom:'1px solid var(--border-subtle)'}}>
                    <td className="py-2.5 px-4 font-medium" style={{color:'var(--text-primary)'}}>1.5 spaced</td>
                    <td className="py-2.5 px-4" style={{color:'var(--text-muted)'}}>53.3 pages</td>
                    <td className="py-2.5 px-4" style={{color:'var(--text-muted)'}}>84 min read</td>
                  </tr>
                  <tr style={{borderBottom:'1px solid var(--border-subtle)'}}>
                    <td className="py-2.5 px-4 font-medium" style={{color:'var(--text-primary)'}}>Double spaced (standard academic)</td>
                    <td className="py-2.5 px-4" style={{color:'var(--text-muted)'}}>80.0 pages</td>
                    <td className="py-2.5 px-4" style={{color:'var(--text-muted)'}}>84 min read</td>
                  </tr>
                  <tr style={{borderBottom:'1px solid var(--border-subtle)'}}>
                    <td className="py-2.5 px-4 font-medium" style={{color:'var(--text-primary)'}}>Speech at 130 WPM</td>
                    <td className="py-2.5 px-4" style={{color:'var(--text-muted)'}}>N/A</td>
                    <td className="py-2.5 px-4" style={{color:'var(--text-muted)'}}>154 min speaking</td>
                  </tr>
                  <tr style={{borderBottom:'1px solid var(--border-subtle)'}}>
                    <td className="py-2.5 px-4 font-medium" style={{color:'var(--text-primary)'}}>Speech at 150 WPM (conversational)</td>
                    <td className="py-2.5 px-4" style={{color:'var(--text-muted)'}}>N/A</td>
                    <td className="py-2.5 px-4" style={{color:'var(--text-muted)'}}>133 min speaking</td>
                  </tr>
                  <tr style={{borderBottom:'1px solid var(--border-subtle)'}}>
                    <td className="py-2.5 px-4 font-medium" style={{color:'var(--text-primary)'}}>Handwritten</td>
                    <td className="py-2.5 px-4" style={{color:'var(--text-muted)'}}>114.3 pages</td>
                    <td className="py-2.5 px-4" style={{color:'var(--text-muted)'}}>84 min read</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{color:'var(--text-primary)'}}>How Long Does It Take to Write 20 000 Words?</h2>
            <p className="leading-relaxed mb-3" style={{color:'var(--text-muted)'}}>At an average typing speed of 40 words per minute, the raw typing time for 20 000 words is about 500 minutes. But typing is not writing. Research, outlining, drafting, and editing bring the total time to roughly 40.0 hours for polished content.</p>
            <p className="leading-relaxed mb-3" style={{color:'var(--text-muted)'}}>Professional copywriters typically produce 1,000-2,000 polished words per day. Academic writers average 500-1,000 new words per day. At those rates, a 20 000-word piece takes 2-6 weeks of focused work.</p>
            <p className="leading-relaxed" style={{color:'var(--text-muted)'}}>AI writing tools can generate 20 000 words in seconds, but the output requires substantial editing for accuracy, voice, and originality. Most content marketers in 2026 use AI for first drafts and outlines, then spend the bulk of their time revising. The editing phase typically takes as long as the drafting phase, regardless of whether AI was involved.</p>
          </section>

        </div>
      <Footer />
    </>
  )
}
