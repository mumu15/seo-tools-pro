import Header from '../../../components/Header'
import AdUnit from '../../components/AdUnit'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import FaqSchema from '../../../components/FaqSchema'

export const metadata = {
  title: 'How to Write a Twitter Thread That Goes Viral (2026 Guide)',
  description: 'Learn how to write engaging Twitter threads that get shared and go viral. Includes tips on structure, length, hooks and content strategy.',
}

const faqs = [
  { q: 'How long should a Twitter thread be?', a: 'The ideal Twitter thread length is 5-15 tweets. The most viral threads are often 7-10 tweets that deliver clear value in each tweet.' },
  { q: 'How do you start a Twitter thread?', a: 'Start with a strong hook tweet that promises value and creates curiosity. Use numbers, surprising facts or bold claims to hook readers.' },
  { q: 'What makes a Twitter thread go viral?', a: 'Viral threads deliver genuine value, have a strong hook, one idea per tweet and end with a clear call to action.' },
  { q: 'Should I number my tweets in a thread?', a: 'Yes. Numbering your tweets helps readers track their progress and signals your thread has structure and thought behind it.' },
  { q: 'What is the character limit for Twitter?', a: 'Each tweet has a limit of 280 characters. URLs count as 23 characters regardless of actual length.' },
]

export default function Post() {
  return (
    <>
      <FaqSchema faqs={faqs} />
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8"><Link href="/blog" className="text-emerald-400 text-sm hover:underline">← Back to Blog</Link></div>
        <article>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">How to Write a Twitter Thread That Goes Viral (2026)</h1>
          <p className="text-slate-400 text-sm mb-8">Updated February 2026 · 9 min read</p>
          <div className="result-box mb-8 border-emerald-500/30">
            <h2 className="text-emerald-400 font-bold mb-3">Quick Answer</h2>
            <p className="text-white">Write a <strong>strong hook</strong> first tweet, keep each tweet to <strong>one idea</strong>, number your tweets, aim for <strong>7-10 tweets</strong> and end with a <strong>call to action</strong>.</p>
          </div>
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Anatomy of a Viral Twitter Thread</h2>
              <div className="space-y-3">
                {[
                  {part:'Tweet 1 — The Hook',desc:'Your most important tweet. Must stop the scroll and make people want to read more. Use a bold claim, surprising stat or promise of value.'},
                  {part:'Tweets 2-N — The Value',desc:'Each tweet delivers one clear piece of value. One idea per tweet. Use line breaks for white space. Keep it easy to read on mobile.'},
                  {part:'Second to Last — The Build Up',desc:'Signal you are wrapping up and build anticipation. This reduces drop off before your call to action.'},
                  {part:'Last Tweet — Call to Action',desc:'Ask for a retweet, follow or reply. This is your best chance to convert readers into followers.'},
                ].map((item,i)=>(
                  <div key={i} className="result-box"><h3 className="text-emerald-400 font-bold mb-2">{item.part}</h3><p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p></div>
                ))}
              </div>
            </section>
            <AdUnit slot="3248634657" />

      <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">5 Thread Writing Tips</h2>
              <div className="space-y-3">
                {[
                  {title:'One idea per tweet',desc:'Never cram two ideas into one tweet. If it is getting long split it into two separate tweets.'},
                  {title:'Use line breaks',desc:'Twitter is mobile-first. Large blocks of text look terrible. Use line breaks to create white space.'},
                  {title:'Number your tweets',desc:'Always number them (1/, 2/, 3/). This creates structure and encourages people to read to the end.'},
                  {title:'Keep under 250 characters',desc:'Aim for 200-250 characters even though the limit is 280. Shorter tweets are easier to read on mobile.'},
                  {title:'Write the whole thread first',desc:'Write all tweets before posting the first one. This ensures the narrative flows well throughout.'},
                ].map((item,i)=>(
                  <div key={i} className="result-box"><h3 className="text-white font-bold mb-2">{item.title}</h3><p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p></div>
                ))}
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Plan Your Thread Free</h2>
              <p className="text-slate-400 leading-relaxed mb-4">Use our free Twitter thread counter to check character counts for every tweet before posting.</p>
              <Link href="/twitter-thread-counter" className="btn-primary inline-block px-6 py-3">Try the Thread Counter Free →</Link>
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