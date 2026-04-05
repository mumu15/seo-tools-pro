import Header from '../../../components/Header'
import AdUnit from '../../components/AdUnit'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import FaqSchema from '../../../components/FaqSchema'

export const metadata = {
  title: 'How to Write Email Subject Lines That Get Opened (2026 Guide)',
  description: 'Write email subject lines that boost open rates by 26%. Ideal length is 30-50 characters. Includes 8 proven formulas and A/B testing tips.',
  alternates: { canonical: 'https://www.wordcountertool.net/blog/how-to-write-email-subject-lines' },
  openGraph: {
    title: 'How to Write Email Subject Lines That Get Opened (2026 Guide)',
    description: 'Write email subject lines that boost open rates by 26%. Ideal length is 30-50 characters. Includes 8 proven formulas and A/B testing tips.',
    url: 'https://www.wordcountertool.net/blog/how-to-write-email-subject-lines',
    type: 'article',
  },
}

const faqs = [
  { q: 'How long should an email subject line be?', a: 'The ideal subject line is 30-50 characters or 6-10 words. Mobile clients show approximately 30-40 characters, so front-load important words. Desktop shows up to 60 characters. Keep the core message under 35 characters for universal visibility.' },
  { q: 'What is a good email open rate?', a: 'Average email open rate across all industries is approximately 21%. Above 25% is good. Above 30% is excellent. Subject line quality is the single biggest factor, followed by sender name and send time.' },
  { q: 'Do emojis in subject lines increase open rates?', a: 'Emojis can increase open rates by 5-10% when used sparingly. One emoji maximum, and only if it matches your brand voice. B2B emails generally perform better without emojis. Test with your specific audience.' },
  { q: 'Should I personalize email subject lines?', a: 'Yes. Subject lines with the recipient first name get 26% higher open rates. Behavioral personalization works even better: referencing a recent purchase, cart, or content viewed creates relevance generic subjects cannot match.' },
  { q: 'What words should I avoid in subject lines?', a: 'Avoid spam triggers: free, guarantee, act now, limited time offer, congratulations, winner. Also avoid all caps, multiple exclamation marks, and dollar signs. These trigger spam filters and reduce deliverability.' },
  { q: 'When is the best time to send emails?', a: 'Tuesday through Thursday between 8-10 AM and 1-3 PM local time produces highest open rates. Saturday mornings also perform well for B2C. Always test with your specific audience for optimal timing.' }
]

