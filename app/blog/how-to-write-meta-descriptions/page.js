import Header from '../../../components/Header'
import AdUnit from '../../components/AdUnit'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import FaqSchema from '../../../components/FaqSchema'

export const metadata = {
  title: 'How to Write Perfect Meta Descriptions That Get Clicks (2026)',
  description: 'Learn how to write compelling meta descriptions that improve your click through rate from Google search results. Includes examples and templates.',
}

const faqs = [
  { q: 'How long should a meta description be?', a: 'Meta descriptions should be 150-160 characters. Google truncates longer descriptions. Aim for 150-155 to be safe.' },
  { q: 'Do meta descriptions affect SEO rankings?', a: 'Meta descriptions do not directly affect rankings but significantly affect click through rate which indirectly influences rankings.' },
  { q: 'What happens if I do not write a meta description?', a: 'Google will automatically generate one from your page content. Auto-generated descriptions are often poorly written and do not encourage clicks.' },
  { q: 'Should I include keywords in my meta description?', a: 'Yes. Google bolds keywords in meta descriptions when they match the search query which catches the searcher eye.' },
  { q: 'Can I use the same meta description on multiple pages?', a: 'No. Every page should have a unique meta description. Duplicate descriptions reduce click through rate.' },
]

export default function Post() {
  return (
    <>
      <FaqSchema faqs={faqs} />
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8"><Link href="/blog" className="text-emerald-400 text-sm hover:underline">← Back to Blog</Link></div>
        <article>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">How to Write Perfect Meta Descriptions That Get Clicks (2026)</h1>
          <p className="text-slate-400 text-sm mb-8">Updated February 2026 · 8 min read</p>
          <div className="result-box mb-8 border-emerald-500/30">
            <h2 className="text-emerald-400 font-bold mb-3">Quick Answer</h2>
            <p className="text-white">Write meta descriptions that are <strong>150-160 characters</strong>, include your <strong>primary keyword</strong>, have a <strong>call to action</strong> and match <strong>search intent</strong>.</p>
          </div>
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">7 Rules of Great Meta Descriptions</h2>
              <div className="space-y-3">
                {[
                  {num:'1',title:'Keep it 150-160 characters',desc:'Google truncates longer descriptions. Write within this limit to ensure your full message is visible in search results.'},
                  {num:'2',title:'Include your primary keyword',desc:'Google bolds keywords that match the search query. This catches the eye of searchers and confirms your page is relevant.'},
                  {num:'3',title:'Match search intent',desc:'Your description must match what the searcher is looking for. Mismatched descriptions get ignored even if well written.'},
                  {num:'4',title:'Include a call to action',desc:'Use action words like "Learn", "Discover", "Try" or "Calculate". A clear CTA increases click through rate significantly.'},
                  {num:'5',title:'Highlight your unique value',desc:'What makes your page better than competitors? Free? Instant? No sign up? Mention your key differentiator.'},
                  {num:'6',title:'Write for humans not robots',desc:'Your meta description is marketing copy. Make it engaging, clear and persuasive.'},
                  {num:'7',title:'Make every description unique',desc:'Every page needs its own unique meta description. Duplicates are a common SEO mistake.'},
                ].map((item,i)=>(
                  <div key={i} className="result-box flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-sm flex-shrink-0">{item.num}</div>
                    <div><h3 className="text-white font-bold mb-1">{item.title}</h3><p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p></div>
                  </div>
                ))}
              </div>
            </section>
            <AdUnit slot="3248634657" />

      <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Generate Perfect Meta Tags Free</h2>
              <p className="text-slate-400 leading-relaxed mb-4">Use our free meta tag generator with live Google search preview to create perfectly optimized title tags and meta descriptions.</p>
              <Link href="/meta-tag-generator" className="btn-primary inline-block px-6 py-3">Try the Meta Tag Generator Free →</Link>
            </section>
            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Frequently Asked Questions</h2>
              <div className="space-y-4">{faqs.map((faq,i)=>(<div key={i} className="result-box"><h3 className="text-white font-bold mb-2">{faq.q}</h3><p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p></div>))}</div>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}