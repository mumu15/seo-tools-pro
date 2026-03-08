import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import AdUnit from '../../../components/AdUnit';

export const metadata = {
  title: 'Word Counter for Social Media Managers | WordCounterTool.net',
  description: 'Free character and word counter for social media managers. Check post lengths for Twitter X, Instagram, Facebook, LinkedIn and TikTok.',
  alternates: { canonical: 'https://www.wordcountertool.net/word-counter/for/social-media-manager' },
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
            <span className="text-slate-300">For Social Media Managers</span>
          </nav>

          {/* Hero */}
          <div className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Word Counter for Social Media Managers</h1>
            <p className="text-slate-400 text-lg leading-relaxed">Every social media platform has different character limits. Get it wrong and your copy gets cut off mid-sentence. This free counter helps social media managers check all platforms instantly.</p>
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
            <p className="text-white text-lg leading-relaxed" dangerouslySetInnerHTML={{__html: 'Twitter/X posts are limited to <strong>280 characters</strong>. Instagram captions are 2,200 characters. LinkedIn posts are 3,000 characters. Facebook posts are 63,206 characters. TikTok captions are 2,200 characters.'}} />
          </div>

          {/* Word Count Table */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Word Count Reference for Social Media Managers</h2>
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6">
              
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.2)'}}>
                      <th className="text-left text-emerald-400 py-3 pr-4 font-semibold">Platform</th><th className="text-left text-emerald-400 py-3 pr-4 font-semibold">Character Limit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                      <td className="text-white font-medium py-3 pr-4">Twitter/X (standard)</td><td className="text-slate-300 py-3 pr-4">280 characters</td>
                    </tr>
                    <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                      <td className="text-white font-medium py-3 pr-4">Twitter/X Premium</td><td className="text-slate-300 py-3 pr-4">25,000 characters</td>
                    </tr>
                    <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                      <td className="text-white font-medium py-3 pr-4">Instagram caption</td><td className="text-slate-300 py-3 pr-4">2,200 characters</td>
                    </tr>
                    <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                      <td className="text-white font-medium py-3 pr-4">Instagram bio</td><td className="text-slate-300 py-3 pr-4">150 characters</td>
                    </tr>
                    <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                      <td className="text-white font-medium py-3 pr-4">LinkedIn post</td><td className="text-slate-300 py-3 pr-4">3,000 characters</td>
                    </tr>
                    <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                      <td className="text-white font-medium py-3 pr-4">LinkedIn article</td><td className="text-slate-300 py-3 pr-4">125,000 characters</td>
                    </tr>
                    <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                      <td className="text-white font-medium py-3 pr-4">Facebook post</td><td className="text-slate-300 py-3 pr-4">63,206 characters</td>
                    </tr>
                    <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                      <td className="text-white font-medium py-3 pr-4">TikTok caption</td><td className="text-slate-300 py-3 pr-4">2,200 characters</td>
                    </tr>
                    <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                      <td className="text-white font-medium py-3 pr-4">Pinterest description</td><td className="text-slate-300 py-3 pr-4">500 characters</td>
                    </tr>
                    <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                      <td className="text-white font-medium py-3 pr-4">YouTube description</td><td className="text-slate-300 py-3 pr-4">5,000 characters</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <AdUnit slot="3248634657" />

          {/* Tips */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Tips for Social Media Managers</h2>
            <ul className="space-y-3 bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6">
              <li className="flex items-start gap-3 text-slate-300 text-sm"><span className="text-emerald-400 mt-0.5 flex-shrink-0">→</span><span>Use the character counter above to check your copy against any platform limit before scheduling</span></li>
              <li className="flex items-start gap-3 text-slate-300 text-sm"><span className="text-emerald-400 mt-0.5 flex-shrink-0">→</span><span>Instagram shows only the first 125 characters before the See More button so front-load your key message</span></li>
              <li className="flex items-start gap-3 text-slate-300 text-sm"><span className="text-emerald-400 mt-0.5 flex-shrink-0">→</span><span>LinkedIn posts with 1,300 to 2,000 characters get the most engagement according to platform data</span></li>
              <li className="flex items-start gap-3 text-slate-300 text-sm"><span className="text-emerald-400 mt-0.5 flex-shrink-0">→</span><span>Twitter/X posts at 71 to 100 characters get the highest retweet rates</span></li>
              <li className="flex items-start gap-3 text-slate-300 text-sm"><span className="text-emerald-400 mt-0.5 flex-shrink-0">→</span><span>Always check YouTube video descriptions as they truncate after 200 characters in search results</span></li>
            </ul>
          </section>

          {/* FAQs */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              
            <div key={0} className="border border-slate-700/50 rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">How many characters does Instagram show before the See More button?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Instagram shows approximately 125 characters of your caption before adding the See More button on mobile. On desktop it is slightly more at around 180 characters. Your most important message must be in the first 125 characters.</p>
            </div>
            <div key={1} className="border border-slate-700/50 rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">How long should a LinkedIn post be?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">LinkedIn posts of 1,000 to 1,300 characters get strong engagement. Posts that use the See More feature at 215 characters and run to 1,300 to 3,000 characters often perform best for reach.</p>
            </div>
            <div key={2} className="border border-slate-700/50 rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">What is the character limit for a Pinterest pin description?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Pinterest pin descriptions can be up to 500 characters. However only the first 50 to 60 characters show in the feed. The full description is visible when users click through to the pin.</p>
            </div>
            <div key={3} className="border border-slate-700/50 rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">How long should a YouTube description be for SEO?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">YouTube descriptions can be up to 5,000 characters. For SEO include your primary keyword in the first 150 characters as that is what shows in search results. Aim for 300 to 500 words total for the best ranking results.</p>
            </div>
            <div key={4} className="border border-slate-700/50 rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">Do hashtags count in Instagram's character limit?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Yes. Hashtags count toward Instagram's 2,200 character limit. However most creators put hashtags at the end after the main caption or in the first comment to keep the caption clean.</p>
            </div>
            </div>
          </section>

          {/* Internal Links */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Related Tools and Guides</h2>
            <div className="flex flex-wrap gap-3">
              <a href="/character-counter" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Character Counter</a>
              <a href="/word-counter" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Word Counter</a>
              <a href="/blog/how-many-characters-in-a-tweet" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Twitter Character Limits</a>
              <a href="/blog/instagram-caption-length" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Instagram Caption Length Guide</a>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}
