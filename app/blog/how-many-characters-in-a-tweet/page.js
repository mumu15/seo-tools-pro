import Header from '../../../components/Header'
import AdUnit from '../../components/AdUnit'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import FaqSchema from '../../../components/FaqSchema'

export const metadata = {
  title: 'How Many Characters in a Tweet? (Twitter/X Limits 2026)',
  description: 'A standard tweet is 280 characters. X Premium gives 25,000 characters. Complete guide to all Twitter/X character limits: tweets, DMs, bios, URLs, and hashtags.',
  alternates: { canonical: 'https://www.wordcountertool.net/blog/how-many-characters-in-a-tweet' },
  openGraph: { title: 'How Many Characters in a Tweet? (Twitter/X Limits 2026)', description: 'A standard tweet is 280 characters. X Premium gives 25,000 characters. Complete guide to all Twitter/X character limits: tweets, DMs, bios, URLs, and hashtags.', url: 'https://www.wordcountertool.net/blog/how-many-characters-in-a-tweet', type: 'article' },
}

const faqs = [
  { q: 'How many characters is a tweet in 2026?', a: 'Standard Twitter/X accounts can post up to 280 characters. X Premium subscribers can post up to 25,000 characters. The 280 limit applies to standard accounts, replies, and quote tweets.' },
  { q: 'Do spaces count in the Twitter character limit?', a: 'Yes. Every space counts as one character. Punctuation, special characters, and line breaks also count. Emojis count as 2 characters due to Unicode encoding.' },
  { q: 'How many characters does a URL take on Twitter?', a: 'Every URL on Twitter counts as exactly 23 characters regardless of the actual URL length. Twitter automatically shortens all URLs using their t.co shortener.' },
  { q: 'How many characters is a Twitter bio?', a: 'Twitter/X bios have a 160-character limit. Your display name can be up to 50 characters. Your username (@handle) can be up to 15 characters.' },
  { q: 'How many characters can a Twitter DM be?', a: 'Twitter Direct Messages can be up to 10,000 characters. This is significantly longer than a standard tweet, making DMs suitable for longer conversations.' },
  { q: 'Do hashtags count toward the character limit?', a: 'Yes. Hashtags count toward the 280-character limit including the # symbol. A hashtag like #ContentMarketing uses 17 of your 280 characters.' }
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
          <p className="text-slate-400 text-sm mb-8">April 2026 · 10 min read</p>
          <div className="result-box mb-8 border-emerald-500/30">
            <h2 className="text-emerald-400 font-bold mb-3">Quick Answer</h2>
            <p className="text-white">A standard tweet is <strong>280 characters</strong>. X Premium subscribers get <strong>25,000 characters</strong> for long posts. URLs always count as <strong>23 characters</strong> regardless of length. Emojis count as 2 characters each.</p>
          </div>
          <div className="space-y-8">

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Complete Twitter/X Character Limits 2026</h2>
              <p className="text-slate-400 leading-relaxed mb-4">Every element of Twitter/X has its own character limit. Here is the complete reference for every limit you need to know as a content creator or marketer on the platform.</p>
              <div className="result-box mb-4">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead><tr className="border-b" style={{borderColor:'rgba(52,211,153,0.1)'}}><th className="text-left text-emerald-400 py-2 pr-4">Element</th><th className="text-left text-emerald-400 py-2 pr-4">Character Limit</th><th className="text-left text-emerald-400 py-2">Notes</th></tr></thead>
                    <tbody>
                      {[['Standard Tweet','280 characters','Free accounts'],['X Premium Post','25,000 characters','Paid subscription only'],['Direct Message (DM)','10,000 characters','Private messages'],['Profile Bio','160 characters','Shown under your name'],['Display Name','50 characters','Can include emojis and spaces'],['Username (@handle)','15 characters','Letters, numbers, underscores only'],['URL (any link)','23 characters','Auto-shortened by Twitter'],['Tweet Reply','280 characters','Same as standard tweet'],['Alt Text (images)','1,000 characters','Accessibility descriptions'],['List Name','25 characters','For curated Twitter lists'],['List Description','100 characters','Describes the list purpose']].map((r,i) => (
                        <tr key={i} className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}><td className="text-white py-2 pr-4">{r[0]}</td><td className="text-slate-300 py-2 pr-4">{r[1]}</td><td className="text-slate-300 py-2">{r[2]}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">How Special Characters Affect Count</h2>
              <p className="text-slate-400 leading-relaxed mb-4">Not all characters count equally on Twitter. Understanding how different character types are counted helps you maximize your message within the 280-character limit.</p>
              <div className="result-box mb-4">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead><tr className="border-b" style={{borderColor:'rgba(52,211,153,0.1)'}}><th className="text-left text-emerald-400 py-2 pr-4">Character Type</th><th className="text-left text-emerald-400 py-2 pr-4">Count</th><th className="text-left text-emerald-400 py-2">Examples</th></tr></thead>
                    <tbody>
                      {[['Standard letters','1 each','A-Z, a-z'],['Numbers','1 each','0-9'],['Spaces','1 each','Between words'],['Basic punctuation','1 each','. , ! ? : ;'],['Emojis','2 each','Any emoji character'],['CJK characters','1 each','Chinese, Japanese, Korean'],['URLs','23 (always)','Any URL regardless of length'],['Hashtag symbol','1','The # counts as a character'],['@ mention','Varies','Full @username counts'],['Line breaks','1 each','Each new line = 1 character']].map((r,i) => (
                        <tr key={i} className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}><td className="text-white py-2 pr-4">{r[0]}</td><td className="text-slate-300 py-2 pr-4">{r[1]}</td><td className="text-slate-300 py-2">{r[2]}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Tweet Length and Engagement</h2>
              <div className="result-box mb-4">
                <svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'auto'}}>
                  <rect x="0" y="0" width="600" height="220" fill="transparent" />
                  <text x="300" y="20" textAnchor="middle" style={{fontSize:'13px',fontWeight:'bold',fill:'#f1f5f9'}}>Engagement Rate by Tweet Length</text>
                  <line x1="130" y1="35" x2="130" y2="195" style={{stroke:'rgba(255,255,255,0.1)',strokeWidth:1}} />
                  {[{label:'1-70 characters',pct:2.8,y:52},{label:'71-100 characters',pct:4.2,y:77},{label:'101-140 characters',pct:3.8,y:102},{label:'141-200 characters',pct:3.1,y:127},{label:'201-280 characters',pct:2.4,y:152},{label:'Long posts (Premium)',pct:1.6,y:177}].map((d,i) => (
                    <g key={i}>
                      <text x="125" y={d.y+4} textAnchor="end" style={{fontSize:'10px',fill:'#94a3b8'}}>{d.label}</text>
                      <rect x="132" y={d.y-8} width={d.pct*90} height="18" rx="4" style={{fill: d.pct > 3.5 ? 'rgba(52,211,153,0.6)' : d.pct > 2.5 ? 'rgba(96,165,250,0.5)' : 'rgba(240,200,66,0.4)'}} />
                      <text x={140+d.pct*90} y={d.y+4} style={{fontSize:'11px',fontWeight:'bold',fill:'#e2e8f0'}}>{d.pct}%</text>
                    </g>
                  ))}
                </svg>
              </div>
              <p className="text-slate-400 leading-relaxed mb-4">Tweets of 71-100 characters get the highest engagement rates. This is roughly one punchy sentence that leaves the reader wanting more. Shorter tweets feel incomplete while longer tweets require more commitment to read. The sweet spot is a complete thought that is easy to consume and engage with quickly.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Tips for Writing Powerful Tweets</h2>
              <p className="text-slate-400 leading-relaxed mb-4">The 280-character limit forces clarity and conciseness. Here are proven techniques for making every character count and maximizing engagement on every tweet you post.</p>
              <div className="space-y-3">
                <div className="result-box"><h3 className="text-white font-bold mb-2">Start with the Most Important Word</h3><p className="text-slate-400 text-sm leading-relaxed">Twitter feeds move fast. The first 2-3 words determine if someone stops scrolling. Lead with the most compelling element: a number, a bold claim, or a relevant keyword. Never start with "I think" or "Just wanted to share."</p></div>
                <div className="result-box"><h3 className="text-white font-bold mb-2">Use Line Breaks for Rhythm</h3><p className="text-slate-400 text-sm leading-relaxed">Line breaks create visual rhythm and make tweets easier to scan. A tweet with 3 short lines gets more engagement than a single dense paragraph of the same length. Each line break costs only 1 character.</p></div>
                <div className="result-box"><h3 className="text-white font-bold mb-2">Save 23 Characters for URLs</h3><p className="text-slate-400 text-sm leading-relaxed">If your tweet includes a link, plan for 23 characters regardless of URL length. That leaves you 257 characters for your message. Write the tweet text first, then add the link. If the text is too long with the link, cut the text, not the link.</p></div>
                <div className="result-box"><h3 className="text-white font-bold mb-2">Limit Hashtags to 1-2</h3><p className="text-slate-400 text-sm leading-relaxed">More than 2 hashtags reduces engagement. Each hashtag eats into your character budget and makes the tweet harder to read. Use hashtags strategically to join conversations, not to stuff keywords.</p></div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">X Premium vs Free: Character Limits</h2>
              <p className="text-slate-400 leading-relaxed mb-4">X Premium (formerly Twitter Blue) expanded the character limit to 25,000 characters. However, data shows that traditional 280-character tweets still get higher engagement rates per impression. Long-form posts are best suited for threads, articles, and in-depth analysis where the audience expects depth.</p>
              <p className="text-slate-400 leading-relaxed mb-4">Use the 25,000 character limit for content that genuinely needs length: detailed tutorials, full-length articles, and comprehensive breakdowns. For general engagement and visibility, the classic 280-character constraint remains the most effective format on the platform.</p>
              <div className="result-box text-center mb-4">
                <p className="text-white font-bold mb-2">Count Your Tweet Characters</p>
                <p className="text-slate-400 text-sm mb-4">Check character count before posting to stay within Twitter limits.</p>
                <Link href="/character-counter" className="btn-primary inline-block px-6 py-3">Count Characters →</Link>
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
                <Link href="/twitter-thread-counter" className="text-emerald-400 hover:underline text-sm">Twitter Thread Counter</Link>
                <Link href="/hashtag-counter" className="text-emerald-400 hover:underline text-sm">Hashtag Counter</Link>
                <Link href="/word-counter" className="text-emerald-400 hover:underline text-sm">Word Counter</Link>
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Related Articles</h2>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog/how-to-write-twitter-thread" className="text-emerald-400 hover:underline text-sm">Twitter Thread Guide</Link>
                <Link href="/blog/how-many-hashtags-to-use" className="text-emerald-400 hover:underline text-sm">How Many Hashtags?</Link>
                <Link href="/blog/instagram-caption-length" className="text-emerald-400 hover:underline text-sm">Instagram Caption Length</Link>
                <Link href="/blog/how-to-write-headline-formulas" className="text-emerald-400 hover:underline text-sm">Headline Formulas</Link>
              </div>
            </section>
          </div>
        </article>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"Article","headline":"How Many Characters in a Tweet? (Twitter/X Limits 2026)","description":"A standard tweet is 280 characters. X Premium gives 25,000 characters. Complete guide to all Twitter/X character limits: tweets, DMs, bios, URLs, and hashtags.","datePublished":"2026-04-05","dateModified":"2026-04-05","author":{"@type":"Organization","name":"WordCounterTool"},"publisher":{"@type":"Organization","name":"WordCounterTool","url":"https://www.wordcountertool.net"},"mainEntityOfPage":"https://www.wordcountertool.net/blog/how-many-characters-in-a-tweet"})}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.wordcountertool.net"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.wordcountertool.net/blog"},{"@type":"ListItem","position":3,"name":"How Many Characters in a Tweet? (Twitter/X Limits 2026)","item":"https://www.wordcountertool.net/blog/how-many-characters-in-a-tweet"}]})}} />
      </main>
      <Footer />
    </>
  )
}
