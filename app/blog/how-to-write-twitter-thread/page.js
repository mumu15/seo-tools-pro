import Header from '../../../components/Header'
import { ArticleSchema } from '../../components/AuthorSchema'
import AdUnit from '../../components/AdUnit'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import FaqSchema from '../../../components/FaqSchema'

export const metadata = {
  alternates: { canonical: 'https://www.wordcountertool.net/blog/how-to-write-twitter-thread' },
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
          <p className="text-slate-400 text-sm mb-8">Published January 2026 · Updated April 2026 · 9 min read</p>
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
          {/* Infographic */}
          <div className="my-8 rounded-xl overflow-hidden border border-slate-800">
            <img src="/images/blog/how-to-write-twitter-thread.svg" alt="How To Write Twitter Thread — key data" width={680} height={450} className="w-full h-auto" loading="lazy" />
          </div>

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

          {/* MID_AD */}
          <AdUnit slot="3248634657" />

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Plan Your Thread Free</h2>
              <p className="text-slate-400 leading-relaxed mb-4">A Twitter thread counter can check character counts for every tweet before posting.</p>
              <Link href="/twitter-thread-counter" className="btn-primary inline-block px-6 py-3">Try the Thread Counter Free →</Link>
            </section>
            
          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-4">Thread Structure That Gets Engagement</h2>
            <div className="space-y-3">
              <div className="result-box"><h3 className="text-white font-bold mb-2">Tweet 1: The Hook</h3><p className="text-slate-400 text-sm leading-relaxed">Your first tweet determines whether anyone reads the rest. Use a bold claim, surprising statistic, or question that creates curiosity. "I analyzed 10,000 tweets and found the 7 patterns that every viral thread follows:" is irresistible. Never start with "Thread:" or "1/" — that is the fastest way to get scrolled past.</p></div>
              <div className="result-box"><h3 className="text-white font-bold mb-2">Tweets 2-8: The Value</h3><p className="text-slate-400 text-sm leading-relaxed">Each tweet should contain exactly one idea. Use line breaks for readability. Include specific examples, data, or stories. Number your points if listing tips ("3. Use data in every claim"). Avoid filler tweets — every tweet must earn its place in the thread.</p></div>
              <div className="result-box"><h3 className="text-white font-bold mb-2">Last Tweet: The CTA</h3><p className="text-slate-400 text-sm leading-relaxed">End with a clear call to action. "Follow me for more [topic] threads" or "Retweet the first tweet to help others find this." The most effective threads ask a question at the end to drive replies, which boosts the thread in the algorithm.</p></div>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-4">Thread Length and Timing</h2>
            <p className="text-slate-400 leading-relaxed mb-4"><strong className="text-white">Ideal length:</strong> 5-15 tweets is the sweet spot. Under 5 tweets feels too short to call a thread. Over 15 tweets sees significant drop-off in engagement. The most viral threads tend to be 7-10 tweets — enough to provide real value without losing readers.</p>
            <p className="text-slate-400 leading-relaxed mb-4"><strong className="text-white">Best posting times:</strong> Tuesday through Thursday, 8-10 AM in your target audience timezone. Threads posted on weekday mornings get 2-3x more engagement than weekend or evening threads. The reason is simple — people scroll Twitter/X during their morning routine and commute.</p>
            <p className="text-slate-400 leading-relaxed mb-4"><strong className="text-white">Pre-write your threads:</strong> Never write threads in real-time. Draft them in a notes app, edit for clarity and conciseness, then post. Real-time threads often have typos, poor pacing, and unnecessary tweets. The best thread writers spend 30-60 minutes crafting a thread before posting.</p>
          </section>
          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-4">Formatting Tips for Maximum Readability</h2>
            <p className="text-slate-400 leading-relaxed mb-4">Use line breaks between sentences within a tweet. Single-sentence tweets stand out in timelines. Emojis as bullet points increase readability and engagement. Bold statements at the start of each tweet hook scanners. Never use more than 250 characters per tweet even though the limit is 280 — leave room for quote retweets.</p>
            <p className="text-slate-400 leading-relaxed mb-4">Include images, charts, or screenshots every 3-4 tweets. Visual tweets get 2x more engagement than text-only tweets. Infographics, data visualizations, and annotated screenshots are the most-saved tweet formats. Use our character counter to make sure each tweet fits within limits.</p>
          </section>
          <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Frequently Asked Questions</h2>
              <div className="space-y-4">{faqs.map((faq,i)=>(<div key={i} className="result-box"><h3 className="text-white font-bold mb-2">{faq.q}</h3><p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p></div>))}</div>
            
          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-4">What most guides get wrong</h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">Most writing advice reads like it was assembled by committee. "Be clear and concise." "Know your audience." Sure. But that is the starting line, not the finish.</p>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">What actually moves the needle is specificity. Not "write a compelling intro" but "start with a number, a question, or a bold claim that your reader can disagree with." Not "use keywords naturally" but "put your target phrase in the first 100 words, the last paragraph, and one H2."</p>
            <p className="text-slate-400 text-sm leading-relaxed">The gap between good-enough writing and writing that performs well is smaller than people think. A few mechanical fixes — shorter paragraphs, stronger verbs, removing filler — close most of the gap. The rest is just practice and feedback loops.</p>
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
            <a href="/twitter-thread-counter" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Thread Counter</a>
            <a href="/character-counter" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Character Counter</a>
            <a href="/character-limits/twitter" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Twitter Limits</a>
            <a href="/word-counter" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Word Counter</a>
          </div>
        </div>
      <Footer />
    </>
  )
}