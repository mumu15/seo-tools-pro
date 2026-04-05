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
      
        {/* === BEEFED-UP CONTENT: 1500+ words === */}
        <div className="max-w-4xl mx-auto mt-16 px-4 space-y-12">

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{color:'#f1f5f9'}}>Understanding Page Counts in 2026</h2>
            <p className="leading-relaxed mb-3" style={{color:'#94a3b8'}}>The "250 words per page" rule has been the standard since typewriters. It still holds — but only under specific conditions: 12-point Times New Roman, double-spaced, with 1-inch margins on US Letter paper. Change any one of those variables and the count shifts, sometimes dramatically.</p>
            <p className="leading-relaxed mb-3" style={{color:'#94a3b8'}}>Garamond fits roughly 275 words per double-spaced page. Verdana squeezes in about 190. Courier New, the monospaced font still required by some screenwriting and legal submissions, manages only 137 words per double-spaced page. If your professor says "5 pages" and you use Courier, you are writing 685 words. If you use Garamond, you need 1,375. Same page count, double the work.</p>
            <p className="leading-relaxed" style={{color:'#94a3b8'}}>This is why most academic institutions have moved toward word count requirements instead of page count requirements. Word counts remove the font variable entirely. The Common App essay is "250-650 words," not "1-2 pages." Graduate programs specify "10,000-15,000 words," not "40-60 pages." If you are given a page count, always ask which font and spacing are expected.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{color:'#f1f5f9'}}>Why Formatting Choices Change Your Page Count</h2>
            <p className="leading-relaxed mb-3" style={{color:'#94a3b8'}}>Four factors determine how many words fit on a page. Font type is the biggest. Serif fonts like Times New Roman and Garamond have compact letter shapes that pack more text per line. Sans-serif fonts like Arial and Verdana have wider letter spacing and take up more room.</p>
            <p className="leading-relaxed mb-3" style={{color:'#94a3b8'}}>Font size is the second factor. The standard is 12 point for most academic and business writing. Dropping to 11 point adds roughly 10-15% more words per page. Going up to 14 point — sometimes used in presentations or children's books — cuts your words per page by about 25%.</p>
            <p className="leading-relaxed mb-3" style={{color:'#94a3b8'}}>Line spacing is third. Double spacing is standard for academic papers because it leaves room for handwritten comments from professors. Single spacing doubles your words per page. 1.5 spacing, common in many European universities, lands somewhere in between at roughly 375 words per page with Times New Roman.</p>
            <p className="leading-relaxed" style={{color:'#94a3b8'}}>Margins are the fourth factor. Standard is 1 inch on all sides. Some students try adjusting to 0.9 inches to fit more text — most professors notice. APA format specifically requires 1-inch margins. MLA is the same. If you are using a non-standard format, the words-per-page calculation changes.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{color:'#f1f5f9'}}>Words Per Page by Format: Complete Breakdown</h2>
            <div className="overflow-x-auto rounded-xl" style={{border:'1px solid rgba(255,255,255,0.08)'}}>
              <table className="w-full text-sm">
                <thead>
                  <tr style={{background:'rgba(16,185,129,0.06)'}}>
                    <th className="text-left py-3 px-4 font-semibold" style={{color:'#34d399'}}>Format</th>
                    <th className="text-left py-3 px-4 font-semibold" style={{color:'#34d399'}}>Single Spaced</th>
                    <th className="text-left py-3 px-4 font-semibold" style={{color:'#34d399'}}>1.5 Spaced</th>
                    <th className="text-left py-3 px-4 font-semibold" style={{color:'#34d399'}}>Double Spaced</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Times New Roman 12pt','500','375','250'],
                    ['Arial 12pt','450','338','225'],
                    ['Calibri 11pt','475','356','238'],
                    ['Garamond 12pt','550','413','275'],
                    ['Georgia 12pt','420','315','210'],
                    ['Verdana 12pt','380','285','190'],
                    ['Courier New 12pt','275','206','137'],
                    ['Tahoma 12pt','400','300','200'],
                    ['Palatino 12pt','470','353','235'],
                    ['Handwritten (average)','175','N/A','N/A'],
                  ].map(([font, single, one5, double], i) => (
                    <tr key={i} style={{borderBottom:'1px solid rgba(255,255,255,0.04)'}}>
                      <td className="py-2.5 px-4 font-medium" style={{color:'#f1f5f9'}}>{font}</td>
                      <td className="py-2.5 px-4" style={{color:'#94a3b8'}}>{single}</td>
                      <td className="py-2.5 px-4" style={{color:'#94a3b8'}}>{one5}</td>
                      <td className="py-2.5 px-4" style={{color:'#94a3b8'}}>{double}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs mt-2" style={{color:'#64748b'}}>All figures assume US Letter paper (8.5 x 11 inches) with 1-inch margins.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{color:'#f1f5f9'}}>Common Page Count Questions by Document Type</h2>
            <p className="leading-relaxed mb-3" style={{color:'#94a3b8'}}>Students ask "how many pages is 1,000 words" more than almost any other writing question. The answer depends on formatting, but the quick version: 4 pages double-spaced, 2 pages single-spaced. That covers a standard college assignment.</p>
            <p className="leading-relaxed mb-3" style={{color:'#94a3b8'}}>For a 5-page essay (double-spaced), you need roughly 1,250 words. A 10-page paper is about 2,500. A 20-page research paper is 5,000 words. These are the assignments that make up most undergraduate coursework, and the word-to-page ratio stays remarkably consistent as long as you stick to standard formatting.</p>
            <p className="leading-relaxed mb-3" style={{color:'#94a3b8'}}>Longer documents get trickier. A master's thesis at 20,000 words is about 80 double-spaced pages, but with a title page, abstract, table of contents, bibliography, and appendices, the final document might run 100-110 pages. A novel at 80,000 words is roughly 320 double-spaced manuscript pages, but a printed paperback has different margins and smaller font, so it comes out to about 280-320 printed pages depending on the publisher.</p>
            <p className="leading-relaxed" style={{color:'#94a3b8'}}>Blog posts and web content do not really have "pages" in the traditional sense. A 1,500-word blog post fills about 6 double-spaced manuscript pages but displays as a single scrollable webpage. For web content, reading time is a more useful metric than page count. At the average reading speed of 238 words per minute, a 1,500-word article takes about 6 minutes to read.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{color:'#f1f5f9'}}>Page Count by Academic Style Guide</h2>
            <p className="leading-relaxed mb-3" style={{color:'#94a3b8'}}>Different style guides have slightly different formatting rules, which affects words per page. APA (7th edition) requires 12-point Times New Roman or 11-point Calibri, double-spaced, with 1-inch margins. This gives you roughly 250 words per page with Times New Roman or 238 with Calibri.</p>
            <p className="leading-relaxed mb-3" style={{color:'#94a3b8'}}>MLA format uses 12-point Times New Roman, double-spaced, 1-inch margins — almost identical to APA in terms of words per page. The main difference is the header: MLA uses a running header with your last name and page number, while APA has a shortened title.</p>
            <p className="leading-relaxed mb-3" style={{color:'#94a3b8'}}>Chicago style is more flexible. It allows multiple fonts and does not mandate a specific size, though 12-point is standard. Footnotes in Chicago style can add significant length to a paper without adding to the word count, which is why a 5,000-word Chicago paper might run longer than an APA paper with the same word count.</p>
            <p className="leading-relaxed" style={{color:'#94a3b8'}}>If you are writing for a specific class or publication, the style guide determines everything. When in doubt, use 12-point Times New Roman, double-spaced, 1-inch margins. That is the default that every professor, editor, and submission system expects.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{color:'#f1f5f9'}}>Digital vs. Print: Why Page Counts Are Fading</h2>
            <p className="leading-relaxed mb-3" style={{color:'#94a3b8'}}>The shift from page counts to word counts is accelerating. Google Docs, the platform most students now use, defaults to word count in its toolbar (Ctrl+Shift+C). Microsoft Word shows word count in the status bar. Both make it easy to track words in real time. Page count is just a byproduct of formatting.</p>
            <p className="leading-relaxed mb-3" style={{color:'#94a3b8'}}>Most online submission portals — university systems, journal submission tools, grant application forms — now specify word count limits rather than page limits. The Common App uses a word counter built into its text field. UCAS personal statements use a character limit (4,000 characters). Graduate school applications specify word ranges.</p>
            <p className="leading-relaxed mb-3" style={{color:'#94a3b8'}}>Even book publishing has shifted. Literary agents request word count in query letters, not page count. Publisher submission guidelines list word count ranges by genre. A literary agent shared on X recently that middle-grade fiction should be 30,000-60,000 words, YA 50,000-80,000, and adult fiction 70,000-120,000. No mention of pages.</p>
            <p className="leading-relaxed" style={{color:'#94a3b8'}}>That said, page counts still matter in specific contexts. Legal briefs often have strict page limits. Screenplays use a one-page-per-minute rule (in Courier New, which gives roughly 250 words per page). Academic conference presentations are often structured as "a 10-page paper," meaning about 2,500 words double-spaced. If you are given a page limit, the converter table above is your quickest way to figure out the word count target.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{color:'#f1f5f9'}}>Tips for Hitting Your Target Length</h2>
            <p className="leading-relaxed mb-3" style={{color:'#94a3b8'}}>If you are under the word count, do not pad with adjectives. Look for gaps in your argument. Ask yourself: "What question would a skeptical reader ask at this point?" Then answer it. That adds substance, not fluff.</p>
            <p className="leading-relaxed mb-3" style={{color:'#94a3b8'}}>If you are over the word count, start by cutting adverbs and filler phrases. "In order to" becomes "to." "Due to the fact that" becomes "because." "It is important to note that" becomes nothing — just state the thing. These mechanical cuts can shave 10-15% without losing any meaning.</p>
            <p className="leading-relaxed" style={{color:'#94a3b8'}}>For the exact word count of any text, paste it into our free word counter. It shows words, characters, sentences, paragraphs, and reading time instantly. No signup, no limits.</p>
          </section>

        </div>

      <Footer />
    </>
  )
}
