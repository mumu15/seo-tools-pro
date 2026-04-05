import Link from 'next/link'
import { ArticleSchema } from '../../../components/AuthorSchema'
import Header from './././components/Header'
import Footer from './././components/Footer'
import AdUnit from '././components/AdUnit'
import FaqSchema from './././components/FaqSchema'

export const metadata = {
  title: 'Email Length Best Practices: How Long Should an Email Be? (2026) | WordCounterTool.net',
  description: 'The ideal email length for business, marketing, cold outreach, and follow-ups. Data shows 50-125 words get the best response rates.',
  alternates: { canonical: 'https://www.wordcountertool.net/blog/email-length-best-practices' },
}

const faqs = [{"q":"How long should a business email be?","a":"A business email should be 75-150 words. This gives you enough room for context and a clear ask without overwhelming the reader. Aim to get your main point across in the first 2 sentences."},{"q":"How long should a cold outreach email be?","a":"Cold emails perform best at 50-100 words. The recipient does not know you, so every word must earn its place. Lead with relevance to them, state your value proposition, and close with a specific ask."},{"q":"How many words should an email subject line be?","a":"Email subject lines should be under 60 characters (6-10 words). Subject lines over 60 characters get truncated on mobile, which is where 60%+ of emails are opened. Front-load the most important words."},{"q":"Do longer emails get better responses?","a":"No — data consistently shows shorter emails (50-125 words) get higher response rates than longer ones. Emails over 200 words see declining response rates. Exception: detailed project briefs where context is necessary."}]

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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Email Length Best Practices: How Long Should an Email Be? (2026)</h1>
          <p className="text-slate-500 text-sm mb-8">Updated 2026-03-21 · 10 min read</p>

          <div className="bg-slate-800/40 border border-emerald-500/20 rounded-2xl p-6 mb-8">
            <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2">Quick Answer</p>
            <p className="text-white text-lg leading-relaxed">The ideal business email is <strong>50-125 words</strong>. Cold outreach emails perform best at <strong>50-100 words</strong>. Follow-up emails should be <strong>25-75 words</strong>. Marketing emails get the best click-through rates at <strong>50-200 words</strong>. Data consistently shows: shorter emails get more responses.</p>
          </div>

          <h2 className={st.h2}>Optimal Email Length by Type</h2>
          <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 mb-8 overflow-x-auto">
            <table className="w-full text-sm">
              <thead><tr className="border-b" style={{borderColor:'rgba(52,211,153,0.2)'}}>
                <th className={st.th}>Email Type</th><th className={st.th}>Ideal Length</th><th className={st.th}>Why</th>
              </tr></thead>
              <tbody>
                <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                  <td className={st.tdB}>Cold outreach</td><td className={st.td}>50-100 words</td><td className={st.td}>Busy people scan — get to the point</td>
                </tr>
                <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                  <td className={st.tdB}>Follow-up email</td><td className={st.td}>25-75 words</td><td className={st.td}>Brief reminder, clear ask</td>
                </tr>
                <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                  <td className={st.tdB}>Business email</td><td className={st.td}>75-150 words</td><td className={st.td}>Enough context, not overwhelming</td>
                </tr>
                <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                  <td className={st.tdB}>Marketing email</td><td className={st.td}>50-200 words</td><td className={st.td}>Drive one click, not a novel</td>
                </tr>
                <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                  <td className={st.tdB}>Newsletter</td><td className={st.td}>200-500 words</td><td className={st.td}>Enough value to retain subscribers</td>
                </tr>
                <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                  <td className={st.tdB}>Customer support</td><td className={st.td}>100-200 words</td><td className={st.td}>Clear answer with next steps</td>
                </tr>
                <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                  <td className={st.tdB}>Job application</td><td className={st.td}>150-250 words</td><td className={st.td}>Cover key points concisely</td>
                </tr>
                <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                  <td className={st.tdB}>Meeting request</td><td className={st.td}>50-100 words</td><td className={st.td}>Date, purpose, duration only</td>
                </tr>
              </tbody>
            </table>
          </div>

          <AdUnit slot="3248634657" />

          <h2 className={st.h2}>The Science Behind Short Emails</h2>
          <p className={st.p}>A study by Boomerang analyzing 40 million emails found that messages between 50-125 words had the highest response rates at 50%+. Emails over 200 words saw response rates drop to under 40%. The reason is simple: people skim emails. If they cannot understand your ask in 5 seconds, they move on.</p>
          <p className={st.p}>The average professional receives 121 emails per day. At that volume, your email is competing for 10-15 seconds of attention. Every unnecessary word reduces the chance of a response. The most effective emails have a clear structure: context (1-2 sentences), ask (1 sentence), and next step (1 sentence).</p>

          <h2 className={st.h2}>Email Structure That Gets Responses</h2>
          <p className={st.p}><strong style={{color:'#e2e8f0'}}>Subject Line (under 60 characters):</strong> This is the most important part. 47% of recipients decide to open based solely on the subject line. Be specific: "Quick question about Tuesday meeting" beats "Following up." Use the recipient name for +26% open rate.</p>
          <p className={st.p}><strong style={{color:'#e2e8f0'}}>Opening Line (1 sentence):</strong> Skip "I hope this email finds you well." Instead, lead with context: "After our call on Friday, I mapped out the next steps." or for cold email: "I noticed [specific observation about their company]."</p>
          <p className={st.p}><strong style={{color:'#e2e8f0'}}>Body (2-3 sentences):</strong> State what you need and why it matters to THEM. Not what you want — what they gain. "This could save your team 10 hours/week" beats "I would love to show you our product."</p>
          <p className={st.p}><strong style={{color:'#e2e8f0'}}>Close (1 sentence with CTA):</strong> End with a specific, low-friction ask. "Do you have 15 minutes Thursday at 2pm?" beats "Let me know when you are free." Make it easy to say yes.</p>

          <h2 className={st.h2}>Common Email Length Mistakes</h2>
          <p className={st.p}><strong style={{color:'#ef4444'}}>The Wall of Text:</strong> Emails over 300 words with no line breaks are immediately skimmed or archived. Use short paragraphs (1-2 sentences), bullet points for lists, and bold for key information.</p>
          <p className={st.p}><strong style={{color:'#ef4444'}}>The Over-Apologizer:</strong> "Sorry to bother you, I know you are busy, but I was wondering if maybe.." — This wastes 20+ words on hedging. Be direct and confident. Busy people respect brevity.</p>
          <p className={st.p}><strong style={{color:'#ef4444'}}>The Multi-Ask Email:</strong> Emails with 3+ different asks get the lowest response rates. One email = one ask. If you have multiple topics, send separate emails or use a numbered list making it clear which items need their input.</p>

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
            <a href="/word-counter" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Word Counter</a>
            <a href="/character-counter" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Character Counter</a>
            <a href="/blog/how-to-write-email-subject-lines" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Email Subject Lines Guide</a>
            <a href="/blog/how-to-write-for-skimmable-content" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Skimmable Content</a>
            <a href="/word-count/for/email" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Email Word Count</a>
            <a href="/readability-checker" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Readability Checker</a>
          </div>
        </div>
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Article","headline":"Email Length Best Practices: How Long Should an Email Be? (2026)","author":{"@type":"Organization","name":"WordCounterTool.net"},"publisher":{"@type":"Organization","name":"WordCounterTool.net"},"datePublished":"2026-03-21","dateModified":"2026-03-21"})}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.wordcountertool.net"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.wordcountertool.net/blog"},{"@type":"ListItem","position":3,"name":"Email Length Best Practices","item":"https://www.wordcountertool.net/blog/email-length-best-practices"}]})}} />
      
        <div className="bg-gradient-to-r from-emerald-900/20 to-teal-900/10 border border-emerald-500/20 rounded-2xl p-6 mb-8">
          <h2 className="text-lg font-bold text-white mb-3">Try These Tools</h2>
          <div className="flex flex-wrap gap-2">
            <a href="/word-counter" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Word Counter</a>
            <a href="/character-counter" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Character Counter</a>
            <a href="/word-count/for/email" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Email Word Count</a>
            <a href="/character-limits/email-subject-line" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Email Subject Limits</a>
          </div>
        </div>
      <Footer />
    </>
  )
}
