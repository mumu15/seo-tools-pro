'use client'
import { useState, useRef } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FaqSchema from '../../components/FaqSchema'

const faqs = [
  { q: 'What is the average words per minute typing speed?', a: 'The average typing speed is 40 words per minute. Professional typists average 65-75 words per minute. Top speed typists can exceed 100-120 words per minute.' },
  { q: 'What is a good words per minute reading speed?', a: 'The average adult reads 200-250 words per minute. A good reading speed is 300-400 words per minute. Speed readers can read 500-700 words per minute while maintaining good comprehension.' },
  { q: 'How can I improve my typing speed?', a: 'Practice touch typing using all 10 fingers, use typing practice websites daily, focus on accuracy before speed, and avoid looking at the keyboard. Most people can double their typing speed with consistent practice over a few months.' },
  { q: 'How is words per minute calculated?', a: 'Words per minute is calculated by counting the total number of words typed or read, then dividing by the number of minutes taken. Our calculator does this automatically when you complete the test.' },
  { q: 'Is this words per minute test free?', a: 'Yes, completely free with no sign up required.' },
]

const TEXTS = [
  "The quick brown fox jumps over the lazy dog. This simple sentence has been used for centuries to test typing speed and keyboard layouts. Professional typists practice with similar texts to improve their accuracy and speed over time.",
  "Technology has transformed the way we communicate and work. Computers and smartphones allow us to connect with people around the world instantly. Learning to type quickly and accurately is one of the most valuable skills in the modern workplace.",
  "Reading is one of the most important habits you can develop. Books and articles expand your vocabulary, improve your focus, and expose you to new ideas. Even reading for just thirty minutes a day can have a significant impact on your knowledge and mental health.",
]

