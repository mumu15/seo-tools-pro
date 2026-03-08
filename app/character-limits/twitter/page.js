import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import AdUnit from '../../components/AdUnit';

export const metadata = {
  title: 'Twitter X Character Limit: Complete Guide (2026) | WordCounterTool.net',
  description: 'Complete guide to Twitter X character limits in 2026. Tweets, replies, DMs, bios, display names and Premium limits all explained.',
  alternates: { canonical: 'https://www.wordcountertool.net/character-limits/twitter' },
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
            <span className="text-slate-300">Twitter / X</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Twitter / X Character Limits (2026)</h1>
          <p className="text-slate-400 text-lg mb-10">Complete and up-to-date character limits for every Twitter / X element. Use the free character counter below to check your content before posting.</p>

          <div className="bg-slate-800/40 border border-emerald-500/20 rounded-2xl p-6 mb-10">
            <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2">Quick Answer</p>
            <p className="text-white text-lg leading-relaxed">A standard Twitter/X tweet is limited to 280 characters. X Premium subscribers can post up to 25,000 characters. URLs always count as 23 characters regardless of actual length.</p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Complete Twitter / X Character Limits</h2>
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
                    <td className="text-white font-medium py-3 pr-4">Standard tweet</td>
                    <td className="text-slate-300 py-3 pr-4">280 characters</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="text-white font-medium py-3 pr-4">X Premium post</td>
                    <td className="text-slate-300 py-3 pr-4">25,000 characters</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="text-white font-medium py-3 pr-4">Direct message</td>
                    <td className="text-slate-300 py-3 pr-4">10,000 characters</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="text-white font-medium py-3 pr-4">Profile bio</td>
                    <td className="text-slate-300 py-3 pr-4">160 characters</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="text-white font-medium py-3 pr-4">Display name</td>
                    <td className="text-slate-300 py-3 pr-4">50 characters</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="text-white font-medium py-3 pr-4">Username</td>
                    <td className="text-slate-300 py-3 pr-4">15 characters</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="text-white font-medium py-3 pr-4">URL (any link)</td>
                    <td className="text-slate-300 py-3 pr-4">23 characters</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <AdUnit slot="3248634657" />

          <div className="bg-gradient-to-r from-emerald-900/30 to-teal-900/20 border border-emerald-500/30 rounded-2xl p-6 mb-10 text-center">
            <p className="text-white font-semibold text-lg mb-2">Check Your Twitter / X Content Length Free</p>
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
      <Footer />
    </>
  );
}
