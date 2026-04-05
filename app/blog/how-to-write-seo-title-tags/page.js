import Header from '../../../components/Header'
import AdUnit from '../../components/AdUnit'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import FaqSchema from '../../../components/FaqSchema'

export const metadata = {
  title: 'How to Write SEO Title Tags That Rank and Get Clicks (2026)',
  description: 'Write perfect SEO title tags in 2026. Ideal length is 50-60 characters. Includes character limits, keyword placement rules, power words, and formulas.',
  alternates: { canonical: 'https://www.wordcountertool.net/blog/how-to-write-seo-title-tags' },
  openGraph: {
    title: 'How to Write SEO Title Tags That Rank and Get Clicks (2026)',
    description: 'Write perfect SEO title tags in 2026. Ideal length is 50-60 characters. Includes character limits, keyword placement rules, power words, and formulas.',
    url: 'https://www.wordcountertool.net/blog/how-to-write-seo-title-tags',
    type: 'article',
  },
}

const faqs = [
  { q: 'How long should an SEO title tag be?', a: 'Google displays title tags up to about 600 pixels wide, roughly 50-60 characters. Titles over 60 characters get truncated with an ellipsis. Keep titles under 60 characters to ensure full display in search results.' },
  { q: 'Where should I put my keyword in a title tag?', a: 'Put your primary keyword as close to the beginning as possible. Google gives more weight to words at the start of the title tag. Front-loading also ensures the keyword is visible even if the title gets truncated.' },
  { q: 'Should I include my brand name in the title?', a: 'Yes if you have space. Place the brand name at the end separated by a dash or pipe. Example: "How to Count Words Online | WordCounterTool." Only include brand for pages where brand recognition adds value.' },
  { q: 'Can I use the same title on multiple pages?', a: 'No. Every page must have a unique title tag. Duplicate titles confuse Google about which page to rank and hurt SEO. Even similar pages should have distinct, specific titles.' },
  { q: 'Does Google always use my title tag?', a: 'Not always. Google may rewrite your title if the page content does not match. Writing accurate, descriptive titles that match page content reduces the chance of Google rewriting your title.' },
  { q: 'What title tag format works best for CTR?', a: 'The format "Primary Keyword: Secondary Benefit (Year)" consistently performs well. Numbers, years, and power words increase click-through rate. Example: "Word Counter: Free Online Tool with Reading Time (2026)."' }
]

