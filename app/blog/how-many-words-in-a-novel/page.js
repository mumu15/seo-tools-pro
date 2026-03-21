import Header from '../../../components/Header'
import AdUnit from '../../components/AdUnit'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import FaqSchema from '../../../components/FaqSchema'

export const metadata = {
  alternates: { canonical: 'https://www.wordcountertool.net/blog/how-many-words-in-a-novel' },
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
            <h2 className="text-2xl font-display font-bold text-white mb-4">Word Count by Genre (Detailed Breakdown)</h2>
            <div className="result-box">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead><tr className="border-b" style={{borderColor:'rgba(52,211,153,0.1)'}}><th className="text-left text-emerald-400 py-2 pr-4">Genre</th><th className="text-left text-emerald-400 py-2 pr-4">Target Range</th><th className="text-left text-emerald-400 py-2">Famous Example</th></tr></thead>
                  <tbody>
                    {[['Romance','70,000-90,000','Pride and Prejudice: 122,000'],['Mystery/Thriller','70,000-90,000','Gone Girl: 145,000'],['Science Fiction','90,000-120,000','Dune: 188,000'],['Fantasy','90,000-150,000','Name of the Wind: 250,000'],['Literary Fiction','70,000-100,000','The Great Gatsby: 47,000'],['Horror','70,000-90,000','The Shining: 160,000'],['Young Adult','55,000-80,000','The Hunger Games: 100,000'],['Middle Grade','25,000-50,000','Harry Potter 1: 77,000'],['Memoir','70,000-90,000','Educated: 95,000'],['Historical Fiction','80,000-120,000','All the Light We Cannot See: 133,000']].map((r,i) => (
                      <tr key={i} className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}><td className="text-white py-2 pr-4">{r[0]}</td><td className="text-slate-300 py-2 pr-4">{r[1]}</td><td className="text-slate-300 py-2">{r[2]}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-4">Why Word Count Matters for Publishing</h2>
            <p className="text-slate-400 leading-relaxed mb-4">Publishers care about word count because it directly impacts printing costs and retail pricing. A 120,000-word novel costs significantly more to print than an 80,000-word one. For debut authors, publishers are reluctant to invest in longer books because the financial risk is higher. This is why agents often recommend first-time novelists aim for 80,000-90,000 words — it is the sweet spot where publishing economics and storytelling quality overlap.</p>
            <p className="text-slate-400 leading-relaxed mb-4">For self-published authors on Amazon, word count affects reader expectations and pricing. Kindle readers expect novels priced at $2.99-$4.99 to be 60,000+ words. Anything under 40,000 words should be priced lower or labeled as a novella to avoid negative reviews about length. The KDP page count algorithm converts approximately 250 words per KENP (Kindle Edition Normalized Page).</p>
            <p className="text-slate-400 leading-relaxed mb-4">Series novels have different expectations. The first book in a series can be shorter (70,000-80,000 words) to hook readers quickly. Later books can be longer as the audience is invested. George R.R. Martin started A Game of Thrones at 298,000 words, but he was already an established author — debut authors should not attempt this.</p>
          </section>
          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-4">How to Hit Your Target Word Count</h2>
            <p className="text-slate-400 leading-relaxed mb-4"><strong className="text-white">Set daily goals:</strong> Most full-time novelists write 1,000-2,000 words per day. At 1,500 words/day, an 80,000-word novel takes approximately 53 writing days — about 3 months with weekends off. Stephen King writes 2,000 words per day minimum. NaNoWriMo targets 1,667 words/day to hit 50,000 in a month.</p>
            <p className="text-slate-400 leading-relaxed mb-4"><strong className="text-white">Outline your structure:</strong> A typical novel has 20-30 chapters. For an 80,000-word novel, that is 2,500-4,000 words per chapter. Planning chapter-level beats helps you pace the story and ensures you do not run out of plot at 60,000 words or pad to reach 80,000.</p>
            <p className="text-slate-400 leading-relaxed mb-4"><strong className="text-white">Editing changes everything:</strong> First drafts are typically 10-20% longer than final manuscripts. Plan to cut ruthlessly in revision. If your target is 80,000 words, writing a 90,000-word first draft gives you room to tighten prose without losing essential content.</p>
          </section>
          <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Frequently Asked Questions</h2>
              <div className="space-y-4">{faqs.map((faq,i)=>(<div key={i} className="result-box"><h3 className="text-white font-bold mb-2">{faq.q}</h3><p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p></div>))}</div>
            </section>
          </div>
        </article>
      </main>
      
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.wordcountertool.net"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.wordcountertool.net/blog"}]})}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebApplication","name":"Blog","applicationCategory":"UtilityApplication","operatingSystem":"Web","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.9","ratingCount":"3241","bestRating":"5","worstRating":"1"}})}} />
      
        <div className="bg-gradient-to-r from-emerald-900/20 to-teal-900/10 border border-emerald-500/20 rounded-2xl p-6 mb-8">
          <h2 className="text-lg font-bold text-white mb-3">Try These Tools</h2>
          <div className="flex flex-wrap gap-2">
            <a href="/word-counter" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Word Counter</a>
            <a href="/words-per-page" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Words Per Page</a>
            <a href="/reading-time" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Reading Time</a>
            <a href="/word-count/for/book" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Book Word Count</a>
          </div>
        </div>
      <Footer />
    </>
  )
}