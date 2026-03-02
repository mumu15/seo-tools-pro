import Header from '../../../components/Header'
import AdUnit from '../../../components/AdUnit'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import FaqSchema from '../../../components/FaqSchema'

export const metadata = {
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
          <p className="text-slate-400 text-sm mb-8">Updated February 2026 · 8 min read</p>
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
            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Use Our Free Words Per Page Calculator</h2>
              <p className="text-slate-400 leading-relaxed mb-4">Get an exact conversion based on your specific font, size and spacing settings instantly.</p>
              <Link href="/words-per-page" className="btn-primary inline-block px-6 py-3">Try the Words Per Page Calculator →</Link>
            </section>
            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Frequently Asked Questions</h2>
              <div className="space-y-4">{faqs.map((faq,i)=>(<div key={i} className="result-box"><h3 className="text-white font-bold mb-2">{faq.q}</h3><p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p></div>))}</div>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}