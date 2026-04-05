import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import AdUnit from '../../../components/AdUnit';

export const metadata = {
  title: 'Word Count for a Speech: Complete Guide (2026) | WordCounterTool.net',
  description: 'How many words is a speech? Exact word counts for 1, 5, 10, 15, 20 and 30 minute speeches at different speaking speeds.',
  alternates: { canonical: 'https://www.wordcountertool.net/word-count/for/speech' },
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
            <span className="text-slate-300">Speech</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Word Count for Speech</h1>

          <div className="bg-slate-800/40 border border-emerald-500/20 rounded-2xl p-6 mb-10">
            <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2">Quick Answer</p>
            <p className="text-white text-lg leading-relaxed">A 5 minute speech is approximately 650 to 750 words at an average speaking pace of 130 to 150 words per minute. A 10 minute speech needs 1,300 to 1,500 words. A 20 minute speech needs 2,600 to 3,000 words.</p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Speech Word Count by Type</h2>
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.2)'}}>
                    <th className="text-left text-emerald-400 py-3 pr-4 font-semibold">Speech Duration</th>
                    <th className="text-left text-emerald-400 py-3 pr-4 font-semibold">Word Count (140 WPM avg)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="text-white font-medium py-3 pr-4">1 minute</td>
                    <td className="text-slate-300 py-3 pr-4">130-150 words</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="text-white font-medium py-3 pr-4">2 minutes</td>
                    <td className="text-slate-300 py-3 pr-4">260-300 words</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="text-white font-medium py-3 pr-4">3 minutes</td>
                    <td className="text-slate-300 py-3 pr-4">390-450 words</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="text-white font-medium py-3 pr-4">5 minutes</td>
                    <td className="text-slate-300 py-3 pr-4">650-750 words</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="text-white font-medium py-3 pr-4">10 minutes</td>
                    <td className="text-slate-300 py-3 pr-4">1,300-1,500 words</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="text-white font-medium py-3 pr-4">15 minutes</td>
                    <td className="text-slate-300 py-3 pr-4">1,950-2,250 words</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="text-white font-medium py-3 pr-4">20 minutes</td>
                    <td className="text-slate-300 py-3 pr-4">2,600-3,000 words</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="text-white font-medium py-3 pr-4">30 minutes</td>
                    <td className="text-slate-300 py-3 pr-4">3,900-4,500 words</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="text-white font-medium py-3 pr-4">45 minutes</td>
                    <td className="text-slate-300 py-3 pr-4">5,850-6,750 words</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="text-white font-medium py-3 pr-4">60 minutes</td>
                    <td className="text-slate-300 py-3 pr-4">7,800-9,000 words</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <AdUnit slot="3248634657" />


          <AdUnit slot="3248634657" />

          <div className="bg-gradient-to-r from-emerald-900/30 to-teal-900/20 border border-emerald-500/30 rounded-2xl p-6 mb-10 text-center">
            <p className="text-white font-semibold text-lg mb-2">Check Your Speech Word Count Free</p>
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

          <AdUnit slot="3763639977" />


        </div>
      </main>
      
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.wordcountertool.net"},{"@type":"ListItem","position":2,"name":"Word Count Guide","item":"https://www.wordcountertool.net/word-count"}]})}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebApplication","name":"Word Count Guide","applicationCategory":"UtilityApplication","operatingSystem":"Web","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"}})}} />
      
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

          <AdUnit slot="3248634657" />

        
        {/* === BEEFED-UP CONTENT: 1500+ words === */}
        <div className="max-w-4xl mx-auto mt-14 px-4 space-y-10">

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{color:'#f1f5f9'}}>Speech Length by Duration and Speaking Speed</h2>
            <p className="leading-relaxed mb-3" style={{color:'#94a3b8'}}>The average speaking pace is 130-150 words per minute for a formal speech. Conversational speech runs faster at 150-170 WPM. Auctioneers hit 250+. The pace you choose affects how many words fit into your allotted time.</p>
            <p className="leading-relaxed mb-3" style={{color:'#94a3b8'}}>A 5-minute speech at 140 WPM is 700 words. A 10-minute speech is 1,400. A 20-minute TED talk is about 2,800. Martin Luther King Jr.\'s "I Have a Dream" speech was 1,667 words and lasted 17 minutes — a pace of about 98 WPM, deliberately slow for emphasis.</p>
            <p className="leading-relaxed mb-3" style={{color:'#94a3b8'}}>Pauses are part of the word count calculation that most people miss. A speech with natural pauses, audience interaction, or dramatic moments will use fewer words per minute than the same speech read straight through. Budget 10-15% fewer words than the mathematical calculation suggests.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{color:'#f1f5f9'}}>Common Speech Types and Their Lengths</h2>
            <p className="leading-relaxed mb-3" style={{color:'#94a3b8'}}>Wedding toasts: 2-4 minutes (250-500 words). Best man speeches: 3-5 minutes (400-700 words). Maid of honor speeches: 3-5 minutes (400-700 words). Father of the bride: 3-5 minutes. Keep it short. Nobody at a wedding has ever complained that a toast was too brief.</p>
            <p className="leading-relaxed mb-3" style={{color:'#94a3b8'}}>Eulogies: 5-10 minutes (700-1,400 words). This is one of the few speech types where going slightly longer is forgiven. But beyond 10 minutes, attention drifts even in mourning.</p>
            <p className="leading-relaxed mb-3" style={{color:'#94a3b8'}}>Business presentations: 15-20 minutes of speaking with 10-15 minutes for Q&A is the standard format. That means your prepared content should be 2,000-2,800 words. Keynote addresses at conferences run 30-45 minutes: 4,000-6,000 words.</p>
            <p className="leading-relaxed mb-3" style={{color:'#94a3b8'}}>Valedictorian speeches: 5-8 minutes (700-1,100 words). Graduation audiences are large, often outdoors, and sitting in uncomfortable chairs. Brevity is kindness.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{color:'#f1f5f9'}}>How to Calibrate Your Speech Length</h2>
            <p className="leading-relaxed mb-3" style={{color:'#94a3b8'}}>Time yourself. Read your speech aloud at your natural pace with a stopwatch. Do this three times. The average of the three readings is your actual speech length. Most people speak 10-15% slower in front of an audience due to nerves and pauses.</p>
            <p className="leading-relaxed mb-3" style={{color:'#94a3b8'}}>If you are running long, do not speed up. Cut content. Speaking faster makes you harder to follow and signals anxiety. A calm, well-paced 7-minute speech beats a rushed 10-minute speech every time.</p>
            <p className="leading-relaxed mb-3" style={{color:'#94a3b8'}}>Practice the speech standing up if you will deliver it standing. Sitting changes your breathing and pace. If you will use slides, practice with them — clicking through slides adds time that does not appear in a text-only rehearsal.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{color:'#f1f5f9'}}>The One-Page Rule</h2>
            <p className="leading-relaxed mb-3" style={{color:'#94a3b8'}}>A useful rule of thumb: one page of double-spaced 12pt text (250 words) takes about 2 minutes to deliver at a natural pace. So a 5-minute speech is 2-2.5 pages. A 10-minute speech is 4-5 pages. This gives you a quick visual check without needing a stopwatch.</p>
            <p className="leading-relaxed mb-3" style={{color:'#94a3b8'}}>For notes rather than a full script, use an outline with bullet points and key phrases rather than full sentences. A 5-minute speech outline might be half a page. The advantage is that outline-based delivery sounds more natural and allows eye contact with the audience.</p>
            <p className="leading-relaxed mb-3" style={{color:'#94a3b8'}}>If you are reading from a full script, use 14-16pt font with double spacing so you can find your place easily. This means more pages, but the readability prevents the awkward pauses that come from squinting at small text at a podium.</p>
          </section>

        </div>
      <Footer />
    </>
  );
}
