import Link from 'next/link'
import { ArticleSchema } from '../../../components/AuthorSchema'
import Header from './././components/Header'
import Footer from './././components/Footer'
import AdUnit from '././components/AdUnit'
import FaqSchema from './././components/FaqSchema'

export const metadata = {
  title: 'Google Ads Character Limits 2026: Every Ad Type Explained | WordCounterTool.net',
  description: 'Complete guide to Google Ads character limits in 2026. Headlines (30 chars), descriptions (90 chars), responsive ads, display ads, and Performance Max.',
  alternates: { canonical: 'https://www.wordcountertool.net/blog/google-ads-character-limits' },
}

const faqs = [{"q":"What is the Google Ads headline character limit?","a":"Google Ads headlines are limited to 30 characters each. Responsive search ads allow up to 15 headlines. Google tests different combinations to find the best performers."},{"q":"What is the Google Ads description character limit?","a":"Google Ads descriptions are limited to 90 characters each. Responsive search ads allow up to 4 descriptions. Front-load important information in case text is truncated."},{"q":"How many headlines should I write for responsive search ads?","a":"Write 10-15 headlines for best results. Google recommends at least 8. Include keyword-focused, benefit-focused, and CTA-focused variations. More headlines give Google more combinations to test."},{"q":"Do spaces count toward the character limit?","a":"Yes, spaces count as characters in Google Ads. A 30-character headline includes all letters, numbers, spaces, and punctuation. Use abbreviations and concise phrasing to maximize your character allowance."}]

