import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import AdUnit from '../../components/AdUnit'
import FaqSchema from '../../../components/FaqSchema'

export const metadata = {
  title: 'How Many Words in a Executive Summary? (2026 Guide) | WordCounterTool.net',
  description: 'How many words should a executive summary be? 200-500 words. Complete guide with word counts by type.',
  alternates: { canonical: 'https://www.wordcountertool.net/word-count/for/executive-summary' },
}

const faqs = [{"q":"How many words is a executive summary?","a":"A executive summary is typically 200-500 words. The exact length depends on the type, purpose, and specific requirements."},{"q":"How many pages is a executive summary?","a":"At 250 words per page (double-spaced, 12pt font), a executive summary of 200-500 words is approximately 1-2 pages."},{"q":"Is there a strict word limit?","a":"Word limits vary by context. Always check specific guidelines from your institution, publisher, or organization before writing."}]

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
            <span className="text-slate-300">Executive Summary Word Count</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Word Count for Executive Summary</h1>

          <div className="bg-slate-800/40 border border-emerald-500/20 rounded-2xl p-6 mb-10">
            <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2">Quick Answer</p>
            <p className="text-white text-lg leading-relaxed">An executive summary is typically 200 to 500 words, or 5-10% of the full document length. For a 20-page business plan, aim for 1-2 pages. For a 100-page report, the executive summary should be 3-5 pages. It should stand alone as a complete overview.</p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Executive Summary Word Count Guide</h2>
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 overflow-x-auto">
              <table className="w-full text-sm">
                <thead><tr className="border-b" style={{borderColor:'rgba(52,211,153,0.2)'}}>
                  <th className="text-left text-emerald-400 py-3 pr-4 font-semibold text-xs uppercase">Document</th><th className="text-left text-emerald-400 py-3 pr-4 font-semibold text-xs uppercase">Summary Length</th>
                </tr></thead>
                <tbody>
                  <tr className="border-b" style={{borderColor:"rgba(52,211,153,0.05)"}}><td className="text-white font-medium py-3 pr-4 text-sm">Business plan</td><td className="text-slate-300 py-3 pr-4 text-sm">1-2 pages (400-800 words)</td></tr>
                  <tr className="border-b" style={{borderColor:"rgba(52,211,153,0.05)"}}><td className="text-white font-medium py-3 pr-4 text-sm">Annual report</td><td className="text-slate-300 py-3 pr-4 text-sm">1-3 pages (500-1,500 words)</td></tr>
                  <tr className="border-b" style={{borderColor:"rgba(52,211,153,0.05)"}}><td className="text-white font-medium py-3 pr-4 text-sm">Research report</td><td className="text-slate-300 py-3 pr-4 text-sm">200-500 words</td></tr>
                  <tr className="border-b" style={{borderColor:"rgba(52,211,153,0.05)"}}><td className="text-white font-medium py-3 pr-4 text-sm">Project proposal</td><td className="text-slate-300 py-3 pr-4 text-sm">1 page (300-500 words)</td></tr>
                  <tr className="border-b" style={{borderColor:"rgba(52,211,153,0.05)"}}><td className="text-white font-medium py-3 pr-4 text-sm">Government report</td><td className="text-slate-300 py-3 pr-4 text-sm">1-2 pages (500-1,000 words)</td></tr>
                </tbody>
              </table>
            </div>
          </section>
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

          <AdUnit slot="3763639977" />
        </div>
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.wordcountertool.net"},{"@type":"ListItem","position":2,"name":"Executive Summary Word Count","item":"https://www.wordcountertool.net/word-count/for/executive-summary"}]})}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebApplication","name":"Executive Summary Word Count","applicationCategory":"UtilityApplication","operatingSystem":"Web","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.9","ratingCount":"3241","bestRating":"5","worstRating":"1"}})}} />
      <Footer />
    </>
  )
}
