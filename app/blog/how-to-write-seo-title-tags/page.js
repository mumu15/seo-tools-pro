import Header from '../../../components/Header'
import AdUnit from '../../components/AdUnit'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import FaqSchema from '../../../components/FaqSchema'

export const metadata = {
  alternates: { canonical: 'https://www.wordcountertool.net/blog/how-to-write-seo-title-tags' },
  title: 'How to Write SEO Title Tags That Rank and Get Clicks (2026 Guide)',
  description: 'Learn how to write perfect SEO title tags in 2026. Includes character limits, keyword placement, formulas and real examples that rank.',
}

const faqs = [
  {
    "q": "How long should an SEO title tag be?",
    "a": "Google displays title tags up to about 600 pixels wide which is roughly 50-60 characters. Titles over 60 characters get cut off with an ellipsis in search results."
  },
  {
    "q": "Where should I put my keyword in a title tag?",
    "a": "Put your primary keyword as close to the beginning as possible. Google gives more weight to words at the start of the title tag."
  },
  {
    "q": "Should I include my brand name in the title tag?",
    "a": "Yes if you have space. Place the brand name at the end separated by a dash or pipe symbol. Example: \"How to Count Words Online | WordCounterTool.net\"."
  },
  {
    "q": "Can I use the same title tag on multiple pages?",
    "a": "No. Every page must have a unique title tag. Duplicate title tags confuse Google about which page to rank and hurt your SEO."
  },
  {
    "q": "Does Google always use my title tag?",
    "a": "Not always. Google may rewrite your title tag if it finds the page content does not match. Writing accurate descriptive titles reduces rewrites."
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
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">How to Write SEO Title Tags That Rank and Get Clicks (2026 Guide)</h1>
          <p className="text-slate-400 text-sm mb-8">February 2026 · 8 min read</p>
          <div className="result-box mb-8 border-emerald-500/30">
            <h2 className="text-emerald-400 font-bold mb-3">Quick Answer</h2>
            <p className="text-white">The ideal SEO title tag is <strong>50–60 characters</strong> (under 600px wide). Put your main keyword near the beginning. Include a number or power word when possible. End with your brand name if space allows.</p>
          </div>
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Title Tag Formula That Gets Clicks</h2>
              <p className="text-slate-400 leading-relaxed mb-4">The best title tags follow a proven formula. Primary keyword + secondary keyword + power word or number. For example: "How to Count Words Online Free (2026 Guide)" hits the main keyword early, adds a benefit word "free" and includes the year for freshness. Numbers like "7 Ways" or "Complete Guide" increase click-through rates by up to 36%.</p>
            </section>
            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Title Tag Character Limits and Pixel Width</h2>
              <p className="text-slate-400 leading-relaxed mb-4">Google measures title width in pixels not characters. Thin letters like i and l take less space than wide letters like W and M.</p>
              <div className="result-box mb-4">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead><tr className="border-b" style={{borderColor:'rgba(52,211,153,0.1)'}}><th className="text-left text-slate-400 py-2 pr-4">Scenario</th><th className="text-left text-slate-400 py-2 pr-4">Approximate Limit</th></tr></thead>
                    <tbody>
                      <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}><td className="text-white py-2 pr-4">Desktop Search</td><td className="text-slate-300 py-2 pr-4">600 pixels / ~60 chars</td></tr>
                      <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}><td className="text-white py-2 pr-4">Mobile Search</td><td className="text-slate-300 py-2 pr-4">920 pixels / ~78 chars</td></tr>
                      <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}><td className="text-white py-2 pr-4">Safe zone</td><td className="text-slate-300 py-2 pr-4">50–55 characters</td></tr>
                      <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}><td className="text-white py-2 pr-4">Maximum recommended</td><td className="text-slate-300 py-2 pr-4">60 characters</td></tr>
                      <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}><td className="text-white py-2 pr-4">Gets cut off</td><td className="text-slate-300 py-2 pr-4">65+ characters</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Power Words That Increase Click-Through Rate</h2>
              <p className="text-slate-400 leading-relaxed mb-4">Certain words consistently improve click-through rates. Free, Ultimate, Complete, Proven, Fast, Easy, Best, New, Secret and Guide all signal value to searchers. Numbers like "7 Ways" "10 Tips" and "2026" create specificity that earns more clicks than vague titles. Negative titles like "Stop Making These Mistakes" also perform well because they trigger loss aversion.</p>
            </section>
            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Check Your Title Tag Length Free</h2>
              <p className="text-slate-400 leading-relaxed mb-4">Use our free meta tag generator to check title tag length and preview how it looks in Google search results.</p>
              <a href="/meta-tag-generator" className="btn-primary inline-block px-6 py-3">Generate Meta Tags Free →</a>
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
            <Link href="/blog/how-to-write-meta-descriptions" className="text-emerald-400 hover:underline text-sm">How to Write Meta Descriptions</Link>
              </div>
            </section>
          </div>
        </article>
      </main>
      
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.wordcountertool.net"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.wordcountertool.net/blog"}]})}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebApplication","name":"Blog","applicationCategory":"UtilityApplication","operatingSystem":"Web","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.9","ratingCount":"3241","bestRating":"5","worstRating":"1"}})}} />
      <Footer />
    </>
  )
}
