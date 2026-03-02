import Header from '../../../components/Header'
import AdUnit from '../../../components/AdUnit'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import FaqSchema from '../../../components/FaqSchema'

export const metadata = {
  title: 'How to Count Words Online: The Complete Free Guide (2026)',
  description: 'Learn how to count words online for essays, blog posts, social media and more. Discover the best free word counting tools and tips.',
}

const faqs = [
  { q: 'How do I count words online for free?', a: 'Use a free online word counter tool. Paste or type your text and it instantly shows your word count, character count, sentence count and reading time. WordCounterTool.net is completely free with no sign up.' },
  { q: 'How do I count words in Microsoft Word?', a: 'The word count is displayed in the bottom status bar. Go to Review then Word Count for detailed statistics.' },
  { q: 'How do I count words in Google Docs?', a: 'Go to Tools then Word Count or press Ctrl+Shift+C on Windows or Cmd+Shift+C on Mac.' },
  { q: 'Do spaces count as characters?', a: 'It depends on the tool. Most counters offer both character count with and without spaces. For Twitter spaces do count.' },
  { q: 'What should my essay word count be?', a: 'High school essays are 500-800 words. College essays are 1000-1500 words. Research papers are 3000-5000 words.' },
]

export default function Post() {
  return (
    <>
      <FaqSchema faqs={faqs} />
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8"><Link href="/blog" className="text-emerald-400 text-sm hover:underline">← Back to Blog</Link></div>
        <article>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">How to Count Words Online: The Complete Free Guide (2026)</h1>
          <p className="text-slate-400 text-sm mb-8">Updated February 2026 · 7 min read</p>
          <div className="result-box mb-8 border-emerald-500/30">
            <h2 className="text-emerald-400 font-bold mb-3">Quick Answer</h2>
            <p className="text-white">The easiest way is to <strong>paste your text into a free word counter</strong>. It instantly shows word count, character count, sentence count and reading time — no sign up required.</p>
          </div>
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">How to Count Words in Any Application</h2>
              <div className="space-y-3">
                {[
                  {app:'Free Online Word Counter',steps:['Copy your text from anywhere','Open WordCounterTool.net in your browser','Paste your text into the box','See instant word count character count and reading time']},
                  {app:'Microsoft Word',steps:['Word count shown in the bottom left status bar','Go to Review then Word Count for full statistics','Select specific text first to count only that section']},
                  {app:'Google Docs',steps:['Go to Tools then Word Count','Press Ctrl+Shift+C on Windows or Cmd+Shift+C on Mac','Select text first to count a specific section only']},
                ].map((item,i)=>(
                  <div key={i} className="result-box">
                    <h3 className="text-white font-bold mb-3">{item.app}</h3>
                    <ul className="space-y-1">{item.steps.map((step,j)=>(<li key={j} className="text-slate-400 text-sm flex items-start gap-2"><span className="text-emerald-400">→</span>{step}</li>))}</ul>
                  </div>
                ))}
              </div>
            </section>
            <AdUnit slot="3248634657" />

      <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Common Word Count Requirements</h2>
              <div className="result-box">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead><tr className="border-b" style={{borderColor:'rgba(52,211,153,0.1)'}}><th className="text-left text-slate-400 py-2 pr-4">Type of Writing</th><th className="text-left text-emerald-400 py-2">Word Count</th></tr></thead>
                    <tbody>
                      {[['Tweet','Up to ~50 words'],['High School Essay','500-800 words'],['College Essay','250-650 words'],['Blog Post','1000-2500 words'],['Research Paper','3000-8000 words'],['Novel','70,000-100,000 words']].map((r,i)=>(
                        <tr key={i} className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}><td className="text-white py-2 pr-4">{r[0]}</td><td className="text-slate-300 py-2">{r[1]}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Count Your Words Free Now</h2>
              <p className="text-slate-400 leading-relaxed mb-4">Instantly count words, characters, sentences and paragraphs in any text. No sign up, no downloads, completely free.</p>
              <Link href="/word-counter" className="btn-primary inline-block px-6 py-3">Count Words Free Now →</Link>
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