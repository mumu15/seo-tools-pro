import Link from 'next/link'
import { ArticleSchema } from '../../../components/AuthorSchema'
import Header from './././components/Header'
import Footer from './././components/Footer'
import AdUnit from '././components/AdUnit'
import FaqSchema from './././components/FaqSchema'

export const metadata = {
  title: 'Twitter/X Character Limit 2026: Everything You Need to Know | WordCounterTool.net',
  description: 'Twitter/X character limit is 280 for free users, 25,000 for Premium. Complete guide to all Twitter limits in 2026.',
  alternates: { canonical: 'https://www.wordcountertool.net/blog/twitter-character-limit-2026' },
}

const faqs = [{"q":"What is the Twitter character limit in 2026?","a":"Free Twitter/X users have a 280-character limit per tweet. Premium subscribers can post up to 25,000 characters. DMs allow 10,000 characters for all users."},{"q":"What is the optimal tweet length?","a":"The optimal tweet length for engagement is 71-100 characters. Shorter tweets get more retweets and likes because they are easier to consume while scrolling."},{"q":"Do spaces and emojis count as characters?","a":"Yes, spaces count as 1 character each. Most emojis count as 2 characters. URLs are automatically shortened to 23 characters regardless of actual length. Mentions (@username) count toward the character limit."}]

