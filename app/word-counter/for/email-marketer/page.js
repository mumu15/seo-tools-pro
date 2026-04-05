import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import AdUnit from '../../../components/AdUnit';

export const metadata = {
  title: 'Word Counter for Email Marketers | WordCounterTool.net',
  description: 'Free word counter for email marketers. Check subject line length, email body word count and preview text against best practices for open rates and clicks.',
  alternates: { canonical: 'https://www.wordcountertool.net/word-counter/for/email-marketer' },
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
            <span className="text-slate-300">For Email Marketers</span>
          </nav>

          {/* Hero */}
          <div className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Word Counter for Email Marketers</h1>
            <p className="text-slate-400 text-lg leading-relaxed">Email length directly impacts open rates, click-through rates and unsubscribes. This free tool helps email marketers hit the optimal word count for every campaign type.</p>
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
            <p className="text-white text-lg leading-relaxed" dangerouslySetInnerHTML={{__html: 'The ideal email length is <strong>50 to 125 words</strong> for transactional emails and <strong>200 to 500 words</strong> for newsletters. Subject lines should be 30 to 50 characters. Preview text should be 40 to 90 characters.'}} />
          </div>

          {/* Word Count Table */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Word Count Reference for Email Marketers</h2>
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6">
              
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.2)'}}>
                      <th className="text-left text-emerald-400 py-3 pr-4 font-semibold">Email Type</th><th className="text-left text-emerald-400 py-3 pr-4 font-semibold">Ideal Length</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                      <td className="text-white font-medium py-3 pr-4">Cold outreach email</td><td className="text-slate-300 py-3 pr-4">50-125 words</td>
                    </tr>
                    <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                      <td className="text-white font-medium py-3 pr-4">Transactional email</td><td className="text-slate-300 py-3 pr-4">50-150 words</td>
                    </tr>
                    <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                      <td className="text-white font-medium py-3 pr-4">Newsletter</td><td className="text-slate-300 py-3 pr-4">200-500 words</td>
                    </tr>
                    <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                      <td className="text-white font-medium py-3 pr-4">Promotional email</td><td className="text-slate-300 py-3 pr-4">100-200 words</td>
                    </tr>
                    <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                      <td className="text-white font-medium py-3 pr-4">Welcome email</td><td className="text-slate-300 py-3 pr-4">200-350 words</td>
                    </tr>
                    <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                      <td className="text-white font-medium py-3 pr-4">Subject line (safe zone)</td><td className="text-slate-300 py-3 pr-4">30-50 characters</td>
                    </tr>
                    <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                      <td className="text-white font-medium py-3 pr-4">Preview text</td><td className="text-slate-300 py-3 pr-4">40-90 characters</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <AdUnit slot="3248634657" />


          <AdUnit slot="3248634657" />

          {/* Tips */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Tips for Email Marketers</h2>
            <ul className="space-y-3 bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6">
              <li className="flex items-start gap-3 text-slate-300 text-sm"><span className="text-emerald-400 mt-0.5 flex-shrink-0">→</span><span>Subject lines under 50 characters are fully visible on all mobile email clients</span></li>
              <li className="flex items-start gap-3 text-slate-300 text-sm"><span className="text-emerald-400 mt-0.5 flex-shrink-0">→</span><span>Preview text is the second line readers see in their inbox so make it complement the subject line</span></li>
              <li className="flex items-start gap-3 text-slate-300 text-sm"><span className="text-emerald-400 mt-0.5 flex-shrink-0">→</span><span>Emails over 600 words see significant drop in click-through rates according to Mailchimp data</span></li>
              <li className="flex items-start gap-3 text-slate-300 text-sm"><span className="text-emerald-400 mt-0.5 flex-shrink-0">→</span><span>Cold outreach emails perform best at 50 to 100 words as brevity signals respect for the recipient&apos;s time</span></li>
              <li className="flex items-start gap-3 text-slate-300 text-sm"><span className="text-emerald-400 mt-0.5 flex-shrink-0">→</span><span>Always check your unsubscribe link and legal footer do not bloat your word count significantly</span></li>
            </ul>
          </section>

          <AdUnit slot="3763639977" />


          {/* FAQs */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              
            <div key={0} className="border border-slate-700/50 rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">What is the ideal email subject line length?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">The ideal subject line is 30 to 50 characters. Longer subject lines get cut off on mobile which accounts for over 50% of email opens. The most important words should appear in the first 30 characters.</p>
            </div>
            <div key={1} className="border border-slate-700/50 rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">How long should an email newsletter be?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Marketing emails of 200 to 500 words get the best click-through rates according to multiple email platform studies. For highly engaged subscribers 500 to 1,000 words can work well. Always have one clear call to action.</p>
            </div>
            <div key={2} className="border border-slate-700/50 rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">Does email length affect spam filters?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Yes. Very short emails under 20 words can trigger spam filters as they resemble phishing attempts. Very long emails with many links can also trigger filters. Keep promotional emails between 100 and 500 words for best deliverability.</p>
            </div>
            <div key={3} className="border border-slate-700/50 rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">How long should a cold email be?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Cold sales emails perform best at 50 to 125 words. Research from Boomerang found that emails of 50 to 125 words receive the highest response rates at 50%. Longer cold emails see significantly lower response rates.</p>
            </div>
            <div key={4} className="border border-slate-700/50 rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">What is email preview text and how long should it be?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Preview text is the snippet of text shown after the subject line in the inbox. It should be 40 to 90 characters. On iPhone it shows up to 90 characters. Gmail shows up to 110 characters. Always write it intentionally.</p>
            </div>
            </div>
          </section>

          {/* Internal Links */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Related Tools and Guides</h2>
            <div className="flex flex-wrap gap-3">
              <a href="/character-counter" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Character Counter</a>
              <a href="/word-counter" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Word Counter</a>
              <a href="/blog/how-to-write-email-subject-lines" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Email Subject Line Guide</a>
              <a href="/blog/how-to-write-headline-formulas" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Headline Formulas That Get Clicks</a>
            </div>
          </section>

          <AdUnit slot="3248634657" />


        </div>
      </main>
      
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.wordcountertool.net"},{"@type":"ListItem","position":2,"name":"Word Counter","item":"https://www.wordcountertool.net/word-counter"}]})}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebApplication","name":"Word Counter","applicationCategory":"UtilityApplication","operatingSystem":"Web","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"}})}} />
      <Footer />
    </>
  );
}
