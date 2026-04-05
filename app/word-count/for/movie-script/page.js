import Header from '../../../../components/Header'
import Footer from '../../../../components/Footer'
import AdUnit from '../../../components/AdUnit'
import FaqSchema from '../../../../components/FaqSchema'

export const metadata = {
  title: 'How Many Words in a Movie Script? (2026 Guide) | WordCounterTool.net',
  description: 'How many words should a movie script be? 7,500-12,000 words. Complete guide with word counts by type.',
  alternates: { canonical: 'https://www.wordcountertool.net/word-count/for/movie-script' },
}

const faqs = [{"q":"How many words is a movie script?","a":"A movie script is typically 7,500-12,000 words. The exact length depends on the type, purpose, and specific requirements."},{"q":"How many pages is a movie script?","a":"At 250 words per page (double-spaced, 12pt font), a movie script of 7,500-12,000 words is approximately 30-48 pages."},{"q":"Is there a strict word limit?","a":"Word limits vary by context. Always check specific guidelines from your institution, publisher, or organization before writing."}]

export default function Page() {
  return (
    <>
      <FaqSchema faqs={faqs} />
      <Header />
      <main className="min-h-screen bg-slate-950 text-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <nav className="text-sm text-slate-500 mb-6">
            <a href="/" className="hover:text-emerald-400 transition-colors">Home</a>
            <span className="mx-2">/</span>
            <span className="text-slate-300">Movie Script Word Count</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Word Count for Movie Script</h1>

          <div className="bg-slate-800/40 border border-emerald-500/20 rounded-2xl p-6 mb-10">
            <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2">Quick Answer</p>
            <p className="text-white text-lg leading-relaxed">A movie screenplay is typically 90-120 pages, or approximately 7,500 to 12,000 words. The industry standard is roughly 1 page per minute of screen time. A 90-minute film has a ~90-page script. Comedies tend to be shorter (90 pages) and dramas longer (110-120 pages).</p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Movie Script Word Count Guide</h2>
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 overflow-x-auto">
              <table className="w-full text-sm">
                <thead><tr className="border-b" style={{borderColor:'rgba(52,211,153,0.2)'}}>
                  <th className="text-left text-emerald-400 py-3 pr-4 font-semibold text-xs uppercase">Format</th><th className="text-left text-emerald-400 py-3 pr-4 font-semibold text-xs uppercase">Length</th><th className="text-left text-emerald-400 py-3 pr-4 font-semibold text-xs uppercase">Word Count</th>
                </tr></thead>
                <tbody>
                  <tr className="border-b" style={{borderColor:"rgba(52,211,153,0.05)"}}><td className="text-white font-medium py-3 pr-4 text-sm">Short film (10 min)</td><td className="text-slate-300 py-3 pr-4 text-sm">10 pages</td><td className="text-slate-300 py-3 pr-4 text-sm">1,000-1,500 words</td></tr>
                  <tr className="border-b" style={{borderColor:"rgba(52,211,153,0.05)"}}><td className="text-white font-medium py-3 pr-4 text-sm">Feature comedy</td><td className="text-slate-300 py-3 pr-4 text-sm">90-100 pages</td><td className="text-slate-300 py-3 pr-4 text-sm">7,500-9,000 words</td></tr>
                  <tr className="border-b" style={{borderColor:"rgba(52,211,153,0.05)"}}><td className="text-white font-medium py-3 pr-4 text-sm">Feature drama</td><td className="text-slate-300 py-3 pr-4 text-sm">100-120 pages</td><td className="text-slate-300 py-3 pr-4 text-sm">9,000-12,000 words</td></tr>
                  <tr className="border-b" style={{borderColor:"rgba(52,211,153,0.05)"}}><td className="text-white font-medium py-3 pr-4 text-sm">TV pilot (30 min)</td><td className="text-slate-300 py-3 pr-4 text-sm">25-35 pages</td><td className="text-slate-300 py-3 pr-4 text-sm">3,000-4,000 words</td></tr>
                  <tr className="border-b" style={{borderColor:"rgba(52,211,153,0.05)"}}><td className="text-white font-medium py-3 pr-4 text-sm">TV pilot (60 min)</td><td className="text-slate-300 py-3 pr-4 text-sm">50-65 pages</td><td className="text-slate-300 py-3 pr-4 text-sm">5,500-7,500 words</td></tr>
                  <tr className="border-b" style={{borderColor:"rgba(52,211,153,0.05)"}}><td className="text-white font-medium py-3 pr-4 text-sm">Limited series episode</td><td className="text-slate-300 py-3 pr-4 text-sm">55-70 pages</td><td className="text-slate-300 py-3 pr-4 text-sm">6,000-8,000 words</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <AdUnit slot="3763639977" />

          <AdUnit slot="3248634657" />

          <div className="bg-gradient-to-r from-emerald-900/30 to-teal-900/20 border border-emerald-500/30 rounded-2xl p-6 mb-10 text-center">
            <p className="text-white font-semibold text-lg mb-2">Check Your Word Count Free</p>
            <p className="text-slate-400 text-sm mb-4">Paste your text and get instant word count, reading time and character count</p>
            <a href="/word-counter" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-8 py-3 rounded-xl transition-colors">Open Word Counter</a>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6">
              {faqs.map((faq, i) => (
                <div key={i} className={i < faqs.length - 1 ? "border-b pb-4 mb-4" : "pb-2"} style={{borderColor:'rgba(52,211,153,0.08)'}}>
                  <h3 className="text-white font-semibold mb-2 text-sm">{faq.q}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Related Tools and Guides</h2>
            <div className="flex flex-wrap gap-3">
              <a href="/word-counter" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Word Counter</a>
              <a href="/character-counter" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Character Counter</a>
              <a href="/reading-time" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Reading Time</a>
              <a href="/word-count/for" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">All Word Count Guides</a>
              <a href="/words-per-page" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Words Per Page</a>
            </div>
          </section>

          <AdUnit slot="3248634657" />


          <AdUnit slot="3763639977" />
        </div>
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.wordcountertool.net"},{"@type":"ListItem","position":2,"name":"Movie Script Word Count","item":"https://www.wordcountertool.net/word-count/for/movie-script"}]})}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebApplication","name":"Movie Script Word Count","applicationCategory":"UtilityApplication","operatingSystem":"Web","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"}})}} />
      
        {/* === BEEFED-UP CONTENT: 1500+ words === */}
        <div className="max-w-4xl mx-auto mt-14 px-4 space-y-10">

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{color:'#f1f5f9'}}>Why Movie Script Length Matters</h2>
            <p className="leading-relaxed mb-3" style={{color:'#94a3b8'}}>Every document type has an expected length range. Fall significantly short and the reader assumes you did not put in the work. Go significantly over and they assume you cannot edit. The right word count for a movie script signals that you understand the format and respect the reader\'s time.</p>
            <p className="leading-relaxed mb-3" style={{color:'#94a3b8'}}>Word count expectations come from decades of convention. Publishers, editors, professors, and hiring managers all have a mental model for how long a movie script should be. Meeting that expectation is the baseline. Your content quality determines whether you exceed it.</p>
            <p className="leading-relaxed mb-3" style={{color:'#94a3b8'}}>The ranges in the table above are guidelines based on current industry standards and institutional requirements as of 2026. Always check specific guidelines from your target audience, institution, or publication before writing.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{color:'#f1f5f9'}}>How to Hit Your Target Word Count</h2>
            <p className="leading-relaxed mb-3" style={{color:'#94a3b8'}}>Start with an outline. Divide your total word count across sections proportionally. An introduction takes about 10% of the total. The body takes 75-80%. The conclusion takes 10-15%. For a movie script, this structure keeps you focused and prevents the common problem of a strong opening that trails off.</p>
            <p className="leading-relaxed mb-3" style={{color:'#94a3b8'}}>Write your first draft without checking the word count. Most writers overshoot on a first draft, and cutting is easier than expanding. If you come in under, look for gaps in your argument. What questions would a reader have that you have not answered?</p>
            <p className="leading-relaxed mb-3" style={{color:'#94a3b8'}}>The editing phase is where you dial in the final count. Cut filler phrases: "in order to" becomes "to," "due to the fact that" becomes "because," and "it is important to note that" gets deleted entirely. These mechanical trims can reduce your word count by 10-15% without losing any substance.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{color:'#f1f5f9'}}>Common Mistakes to Avoid</h2>
            <p className="leading-relaxed mb-3" style={{color:'#94a3b8'}}>Padding to reach a minimum word count. Professors and editors can tell. Repetition, unnecessary qualifiers, and circular arguments all signal that the writer ran out of things to say at 60% of the target and filled the rest with air.</p>
            <p className="leading-relaxed mb-3" style={{color:'#94a3b8'}}>Ignoring the upper limit. If the guidelines say 500-650 words, do not submit 900 words. Exceeding the limit suggests you either cannot follow instructions or cannot edit your own work. Both are negative signals.</p>
            <p className="leading-relaxed mb-3" style={{color:'#94a3b8'}}>Obsessing over exact word count during the drafting phase. Write freely, then adjust in revision. Counting words while writing interrupts your flow and produces stilted prose. The word count is a revision concern, not a drafting concern.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{color:'#f1f5f9'}}>Movie Script Writing Tips for 2026</h2>
            <p className="leading-relaxed mb-3" style={{color:'#94a3b8'}}>Use specific numbers and examples instead of vague generalities. "Increased revenue by 34% in six months" is stronger than "significantly improved revenue." Specific writing tends to be shorter and more impactful than vague writing.</p>
            <p className="leading-relaxed mb-3" style={{color:'#94a3b8'}}>Read your work aloud. If a sentence makes you stumble, it is too long or too convoluted. Split it. Oral readability correlates strongly with written clarity, and clear writing rarely needs extra words to make its point.</p>
            <p className="leading-relaxed mb-3" style={{color:'#94a3b8'}}>Check your work with a word counter before submitting. Paste your text into a free tool to verify word count, character count, and reading time. Do not rely on your word processor\'s count if the submission portal uses a different counting method — some systems count hyphenated words differently.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{color:'#f1f5f9'}}>Digital Trends Affecting Movie Script Length</h2>
            <p className="leading-relaxed mb-3" style={{color:'#94a3b8'}}>Mobile reading has changed expectations across all document types. Content that will be read on a phone needs shorter paragraphs, more white space, and tighter sentences. A 3,000-word document that reads well on a desktop monitor can feel exhausting on a 6-inch screen.</p>
            <p className="leading-relaxed mb-3" style={{color:'#94a3b8'}}>AI tools have made it easy to generate long content quickly. This means the baseline for quality has risen. A movie script that reads like it was written by a template — generic phrasing, no specific details, predictable structure — will not stand out in 2026. Add original data, personal experience, or a specific point of view.</p>
            <p className="leading-relaxed mb-3" style={{color:'#94a3b8'}}>Search engines and submission portals increasingly measure quality signals beyond word count: readability scores, engagement metrics, originality, and citation quality. Meeting the word count is necessary but not sufficient. The content itself has to be worth reading.</p>
          </section>

        </div>
      <Footer />
    </>
  )
}