export default function Post() {
  return (
    <>
      <FaqSchema faqs={faqs} />
      <Header />
      <main className="min-h-screen bg-slate-950 text-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="mb-6"><Link href="/blog" className="text-emerald-400 text-sm hover:underline">← Back to Blog</Link></div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Twitter/X Character Limit 2026: Everything You Need to Know</h1>
          <p className="text-slate-500 text-sm mb-8">Updated 2026-03-21 · 8 min read</p>

          <div className="bg-slate-800/40 border border-emerald-500/20 rounded-2xl p-6 mb-8">
            <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2">Quick Answer</p>
            <p className="text-white text-lg leading-relaxed">Twitter/X allows 280 characters for free users and up to 25,000 characters for Premium subscribers. The optimal tweet length for engagement is 71-100 characters. DMs allow 10,000 characters. Usernames: 15 characters. Display names: 50 characters.</p>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4 mt-10">All Twitter/X Character Limits (2026)</h2>
          <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 mb-8 overflow-x-auto">
            <table className="w-full text-sm">
              <thead><tr className="border-b" style={{borderColor:'rgba(52,211,153,0.2)'}}>
                <th className="text-left text-emerald-400 py-3 pr-4 font-semibold text-xs uppercase">Content</th><th className="text-left text-emerald-400 py-3 pr-4 font-semibold text-xs uppercase">Free Users</th><th className="text-left text-emerald-400 py-3 pr-4 font-semibold text-xs uppercase">Premium Users</th>
              </tr></thead>
              <tbody>
                <tr className="border-b" style={{borderColor:"rgba(52,211,153,0.05)"}}><td className="text-white font-medium py-3 pr-4 text-sm">Tweet</td><td className="text-slate-300 py-3 pr-4 text-sm">280 characters</td><td className="text-slate-300 py-3 pr-4 text-sm">25,000 characters</td></tr>
                <tr className="border-b" style={{borderColor:"rgba(52,211,153,0.05)"}}><td className="text-white font-medium py-3 pr-4 text-sm">Reply</td><td className="text-slate-300 py-3 pr-4 text-sm">280 characters</td><td className="text-slate-300 py-3 pr-4 text-sm">25,000 characters</td></tr>
                <tr className="border-b" style={{borderColor:"rgba(52,211,153,0.05)"}}><td className="text-white font-medium py-3 pr-4 text-sm">DM</td><td className="text-slate-300 py-3 pr-4 text-sm">10,000 characters</td><td className="text-slate-300 py-3 pr-4 text-sm">10,000 characters</td></tr>
                <tr className="border-b" style={{borderColor:"rgba(52,211,153,0.05)"}}><td className="text-white font-medium py-3 pr-4 text-sm">Bio</td><td className="text-slate-300 py-3 pr-4 text-sm">160 characters</td><td className="text-slate-300 py-3 pr-4 text-sm">160 characters</td></tr>
                <tr className="border-b" style={{borderColor:"rgba(52,211,153,0.05)"}}><td className="text-white font-medium py-3 pr-4 text-sm">Username</td><td className="text-slate-300 py-3 pr-4 text-sm">15 characters</td><td className="text-slate-300 py-3 pr-4 text-sm">15 characters</td></tr>
                <tr className="border-b" style={{borderColor:"rgba(52,211,153,0.05)"}}><td className="text-white font-medium py-3 pr-4 text-sm">Display name</td><td className="text-slate-300 py-3 pr-4 text-sm">50 characters</td><td className="text-slate-300 py-3 pr-4 text-sm">50 characters</td></tr>
                <tr className="border-b" style={{borderColor:"rgba(52,211,153,0.05)"}}><td className="text-white font-medium py-3 pr-4 text-sm">List name</td><td className="text-slate-300 py-3 pr-4 text-sm">25 characters</td><td className="text-slate-300 py-3 pr-4 text-sm">25 characters</td></tr>
                <tr className="border-b" style={{borderColor:"rgba(52,211,153,0.05)"}}><td className="text-white font-medium py-3 pr-4 text-sm">List description</td><td className="text-slate-300 py-3 pr-4 text-sm">100 characters</td><td className="text-slate-300 py-3 pr-4 text-sm">100 characters</td></tr>
              </tbody>
            </table>
          </div>

          <AdUnit slot="3248634657" />

          <h2 className="text-2xl font-bold text-white mb-4 mt-10">Optimal Tweet Length for Engagement</h2>
          <p className="text-slate-400 text-base leading-relaxed mb-4">Despite the 280-character limit, shorter tweets consistently outperform longer ones. Data from multiple studies shows that tweets between 71-100 characters get the highest engagement rates. This length is enough to make a complete point but short enough to be absorbed in a single glance while scrolling.</p>
          <p className="text-slate-400 text-base leading-relaxed mb-4">Tweets under 50 characters can feel incomplete or low-effort. Tweets over 200 characters see declining engagement because they require more mental processing. The exception is thread-starting tweets, where a compelling 200-280 character hook drives people to read the full thread.</p>
          <p className="text-slate-400 text-base leading-relaxed mb-4">For businesses and brands, tweets with a clear call to action perform best at 100-120 characters — enough for the message plus a link or hashtag. Leave room for others to quote-retweet with their own commentary by staying under 200 characters.</p>

          <h2 className="text-2xl font-bold text-white mb-4 mt-10">Twitter Premium: Is 25,000 Characters Worth It?</h2>
          <p className="text-slate-400 text-base leading-relaxed mb-4">Twitter Premium (formerly Twitter Blue) expanded the character limit to 25,000 — essentially turning tweets into blog posts. However, most successful Premium users still keep individual tweets short and use the extended limit only for specific use cases: detailed analysis, thread alternatives, and long-form reactions.</p>
          <p className="text-slate-400 text-base leading-relaxed mb-4">The 25,000-character limit works best as a thread replacement. Instead of a 15-tweet thread, you can post a single long-form tweet. However, long tweets show a truncated preview with a "Show more" button — most users do not click. Threads still tend to get more engagement because each tweet in a thread is a separate engagement opportunity.</p>
          <p className="text-slate-400 text-base leading-relaxed mb-4">Use our character counter to optimize your tweet length before posting. Even with the expanded limit, concise writing wins on Twitter. Every character should earn its place.</p>

          <div className="bg-gradient-to-r from-emerald-900/30 to-teal-900/20 border border-emerald-500/30 rounded-2xl p-6 mb-8 text-center">
            <p className="text-white font-semibold text-lg mb-2">Try It Free</p>
            <p className="text-slate-400 text-sm mb-4">Paste your text for instant word count, reading time, and readability score</p>
            <a href="/word-counter" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-8 py-3 rounded-xl transition-colors">Open Word Counter →</a>
          </div>

          <AdUnit slot="3763639977" />

          <h2 className="text-2xl font-bold text-white mb-4 mt-10">Frequently Asked Questions</h2>
          <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 mb-8">
            {faqs.map((faq, i) => (
              <div key={i} className={i < faqs.length - 1 ? "border-b pb-4 mb-4" : "pb-2"} style={{borderColor:'rgba(52,211,153,0.08)'}}>
                <h3 className="text-white font-semibold mb-2 text-sm">{faq.q}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">Related Tools and Guides</h2>
          <div className="flex flex-wrap gap-2">
            <a href="/character-counter" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Character Counter</a>
            <a href="/character-limits/twitter" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Twitter Limits</a>
            <a href="/twitter-thread-counter" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Thread Counter</a>
            <a href="/blog/how-many-characters-in-a-tweet" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Characters in a Tweet</a>
            <a href="/blog/how-to-write-twitter-thread" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Twitter Thread Guide</a>
          </div>
        </div>
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Article","headline":"Twitter/X Character Limit 2026: Everything You Need to Know","author":{"@type":"Organization","name":"WordCounterTool.net"},"datePublished":"2026-03-21"})}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.wordcountertool.net"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.wordcountertool.net/blog"},{"@type":"ListItem","position":3,"name":"Twitter/X Character Limit 2026","item":"https://www.wordcountertool.net/blog/twitter-character-limit-2026"}]})}} />
      <Footer />
    </>
  )
}
