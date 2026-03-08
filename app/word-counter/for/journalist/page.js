import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import AdUnit from '../../../components/AdUnit';

export const metadata = {
  title: 'Word Counter for Journalists | WordCounterTool.net',
  description: 'Free word counter for journalists and reporters. Check article length against word limits for print, online and broadcast scripts.',
  alternates: { canonical: 'https://www.wordcountertool.net/word-counter/for/journalist' },
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
            <span className="text-slate-300">For Journalists</span>
          </nav>

          {/* Hero */}
          <div className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Word Counter for Journalists</h1>
            <p className="text-slate-400 text-lg leading-relaxed">Journalism has strict word limits. Whether you&apos;re writing for print, digital or broadcast, hitting your exact word count is professional. Use this free tool to check your story length instantly.</p>
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
            <p className="text-white text-lg leading-relaxed" dangerouslySetInnerHTML={{__html: 'A standard news article is <strong>300 to 800 words</strong>. Feature articles run 800 to 2,000 words. Long-form investigative pieces are 2,000 to 10,000 words. Print newspapers average 600 to 750 words per column inch.'}} />
          </div>

          {/* Word Count Table */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Word Count Reference for Journalists</h2>
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6">
              
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.2)'}}>
                      <th className="text-left text-emerald-400 py-3 pr-4 font-semibold">Journalism Format</th><th className="text-left text-emerald-400 py-3 pr-4 font-semibold">Typical Word Count</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                      <td className="text-white font-medium py-3 pr-4">News brief</td><td className="text-slate-300 py-3 pr-4">100-200 words</td>
                    </tr>
                    <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                      <td className="text-white font-medium py-3 pr-4">Standard news article</td><td className="text-slate-300 py-3 pr-4">300-600 words</td>
                    </tr>
                    <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                      <td className="text-white font-medium py-3 pr-4">Feature article</td><td className="text-slate-300 py-3 pr-4">800-2,000 words</td>
                    </tr>
                    <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                      <td className="text-white font-medium py-3 pr-4">Long-form feature</td><td className="text-slate-300 py-3 pr-4">2,000-5,000 words</td>
                    </tr>
                    <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                      <td className="text-white font-medium py-3 pr-4">Investigative piece</td><td className="text-slate-300 py-3 pr-4">3,000-10,000 words</td>
                    </tr>
                    <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                      <td className="text-white font-medium py-3 pr-4">Radio script (1 min)</td><td className="text-slate-300 py-3 pr-4">150-160 words</td>
                    </tr>
                    <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                      <td className="text-white font-medium py-3 pr-4">TV broadcast (1 min)</td><td className="text-slate-300 py-3 pr-4">120-140 words</td>
                    </tr>
                    <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                      <td className="text-white font-medium py-3 pr-4">Op-ed / column</td><td className="text-slate-300 py-3 pr-4">600-800 words</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <AdUnit slot="3248634657" />

          {/* Tips */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Tips for Journalists</h2>
            <ul className="space-y-3 bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6">
              <li className="flex items-start gap-3 text-slate-300 text-sm"><span className="text-emerald-400 mt-0.5 flex-shrink-0">→</span><span>Paste your article in the counter and check against your editor&apos;s word limit before submitting</span></li>
              <li className="flex items-start gap-3 text-slate-300 text-sm"><span className="text-emerald-400 mt-0.5 flex-shrink-0">→</span><span>Broadcast scripts use a different rule: 150 words per minute for radio, 130 words per minute for TV</span></li>
              <li className="flex items-start gap-3 text-slate-300 text-sm"><span className="text-emerald-400 mt-0.5 flex-shrink-0">→</span><span>Online articles need a minimum of 300 words to be indexed properly by Google</span></li>
              <li className="flex items-start gap-3 text-slate-300 text-sm"><span className="text-emerald-400 mt-0.5 flex-shrink-0">→</span><span>Inverted pyramid structure means your most important facts appear in the first 150 words</span></li>
              <li className="flex items-start gap-3 text-slate-300 text-sm"><span className="text-emerald-400 mt-0.5 flex-shrink-0">→</span><span>Use the character counter to check headline lengths for SEO and print layout requirements</span></li>
            </ul>
          </section>

          {/* FAQs */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              
            <div key={0} className="border border-slate-700/50 rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">How long should a news article be?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">A standard news article for online is 300 to 600 words. Print newspaper articles run 400 to 750 words. Digital-first publications often run 500 to 800 words to balance readability and SEO.</p>
            </div>
            <div key={1} className="border border-slate-700/50 rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">How many words per minute for a radio script?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">The standard broadcast rate is 150 to 160 words per minute for radio. For a 60 second slot write 150 to 160 words. Television scripts run slightly slower at 120 to 140 words per minute.</p>
            </div>
            <div key={2} className="border border-slate-700/50 rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">What is the ideal length for an opinion piece?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Op-eds and opinion columns are typically 600 to 800 words for newspapers. Online opinion pieces can run up to 1,200 words. The New York Times accepts op-eds of 800 to 1,000 words.</p>
            </div>
            <div key={3} className="border border-slate-700/50 rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">How long should a magazine feature article be?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Consumer magazine features run 1,500 to 3,500 words. Trade publications often want 1,000 to 2,000 words. Long-form magazines like The Atlantic or New Yorker publish pieces of 5,000 to 20,000 words.</p>
            </div>
            <div key={4} className="border border-slate-700/50 rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">Do headers and captions count in a journalism word count?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">It depends on the publication&apos;s style guide. Most count only body copy. Headlines, subheads, captions and pull quotes are usually excluded. Always confirm with your editor.</p>
            </div>
            </div>
          </section>

          {/* Internal Links */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Related Tools and Guides</h2>
            <div className="flex flex-wrap gap-3">
              <a href="/word-counter" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Word Counter</a>
              <a href="/character-counter" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Character Counter</a>
              <a href="/reading-time" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Reading Time Calculator</a>
              <a href="/blog/seo-content-length-guide" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">SEO Content Length Guide</a>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}
