import Header from '../../../../components/Header'
import Footer from '../../../../components/Footer'
import AdUnit from '../../../components/AdUnit'
import FaqSchema from '../../../../components/FaqSchema'

export const metadata = {
  title: 'Swedish Word Counter — Count Swedish Words Free (2026) | WordCounterTool.net',
  description: 'Free Swedish word counter. Count words, characters, sentences in Swedish (Svenska) text instantly. 13 million speakers worldwide.',
  alternates: { canonical: 'https://www.wordcountertool.net/word-counter/language/swedish' },
}

const faqs = [{"q":"Does the word counter work with Swedish?","a":"Yes. Our word counter accurately counts words, characters, sentences and paragraphs in Swedish (Svenska) text. Simply paste your Swedish text and get instant results."},{"q":"How is Swedish word counting different from English?","a":"Swedish word counting is similar to English. Swedish compound words reduce word count slightly — \"sjukhus\" (hospital) is one word where English uses two. A 1,000-word English text typically translates to 900-1,000 Swedish words."},{"q":"How many speakers does Swedish have?","a":"Swedish has approximately 13 million speakers worldwide, making it one of the most widely spoken languages globally."},{"q":"What is the average Swedish reading speed?","a":"The average Swedish reading speed is approximately 199 wpm. This varies based on text complexity, reader proficiency, and content type."}]

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
            <span className="text-slate-300">Swedish Word Counter</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Swedish Word Counter (Svenska)</h1>

          <div className="bg-slate-800/40 border border-emerald-500/20 rounded-2xl p-6 mb-10">
            <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2">Quick Answer</p>
            <p className="text-white text-lg leading-relaxed">Our free word counter works perfectly with Swedish (Svenska) text. Swedish is spoken by 13 million people worldwide. Swedish uses the Latin alphabet plus three extra letters (å, ä, ö). Like German and Dutch, Swedish creates compound words. Swedish is closely related to Norwegian and Danish. Text length is very similar to English.</p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Swedish Language Statistics</h2>
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 overflow-x-auto">
              <table className="w-full text-sm">
                <thead><tr className="border-b" style={{borderColor:'rgba(52,211,153,0.2)'}}>
                  <th className="text-left text-emerald-400 py-3 pr-4 font-semibold text-xs uppercase">Statistic</th><th className="text-left text-emerald-400 py-3 pr-4 font-semibold text-xs uppercase">Value</th>
                </tr></thead>
                <tbody>
                  <tr className="border-b" style={{borderColor:"rgba(52,211,153,0.05)"}}><td className="text-white font-medium py-3 pr-4 text-sm">Native Name</td><td className="text-slate-300 py-3 pr-4 text-sm">Svenska</td></tr>
                  <tr className="border-b" style={{borderColor:"rgba(52,211,153,0.05)"}}><td className="text-white font-medium py-3 pr-4 text-sm">Total Speakers</td><td className="text-slate-300 py-3 pr-4 text-sm">13 million</td></tr>
                  <tr className="border-b" style={{borderColor:"rgba(52,211,153,0.05)"}}><td className="text-white font-medium py-3 pr-4 text-sm">Average Word Length</td><td className="text-slate-300 py-3 pr-4 text-sm">5.3 letters</td></tr>
                  <tr className="border-b" style={{borderColor:"rgba(52,211,153,0.05)"}}><td className="text-white font-medium py-3 pr-4 text-sm">Average Reading Speed</td><td className="text-slate-300 py-3 pr-4 text-sm">199 wpm</td></tr>
                  <tr className="border-b" style={{borderColor:"rgba(52,211,153,0.05)"}}><td className="text-white font-medium py-3 pr-4 text-sm">Script Direction</td><td className="text-slate-300 py-3 pr-4 text-sm">Left to Right</td></tr>
                </tbody>
              </table>
            </div>
          </section>
          <AdUnit slot="3248634657" />

          <div className="bg-gradient-to-r from-emerald-900/30 to-teal-900/20 border border-emerald-500/30 rounded-2xl p-6 mb-10 text-center">
            <p className="text-white font-semibold text-lg mb-2">Count Swedish Words Free</p>
            <p className="text-slate-400 text-sm mb-4">Paste your text and get instant word count, reading time and character count</p>
            <a href="/word-counter" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-8 py-3 rounded-xl transition-colors">Open Word Counter</a>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Swedish Writing and Word Count Tips</h2>
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6">
              <p className="text-slate-300 text-sm leading-relaxed mb-4">Swedish word counting is similar to English. Swedish compound words reduce word count slightly — "sjukhus" (hospital) is one word where English uses two. A 1,000-word English text typically translates to 900-1,000 Swedish words.</p>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">Swedish uses the Latin alphabet plus three extra letters (å, ä, ö). Like German and Dutch, Swedish creates compound words. Swedish is closely related to Norwegian and Danish. Text length is very similar to English.</p>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">Our word counter tool handles Swedish text seamlessly. It correctly identifies word boundaries, counts characters including special Swedish characters, and calculates reading time based on Swedish-specific reading speeds. Whether you are writing a Swedish essay, blog post, social media content, or academic paper, our tool gives you accurate results instantly.</p>
            </div>
          </section>
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">All Language Word Counters</h2>
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6">
              <p className="text-slate-300 text-sm leading-relaxed mb-4">We support word counting in all major world languages. <a href="/word-counter/language/spanish" className="text-emerald-400 hover:underline">Spanish</a> · <a href="/word-counter/language/french" className="text-emerald-400 hover:underline">French</a> · <a href="/word-counter/language/german" className="text-emerald-400 hover:underline">German</a> · <a href="/word-counter/language/italian" className="text-emerald-400 hover:underline">Italian</a> · <a href="/word-counter/language/portuguese" className="text-emerald-400 hover:underline">Portuguese</a> · <a href="/word-counter/language/chinese" className="text-emerald-400 hover:underline">Chinese</a> · <a href="/word-counter/language/japanese" className="text-emerald-400 hover:underline">Japanese</a> · <a href="/word-counter/language/korean" className="text-emerald-400 hover:underline">Korean</a> · <a href="/word-counter/language/arabic" className="text-emerald-400 hover:underline">Arabic</a> · <a href="/word-counter/language/hindi" className="text-emerald-400 hover:underline">Hindi</a> · <a href="/word-counter/language/russian" className="text-emerald-400 hover:underline">Russian</a> · <a href="/word-counter/language/dutch" className="text-emerald-400 hover:underline">Dutch</a> · <a href="/word-counter/language/turkish" className="text-emerald-400 hover:underline">Turkish</a> · <a href="/word-counter/language/polish" className="text-emerald-400 hover:underline">Polish</a> · <a href="/word-counter/language/swedish" className="text-emerald-400 hover:underline">Swedish</a></p>
            </div>
          </section>
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
              <a href="/readability-checker" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Readability Checker</a>
              <a href="/word-counter/language/spanish" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Spanish Counter</a>
              <a href="/word-counter/language/french" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">French Counter</a>
              <a href="/word-counter/language/german" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">German Counter</a>
              <a href="/word-counter/language/italian" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Italian Counter</a>
            </div>
          </section>

          <AdUnit slot="3763639977" />
        </div>
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.wordcountertool.net"},{"@type":"ListItem","position":2,"name":"Swedish Word Counter","item":"https://www.wordcountertool.net/word-counter/language/swedish"}]})}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebApplication","name":"Swedish Word Counter","applicationCategory":"UtilityApplication","operatingSystem":"Web","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"}})}} />
      <Footer />
    </>
  )
}
