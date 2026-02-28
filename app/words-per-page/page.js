'use client'
import { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FaqSchema from '../../components/FaqSchema'

const faqs = [
  { q: 'How many words are on a page?', a: 'A standard page with 12pt font, double spacing and 1 inch margins contains approximately 250-300 words. A single spaced page contains approximately 500-600 words.' },
  { q: 'How many words is a 5 page paper?', a: 'A 5 page paper is approximately 1,250 to 1,500 words double spaced, or 2,500 to 3,000 words single spaced.' },
  { q: 'How many pages is 1000 words?', a: 'At 250 words per page (double spaced), 1000 words is approximately 4 pages. Single spaced, 1000 words is approximately 2 pages.' },
  { q: 'How many pages is 2000 words?', a: 'At 250 words per page (double spaced), 2000 words is approximately 8 pages. Single spaced, 2000 words is approximately 4 pages.' },
  { q: 'How many words is a 10 page paper?', a: 'A 10 page paper is approximately 2,500 to 3,000 words double spaced, or 5,000 to 6,000 words single spaced.' },
]

const FONT_SIZES = [10, 11, 12, 13, 14]
const SPACINGS = [
  { label: 'Single', value: 1 },
  { label: '1.5', value: 1.5 },
  { label: 'Double', value: 2 },
]
const FONTS = [
  { label: 'Arial', wpp: 300 },
  { label: 'Times New Roman', wpp: 280 },
  { label: 'Calibri', wpp: 310 },
  { label: 'Courier New', wpp: 250 },
]

export default function WordsPerPage() {
  const [mode, setMode] = useState('wordsToPages')
  const [words, setWords] = useState(1000)
  const [pages, setPages] = useState(4)
  const [fontSize, setFontSize] = useState(12)
  const [spacing, setSpacing] = useState(2)
  const [fontIdx, setFontIdx] = useState(0)

  const baseWPP = FONTS[fontIdx].wpp
  const adjustedWPP = Math.round(baseWPP * (12 / fontSize) * (2 / spacing))

  const resultPages = (words / adjustedWPP).toFixed(1)
  const resultWords = Math.round(pages * adjustedWPP)

  const commonConversions = [
    { words: 500, pages: (500 / adjustedWPP).toFixed(1) },
    { words: 1000, pages: (1000 / adjustedWPP).toFixed(1) },
    { words: 1500, pages: (1500 / adjustedWPP).toFixed(1) },
    { words: 2000, pages: (2000 / adjustedWPP).toFixed(1) },
    { words: 2500, pages: (2500 / adjustedWPP).toFixed(1) },
    { words: 3000, pages: (3000 / adjustedWPP).toFixed(1) },
    { words: 5000, pages: (5000 / adjustedWPP).toFixed(1) },
    { words: 10000, pages: (10000 / adjustedWPP).toFixed(1) },
  ]

  return (
    <>
      <FaqSchema faqs={faqs} />
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Words Per Page Calculator</h1>
          <p className="text-slate-400 text-lg">Convert words to pages or pages to words instantly</p>
        </div>

        <div className="result-box mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div>
              <label className="text-white text-sm font-medium block mb-2">Font</label>
              <select value={fontIdx} onChange={e => setFontIdx(Number(e.target.value))}
                className="w-full px-3 py-2 rounded-lg text-white text-sm outline-none"
                style={{background:'#0f172a', border:'1px solid #1e293b'}}>
                {FONTS.map((f, i) => <option key={i} value={i}>{f.label}</option>)}
              </select>
            </div>
            <div>
              <label className="text-white text-sm font-medium block mb-2">Font Size</label>
              <select value={fontSize} onChange={e => setFontSize(Number(e.target.value))}
                className="w-full px-3 py-2 rounded-lg text-white text-sm outline-none"
                style={{background:'#0f172a', border:'1px solid #1e293b'}}>
                {FONT_SIZES.map(s => <option key={s} value={s}>{s}pt</option>)}
              </select>
            </div>
            <div>
              <label className="text-white text-sm font-medium block mb-2">Spacing</label>
              <select value={spacing} onChange={e => setSpacing(Number(e.target.value))}
                className="w-full px-3 py-2 rounded-lg text-white text-sm outline-none"
                style={{background:'#0f172a', border:'1px solid #1e293b'}}>
                {SPACINGS.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
              </select>
            </div>
            <div className="flex items-end">
              <div className="stat-card w-full text-center">
                <div className="text-emerald-400 text-sm font-medium">{adjustedWPP} words/page</div>
              </div>
            </div>
          </div>

          <div className="flex gap-3 mb-6">
            <button onClick={() => setMode('wordsToPages')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${mode === 'wordsToPages' ? 'btn-primary' : 'btn-secondary'}`}>
              Words → Pages
            </button>
            <button onClick={() => setMode('pagesToWords')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${mode === 'pagesToWords' ? 'btn-primary' : 'btn-secondary'}`}>
              Pages → Words
            </button>
          </div>

          {mode === 'wordsToPages' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div>
                <label className="text-white text-sm font-medium block mb-2">Number of Words</label>
                <input type="number" value={words} onChange={e => setWords(Number(e.target.value))}
                  className="w-full px-4 py-3 rounded-xl text-white outline-none"
                  style={{background:'#0f172a', border:'1px solid #1e293b'}} />
              </div>
              <div className="text-center stat-card">
                <p className="text-slate-400 text-sm mb-1">Number of Pages</p>
                <div className="text-5xl font-display font-bold text-emerald-400">{resultPages}</div>
                <p className="text-slate-500 text-xs mt-1">pages</p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div>
                <label className="text-white text-sm font-medium block mb-2">Number of Pages</label>
                <input type="number" value={pages} onChange={e => setPages(Number(e.target.value))}
                  className="w-full px-4 py-3 rounded-xl text-white outline-none"
                  style={{background:'#0f172a', border:'1px solid #1e293b'}} />
              </div>
              <div className="text-center stat-card">
                <p className="text-slate-400 text-sm mb-1">Number of Words</p>
                <div className="text-5xl font-display font-bold text-emerald-400">{resultWords.toLocaleString()}</div>
                <p className="text-slate-500 text-xs mt-1">words</p>
              </div>
            </div>
          )}
        </div>

        <div className="result-box mb-8">
          <h2 className="text-xl font-display font-bold text-white mb-4">Common Word Counts to Pages</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.1)'}}>
                  <th className="text-left text-slate-400 py-2 pr-4">Word Count</th>
                  <th className="text-left text-emerald-400 py-2">Pages</th>
                </tr>
              </thead>
              <tbody>
                {commonConversions.map((row, i) => (
                  <tr key={i} className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="text-white py-2 pr-4">{row.words.toLocaleString()} words</td>
                    <td className="text-slate-300 py-2">{row.pages} pages</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-6">
          <div className="result-box">
            <h2 className="text-xl font-display font-bold text-white mb-4">How Many Words Per Page?</h2>
            <p className="text-slate-400 text-sm leading-relaxed">The number of words per page depends on font type, font size, line spacing and margin size. A standard essay or academic paper uses 12pt Times New Roman or Arial font with double spacing and 1 inch margins, which gives approximately 250-300 words per page. A single spaced page with the same font and margins contains approximately 500-600 words per page. Use the calculator above to get an accurate estimate for your specific settings.</p>
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
      <Footer />
    </>
  )
}