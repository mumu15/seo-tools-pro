import Header from '../../components/Header'
import Footer from '../../components/Footer'
import AdUnit from '../components/AdUnit'
import FaqSchema from '../../components/FaqSchema'

export const metadata = {
  title: 'Words to Pages Converter — How Many Pages Is 1000 Words?',
  description: 'Convert any word count to pages. 250 words = 1 page double-spaced. Works for any font, size, and spacing. Free instant converter.',
  alternates: { canonical: 'https://www.wordcountertool.net/words-to-pages' },
}

const faqs = [
  { q: 'How many pages is 1,000 words?', a: '1,000 words is approximately 4 pages double-spaced or 2 pages single-spaced using 12pt Times New Roman with 1-inch margins.' },
  { q: 'How many pages is 500 words?', a: '500 words is approximately 2 pages double-spaced or 1 page single-spaced.' },
  { q: 'How many pages is 2,000 words?', a: '2,000 words is approximately 8 pages double-spaced or 4 pages single-spaced.' },
  { q: 'What affects words per page?', a: 'Font type, font size, line spacing, and margins all affect how many words fit on a page. Times New Roman 12pt double-spaced with 1-inch margins gives approximately 250 words per page.' },
  { q: 'How many pages is 5,000 words?', a: '5,000 words is approximately 20 pages double-spaced or 10 pages single-spaced.' },
]

