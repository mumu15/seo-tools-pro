'use client'
import { useState, useCallback } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function ReadabilityChecker() {
  const [text, setText] = useState('')

  const analyze = useCallback(() => {
    if (!text.trim()) return null
    const words = text.trim().split(/\s+/).length
    const sentences = (text.match(/[^.!?]*[.!?]+/g) || [text]).length
    const syllables = text.toLowerCase().replace(/[^a-z]/g, ' ').split(/\s+/).reduce((acc, word) => {
      if (!word) return acc
      const count = word.replace(/[^aeiouy]/g, '').replace(/[aeiou]{2,}/g, 'a').length || 1
      return acc + count
    }, 0)
    const avgWordsPerSentence = words / Math.max(sentences, 1)
    const avgSyllablesPerWord = syllables / Math.max(words, 1)
    const fleschScore = 206.835 - (1.015 * avgWordsPerSentence) - (84.6 * avgSyllablesPerWord)
    const score = Math.max(0, Math.min(100, Math.round(fleschScore)))

    let level, color, desc
    if (score >= 90) { level = 'Very Easy'; color = '#10b981'; desc = '5th grade — Very easy to read' }
    else if (score >= 80) { level = 'Easy'; color = '#34d399'; desc = '6th grade — Easy to read' }
    else if (score >= 70) { level = 'Fairly Easy'; color = '#86efac'; desc = '7th grade — Fairly easy' }
    else if (score >= 60) { level = 'Standard'; color = '#fbbf24'; desc = '8th–9th grade — Plain English' }
    else if (score >= 50) { level = 'Fairly Difficult'; color = '#f97316'; desc = '10th–12th grade — Fairly difficult' }
    else if (score >= 30) { level = 'Difficult'; color = '#ef4444'; desc = 'College level — Difficult' }
    else { level = 'Very Difficult'; color = '#dc2626'; desc = 'College graduate — Very difficult' }

    return { score, level, color, desc, avgWordsPerSentence: avgWordsPerSentence.toFixed(1), avgSyllablesPerWord: avgSyllablesPerWord.toFixed(1), words, sentences }
  }, [text])

  const result = analyze()

  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Readability Checker
          </h1>
          <p className="text-slate-400 text-lg">Check your content's readability using the Flesch-Kincaid formula</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <label className="text-white font-medium block mb-3">Your Content</label>
            <textarea
              value={text}
              onChange={e => setText(e.target.value)}
              placeholder="Paste your article, blog post or any text here..."
              rows={14}
            />
            <button onClick={() => setText('')} className="btn-secondary mt-3 text-sm">Clear</button>
          </div>

          <div>
            {!result ? (
              <div className="result-box text-center py-16">
                <div className="text-5xl mb-4">📖</div>
                <p className="text-slate-500">Paste your text to see the readability score</p>
              </div>
            ) : (
              <div className="space-y-4">
                {/* Score Circle */}
                <div className="result-box text-center">
                  <div className="relative inline-flex items-center justify-center w-32 h-32 mb-4">
                    <svg className="w-32 h-32 -rotate-90" viewBox="0 0 120 120">
                      <circle cx="60" cy="60" r="50" fill="none" stroke="#1e293b" strokeWidth="10" />
                      <circle cx="60" cy="60" r="50" fill="none" stroke={result.color} strokeWidth="10"
                        strokeDasharray={`${2 * Math.PI * 50}`}
                        strokeDashoffset={`${2 * Math.PI * 50 * (1 - result.score / 100)}`}
                        strokeLinecap="round" />
                    </svg>
                    <div className="absolute text-center">
                      <div className="text-3xl font-display font-bold text-white">{result.score}</div>
                      <div className="text-xs text-slate-500">/ 100</div>
                    </div>
                  </div>
                  <div className="text-xl font-display font-bold text-white mb-1">{result.level}</div>
                  <div className="text-slate-400 text-sm">{result.desc}</div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: 'Words', value: result.words },
                    { label: 'Sentences', value: result.sentences },
                    { label: 'Avg words/sentence', value: result.avgWordsPerSentence },
                    { label: 'Avg syllables/word', value: result.avgSyllablesPerWord },
                  ].map((s, i) => (
                    <div key={i} className="stat-card">
                      <div className="text-xl font-display font-bold text-white">{s.value}</div>
                      <div className="text-slate-500 text-xs mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tips */}
                <div className="result-box">
                  <h4 className="text-white font-medium mb-2 text-sm">💡 Tips to Improve</h4>
                  <ul className="space-y-1 text-slate-400 text-xs">
                    {result.avgWordsPerSentence > 20 && <li>• Shorten your sentences (aim for under 20 words)</li>}
                    {result.avgSyllablesPerWord > 1.7 && <li>• Use simpler words with fewer syllables</li>}
                    {result.score < 60 && <li>• Break long paragraphs into shorter ones</li>}
                    {result.score >= 60 && <li>✅ Your content is readable for most audiences!</li>}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
