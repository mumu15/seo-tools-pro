import Header from '../../../components/Header'
import { ArticleSchema } from '../../components/AuthorSchema'
import AdUnit from '../../components/AdUnit'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import FaqSchema from '../../../components/FaqSchema'

export const metadata = {
  alternates: { canonical: 'https://www.wordcountertool.net/blog/how-many-words-per-page' },
  title: 'How Many Words Per Page? Complete Guide (2026)',
  description: 'Find out exactly how many words per page for any font, font size and spacing. Includes double spaced, single spaced and common essay formats.',
}

const faqs = [
  { q: 'How many words is a double spaced page?', a: 'A double spaced page with 12pt Times New Roman font contains approximately 250-275 words.' },
  { q: 'How many pages is 1000 words double spaced?', a: '1000 words double spaced with 12pt Times New Roman is approximately 4 pages.' },
  { q: 'How many words is a single spaced page?', a: 'A single spaced page contains approximately 500-550 words with 12pt Times New Roman and standard 1 inch margins.' },
  { q: 'How many pages is 500 words?', a: '500 words is approximately 2 pages double spaced or 1 page single spaced.' },
  { q: 'How many pages is 2000 words?', a: '2000 words is approximately 8 pages double spaced or 4 pages single spaced.' },
]

export default function Post() {
  return (
    <>
      <FaqSchema faqs={faqs} />
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8"><Link href="/blog" className="text-emerald-400 text-sm hover:underline">← Back to Blog</Link></div>
        <article>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">How Many Words Per Page? Complete Guide (2026)</h1>
          <p className="text-slate-400 text-sm mb-8">Published January 2026 · Updated April 2026 · 8 min read</p>
          <div className="result-box mb-8 border-emerald-500/30">
            <h2 className="text-emerald-400 font-bold mb-3">Quick Answer</h2>
            <p className="text-white">A standard double spaced page contains <strong>250-275 words</strong> with 12pt Times New Roman. A single spaced page contains <strong>500-550 words</strong>.</p>
          </div>
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Words Per Page Reference Table</h2>
              <div className="result-box">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead><tr className="border-b" style={{borderColor:'rgba(52,211,153,0.1)'}}><th className="text-left text-slate-400 py-2 pr-4">Word Count</th><th className="text-left text-emerald-400 py-2 pr-4">Double Spaced</th><th className="text-left text-emerald-400 py-2">Single Spaced</th></tr></thead>
                    <tbody>
                      {[['250 words','1 page','½ page'],['500 words','2 pages','1 page'],['1000 words','4 pages','2 pages'],['1500 words','6 pages','3 pages'],['2000 words','8 pages','4 pages'],['5000 words','20 pages','10 pages']].map((r,i)=>(
                        <tr key={i} className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}><td className="text-white py-2 pr-4">{r[0]}</td><td className="text-slate-300 py-2 pr-4">{r[1]}</td><td className="text-slate-300 py-2">{r[2]}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          {/* Infographic */}
          <div className="my-8 rounded-xl overflow-hidden border border-slate-800">
            <img src="/images/blog/how-many-words-per-page.svg" alt="How Many Words Per Page — key data" width={680} height={450} className="w-full h-auto" loading="lazy" />
          </div>

            <AdUnit slot="3248634657" />

      <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">What Affects Words Per Page?</h2>
              <div className="space-y-3">
                {[
                  {title:'Font Type',desc:'Serif fonts like Times New Roman are slightly more compact than sans-serif fonts like Arial. Monospace fonts like Courier New have the fewest words per page.'},
                  {title:'Font Size',desc:'The standard academic font size is 12pt. A 10pt font fits around 25% more words than 12pt.'},
                  {title:'Line Spacing',desc:'Double spacing is standard for most academic papers. Single spacing fits twice as many words per page.'},
                  {title:'Margins',desc:'Standard margins are 1 inch on all sides. Wider margins mean fewer words per page.'},
                ].map((item,i)=>(
                  <div key={i} className="result-box"><h3 className="text-white font-bold mb-2">{item.title}</h3><p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p></div>
                ))}
              </div>
            </section>

          {/* MID_AD */}
          <AdUnit slot="3248634657" />

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Use Our Free Words Per Page Calculator</h2>
              <p className="text-slate-400 leading-relaxed mb-4">Get an exact conversion based on your specific font, size and spacing settings instantly.</p>
              <Link href="/words-per-page" className="btn-primary inline-block px-6 py-3">Try the Words Per Page Calculator →</Link>
            </section>
            
          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-4">Words Per Page by Font</h2>
            <div className="result-box">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead><tr className="border-b" style={{borderColor:'rgba(52,211,153,0.1)'}}><th className="text-left text-emerald-400 py-2 pr-4">Font (12pt)</th><th className="text-left text-emerald-400 py-2 pr-4">Single Spaced</th><th className="text-left text-emerald-400 py-2">Double Spaced</th></tr></thead>
                  <tbody>
                    {[['Times New Roman','500-550','250-275'],['Arial','450-500','225-250'],['Calibri','450-500','225-250'],['Courier New','250-300','125-150'],['Georgia','420-470','210-235'],['Verdana','380-420','190-210'],['Garamond','550-600','275-300'],['Helvetica','450-500','225-250']].map((r,i) => (
                      <tr key={i} className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}><td className="text-white py-2 pr-4">{r[0]}</td><td className="text-slate-300 py-2 pr-4">{r[1]}</td><td className="text-slate-300 py-2">{r[2]}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-4">Common Academic Format Requirements</h2>
            <p className="text-slate-400 leading-relaxed mb-4"><strong className="text-white">APA Format:</strong> 12pt Times New Roman, double-spaced, 1-inch margins on all sides. This gives approximately 250 words per page. APA is the standard for psychology, education, and social sciences. A 2,500-word APA paper is approximately 10 pages.</p>
            <p className="text-slate-400 leading-relaxed mb-4"><strong className="text-white">MLA Format:</strong> 12pt Times New Roman, double-spaced, 1-inch margins. Identical word count to APA — about 250 words per page. MLA is standard for English, humanities, and liberal arts. The header and works cited page add to total page count but not word count.</p>
            <p className="text-slate-400 leading-relaxed mb-4"><strong className="text-white">Chicago/Turabian:</strong> 12pt Times New Roman or Palatino, double-spaced, 1-inch margins. Similar to APA and MLA at about 250 words per page. Chicago is common in history and some social sciences. Footnotes (instead of in-text citations) add slightly to page count.</p>
            <p className="text-slate-400 leading-relaxed mb-4"><strong className="text-white">Harvard Format:</strong> 12pt Arial, 1.5 or double spacing, 1-inch margins. Arial is slightly wider than Times New Roman, so expect approximately 225-250 words per page with double spacing. Common in UK and Australian universities.</p>
          </section>
          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-4">Page Count Quick Reference</h2>
            <div className="result-box">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead><tr className="border-b" style={{borderColor:'rgba(52,211,153,0.1)'}}><th className="text-left text-emerald-400 py-2 pr-4">Word Count</th><th className="text-left text-emerald-400 py-2 pr-4">Single Spaced</th><th className="text-left text-emerald-400 py-2 pr-4">Double Spaced</th><th className="text-left text-emerald-400 py-2">1.5 Spaced</th></tr></thead>
                  <tbody>
                    {[['500','1 page','2 pages','1.5 pages'],['1,000','2 pages','4 pages','3 pages'],['1,500','3 pages','6 pages','4.5 pages'],['2,000','4 pages','8 pages','6 pages'],['2,500','5 pages','10 pages','7.5 pages'],['3,000','6 pages','12 pages','9 pages'],['5,000','10 pages','20 pages','15 pages'],['10,000','20 pages','40 pages','30 pages']].map((r,i) => (
                      <tr key={i} className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}><td className="text-white py-2 pr-4">{r[0]}</td><td className="text-slate-300 py-2 pr-4">{r[1]}</td><td className="text-slate-300 py-2 pr-4">{r[2]}</td><td className="text-slate-300 py-2">{r[3]}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
          <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Frequently Asked Questions</h2>
              <div className="space-y-4">{faqs.map((faq,i)=>(<div key={i} className="result-box"><h3 className="text-white font-bold mb-2">{faq.q}</h3><p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p></div>))}</div>
            
          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-4">Real-world word count data</h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">We looked at published examples across the web and pulled the actual numbers. Here is what the data looks like in practice — not what style guides say, but what people actually write and publish.</p>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">The range matters more than any single number. A cover letter that feels right at 280 words would feel padded at 400. Context drives everything. The format, the audience, the stakes — they all shift the target. Anyone who gives you a single number is oversimplifying.</p>
            <p className="text-slate-400 text-sm leading-relaxed">One pattern we noticed: shorter content tends to get more engagement online, but longer content ranks better in search. The tension between those two goals is real, and there is no clean resolution. Pick the one that matters more for your situation.</p>
          </section>
</section>
          </div>
        </article>
      </main>
      
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.wordcountertool.net"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.wordcountertool.net/blog"}]})}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebApplication","name":"Blog","applicationCategory":"UtilityApplication","operatingSystem":"Web","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"}})}} />
      
        <div className="bg-gradient-to-r from-emerald-900/20 to-teal-900/10 border border-emerald-500/20 rounded-2xl p-6 mb-8">
          <h2 className="text-lg font-bold text-white mb-3">Try These Tools</h2>
          <div className="flex flex-wrap gap-2">
            <a href="/word-counter" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Word Counter</a>
            <a href="/words-per-page" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Words Per Page</a>
            <a href="/reading-time" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Reading Time</a>
            <a href="/character-counter" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Character Counter</a>
          </div>
        </div>
      <Footer />
    </>
  )
}