export default function Page() {
  return (
    <>
      <FaqSchema faqs={faqs} />
      <Header />
      <main className="min-h-screen bg-slate-950 text-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <nav className="text-sm text-slate-500 mb-6">
            <a href="/" className="hover:text-emerald-400 transition-colors">Home</a>
            <span className="mx-2">/</span>
            <span className="text-slate-300">Words to Pages</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Words to Pages Converter</h1>
          <p className="text-slate-400 text-lg mb-8">Instantly see how many pages your word count equals in any format</p>

          <div className="bg-slate-800/40 border border-emerald-500/20 rounded-2xl p-6 mb-10">
            <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2">Quick Reference</p>
            <p className="text-white text-lg leading-relaxed">A standard double-spaced page contains <strong>250 words</strong> (12pt Times New Roman, 1-inch margins). A single-spaced page contains <strong>500 words</strong>. Use the table below or click any word count for a detailed breakdown.</p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Words to Pages Reference Table</h2>
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 overflow-x-auto">
              <table className="w-full text-sm">
                <thead><tr className="border-b" style={{borderColor:'rgba(52,211,153,0.2)'}}>
                  <th className="text-left text-emerald-400 py-3 pr-4 font-semibold text-xs uppercase">Word Count</th>
                  <th className="text-left text-emerald-400 py-3 pr-4 font-semibold text-xs uppercase">Single Spaced</th>
                  <th className="text-left text-emerald-400 py-3 pr-4 font-semibold text-xs uppercase">Double Spaced</th>
                  <th className="text-left text-emerald-400 py-3 font-semibold text-xs uppercase">Read Time</th>
                </tr></thead>
                <tbody>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="py-3 pr-4"><a href="/words-to-pages/250-words" className="text-emerald-400 font-bold hover:underline">250 words</a></td>
                    <td className="text-slate-300 py-3 pr-4">0.5 pages</td>
                    <td className="text-white font-medium py-3 pr-4">1.0 pages</td>
                    <td className="text-slate-500 py-3">2 min</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="py-3 pr-4"><a href="/words-to-pages/300-words" className="text-emerald-400 font-bold hover:underline">300 words</a></td>
                    <td className="text-slate-300 py-3 pr-4">0.6 pages</td>
                    <td className="text-white font-medium py-3 pr-4">1.2 pages</td>
                    <td className="text-slate-500 py-3">2 min</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="py-3 pr-4"><a href="/words-to-pages/500-words" className="text-emerald-400 font-bold hover:underline">500 words</a></td>
                    <td className="text-slate-300 py-3 pr-4">1.0 pages</td>
                    <td className="text-white font-medium py-3 pr-4">2.0 pages</td>
                    <td className="text-slate-500 py-3">3 min</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="py-3 pr-4"><a href="/words-to-pages/600-words" className="text-emerald-400 font-bold hover:underline">600 words</a></td>
                    <td className="text-slate-300 py-3 pr-4">1.2 pages</td>
                    <td className="text-white font-medium py-3 pr-4">2.4 pages</td>
                    <td className="text-slate-500 py-3">3 min</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="py-3 pr-4"><a href="/words-to-pages/750-words" className="text-emerald-400 font-bold hover:underline">750 words</a></td>
                    <td className="text-slate-300 py-3 pr-4">1.5 pages</td>
                    <td className="text-white font-medium py-3 pr-4">3.0 pages</td>
                    <td className="text-slate-500 py-3">4 min</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="py-3 pr-4"><a href="/words-to-pages/800-words" className="text-emerald-400 font-bold hover:underline">800 words</a></td>
                    <td className="text-slate-300 py-3 pr-4">1.6 pages</td>
                    <td className="text-white font-medium py-3 pr-4">3.2 pages</td>
                    <td className="text-slate-500 py-3">4 min</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="py-3 pr-4"><a href="/words-to-pages/1000-words" className="text-emerald-400 font-bold hover:underline">1 000 words</a></td>
                    <td className="text-slate-300 py-3 pr-4">2.0 pages</td>
                    <td className="text-white font-medium py-3 pr-4">4.0 pages</td>
                    <td className="text-slate-500 py-3">5 min</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="py-3 pr-4"><a href="/words-to-pages/1200-words" className="text-emerald-400 font-bold hover:underline">1 200 words</a></td>
                    <td className="text-slate-300 py-3 pr-4">2.4 pages</td>
                    <td className="text-white font-medium py-3 pr-4">4.8 pages</td>
                    <td className="text-slate-500 py-3">6 min</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="py-3 pr-4"><a href="/words-to-pages/1500-words" className="text-emerald-400 font-bold hover:underline">1 500 words</a></td>
                    <td className="text-slate-300 py-3 pr-4">3.0 pages</td>
                    <td className="text-white font-medium py-3 pr-4">6.0 pages</td>
                    <td className="text-slate-500 py-3">8 min</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="py-3 pr-4"><a href="/words-to-pages/1750-words" className="text-emerald-400 font-bold hover:underline">1 750 words</a></td>
                    <td className="text-slate-300 py-3 pr-4">3.5 pages</td>
                    <td className="text-white font-medium py-3 pr-4">7.0 pages</td>
                    <td className="text-slate-500 py-3">9 min</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="py-3 pr-4"><a href="/words-to-pages/2000-words" className="text-emerald-400 font-bold hover:underline">2 000 words</a></td>
                    <td className="text-slate-300 py-3 pr-4">4.0 pages</td>
                    <td className="text-white font-medium py-3 pr-4">8.0 pages</td>
                    <td className="text-slate-500 py-3">10 min</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="py-3 pr-4"><a href="/words-to-pages/2500-words" className="text-emerald-400 font-bold hover:underline">2 500 words</a></td>
                    <td className="text-slate-300 py-3 pr-4">5.0 pages</td>
                    <td className="text-white font-medium py-3 pr-4">10.0 pages</td>
                    <td className="text-slate-500 py-3">13 min</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="py-3 pr-4"><a href="/words-to-pages/3000-words" className="text-emerald-400 font-bold hover:underline">3 000 words</a></td>
                    <td className="text-slate-300 py-3 pr-4">6.0 pages</td>
                    <td className="text-white font-medium py-3 pr-4">12.0 pages</td>
                    <td className="text-slate-500 py-3">15 min</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="py-3 pr-4"><a href="/words-to-pages/4000-words" className="text-emerald-400 font-bold hover:underline">4 000 words</a></td>
                    <td className="text-slate-300 py-3 pr-4">8.0 pages</td>
                    <td className="text-white font-medium py-3 pr-4">16.0 pages</td>
                    <td className="text-slate-500 py-3">20 min</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="py-3 pr-4"><a href="/words-to-pages/5000-words" className="text-emerald-400 font-bold hover:underline">5 000 words</a></td>
                    <td className="text-slate-300 py-3 pr-4">10.0 pages</td>
                    <td className="text-white font-medium py-3 pr-4">20.0 pages</td>
                    <td className="text-slate-500 py-3">25 min</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="py-3 pr-4"><a href="/words-to-pages/6000-words" className="text-emerald-400 font-bold hover:underline">6 000 words</a></td>
                    <td className="text-slate-300 py-3 pr-4">12.0 pages</td>
                    <td className="text-white font-medium py-3 pr-4">24.0 pages</td>
                    <td className="text-slate-500 py-3">30 min</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="py-3 pr-4"><a href="/words-to-pages/7500-words" className="text-emerald-400 font-bold hover:underline">7 500 words</a></td>
                    <td className="text-slate-300 py-3 pr-4">15.0 pages</td>
                    <td className="text-white font-medium py-3 pr-4">30.0 pages</td>
                    <td className="text-slate-500 py-3">38 min</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="py-3 pr-4"><a href="/words-to-pages/8000-words" className="text-emerald-400 font-bold hover:underline">8 000 words</a></td>
                    <td className="text-slate-300 py-3 pr-4">16.0 pages</td>
                    <td className="text-white font-medium py-3 pr-4">32.0 pages</td>
                    <td className="text-slate-500 py-3">40 min</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="py-3 pr-4"><a href="/words-to-pages/10000-words" className="text-emerald-400 font-bold hover:underline">10 000 words</a></td>
                    <td className="text-slate-300 py-3 pr-4">20.0 pages</td>
                    <td className="text-white font-medium py-3 pr-4">40.0 pages</td>
                    <td className="text-slate-500 py-3">50 min</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="py-3 pr-4"><a href="/words-to-pages/15000-words" className="text-emerald-400 font-bold hover:underline">15 000 words</a></td>
                    <td className="text-slate-300 py-3 pr-4">30.0 pages</td>
                    <td className="text-white font-medium py-3 pr-4">60.0 pages</td>
                    <td className="text-slate-500 py-3">75 min</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="py-3 pr-4"><a href="/words-to-pages/20000-words" className="text-emerald-400 font-bold hover:underline">20 000 words</a></td>
                    <td className="text-slate-300 py-3 pr-4">40.0 pages</td>
                    <td className="text-white font-medium py-3 pr-4">80.0 pages</td>
                    <td className="text-slate-500 py-3">100 min</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="py-3 pr-4"><a href="/words-to-pages/25000-words" className="text-emerald-400 font-bold hover:underline">25 000 words</a></td>
                    <td className="text-slate-300 py-3 pr-4">50.0 pages</td>
                    <td className="text-white font-medium py-3 pr-4">100.0 pages</td>
                    <td className="text-slate-500 py-3">125 min</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <AdUnit slot="3763639977" />


          <AdUnit slot="3248634657" />

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Browse by Word Count</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              <a href="/words-to-pages/250-words" className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 text-center hover:border-emerald-500/30 transition-all hover:-translate-y-1">
                <div className="text-xl font-bold text-emerald-400">250</div>
                <div className="text-slate-500 text-xs mt-1">1.0 pages (2x)</div>
              </a>
              <a href="/words-to-pages/300-words" className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 text-center hover:border-emerald-500/30 transition-all hover:-translate-y-1">
                <div className="text-xl font-bold text-emerald-400">300</div>
                <div className="text-slate-500 text-xs mt-1">1.2 pages (2x)</div>
              </a>
              <a href="/words-to-pages/500-words" className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 text-center hover:border-emerald-500/30 transition-all hover:-translate-y-1">
                <div className="text-xl font-bold text-emerald-400">500</div>
                <div className="text-slate-500 text-xs mt-1">2.0 pages (2x)</div>
              </a>
              <a href="/words-to-pages/600-words" className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 text-center hover:border-emerald-500/30 transition-all hover:-translate-y-1">
                <div className="text-xl font-bold text-emerald-400">600</div>
                <div className="text-slate-500 text-xs mt-1">2.4 pages (2x)</div>
              </a>
              <a href="/words-to-pages/750-words" className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 text-center hover:border-emerald-500/30 transition-all hover:-translate-y-1">
                <div className="text-xl font-bold text-emerald-400">750</div>
                <div className="text-slate-500 text-xs mt-1">3.0 pages (2x)</div>
              </a>
              <a href="/words-to-pages/800-words" className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 text-center hover:border-emerald-500/30 transition-all hover:-translate-y-1">
                <div className="text-xl font-bold text-emerald-400">800</div>
                <div className="text-slate-500 text-xs mt-1">3.2 pages (2x)</div>
              </a>
              <a href="/words-to-pages/1000-words" className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 text-center hover:border-emerald-500/30 transition-all hover:-translate-y-1">
                <div className="text-xl font-bold text-emerald-400">1 000</div>
                <div className="text-slate-500 text-xs mt-1">4.0 pages (2x)</div>
              </a>
              <a href="/words-to-pages/1200-words" className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 text-center hover:border-emerald-500/30 transition-all hover:-translate-y-1">
                <div className="text-xl font-bold text-emerald-400">1 200</div>
                <div className="text-slate-500 text-xs mt-1">4.8 pages (2x)</div>
              </a>
              <a href="/words-to-pages/1500-words" className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 text-center hover:border-emerald-500/30 transition-all hover:-translate-y-1">
                <div className="text-xl font-bold text-emerald-400">1 500</div>
                <div className="text-slate-500 text-xs mt-1">6.0 pages (2x)</div>
              </a>
              <a href="/words-to-pages/1750-words" className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 text-center hover:border-emerald-500/30 transition-all hover:-translate-y-1">
                <div className="text-xl font-bold text-emerald-400">1 750</div>
                <div className="text-slate-500 text-xs mt-1">7.0 pages (2x)</div>
              </a>
              <a href="/words-to-pages/2000-words" className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 text-center hover:border-emerald-500/30 transition-all hover:-translate-y-1">
                <div className="text-xl font-bold text-emerald-400">2 000</div>
                <div className="text-slate-500 text-xs mt-1">8.0 pages (2x)</div>
              </a>
              <a href="/words-to-pages/2500-words" className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 text-center hover:border-emerald-500/30 transition-all hover:-translate-y-1">
                <div className="text-xl font-bold text-emerald-400">2 500</div>
                <div className="text-slate-500 text-xs mt-1">10.0 pages (2x)</div>
              </a>
              <a href="/words-to-pages/3000-words" className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 text-center hover:border-emerald-500/30 transition-all hover:-translate-y-1">
                <div className="text-xl font-bold text-emerald-400">3 000</div>
                <div className="text-slate-500 text-xs mt-1">12.0 pages (2x)</div>
              </a>
              <a href="/words-to-pages/4000-words" className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 text-center hover:border-emerald-500/30 transition-all hover:-translate-y-1">
                <div className="text-xl font-bold text-emerald-400">4 000</div>
                <div className="text-slate-500 text-xs mt-1">16.0 pages (2x)</div>
              </a>
              <a href="/words-to-pages/5000-words" className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 text-center hover:border-emerald-500/30 transition-all hover:-translate-y-1">
                <div className="text-xl font-bold text-emerald-400">5 000</div>
                <div className="text-slate-500 text-xs mt-1">20.0 pages (2x)</div>
              </a>
              <a href="/words-to-pages/6000-words" className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 text-center hover:border-emerald-500/30 transition-all hover:-translate-y-1">
                <div className="text-xl font-bold text-emerald-400">6 000</div>
                <div className="text-slate-500 text-xs mt-1">24.0 pages (2x)</div>
              </a>
              <a href="/words-to-pages/7500-words" className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 text-center hover:border-emerald-500/30 transition-all hover:-translate-y-1">
                <div className="text-xl font-bold text-emerald-400">7 500</div>
                <div className="text-slate-500 text-xs mt-1">30.0 pages (2x)</div>
              </a>
              <a href="/words-to-pages/8000-words" className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 text-center hover:border-emerald-500/30 transition-all hover:-translate-y-1">
                <div className="text-xl font-bold text-emerald-400">8 000</div>
                <div className="text-slate-500 text-xs mt-1">32.0 pages (2x)</div>
              </a>
              <a href="/words-to-pages/10000-words" className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 text-center hover:border-emerald-500/30 transition-all hover:-translate-y-1">
                <div className="text-xl font-bold text-emerald-400">10 000</div>
                <div className="text-slate-500 text-xs mt-1">40.0 pages (2x)</div>
              </a>
              <a href="/words-to-pages/15000-words" className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 text-center hover:border-emerald-500/30 transition-all hover:-translate-y-1">
                <div className="text-xl font-bold text-emerald-400">15 000</div>
                <div className="text-slate-500 text-xs mt-1">60.0 pages (2x)</div>
              </a>
              <a href="/words-to-pages/20000-words" className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 text-center hover:border-emerald-500/30 transition-all hover:-translate-y-1">
                <div className="text-xl font-bold text-emerald-400">20 000</div>
                <div className="text-slate-500 text-xs mt-1">80.0 pages (2x)</div>
              </a>
              <a href="/words-to-pages/25000-words" className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 text-center hover:border-emerald-500/30 transition-all hover:-translate-y-1">
                <div className="text-xl font-bold text-emerald-400">25 000</div>
                <div className="text-slate-500 text-xs mt-1">100.0 pages (2x)</div>
              </a>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Words Per Page by Font</h2>
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 overflow-x-auto">
              <table className="w-full text-sm">
                <thead><tr className="border-b" style={{borderColor:'rgba(52,211,153,0.2)'}}>
                  <th className="text-left text-emerald-400 py-3 pr-4 font-semibold text-xs uppercase">Font (12pt)</th>
                  <th className="text-left text-emerald-400 py-3 pr-4 font-semibold text-xs uppercase">Single Spaced</th>
                  <th className="text-left text-emerald-400 py-3 font-semibold text-xs uppercase">Double Spaced</th>
                </tr></thead>
                <tbody>
                  {[['Times New Roman','500','250'],['Arial','450','225'],['Calibri','450','225'],['Courier New','275','137'],['Georgia','420','210'],['Garamond','550','275'],['Verdana','380','190']].map((r, i) => (
                    <tr key={i} className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                      <td className="text-white font-medium py-3 pr-4">{r[0]}</td>
                      <td className="text-slate-300 py-3 pr-4">{r[1]} words</td>
                      <td className="text-slate-300 py-3">{r[2]} words</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <div className="bg-gradient-to-r from-emerald-900/30 to-teal-900/20 border border-emerald-500/30 rounded-2xl p-6 mb-10 text-center">
            <p className="text-white font-semibold text-lg mb-2">Count Your Words Free</p>
            <p className="text-slate-400 text-sm mb-4">Paste your text and get instant word count, page estimate, and reading time</p>
            <a href="/word-counter" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-8 py-3 rounded-xl transition-colors">Open Word Counter</a>
          </div>

          <AdUnit slot="3763639977" />

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6">
              {faqs.map((faq, i) => (
                <div key={i} className={i < faqs.length - 1 ? "border-b pb-4 mb-4" : "pb-2"} style={{borderColor:'rgba(52,211,153,0.08)'}}>
                  <h3 className="text-white font-semibold mb-2 text-sm">{faq.q}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          <AdUnit slot="3248634657" />


          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Related Tools</h2>
            <div className="flex flex-wrap gap-2">
              <a href="/word-counter" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Word Counter</a>
              <a href="/words-per-page" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Words Per Page Calculator</a>
              <a href="/reading-time" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Reading Time</a>
              <a href="/character-counter" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Character Counter</a>
            </div>
          </section>
        </div>
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.wordcountertool.net"},{"@type":"ListItem","position":2,"name":"Words to Pages","item":"https://www.wordcountertool.net/words-to-pages"}]})}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebApplication","name":"Words to Pages Converter","applicationCategory":"UtilityApplication","operatingSystem":"Web","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"}})}} />
      <Footer />
    </>
  )
}
