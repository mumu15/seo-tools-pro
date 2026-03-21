import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import AdUnit from '../../components/AdUnit';

export const metadata = {
  title: 'YouTube Character Limit: Complete Guide (2026) | WordCounterTool.net',
  description: 'Complete guide to YouTube character limits in 2026. Video titles, descriptions, tags, comments and channel info limits all covered.',
  alternates: { canonical: 'https://www.wordcountertool.net/character-limits/youtube' },
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
            <span className="text-slate-300">YouTube</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">YouTube Character Limits (2026)</h1>
          <p className="text-slate-400 text-lg mb-10">Complete and up-to-date character limits for every YouTube element. Use the free character counter below to check your content before posting.</p>

          <div className="bg-slate-800/40 border border-emerald-500/20 rounded-2xl p-6 mb-10">
            <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2">Quick Answer</p>
            <p className="text-white text-lg leading-relaxed">YouTube video titles are limited to 100 characters but only the first 70 show in search results. Descriptions can be up to 5,000 characters but only 157 show in search snippets.</p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Complete YouTube Character Limits</h2>
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
                    <td className="text-white font-medium py-3 pr-4">Video title</td>
                    <td className="text-slate-300 py-3 pr-4">100 characters</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="text-white font-medium py-3 pr-4">Video description</td>
                    <td className="text-slate-300 py-3 pr-4">5,000 characters</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="text-white font-medium py-3 pr-4">Visible in search results</td>
                    <td className="text-slate-300 py-3 pr-4">157 characters</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="text-white font-medium py-3 pr-4">Tag</td>
                    <td className="text-slate-300 py-3 pr-4">30 characters per tag</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="text-white font-medium py-3 pr-4">All tags combined</td>
                    <td className="text-slate-300 py-3 pr-4">500 characters</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="text-white font-medium py-3 pr-4">Comment</td>
                    <td className="text-slate-300 py-3 pr-4">10,000 characters</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="text-white font-medium py-3 pr-4">Channel name</td>
                    <td className="text-slate-300 py-3 pr-4">30 characters</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="text-white font-medium py-3 pr-4">Channel description</td>
                    <td className="text-slate-300 py-3 pr-4">1,000 characters</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <AdUnit slot="3248634657" />

          <div className="bg-gradient-to-r from-emerald-900/30 to-teal-900/20 border border-emerald-500/30 rounded-2xl p-6 mb-10 text-center">
            <p className="text-white font-semibold text-lg mb-2">Check Your YouTube Content Length Free</p>
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
      
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">More Platform Limits</h2>
            <div className="flex flex-wrap gap-2">
              <a href="/character-limits/discord" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-3 py-2 rounded-lg transition-colors">Discord</a>
              <a href="/character-limits/email-subject-line" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-3 py-2 rounded-lg transition-colors">Email Subject Line</a>
              <a href="/character-limits/facebook" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-3 py-2 rounded-lg transition-colors">Facebook</a>
              <a href="/character-limits/google-ads" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-3 py-2 rounded-lg transition-colors">Google Ads</a>
              <a href="/character-limits/instagram" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-3 py-2 rounded-lg transition-colors">Instagram</a>
              <a href="/character-limits/linkedin" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-3 py-2 rounded-lg transition-colors">Linkedin</a>
              <a href="/character-limits/medium" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-3 py-2 rounded-lg transition-colors">Medium</a>
              <a href="/character-limits/meta-description" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-3 py-2 rounded-lg transition-colors">Meta Description</a>
              <a href="/character-limits" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-3 py-2 rounded-lg transition-colors">All Limits →</a>
            </div>
          </section>
        <Footer />
    </>
  );
}