export default function Post() {
  return (
    <>
      <FaqSchema faqs={faqs} />
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8"><Link href="/blog" className="text-emerald-400 text-sm hover:underline">← Back to Blog</Link></div>
        <article>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">How to Write SEO Title Tags That Rank and Get Clicks (2026)</h1>
          <p className="text-slate-400 text-sm mb-8">April 2026 · 10 min read</p>
          <div className="result-box mb-8 border-emerald-500/30">
            <h2 className="text-emerald-400 font-bold mb-3">Quick Answer</h2>
            <p className="text-white">The ideal SEO title tag is <strong>50-60 characters</strong> (under 600 pixels wide). Put your main keyword near the beginning. Include a number or power word when possible. End with your brand name if space allows.</p>
          </div>
          <div className="space-y-8">

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Title Tag Character and Pixel Limits</h2>
              <p className="text-slate-400 leading-relaxed mb-4">Google measures title width in pixels, not characters. Thin letters like "i" and "l" take less space than wide letters like "W" and "M." The pixel limit is approximately 600 pixels on desktop and 920 pixels on mobile.</p>
              <div className="result-box mb-4">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead><tr className="border-b" style={{borderColor:'rgba(52,211,153,0.1)'}}><th className="text-left text-emerald-400 py-2 pr-4">Context</th><th className="text-left text-emerald-400 py-2 pr-4">Character Limit</th><th className="text-left text-emerald-400 py-2">Pixel Limit</th></tr></thead>
                    <tbody>
                      {[['Google Desktop','~60 characters','~600 pixels'],['Google Mobile','~78 characters','~920 pixels'],['Safe zone','50-55 characters','~530 pixels'],['Maximum recommended','60 characters','~600 pixels'],['Gets truncated','65+ characters','600+ pixels'],['Bing','~65 characters','~600 pixels'],['Social media shares','~70 characters','Varies by platform']].map((r,i) => (
                        <tr key={i} className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}><td className="text-white py-2 pr-4">{r[0]}</td><td className="text-slate-300 py-2 pr-4">{r[1]}</td><td className="text-slate-300 py-2">{r[2]}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Title Tag Formulas That Rank and Convert</h2>
              <p className="text-slate-400 leading-relaxed mb-4">These title formats have been proven to generate both high rankings and high click-through rates. Choose the formula that best matches your content type.</p>
              <div className="result-box mb-4">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead><tr className="border-b" style={{borderColor:'rgba(52,211,153,0.1)'}}><th className="text-left text-emerald-400 py-2 pr-4">Formula</th><th className="text-left text-emerald-400 py-2 pr-4">Template</th><th className="text-left text-emerald-400 py-2">Best For</th></tr></thead>
                    <tbody>
                      {[['Keyword + Year','[Keyword] Guide (2026)','Evergreen content'],['How-to + Benefit','How to [X] for [Benefit]','Tutorial content'],['Number + Keyword','[N] Best [Keyword] Tips','List posts'],['Keyword + Brand','[Keyword] | Brand Name','Brand pages'],['Question Format','What Is [Keyword]? Explained','Informational'],['Comparison','[X] vs [Y]: Which Is Better?','Comparison content'],['Ultimate Guide','The Ultimate [Keyword] Guide','Comprehensive content'],['Negative Angle','[N] [Keyword] Mistakes to Avoid','Problem-solving content']].map((r,i) => (
                        <tr key={i} className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}><td className="text-white py-2 pr-4">{r[0]}</td><td className="text-slate-300 py-2 pr-4">{r[1]}</td><td className="text-slate-300 py-2">{r[2]}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Title Tag Impact on CTR</h2>
              <div className="result-box mb-4">
                <svg viewBox="0 0 600 230" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'auto'}}>
                  <rect x="0" y="0" width="600" height="230" fill="transparent" />
                  <text x="300" y="20" textAnchor="middle" style={{fontSize:'13px',fontWeight:'bold',fill:'#f1f5f9'}}>CTR Boost by Title Tag Element</text>
                  <line x1="160" y1="35" x2="160" y2="200" style={{stroke:'rgba(255,255,255,0.1)',strokeWidth:1}} />
                  {[{label:'Contains a number',pct:36,y:55},{label:'Contains a power word',pct:13,y:80},{label:'Contains the year',pct:18,y:105},{label:'Front-loaded keyword',pct:22,y:130},{label:'Question format',pct:14,y:155},{label:'Parentheses (Guide)',pct:10,y:180}].map((d,i) => (
                    <g key={i}>
                      <text x="155" y={d.y+4} textAnchor="end" style={{fontSize:'10px',fill:'#94a3b8'}}>{d.label}</text>
                      <rect x="162" y={d.y-8} width={d.pct*9} height="18" rx="4" style={{fill: d.pct > 20 ? 'rgba(52,211,153,0.6)' : d.pct > 12 ? 'rgba(96,165,250,0.5)' : 'rgba(240,200,66,0.4)'}} />
                      <text x={170+d.pct*9} y={d.y+4} style={{fontSize:'11px',fontWeight:'bold',fill:'#e2e8f0'}}>+{d.pct}%</text>
                    </g>
                  ))}
                </svg>
              </div>
              <p className="text-slate-400 leading-relaxed mb-4">Numbers in titles provide the single biggest CTR boost at 36%. This is because numbers create specificity and set clear expectations. Combining multiple elements — a number, year, and power word — can stack these benefits for compound CTR improvements.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Power Words That Increase Title CTR</h2>
              <p className="text-slate-400 leading-relaxed mb-4">These words have been proven to increase click-through rates when included in title tags. Use 1-2 per title for maximum impact without sounding spammy.</p>
              <p className="text-slate-400 leading-relaxed mb-4"><strong className="text-emerald-400">Value words:</strong> Free, Ultimate, Complete, Proven, Essential, Definitive, Comprehensive. These signal that the content is worth the click because of its thoroughness or price (free).</p>
              <p className="text-slate-400 leading-relaxed mb-4"><strong className="text-blue-400">Urgency words:</strong> New, Updated, 2026, Latest, Now, Today. These signal freshness and currency, especially important for topics that change over time. The year in parentheses is one of the easiest CTR wins.</p>
              <p className="text-slate-400 leading-relaxed mb-4"><strong className="text-yellow-400">Emotional words:</strong> Secret, Mistakes, Surprising, Shocking, Powerful, Genius. Use sparingly — one emotional word per title maximum, and only if the content genuinely delivers on the emotional promise.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Title Tag Mistakes to Avoid</h2>
              <p className="text-slate-400 leading-relaxed mb-4"><strong className="text-red-400">Too long (over 60 characters):</strong> Truncated titles look unprofessional and may cut off your keyword or key message. Always preview your title length before publishing.</p>
              <p className="text-slate-400 leading-relaxed mb-4"><strong className="text-red-400">Keyword stuffing:</strong> "Word Counter Free Online Word Counter Tool Word Count" is keyword stuffing. Use your keyword once, naturally, in a readable title. Google understands synonyms and context.</p>
              <p className="text-slate-400 leading-relaxed mb-4"><strong className="text-red-400">Duplicate titles:</strong> Every page needs a unique title. Duplicate titles confuse Google about which page to rank and can cause the wrong page to appear in search results for important queries.</p>
              <p className="text-slate-400 leading-relaxed mb-4"><strong className="text-red-400">Not matching content:</strong> If your title promises "10 Tips" but the content only has 7, Google may rewrite your title. Accurate titles build trust with both search engines and users.</p>
              <div className="result-box text-center mb-4">
                <p className="text-white font-bold mb-2">Preview Your Title Tag</p>
                <p className="text-slate-400 text-sm mb-4">Generate and preview how your title appears in Google search results.</p>
                <Link href="/meta-tag-generator" className="btn-primary inline-block px-6 py-3">Open Meta Tag Generator →</Link>
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
                <Link href="/meta-tag-generator" className="text-emerald-400 hover:underline text-sm">Meta Tag Generator</Link>
                <Link href="/character-counter" className="text-emerald-400 hover:underline text-sm">Character Counter</Link>
                <Link href="/keyword-density" className="text-emerald-400 hover:underline text-sm">Keyword Density Checker</Link>
                <Link href="/word-counter" className="text-emerald-400 hover:underline text-sm">Word Counter</Link>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Related Articles</h2>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog/how-to-write-meta-descriptions" className="text-emerald-400 hover:underline text-sm">How to Write Meta Descriptions</Link>
                <Link href="/blog/how-to-write-headline-formulas" className="text-emerald-400 hover:underline text-sm">Headline Formulas</Link>
                <Link href="/blog/how-to-use-keywords-in-blog-posts" className="text-emerald-400 hover:underline text-sm">Keywords in Blog Posts</Link>
                <Link href="/blog/ideal-blog-post-length-for-seo" className="text-emerald-400 hover:underline text-sm">Ideal Blog Post Length</Link>
              </div>
            </section>
          </div>
        </article>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"Article","headline":"How to Write SEO Title Tags That Rank and Get Clicks (2026)","description":"Write perfect SEO title tags in 2026. Ideal length is 50-60 characters. Includes character limits, keyword placement rules, power words, and formulas.","datePublished":"2026-04-05","dateModified":"2026-04-05","author":{"@type":"Organization","name":"WordCounterTool"},"publisher":{"@type":"Organization","name":"WordCounterTool","url":"https://www.wordcountertool.net"},"mainEntityOfPage":"https://www.wordcountertool.net/blog/how-to-write-seo-title-tags"})}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.wordcountertool.net"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.wordcountertool.net/blog"},{"@type":"ListItem","position":3,"name":"How to Write SEO Title Tags That Rank and Get Clicks (2026)","item":"https://www.wordcountertool.net/blog/how-to-write-seo-title-tags"}]})}} />
      </main>
      <Footer />
    </>
  )
}
