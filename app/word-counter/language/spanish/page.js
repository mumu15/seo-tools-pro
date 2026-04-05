import Header from '../../../../components/Header'
import Footer from '../../../../components/Footer'
import AdUnit from '../../../components/AdUnit'
import FaqSchema from '../../../../components/FaqSchema'

export const metadata = {
  title: 'Spanish Word Counter — Count Spanish Words Free (2026) | WordCounterTool.net',
  description: 'Free Spanish word counter. Count words, characters, sentences in Spanish (Español) text instantly. 559 million speakers worldwide.',
  alternates: { canonical: 'https://www.wordcountertool.net/word-counter/language/spanish' },
}

const faqs = [{"q":"Does the word counter work with Spanish?","a":"Yes. Our word counter accurately counts words, characters, sentences and paragraphs in Spanish (Español) text. Simply paste your Spanish text and get instant results."},{"q":"How is Spanish word counting different from English?","a":"When counting Spanish words, remember that articles (el, la, los, las) and prepositions (de, en, por, para) add significantly to word count compared to English. A 500-word English document typically translates to 575-625 words in Spanish."},{"q":"How many speakers does Spanish have?","a":"Spanish has approximately 559 million speakers worldwide, making it one of the most widely spoken languages globally."},{"q":"What is the average Spanish reading speed?","a":"The average Spanish reading speed is approximately 230 wpm. This varies based on text complexity, reader proficiency, and content type."}]

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
            <span className="text-slate-300">Spanish Word Counter</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Spanish Word Counter (Español)</h1>

          <div className="bg-slate-800/40 border border-emerald-500/20 rounded-2xl p-6 mb-10">
            <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2">Quick Answer</p>
            <p className="text-white text-lg leading-relaxed">Our free word counter works perfectly with Spanish (Español) text. Spanish is spoken by 559 million people worldwide. Spanish uses inverted question marks (¿) and exclamation marks (¡), the letter ñ, and has gendered nouns. Spanish text is typically 15-25% longer than equivalent English text due to longer words and more prepositions.</p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Spanish Language Statistics</h2>
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 overflow-x-auto">
              <table className="w-full text-sm">
                <thead><tr className="border-b" style={{borderColor:'rgba(52,211,153,0.2)'}}>
                  <th className="text-left text-emerald-400 py-3 pr-4 font-semibold text-xs uppercase">Statistic</th><th className="text-left text-emerald-400 py-3 pr-4 font-semibold text-xs uppercase">Value</th>
                </tr></thead>
                <tbody>
                  <tr className="border-b" style={{borderColor:"rgba(52,211,153,0.05)"}}><td className="text-white font-medium py-3 pr-4 text-sm">Native Name</td><td className="text-slate-300 py-3 pr-4 text-sm">Español</td></tr>
                  <tr className="border-b" style={{borderColor:"rgba(52,211,153,0.05)"}}><td className="text-white font-medium py-3 pr-4 text-sm">Total Speakers</td><td className="text-slate-300 py-3 pr-4 text-sm">559 million</td></tr>
                  <tr className="border-b" style={{borderColor:"rgba(52,211,153,0.05)"}}><td className="text-white font-medium py-3 pr-4 text-sm">Average Word Length</td><td className="text-slate-300 py-3 pr-4 text-sm">5.2 letters</td></tr>
                  <tr className="border-b" style={{borderColor:"rgba(52,211,153,0.05)"}}><td className="text-white font-medium py-3 pr-4 text-sm">Average Reading Speed</td><td className="text-slate-300 py-3 pr-4 text-sm">230 wpm</td></tr>
                  <tr className="border-b" style={{borderColor:"rgba(52,211,153,0.05)"}}><td className="text-white font-medium py-3 pr-4 text-sm">Script Direction</td><td className="text-slate-300 py-3 pr-4 text-sm">Left to Right</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <AdUnit slot="3763639977" />

          <AdUnit slot="3248634657" />

          <div className="bg-gradient-to-r from-emerald-900/30 to-teal-900/20 border border-emerald-500/30 rounded-2xl p-6 mb-10 text-center">
            <p className="text-white font-semibold text-lg mb-2">Count Spanish Words Free</p>
            <p className="text-slate-400 text-sm mb-4">Paste your text and get instant word count, reading time and character count</p>
            <a href="/word-counter" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-8 py-3 rounded-xl transition-colors">Open Word Counter</a>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Spanish Writing and Word Count Tips</h2>
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6">
              <p className="text-slate-300 text-sm leading-relaxed mb-4">When counting Spanish words, remember that articles (el, la, los, las) and prepositions (de, en, por, para) add significantly to word count compared to English. A 500-word English document typically translates to 575-625 words in Spanish.</p>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">Spanish uses inverted question marks (¿) and exclamation marks (¡), the letter ñ, and has gendered nouns. Spanish text is typically 15-25% longer than equivalent English text due to longer words and more prepositions.</p>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">Our word counter tool handles Spanish text seamlessly. It correctly identifies word boundaries, counts characters including special Spanish characters, and calculates reading time based on Spanish-specific reading speeds. Whether you are writing a Spanish essay, blog post, social media content, or academic paper, our tool gives you accurate results instantly.</p>
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

          <AdUnit slot="3248634657" />


          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Related Tools and Guides</h2>
            <div className="flex flex-wrap gap-3">
              <a href="/word-counter" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Word Counter</a>
              <a href="/character-counter" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Character Counter</a>
              <a href="/reading-time" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Reading Time</a>
              <a href="/readability-checker" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Readability Checker</a>
              <a href="/word-counter/language/french" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">French Counter</a>
              <a href="/word-counter/language/german" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">German Counter</a>
              <a href="/word-counter/language/italian" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Italian Counter</a>
              <a href="/word-counter/language/portuguese" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Portuguese Counter</a>
            </div>
          </section>

          <AdUnit slot="3763639977" />
        </div>
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.wordcountertool.net"},{"@type":"ListItem","position":2,"name":"Spanish Word Counter","item":"https://www.wordcountertool.net/word-counter/language/spanish"}]})}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebApplication","name":"Spanish Word Counter","applicationCategory":"UtilityApplication","operatingSystem":"Web","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"}})}} />
      <Footer />
    </>
  )
}
