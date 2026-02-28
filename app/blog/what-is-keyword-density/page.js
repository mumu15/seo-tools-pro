import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import FaqSchema from '../../../components/FaqSchema'

export const metadata = {
  title: 'What is Keyword Density? The Complete SEO Guide (2024)',
  description: 'Learn what keyword density is, what the ideal percentage is, and how to optimize your content for search engines without keyword stuffing.',
}

const faqs = [
  { q: "What is keyword density?", a: "Keyword density is the percentage of times a keyword appears in your content compared to the total word count. It is calculated by dividing keyword occurrences by total words and multiplying by 100." },
  { q: "What is the ideal keyword density?", a: "The ideal keyword density is 1-2% for your primary keyword. Going above 3% risks being flagged for keyword stuffing by Google which can hurt your rankings." },
  { q: "Does keyword density still matter for SEO?", a: "Keyword density matters less than it did 10 years ago. Modern Google uses semantic understanding and context rather than simple keyword frequency. Focus on natural usage and topical relevance rather than hitting a specific percentage." },
  { q: "What is keyword stuffing?", a: "Keyword stuffing is the practice of unnaturally overloading a page with keywords to manipulate rankings. Google penalizes keyword stuffing. Signs include awkward repetition, keywords in unnatural places and lists of keywords without context." },
  { q: "How do I check keyword density?", a: "Use a free keyword density checker tool. Paste your content and enter your target keyword to instantly see how many times it appears and what percentage of your total word count it represents." },
]

export default function WhatIsKeywordDensity() {
  return (
    <>
      <FaqSchema faqs={faqs} />
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8"><Link href="/blog" className="text-emerald-400 text-sm hover:underline">← Back to Blog</Link></div>
        <article>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">What is Keyword Density? The Complete SEO Guide (2024)</h1>
          <p className="text-slate-400 text-sm mb-8">Updated January 2024 · 9 min read</p>

          <div className="result-box mb-8 border-emerald-500/30">
            <h2 className="text-emerald-400 font-bold mb-3">Quick Answer</h2>
            <p className="text-white">Keyword density is the percentage of times your keyword appears in your content. The ideal keyword density is <strong>1-2%</strong>. Anything above 3% risks keyword stuffing penalties.</p>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">How to Calculate Keyword Density</h2>
              <p className="text-slate-400 leading-relaxed mb-4">The formula for keyword density is simple.</p>
              <div className="result-box text-center">
                <p className="text-emerald-400 font-mono text-lg font-bold">Keyword Density = (Keyword Occurrences ÷ Total Words) × 100</p>
              </div>
              <p className="text-slate-400 leading-relaxed mt-4 mb-4">For example: If your article is 1000 words and your keyword appears 15 times, your keyword density is 15 ÷ 1000 × 100 = <strong className="text-white">1.5%</strong>.</p>
              <div className="result-box">
                <h3 className="text-white font-bold mb-3">Quick Reference</h3>
                <div className="space-y-2">
                  {[
                    {density:"0.5% or less","500w":"2-3 times","1000w":"5 times","2000w":"10 times",status:"Too Low"},
                    {density:"1-2%","500w":"5-10 times","1000w":"10-20 times","2000w":"20-40 times",status:"Ideal"},
                    {density:"2-3%","500w":"10-15 times","1000w":"20-30 times","2000w":"40-60 times",status:"Acceptable"},
                    {density:"3%+","500w":"15+ times","1000w":"30+ times","2000w":"60+ times",status:"Too High"},
                  ].map((row,i) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b text-sm" style={{borderColor:"rgba(52,211,153,0.05)"}}>
                      <span className="text-emerald-400 font-bold">{row.density}</span>
                      <span className={`font-medium ${row.status==="Ideal"?"text-emerald-400":row.status==="Too High"?"text-red-400":"text-yellow-400"}`}>{row.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Keyword Density in 2024 — What Really Matters</h2>
              <p className="text-slate-400 leading-relaxed mb-4">Google has moved far beyond simple keyword counting. Here is what modern SEO keyword strategy looks like.</p>
              <div className="space-y-4">
                {[
                  {title:"Semantic Keywords",desc:"Google understands related terms and synonyms. Instead of repeating your exact keyword, use related words and phrases. If your keyword is 'mortgage calculator', also use 'home loan payment', 'monthly mortgage', 'mortgage rates'."},
                  {title:"Topical Coverage",desc:"Google rewards content that comprehensively covers a topic. Cover related subtopics, answer follow up questions and provide context rather than just stuffing your primary keyword."},
                  {title:"Natural Language",desc:"Write for humans first, search engines second. If your keyword appears naturally in the flow of writing at 1-2%, that is perfect. Never force keywords into sentences where they sound unnatural."},
                  {title:"Keyword Placement",desc:"Where your keyword appears matters as much as how often. Include it in your title, H1, first 100 words, at least one H2, and naturally throughout the body. These placements signal relevance to Google."},
                ].map((item,i) => (
                  <div key={i} className="result-box">
                    <h3 className="text-white font-bold mb-2">{item.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Signs of Keyword Stuffing to Avoid</h2>
              <div className="space-y-2">
                {[
                  "Repeating the same keyword in every sentence",
                  "Using keywords in sentences where they sound unnatural",
                  "Adding keyword lists or keyword blocks in footers",
                  "Using invisible text with keywords (black text on black background)",
                  "Adding keywords in meta keywords tags excessively",
                  "Using the same keyword in alt text for every image",
                  "Creating multiple pages targeting the same keyword",
                ].map((item,i) => (
                  <div key={i} className="result-box flex items-center gap-3">
                    <span className="text-red-400 text-lg">✗</span>
                    <p className="text-slate-400 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Check Your Keyword Density Free</h2>
              <p className="text-slate-400 leading-relaxed mb-4">Use our free keyword density checker to analyze your content and see exactly how your keywords are distributed throughout your text.</p>
              <Link href="/keyword-density" className="btn-primary inline-block px-6 py-3">Check Keyword Density Free →</Link>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq,i) => (
                  <div key={i} className="result-box">
                    <h3 className="text-white font-bold mb-2">{faq.q}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
