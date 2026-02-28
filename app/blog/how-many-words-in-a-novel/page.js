import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import FaqSchema from '../../../components/FaqSchema'

export const metadata = {
  title: 'How Many Words in a Novel? Word Counts for Every Genre',
  description: 'Discover the average word count for novels, short stories, novellas and more. Complete guide to word counts for every genre.',
}

const faqs = [
  { q: "How many words is a novel?", a: "A standard novel is 70,000-100,000 words. Literary fiction tends to run longer at 80,000-110,000 words while genre fiction like thrillers and romance are typically 70,000-90,000 words." },
  { q: "How many words is a short story?", a: "A short story is typically 1,000-7,500 words. Flash fiction is under 1,000 words. A novelette is 7,500-17,500 words and a novella is 17,500-40,000 words." },
  { q: "How many words is Harry Potter?", a: "Harry Potter and the Philosopher's Stone is approximately 77,000 words. The entire Harry Potter series is over 1 million words with The Order of the Phoenix being the longest at around 257,000 words." },
  { q: "How long does it take to write a novel?", a: "Most authors take 6 months to 2 years to write a first draft. At 1000 words per day it would take approximately 70-100 days to write a first draft of a standard novel." },
  { q: "What is the minimum word count for a novel?", a: "Publishers generally consider anything over 40,000 words a novel, though most require at least 50,000-60,000 words. The standard minimum for most major publishers is 70,000 words." },
]

export default function HowManyWordsInANovel() {
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
              <h2 className="text-2xl font-display font-bold text-white mb-4">Word Count by Fiction Format</h2>
              <div className="result-box">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead><tr className="border-b" style={{borderColor:"rgba(52,211,153,0.1)"}}><th className="text-left text-slate-400 py-2 pr-4">Format</th><th className="text-left text-emerald-400 py-2">Word Count</th></tr></thead>
                    <tbody>
                      {[
                        ["Flash Fiction","Under 1,000 words"],
                        ["Short Story","1,000 – 7,500 words"],
                        ["Novelette","7,500 – 17,500 words"],
                        ["Novella","17,500 – 40,000 words"],
                        ["Short Novel","40,000 – 70,000 words"],
                        ["Standard Novel","70,000 – 100,000 words"],
                        ["Long Novel","100,000 – 150,000 words"],
                        ["Epic Novel","150,000+ words"],
                      ].map((r,i) => (
                        <tr key={i} className="border-b" style={{borderColor:"rgba(52,211,153,0.05)"}}><td className="text-white py-2 pr-4">{r[0]}</td><td className="text-slate-300 py-2">{r[1]}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Word Count by Genre</h2>
              <p className="text-slate-400 leading-relaxed mb-4">Different genres have different expected word counts. Publishing industry standards vary by genre and knowing the right range is important if you are submitting to agents or publishers.</p>
              <div className="space-y-3">
                {[
                  {genre:"Literary Fiction",range:"80,000 – 110,000 words",note:"Can run longer if the prose justifies it"},
                  {genre:"Mystery / Thriller",range:"70,000 – 90,000 words",note:"Pacing is key — keep it tight"},
                  {genre:"Romance",range:"70,000 – 90,000 words",note:"Category romance 50,000-60,000 words"},
                  {genre:"Science Fiction / Fantasy",range:"90,000 – 120,000 words",note:"World building requires more words"},
                  {genre:"Young Adult (YA)",range:"60,000 – 90,000 words",note:"Upper YA can reach 100,000 words"},
                  {genre:"Middle Grade",range:"20,000 – 55,000 words",note:"Ages 8-12, shorter is better"},
                  {genre:"Children's Picture Books",range:"500 – 1,000 words",note:"Less is more for young readers"},
                  {genre:"Horror",range:"70,000 – 100,000 words",note:"Atmosphere requires space to build"},
                  {genre:"Historical Fiction",range:"90,000 – 110,000 words",note:"Research and detail add length"},
                  {genre:"Non-Fiction",range:"50,000 – 80,000 words",note:"Depends heavily on subject matter"},
                ].map((item,i) => (
                  <div key={i} className="result-box flex justify-between items-center">
                    <div>
                      <h3 className="text-white font-bold">{item.genre}</h3>
                      <p className="text-slate-500 text-xs mt-1">{item.note}</p>
                    </div>
                    <div className="text-emerald-400 font-bold text-sm text-right">{item.range}</div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Famous Novel Word Counts</h2>
              <div className="result-box">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead><tr className="border-b" style={{borderColor:"rgba(52,211,153,0.1)"}}><th className="text-left text-slate-400 py-2 pr-4">Novel</th><th className="text-left text-emerald-400 py-2">Word Count</th></tr></thead>
                    <tbody>
                      {[
                        ["The Great Gatsby","47,094"],
                        ["The Hunger Games","99,750"],
                        ["Harry Potter and the Philosopher's Stone","77,325"],
                        ["Lord of the Rings (full trilogy)","576,459"],
                        ["Gone with the Wind","418,053"],
                        ["War and Peace","580,000"],
                        ["Crime and Punishment","211,591"],
                        ["To Kill a Mockingbird","100,388"],
                      ].map((r,i) => (
                        <tr key={i} className="border-b" style={{borderColor:"rgba(52,211,153,0.05)"}}><td className="text-white py-2 pr-4">{r[0]}</td><td className="text-slate-300 py-2">{r[1]}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">How Long Does It Take to Write a Novel?</h2>
              <p className="text-slate-400 leading-relaxed mb-4">At a consistent daily writing pace here is how long it would take to complete a first draft.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {pace:"500 words/day",time80k:"160 days (5.3 months)",time100k:"200 days (6.7 months)"},
                  {pace:"1000 words/day",time80k:"80 days (2.7 months)",time100k:"100 days (3.3 months)"},
                  {pace:"2000 words/day",time80k:"40 days (1.3 months)",time100k:"50 days (1.7 months)"},
                ].map((item,i) => (
                  <div key={i} className="stat-card">
                    <div className="text-emerald-400 font-bold mb-2">{item.pace}</div>
                    <p className="text-slate-400 text-xs">80k novel: {item.time80k}</p>
                    <p className="text-slate-400 text-xs">100k novel: {item.time100k}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Track Your Word Count</h2>
              <p className="text-slate-400 leading-relaxed mb-4">Use our free word counter to track your daily writing progress and see how close you are to your novel word count goal.</p>
              <Link href="/word-counter" className="btn-primary inline-block px-6 py-3">Count Your Words Free →</Link>
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
