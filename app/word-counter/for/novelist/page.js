import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import AdUnit from '../../../components/AdUnit';

export const metadata = {
  title: 'Word Counter for Novelists | WordCounterTool.net',
  description: 'Free word counter for novelists. Track manuscript progress, chapter lengths and daily word count goals. See word count benchmarks for every novel genre.',
  alternates: { canonical: 'https://www.wordcountertool.net/word-counter/for/novelist' },
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
            <span className="text-slate-300">For Novelists</span>
          </nav>

          {/* Hero */}
          <div className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Word Counter for Novelists</h1>
            <p className="text-slate-400 text-lg leading-relaxed">Writing a novel is a marathon. Track every word. This free word counter helps novelists monitor daily output, chapter lengths and overall manuscript progress toward their target word count.</p>
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
            <p className="text-white text-lg leading-relaxed" dangerouslySetInnerHTML={{__html: 'A commercially publishable novel is <strong>70,000 to 100,000 words</strong>. Romance novels can be 50,000 words. Fantasy and sci-fi often run 100,000 to 150,000 words. Debut authors should target 80,000 to 90,000 words.'}} />
          </div>

          {/* Word Count Table */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Word Count Reference for Novelists</h2>
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6">
              
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.2)'}}>
                      <th className="text-left text-emerald-400 py-3 pr-4 font-semibold">Novel Genre</th><th className="text-left text-emerald-400 py-3 pr-4 font-semibold">Target Word Count</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                      <td className="text-white font-medium py-3 pr-4">Literary fiction</td><td className="text-slate-300 py-3 pr-4">70,000-100,000 words</td>
                    </tr>
                    <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                      <td className="text-white font-medium py-3 pr-4">Mystery / thriller</td><td className="text-slate-300 py-3 pr-4">70,000-90,000 words</td>
                    </tr>
                    <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                      <td className="text-white font-medium py-3 pr-4">Romance (category)</td><td className="text-slate-300 py-3 pr-4">50,000-60,000 words</td>
                    </tr>
                    <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                      <td className="text-white font-medium py-3 pr-4">Romance (single title)</td><td className="text-slate-300 py-3 pr-4">80,000-100,000 words</td>
                    </tr>
                    <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                      <td className="text-white font-medium py-3 pr-4">Fantasy</td><td className="text-slate-300 py-3 pr-4">90,000-120,000 words</td>
                    </tr>
                    <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                      <td className="text-white font-medium py-3 pr-4">Epic fantasy</td><td className="text-slate-300 py-3 pr-4">100,000-180,000 words</td>
                    </tr>
                    <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                      <td className="text-white font-medium py-3 pr-4">Science fiction</td><td className="text-slate-300 py-3 pr-4">80,000-120,000 words</td>
                    </tr>
                    <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                      <td className="text-white font-medium py-3 pr-4">Horror</td><td className="text-slate-300 py-3 pr-4">70,000-90,000 words</td>
                    </tr>
                    <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                      <td className="text-white font-medium py-3 pr-4">Historical fiction</td><td className="text-slate-300 py-3 pr-4">80,000-120,000 words</td>
                    </tr>
                    <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                      <td className="text-white font-medium py-3 pr-4">YA fiction</td><td className="text-slate-300 py-3 pr-4">50,000-80,000 words</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <AdUnit slot="3248634657" />

          {/* Tips */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Tips for Novelists</h2>
            <ul className="space-y-3 bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6">
              <li className="flex items-start gap-3 text-slate-300 text-sm"><span className="text-emerald-400 mt-0.5 flex-shrink-0">→</span><span>Track daily word counts by pasting your new writing into the counter and recording your progress in a spreadsheet</span></li>
              <li className="flex items-start gap-3 text-slate-300 text-sm"><span className="text-emerald-400 mt-0.5 flex-shrink-0">→</span><span>Aim for chapters of 2,000 to 5,000 words for optimal pacing in commercial fiction</span></li>
              <li className="flex items-start gap-3 text-slate-300 text-sm"><span className="text-emerald-400 mt-0.5 flex-shrink-0">→</span><span>Use the reading time calculator to estimate how long your completed manuscript will take to read</span></li>
              <li className="flex items-start gap-3 text-slate-300 text-sm"><span className="text-emerald-400 mt-0.5 flex-shrink-0">→</span><span>First drafts are always longer than final drafts so do not worry about being over your target during drafting</span></li>
              <li className="flex items-start gap-3 text-slate-300 text-sm"><span className="text-emerald-400 mt-0.5 flex-shrink-0">→</span><span>NaNoWriMo requires 50,000 words in November which is about 1,667 words per day</span></li>
            </ul>
          </section>

          {/* FAQs */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              
            <div key={0} className="border border-slate-700/50 rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">How many words per day should a novelist write?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Stephen King writes 2,000 words every day. Many published novelists aim for 1,000 to 1,500 words per day. Writing 500 words daily will produce a first draft novel in 6 months. Consistency beats volume.</p>
            </div>
            <div key={1} className="border border-slate-700/50 rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">Can a first novel be too long?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Yes. Most literary agents and publishers are reluctant to acquire debut novels over 120,000 words as production costs are higher. Exceptions exist in epic fantasy. Aim for 80,000 to 100,000 words for your debut.</p>
            </div>
            <div key={2} className="border border-slate-700/50 rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">How long does it take to read a 90,000 word novel?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">At the average reading speed of 250 words per minute a 90,000 word novel takes approximately 6 hours to read. Most paperback novels are read over 3 to 7 reading sessions.</p>
            </div>
            <div key={3} className="border border-slate-700/50 rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">How many pages is 80,000 words?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">An 80,000 word manuscript in standard format (Times New Roman 12pt double spaced with 1 inch margins) is approximately 320 pages. Published paperbacks average 250 to 300 words per page so a 80,000 word novel is typically 266 to 320 printed pages.</p>
            </div>
            <div key={4} className="border border-slate-700/50 rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">What is a good daily word count for writing a novel?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Writing 500 words per day produces a first draft in roughly 6 months. At 1,000 words per day you finish a first draft in 3 months. At 2,000 words per day it takes 6 weeks. Set a target that fits your schedule and stick to it every day.</p>
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
      
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.wordcountertool.net"},{"@type":"ListItem","position":2,"name":"Word Counter","item":"https://www.wordcountertool.net/word-counter"}]})}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebApplication","name":"Word Counter","applicationCategory":"UtilityApplication","operatingSystem":"Web","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"}})}} />
      <Footer />
    </>
  );
}