export default function Post() {
  const st = {
    h2: 'text-2xl font-bold text-white mb-4 mt-10',
    h3: 'text-lg font-bold text-white mb-3 mt-8',
    p: 'text-slate-400 text-base leading-relaxed mb-4',
    th: 'text-left text-emerald-400 py-3 pr-4 font-semibold text-xs uppercase',
    td: 'text-slate-300 py-3 pr-4 text-sm',
    tdB: 'text-white font-medium py-3 pr-4 text-sm',
  }

  return (
    <>
      <FaqSchema faqs={faqs} />
      <Header />
      <main className="min-h-screen bg-slate-950 text-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="mb-6"><Link href="/blog" className="text-emerald-400 text-sm hover:underline">← Back to Blog</Link></div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Google Ads Character Limits 2026: Every Ad Type Explained</h1>
          <p className="text-slate-500 text-sm mb-8">Updated 2026-03-21 · 10 min read</p>

          <div className="bg-slate-800/40 border border-emerald-500/20 rounded-2xl p-6 mb-8">
            <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2">Quick Answer</p>
            <p className="text-white text-lg leading-relaxed">Google Ads headlines are limited to <strong>30 characters each</strong> (up to 15 headlines). Descriptions are <strong>90 characters each</strong> (up to 4 descriptions). Responsive search ads use multiple headlines and descriptions that Google mixes and matches for optimal performance.</p>
          </div>

          <h2 className={st.h2}>Google Ads Character Limits — Every Ad Type (2026)</h2>
          <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 mb-8 overflow-x-auto">
            <table className="w-full text-sm">
              <thead><tr className="border-b" style={{borderColor:'rgba(52,211,153,0.2)'}}>
                <th className={st.th}>Ad Component</th><th className={st.th}>Character Limit</th>
              </tr></thead>
              <tbody>
                <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                  <td className={st.tdB}>Headline (Responsive Search)</td><td className={st.td}>30 characters each (up to 15)</td>
                </tr>
                <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                  <td className={st.tdB}>Description (Responsive Search)</td><td className={st.td}>90 characters each (up to 4)</td>
                </tr>
                <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                  <td className={st.tdB}>Display URL Path</td><td className={st.td}>15 characters each (2 paths)</td>
                </tr>
                <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                  <td className={st.tdB}>Sitelink Title</td><td className={st.td}>25 characters</td>
                </tr>
                <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                  <td className={st.tdB}>Sitelink Description</td><td className={st.td}>35 characters each (2 lines)</td>
                </tr>
                <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                  <td className={st.tdB}>Callout Extension</td><td className={st.td}>25 characters</td>
                </tr>
                <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                  <td className={st.tdB}>Structured Snippet Values</td><td className={st.td}>25 characters each</td>
                </tr>
                <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                  <td className={st.tdB}>Call Ad Headline</td><td className={st.td}>30 characters</td>
                </tr>
                <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                  <td className={st.tdB}>Call Ad Description</td><td className={st.td}>90 characters</td>
                </tr>
                <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                  <td className={st.tdB}>Performance Max Headline</td><td className={st.td}>30 characters (up to 5)</td>
                </tr>
                <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                  <td className={st.tdB}>Performance Max Long Headline</td><td className={st.td}>90 characters</td>
                </tr>
                <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                  <td className={st.tdB}>Performance Max Description</td><td className={st.td}>90 characters (up to 5)</td>
                </tr>
                <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                  <td className={st.tdB}>YouTube Ad Headline</td><td className={st.td}>15 characters (overlay)</td>
                </tr>
                <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                  <td className={st.tdB}>YouTube Ad Description</td><td className={st.td}>70 characters</td>
                </tr>
              </tbody>
            </table>
          </div>

          <AdUnit slot="3248634657" />

          <h2 className={st.h2}>How to Write Google Ads Headlines That Convert</h2>
          <p className={st.p}>You have 30 characters to convince someone to click. Every character counts. The highest-performing headlines share three traits: they include the search keyword, they promise a specific benefit, and they create urgency. "Free Shipping Today Only" (24 chars) outperforms "Buy Products From Our Store" (28 chars) every time.</p>
          <p className={st.p}>Write at least 10-15 headline variations for responsive search ads. Google tests different combinations and learns which perform best for different queries. Include at least 3 headlines with your primary keyword, 3 with benefits, 3 with calls to action, and 2-3 with unique selling propositions.</p>

          <h2 className={st.h2}>Description Line Best Practices</h2>
          <p className={st.p}>Your 90-character descriptions should expand on the headline promise. Include specific numbers, social proof, and a clear call to action. "Join 50,000+ customers. Free trial, no credit card required. Start in 2 minutes." packs three compelling elements into 87 characters.</p>
          <p className={st.p}>Front-load the most important information. Google may truncate descriptions on mobile or in certain ad placements. If only the first 60 characters show, your core message must still be clear and compelling.</p>

          <h2 className={st.h2}>Performance Max vs Search Ads</h2>
          <p className={st.p}>Performance Max campaigns use the same character limits as responsive search ads but distribute across more placements (Search, Display, YouTube, Gmail, Discover, Maps). This means your copy must work across different contexts. A headline that works in Search may feel odd in a Display banner.</p>
          <p className={st.p}>For Performance Max, write headlines that make sense standalone (not dependent on search context). "Save 40% on Home Insurance" works everywhere. "Best Rates Near You" only makes sense in a search context.</p>

          <div className="bg-gradient-to-r from-emerald-900/30 to-teal-900/20 border border-emerald-500/30 rounded-2xl p-6 mb-8 text-center">
            <p className="text-white font-semibold text-lg mb-2">Try It Free — No Sign Up</p>
            <p className="text-slate-400 text-sm mb-4">Paste your text and get instant word count, reading time, and readability score.</p>
            <a href="/word-counter" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-8 py-3 rounded-xl transition-colors">Open Word Counter →</a>
          </div>

          <AdUnit slot="3763639977" />

          <h2 className={st.h2}>Frequently Asked Questions</h2>
          <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 mb-8">
            {faqs.map((faq, i) => (
              <div key={i} className={i < faqs.length-1 ? "border-b pb-4 mb-4" : "pb-2"} style={{borderColor:'rgba(52,211,153,0.08)'}}>
                <h3 className="text-white font-semibold mb-2 text-sm">{faq.q}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          <h2 className={st.h2}>Related Tools & Guides</h2>
          <div className="flex flex-wrap gap-2">
            <a href="/character-counter" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Character Counter</a>
            <a href="/word-counter" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Word Counter</a>
            <a href="/character-limits/google-ads" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Google Ads Limits</a>
            <a href="/blog/how-to-write-seo-title-tags" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">SEO Title Tags</a>
            <a href="/blog/how-to-write-meta-descriptions" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Meta Descriptions</a>
            <a href="/meta-tag-generator" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Meta Tag Generator</a>
          </div>
        </div>
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Article","headline":"Google Ads Character Limits 2026: Every Ad Type Explained","author":{"@type":"Organization","name":"WordCounterTool.net"},"publisher":{"@type":"Organization","name":"WordCounterTool.net"},"datePublished":"2026-03-21","dateModified":"2026-03-21"})}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.wordcountertool.net"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.wordcountertool.net/blog"},{"@type":"ListItem","position":3,"name":"Google Ads Character Limits 2026","item":"https://www.wordcountertool.net/blog/google-ads-character-limits"}]})}} />
      
        <div className="bg-gradient-to-r from-emerald-900/20 to-teal-900/10 border border-emerald-500/20 rounded-2xl p-6 mb-8">
          <h2 className="text-lg font-bold text-white mb-3">Try These Tools</h2>
          <div className="flex flex-wrap gap-2">
            <a href="/character-counter" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Character Counter</a>
            <a href="/character-limits/google-ads" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Google Ads Limits</a>
            <a href="/meta-tag-generator" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Meta Tag Generator</a>
          </div>
        </div>
      <Footer />
    </>
  )
}
