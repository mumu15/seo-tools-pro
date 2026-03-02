import Header from '../../../components/Header'
import AdUnit from '../../components/AdUnit'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import FaqSchema from '../../../components/FaqSchema'

export const metadata = {
  title: 'How Many Words in a Novel? Word Counts for Every Genre',
  description: 'Discover the average word count for novels, short stories, novellas and more. Complete guide to word counts for every genre.',
}

const faqs = [
  { q: 'How many words is a novel?', a: 'A standard novel is 70,000-100,000 words. Literary fiction tends to run 80,000-110,000 words while thrillers and romance are typically 70,000-90,000 words.' },
  { q: 'How many words is a short story?', a: 'A short story is typically 1,000-7,500 words. Flash fiction is under 1,000 words. A novella is 17,500-40,000 words.' },
  { q: 'How many words is Harry Potter?', a: "Harry Potter and the Philosopher's Stone is approximately 77,000 words. The entire series is over 1 million words." },
  { q: 'How long does it take to write a novel?', a: 'Most authors take 6 months to 2 years to write a first draft. At 1000 words per day it takes approximately 70-100 days.' },
  { q: 'What is the minimum word count for a novel?', a: 'Most publishers require at least 50,000-60,000 words. The standard minimum for major publishers is 70,000 words.' },
]

export default function Post() {
  return (
    <>
      <FaqSchema faqs={faqs} />
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8"><Link href="/blog" className="text-emerald-400 text-sm hover:underline">← Back to Blog</Link></div>
        <article>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">How Many Words in a Novel? Word Counts for Every Genre</h1>
          <p className="text-slate-400 text-sm mb-8">Updated February 2026 · 8 min read</p>
          <div className="result-box mb-8 border-emerald-500/30">
            <h2 className="text-emerald-400 font-bold mb-3">Quick Answer</h2>
            <p className="text-white">A standard novel is <strong>70,000-100,000 words</strong>. Short stories are <strong>1,000-7,500 words</strong>. Novellas are <strong>17,500-40,000 words</strong>.</p>
          </div>
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Word Count by Format</h2>
              <div className="result-box">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead><tr className="border-b" style={{borderColor:'rgba(52,211,153,0.1)'}}><th className="text-left text-slate-400 py-2 pr-4">Format</th><th className="text-left text-emerald-400 py-2">Word Count</th></tr></thead>
                    <tbody>
                      {[['Flash Fiction','Under 1,000'],['Short Story','1,000-7,500'],['Novelette','7,500-17,500'],['Novella','17,500-40,000'],['Short Novel','40,000-70,000'],['Standard Novel','70,000-100,000'],['Long Novel','100,000-150,000'],['Epic Novel','150,000+']].map((r,i)=>(
                        <tr key={i} className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}><td className="text-white py-2 pr-4">{r[0]}</td><td className="text-slate-300 py-2">{r[1]}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
            <AdUnit slot="3248634657" />

      <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Word Count by Genre</h2>
              <div className="space-y-3">
                {[
                  {genre:'Literary Fiction',range:'80,000-110,000'},
                  {genre:'Mystery / Thriller',range:'70,000-90,000'},
                  {genre:'Romance',range:'70,000-90,000'},
                  {genre:'Science Fiction / Fantasy',range:'90,000-120,000'},
                  {genre:'Young Adult',range:'60,000-90,000'},
                  {genre:'Middle Grade',range:'20,000-55,000'},
                ].map((item,i)=>(
                  <div key={i} className="result-box flex justify-between items-center">
                    <h3 className="text-white font-bold">{item.genre}</h3>
                    <div className="text-emerald-400 font-bold text-sm">{item.range}</div>
                  </div>
                ))}
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Track Your Novel Word Count</h2>
              <p className="text-slate-400 leading-relaxed mb-4">Use our free word counter to track your daily writing progress toward your novel word count goal.</p>
              <Link href="/word-counter" className="btn-primary inline-block px-6 py-3">Count Your Words Free →</Link>
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