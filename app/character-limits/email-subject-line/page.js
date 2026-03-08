import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import AdUnit from '../../../components/AdUnit';

export const metadata = {
  title: 'Email Subject Line Character Limit: Best Practices (2026) | WordCounterTool.net',
  description: 'The ideal email subject line character limit for maximum open rates in 2026. Covers Gmail, Outlook, iPhone Mail and all major email clients.',
  alternates: { canonical: 'https://www.wordcountertool.net/character-limits/email-subject-line' },
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
            <span className="text-slate-300">Email Subject Line</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Email Subject Line Character Limits (2026)</h1>
          <p className="text-slate-400 text-lg mb-10">Complete and up-to-date character limits for every Email Subject Line element. Use the free character counter below to check your content before posting.</p>

          <div className="bg-slate-800/40 border border-emerald-500/20 rounded-2xl p-6 mb-10">
            <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2">Quick Answer</p>
            <p className="text-white text-lg leading-relaxed">Email subject lines should be 30 to 50 characters for maximum visibility across all email clients. Mobile shows only 30 to 38 characters so put your most important words first.</p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Complete Email Subject Line Character Limits</h2>
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.2)'}}>
                    <th className="text-left text-emerald-400 py-3 pr-4 font-semibold">Email Client</th>
                    <th className="text-left text-emerald-400 py-3 pr-4 font-semibold">Characters Visible</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="text-white font-medium py-3 pr-4">iPhone Mail</td>
                    <td className="text-slate-300 py-3 pr-4">35-38 characters</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="text-white font-medium py-3 pr-4">Android Gmail</td>
                    <td className="text-slate-300 py-3 pr-4">30-35 characters</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="text-white font-medium py-3 pr-4">Desktop Gmail</td>
                    <td className="text-slate-300 py-3 pr-4">70-80 characters</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="text-white font-medium py-3 pr-4">Desktop Outlook</td>
                    <td className="text-slate-300 py-3 pr-4">60-70 characters</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="text-white font-medium py-3 pr-4">Apple Watch</td>
                    <td className="text-slate-300 py-3 pr-4">15-18 characters</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="text-white font-medium py-3 pr-4">Safe zone (all clients)</td>
                    <td className="text-slate-300 py-3 pr-4">30-40 characters</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <AdUnit slot="3248634657" />

          <div className="bg-gradient-to-r from-emerald-900/30 to-teal-900/20 border border-emerald-500/30 rounded-2xl p-6 mb-10 text-center">
            <p className="text-white font-semibold text-lg mb-2">Check Your Email Subject Line Content Length Free</p>
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
