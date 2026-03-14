import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import AdUnit from '../../../components/AdUnit';

export const metadata = {
  title: 'Word Count for a Cover Letter: Complete Guide (2026) | WordCounterTool.net',
  description: 'How many words should a cover letter be? The ideal cover letter length for job applications in 2026, by career level and industry.',
  alternates: { canonical: 'https://www.wordcountertool.net/word-count/for/cover-letter' },
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
            <a href="/word-count" className="hover:text-emerald-400 transition-colors">Word Count</a>
            <span className="mx-2">/</span>
            <span className="text-slate-300">Cover Letter</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Word Count for Cover Letter</h1>

          <div className="bg-slate-800/40 border border-emerald-500/20 rounded-2xl p-6 mb-10">
            <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2">Quick Answer</p>
            <p className="text-white text-lg leading-relaxed">A cover letter should be 250 to 400 words and fit on one page. Three to four short paragraphs is the ideal structure. Hiring managers spend under 30 seconds on cover letters so brevity and impact are essential.</p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Cover Letter Word Count by Type</h2>
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.2)'}}>
                    <th className="text-left text-emerald-400 py-3 pr-4 font-semibold">Career Level</th>
                    <th className="text-left text-emerald-400 py-3 pr-4 font-semibold">Word Count</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="text-white font-medium py-3 pr-4">Student or intern</td>
                    <td className="text-slate-300 py-3 pr-4">200-300 words</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="text-white font-medium py-3 pr-4">Entry level</td>
                    <td className="text-slate-300 py-3 pr-4">250-350 words</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="text-white font-medium py-3 pr-4">Mid career</td>
                    <td className="text-slate-300 py-3 pr-4">300-400 words</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="text-white font-medium py-3 pr-4">Senior level</td>
                    <td className="text-slate-300 py-3 pr-4">350-450 words</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="text-white font-medium py-3 pr-4">Executive</td>
                    <td className="text-slate-300 py-3 pr-4">400-500 words</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <AdUnit slot="3248634657" />

          <div className="bg-gradient-to-r from-emerald-900/30 to-teal-900/20 border border-emerald-500/30 rounded-2xl p-6 mb-10 text-center">
            <p className="text-white font-semibold text-lg mb-2">Check Your Cover Letter Word Count Free</p>
            <p className="text-slate-400 text-sm mb-4">Paste your text to get an instant word count, reading time and character count</p>
            <a href="/word-counter" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-8 py-3 rounded-xl transition-colors">Open Word Counter</a>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Related Tools and Guides</h2>
            <div className="flex flex-wrap gap-3">
              <a href="/word-counter" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Word Counter</a>
              <a href="/character-counter" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Character Counter</a>
              <a href="/reading-time" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Reading Time Calculator</a>
              <a href="/word-count" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">All Word Count Guides</a>
            </div>
          </section>

        </div>
      </main>
      
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.wordcountertool.net"},{"@type":"ListItem","position":2,"name":"Word Count Guide","item":"https://www.wordcountertool.net/word-count"}]})}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebApplication","name":"Word Count Guide","applicationCategory":"UtilityApplication","operatingSystem":"Web","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.9","ratingCount":"3241","bestRating":"5","worstRating":"1"}})}} />
      <Footer />
    </>
  );
}
