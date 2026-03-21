import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import AdUnit from '../../../components/AdUnit';

export const metadata = {
  title: 'Word Count for an Email: Best Practices (2026) | WordCounterTool.net',
  description: 'How long should an email be? Ideal email word counts for different email types including newsletters, cold outreach, follow-ups and formal business emails.',
  alternates: { canonical: 'https://www.wordcountertool.net/word-count/for/email' },
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
            <span className="text-slate-300">Email</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Word Count for Email</h1>

          <div className="bg-slate-800/40 border border-emerald-500/20 rounded-2xl p-6 mb-10">
            <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2">Quick Answer</p>
            <p className="text-white text-lg leading-relaxed">A professional email should be 50 to 200 words. Cold outreach emails perform best at 50 to 125 words. Email newsletters should be 200 to 500 words. Formal business letters are 200 to 400 words.</p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Email Word Count by Type</h2>
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.2)'}}>
                    <th className="text-left text-emerald-400 py-3 pr-4 font-semibold">Email Type</th>
                    <th className="text-left text-emerald-400 py-3 pr-4 font-semibold">Word Count</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="text-white font-medium py-3 pr-4">Cold outreach</td>
                    <td className="text-slate-300 py-3 pr-4">50-125 words</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="text-white font-medium py-3 pr-4">Follow-up email</td>
                    <td className="text-slate-300 py-3 pr-4">50-100 words</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="text-white font-medium py-3 pr-4">Professional reply</td>
                    <td className="text-slate-300 py-3 pr-4">75-150 words</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="text-white font-medium py-3 pr-4">Business proposal email</td>
                    <td className="text-slate-300 py-3 pr-4">150-300 words</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="text-white font-medium py-3 pr-4">Email newsletter</td>
                    <td className="text-slate-300 py-3 pr-4">200-500 words</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="text-white font-medium py-3 pr-4">Formal business letter</td>
                    <td className="text-slate-300 py-3 pr-4">200-400 words</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="text-white font-medium py-3 pr-4">Welcome email</td>
                    <td className="text-slate-300 py-3 pr-4">150-300 words</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <AdUnit slot="3248634657" />

          <div className="bg-gradient-to-r from-emerald-900/30 to-teal-900/20 border border-emerald-500/30 rounded-2xl p-6 mb-10 text-center">
            <p className="text-white font-semibold text-lg mb-2">Check Your Email Word Count Free</p>
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
      
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">More Word Count Guides</h2>
            <div className="flex flex-wrap gap-2">
              <a href="/word-count/for/acceptance-speech" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-3 py-2 rounded-lg transition-colors">Acceptance Speech</a>
              <a href="/word-count/for/annotated-bibliography" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-3 py-2 rounded-lg transition-colors">Annotated Bibliography</a>
              <a href="/word-count/for/best-man-speech" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-3 py-2 rounded-lg transition-colors">Best Man Speech</a>
              <a href="/word-count/for/blog-post" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-3 py-2 rounded-lg transition-colors">Blog Post</a>
              <a href="/word-count/for/book" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-3 py-2 rounded-lg transition-colors">Book</a>
              <a href="/word-count/for/business-plan" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-3 py-2 rounded-lg transition-colors">Business Plan</a>
              <a href="/word-count/for/case-study" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-3 py-2 rounded-lg transition-colors">Case Study</a>
              <a href="/word-count/for/college-application-essay" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-3 py-2 rounded-lg transition-colors">College Application Essay</a>
              <a href="/word-count/for" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-3 py-2 rounded-lg transition-colors">All Guides →</a>
            </div>
          </section>
        <Footer />
    </>
  );
}
