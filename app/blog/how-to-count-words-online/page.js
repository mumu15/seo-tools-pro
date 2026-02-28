import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import FaqSchema from '../../../components/FaqSchema'

export const metadata = {
  title: 'How to Count Words Online: The Complete Free Guide (2026)',
  description: 'Learn how to count words online for essays, blog posts, social media and more. Discover the best free word counting tools and tips.',
}

const faqs = [
  { q: "How do I count words online for free?", a: "Use a free online word counter tool. Paste or type your text and it instantly shows your word count, character count, sentence count, reading time and more. WordCounterTool.net is a free option with no sign up required." },
  { q: "How do I count words in Microsoft Word?", a: "In Microsoft Word, the word count is displayed in the bottom status bar. You can also go to Review > Word Count for detailed statistics including words, characters, paragraphs and lines." },
  { q: "How do I count words in Google Docs?", a: "In Google Docs, go to Tools > Word Count or press Ctrl+Shift+C (Windows) or Cmd+Shift+C (Mac). You can also enable the word count display at the bottom of the document." },
  { q: "Do spaces count as characters?", a: "It depends on the tool. Most word counters offer both character count with spaces and without spaces. For social media limits like Twitter's 280 characters, spaces do count." },
  { q: "What should my essay word count be?", a: "High school essays are typically 500-800 words. College essays are 1000-1500 words. Research papers are 3000-5000 words. Always check your assignment requirements as these vary significantly by teacher and institution." },
]

export default function HowToCountWordsOnline() {
  return (
    <>
      <FaqSchema faqs={faqs} />
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8"><Link href="/blog" className="text-emerald-400 text-sm hover:underline">← Back to Blog</Link></div>
        <article>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">How to Count Words Online: The Complete Free Guide</h1>
          <p className="text-slate-400 text-sm mb-8">Updated February 2026 · 7 min read</p>

          <div className="result-box mb-8 border-emerald-500/30">
            <h2 className="text-emerald-400 font-bold mb-3">Quick Answer</h2>
            <p className="text-white">The easiest way to count words online is to <strong>paste your text into a free word counter tool</strong>. It instantly shows word count, character count, sentence count, reading time and more — no sign up required.</p>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Why Count Words?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {title:"Essays and Academic Work",desc:"Most academic assignments have required word counts. Counting words ensures you meet minimum requirements and do not exceed maximum limits."},
                  {title:"Blog Posts and SEO",desc:"Word count is important for SEO. Knowing your word count helps you hit the optimal length for your target keyword and audience."},
                  {title:"Social Media",desc:"Each platform has character limits. Twitter has 280 characters per tweet. Instagram captions have a 2200 character limit. LinkedIn posts have a 3000 character limit."},
                  {title:"Professional Writing",desc:"Freelance writers are often paid per word. Journalists have strict word limits. Knowing your exact word count is essential for professional writing work."},
                  {title:"Reading Time",desc:"Knowing your word count lets you calculate reading time. Adding reading time to blog posts improves reader engagement and reduces bounce rate."},
                  {title:"NaNoWriMo",desc:"National Novel Writing Month challenges writers to write 50000 words in November. Tracking daily word count is essential to hitting the goal."},
                ].map((item,i) => (
                  <div key={i} className="stat-card">
                    <h3 className="text-white font-bold mb-2">{item.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">How to Count Words in Different Applications</h2>
              <div className="space-y-4">
                {[
                  {app:"Microsoft Word",steps:["The word count is shown in the bottom left status bar","Go to Review tab and click Word Count for full statistics","Select specific text to count words in just that selection","Use Ctrl+Shift+G to open the word count dialog quickly"]},
                  {app:"Google Docs",steps:["Go to Tools menu and select Word Count","Press Ctrl+Shift+C on Windows or Cmd+Shift+C on Mac","Check the box to display word count while typing","Select text first to count words in a specific section only"]},
                  {app:"Apple Pages",steps:["Go to View menu and select Show Word Count","The word count appears at the bottom of the document","Click the word count to toggle between words and characters","Select text to count words in a specific section"]},
                  {app:"Any Platform — Online Tool",steps:["Copy your text from any application","Open a free word counter tool in your browser","Paste your text into the text box","See instant word count, character count, reading time and more"]},
                ].map((item,i) => (
                  <div key={i} className="result-box">
                    <h3 className="text-white font-bold mb-3">{item.app}</h3>
                    <ul className="space-y-1">
                      {item.steps.map((step,j) => (
                        <li key={j} className="text-slate-400 text-sm flex items-start gap-2"><span className="text-emerald-400">→</span>{step}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Common Word Count Requirements</h2>
              <div className="result-box">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead><tr className="border-b" style={{borderColor:"rgba(52,211,153,0.1)"}}><th className="text-left text-slate-400 py-2 pr-4">Type of Writing</th><th className="text-left text-emerald-400 py-2">Typical Word Count</th></tr></thead>
                    <tbody>
                      {[
                        ["Tweet","Up to 280 characters (~50 words)"],
                        ["Instagram Caption","Up to 2200 characters (~400 words)"],
                        ["High School Essay","500-800 words"],
                        ["College Application Essay","250-650 words"],
                        ["Standard Blog Post","1000-2500 words"],
                        ["Research Paper","3000-8000 words"],
                        ["Short Story","1000-7500 words"],
                        ["Novella","17500-40000 words"],
                        ["Novel","70000-100000 words"],
                      ].map((r,i) => (
                        <tr key={i} className="border-b" style={{borderColor:"rgba(52,211,153,0.05)"}}><td className="text-white py-2 pr-4">{r[0]}</td><td className="text-slate-300 py-2">{r[1]}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Count Your Words Free Now</h2>
              <p className="text-slate-400 leading-relaxed mb-4">Use our free word counter to instantly count words, characters, sentences and paragraphs in any text. No sign up, no downloads, completely free.</p>
              <Link href="/word-counter" className="btn-primary inline-block px-6 py-3">Count Words Free Now →</Link>
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
