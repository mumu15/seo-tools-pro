import Header from '../../../components/Header'
import { ArticleSchema } from '../../components/AuthorSchema'
import AdUnit from '../../components/AdUnit'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import FaqSchema from '../../../components/FaqSchema'

export const metadata = {
  alternates: { canonical: 'https://www.wordcountertool.net/blog/how-to-write-meta-descriptions' },
  title: 'How to Write Perfect Meta Descriptions That Get Clicks (2026)',
  description: 'Learn how to write compelling meta descriptions that improve your click through rate from Google search results. Includes examples and templates.',
}

const faqs = [
  { q: 'How long should a meta description be?', a: 'Meta descriptions should be 150-160 characters. Google truncates longer descriptions. Aim for 150-155 to be safe.' },
  { q: 'Do meta descriptions affect SEO rankings?', a: 'Meta descriptions do not directly affect rankings but noticeably affect click through rate which indirectly influences rankings.' },
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
          <p className="text-slate-400 text-sm mb-8">Published January 2026 · Updated April 2026 · 8 min read</p>
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
                  {num:'4',title:'Include a call to action',desc:'Use action words like "Learn", "Discover", "Try" or "Calculate". A clear CTA increases click through rate noticeably.'},
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
          {/* Infographic */}
          <div className="my-8 rounded-xl overflow-hidden border border-slate-800">
            <img src="/images/blog/how-to-write-meta-descriptions.svg" alt="How To Write Meta Descriptions — key data" width={680} height={450} className="w-full h-auto" loading="lazy" />
          </div>

            <AdUnit slot="3248634657" />

      <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Generate Perfect Meta Tags Free</h2>
              <p className="text-slate-400 leading-relaxed mb-4">A meta tag generator with live Google search preview can create perfectly optimized title tags and meta descriptions.</p>
              <Link href="/meta-tag-generator" className="btn-primary inline-block px-6 py-3">Try the Meta Tag Generator Free →</Link>
            </section>

          {/* MID_AD */}
          <AdUnit slot="3248634657" />

            
          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-4">Meta Description Examples That Get Clicks</h2>
            <div className="space-y-3">
              <div className="result-box"><h3 className="text-white font-bold mb-2">Product Page</h3><p className="text-slate-400 text-sm leading-relaxed"><strong className="text-emerald-400">Bad:</strong> "We sell running shoes. Visit our store for the best selection." (Generic, no value proposition)<br/><strong className="text-emerald-400">Good:</strong> "Shop 200+ running shoes from Nike, ASICS and Brooks. Free shipping over $75. 90-day return policy. Find your perfect fit with our sizing guide." (Specific, includes benefits, numbers)</p></div>
              <div className="result-box"><h3 className="text-white font-bold mb-2">Blog Post</h3><p className="text-slate-400 text-sm leading-relaxed"><strong className="text-emerald-400">Bad:</strong> "Learn about investing in this full guide." (Vague, no specifics)<br/><strong className="text-emerald-400">Good:</strong> "Learn 7 proven investing strategies for beginners in 2026. From index funds to REITs, start building wealth with as little as $100/month. Data-backed guide." (Specific number, year, concrete detail)</p></div>
              <div className="result-box"><h3 className="text-white font-bold mb-2">Local Business</h3><p className="text-slate-400 text-sm leading-relaxed"><strong className="text-emerald-400">Bad:</strong> "Best pizza in town. Order now." (No differentiator, could be anyone)<br/><strong className="text-emerald-400">Good:</strong> "Wood-fired Neapolitan pizza in downtown Austin. 4.8 star rating, 2,000+ reviews. Order online for 15-min pickup or free delivery within 5 miles." (Location, social proof, convenience)</p></div>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-4">Meta Description Formula</h2>
            <p className="text-slate-400 leading-relaxed mb-4">The most effective meta descriptions follow this formula: <strong className="text-white">[Benefit/Hook] + [Specific Details/Numbers] + [Call to Action]</strong>. This structure tells the searcher what they will get (benefit), proves it is worth clicking (specifics), and guides them to take action (CTA).</p>
            <p className="text-slate-400 leading-relaxed mb-4">Include your target keyword naturally — Google bolds matching keywords in search results, which draws the eye to your listing. However, do not stuff keywords. One natural mention is sufficient. Focus on making the description compelling to humans, not search engines.</p>
            <p className="text-slate-400 leading-relaxed mb-4">Use active voice and power words: "Discover," "Learn," "Get," "Save," "Find," "Compare," "Calculate." Avoid passive constructions like "can be found" or "is provided." Active descriptions get 15-20% higher click-through rates than passive ones in A/B tests.</p>
          </section>
          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-4">Common Meta Description Mistakes</h2>
            <p className="text-slate-400 leading-relaxed mb-4"><strong className="text-red-400">Too short (under 120 characters):</strong> You are wasting valuable SERP real estate. Google gives you 155-160 characters — use them. Short descriptions look lazy compared to competitors with full, compelling descriptions.</p>
            <p className="text-slate-400 leading-relaxed mb-4"><strong className="text-red-400">Too long (over 160 characters):</strong> Google truncates descriptions at approximately 155-160 characters on desktop and 120 characters on mobile. Front-load your most important information so it is visible even if truncated.</p>
            <p className="text-slate-400 leading-relaxed mb-4"><strong className="text-red-400">Duplicate descriptions:</strong> Every page should have a unique meta description. Using the same description across multiple pages confuses search engines and provides no differentiation for searchers. Even auto-generated descriptions with the page title are better than duplicates.</p>
            <p className="text-slate-400 leading-relaxed mb-4"><strong className="text-red-400">No call to action:</strong> Descriptions without a CTA get lower click-through rates. Always end with an action-oriented phrase: "Learn more," "Get started free," "Compare prices now," or "Try it today."</p>
          </section>
          <section>
              <h2 className="text-2xl font-display font-bold text-white mb-4">Frequently Asked Questions</h2>
              <div className="space-y-4">{faqs.map((faq,i)=>(<div key={i} className="result-box"><h3 className="text-white font-bold mb-2">{faq.q}</h3><p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p></div>))}</div>
            
          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-4">What most guides get wrong</h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">Most writing advice reads like it was assembled by committee. "Be clear and concise." "Know your audience." Sure. But that is the starting line, not the finish.</p>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">What actually moves the needle is specificity. Not "write a compelling intro" but "start with a number, a question, or a bold claim that your reader can disagree with." Not "use keywords naturally" but "put your target phrase in the first 100 words, the last paragraph, and one H2."</p>
            <p className="text-slate-400 text-sm leading-relaxed">The gap between good-enough writing and writing that performs well is smaller than people think. A few mechanical fixes — shorter paragraphs, stronger verbs, removing filler — close most of the gap. The rest is just practice and feedback loops.</p>
          </section>
</section>
          </div>
        </article>
      </main>
      
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.wordcountertool.net"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.wordcountertool.net/blog"}]})}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebApplication","name":"Blog","applicationCategory":"UtilityApplication","operatingSystem":"Web","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"}})}} />
      
        <div className="bg-gradient-to-r from-emerald-900/20 to-teal-900/10 border border-emerald-500/20 rounded-2xl p-6 mb-8">
          <h2 className="text-lg font-bold text-white mb-3">Try These Tools</h2>
          <div className="flex flex-wrap gap-2">
            <a href="/meta-tag-generator" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Meta Tag Generator</a>
            <a href="/character-counter" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Character Counter</a>
            <a href="/keyword-density" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Keyword Density</a>
            <a href="/word-counter" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Word Counter</a>
          </div>
        </div>
      <Footer />
    </>
  )
}