import Header from '../../../components/Header'
import AdUnit from '../../components/AdUnit'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import FaqSchema from '../../../components/FaqSchema'

export const metadata = {
  title: 'How to Use Keywords in Blog Posts: The Right Way (2026)',
  description: 'Learn exactly how to use keywords in blog posts for maximum SEO impact in 2026. Includes placement strategy, density tips and common mistakes to avoid.',
}

const faqs = [
  {
    "q": "How many times should I use a keyword in a blog post?",
    "a": "Use your primary keyword 1-2 times per 100 words which equals a 1-2% keyword density. For a 1,500 word post that means 15-30 mentions. Quality and natural placement matter more than hitting exact numbers."
  },
  {
    "q": "Where should I put my main keyword in a blog post?",
    "a": "Put your main keyword in the page title, within the first 100 words, in at least one H2 subheading, in the meta description and in the URL slug."
  },
  {
    "q": "What is keyword stuffing and why is it bad?",
    "a": "Keyword stuffing means forcing your keyword unnaturally into content. Google penalises it with lower rankings. Modern Google understands context so write naturally and use synonyms."
  },
  {
    "q": "Should I use exact match keywords or variations?",
    "a": "Use a mix. Your primary keyword should appear in exact match form in the title and opening. Throughout the body use variations and synonyms so the content reads naturally."
  },
  {
    "q": "How do LSI keywords help blog posts?",
    "a": "LSI (Latent Semantic Indexing) keywords are terms related to your main topic. Including them signals to Google that your content fully covers the subject. For \"word counter\" LSI keywords include character count, reading time and word frequency."
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
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">How to Use Keywords in Blog Posts: The Right Way (2026)</h1>
          <p className="text-slate-400 text-sm mb-8">February 2026 · 8 min read</p>
          <div className="result-box mb-8 border-emerald-500/30">
            <h2 className="text-emerald-400 font-bold mb-3">Quick Answer</h2>
            <p className="text-white">Include your primary keyword in the <strong>title, first 100 words, one H2 heading and meta description</strong>. Use it naturally 1–2 times per 100 words throughout. Never force it — Google rewards natural language.</p>
          </div>
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Keyword Placement Checklist</h2>
              <p className="text-slate-400 leading-relaxed mb-4">Use this checklist to make sure every blog post is properly optimised before publishing.</p>
              <ul className="space-y-2 mb-4">
                <li className="text-slate-400 text-sm flex items-start gap-2"><span className="text-emerald-400 mt-1">→</span><span>Primary keyword in the page title (H1) — ideally within the first 3 words</span></li>
                <li className="text-slate-400 text-sm flex items-start gap-2"><span className="text-emerald-400 mt-1">→</span><span>Primary keyword in the URL slug — short and clean, no stop words</span></li>
                <li className="text-slate-400 text-sm flex items-start gap-2"><span className="text-emerald-400 mt-1">→</span><span>Primary keyword in the meta description — naturally in the first sentence</span></li>
                <li className="text-slate-400 text-sm flex items-start gap-2"><span className="text-emerald-400 mt-1">→</span><span>Primary keyword in the first 100 words of the content</span></li>
                <li className="text-slate-400 text-sm flex items-start gap-2"><span className="text-emerald-400 mt-1">→</span><span>Primary keyword in at least one H2 subheading</span></li>
                <li className="text-slate-400 text-sm flex items-start gap-2"><span className="text-emerald-400 mt-1">→</span><span>Primary keyword in the alt text of at least one image</span></li>
                <li className="text-slate-400 text-sm flex items-start gap-2"><span className="text-emerald-400 mt-1">→</span><span>Secondary keywords and synonyms used naturally throughout</span></li>
                <li className="text-slate-400 text-sm flex items-start gap-2"><span className="text-emerald-400 mt-1">→</span><span>Related LSI keywords included where relevant</span></li>
                <li className="text-slate-400 text-sm flex items-start gap-2"><span className="text-emerald-400 mt-1">→</span><span>No keyword stuffing — every use should read naturally</span></li>
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Understanding Keyword Density in 2026</h2>
              <p className="text-slate-400 leading-relaxed mb-4">Keyword density is the percentage of times a keyword appears divided by total words. A density of 1-2% is healthy. Below 0.5% and the page may not rank for the term. Above 3% and Google may flag it as keyword stuffing. However these are guidelines not laws. Well-written content that fully covers a topic naturally achieves good keyword density without counting.</p>
            </section>
            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Semantic SEO: Beyond Keywords</h2>
              <p className="text-slate-400 leading-relaxed mb-4">Modern SEO is about topical authority not keyword repetition. Google understands synonyms, related concepts and question-answer relationships. Instead of repeating your keyword over and over cover the topic from multiple angles. Use subheadings as questions, answer them thoroughly and link to related content on your site. This approach builds the topical authority that drives sustainable rankings.</p>
            </section>
            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Check Your Keyword Density Free</h2>
              <p className="text-slate-400 leading-relaxed mb-4">Paste your blog post into our free keyword density checker to see exactly how often your keywords appear.</p>
              <a href="/keyword-density" className="btn-primary inline-block px-6 py-3">Check Keyword Density Free →</a>
            </section>

            <AdUnit slot="3248634657" />

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Frequently Asked Questions</h2>
              <div className="space-y-4">{faqs.map((faq,i)=>(<div key={i} className="result-box"><h3 className="text-white font-bold mb-2">{faq.q}</h3><p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p></div>))}</div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Related Tools</h2>
              <div className="flex flex-wrap gap-3">
                <Link href="/keyword-density" className="text-emerald-400 hover:underline text-sm">Keyword Density Checker</Link>
            <Link href="/blog/keyword-density-seo-guide" className="text-emerald-400 hover:underline text-sm">Keyword Density SEO Guide</Link>
            <Link href="/meta-tag-generator" className="text-emerald-400 hover:underline text-sm">Meta Tag Generator</Link>
              </div>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
