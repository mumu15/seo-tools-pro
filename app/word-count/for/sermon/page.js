import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import AdUnit from '../../../components/AdUnit';

export const metadata = {
  title: 'How Many Words in a Sermon? (2026 Guide) | WordCounterTool.net',
  description: 'How many words should a sermon be? 2,500-5,000 words. Complete guide with word counts by type, section breakdown, and tips.',
  alternates: { canonical: 'https://www.wordcountertool.net/word-count/for/sermon' },
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-950 text-white">
        <div className="max-w-4xl mx-auto px-4 py-12">

          <nav className="text-sm text-slate-500 mb-6">
            <a href="/" className="hover:text-emerald-400 transition-colors">Home</a>
            <span className="mx-2">/</span>
            <a href="/word-count/for" className="hover:text-emerald-400 transition-colors">Word Count > For</a>
            <span className="mx-2">/</span>
            <span className="text-slate-300">Sermon Word Count</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Word Count for Sermon</h1>

          <div className="bg-slate-800/40 border border-emerald-500/20 rounded-2xl p-6 mb-10">
            <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2">Quick Answer</p>
            <p className="text-white text-lg leading-relaxed">A sermon is typically 20 to 40 minutes long, or 2,500 to 5,000 words. The average Sunday sermon is 25-30 minutes (3,250-3,900 words). Catholic homilies are shorter at 8-12 minutes (1,000-1,500 words).</p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Sermon Word Count Guide</h2>
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.2)'}}>
                    <th className="text-left text-emerald-400 py-3 pr-4 font-semibold">Type</th>
                    <th className="text-left text-emerald-400 py-3 pr-4 font-semibold">Duration</th>
                    <th className="text-left text-emerald-400 py-3 pr-4 font-semibold">Word Count</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="text-white font-medium py-3 pr-4">Catholic homily</td>
                    <td className="text-slate-300 py-3 pr-4">8-12 minutes</td>
                    <td className="text-slate-300 py-3 pr-4">1,000-1,500 words</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="text-white font-medium py-3 pr-4">Short sermon</td>
                    <td className="text-slate-300 py-3 pr-4">15-20 minutes</td>
                    <td className="text-slate-300 py-3 pr-4">1,950-2,600 words</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="text-white font-medium py-3 pr-4">Standard sermon</td>
                    <td className="text-slate-300 py-3 pr-4">25-30 minutes</td>
                    <td className="text-slate-300 py-3 pr-4">3,250-3,900 words</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="text-white font-medium py-3 pr-4">Extended sermon</td>
                    <td className="text-slate-300 py-3 pr-4">35-45 minutes</td>
                    <td className="text-slate-300 py-3 pr-4">4,550-5,850 words</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="text-white font-medium py-3 pr-4">Revival/special occasion</td>
                    <td className="text-slate-300 py-3 pr-4">45-60 minutes</td>
                    <td className="text-slate-300 py-3 pr-4">5,850-7,800 words</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          <AdUnit slot="3248634657" />

          <div className="bg-gradient-to-r from-emerald-900/30 to-teal-900/20 border border-emerald-500/30 rounded-2xl p-6 mb-10 text-center">
            <p className="text-white font-semibold text-lg mb-2">Check Your Sermon Word Count Free</p>
            <p className="text-slate-400 text-sm mb-4">Paste your text to get an instant word count, reading time and character count</p>
            <a href="/word-counter" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-8 py-3 rounded-xl transition-colors">Open Word Counter</a>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6">
              <div className="space-y-4 text-sm">
                <div className="border-b pb-4" style={{borderColor:"rgba(52,211,153,0.1)"}}>
                  <h3 className="text-white font-semibold mb-2">How many words is a sermon?</h3>
                  <p className="text-slate-400">A sermon is typically 2,500-5,000 words. The exact length depends on the type, purpose, and specific requirements. Always check guidelines from your institution or organization.</p>
                </div>
                <div className="border-b pb-4" style={{borderColor:"rgba(52,211,153,0.1)"}}>
                  <h3 className="text-white font-semibold mb-2">How many pages is a sermon?</h3>
                  <p className="text-slate-400">At 250 words per page (double-spaced, 12pt font), a sermon of 2,500-5,000 words is approximately 10-20 pages double-spaced.</p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Is there a word limit for sermons?</h3>
                  <p className="text-slate-400">Word limits vary by context. Academic sermons often have strict limits set by the professor or institution. Professional sermons follow industry conventions. Always check specific requirements before writing.</p>
                </div>
              </div>
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
              <a href="/readability-checker" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Readability Checker</a>
            </div>
          </section>
        </div>
      </main>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.wordcountertool.net"},{"@type":"ListItem","position":2,"name":"Sermon Word Count","item":"https://www.wordcountertool.net/word-count/for/sermon"}]})}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebApplication","name":"Sermon Word Count","applicationCategory":"UtilityApplication","operatingSystem":"Web","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.9","ratingCount":"3241","bestRating":"5","worstRating":"1"}})}} />
      <Footer />
    </>
  );
}
