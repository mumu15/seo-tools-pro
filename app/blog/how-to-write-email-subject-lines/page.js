import Header from './././components/Header'
import { ArticleSchema } from '../../../components/AuthorSchema'
import AdUnit from '././components/AdUnit'
import Footer from './././components/Footer'
import Link from 'next/link'
import FaqSchema from './././components/FaqSchema'

export const metadata = {
  alternates: { canonical: 'https://www.wordcountertool.net/blog/how-to-write-email-subject-lines' },
  title: 'How to Write Email Subject Lines That Get Opened (2026)',
  description: 'Learn how to write email subject lines that boost open rates. Includes character limits, proven formulas and A/B testing tips for 2026.',
}

const faqs = [
  {
    "q": "How long should an email subject line be?",
    "a": "The ideal email subject line is 30-50 characters or 6-10 words. Mobile screens show about 30-40 characters so put the most important words first."
  },
  {
    "q": "What is a good email open rate?",
    "a": "Average email open rates vary by industry. The overall average is around 21%. Above 25% is good. Above 30% is excellent. Personalised subject lines can push rates to 35-40%."
  },
  {
    "q": "Do emoji in subject lines increase open rates?",
    "a": "In the right context yes. One relevant emoji can increase open rates by 5-10%. Avoid multiple emojis and never use them in formal or B2B contexts."
  },
  {
    "q": "What words should I avoid in email subject lines?",
    "a": "Avoid spam trigger words like Free, Click here, Buy now, Limited time offer, Act now and guaranteed. These trigger spam filters and reduce deliverability."
  },
  {
    "q": "Should I use the recipient's name in subject lines?",
    "a": "Yes. Personalised subject lines with the recipient's name get 26% higher open rates on average. Most email platforms support first name personalisation tokens."
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
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">How to Write Email Subject Lines That Get Opened (2026)</h1>
          <p className="text-slate-400 text-sm mb-8">February 2026 · 7 min read</p>
          <div className="result-box mb-8 border-emerald-500/30">
            <h2 className="text-emerald-400 font-bold mb-3">Quick Answer</h2>
            <p className="text-white">The ideal email subject line is <strong>30–50 characters</strong> (6–10 words). Subject lines with numbers get 57% higher open rates. Personalisation increases opens by 26%. Never use ALL CAPS or excessive exclamation marks.</p>
          </div>
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Email Subject Line Length by Device</h2>
              <p className="text-slate-400 leading-relaxed mb-4">Different email clients and devices show different amounts of the subject line. Design for the shortest limit.</p>
              <div className="result-box mb-4">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead><tr className="border-b" style={{borderColor:'rgba(52,211,153,0.1)'}}><th className="text-left text-slate-400 py-2 pr-4">Device / Client</th><th className="text-left text-slate-400 py-2 pr-4">Characters Visible</th></tr></thead>
                    <tbody>
                      <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}><td className="text-white py-2 pr-4">iPhone Mail</td><td className="text-slate-300 py-2 pr-4">35–38 characters</td></tr>
                      <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}><td className="text-white py-2 pr-4">Android Gmail</td><td className="text-slate-300 py-2 pr-4">30–35 characters</td></tr>
                      <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}><td className="text-white py-2 pr-4">Desktop Gmail</td><td className="text-slate-300 py-2 pr-4">70–80 characters</td></tr>
                      <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}><td className="text-white py-2 pr-4">Desktop Outlook</td><td className="text-slate-300 py-2 pr-4">60–70 characters</td></tr>
                      <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}><td className="text-white py-2 pr-4">Apple Watch</td><td className="text-slate-300 py-2 pr-4">15–18 characters</td></tr>
                      <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}><td className="text-white py-2 pr-4">Safe zone (all devices)</td><td className="text-slate-300 py-2 pr-4">30–40 characters</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          {/* Infographic */}
          <div className="my-8 rounded-xl overflow-hidden border border-slate-800">
            <img src="/images/blog/how-to-write-email-subject-lines.svg" alt="How To Write Email Subject Lines — key data" width={680} height={450} className="w-full h-auto" loading="lazy" />
          </div>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">10 Subject Line Formulas That Get Opened</h2>
              <p className="text-slate-400 leading-relaxed mb-4">Copy and adapt these proven formulas for your next email campaign.</p>
              <ul className="space-y-2 mb-4">
                <li className="text-slate-400 text-sm flex items-start gap-2"><span className="text-emerald-400 mt-1">→</span><span>Question: "Are you making this common writing mistake?"</span></li>
                <li className="text-slate-400 text-sm flex items-start gap-2"><span className="text-emerald-400 mt-1">→</span><span>How To: "How to write 1,000 words in 30 minutes"</span></li>
                <li className="text-slate-400 text-sm flex items-start gap-2"><span className="text-emerald-400 mt-1">→</span><span>Number List: "7 ways to improve your readability score today"</span></li>
                <li className="text-slate-400 text-sm flex items-start gap-2"><span className="text-emerald-400 mt-1">→</span><span>Personalised: "[First name], your content analysis is ready"</span></li>
                <li className="text-slate-400 text-sm flex items-start gap-2"><span className="text-emerald-400 mt-1">→</span><span>Curiosity gap: "The word count secret top bloggers don't share"</span></li>
                <li className="text-slate-400 text-sm flex items-start gap-2"><span className="text-emerald-400 mt-1">→</span><span>Urgency: "Last chance: free SEO tool access ends tonight"</span></li>
                <li className="text-slate-400 text-sm flex items-start gap-2"><span className="text-emerald-400 mt-1">→</span><span>Pain point: "Still getting low engagement? Here's why"</span></li>
                <li className="text-slate-400 text-sm flex items-start gap-2"><span className="text-emerald-400 mt-1">→</span><span>Social proof: "The tool 50,000 writers use every day"</span></li>
                <li className="text-slate-400 text-sm flex items-start gap-2"><span className="text-emerald-400 mt-1">→</span><span>Command: "Improve your writing score in 5 minutes"</span></li>
                <li className="text-slate-400 text-sm flex items-start gap-2"><span className="text-emerald-400 mt-1">→</span><span>News: "New: keyword density checker just launched"</span></li>
              </ul>
            </section>

          {/* MID_AD */}
          <AdUnit slot="3248634657" />

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Check Your Subject Line Length Free</h2>
              <p className="text-slate-400 leading-relaxed mb-4">A character counter can check your email subject line length before sending.</p>
              <a href="/character-counter" className="btn-primary inline-block px-6 py-3">Check Character Count Free →</a>
            </section>

            <AdUnit slot="3248634657" />

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Frequently Asked Questions</h2>
              <div className="space-y-4">{faqs.map((faq,i)=>(<div key={i} className="result-box"><h3 className="text-white font-bold mb-2">{faq.q}</h3><p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p></div>))}</div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Related Tools</h2>
              <div className="flex flex-wrap gap-3">
                <Link href="/character-counter" className="text-emerald-400 hover:underline text-sm">Character Counter</Link>
            <Link href="/blog/how-to-write-meta-descriptions" className="text-emerald-400 hover:underline text-sm">How to Write Meta Descriptions</Link>
            <Link href="/blog/how-to-write-headline-formulas" className="text-emerald-400 hover:underline text-sm">Headline Formulas That Get Clicks</Link>
              </div>
            
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
            <a href="/character-counter" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Character Counter</a>
            <a href="/word-counter" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Word Counter</a>
            <a href="/character-limits/email-subject-line" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Email Subject Limits</a>
          </div>
        </div>
      <Footer />
    </>
  )
}
