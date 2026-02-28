import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import FaqSchema from '../../../components/FaqSchema'

export const metadata = {
  title: 'How to Write Perfect Meta Descriptions That Get Clicks (2026)',
  description: 'Learn how to write compelling meta descriptions that improve your click through rate from Google search results. Includes examples and templates.',
}

const faqs = [
  { q: "How long should a meta description be?", a: "Meta descriptions should be 150-160 characters long. Google typically truncates descriptions longer than 160 characters in search results. Aim for 150-155 characters to be safe." },
  { q: "Do meta descriptions affect SEO rankings?", a: "Meta descriptions do not directly affect Google rankings. However they significantly affect click through rate from search results which indirectly influences rankings through engagement signals." },
  { q: "What happens if I don't write a meta description?", a: "If you do not write a meta description, Google will automatically generate one from your page content. Auto-generated descriptions are often poorly written and do not encourage clicks." },
  { q: "Should I include keywords in my meta description?", a: "Yes. Google bolds keywords in meta descriptions when they match the search query. Include your primary keyword naturally in your meta description to catch the searcher's eye." },
  { q: "Can I use the same meta description on multiple pages?", a: "No. Every page should have a unique meta description. Duplicate meta descriptions are a common SEO mistake that reduces your click through rate and can confuse Google." },
]

export default function HowToWriteMetaDescriptions() {
  return (
    <>
      <FaqSchema faqs={faqs} />
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8"><Link href="/blog" className="text-emerald-400 text-sm hover:underline">← Back to Blog</Link></div>
        <article>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">How to Write Perfect Meta Descriptions That Get Clicks</h1>
          <p className="text-slate-400 text-sm mb-8">Updated February 2026 · 8 min read</p>

          <div className="result-box mb-8 border-emerald-500/30">
            <h2 className="text-emerald-400 font-bold mb-3">Quick Answer</h2>
            <p className="text-white">Write meta descriptions that are <strong>150-160 characters</strong>, include your <strong>primary keyword</strong>, have a clear <strong>call to action</strong>, and match the <strong>search intent</strong> of your target keyword.</p>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">What is a Meta Description?</h2>
              <p className="text-slate-400 leading-relaxed mb-4">A meta description is the short summary text that appears below your page title in Google search results. While it does not directly affect rankings, it is your best opportunity to convince searchers to click your result instead of a competitor.</p>
              <div className="result-box" style={{borderColor:"rgba(52,211,153,0.3)"}}>
                <p className="text-xs text-slate-500 mb-2">How it appears in Google:</p>
                <p className="text-blue-400 text-sm font-medium mb-1">How to Write Meta Descriptions That Get Clicks | WordCounterTool</p>
                <p className="text-green-500 text-xs mb-1">wordcountertool.net/blog/how-to-write-meta-descriptions</p>
                <p className="text-slate-300 text-sm">Learn how to write compelling meta descriptions that improve your click through rate from Google search results. Includes examples and templates.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">The 7 Rules of Writing Great Meta Descriptions</h2>
              <div className="space-y-4">
                {[
                  {num:"1",title:"Keep it 150-160 characters",desc:"Google truncates descriptions longer than 160 characters with an ellipsis. Write within this limit to ensure your full message is visible. Aim for 150-155 characters to be safe on all devices."},
                  {num:"2",title:"Include your primary keyword",desc:"Google bolds keywords in search results when they match the search query. Include your target keyword naturally in your description. This catches the eye of searchers and confirms your page is relevant."},
                  {num:"3",title:"Match search intent",desc:"Your description must match what the searcher is looking for. If they want a how-to guide, mention that. If they want a tool, mention that. Descriptions that mismatch intent get ignored even if they are well written."},
                  {num:"4",title:"Include a call to action",desc:"Tell searchers what to do. Use action words like 'Learn', 'Discover', 'Find out', 'Try', 'Get', 'Calculate'. A clear call to action increases click through rate significantly."},
                  {num:"5",title:"Highlight your unique value",desc:"What makes your page better than the other 9 results on page 1? Free? Instant? No sign up? Comprehensive? Mention your key differentiator. This is why someone should click your result specifically."},
                  {num:"6",title:"Write for humans not robots",desc:"Your meta description is marketing copy. Write it to appeal to a human reader not to satisfy an algorithm. Make it engaging, clear and persuasive."},
                  {num:"7",title:"Make every page description unique",desc:"Every page needs its own unique meta description that accurately describes that specific page. Duplicate descriptions are a common SEO mistake that reduces your overall click through rate."},
                ].map((item,i) => (
                  <div key={i} className="result-box">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-sm flex-shrink-0">{item.num}</div>
                      <div>
                        <h3 className="text-white font-bold mb-2">{item.title}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Meta Description Templates That Work</h2>
              <div className="space-y-3">
                {[
                  {type:"How-to Article",template:"Learn how to [achieve goal] with our step-by-step guide. Discover [benefit 1], [benefit 2] and [benefit 3]. Free, no sign up required."},
                  {type:"Tool or Calculator",template:"Free [tool name] — [what it does] instantly. No sign up required. [Key benefit]. Try it free now."},
                  {type:"List Article",template:"Discover the [number] best [topic] for [audience]. We cover [subtopic 1], [subtopic 2] and more. Updated [year]."},
                  {type:"Product Page",template:"[Product name] — [key benefit]. [Feature 1], [Feature 2] and [Feature 3]. [Call to action] today."},
                  {type:"Comparison Article",template:"[Option A] vs [Option B] — which is better? We compare [factor 1], [factor 2] and [factor 3] to help you decide."},
                ].map((item,i) => (
                  <div key={i} className="result-box">
                    <p className="text-emerald-400 text-xs font-bold mb-2">{item.type}</p>
                    <p className="text-slate-300 text-sm italic">"{item.template}"</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Generate Perfect Meta Tags Free</h2>
              <p className="text-slate-400 leading-relaxed mb-4">Use our free meta tag generator to create perfectly optimized title tags and meta descriptions with a live Google search preview so you can see exactly how your page will appear in search results.</p>
              <Link href="/meta-tag-generator" className="btn-primary inline-block px-6 py-3">Try the Meta Tag Generator Free →</Link>
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