export default function Post() {
  return (
    <>
      <FaqSchema faqs={faqs} />
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8"><Link href="/blog" className="text-emerald-400 text-sm hover:underline">← Back to Blog</Link></div>
        <article>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">How to Write Email Subject Lines That Get Opened (2026 Guide)</h1>
          <p className="text-slate-400 text-sm mb-8">April 2026 · 10 min read</p>
          <div className="result-box mb-8 border-emerald-500/30">
            <h2 className="text-emerald-400 font-bold mb-3">Quick Answer</h2>
            <p className="text-white">The ideal email subject line is <strong>30-50 characters</strong> (6-10 words). Subject lines with numbers get <strong>57% higher open rates</strong>. Personalization increases opens by 26%. Questions improve open rates by 10%. Never use ALL CAPS.</p>
          </div>
          <div className="space-y-8">

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Email Subject Line Character Limits</h2>
              <div className="result-box mb-4">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead><tr className="border-b" style={{borderColor:'rgba(52,211,153,0.1)'}}><th className="text-left text-emerald-400 py-2 pr-4">Email Client</th><th className="text-left text-emerald-400 py-2 pr-4">Subject Chars</th><th className="text-left text-emerald-400 py-2">Preview Text</th></tr></thead>
                    <tbody>
                      {[['Gmail (Desktop)','Up to 70 chars','Up to 90 chars'],['Gmail (Mobile)','Up to 40 chars','Up to 90 chars'],['Apple Mail (Desktop)','Up to 70 chars','Unlimited'],['Apple Mail (iPhone)','Up to 35 chars','Up to 90 chars'],['Outlook (Desktop)','Up to 60 chars','Up to 40 chars'],['Outlook (Mobile)','Up to 40 chars','Up to 75 chars'],['Yahoo Mail','Up to 47 chars','Up to 100 chars']].map((r,i) => (
                        <tr key={i} className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}><td className="text-white py-2 pr-4">{r[0]}</td><td className="text-slate-300 py-2 pr-4">{r[1]}</td><td className="text-slate-300 py-2">{r[2]}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed mb-4">The lowest common denominator is approximately 35-40 characters. The most important part of your subject must fit within the first 35 characters. Everything beyond is bonus that only some recipients see depending on their email client and device.</p>
            </section>

            <AdUnit slot="3248634657" />


            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">8 Subject Line Formulas That Boost Opens</h2>
              <div className="result-box mb-4">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead><tr className="border-b" style={{borderColor:'rgba(52,211,153,0.1)'}}><th className="text-left text-emerald-400 py-2 pr-4">Formula</th><th className="text-left text-emerald-400 py-2 pr-4">Example</th><th className="text-left text-emerald-400 py-2">Open Rate Lift</th></tr></thead>
                    <tbody>
                      {[['Number + Benefit','5 ways to save 3 hours this week','+28%'],['Question','Ready to double your email opens?','+10%'],['Personalized','[Name], your weekly writing report','+26%'],['Urgency','Last day: 40% off writing tools','+22%'],['Curiosity Gap','This mistake costs you readers','+18%'],['How-to','How to write emails people reply to','+15%'],['Announcement','New: Character counter for emails','+12%'],['Social Proof','Join 10,000+ writers using this','+14%']].map((r,i) => (
                        <tr key={i} className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}><td className="text-white py-2 pr-4">{r[0]}</td><td className="text-slate-300 py-2 pr-4">{r[1]}</td><td className="text-emerald-400 py-2 font-bold">{r[2]}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Subject Line Length vs Open Rate</h2>
              <div className="result-box mb-4">
                <svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'auto'}}>
                  <rect x="0" y="0" width="600" height="220" fill="transparent" />
                  <text x="300" y="20" textAnchor="middle" style={{fontSize:'13px',fontWeight:'bold',fill:'#f1f5f9'}}>Open Rate by Subject Line Length</text>
                  <line x1="130" y1="35" x2="130" y2="195" style={{stroke:'rgba(255,255,255,0.1)',strokeWidth:1}} />
                  {[{label:'1-20 characters',pct:16,y:52},{label:'21-30 characters',pct:21,y:77},{label:'31-40 characters',pct:26,y:102},{label:'41-50 characters',pct:24,y:127},{label:'51-60 characters',pct:19,y:152},{label:'60+ characters',pct:14,y:177}].map((d,i) => (
                    <g key={i}>
                      <text x="125" y={d.y+4} textAnchor="end" style={{fontSize:'10px',fill:'#94a3b8'}}>{d.label}</text>
                      <rect x="132" y={d.y-8} width={d.pct*15} height="18" rx="4" style={{fill: d.pct > 23 ? 'rgba(52,211,153,0.6)' : d.pct > 18 ? 'rgba(96,165,250,0.5)' : 'rgba(240,200,66,0.4)'}} />
                      <text x={140+d.pct*15} y={d.y+4} style={{fontSize:'11px',fontWeight:'bold',fill:'#e2e8f0'}}>{d.pct}%</text>
                    </g>
                  ))}
                </svg>
              </div>
              <p className="text-slate-400 leading-relaxed mb-4">Peak open rates occur at 31-40 characters — long enough to convey a specific benefit, short enough to display fully on mobile. Never exceed 50 characters without a compelling reason for the extra length.</p>
            </section>

            <AdUnit slot="3763639977" />


            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Subject Line Mistakes to Avoid</h2>
              <p className="text-slate-400 leading-relaxed mb-4"><strong className="text-red-400">ALL CAPS:</strong> Digital shouting triggers spam filters, reduces credibility, and makes recipients less likely to open. Maximum one capitalized word for emphasis if absolutely necessary.</p>
              <p className="text-slate-400 leading-relaxed mb-4"><strong className="text-red-400">Misleading subjects:</strong> Subject lines that promise something the email does not deliver destroy trust and increase unsubscribes. If your subject says "Your order shipped" but the email is a promotion, you lose subscribers permanently.</p>
              <p className="text-slate-400 leading-relaxed mb-4"><strong className="text-red-400">No preview text:</strong> Preview text (preheader) is the second most important element. If not set explicitly, email clients pull the first text from the body, often an unsubscribe link. Always write custom preview text.</p>
              <p className="text-slate-400 leading-relaxed mb-4"><strong className="text-red-400">Never testing:</strong> Every audience is different. A/B test by sending two variants to 20% of your list, then send the winner to the remaining 80%. Over time, testing reveals which formulas and language resonate with your specific subscribers.</p>
              <div className="result-box text-center mb-4">
                <p className="text-white font-bold mb-2">Check Subject Line Length</p>
                <p className="text-slate-400 text-sm mb-4">Verify your subject line character count across all email clients.</p>
                <Link href="/character-counter" className="btn-primary inline-block px-6 py-3">Check Characters →</Link>
              </div>
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
                <Link href="/word-counter" className="text-emerald-400 hover:underline text-sm">Word Counter</Link>
                <Link href="/readability-checker" className="text-emerald-400 hover:underline text-sm">Readability Checker</Link>
                <Link href="/meta-tag-generator" className="text-emerald-400 hover:underline text-sm">Meta Tag Generator</Link>
              </div>
            </section>

            <AdUnit slot="3248634657" />


            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Related Articles</h2>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog/how-to-write-meta-descriptions" className="text-emerald-400 hover:underline text-sm">How to Write Meta Descriptions</Link>
                <Link href="/blog/how-to-write-headline-formulas" className="text-emerald-400 hover:underline text-sm">Headline Formulas</Link>
                <Link href="/blog/how-many-characters-in-a-tweet" className="text-emerald-400 hover:underline text-sm">Twitter Character Limits</Link>
                <Link href="/blog/instagram-caption-length" className="text-emerald-400 hover:underline text-sm">Instagram Caption Length</Link>
              </div>
            </section>
          </div>
        </article>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"Article","headline":"How to Write Email Subject Lines That Get Opened (2026 Guide)","description":"Write email subject lines that boost open rates by 26%. Ideal length is 30-50 characters. Includes 8 proven formulas and A/B testing tips.","datePublished":"2026-04-05","dateModified":"2026-04-05","author":{"@type":"Organization","name":"WordCounterTool"},"publisher":{"@type":"Organization","name":"WordCounterTool","url":"https://www.wordcountertool.net"},"mainEntityOfPage":"https://www.wordcountertool.net/blog/how-to-write-email-subject-lines"})}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.wordcountertool.net"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.wordcountertool.net/blog"},{"@type":"ListItem","position":3,"name":"How to Write Email Subject Lines That Get Opened (2026 Guide)","item":"https://www.wordcountertool.net/blog/how-to-write-email-subject-lines"}]})}} />
      </main>
      <Footer />
    </>
  )
}
