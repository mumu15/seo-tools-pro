'use client'
import { useState, useCallback } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function KeywordDensity() {
  const [text, setText] = useState('')
  const [minLength, setMinLength] = useState(3)

  const analyze = useCallback(() => {
    if (!text.trim()) return { words: [], total: 0 }
    const words = text.toLowerCase().match(/\b[a-z]{2,}\b/g) || []
    const total = words.length
    const stopWords = new Set(['the','and','for','that','this','with','from','they','have','been','were','will','what','when','your','more','also','into','than','then','its','but','not','can','are','was','has','had','you','all','who','one','her','his','him','our','their','there','about','which','would','could','should'])
    const freq = {}
    words.forEach(w => {
      if (w.length >= minLength && !stopWords.has(w)) {
        freq[w] = (freq[w] || 0) + 1
      }
    })
    const sorted = Object.entries(freq)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 20)
      .map(([word, count]) => ({
        word,
        count,
        density: ((count / total) * 100).toFixed(2)
      }))
    return { words: sorted, total }
  }, [text, minLength])

  const result = analyze()

  const getDensityColor = (density) => {
    const d = parseFloat(density)
    if (d > 5) return 'text-red-400'
    if (d >= 1 && d <= 3) return 'text-emerald-400'
    return 'text-slate-400'
  }

  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Keyword Density Checker
          </h1>
          <p className="text-slate-400 text-lg">Analyze keyword frequency and density — optimize your content for SEO</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="text-white font-medium">Your Content</label>
              <div className="flex items-center gap-2">
                <span className="text-slate-500 text-sm">Min word length:</span>
                <select
                  value={minLength}
                  onChange={e => setMinLength(Number(e.target.value))}
                  className="bg-dark-800 border border-dark-600 text-white text-sm rounded-lg px-2 py-1"
                  style={{ background: '#0f172a', border: '1px solid #1e293b' }}
                >
                  {[3,4,5,6].map(n => <option key={n} value={n}>{n}+</option>)}
                </select>
              </div>
            </div>
            <textarea
              value={text}
              onChange={e => setText(e.target.value)}
              placeholder="Paste your article or blog post here..."
              rows={14}
            />
            <div className="flex gap-3 mt-3">
              <button onClick={() => setText('')} className="btn-secondary text-sm">Clear</button>
              <span className="text-slate-600 text-sm self-center">{result.total} words analyzed</span>
            </div>
          </div>

          {/* Results */}
          <div>
            <h3 className="text-white font-medium mb-3">Top Keywords</h3>
            {result.words.length === 0 ? (
              <div className="result-box text-center py-12">
                <div className="text-4xl mb-3">🔍</div>
                <p className="text-slate-500">Paste your content to see keyword analysis</p>
              </div>
            ) : (
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {result.words.map((kw, i) => (
                  <div key={i} className="stat-card flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-slate-600 text-xs w-5 text-right">{i + 1}</span>
                      <span className="text-white font-medium">{kw.word}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-24">
                        <div className="progress-bar">
                          <div className="progress-fill" style={{ width: `${Math.min(100, parseFloat(kw.density) * 20)}%` }} />
                        </div>
                      </div>
                      <span className="text-slate-500 text-xs w-6 text-right">{kw.count}x</span>
                      <span className={`text-sm font-mono font-bold w-14 text-right ${getDensityColor(kw.density)}`}>
                        {kw.density}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {result.words.length > 0 && (
              <div className="result-box mt-4">
                <h4 className="text-white font-medium mb-2 text-sm">Density Guide</h4>
                <div className="space-y-1 text-xs">
                  <div className="flex gap-2"><span className="text-emerald-400">●</span><span className="text-slate-400">1–3% — Ideal keyword density</span></div>
                  <div className="flex gap-2"><span className="text-yellow-400">●</span><span className="text-slate-400">3–5% — Borderline, monitor carefully</span></div>
                  <div className="flex gap-2"><span className="text-red-400">●</span><span className="text-slate-400">&gt;5% — Too high, risk of keyword stuffing</span></div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="result-box mt-12">
          <h2 className="text-xl font-display font-bold text-white mb-4">About Keyword Density</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Keyword density is the percentage of times a keyword appears in your content compared to the total word count. 
            Ideal keyword density is typically 1–3%. Too low and Google may not associate your page with that keyword. 
            Too high and you risk keyword stuffing penalties. Use this free tool to analyze your content before publishing.
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
