import Header from '../../../components/Header'
import AdUnit from '../../components/AdUnit'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import FaqSchema from '../../../components/FaqSchema'

export const metadata = {
  alternates: { canonical: 'https://www.wordcountertool.net/blog/how-many-words-in-a-speech' },
  title: 'How Many Words in a 5, 10, 15 Minute Speech? (Word Count Calculator)',
  description: 'Find out exactly how many words you need for a 1, 5, 10, 15, 20 or 30 minute speech. Includes tips for pacing and delivery.',
}

const faqs = [
  {
    "q": "How many words is a 5 minute speech?",
    "a": "A 5 minute speech is approximately 650-750 words at an average speaking pace of 130-150 words per minute."
  },
  {
    "q": "How many words is a 10 minute speech?",
    "a": "A 10 minute speech is approximately 1,300-1,500 words at a normal speaking pace."
  },
  {
    "q": "How many words is a 20 minute speech?",
    "a": "A 20 minute speech is approximately 2,600-3,000 words. TED Talks are usually 18 minutes which equals about 2,400-2,700 words."
  },
  {
    "q": "How fast should I speak in a speech?",
    "a": "The ideal speaking pace for a formal speech is 120-150 words per minute. Slower for important points, faster for stories. Average conversational speed is 150-170 wpm."
  },
  {
    "q": "How long should a wedding speech be?",
    "a": "A wedding speech should be 3-5 minutes which equals 400-700 words. Anything over 7 minutes risks losing the audience's attention."
  }
]

export default function Post() {
  return (
    <>
      <FaqSchema faqs={faqs} />
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8"><Link href="/blog" className="text-emerald-400 text-sm hover:underline">← Back to Blog</Link></div>
        <article>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">How Many Words in a 5, 10, 15 Minute Speech? (Word Count Calculator)</h1>
          <p className="text-slate-400 text-sm mb-8">February 2026 · 5 min read</p>
          <div className="result-box mb-8 border-emerald-500/30">
            <h2 className="text-emerald-400 font-bold mb-3">Quick Answer</h2>
            <p className="text-white">The average speaker delivers <strong>130–150 words per minute</strong>. A 5-minute speech needs ~700 words. A 10-minute speech needs ~1,400 words. A 20-minute speech needs ~2,600 words.</p>
          </div>
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Speech Length Word Count Chart</h2>
              <p className="text-slate-400 leading-relaxed mb-4">Use this reference chart to calculate exactly how many words you need for any speech duration.</p>
              <div className="result-box mb-4">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead><tr className="border-b" style={{borderColor:'rgba(52,211,153,0.1)'}}><th className="text-left text-slate-400 py-2 pr-4">Duration</th><th className="text-left text-slate-400 py-2 pr-4">Slow (120 wpm)</th><th className="text-left text-slate-400 py-2 pr-4">Average (140 wpm)</th><th className="text-left text-slate-400 py-2 pr-4">Fast (160 wpm)</th></tr></thead>
                    <tbody>
                      <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}><td className="text-white py-2 pr-4">1 minute</td><td className="text-slate-300 py-2 pr-4">120 words</td><td className="text-slate-300 py-2 pr-4">140 words</td><td className="text-slate-300 py-2 pr-4">160 words</td></tr>
                      <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}><td className="text-white py-2 pr-4">2 minutes</td><td className="text-slate-300 py-2 pr-4">240 words</td><td className="text-slate-300 py-2 pr-4">280 words</td><td className="text-slate-300 py-2 pr-4">320 words</td></tr>
                      <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}><td className="text-white py-2 pr-4">5 minutes</td><td className="text-slate-300 py-2 pr-4">600 words</td><td className="text-slate-300 py-2 pr-4">700 words</td><td className="text-slate-300 py-2 pr-4">800 words</td></tr>
                      <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}><td className="text-white py-2 pr-4">10 minutes</td><td className="text-slate-300 py-2 pr-4">1,200 words</td><td className="text-slate-300 py-2 pr-4">1,400 words</td><td className="text-slate-300 py-2 pr-4">1,600 words</td></tr>
                      <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}><td className="text-white py-2 pr-4">15 minutes</td><td className="text-slate-300 py-2 pr-4">1,800 words</td><td className="text-slate-300 py-2 pr-4">2,100 words</td><td className="text-slate-300 py-2 pr-4">2,400 words</td></tr>
                      <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}><td className="text-white py-2 pr-4">20 minutes</td><td className="text-slate-300 py-2 pr-4">2,400 words</td><td className="text-slate-300 py-2 pr-4">2,800 words</td><td className="text-slate-300 py-2 pr-4">3,200 words</td></tr>
                      <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}><td className="text-white py-2 pr-4">30 minutes</td><td className="text-slate-300 py-2 pr-4">3,600 words</td><td className="text-slate-300 py-2 pr-4">4,200 words</td><td className="text-slate-300 py-2 pr-4">4,800 words</td></tr>
                      <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}><td className="text-white py-2 pr-4">45 minutes</td><td className="text-slate-300 py-2 pr-4">5,400 words</td><td className="text-slate-300 py-2 pr-4">6,300 words</td><td className="text-slate-300 py-2 pr-4">7,200 words</td></tr>
                      <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}><td className="text-white py-2 pr-4">60 minutes</td><td className="text-slate-300 py-2 pr-4">7,200 words</td><td className="text-slate-300 py-2 pr-4">8,400 words</td><td className="text-slate-300 py-2 pr-4">9,600 words</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">How to Time Your Speech Accurately</h2>
              <p className="text-slate-400 leading-relaxed mb-4">The biggest mistake speakers make is practicing at reading speed rather than speaking speed. Reading speed is 250-300 words per minute. Speaking speed with pauses, emphasis and audience reaction is 120-150 words per minute. Always practice your speech out loud with a timer. Record yourself to identify where you rush through important points. Add pause markers in your script to remind yourself to slow down.</p>
            </section>
            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Famous Speech Word Counts</h2>
              <p className="text-slate-400 leading-relaxed mb-4">Martin Luther King Jr's "I Have a Dream" speech was 1,667 words and lasted 17 minutes. Lincoln's Gettysburg Address was just 272 words and took under 3 minutes. Steve Jobs' 2005 Stanford commencement address was 2,246 words at 15 minutes. The shortest effective speeches are often the most memorable.</p>
            </section>
            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Calculate Your Speech Length Free</h2>
              <p className="text-slate-400 leading-relaxed mb-4">Paste your speech into our reading time calculator to see exactly how long it will take to deliver.</p>
              <a href="/reading-time" className="btn-primary inline-block px-6 py-3">Calculate Speech Length Free →</a>
            </section>

            <AdUnit slot="3248634657" />

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Frequently Asked Questions</h2>
              <div className="space-y-4">{faqs.map((faq,i)=>(<div key={i} className="result-box"><h3 className="text-white font-bold mb-2">{faq.q}</h3><p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p></div>))}</div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Related Tools</h2>
              <div className="flex flex-wrap gap-3">
                <Link href="/reading-time" className="text-emerald-400 hover:underline text-sm">Reading Time Calculator</Link>
            <Link href="/word-counter" className="text-emerald-400 hover:underline text-sm">Word Counter</Link>
            <Link href="/blog/average-reading-speed" className="text-emerald-400 hover:underline text-sm">Average Reading Speed</Link>
              </div>
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
            <a href="/words-per-minute" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Words Per Minute</a>
            <a href="/reading-time" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Reading Time</a>
            <a href="/word-count/for/speech" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Speech Word Count</a>
          </div>
        </div>
      <Footer />
    </>
  )
}
