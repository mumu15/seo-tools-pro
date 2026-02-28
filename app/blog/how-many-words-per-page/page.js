import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import FaqSchema from '../../../components/FaqSchema'

export const metadata = {
  title: 'How Many Words Per Page? Complete Guide (2024)',
  description: 'Find out exactly how many words per page for any font, font size and spacing. Includes double spaced, single spaced and common essay formats.',
}

const faqs = [
  { q: "How many words is a double spaced page?", a: "A double spaced page with 12pt Times New Roman font contains approximately 250-275 words. With 12pt Arial it is approximately 270-300 words." },
  { q: "How many pages is 1000 words double spaced?", a: "1000 words double spaced with 12pt Times New Roman is approximately 4 pages. With Arial or Calibri it may be slightly fewer pages." },
  { q: "How many words is a single spaced page?", a: "A single spaced page contains approximately 500-550 words with 12pt Times New Roman and standard 1 inch margins." },
  { q: "How many pages is 500 words?", a: "500 words is approximately 2 pages double spaced or 1 page single spaced with 12pt font and standard margins." },
  { q: "How many pages is 2000 words?", a: "2000 words is approximately 8 pages double spaced or 4 pages single spaced with 12pt font." },
]

export default function HowManyWordsPerPage() {
  return (
    <>
      <FaqSchema faqs={faqs} />
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/blog" className="text-emerald-400 text-sm hover:underline">← Back to Blog</Link>
        </div>
        <article>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">How Many Words Per Page? Complete Guide (2024)</h1>
          <p className="text-slate-400 text-sm mb-8">Updated January 2024 · 8 min read</p>

          <div className="result-box mb-8 border-emerald-500/30">
            <h2 className="text-emerald-400 font-bold mb-3">Quick Answer</h2>
            <p className="text-white">A standard double spaced page contains <strong>250-275 words</strong> with 12pt Times New Roman. A single spaced page contains <strong>500-550 words</strong>.</p>
          </div>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Words Per Page by Font and Spacing</h2>
              <p className="text-slate-400 leading-relaxed">The number of words per page depends on four main factors: font type, font size, line spacing and margins. Here are the most common combinations used in academic and professional writing.</p>
              <div className="result-box mt-4">
                <h3 className="text-white font-bold mb-3">Double Spaced (Standard Essay Format)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead><tr className="border-b" style={{borderColor:"rgba(52,211,153,0.1)"}}><th className="text-left text-slate-400 py-2 pr-4">Font</th><th className="text-left text-slate-400 py-2 pr-4">Size</th><th className="text-left text-emerald-400 py-2">Words Per Page</th></tr></thead>
                    <tbody>
                      {[["Times New Roman","12pt","250-275"],["Arial","12pt","270-300"],["Calibri","11pt","290-310"],["Courier New","12pt","220-240"],["Georgia","12pt","250-270"]].map((r,i) => (
                        <tr key={i} className="border-b" style={{borderColor:"rgba(52,211,153,0.05)"}}><td className="text-white py-2 pr-4">{r[0]}</td><td className="text-slate-400 py-2 pr-4">{r[1]}</td><td className="text-slate-300 py-2">{r[2]}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="result-box mt-4">
                <h3 className="text-white font-bold mb-3">Single Spaced</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead><tr className="border-b" style={{borderColor:"rgba(52,211,153,0.1)"}}><th className="text-left text-slate-400 py-2 pr-4">Font</th><th className="text-left text-slate-400 py-2 pr-4">Size</th><th className="text-left text-emerald-400 py-2">Words Per Page</th></tr></thead>
                    <tbody>
                      {[["Times New Roman","12pt","500-550"],["Arial","12pt","550-600"],["Calibri","11pt","580-620"],["Courier New","12pt","440-480"]].map((r,i) => (
                        <tr key={i} className="border-b" style={{borderColor:"rgba(52,211,153,0.05)"}}><td className="text-white py-2 pr-4">{r[0]}</td><td className="text-slate-400 py-2 pr-4">{r[1]}</td><td className="text-slate-300 py-2">{r[2]}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Word Count to Pages Conversion Table</h2>
              <p className="text-slate-400 leading-relaxed mb-4">Use this quick reference table to convert any word count to pages. These estimates are based on 12pt Times New Roman with standard 1 inch margins.</p>
              <div className="result-box">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead><tr className="border-b" style={{borderColor:"rgba(52,211,153,0.1)"}}><th className="text-left text-slate-400 py-2 pr-4">Word Count</th><th className="text-left text-emerald-400 py-2 pr-4">Double Spaced</th><th className="text-left text-emerald-400 py-2">Single Spaced</th></tr></thead>
                    <tbody>
                      {[["250 words","1 page","½ page"],["500 words","2 pages","1 page"],["750 words","3 pages","1½ pages"],["1000 words","4 pages","2 pages"],["1500 words","6 pages","3 pages"],["2000 words","8 pages","4 pages"],["2500 words","10 pages","5 pages"],["3000 words","12 pages","6 pages"],["5000 words","20 pages","10 pages"],["10000 words","40 pages","20 pages"]].map((r,i) => (
                        <tr key={i} className="border-b" style={{borderColor:"rgba(52,211,153,0.05)"}}><td className="text-white py-2 pr-4">{r[0]}</td><td className="text-slate-300 py-2 pr-4">{r[1]}</td><td className="text-slate-300 py-2">{r[2]}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Common Assignment Word Counts</h2>
              <p className="text-slate-400 leading-relaxed mb-4">Here are common academic assignments and their approximate page counts.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {title:"High School Essay",words:"500-800 words",pages:"2-3 pages double spaced"},
                  {title:"College Essay",words:"1000-1500 words",pages:"4-6 pages double spaced"},
                  {title:"Research Paper",words:"3000-5000 words",pages:"12-20 pages double spaced"},
                  {title:"Master's Thesis",words:"15000-25000 words",pages:"60-100 pages"},
                  {title:"PhD Dissertation",words:"80000-100000 words",pages:"200-300 pages"},
                  {title:"Short Story",words:"1000-7500 words",pages:"4-30 pages"},
                ].map((item,i) => (
                  <div key={i} className="stat-card">
                    <h3 className="text-white font-bold mb-1">{item.title}</h3>
                    <p className="text-emerald-400 text-sm">{item.words}</p>
                    <p className="text-slate-500 text-xs mt-1">{item.pages}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">What Affects Words Per Page?</h2>
              <p className="text-slate-400 leading-relaxed mb-4">Several factors affect how many words fit on a page. Understanding these will help you format your document correctly.</p>
              <div className="space-y-4">
                {[
                  {title:"Font Type",desc:"Serif fonts like Times New Roman are slightly more compact than sans-serif fonts like Arial. Monospace fonts like Courier New have the fewest words per page."},
                  {title:"Font Size",desc:"The standard academic font size is 12pt. Every point increase or decrease significantly changes the words per page. A 10pt font fits around 25% more words than 12pt."},
                  {title:"Line Spacing",desc:"Double spacing is standard for most academic papers. Single spacing fits twice as many words per page. 1.5 spacing falls in between."},
                  {title:"Margins",desc:"Standard margins are 1 inch on all sides. Wider margins mean fewer words per page. Some professors require 1.5 inch margins which significantly reduces the word count per page."},
                  {title:"Paragraph Spacing",desc:"Extra spacing between paragraphs reduces words per page. Some word processors add extra space after each paragraph by default."},
                ].map((item,i) => (
                  <div key={i} className="result-box">
                    <h3 className="text-white font-bold mb-2">{item.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Use Our Free Words Per Page Calculator</h2>
              <p className="text-slate-400 leading-relaxed mb-4">Instead of estimating, use our free calculator to get an exact word count to pages conversion based on your specific font, font size and spacing settings.</p>
              <Link href="/words-per-page" className="btn-primary inline-block px-6 py-3">Try the Words Per Page Calculator →</Link>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq,i) => (
                  <div key={i} className="result-box">
                    <h3 className="text-white font-bold mb-2">{faq.q}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
