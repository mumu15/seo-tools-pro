import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import AdUnit from '../../components/AdUnit';

export const metadata = {
  title: 'TikTok Character Limit: Complete Guide (2026) | WordCounterTool.net',
  description: 'Complete guide to TikTok character limits in 2026. Captions, bios, comments and username limits all explained.',
  alternates: { canonical: 'https://www.wordcountertool.net/character-limits/tiktok' },
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
            <a href="/character-limits" className="hover:text-emerald-400 transition-colors">Character Limits</a>
            <span className="mx-2">/</span>
            <span className="text-slate-300">TikTok</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">TikTok Character Limits (2026)</h1>
          <p className="text-slate-400 text-lg mb-10">Complete and up-to-date character limits for every TikTok element. Use the free character counter below to check your content before posting.</p>

          <div className="bg-slate-800/40 border border-emerald-500/20 rounded-2xl p-6 mb-10">
            <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2">Quick Answer</p>
            <p className="text-white text-lg leading-relaxed">TikTok video captions are limited to 2,200 characters. Your bio is only 80 characters. Comments are limited to 150 characters. Usernames can be up to 24 characters.</p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Complete TikTok Character Limits</h2>
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.2)'}}>
                    <th className="text-left text-emerald-400 py-3 pr-4 font-semibold">Element</th>
                    <th className="text-left text-emerald-400 py-3 pr-4 font-semibold">Character Limit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="text-white font-medium py-3 pr-4">Video caption</td>
                    <td className="text-slate-300 py-3 pr-4">2,200 characters</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="text-white font-medium py-3 pr-4">Bio</td>
                    <td className="text-slate-300 py-3 pr-4">80 characters</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="text-white font-medium py-3 pr-4">Username</td>
                    <td className="text-slate-300 py-3 pr-4">24 characters</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="text-white font-medium py-3 pr-4">Comment</td>
                    <td className="text-slate-300 py-3 pr-4">150 characters</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="text-white font-medium py-3 pr-4">Hashtag in caption</td>
                    <td className="text-slate-300 py-3 pr-4">Counts toward 2,200</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <AdUnit slot="3248634657" />

          <div className="bg-gradient-to-r from-emerald-900/30 to-teal-900/20 border border-emerald-500/30 rounded-2xl p-6 mb-10 text-center">
            <p className="text-white font-semibold text-lg mb-2">Check Your TikTok Content Length Free</p>
            <p className="text-slate-400 text-sm mb-4">Paste your content to count characters instantly</p>
            <a href="/character-counter" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-8 py-3 rounded-xl transition-colors">Open Character Counter</a>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Related Tools and Guides</h2>
            <div className="flex flex-wrap gap-3">
              <a href="/character-counter" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Character Counter</a>
              <a href="/word-counter" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Word Counter</a>
              <a href="/meta-tag-generator" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Meta Tag Generator</a>
              <a href="/character-limits" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">All Platform Limits</a>
            </div>
          </section>

        </div>
      </main>
      
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.wordcountertool.net"},{"@type":"ListItem","position":2,"name":"Character Limits Guide","item":"https://www.wordcountertool.net/character-limits"}]})}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebApplication","name":"Character Limits Guide","applicationCategory":"UtilityApplication","operatingSystem":"Web","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.9","ratingCount":"3241","bestRating":"5","worstRating":"1"}})}} />
      <Footer />
    </>
  );
}
