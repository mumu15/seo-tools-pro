import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import AdUnit from '../../../components/AdUnit';

export const metadata = {
  title: 'Word Counter for Lawyers | WordCounterTool.net',
  description: 'Free word counter for lawyers and legal professionals. Check briefs, contracts and legal documents against court word limits and page limits.',
  alternates: { canonical: 'https://www.wordcountertool.net/word-counter/for/lawyer' },
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-950 text-white">
        <div className="max-w-4xl mx-auto px-4 py-12">

          {/* Breadcrumb */}
          <nav className="text-sm text-slate-500 mb-6">
            <a href="/" className="hover:text-emerald-400 transition-colors">Home</a>
            <span className="mx-2">/</span>
            <a href="/word-counter" className="hover:text-emerald-400 transition-colors">Word Counter</a>
            <span className="mx-2">/</span>
            <span className="text-slate-300">For Lawyers</span>
          </nav>

          {/* Hero */}
          <div className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Word Counter for Lawyers</h1>
            <p className="text-slate-400 text-lg leading-relaxed">Court filings, briefs and legal documents have strict word and page limits. Exceeding them can result in rejection. This free word counter helps you stay within court rules and filing requirements.</p>
          </div>

          {/* Embedded tool CTA */}
          <div className="bg-gradient-to-r from-emerald-900/30 to-teal-900/20 border border-emerald-500/30 rounded-2xl p-6 mb-10 text-center">
            <p className="text-white font-semibold text-lg mb-2">Use the Free Word Counter Now</p>
            <p className="text-slate-400 text-sm mb-4">Paste your text above on our main tool or click below to open it</p>
            <a href="/word-counter" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-8 py-3 rounded-xl transition-colors">Open Word Counter →</a>
          </div>

          {/* Quick Answer */}
          <div className="bg-slate-800/50 border border-emerald-500/20 rounded-2xl p-6 mb-10">
            <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2">Quick Answer</p>
            <p className="text-white text-lg leading-relaxed" dangerouslySetInnerHTML={{__html: 'US Supreme Court briefs are limited to <strong>15,000 words</strong> for opening briefs and 9,000 words for reply briefs. Federal Court of Appeals briefs are limited to 13,000 words. Always check the specific court&apos;s local rules.'}} />
          </div>

          {/* Word Count Table */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Word Count Reference for Lawyers</h2>
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6">
              
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.2)'}}>
                      <th className="text-left text-emerald-400 py-3 pr-4 font-semibold">Legal Document</th><th className="text-left text-emerald-400 py-3 pr-4 font-semibold">Typical Word Limit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                      <td className="text-white font-medium py-3 pr-4">US Supreme Court opening brief</td><td className="text-slate-300 py-3 pr-4">15,000 words</td>
                    </tr>
                    <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                      <td className="text-white font-medium py-3 pr-4">US Supreme Court reply brief</td><td className="text-slate-300 py-3 pr-4">9,000 words</td>
                    </tr>
                    <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                      <td className="text-white font-medium py-3 pr-4">Federal Court of Appeals brief</td><td className="text-slate-300 py-3 pr-4">13,000 words</td>
                    </tr>
                    <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                      <td className="text-white font-medium py-3 pr-4">Federal reply brief</td><td className="text-slate-300 py-3 pr-4">6,500 words</td>
                    </tr>
                    <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                      <td className="text-white font-medium py-3 pr-4">Certiorari petition</td><td className="text-slate-300 py-3 pr-4">9,000 words</td>
                    </tr>
                    <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                      <td className="text-white font-medium py-3 pr-4">Contract (simple)</td><td className="text-slate-300 py-3 pr-4">1,000-3,000 words</td>
                    </tr>
                    <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                      <td className="text-white font-medium py-3 pr-4">Contract (commercial)</td><td className="text-slate-300 py-3 pr-4">5,000-20,000 words</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <AdUnit slot="3248634657" />

          {/* Tips */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Tips for Lawyers</h2>
            <ul className="space-y-3 bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6">
              <li className="flex items-start gap-3 text-slate-300 text-sm"><span className="text-emerald-400 mt-0.5 flex-shrink-0">→</span><span>Always verify the specific court&apos;s local rules as word limits vary by jurisdiction and court level</span></li>
              <li className="flex items-start gap-3 text-slate-300 text-sm"><span className="text-emerald-400 mt-0.5 flex-shrink-0">→</span><span>Most court word counts exclude footnotes, certificates of compliance and table of contents</span></li>
              <li className="flex items-start gap-3 text-slate-300 text-sm"><span className="text-emerald-400 mt-0.5 flex-shrink-0">→</span><span>Use the word counter to check your brief against limits before finalizing</span></li>
              <li className="flex items-start gap-3 text-slate-300 text-sm"><span className="text-emerald-400 mt-0.5 flex-shrink-0">→</span><span>FRCP Rule 7 motions in federal district courts are typically limited to 10 pages or 3,500 words</span></li>
              <li className="flex items-start gap-3 text-slate-300 text-sm"><span className="text-emerald-400 mt-0.5 flex-shrink-0">→</span><span>Track character counts as some jurisdictions use character limits not word limits for certain filings</span></li>
            </ul>
          </section>

          {/* FAQs */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              
            <div key={0} className="border border-slate-700/50 rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">Does the table of contents count in a legal brief word limit?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Under FRAP Rule 32, the table of contents, table of citations, disclosure statement, statement of the case, and certificates are excluded from word counts. Always check local rules.</p>
            </div>
            <div key={1} className="border border-slate-700/50 rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">How long should a legal contract be?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">A simple services contract is 1,000 to 3,000 words. A commercial lease is 5,000 to 15,000 words. An employment agreement is 3,000 to 8,000 words. Length should match complexity of the transaction.</p>
            </div>
            <div key={2} className="border border-slate-700/50 rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">Are footnotes counted in legal brief word limits?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Under federal rules, footnotes count toward the word limit. Some local rules exclude footnotes. Check the specific court&apos;s local rules as they vary significantly.</p>
            </div>
            <div key={3} className="border border-slate-700/50 rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">What is the word limit for a motion to dismiss?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">In federal district courts, most motions are limited to 25 pages or approximately 7,000 words under local rules. Some courts limit supporting briefs to 10 pages or 3,500 words. Check local rules for your district.</p>
            </div>
            <div key={4} className="border border-slate-700/50 rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">How do I count words in a PDF legal document?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Open the PDF in Adobe Acrobat, go to File then Properties then Description to see word count. Alternatively copy the text and paste into our free word counter for an instant count.</p>
            </div>
            </div>
          </section>

          {/* Internal Links */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Related Tools and Guides</h2>
            <div className="flex flex-wrap gap-3">
              <a href="/word-counter" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Word Counter</a>
              <a href="/character-counter" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Character Counter</a>
              <a href="/blog/how-many-words-per-page" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">How Many Words Per Page</a>
              <a href="/reading-time" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Reading Time Calculator</a>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}
