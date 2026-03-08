import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import AdUnit from '../../../components/AdUnit';

export const metadata = {
  title: 'Word Counter for Teachers | WordCounterTool.net',
  description: 'Free word counter for teachers and educators. Check student assignment lengths, lesson plan word counts and educational content readability.',
  alternates: { canonical: 'https://www.wordcountertool.net/word-counter/for/teacher' },
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
            <span className="text-slate-300">For Teachers</span>
          </nav>

          {/* Hero */}
          <div className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Word Counter for Teachers</h1>
            <p className="text-slate-400 text-lg leading-relaxed">Teachers set word limits for a reason. Whether you&apos;re checking student submissions, writing lesson plans or creating educational content, this free word counter saves you time.</p>
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
            <p className="text-white text-lg leading-relaxed" dangerouslySetInnerHTML={{__html: 'Elementary school writing assignments are typically <strong>100 to 500 words</strong>. Middle school essays are 500 to 1,000 words. High school essays are 1,000 to 2,500 words. College-level essays are 1,500 to 5,000 words.'}} />
          </div>

          {/* Word Count Table */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Word Count Reference for Teachers</h2>
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6">
              
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.2)'}}>
                      <th className="text-left text-emerald-400 py-3 pr-4 font-semibold">Grade Level</th><th className="text-left text-emerald-400 py-3 pr-4 font-semibold">Typical Assignment Length</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                      <td className="text-white font-medium py-3 pr-4">Elementary (K-5)</td><td className="text-slate-300 py-3 pr-4">100-400 words</td>
                    </tr>
                    <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                      <td className="text-white font-medium py-3 pr-4">Middle School (6-8)</td><td className="text-slate-300 py-3 pr-4">400-800 words</td>
                    </tr>
                    <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                      <td className="text-white font-medium py-3 pr-4">High School (9-12)</td><td className="text-slate-300 py-3 pr-4">800-2,000 words</td>
                    </tr>
                    <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                      <td className="text-white font-medium py-3 pr-4">College freshman</td><td className="text-slate-300 py-3 pr-4">1,000-2,500 words</td>
                    </tr>
                    <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                      <td className="text-white font-medium py-3 pr-4">Upper college</td><td className="text-slate-300 py-3 pr-4">2,000-5,000 words</td>
                    </tr>
                    <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                      <td className="text-white font-medium py-3 pr-4">Graduate level</td><td className="text-slate-300 py-3 pr-4">5,000-15,000 words</td>
                    </tr>
                    <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                      <td className="text-white font-medium py-3 pr-4">Lesson plan</td><td className="text-slate-300 py-3 pr-4">500-1,500 words</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <AdUnit slot="3248634657" />

          {/* Tips */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Tips for Teachers</h2>
            <ul className="space-y-3 bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6">
              <li className="flex items-start gap-3 text-slate-300 text-sm"><span className="text-emerald-400 mt-0.5 flex-shrink-0">→</span><span>Paste student submissions into the counter to verify word counts quickly without relying on student-reported numbers</span></li>
              <li className="flex items-start gap-3 text-slate-300 text-sm"><span className="text-emerald-400 mt-0.5 flex-shrink-0">→</span><span>Use the readability checker to verify that classroom materials are appropriate for your students' reading level</span></li>
              <li className="flex items-start gap-3 text-slate-300 text-sm"><span className="text-emerald-400 mt-0.5 flex-shrink-0">→</span><span>The Flesch-Kincaid grade level score helps you verify reading level of texts you assign</span></li>
              <li className="flex items-start gap-3 text-slate-300 text-sm"><span className="text-emerald-400 mt-0.5 flex-shrink-0">→</span><span>For rubric purposes define whether headers, titles and citations count toward the word limit</span></li>
              <li className="flex items-start gap-3 text-slate-300 text-sm"><span className="text-emerald-400 mt-0.5 flex-shrink-0">→</span><span>Check your own lesson plans and worksheets for consistent length and reading level</span></li>
            </ul>
          </section>

          {/* FAQs */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              
            <div key={0} className="border border-slate-700/50 rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">How do I verify a student&apos;s word count?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Paste the student&apos;s submitted text into our free word counter for an instant independent count. This is more reliable than accepting the student&apos;s own reported count.</p>
            </div>
            <div key={1} className="border border-slate-700/50 rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">What reading level is appropriate for different grades?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Flesch-Kincaid grade level scores correspond to US school grades. A score of 5 means 5th grade reading level. Most middle school texts aim for grade 6-8. High school texts grade 9-12.</p>
            </div>
            <div key={2} className="border border-slate-700/50 rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">How long should a lesson plan be?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">A single lesson plan is typically 500 to 1,000 words including objectives, materials, procedure and assessment. Unit plans covering multiple lessons run 2,000 to 5,000 words.</p>
            </div>
            <div key={3} className="border border-slate-700/50 rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">How many words per page for student essays?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">A standard double-spaced page in Times New Roman 12pt is approximately 275 words. Single-spaced is about 550 words per page. So a 5 page double-spaced essay is roughly 1,375 words.</p>
            </div>
            <div key={4} className="border border-slate-700/50 rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">Should teachers count headers and titles in word limits?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Best practice is to exclude titles, headers and bibliography from word limits and state this clearly in assignment guidelines. This avoids disputes and helps students focus on substantive writing.</p>
            </div>
            </div>
          </section>

          {/* Internal Links */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Related Tools and Guides</h2>
            <div className="flex flex-wrap gap-3">
              <a href="/readability-checker" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Readability Checker</a>
              <a href="/word-counter" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Word Counter</a>
              <a href="/blog/how-many-words-per-page" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">How Many Words Per Page</a>
              <a href="/blog/what-is-flesch-kincaid-score" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Flesch-Kincaid Reading Score</a>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}
