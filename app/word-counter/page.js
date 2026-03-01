'use client'
import { useState, useCallback, useEffect, useRef } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FaqSchema from '../../components/FaqSchema'
import BreadcrumbSchema from '../../components/BreadcrumbSchema'
import WebAppSchema from '../../components/WebAppSchema'

const faqs = [
  { q: 'How does the word counter work?', a: 'Our tool splits your text by spaces and punctuation to count individual words. It updates in real time as you type or paste text.' },
  { q: 'Is this word counter free?', a: 'Yes, completely free. No sign up, no account required, no usage limits.' },
  { q: 'How is reading time calculated?', a: 'Reading time is calculated based on the average adult reading speed of 200 words per minute.' },
  { q: 'How is speaking time calculated?', a: 'Speaking time is calculated based on the average speaking speed of 130 words per minute used in presentations and speeches.' },
  { q: 'What is the word count for common documents?', a: 'A typical blog post is 1,500-2,500 words. A short story is 1,000-7,500 words. A novel is 80,000-100,000 words. A tweet is up to 280 characters.' },
]

const CASES = ['Original', 'UPPERCASE', 'lowercase', 'Title Case', 'Sentence case']

export default function WordCounter() {
  const [text, setText] = useState('')
  const [copied, setCopied] = useState(false)
  const [activeCase, setActiveCase] = useState('Original')
  const [originalText, setOriginalText] = useState('')
  const [showFind, setShowFind] = useState(false)
  const [findText, setFindText] = useState('')
  const [replaceText, setReplaceText] = useState('')
  const [animated, setAnimated] = useState(false)
  const prevWords = useRef(0)

  useEffect(() => {
    const words = text.trim() === '' ? 0 : text.trim().split(/\s+/).length
    if (words !== prevWords.current) {
      setAnimated(false)
      setTimeout(() => setAnimated(true), 10)
      prevWords.current = words
    }
  }, [text])

  const stats = useCallback(() => {
    const words = text.trim() === '' ? 0 : text.trim().split(/\s+/).length
    const chars = text.length
    const charsNoSpaces = text.replace(/\s/g, '').length
    const sentences = text.trim() === '' ? 0 : (text.match(/[.!?]+/g) || []).length
    const paragraphs = text.trim() === '' ? 0 : text.split(/\n+/).filter(p => p.trim()).length || (text.trim() ? 1 : 0)
    const readTime = Math.max(1, Math.ceil(words / 200))
    const speakTime = Math.max(1, Math.ceil(words / 130))
    const uniqueWords = text.trim() === '' ? 0 : new Set(text.toLowerCase().match(/\b\w+\b/g) || []).size
    return { words, chars, charsNoSpaces, sentences, paragraphs, readTime, speakTime, uniqueWords }
  }, [text])

  const s = stats()

  const copyResults = () => {
    const summary = `Word Count Results:\nWords: ${s.words}\nCharacters: ${s.chars}\nCharacters (no spaces): ${s.charsNoSpaces}\nSentences: ${s.sentences}\nParagraphs: ${s.paragraphs}\nReading Time: ${s.readTime} min\nSpeaking Time: ${s.speakTime} min\nUnique Words: ${s.uniqueWords}`
    navigator.clipboard.writeText(summary).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  const clearText = () => {
    setText('')
    setOriginalText('')
    setActiveCase('Original')
  }

  const downloadText = () => {
    const blob = new Blob([text], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'my-text.txt'
    a.click()
    URL.revokeObjectURL(url)
  }

  const applyCase = (caseType) => {
    setActiveCase(caseType)
    let orig = activeCase === 'Original' ? text : originalText
    if (caseType === 'Original') { setText(originalText || text); return }
    if (activeCase === 'Original') setOriginalText(text)
    const t = activeCase === 'Original' ? text : originalText
    if (caseType === 'UPPERCASE') setText(t.toUpperCase())
    else if (caseType === 'lowercase') setText(t.toLowerCase())
    else if (caseType === 'Title Case') setText(t.replace(/\w\S*/g, w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()))
    else if (caseType === 'Sentence case') setText(t.toLowerCase().replace(/(^|[.!?]\s+)([a-z])/g, (m, p1, p2) => p1 + p2.toUpperCase()))
  }

  const handleFindReplace = () => {
    if (!findText) return
    setText(text.split(findText).join(replaceText))
    setFindText('')
    setReplaceText('')
    setShowFind(false)
  }

  return (
    <>
      <FaqSchema faqs={faqs} />
      <BreadcrumbSchema items={[{"name":"Home","url":"https://www.wordcountertool.net"},{"name":"Word Counter","url":"https://www.wordcountertool.net/word-counter"}]} />
      <WebAppSchema name="Free Word Counter" description="Count words, characters, sentences and paragraphs instantly. Free online word counter with reading time." url="https://www.wordcountertool.net/word-counter" />
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Free Word Counter Online</h1>
          <p className="text-slate-400 text-lg">Count words, characters, sentences and more instantly — free, no sign up required</p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-2 mb-3 justify-end">
          <button onClick={() => setShowFind(!showFind)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all"
            style={{background:'rgba(255,255,255,0.05)',border:'1px solid rgba(255,255,255,0.1)',color:'#94a3b8'}}>
            🔍 Find & Replace
          </button>
          <button onClick={downloadText}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all"
            style={{background:'rgba(255,255,255,0.05)',border:'1px solid rgba(255,255,255,0.1)',color:'#94a3b8'}}>
            ⬇️ Download .txt
          </button>
          <button onClick={clearText}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all"
            style={{background:'rgba(255,255,255,0.05)',border:'1px solid rgba(255,255,255,0.1)',color:'#94a3b8'}}>
            🗑️ Clear
          </button>
          <button onClick={copyResults}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all"
            style={{background: copied ? 'rgba(52,211,153,0.2)' : 'rgba(52,211,153,0.1)', border:'1px solid rgba(52,211,153,0.3)', color: copied ? '#34d399' : '#94a3b8'}}>
            {copied ? '✅ Copied!' : '📋 Copy Results'}
          </button>
        </div>

        {/* Find & Replace */}
        {showFind && (
          <div className="result-box mb-3 flex flex-wrap gap-3 items-center">
            <input value={findText} onChange={e => setFindText(e.target.value)} placeholder="Find..."
              className="flex-1 min-w-[120px] px-3 py-2 rounded-lg text-white text-sm outline-none"
              style={{background:'rgba(255,255,255,0.05)',border:'1px solid rgba(52,211,153,0.2)'}} />
            <input value={replaceText} onChange={e => setReplaceText(e.target.value)} placeholder="Replace with..."
              className="flex-1 min-w-[120px] px-3 py-2 rounded-lg text-white text-sm outline-none"
              style={{background:'rgba(255,255,255,0.05)',border:'1px solid rgba(52,211,153,0.2)'}} />
            <button onClick={handleFindReplace} className="btn-primary px-4 py-2 text-sm">Replace All</button>
            <button onClick={() => setShowFind(false)} className="text-slate-500 hover:text-white text-sm">✕</button>
          </div>
        )}

        {/* Case Changer */}
        <div className="flex flex-wrap gap-2 mb-3">
          {CASES.map(c => (
            <button key={c} onClick={() => applyCase(c)}
              className="px-3 py-1.5 rounded-lg text-xs font-medium transition-all"
              style={{
                background: activeCase === c ? 'rgba(52,211,153,0.2)' : 'rgba(255,255,255,0.03)',
                border: activeCase === c ? '1px solid rgba(52,211,153,0.4)' : '1px solid rgba(255,255,255,0.08)',
                color: activeCase === c ? '#34d399' : '#64748b'
              }}>
              {c}
            </button>
          ))}
        </div>

        {/* Textarea */}
        <textarea
          value={text}
          onChange={e => { setText(e.target.value); if (activeCase !== 'Original') setActiveCase('Original') }}
          placeholder="Start typing or paste your text here..."
          className="w-full h-64 px-4 py-3 rounded-xl text-white text-sm outline-none resize-none mb-4 leading-relaxed"
          style={{
            background:'rgba(255,255,255,0.03)',
            border:'1px solid rgba(52,211,153,0.15)',
            boxShadow: text.length > 0 ? '0 0 0 2px rgba(52,211,153,0.15)' : 'none',
            transition:'box-shadow 0.3s ease'
          }}
        />

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
          {[
            { label: 'Words', value: s.words, color: 'text-emerald-400' },
            { label: 'Characters', value: s.chars, color: 'text-blue-400' },
            { label: 'Sentences', value: s.sentences, color: 'text-purple-400' },
            { label: 'Paragraphs', value: s.paragraphs, color: 'text-pink-400' },
            { label: 'Read Time', value: s.readTime + ' min', color: 'text-yellow-400' },
            { label: 'Speak Time', value: s.speakTime + ' min', color: 'text-orange-400' },
            { label: 'Unique Words', value: s.uniqueWords, color: 'text-cyan-400' },
            { label: 'No Spaces', value: s.charsNoSpaces, color: 'text-rose-400' },
          ].map((stat, i) => (
            <div key={i} className="stat-card" style={{transition:'all 0.3s ease', transform: animated && stat.value !== 0 && stat.value !== '0 min' ? 'scale(1.02)' : 'scale(1)'}}>
              <div className={`text-2xl font-display font-bold ${stat.color}`} style={{transition:'all 0.2s ease'}}>{stat.value}</div>
              <div className="text-slate-500 text-xs mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Internal Link to Blog */}
        <div className="mt-8 p-4 rounded-xl border border-emerald-500/20" style={{background:'rgba(52,211,153,0.05)'}}>
          <p className="text-slate-400 text-sm mb-2">📖 Related Guide</p>
          <a href="/blog/how-to-count-words-online" className="text-emerald-400 font-semibold hover:underline">How to Count Words Online: The Complete Free Guide (2026)</a>
        </div>

        {/* Related Tools */}
        <div className="mt-12">
          <h2 className="text-2xl font-display font-bold text-white mb-6">You Might Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {href:'/character-counter',icon:'🔤',name:'Character Counter',desc:'Count characters for Twitter, Instagram and more'},
              {href:'/reading-time',icon:'⏱️',name:'Reading Time',desc:'Estimate how long your content takes to read'},
              {href:'/readability-checker',icon:'📖',name:'Readability Checker',desc:'Check your Flesch-Kincaid readability score'},
              {href:'/words-per-page',icon:'📄',name:'Words Per Page',desc:'Convert word count to number of pages'},
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
