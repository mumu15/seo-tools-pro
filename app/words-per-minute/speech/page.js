import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import AdUnit from '../../components/AdUnit'
import FaqSchema from '../../../components/FaqSchema'

export const metadata = {
  title: 'How Many Words in a Speech? Every Duration Calculated | WordCounterTool.net',
  description: 'Find exactly how many words you need for any speech length from 1 to 90 minutes. Word counts for slow, average, and fast speakers. Free speech calculator.',
  alternates: { canonical: 'https://www.wordcountertool.net/words-per-minute/speech' },
}

const faqs = [
  { q: 'How many words per minute in a speech?', a: 'The average speaker delivers 130 words per minute in a prepared speech. Slow, deliberate speakers average 100 wpm. Fast, energetic speakers average 160 wpm. Conversational speaking is typically 120-150 wpm.' },
  { q: 'How do I calculate words needed for my speech?', a: 'Multiply your speaking speed (usually 130 wpm) by the number of minutes. For a 10-minute speech: 130 x 10 = 1,300 words. Then subtract 10-15% for pauses and audience reactions.' },
  { q: 'How can I check my speech word count?', a: 'Paste your speech into our free word counter tool. It instantly shows your word count, estimated speaking time at 130 wpm, and reading time. Practice with a timer to calibrate your personal speaking pace.' },
  { q: 'What is the ideal speech length?', a: 'It depends on the context. Wedding speeches: 3-5 minutes. Business presentations: 10-15 minutes. Conference talks: 15-20 minutes. Lectures: 45-60 minutes. The best speeches are always slightly shorter than the audience expects.' },
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
            <a href="/words-per-minute" className="hover:text-emerald-400 transition-colors">Words Per Minute</a>
            <span className="mx-2">/</span>
            <span className="text-slate-300">Speech Word Count</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">How Many Words in a Speech?</h1>
          <p className="text-slate-400 text-lg mb-8">Find the exact word count for any speech duration from 1 to 90 minutes</p>

          <div className="bg-slate-800/40 border border-emerald-500/20 rounded-2xl p-6 mb-10">
            <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2">Quick Reference</p>
            <p className="text-white text-lg leading-relaxed">The average speaker delivers <strong>130 words per minute</strong>. A 5-minute speech needs ~650 words. A 10-minute speech needs ~1,300 words. A 20-minute speech needs ~2,600 words. See the full table below for every duration.</p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Speech Word Count Table — Every Duration</h2>
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.2)'}}>
                    <th className="text-left text-emerald-400 py-3 pr-4 font-semibold text-xs uppercase">Duration</th>
                    <th className="text-left text-emerald-400 py-3 pr-4 font-semibold text-xs uppercase">Slow (100 wpm)</th>
                    <th className="text-left text-emerald-400 py-3 pr-4 font-semibold text-xs uppercase">Average (130 wpm)</th>
                    <th className="text-left text-emerald-400 py-3 pr-4 font-semibold text-xs uppercase">Fast (160 wpm)</th>
                    <th className="text-left text-emerald-400 py-3 font-semibold text-xs uppercase">Common Use</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="py-3 pr-4"><a href="/words-per-minute/speech/1-minute-speech" className="text-emerald-400 font-bold hover:underline">1 min</a></td>
                    <td className="text-slate-300 py-3 pr-4">100 words</td>
                    <td className="text-white font-medium py-3 pr-4">130 words</td>
                    <td className="text-slate-300 py-3 pr-4">160 words</td>
                    <td className="text-slate-500 py-3 text-xs">Elevator pitch, quick toast</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="py-3 pr-4"><a href="/words-per-minute/speech/2-minute-speech" className="text-emerald-400 font-bold hover:underline">2 min</a></td>
                    <td className="text-slate-300 py-3 pr-4">200 words</td>
                    <td className="text-white font-medium py-3 pr-4">260 words</td>
                    <td className="text-slate-300 py-3 pr-4">320 words</td>
                    <td className="text-slate-500 py-3 text-xs">Short toast, brief intro</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="py-3 pr-4"><a href="/words-per-minute/speech/3-minute-speech" className="text-emerald-400 font-bold hover:underline">3 min</a></td>
                    <td className="text-slate-300 py-3 pr-4">300 words</td>
                    <td className="text-white font-medium py-3 pr-4">390 words</td>
                    <td className="text-slate-300 py-3 pr-4">480 words</td>
                    <td className="text-slate-500 py-3 text-xs">Lightning talk, short toast</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="py-3 pr-4"><a href="/words-per-minute/speech/4-minute-speech" className="text-emerald-400 font-bold hover:underline">4 min</a></td>
                    <td className="text-slate-300 py-3 pr-4">400 words</td>
                    <td className="text-white font-medium py-3 pr-4">520 words</td>
                    <td className="text-slate-300 py-3 pr-4">640 words</td>
                    <td className="text-slate-500 py-3 text-xs">Maid of honor speech</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="py-3 pr-4"><a href="/words-per-minute/speech/5-minute-speech" className="text-emerald-400 font-bold hover:underline">5 min</a></td>
                    <td className="text-slate-300 py-3 pr-4">500 words</td>
                    <td className="text-white font-medium py-3 pr-4">650 words</td>
                    <td className="text-slate-300 py-3 pr-4">800 words</td>
                    <td className="text-slate-500 py-3 text-xs">TED-style talk, wedding speech</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="py-3 pr-4"><a href="/words-per-minute/speech/7-minute-speech" className="text-emerald-400 font-bold hover:underline">7 min</a></td>
                    <td className="text-slate-300 py-3 pr-4">700 words</td>
                    <td className="text-white font-medium py-3 pr-4">910 words</td>
                    <td className="text-slate-300 py-3 pr-4">1 120 words</td>
                    <td className="text-slate-500 py-3 text-xs">Business presentation</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="py-3 pr-4"><a href="/words-per-minute/speech/8-minute-speech" className="text-emerald-400 font-bold hover:underline">8 min</a></td>
                    <td className="text-slate-300 py-3 pr-4">800 words</td>
                    <td className="text-white font-medium py-3 pr-4">1 040 words</td>
                    <td className="text-slate-300 py-3 pr-4">1 280 words</td>
                    <td className="text-slate-500 py-3 text-xs">YouTube video script</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="py-3 pr-4"><a href="/words-per-minute/speech/10-minute-speech" className="text-emerald-400 font-bold hover:underline">10 min</a></td>
                    <td className="text-slate-300 py-3 pr-4">1 000 words</td>
                    <td className="text-white font-medium py-3 pr-4">1 300 words</td>
                    <td className="text-slate-300 py-3 pr-4">1 600 words</td>
                    <td className="text-slate-500 py-3 text-xs">Full TED Talk, pitch</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="py-3 pr-4"><a href="/words-per-minute/speech/12-minute-speech" className="text-emerald-400 font-bold hover:underline">12 min</a></td>
                    <td className="text-slate-300 py-3 pr-4">1 200 words</td>
                    <td className="text-white font-medium py-3 pr-4">1 560 words</td>
                    <td className="text-slate-300 py-3 pr-4">1 920 words</td>
                    <td className="text-slate-500 py-3 text-xs">Conference talk</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="py-3 pr-4"><a href="/words-per-minute/speech/15-minute-speech" className="text-emerald-400 font-bold hover:underline">15 min</a></td>
                    <td className="text-slate-300 py-3 pr-4">1 500 words</td>
                    <td className="text-white font-medium py-3 pr-4">1 950 words</td>
                    <td className="text-slate-300 py-3 pr-4">2 400 words</td>
                    <td className="text-slate-500 py-3 text-xs">Keynote segment</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="py-3 pr-4"><a href="/words-per-minute/speech/20-minute-speech" className="text-emerald-400 font-bold hover:underline">20 min</a></td>
                    <td className="text-slate-300 py-3 pr-4">2 000 words</td>
                    <td className="text-white font-medium py-3 pr-4">2 600 words</td>
                    <td className="text-slate-300 py-3 pr-4">3 200 words</td>
                    <td className="text-slate-500 py-3 text-xs">Full lecture</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="py-3 pr-4"><a href="/words-per-minute/speech/25-minute-speech" className="text-emerald-400 font-bold hover:underline">25 min</a></td>
                    <td className="text-slate-300 py-3 pr-4">2 500 words</td>
                    <td className="text-white font-medium py-3 pr-4">3 250 words</td>
                    <td className="text-slate-300 py-3 pr-4">4 000 words</td>
                    <td className="text-slate-500 py-3 text-xs">University lecture</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="py-3 pr-4"><a href="/words-per-minute/speech/30-minute-speech" className="text-emerald-400 font-bold hover:underline">30 min</a></td>
                    <td className="text-slate-300 py-3 pr-4">3 000 words</td>
                    <td className="text-white font-medium py-3 pr-4">3 900 words</td>
                    <td className="text-slate-300 py-3 pr-4">4 800 words</td>
                    <td className="text-slate-500 py-3 text-xs">Sermon, commencement</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="py-3 pr-4"><a href="/words-per-minute/speech/35-minute-speech" className="text-emerald-400 font-bold hover:underline">35 min</a></td>
                    <td className="text-slate-300 py-3 pr-4">3 500 words</td>
                    <td className="text-white font-medium py-3 pr-4">4 550 words</td>
                    <td className="text-slate-300 py-3 pr-4">5 600 words</td>
                    <td className="text-slate-500 py-3 text-xs">Extended lecture</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="py-3 pr-4"><a href="/words-per-minute/speech/40-minute-speech" className="text-emerald-400 font-bold hover:underline">40 min</a></td>
                    <td className="text-slate-300 py-3 pr-4">4 000 words</td>
                    <td className="text-white font-medium py-3 pr-4">5 200 words</td>
                    <td className="text-slate-300 py-3 pr-4">6 400 words</td>
                    <td className="text-slate-500 py-3 text-xs">Full training session</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="py-3 pr-4"><a href="/words-per-minute/speech/45-minute-speech" className="text-emerald-400 font-bold hover:underline">45 min</a></td>
                    <td className="text-slate-300 py-3 pr-4">4 500 words</td>
                    <td className="text-white font-medium py-3 pr-4">5 850 words</td>
                    <td className="text-slate-300 py-3 pr-4">7 200 words</td>
                    <td className="text-slate-500 py-3 text-xs">Full class lecture</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="py-3 pr-4"><a href="/words-per-minute/speech/50-minute-speech" className="text-emerald-400 font-bold hover:underline">50 min</a></td>
                    <td className="text-slate-300 py-3 pr-4">5 000 words</td>
                    <td className="text-white font-medium py-3 pr-4">6 500 words</td>
                    <td className="text-slate-300 py-3 pr-4">8 000 words</td>
                    <td className="text-slate-500 py-3 text-xs">Detailed lecture</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="py-3 pr-4"><a href="/words-per-minute/speech/60-minute-speech" className="text-emerald-400 font-bold hover:underline">60 min</a></td>
                    <td className="text-slate-300 py-3 pr-4">6 000 words</td>
                    <td className="text-white font-medium py-3 pr-4">7 800 words</td>
                    <td className="text-slate-300 py-3 pr-4">9 600 words</td>
                    <td className="text-slate-500 py-3 text-xs">Full hour lecture</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="py-3 pr-4"><a href="/words-per-minute/speech/75-minute-speech" className="text-emerald-400 font-bold hover:underline">75 min</a></td>
                    <td className="text-slate-300 py-3 pr-4">7 500 words</td>
                    <td className="text-white font-medium py-3 pr-4">9 750 words</td>
                    <td className="text-slate-300 py-3 pr-4">12 000 words</td>
                    <td className="text-slate-500 py-3 text-xs">Masterclass</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="py-3 pr-4"><a href="/words-per-minute/speech/90-minute-speech" className="text-emerald-400 font-bold hover:underline">90 min</a></td>
                    <td className="text-slate-300 py-3 pr-4">9 000 words</td>
                    <td className="text-white font-medium py-3 pr-4">11 700 words</td>
                    <td className="text-slate-300 py-3 pr-4">14 400 words</td>
                    <td className="text-slate-500 py-3 text-xs">Full seminar</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <AdUnit slot="3763639977" />


          <AdUnit slot="3248634657" />

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">How Speaking Speed Affects Word Count</h2>
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6">
              <p className="text-slate-300 text-sm leading-relaxed mb-4"><strong className="text-white">Slow speakers (100 wpm):</strong> Deliberate, measured pace. Common for formal speeches, eulogies, and ceremonial addresses. Allows for dramatic pauses and emphasis. Best for emotional or complex content where every word needs to land.</p>
              <p className="text-slate-300 text-sm leading-relaxed mb-4"><strong className="text-white">Average speakers (130 wpm):</strong> The most common pace for prepared speeches, presentations, and lectures. This is the standard rate used by most public speaking coaches and the default for speech-to-text calculations.</p>
              <p className="text-slate-300 text-sm leading-relaxed mb-4"><strong className="text-white">Fast speakers (160 wpm):</strong> Energetic, dynamic pace. Common for motivational speakers, auctioneers, and excited presenters. Works well for entertainment content but can be overwhelming for technical or educational material.</p>
              <p className="text-slate-300 text-sm leading-relaxed"><strong className="text-white">Pro tip:</strong> Most people speak 10-20% faster when nervous. If your speech times perfectly in practice, it will likely run short on stage. Write 10% more content than needed, then cut the weakest section if you run long during practice.</p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Speech Length by Occasion</h2>
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 overflow-x-auto">
              <table className="w-full text-sm">
                <thead><tr className="border-b" style={{borderColor:'rgba(52,211,153,0.2)'}}><th className="text-left text-emerald-400 py-3 pr-4 font-semibold text-xs uppercase">Occasion</th><th className="text-left text-emerald-400 py-3 pr-4 font-semibold text-xs uppercase">Ideal Duration</th><th className="text-left text-emerald-400 py-3 font-semibold text-xs uppercase">Word Count</th></tr></thead>
                <tbody>
                  {[['Wedding toast','1-2 minutes','130-260 words'],['Best man / maid of honor','4-6 minutes','520-780 words'],['Elevator pitch','30-60 seconds','65-130 words'],['TED Talk','5-18 minutes','650-2,340 words'],['Business pitch','10-15 minutes','1,300-1,950 words'],['Conference presentation','20-30 minutes','2,600-3,900 words'],['University lecture','45-60 minutes','5,850-7,800 words'],['Keynote address','30-45 minutes','3,900-5,850 words'],['Eulogy','5-10 minutes','650-1,300 words'],['Valedictorian speech','5-7 minutes','650-910 words']].map((r, i) => (
                    <tr key={i} className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                      <td className="text-white font-medium py-3 pr-4">{r[0]}</td>
                      <td className="text-slate-300 py-3 pr-4">{r[1]}</td>
                      <td className="text-slate-300 py-3">{r[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <div className="bg-gradient-to-r from-emerald-900/30 to-teal-900/20 border border-emerald-500/30 rounded-2xl p-6 mb-10 text-center">
            <p className="text-white font-semibold text-lg mb-2">Check Your Speech Word Count</p>
            <p className="text-slate-400 text-sm mb-4">Paste your speech and get instant word count, speaking time, and reading time</p>
            <a href="/word-counter" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-8 py-3 rounded-xl transition-colors">Open Word Counter</a>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Browse by Duration</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              <a href="/words-per-minute/speech/1-minute-speech" className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 text-center hover:border-emerald-500/30 transition-all hover:-translate-y-1">
                <div className="text-2xl font-bold text-emerald-400">1 min</div>
                <div className="text-slate-500 text-xs mt-1">130 words</div>
              </a>
              <a href="/words-per-minute/speech/2-minute-speech" className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 text-center hover:border-emerald-500/30 transition-all hover:-translate-y-1">
                <div className="text-2xl font-bold text-emerald-400">2 min</div>
                <div className="text-slate-500 text-xs mt-1">260 words</div>
              </a>
              <a href="/words-per-minute/speech/3-minute-speech" className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 text-center hover:border-emerald-500/30 transition-all hover:-translate-y-1">
                <div className="text-2xl font-bold text-emerald-400">3 min</div>
                <div className="text-slate-500 text-xs mt-1">390 words</div>
              </a>
              <a href="/words-per-minute/speech/4-minute-speech" className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 text-center hover:border-emerald-500/30 transition-all hover:-translate-y-1">
                <div className="text-2xl font-bold text-emerald-400">4 min</div>
                <div className="text-slate-500 text-xs mt-1">520 words</div>
              </a>
              <a href="/words-per-minute/speech/5-minute-speech" className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 text-center hover:border-emerald-500/30 transition-all hover:-translate-y-1">
                <div className="text-2xl font-bold text-emerald-400">5 min</div>
                <div className="text-slate-500 text-xs mt-1">650 words</div>
              </a>
              <a href="/words-per-minute/speech/7-minute-speech" className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 text-center hover:border-emerald-500/30 transition-all hover:-translate-y-1">
                <div className="text-2xl font-bold text-emerald-400">7 min</div>
                <div className="text-slate-500 text-xs mt-1">910 words</div>
              </a>
              <a href="/words-per-minute/speech/8-minute-speech" className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 text-center hover:border-emerald-500/30 transition-all hover:-translate-y-1">
                <div className="text-2xl font-bold text-emerald-400">8 min</div>
                <div className="text-slate-500 text-xs mt-1">1 040 words</div>
              </a>
              <a href="/words-per-minute/speech/10-minute-speech" className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 text-center hover:border-emerald-500/30 transition-all hover:-translate-y-1">
                <div className="text-2xl font-bold text-emerald-400">10 min</div>
                <div className="text-slate-500 text-xs mt-1">1 300 words</div>
              </a>
              <a href="/words-per-minute/speech/12-minute-speech" className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 text-center hover:border-emerald-500/30 transition-all hover:-translate-y-1">
                <div className="text-2xl font-bold text-emerald-400">12 min</div>
                <div className="text-slate-500 text-xs mt-1">1 560 words</div>
              </a>
              <a href="/words-per-minute/speech/15-minute-speech" className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 text-center hover:border-emerald-500/30 transition-all hover:-translate-y-1">
                <div className="text-2xl font-bold text-emerald-400">15 min</div>
                <div className="text-slate-500 text-xs mt-1">1 950 words</div>
              </a>
              <a href="/words-per-minute/speech/20-minute-speech" className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 text-center hover:border-emerald-500/30 transition-all hover:-translate-y-1">
                <div className="text-2xl font-bold text-emerald-400">20 min</div>
                <div className="text-slate-500 text-xs mt-1">2 600 words</div>
              </a>
              <a href="/words-per-minute/speech/25-minute-speech" className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 text-center hover:border-emerald-500/30 transition-all hover:-translate-y-1">
                <div className="text-2xl font-bold text-emerald-400">25 min</div>
                <div className="text-slate-500 text-xs mt-1">3 250 words</div>
              </a>
              <a href="/words-per-minute/speech/30-minute-speech" className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 text-center hover:border-emerald-500/30 transition-all hover:-translate-y-1">
                <div className="text-2xl font-bold text-emerald-400">30 min</div>
                <div className="text-slate-500 text-xs mt-1">3 900 words</div>
              </a>
              <a href="/words-per-minute/speech/35-minute-speech" className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 text-center hover:border-emerald-500/30 transition-all hover:-translate-y-1">
                <div className="text-2xl font-bold text-emerald-400">35 min</div>
                <div className="text-slate-500 text-xs mt-1">4 550 words</div>
              </a>
              <a href="/words-per-minute/speech/40-minute-speech" className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 text-center hover:border-emerald-500/30 transition-all hover:-translate-y-1">
                <div className="text-2xl font-bold text-emerald-400">40 min</div>
                <div className="text-slate-500 text-xs mt-1">5 200 words</div>
              </a>
              <a href="/words-per-minute/speech/45-minute-speech" className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 text-center hover:border-emerald-500/30 transition-all hover:-translate-y-1">
                <div className="text-2xl font-bold text-emerald-400">45 min</div>
                <div className="text-slate-500 text-xs mt-1">5 850 words</div>
              </a>
              <a href="/words-per-minute/speech/50-minute-speech" className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 text-center hover:border-emerald-500/30 transition-all hover:-translate-y-1">
                <div className="text-2xl font-bold text-emerald-400">50 min</div>
                <div className="text-slate-500 text-xs mt-1">6 500 words</div>
              </a>
              <a href="/words-per-minute/speech/60-minute-speech" className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 text-center hover:border-emerald-500/30 transition-all hover:-translate-y-1">
                <div className="text-2xl font-bold text-emerald-400">60 min</div>
                <div className="text-slate-500 text-xs mt-1">7 800 words</div>
              </a>
              <a href="/words-per-minute/speech/75-minute-speech" className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 text-center hover:border-emerald-500/30 transition-all hover:-translate-y-1">
                <div className="text-2xl font-bold text-emerald-400">75 min</div>
                <div className="text-slate-500 text-xs mt-1">9 750 words</div>
              </a>
              <a href="/words-per-minute/speech/90-minute-speech" className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 text-center hover:border-emerald-500/30 transition-all hover:-translate-y-1">
                <div className="text-2xl font-bold text-emerald-400">90 min</div>
                <div className="text-slate-500 text-xs mt-1">11 700 words</div>
              </a>
            </div>
          </section>

          <AdUnit slot="3248634657" />


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

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Related Tools</h2>
            <div className="flex flex-wrap gap-2">
              <a href="/word-counter" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Word Counter</a>
              <a href="/words-per-minute" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Words Per Minute</a>
              <a href="/reading-time" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Reading Time</a>
              <a href="/word-count/for/speech" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Speech Word Count Guide</a>
              <a href="/blog/how-many-words-in-a-speech" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Speech Writing Guide</a>
            </div>
          </section>
        </div>
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.wordcountertool.net"},{"@type":"ListItem","position":2,"name":"Words Per Minute","item":"https://www.wordcountertool.net/words-per-minute"},{"@type":"ListItem","position":3,"name":"Speech Word Count","item":"https://www.wordcountertool.net/words-per-minute/speech"}]})}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebApplication","name":"Speech Word Count Calculator","applicationCategory":"UtilityApplication","operatingSystem":"Web","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"}})}} />
      <Footer />
    </>
  )
}
