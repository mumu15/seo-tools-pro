import Header from '../../../components/Header'
import AdUnit from '../../components/AdUnit'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import FaqSchema from '../../../components/FaqSchema'

export const metadata = {
  title: 'How Many Characters in a Tweet? (Twitter/X Limits 2026)',
  description: 'Everything about Twitter X character limits in 2026. Standard tweets, replies, DMs, bios, display names and Twitter Blue/Premium limits explained.',
}

const faqs = [
  {
    "q": "How many characters is a tweet in 2026?",
    "a": "Standard Twitter/X accounts can post up to 280 characters. X Premium (formerly Twitter Blue) subscribers can post up to 25,000 characters."
  },
  {
    "q": "Do spaces count in Twitter character limit?",
    "a": "Yes. Every space counts as one character in Twitter's character limit. Punctuation, emojis and special characters also count."
  },
  {
    "q": "How many characters does a URL take on Twitter?",
    "a": "Every URL on Twitter counts as exactly 23 characters regardless of how long the actual URL is. Twitter automatically shortens URLs."
  },
  {
    "q": "How many characters is a Twitter bio?",
    "a": "Twitter/X bios have a 160 character limit. Your display name can be up to 50 characters and your username up to 15 characters."
  },
  {
    "q": "How many characters can a Twitter DM be?",
    "a": "Twitter Direct Messages can be up to 10,000 characters. This is much longer than a standard tweet."
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
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">How Many Characters in a Tweet? (Twitter/X Limits 2026)</h1>
          <p className="text-slate-400 text-sm mb-8">February 2026 · 5 min read</p>
          <div className="result-box mb-8 border-emerald-500/30">
            <h2 className="text-emerald-400 font-bold mb-3">Quick Answer</h2>
            <p className="text-white">A standard tweet is <strong>280 characters</strong>. Twitter/X Premium subscribers get <strong>25,000 characters</strong> for long posts. URLs always count as 23 characters regardless of length.</p>
          </div>
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Complete Twitter/X Character Limits 2026</h2>
              <p className="text-slate-400 leading-relaxed mb-4">Every element of Twitter/X has its own character limit. Here is the complete reference guide.</p>
              <div className="result-box mb-4">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead><tr className="border-b" style={{borderColor:'rgba(52,211,153,0.1)'}}><th className="text-left text-slate-400 py-2 pr-4">Element</th><th className="text-left text-slate-400 py-2 pr-4">Character Limit</th></tr></thead>
                    <tbody>
                      <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}><td className="text-white py-2 pr-4">Standard Tweet</td><td className="text-slate-300 py-2 pr-4">280 characters</td></tr>
                      <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}><td className="text-white py-2 pr-4">X Premium Post</td><td className="text-slate-300 py-2 pr-4">25,000 characters</td></tr>
                      <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}><td className="text-white py-2 pr-4">Direct Message (DM)</td><td className="text-slate-300 py-2 pr-4">10,000 characters</td></tr>
                      <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}><td className="text-white py-2 pr-4">Profile Bio</td><td className="text-slate-300 py-2 pr-4">160 characters</td></tr>
                      <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}><td className="text-white py-2 pr-4">Display Name</td><td className="text-slate-300 py-2 pr-4">50 characters</td></tr>
                      <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}><td className="text-white py-2 pr-4">Username (@handle)</td><td className="text-slate-300 py-2 pr-4">15 characters</td></tr>
                      <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}><td className="text-white py-2 pr-4">URL (any link)</td><td className="text-slate-300 py-2 pr-4">23 characters</td></tr>
                      <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}><td className="text-white py-2 pr-4">Tweet reply</td><td className="text-slate-300 py-2 pr-4">280 characters</td></tr>
                      <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}><td className="text-white py-2 pr-4">Hashtag</td><td className="text-slate-300 py-2 pr-4">Counts toward 280</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">How to Write Powerful Tweets Under 280 Characters</h2>
              <p className="text-slate-400 leading-relaxed mb-4">The 280 character limit forces clarity. Start with the most important information. Use numbers and specific facts rather than vague claims. Eliminate filler words like "very" "really" and "just". Use line breaks to create visual rhythm. Save 20-30 characters for a hashtag or call to action. The best tweets often use only 100-150 characters — leaving room feels intentional and confident.</p>
            </section>
            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Emoji and Special Characters on Twitter</h2>
              <p className="text-slate-400 leading-relaxed mb-4">Emojis count as two characters each on Twitter due to Unicode encoding. Some special characters like accented letters also count as two characters. If you are close to the limit and using emojis remember to account for this. Twitter's character counter in the compose box is the most accurate guide.</p>
            </section>
            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Count Your Tweet Characters Free</h2>
              <p className="text-slate-400 leading-relaxed mb-4">Use our free character counter to check your tweet length before posting. See character counts for all major platforms.</p>
              <a href="/character-counter" className="btn-primary inline-block px-6 py-3">Count Characters Free →</a>
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
            <Link href="/twitter-thread-counter" className="text-emerald-400 hover:underline text-sm">Twitter Thread Counter</Link>
            <Link href="/blog/how-many-hashtags-to-use" className="text-emerald-400 hover:underline text-sm">How Many Hashtags to Use</Link>
              </div>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
