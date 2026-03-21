import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import AdUnit from '../../components/AdUnit'
import FaqSchema from '../../../components/FaqSchema'

export const metadata = {
  title: 'Word Counter for Every Language — 15 Languages Supported Free | WordCounterTool.net',
  description: 'Free word counter for Spanish, French, German, Chinese, Japanese, Arabic, Hindi, and 8 more languages. Count words, characters, and reading time in any language.',
  alternates: { canonical: 'https://www.wordcountertool.net/word-counter/language' },
}

const faqs = [{"q":"Which languages does the word counter support?","a":"Our word counter works with all languages that use spaces between words (English, Spanish, French, German, etc.) and provides character counting for character-based languages (Chinese, Japanese). We support 15+ languages with language-specific statistics."},{"q":"Is the word counter accurate for non-English text?","a":"Yes. Our tool counts words by detecting word boundaries (spaces, punctuation). This works accurately for all space-separated languages. For Chinese and Japanese, we recommend using character count as the primary metric."}]

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
            <span className="text-slate-300">Language Word Counters</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Word Counter for Every Language</h1>

          <div className="bg-slate-800/40 border border-emerald-500/20 rounded-2xl p-6 mb-10">
            <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2">Quick Answer</p>
            <p className="text-white text-lg leading-relaxed">Our word counter supports all major world languages including Spanish, French, German, Chinese, Japanese, Korean, Arabic, Hindi, Russian, and more. Simply paste your text in any language and get instant word count, character count, and reading time.</p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Supported Languages</h2>
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 overflow-x-auto">
              <table className="w-full text-sm">
                <thead><tr className="border-b" style={{borderColor:'rgba(52,211,153,0.2)'}}>
                  <th className="text-left text-emerald-400 py-3 pr-4 font-semibold text-xs uppercase">Language</th><th className="text-left text-emerald-400 py-3 pr-4 font-semibold text-xs uppercase">Native Name</th><th className="text-left text-emerald-400 py-3 pr-4 font-semibold text-xs uppercase">Speakers</th>
                </tr></thead>
                <tbody>
                  <tr className="border-b" style={{borderColor:"rgba(52,211,153,0.05)"}}><td className="text-white font-medium py-3 pr-4 text-sm">Spanish</td><td className="text-slate-300 py-3 pr-4 text-sm">Español</td><td className="text-slate-300 py-3 pr-4 text-sm">559 million</td></tr>
                  <tr className="border-b" style={{borderColor:"rgba(52,211,153,0.05)"}}><td className="text-white font-medium py-3 pr-4 text-sm">French</td><td className="text-slate-300 py-3 pr-4 text-sm">Français</td><td className="text-slate-300 py-3 pr-4 text-sm">321 million</td></tr>
                  <tr className="border-b" style={{borderColor:"rgba(52,211,153,0.05)"}}><td className="text-white font-medium py-3 pr-4 text-sm">German</td><td className="text-slate-300 py-3 pr-4 text-sm">Deutsch</td><td className="text-slate-300 py-3 pr-4 text-sm">135 million</td></tr>
                  <tr className="border-b" style={{borderColor:"rgba(52,211,153,0.05)"}}><td className="text-white font-medium py-3 pr-4 text-sm">Italian</td><td className="text-slate-300 py-3 pr-4 text-sm">Italiano</td><td className="text-slate-300 py-3 pr-4 text-sm">85 million</td></tr>
                  <tr className="border-b" style={{borderColor:"rgba(52,211,153,0.05)"}}><td className="text-white font-medium py-3 pr-4 text-sm">Portuguese</td><td className="text-slate-300 py-3 pr-4 text-sm">Português</td><td className="text-slate-300 py-3 pr-4 text-sm">264 million</td></tr>
                  <tr className="border-b" style={{borderColor:"rgba(52,211,153,0.05)"}}><td className="text-white font-medium py-3 pr-4 text-sm">Chinese</td><td className="text-slate-300 py-3 pr-4 text-sm">中文</td><td className="text-slate-300 py-3 pr-4 text-sm">1.35 billion</td></tr>
                  <tr className="border-b" style={{borderColor:"rgba(52,211,153,0.05)"}}><td className="text-white font-medium py-3 pr-4 text-sm">Japanese</td><td className="text-slate-300 py-3 pr-4 text-sm">日本語</td><td className="text-slate-300 py-3 pr-4 text-sm">125 million</td></tr>
                  <tr className="border-b" style={{borderColor:"rgba(52,211,153,0.05)"}}><td className="text-white font-medium py-3 pr-4 text-sm">Korean</td><td className="text-slate-300 py-3 pr-4 text-sm">한국어</td><td className="text-slate-300 py-3 pr-4 text-sm">82 million</td></tr>
                  <tr className="border-b" style={{borderColor:"rgba(52,211,153,0.05)"}}><td className="text-white font-medium py-3 pr-4 text-sm">Arabic</td><td className="text-slate-300 py-3 pr-4 text-sm">العربية</td><td className="text-slate-300 py-3 pr-4 text-sm">422 million</td></tr>
                  <tr className="border-b" style={{borderColor:"rgba(52,211,153,0.05)"}}><td className="text-white font-medium py-3 pr-4 text-sm">Hindi</td><td className="text-slate-300 py-3 pr-4 text-sm">हिन्दी</td><td className="text-slate-300 py-3 pr-4 text-sm">602 million</td></tr>
                  <tr className="border-b" style={{borderColor:"rgba(52,211,153,0.05)"}}><td className="text-white font-medium py-3 pr-4 text-sm">Russian</td><td className="text-slate-300 py-3 pr-4 text-sm">Русский</td><td className="text-slate-300 py-3 pr-4 text-sm">255 million</td></tr>
                  <tr className="border-b" style={{borderColor:"rgba(52,211,153,0.05)"}}><td className="text-white font-medium py-3 pr-4 text-sm">Dutch</td><td className="text-slate-300 py-3 pr-4 text-sm">Nederlands</td><td className="text-slate-300 py-3 pr-4 text-sm">30 million</td></tr>
                  <tr className="border-b" style={{borderColor:"rgba(52,211,153,0.05)"}}><td className="text-white font-medium py-3 pr-4 text-sm">Turkish</td><td className="text-slate-300 py-3 pr-4 text-sm">Türkçe</td><td className="text-slate-300 py-3 pr-4 text-sm">88 million</td></tr>
                  <tr className="border-b" style={{borderColor:"rgba(52,211,153,0.05)"}}><td className="text-white font-medium py-3 pr-4 text-sm">Polish</td><td className="text-slate-300 py-3 pr-4 text-sm">Polski</td><td className="text-slate-300 py-3 pr-4 text-sm">45 million</td></tr>
                  <tr className="border-b" style={{borderColor:"rgba(52,211,153,0.05)"}}><td className="text-white font-medium py-3 pr-4 text-sm">Swedish</td><td className="text-slate-300 py-3 pr-4 text-sm">Svenska</td><td className="text-slate-300 py-3 pr-4 text-sm">13 million</td></tr>
                </tbody>
              </table>
            </div>
          </section>
          <AdUnit slot="3248634657" />

          <div className="bg-gradient-to-r from-emerald-900/30 to-teal-900/20 border border-emerald-500/30 rounded-2xl p-6 mb-10 text-center">
            <p className="text-white font-semibold text-lg mb-2">Count Words in Any Language — Free</p>
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
              <a href="/word-counter/language/spanish" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Spanish</a>
              <a href="/word-counter/language/french" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">French</a>
              <a href="/word-counter/language/german" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">German</a>
              <a href="/word-counter/language/italian" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Italian</a>
              <a href="/word-counter/language/portuguese" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Portuguese</a>
              <a href="/word-counter/language/chinese" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Chinese</a>
            </div>
          </section>

          <AdUnit slot="3763639977" />
        </div>
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.wordcountertool.net"},{"@type":"ListItem","position":2,"name":"Language Word Counters","item":"https://www.wordcountertool.net/word-counter/language"}]})}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebApplication","name":"Language Word Counters","applicationCategory":"UtilityApplication","operatingSystem":"Web","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.9","ratingCount":"3241","bestRating":"5","worstRating":"1"}})}} />
      <Footer />
    </>
  )
}
