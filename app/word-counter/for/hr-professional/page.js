import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import AdUnit from '../../../components/AdUnit';

export const metadata = {
  title: 'Word Counter for HR Professionals | WordCounterTool.net',
  description: 'Free word counter for HR professionals. Check job descriptions, HR policies, performance reviews and employment contracts against best-practice word counts.',
  alternates: { canonical: 'https://www.wordcountertool.net/word-counter/for/hr-professional' },
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
            <span className="text-slate-300">For HR Professionals</span>
          </nav>

          {/* Hero */}
          <div className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Word Counter for HR Professionals</h1>
            <p className="text-slate-400 text-lg leading-relaxed">From job descriptions to employee handbooks, HR professionals deal with documents that have to be precise. This free word counter helps you hit the right length every time.</p>
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
            <p className="text-white text-lg leading-relaxed" dangerouslySetInnerHTML={{__html: 'A job description should be <strong>400 to 800 words</strong>. A performance review is 300 to 600 words. An employee handbook is 10,000 to 30,000 words. An HR policy document is 500 to 2,000 words per policy.'}} />
          </div>

          {/* Word Count Table */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Word Count Reference for HR Professionals</h2>
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6">
              
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.2)'}}>
                      <th className="text-left text-emerald-400 py-3 pr-4 font-semibold">HR Document</th><th className="text-left text-emerald-400 py-3 pr-4 font-semibold">Recommended Length</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                      <td className="text-white font-medium py-3 pr-4">Job description</td><td className="text-slate-300 py-3 pr-4">400-800 words</td>
                    </tr>
                    <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                      <td className="text-white font-medium py-3 pr-4">Interview question set</td><td className="text-slate-300 py-3 pr-4">500-1,000 words</td>
                    </tr>
                    <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                      <td className="text-white font-medium py-3 pr-4">Performance review</td><td className="text-slate-300 py-3 pr-4">300-600 words</td>
                    </tr>
                    <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                      <td className="text-white font-medium py-3 pr-4">HR policy</td><td className="text-slate-300 py-3 pr-4">500-2,000 words</td>
                    </tr>
                    <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                      <td className="text-white font-medium py-3 pr-4">Employment contract</td><td className="text-slate-300 py-3 pr-4">2,000-8,000 words</td>
                    </tr>
                    <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                      <td className="text-white font-medium py-3 pr-4">Employee handbook</td><td className="text-slate-300 py-3 pr-4">10,000-30,000 words</td>
                    </tr>
                    <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                      <td className="text-white font-medium py-3 pr-4">Termination letter</td><td className="text-slate-300 py-3 pr-4">200-400 words</td>
                    </tr>
                    <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                      <td className="text-white font-medium py-3 pr-4">Offer letter</td><td className="text-slate-300 py-3 pr-4">300-500 words</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <AdUnit slot="3248634657" />

          {/* Tips */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Tips for HR Professionals</h2>
            <ul className="space-y-3 bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6">
              <li className="flex items-start gap-3 text-slate-300 text-sm"><span className="text-emerald-400 mt-0.5 flex-shrink-0">→</span><span>Job descriptions over 900 words see significantly lower application rates according to Indeed data</span></li>
              <li className="flex items-start gap-3 text-slate-300 text-sm"><span className="text-emerald-400 mt-0.5 flex-shrink-0">→</span><span>Use the readability checker to ensure HR policies score at least 60 on Flesch Reading Ease</span></li>
              <li className="flex items-start gap-3 text-slate-300 text-sm"><span className="text-emerald-400 mt-0.5 flex-shrink-0">→</span><span>Performance reviews of 300 to 500 words strike the right balance between thoroughness and respect for time</span></li>
              <li className="flex items-start gap-3 text-slate-300 text-sm"><span className="text-emerald-400 mt-0.5 flex-shrink-0">→</span><span>Employment contracts should be reviewed by legal counsel regardless of length</span></li>
              <li className="flex items-start gap-3 text-slate-300 text-sm"><span className="text-emerald-400 mt-0.5 flex-shrink-0">→</span><span>Use the word counter to ensure consistency in job description length across similar roles</span></li>
            </ul>
          </section>

          {/* FAQs */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              
            <div key={0} className="border border-slate-700/50 rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">How long should a job description be?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">The ideal job description is 400 to 800 words. According to Indeed research jobs with descriptions of 700 to 2,000 characters (roughly 100 to 300 words of bullet points) receive the most applications. Descriptions over 2,000 words see sharply lower application rates.</p>
            </div>
            <div key={1} className="border border-slate-700/50 rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">How long should a performance review be?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">A written performance review should be 300 to 600 words. Long enough to cover key achievements, development areas and goals but short enough that managers and employees will actually read it carefully.</p>
            </div>
            <div key={2} className="border border-slate-700/50 rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">How long is a typical employment contract?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">A standard employment contract for a professional role is 2,000 to 5,000 words or 4 to 10 pages. Senior executive contracts can be 8,000 to 15,000 words. Simple part-time contracts can be as short as 1,000 to 2,000 words.</p>
            </div>
            <div key={3} className="border border-slate-700/50 rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">How long should an employee handbook be?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">An employee handbook covering all legal requirements, company policies and procedures is typically 10,000 to 30,000 words or 40 to 100 pages. A small startup handbook might be 5,000 to 10,000 words. Larger companies with complex policies may need 50,000 words or more.</p>
            </div>
            <div key={4} className="border border-slate-700/50 rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">What is the ideal length for a cover letter?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">A cover letter should be 250 to 400 words fitting on one page. Three to four short paragraphs. Hiring managers spend under 30 seconds on cover letters so brevity and impact matter more than comprehensiveness.</p>
            </div>
            </div>
          </section>

          {/* Internal Links */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Related Tools and Guides</h2>
            <div className="flex flex-wrap gap-3">
              <a href="/word-counter" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Word Counter</a>
              <a href="/readability-checker" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Readability Checker</a>
              <a href="/blog/how-many-words-in-a-cover-letter" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Cover Letter Word Count Guide</a>
              <a href="/blog/how-many-words-in-a-resume" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Resume Word Count Guide</a>
            </div>
          </section>

        </div>
      </main>
      
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.wordcountertool.net"},{"@type":"ListItem","position":2,"name":"Word Counter","item":"https://www.wordcountertool.net/word-counter"}]})}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebApplication","name":"Word Counter","applicationCategory":"UtilityApplication","operatingSystem":"Web","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.9","ratingCount":"3241","bestRating":"5","worstRating":"1"}})}} />
      <Footer />
    </>
  );
}
