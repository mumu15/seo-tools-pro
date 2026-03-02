'use client'
import { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FaqSchema from '../../components/FaqSchema'
import AdUnit from '../../components/AdUnit'
import BreadcrumbSchema from '../../components/BreadcrumbSchema'
import WebAppSchema from '../../components/WebAppSchema'

const faqs = [
  { q: 'What is the average reading speed?', a: 'The average adult reads 200-250 words per minute for general content. Slow readers read around 150 WPM, fast readers around 300 WPM.' },
  { q: 'How long does it take to read 1000 words?', a: 'At average reading speed of 200 WPM it takes about 5 minutes to read 1000 words. A slow reader takes about 7 minutes and a fast reader about 3-4 minutes.' },
  { q: 'How long does it take to read 500 words?', a: 'At average reading speed it takes about 2-3 minutes to read 500 words.' },
  { q: 'What is average speaking speed?', a: 'The average speaking speed is 130 words per minute for presentations and speeches. Conversational speech is around 150 WPM.' },
  { q: 'How do I increase my reading speed?', a: 'To increase reading speed avoid subvocalizing (saying words in your head), use a pointer to guide your eyes, practice reading in chunks rather than word by word and minimize backtracking.' },
]

const SPEEDS = [
  { label: 'Slow Reader', wpm: 150, icon: '🐢', color: 'text-blue-400' },
  { label: 'Average Reader', wpm: 200, icon: '🚶', color: 'text-emerald-400' },
  { label: 'Fast Reader', wpm: 300, icon: '🏃', color: 'text-yellow-400' },
]

export default function ReadingTime() {
  const [text, setText] = useState('')
  const [activeSpeed, setActiveSpeed] = useState(1)

  const words = text.trim() === '' ? 0 : text.trim().split(/\s+/).length
  const wpm = SPEEDS[activeSpeed].wpm
  const readMins = words === 0 ? 0 : Math.ceil(words / wpm)
  const speakMins = words === 0 ? 0 : Math.ceil(words / 130)
  const readSecs = words === 0 ? 0 : Math.round((words / wpm) * 60)
  const speakSecs = words === 0 ? 0 : Math.round((words / 130) * 60)

  const formatTime = (secs) => {
    if (secs < 60) return secs + ' seconds'
    const m = Math.floor(secs / 60)
    const s = secs % 60
    return s > 0 ? `${m} min ${s} sec` : `${m} min`
  }

  return (
    <>
      <FaqSchema faqs={faqs} />
      <BreadcrumbSchema items={[{"name":"Home","url":"https://www.wordcountertool.net"},{"name":"Reading Time Calculator","url":"https://www.wordcountertool.net/reading-time"}]} />
      <WebAppSchema name="Reading Time Calculator" description="Calculate how long it takes to read any text based on reading speed. Free reading time estimator." url="https://www.wordcountertool.net/reading-time" />
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Reading Time Calculator</h1>
          <p className="text-slate-400 text-lg">Calculate how long it takes to read any text — adjust for slow, average or fast readers</p>
        </div>

        {/* Speed Selector */}
        <div className="flex gap-3 mb-6 justify-center">
          {SPEEDS.map((speed, i) => (
            <button key={i} onClick={() => setActiveSpeed(i)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all"
              style={{
                background: activeSpeed === i ? 'rgba(52,211,153,0.15)' : 'rgba(255,255,255,0.03)',
                border: activeSpeed === i ? '1px solid rgba(52,211,153,0.4)' : '1px solid rgba(255,255,255,0.08)',
                color: activeSpeed === i ? '#34d399' : '#64748b'
              }}>
              <span>{speed.icon}</span>
              <span>{speed.label}</span>
              <span className="text-xs opacity-60">{speed.wpm} WPM</span>
            </button>
          ))}
        </div>

        <textarea
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Paste your article, blog post or any text here..."
          className="w-full h-48 px-4 py-3 rounded-xl text-white text-sm outline-none resize-none mb-6 leading-relaxed"
          style={{background:'rgba(255,255,255,0.03)',border:'1px solid rgba(52,211,153,0.15)',boxShadow: text.length > 0 ? '0 0 0 2px rgba(52,211,153,0.15)' : 'none',transition:'box-shadow 0.3s ease'}}
        />

        {/* Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="result-box text-center py-8">
            <div className="text-5xl mb-3">📖</div>
            <div className="text-slate-400 text-sm mb-2">Reading Time ({SPEEDS[activeSpeed].label})</div>
            <div className="text-4xl font-display font-bold text-emerald-400 mb-1">{formatTime(readSecs)}</div>
            <div className="text-slate-500 text-xs">at {wpm} words per minute</div>
          </div>
          <div className="result-box text-center py-8">
            <div className="text-5xl mb-3">🎤</div>
            <div className="text-slate-400 text-sm mb-2">Speaking Time</div>
            <div className="text-4xl font-display font-bold text-yellow-400 mb-1">{formatTime(speakSecs)}</div>
            <div className="text-slate-500 text-xs">at 130 words per minute</div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {[
            { label: 'Word Count', value: words, color: 'text-emerald-400' },
            { label: 'Reading WPM', value: wpm, color: 'text-blue-400' },
            { label: 'Read Time', value: readMins + ' min', color: 'text-purple-400' },
            { label: 'Speak Time', value: speakMins + ' min', color: 'text-yellow-400' },
          ].map((stat, i) => (
            <div key={i} className="stat-card">
              <div className={`text-2xl font-display font-bold ${stat.color}`}>{stat.value}</div>
              <div className="text-slate-500 text-xs mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Reading Speed Reference */}
        <div className="result-box mb-6">
          <h3 className="text-white font-bold mb-4">Reading Time Reference</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead><tr className="border-b" style={{borderColor:'rgba(52,211,153,0.1)'}}><th className="text-left text-slate-400 py-2 pr-4">Word Count</th><th className="text-left text-slate-400 py-2 pr-4">Slow (150 WPM)</th><th className="text-left text-slate-400 py-2 pr-4">Average (200 WPM)</th><th className="text-left py-2 text-emerald-400">Fast (300 WPM)</th></tr></thead>
              <tbody>
                {[['500 words','3 min 20 sec','2 min 30 sec','1 min 40 sec'],['1,000 words','6 min 40 sec','5 min','3 min 20 sec'],['1,500 words','10 min','7 min 30 sec','5 min'],['2,000 words','13 min 20 sec','10 min','6 min 40 sec'],['5,000 words','33 min','25 min','16 min 40 sec']].map((r,i) => (
                  <tr key={i} className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}><td className="text-white py-2 pr-4">{r[0]}</td><td className="text-slate-400 py-2 pr-4">{r[1]}</td><td className="text-slate-400 py-2 pr-4">{r[2]}</td><td className="text-emerald-400 py-2">{r[3]}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <AdUnit slot="3763639977" />

        {/* Internal Link */}
        <div className="mt-4 p-4 rounded-xl border border-emerald-500/20" style={{background:'rgba(52,211,153,0.05)'}}>
          <p className="text-slate-400 text-sm mb-2">📖 Related Guide</p>
          <a href="/blog/average-reading-speed" className="text-emerald-400 font-semibold hover:underline">Average Reading Speed: How Fast Do People Read? (2026)</a>
        </div>

        {/* Related Tools */}
        <div className="mt-12">
          <h2 className="text-2xl font-display font-bold text-white mb-6">You Might Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {href:'/word-counter',icon:'📝',name:'Word Counter',desc:'Count words and characters instantly'},
              {href:'/words-per-minute',icon:'⌨️',name:'WPM Test',desc:'Test your typing speed in WPM'},
              {href:'/words-per-page',icon:'📄',name:'Words Per Page',desc:'Convert word count to pages'},
              {href:'/readability-checker',icon:'📖',name:'Readability Checker',desc:'Check your readability score'},
            ].map((tool,i) => (
              <a key={i} href={tool.href} className="result-box group hover:-translate-y-1 transition-all duration-300 hover:border-emerald-500/30">
                <div className="text-3xl mb-3">{tool.icon}</div>
                <h3 className="text-white font-bold text-sm mb-1 group-hover:text-emerald-400 transition-colors">{tool.name}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{tool.desc}</p>
              </a>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-12">
          <h2 className="text-2xl font-display font-bold text-white mb-6">Frequently Asked Questions</h2>
          <div className="result-box">
            <div className="space-y-4 text-sm">
              {faqs.map((faq, i) => (
                <div key={i} className={i < faqs.length - 1 ? "border-b pb-4" : "pb-4"} style={{borderColor:"rgba(52,211,153,0.1)"}}>
                  <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
                  <p className="text-slate-400">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
