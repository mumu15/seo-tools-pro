import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import AdUnit from '../../../components/AdUnit';

export const metadata = {
  title: 'Word Counter for Screenwriters | WordCounterTool.net',
  description: 'Free word counter for screenwriters. Check script page count, word count and scene length for feature films, TV pilots and short films.',
  alternates: { canonical: 'https://www.wordcountertool.net/word-counter/for/screenwriter' },
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
            <span className="text-slate-300">For Screenwriters</span>
          </nav>

          {/* Hero */}
          <div className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Word Counter for Screenwriters</h1>
            <p className="text-slate-400 text-lg leading-relaxed">In screenwriting, one page equals one minute of screen time. Hitting the right page count is essential for professional script submissions. This free word counter helps you track your screenplay length.</p>
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
            <p className="text-white text-lg leading-relaxed" dangerouslySetInnerHTML={{__html: 'A feature film screenplay is <strong>95 to 115 pages</strong> which equals roughly 15,000 to 20,000 words. A 30-minute TV episode is 25 to 35 pages. A 60-minute TV episode is 45 to 60 pages. One screenplay page averages 150 to 200 words.'}} />
          </div>

          {/* Word Count Table */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Word Count Reference for Screenwriters</h2>
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6">
              
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.2)'}}>
                      <th className="text-left text-emerald-400 py-3 pr-4 font-semibold">Script Format</th><th className="text-left text-emerald-400 py-3 pr-4 font-semibold">Page Count</th><th className="text-left text-emerald-400 py-3 pr-4 font-semibold">Word Count Approx</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                      <td className="text-white font-medium py-3 pr-4">Short film (under 10 min)</td><td className="text-slate-300 py-3 pr-4">5-10 pages</td><td className="text-slate-300 py-3 pr-4">750-1,500 words</td>
                    </tr>
                    <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                      <td className="text-white font-medium py-3 pr-4">Short film (10-20 min)</td><td className="text-slate-300 py-3 pr-4">10-20 pages</td><td className="text-slate-300 py-3 pr-4">1,500-3,000 words</td>
                    </tr>
                    <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                      <td className="text-white font-medium py-3 pr-4">TV sitcom (30 min)</td><td className="text-slate-300 py-3 pr-4">22-32 pages</td><td className="text-slate-300 py-3 pr-4">3,300-4,800 words</td>
                    </tr>
                    <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                      <td className="text-white font-medium py-3 pr-4">TV drama (60 min)</td><td className="text-slate-300 py-3 pr-4">45-60 pages</td><td className="text-slate-300 py-3 pr-4">6,750-9,000 words</td>
                    </tr>
                    <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                      <td className="text-white font-medium py-3 pr-4">Feature film (drama)</td><td className="text-slate-300 py-3 pr-4">90-110 pages</td><td className="text-slate-300 py-3 pr-4">13,500-16,500 words</td>
                    </tr>
                    <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                      <td className="text-white font-medium py-3 pr-4">Feature film (action)</td><td className="text-slate-300 py-3 pr-4">100-120 pages</td><td className="text-slate-300 py-3 pr-4">15,000-18,000 words</td>
                    </tr>
                    <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                      <td className="text-white font-medium py-3 pr-4">Feature film (comedy)</td><td className="text-slate-300 py-3 pr-4">88-102 pages</td><td className="text-slate-300 py-3 pr-4">13,200-15,300 words</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <AdUnit slot="3248634657" />

          {/* Tips */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Tips for Screenwriters</h2>
            <ul className="space-y-3 bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6">
              <li className="flex items-start gap-3 text-slate-300 text-sm"><span className="text-emerald-400 mt-0.5 flex-shrink-0">→</span><span>One formatted screenplay page in Courier 12pt equals approximately one minute of screen time</span></li>
              <li className="flex items-start gap-3 text-slate-300 text-sm"><span className="text-emerald-400 mt-0.5 flex-shrink-0">→</span><span>A standard screenplay has about 150 to 200 words per page due to white space from action lines and dialogue</span></li>
              <li className="flex items-start gap-3 text-slate-300 text-sm"><span className="text-emerald-400 mt-0.5 flex-shrink-0">→</span><span>Feature film specs from major studios typically call for 90 to 110 pages</span></li>
              <li className="flex items-start gap-3 text-slate-300 text-sm"><span className="text-emerald-400 mt-0.5 flex-shrink-0">→</span><span>TV pilot specs vary by network: broadcast dramas 45-55 pages, premium cable 55-65 pages</span></li>
              <li className="flex items-start gap-3 text-slate-300 text-sm"><span className="text-emerald-400 mt-0.5 flex-shrink-0">→</span><span>Over-length scripts signal amateur work to agents and executives so hit your target range</span></li>
            </ul>
          </section>

          {/* FAQs */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              
            <div key={0} className="border border-slate-700/50 rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">How many words are in a feature film screenplay?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">A feature film screenplay is typically 90 to 120 pages. At an average of 150 to 200 words per formatted page that equals 13,500 to 24,000 words. Most specs call for 95 to 110 pages.</p>
            </div>
            <div key={1} className="border border-slate-700/50 rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">How many words per page in a screenplay?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Standard screenplay format in Courier 12pt with standard margins averages 150 to 200 words per page. This is less than prose due to the white space created by dialogue, action lines and scene headings.</p>
            </div>
            <div key={2} className="border border-slate-700/50 rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">Does the one page equals one minute rule still apply?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Yes. The one page per minute rule is still the standard industry benchmark. It is an approximation: action-heavy scenes can run slower than a page per minute, dialogue-heavy scenes faster.</p>
            </div>
            <div key={3} className="border border-slate-700/50 rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">How long should a TV pilot script be?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">A broadcast TV drama pilot is 45 to 55 pages. A premium cable or streaming pilot is 55 to 70 pages. A single-camera comedy pilot is 25 to 35 pages. A multi-camera sitcom pilot is 35 to 50 pages.</p>
            </div>
            <div key={4} className="border border-slate-700/50 rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">How long should a short film script be?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Film festival short films are typically 5 to 15 minutes which equals 5 to 15 pages. Shorts over 40 pages (40 minutes) are too long for most festival programs and are considered featurettes.</p>
            </div>
            </div>
          </section>

          {/* Internal Links */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Related Tools and Guides</h2>
            <div className="flex flex-wrap gap-3">
              <a href="/word-counter" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Word Counter</a>
              <a href="/reading-time" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Reading Time Calculator</a>
              <a href="/blog/how-many-words-in-a-paragraph" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">How Many Words in a Paragraph</a>
              <a href="/blog/how-many-words-per-page" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">How Many Words Per Page</a>
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