export default function WordsPerMinute() {
  const [mode, setMode] = useState('typing')
  const [started, setStarted] = useState(false)
  const [finished, setFinished] = useState(false)
  const [input, setText] = useState('')
  const [startTime, setStartTime] = useState(null)
  const [endTime, setEndTime] = useState(null)
  const [textIdx] = useState(0)
  const [readingWords, setReadingWords] = useState('')
  const [readingTime, setReadingTime] = useState(null)
  const inputRef = useRef(null)

  const targetText = TEXTS[textIdx]
  const targetWords = targetText.trim().split(/\s+/).length

  const handleType = (e) => {
    const val = e.target.value
    if (!started && val.length > 0) {
      setStarted(true)
      setStartTime(Date.now())
    }
    setText(val)
    if (val.trim() === targetText.trim()) {
      setEndTime(Date.now())
      setFinished(true)
    }
  }

  const getWPM = () => {
    if (!startTime || !endTime) return 0
    const mins = (endTime - startTime) / 60000
    return Math.round(targetWords / mins)
  }

  const getAccuracy = () => {
    if (!input) return 100
    const inputWords = input.trim().split(/\s+/)
    const targetWordsArr = targetText.trim().split(/\s+/)
    let correct = 0
    inputWords.forEach((w, i) => { if (w === targetWordsArr[i]) correct++ })
    return Math.round((correct / targetWordsArr.length) * 100)
  }

  const reset = () => {
    setStarted(false)
    setFinished(false)
    setText('')
    setStartTime(null)
    setEndTime(null)
    setTimeout(() => inputRef.current?.focus(), 100)
  }

  const startReadingTest = () => {
    setReadingTime(Date.now())
  }

  const finishReadingTest = () => {
    if (!readingTime) return
    const mins = (Date.now() - readingTime) / 60000
    const words = parseInt(readingWords) || 0
    setReadingTime({ wpm: Math.round(words / mins), done: true })
  }

  const wpm = getWPM()
  const accuracy = getAccuracy()
  const getWPMColor = (w) => w >= 80 ? 'text-emerald-400' : w >= 50 ? 'text-yellow-400' : 'text-red-400'
  const getWPMLabel = (w) => w >= 80 ? 'Excellent!' : w >= 60 ? 'Good' : w >= 40 ? 'Average' : 'Keep Practicing'

  return (
    <>
      <FaqSchema faqs={faqs} />
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Words Per Minute Calculator</h1>
          <p className="text-slate-400 text-lg">Test your typing speed or calculate your reading speed</p>
        </div>

        <div className="flex gap-3 mb-8 justify-center">
          <button onClick={() => { setMode('typing'); reset() }}
            className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors ${mode === 'typing' ? 'btn-primary' : 'btn-secondary'}`}>
            ⌨️ Typing Speed Test
          </button>
          <button onClick={() => setMode('reading')}
            className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors ${mode === 'reading' ? 'btn-primary' : 'btn-secondary'}`}>
            📖 Reading Speed Calculator
          </button>
        </div>

        {mode === 'typing' ? (
          <div className="space-y-6">
            <div className="result-box">
              <h3 className="text-white font-medium mb-3 text-sm uppercase tracking-wider">Type this text:</h3>
              <p className="text-slate-300 leading-relaxed text-sm">{targetText}</p>
            </div>
            <div>
              <textarea ref={inputRef} value={input} onChange={handleType} disabled={finished}
                placeholder="Start typing here to begin the test..."
                rows={5} className={finished ? 'opacity-50' : ''} />
            </div>
            {finished ? (
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="stat-card text-center">
                    <div className={`text-4xl font-display font-bold ${getWPMColor(wpm)}`}>{wpm}</div>
                    <div className="text-slate-500 text-sm mt-1">WPM</div>
                    <div className={`text-xs mt-1 ${getWPMColor(wpm)}`}>{getWPMLabel(wpm)}</div>
                  </div>
                  <div className="stat-card text-center">
                    <div className="text-4xl font-display font-bold text-blue-400">{accuracy}%</div>
                    <div className="text-slate-500 text-sm mt-1">Accuracy</div>
                  </div>
                  <div className="stat-card text-center">
                    <div className="text-4xl font-display font-bold text-purple-400">{targetWords}</div>
                    <div className="text-slate-500 text-sm mt-1">Words Typed</div>
                  </div>
                </div>
                <button onClick={reset} className="btn-primary w-full py-3">Try Again</button>
              </div>
            ) : started ? (
              <p className="text-slate-500 text-sm text-center">Keep typing... finish the text to see your results</p>
            ) : (
              <p className="text-slate-500 text-sm text-center">Start typing in the box above to begin the test</p>
            )}
          </div>
        ) : (
          <div className="space-y-6">
            <div className="result-box">
              <h3 className="text-white font-medium mb-4">Calculate Your Reading Speed</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-white text-sm font-medium block mb-2">Number of words in what you want to read</label>
                  <input type="number" value={readingWords} onChange={e => setReadingWords(e.target.value)}
                    placeholder="e.g. 1500"
                    className="w-full px-4 py-3 rounded-xl text-white outline-none"
                    style={{background:'#0f172a', border:'1px solid #1e293b'}} />
                </div>
                {!readingTime ? (
                  <button onClick={startReadingTest} className="btn-primary w-full py-3">Start Timer — Begin Reading Now</button>
                ) : readingTime.done ? (
                  <div className="stat-card text-center">
                    <div className="text-5xl font-display font-bold text-emerald-400">{readingTime.wpm}</div>
                    <div className="text-slate-500 text-sm mt-2">Words Per Minute</div>
                    <div className="text-slate-400 text-xs mt-1">{readingTime.wpm >= 300 ? 'Fast reader!' : readingTime.wpm >= 200 ? 'Average reader' : 'Slow reader — try to improve!'}</div>
                    <button onClick={() => { setReadingTime(null); setReadingWords('') }} className="btn-secondary mt-4 text-sm px-4 py-2">Test Again</button>
                  </div>
                ) : (
                  <button onClick={finishReadingTest} className="btn-primary w-full py-3">Stop Timer — I Finished Reading</button>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="space-y-6 mt-12">
          <div className="result-box">
            <h2 className="text-xl font-display font-bold text-white mb-4">Free Words Per Minute Test</h2>
            <p className="text-slate-400 text-sm leading-relaxed">Our free words per minute calculator lets you test your typing speed or calculate your reading speed. The typing speed test measures how many words you can type per minute with accuracy. The reading speed calculator lets you time yourself reading any text to find your reading speed in words per minute.</p>
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
      </main>

          {/* Internal Link to Blog */}
          <div className="mt-8 p-4 rounded-xl border border-emerald-500/20" style={{background:'rgba(52,211,153,0.05)'}}>
            <p className="text-slate-400 text-sm mb-2">📖 Related Guide</p>
            <a href="/blog/average-typing-speed" className="text-emerald-400 font-semibold hover:underline">Average Typing Speed: What is Good WPM in 2026?</a>
          </div>
      <Footer />
    </>
  )
}