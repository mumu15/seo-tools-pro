import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import AdUnit from '../../../components/AdUnit';

export const metadata = {
  title: 'Word Counter for Writers | WordCounterTool.net',
  description: 'Free word counter for writers. Track daily word counts, manuscript length, chapter word counts and submission requirements for publishers and literary magazines.',
  alternates: { canonical: 'https://www.wordcountertool.net/word-counter/for/writer' },
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
            <span className="text-slate-300">For Writers</span>
          </nav>

          {/* Hero */}
          <div className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Word Counter for Writers</h1>
            <p className="text-slate-400 text-lg leading-relaxed">Whether you're writing a novel, short story or submitting to literary magazines, word count is everything. Track your manuscript progress with this free word counter built for serious writers.</p>
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
            <p className="text-white text-lg leading-relaxed" dangerouslySetInnerHTML={{__html: 'A novel is typically <strong>70,000 to 100,000 words</strong>. A short story is 1,000 to 10,000 words. Flash fiction is under 1,000 words. Most debut authors should target 80,000 to 90,000 words for their first novel.'}} />
          </div>

          {/* Word Count Table */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Word Count Reference for Writers</h2>
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6">
              
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.2)'}}>
                      <th className="text-left text-emerald-400 py-3 pr-4 font-semibold">Format</th><th className="text-left text-emerald-400 py-3 pr-4 font-semibold">Word Count Range</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                      <td className="text-white font-medium py-3 pr-4">Flash fiction</td><td className="text-slate-300 py-3 pr-4">100-1,000 words</td>
                    </tr>
                    <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                      <td className="text-white font-medium py-3 pr-4">Short story</td><td className="text-slate-300 py-3 pr-4">1,000-10,000 words</td>
                    </tr>
                    <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                      <td className="text-white font-medium py-3 pr-4">Novelette</td><td className="text-slate-300 py-3 pr-4">10,000-20,000 words</td>
                    </tr>
                    <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                      <td className="text-white font-medium py-3 pr-4">Novella</td><td className="text-slate-300 py-3 pr-4">20,000-50,000 words</td>
                    </tr>
                    <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                      <td className="text-white font-medium py-3 pr-4">Novel (debut)</td><td className="text-slate-300 py-3 pr-4">70,000-100,000 words</td>
                    </tr>
                    <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                      <td className="text-white font-medium py-3 pr-4">Epic fantasy / sci-fi</td><td className="text-slate-300 py-3 pr-4">100,000-150,000 words</td>
                    </tr>
                    <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                      <td className="text-white font-medium py-3 pr-4">Children's picture book</td><td className="text-slate-300 py-3 pr-4">500-1,000 words</td>
                    </tr>
                    <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                      <td className="text-white font-medium py-3 pr-4">Middle grade novel</td><td className="text-slate-300 py-3 pr-4">20,000-50,000 words</td>
                    </tr>
                    <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                      <td className="text-white font-medium py-3 pr-4">YA novel</td><td className="text-slate-300 py-3 pr-4">50,000-80,000 words</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <AdUnit slot="3248634657" />

          {/* Tips */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Tips for Writers</h2>
            <ul className="space-y-3 bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6">
              <li className="flex items-start gap-3 text-slate-300 text-sm"><span className="text-emerald-400 mt-0.5 flex-shrink-0">→</span><span>Set a daily word count target of 500 to 1,000 words and use the counter to track your daily output</span></li>
              <li className="flex items-start gap-3 text-slate-300 text-sm"><span className="text-emerald-400 mt-0.5 flex-shrink-0">→</span><span>Track chapter lengths individually to maintain consistent pacing throughout your manuscript</span></li>
              <li className="flex items-start gap-3 text-slate-300 text-sm"><span className="text-emerald-400 mt-0.5 flex-shrink-0">→</span><span>Check submission guidelines for literary magazines before submitting as word limits vary significantly</span></li>
              <li className="flex items-start gap-3 text-slate-300 text-sm"><span className="text-emerald-400 mt-0.5 flex-shrink-0">→</span><span>Romance novels typically run 50,000 to 100,000 words while mystery novels average 70,000 to 90,000 words</span></li>
              <li className="flex items-start gap-3 text-slate-300 text-sm"><span className="text-emerald-400 mt-0.5 flex-shrink-0">→</span><span>Use the reading time calculator to estimate how long your book will take to read</span></li>
            </ul>
          </section>

          {/* FAQs */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              
            <div key={0} className="border border-slate-700/50 rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">How many words per day should a writer write?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Stephen King recommends 2,000 words per day. Many professional writers aim for 1,000 to 1,500 words daily. For beginners 500 words per day is a sustainable starting goal.</p>
            </div>
            <div key={1} className="border border-slate-700/50 rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">How many words are in a chapter?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Most novel chapters are 2,000 to 5,000 words. Thrillers and YA novels tend toward shorter chapters of 1,500 to 3,000 words. Literary fiction chapters are often 4,000 to 8,000 words.</p>
            </div>
            <div key={2} className="border border-slate-700/50 rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">What word count do publishers want for a first novel?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Most traditional publishers want debut fiction at 80,000 to 100,000 words. Genre fiction varies: romance 50,000 to 100,000, thriller 70,000 to 90,000, fantasy 90,000 to 120,000.</p>
            </div>
            <div key={3} className="border border-slate-700/50 rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">Can a novel be too long?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Yes. Debut novels over 120,000 words are very difficult to sell to traditional publishers. Self-published authors have more flexibility but very long books can deter readers.</p>
            </div>
            <div key={4} className="border border-slate-700/50 rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">How do I track my word count across multiple writing sessions?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Use our word counter daily by pasting your new writing. Keep a simple spreadsheet with your daily word count and running total. Many writers also use tools like Scrivener for full manuscript tracking.</p>
            </div>
            </div>
          </section>

          {/* Internal Links */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Related Tools and Guides</h2>
            <div className="flex flex-wrap gap-3">
              <a href="/word-counter" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Word Counter</a>
              <a href="/reading-time" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Reading Time Calculator</a>
              <a href="/blog/how-many-words-in-a-novel" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">How Many Words in a Novel</a>
              <a href="/blog/how-many-words-in-a-short-story" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">How Many Words in a Short Story</a>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}
