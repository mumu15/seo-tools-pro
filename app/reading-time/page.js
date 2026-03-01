'use client'
import { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FaqSchema from '../../components/FaqSchema'
import BreadcrumbSchema from '../../components/BreadcrumbSchema'
import WebAppSchema from '../../components/WebAppSchema'

const faqs = [
  { q: 'How is reading time calculated?', a: 'Reading time is calculated based on the average adult reading speed of 200-250 words per minute. Our calculator lets you adjust the reading speed to match your audience.' },
  { q: 'What is the average reading speed?', a: 'The average adult reads 200-250 words per minute for normal text. Speed readers can read 400-700 words per minute. Children and slower readers may read 100-150 words per minute.' },
  { q: 'How long does it take to read 1000 words?', a: 'At an average reading speed of 200 words per minute, 1000 words takes approximately 5 minutes to read. At 250 words per minute it takes 4 minutes.' },
  { q: 'How long does it take to read 2000 words?', a: 'At an average reading speed of 200 words per minute, 2000 words takes approximately 10 minutes to read.' },
  { q: 'Why does reading time matter for blogs?', a: 'Displaying reading time on blog posts helps readers decide whether to read now or save for later. Posts with reading times listed typically see higher engagement and lower bounce rates.' },
]

const SPEEDS = [
  { label: 'Slow (150 wpm)', value: 150 },
  { label: 'Average (200 wpm)', value: 200 },
  { label: 'Fast (250 wpm)', value: 250 },
  { label: 'Speed Reader (400 wpm)', value: 400 },
]

export default function ReadingTime() {
  const [text, setText] = useState('')
  const [wordCount, setWordCount] = useState('')
  const [speed, setSpeed] = useState(200)
  const [mode, setMode] = useState('text')

  const words = mode === 'text'
    ? (text.trim() === '' ? 0 : text.trim().split(/\s+/).length)
    : (parseInt(wordCount) || 0)

  const totalSeconds = Math.round((words / speed) * 60)
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60

  const commonTimes = [
    { words: 500, mins: Math.ceil(500 / speed) },
    { words: 1000, mins: Math.ceil(1000 / speed) },
    { words: 1500, mins: Math.ceil(1500 / speed) },
    { words: 2000, mins: Math.ceil(2000 / speed) },
    { words: 3000, mins: Math.ceil(3000 / speed) },
    { words: 5000, mins: Math.ceil(5000 / speed) },
    { words: 10000, mins: Math.ceil(10000 / speed) },
    { words: 50000, mins: Math.ceil(50000 / speed) },
  ]

  return (
    <>
      <FaqSchema faqs={faqs} />
      <BreadcrumbSchema items={[{"name":"Home","url":"https://www.wordcountertool.net"},{"name":"Reading Time Calculator — How Long to Read Your Content?","url":"https://www.wordcountertool.net/reading-time"}]} />
      <WebAppSchema name="Reading Time Calculator" description="Calculate how long it takes to read any text — free reading time estimator based on WPM any text. Free reading time calculator with words per minute settings." url="https://www.wordcountertool.net/reading-time" />
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Reading Time Calculator</h1>
          <p className="text-slate-400 text-lg">Calculate how long it takes to read any text or article</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div>
            <div className="flex gap-3 mb-4">
              <button onClick={() => setMode('text')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${mode === 'text' ? 'btn-primary' : 'btn-secondary'}`}>
                Paste Text
              </button>
              <button onClick={() => setMode('count')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${mode === 'count' ? 'btn-primary' : 'btn-secondary'}`}>
                Enter Word Count
              </button>
            </div>

            {mode === 'text' ? (
              <textarea value={text} onChange={e => setText(e.target.value)}
                placeholder="Paste your article or text here..."
                rows={10} />
            ) : (
              <input type="number" value={wordCount} onChange={e => setWordCount(e.target.value)}
                placeholder="Enter word count e.g. 1500"
                className="w-full px-4 py-3 rounded-xl text-white outline-none"
                style={{background:'#0f172a', border:'1px solid #1e293b'}} />
            )}

            <div className="mt-4">
              <label className="text-white text-sm font-medium block mb-2">Reading Speed</label>
              <select value={speed} onChange={e => setSpeed(Number(e.target.value))}
                className="w-full px-4 py-3 rounded-xl text-white outline-none"
                style={{background:'#0f172a', border:'1px solid #1e293b'}}>
                {SPEEDS.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
              </select>
            </div>
          </div>

          <div className="space-y-4">
            <div className="result-box text-center py-8">
              <p className="text-slate-400 text-sm mb-2">Estimated Reading Time</p>
              <div className="text-6xl font-display font-bold text-emerald-400">
                {minutes > 0 ? `${minutes}m` : ''} {seconds > 0 ? `${seconds}s` : minutes === 0 ? '0s' : ''}
              </div>
              <p className="text-slate-500 text-sm mt-2">{words.toLocaleString()} words at {speed} wpm</p>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[
                { label: 'Words', value: words.toLocaleString() },
                { label: 'Minutes', value: minutes },
                { label: 'Seconds', value: totalSeconds },
              ].map((s, i) => (
                <div key={i} className="stat-card text-center">
                  <div className="text-xl font-display font-bold text-white">{s.value}</div>
                  <div className="text-slate-500 text-xs mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="result-box">
              <h3 className="text-white font-medium text-sm mb-3">Reading Time by Speed</h3>
              <div className="space-y-2">
                {SPEEDS.map(s => (
                  <div key={s.value} className="flex justify-between text-sm">
                    <span className="text-slate-400">{s.label}</span>
                    <span className="text-white font-medium">{Math.ceil(words / s.value)} min</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="result-box mb-8">
          <h2 className="text-xl font-display font-bold text-white mb-4">Reading Time for Common Word Counts</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.1)'}}>
                  <th className="text-left text-slate-400 py-2 pr-4">Word Count</th>
                  <th className="text-left text-emerald-400 py-2">Reading Time ({speed} wpm)</th>
                </tr>
              </thead>
              <tbody>
                {commonTimes.map((row, i) => (
                  <tr key={i} className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="text-white py-2 pr-4">{row.words.toLocaleString()} words</td>
                    <td className="text-slate-300 py-2">{row.mins} minutes</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-6">
          <div className="result-box">
            <h2 className="text-xl font-display font-bold text-white mb-4">Free Reading Time Calculator</h2>
            <p className="text-slate-400 text-sm leading-relaxed">Our free reading time calculator estimates how long it takes to read any piece of text based on the average adult reading speed of 200-250 words per minute. Simply paste your text or enter your word count and instantly see the estimated reading time. You can also adjust the reading speed to match your specific audience — slower for children or complex technical content, faster for speed readers.</p>
          </div>
          <div className="result-box">
            <h2 className="text-xl font-display font-bold text-white mb-4">Why Reading Time Matters</h2>
            <p className="text-slate-400 text-sm leading-relaxed">Adding reading time estimates to blog posts and articles helps readers decide whether to read now or bookmark for later. Research shows that displaying reading time reduces bounce rates and increases engagement because readers know what they are committing to before they start. Medium, the popular blogging platform, pioneered this feature and saw significantly higher engagement as a result. Most SEO experts recommend blog posts of 1,500 to 2,000 words which takes approximately 6 to 10 minutes to read.</p>
          </div>
          <div className="result-box">
            <h2 className="text-xl font-display font-bold text-white mb-4">Frequently Asked Questions</h2>
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

          {/* Related Tools */}
          <div className="mt-12">
            <h2 className="text-2xl font-display font-bold text-white mb-6">You Might Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <a href="/word-counter" className="result-box group hover:-translate-y-1 transition-all duration-300 hover:border-emerald-500/30">
                <div className="text-3xl mb-3">📝</div>
                <h3 className="text-white font-bold text-sm mb-1 group-hover:text-emerald-400 transition-colors">Word Counter</h3>
                <p className="text-slate-500 text-xs leading-relaxed">Count words and characters instantly</p>
              </a>
              <a href="/words-per-minute" className="result-box group hover:-translate-y-1 transition-all duration-300 hover:border-emerald-500/30">
                <div className="text-3xl mb-3">⌨️</div>
                <h3 className="text-white font-bold text-sm mb-1 group-hover:text-emerald-400 transition-colors">Words Per Minute</h3>
                <p className="text-slate-500 text-xs leading-relaxed">Test your typing speed in WPM</p>
              </a>
              <a href="/words-per-page" className="result-box group hover:-translate-y-1 transition-all duration-300 hover:border-emerald-500/30">
                <div className="text-3xl mb-3">📄</div>
                <h3 className="text-white font-bold text-sm mb-1 group-hover:text-emerald-400 transition-colors">Words Per Page</h3>
                <p className="text-slate-500 text-xs leading-relaxed">Convert word count to pages</p>
              </a>
              <a href="/readability-checker" className="result-box group hover:-translate-y-1 transition-all duration-300 hover:border-emerald-500/30">
                <div className="text-3xl mb-3">📖</div>
                <h3 className="text-white font-bold text-sm mb-1 group-hover:text-emerald-400 transition-colors">Readability Checker</h3>
                <p className="text-slate-500 text-xs leading-relaxed">Check your content readability score</p>
              </a>
            </div>
          </div>
      </main>

          {/* Internal Link to Blog */}
          <div className="mt-8 p-4 rounded-xl border border-emerald-500/20" style={{background:'rgba(52,211,153,0.05)'}}>
            <p className="text-slate-400 text-sm mb-2">📖 Related Guide</p>
            <a href="/blog/average-reading-speed" className="text-emerald-400 font-semibold hover:underline">Average Reading Speed: How Fast Do People Read? (2026)</a>
          </div>
      <Footer />
    </>
  )
}