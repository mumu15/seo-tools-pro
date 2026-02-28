import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import FaqSchema from '../../../components/FaqSchema'

export const metadata = {
  title: 'How to Write a Twitter Thread That Goes Viral (2024 Guide)',
  description: 'Learn how to write engaging Twitter threads that get shared and go viral. Includes tips on structure, length, hooks and content strategy.',
}

const faqs = [
  { q: "How long should a Twitter thread be?", a: "The ideal Twitter thread length is 5-15 tweets. Threads longer than 15 tweets see significant drop off in engagement. The most viral threads are often 7-10 tweets that deliver clear value in each tweet." },
  { q: "How do you start a Twitter thread?", a: "Start with a strong hook tweet that promises value and creates curiosity. The first tweet determines whether people read the rest. Use numbers, surprising facts or bold claims to hook readers." },
  { q: "What makes a Twitter thread go viral?", a: "Viral threads deliver genuine value, have a strong hook, are easy to read with one idea per tweet, end with a clear call to action, and get shared by people with large followings. Topics that educate, inspire or strongly agree with an audience's beliefs tend to go viral." },
  { q: "Should I number my tweets in a thread?", a: "Yes. Numbering your tweets (1/, 2/, 3/) helps readers know where they are in the thread and signals that the thread has structure and thought behind it. It also encourages people to read to the end." },
  { q: "What is the character limit for Twitter?", a: "Each tweet in a thread has a limit of 280 characters. Twitter Blue subscribers get 25,000 characters per tweet. URLs count as 23 characters regardless of length." },
]

export default function HowToWriteTwitterThread() {
  return (
    <>
      <FaqSchema faqs={faqs} />
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8"><Link href="/blog" className="text-emerald-400 text-sm hover:underline">← Back to Blog</Link></div>
        <article>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">How to Write a Twitter Thread That Goes Viral</h1>
          <p className="text-slate-400 text-sm mb-8">Updated February 2026 · 9 min read</p>

          <div className="result-box mb-8 border-emerald-500/30">
            <h2 className="text-emerald-400 font-bold mb-3">Quick Answer</h2>
            <p className="text-white">Write a <strong>strong hook</strong> first tweet, keep each tweet to <strong>one idea</strong>, number your tweets, aim for <strong>7-10 tweets</strong>, and end with a <strong>clear call to action</strong>.</p>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">The Anatomy of a Viral Twitter Thread</h2>
              <div className="space-y-3">
                {[
                  {part:"Tweet 1 — The Hook",desc:"Your most important tweet. Must stop the scroll and make people want to read more. Use a bold claim, surprising statistic, or promise of value. Example: '7 things I wish I knew before starting my business (a thread):'"},
                  {part:"Tweets 2-N — The Value",desc:"Each tweet delivers one clear piece of value. One idea per tweet. Short paragraphs. Easy to read. Use line breaks to create white space. Each tweet should be valuable enough to stand alone."},
                  {part:"Second to Last Tweet — The Build Up",desc:"Signal that you are wrapping up and build anticipation for the final point. This reduces drop off before the call to action."},
                  {part:"Last Tweet — The Call to Action",desc:"Ask for a retweet, follow, reply or link to related content. The last tweet is your best chance to convert readers into followers or drive traffic to your site."},
                ].map((item,i) => (
                  <div key={i} className="result-box">
                    <h3 className="text-emerald-400 font-bold mb-2">{item.part}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">10 Hook Formulas That Get Clicks</h2>
              <div className="space-y-2">
                {[
                  "I [achieved result] in [timeframe]. Here is exactly how (a thread):",
                  "[Number] things nobody tells you about [topic]:",
                  "The [topic] advice I wish someone gave me [timeframe] ago:",
                  "I spent [time/money] learning [topic]. Here is everything I learned:",
                  "[Surprising fact about topic]. Here is what this means for you:",
                  "Most people [do common thing wrong]. Here is the right way:",
                  "I interviewed [number] [experts]. Here are the [number] lessons that kept coming up:",
                  "The [topic] framework that changed how I [outcome]:",
                  "[Bold claim]. Here is the evidence:",
                  "Stop [common mistake]. Do this instead:",
                ].map((hook,i) => (
                  <div key={i} className="result-box flex items-start gap-3">
                    <span className="text-emerald-400 font-bold text-sm min-w-6">{i+1}.</span>
                    <p className="text-slate-300 text-sm italic">"{hook}"</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Twitter Thread Writing Tips</h2>
              <div className="space-y-3">
                {[
                  {title:"One idea per tweet",desc:"Never cram two ideas into one tweet. If you find yourself writing a long tweet, split it into two. Each tweet should be able to stand alone as a valuable insight."},
                  {title:"Use line breaks",desc:"Twitter is a mobile-first platform. Large blocks of text look terrible on mobile. Use line breaks to create white space and make your tweets easy to scan."},
                  {title:"Number your tweets",desc:"Always number your tweets (1/, 2/, 3/). This creates structure, helps readers track their progress and signals that the thread is organized and thought through."},
                  {title:"Keep under 250 characters",desc:"Aim for 200-250 characters per tweet even though the limit is 280. Shorter tweets are easier to read on mobile and leave room for quote tweets."},
                  {title:"Write the thread before posting",desc:"Write your entire thread before posting the first tweet. This ensures the narrative flows well and every tweet adds value. Use our Twitter thread counter to check character counts."},
                ].map((item,i) => (
                  <div key={i} className="result-box">
                    <h3 className="text-white font-bold mb-2">{item.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Plan Your Thread With Our Free Counter</h2>
              <p className="text-slate-400 leading-relaxed mb-4">Use our free Twitter thread counter to plan your thread before posting. Write each tweet separated by a blank line and instantly see the character count for each tweet and whether any are over the limit.</p>
              <Link href="/twitter-thread-counter" className="btn-primary inline-block px-6 py-3">Try the Thread Counter Free →</Link>
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
