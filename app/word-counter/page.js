'use client'
import { useState, useCallback } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FaqSchema from '../../components/FaqSchema'

const faqs = [
  { q: 'How does the word counter work?', a: 'Our tool splits your text by spaces and punctuation to count individual words. It updates in real time as you type or paste text.' },
  { q: 'Is this word counter free?', a: 'Yes, completely free. No sign up, no account required, no usage limits.' },
  { q: 'How is reading time calculated?', a: 'Reading time is based on an average reading speed of 200 words per minute, which is the typical adult reading speed.' },
  { q: 'Is my text saved or stored?', a: 'No. All processing happens in your browser. Your text never leaves your device and is never stored on our servers.' },
  { q: 'What is a unique word count?', a: 'Unique word count shows how many different words you have used. A high unique word count indicates rich vocabulary and varied writing.' },
]

export default function WordCounter() {
  const [text, setText] = useState('')

  const stats = useCallback(() => {
    const words = text.trim() === '' ? 0 : text.trim().split(/\s+/).length
    const chars = text.length
    const charsNoSpaces = text.replace(/\s/g, '').length
    const sentences = text === '' ? 0 : (text.match(/[^.!?]*[.!?]+/g) || []).length
    const paragraphs = text === '' ? 0 : text.split(/\n\s*\n/).filter(p => p.trim()).length || (text.trim() ? 1 : 0)
    const readTime = Math.max(1, Math.ceil(words / 200))
    const uniqueWords = text.trim() === '' ? 0 : new Set(text.toLowerCase().match(/\b\w+\b/g) || []).size
    return { words, chars, charsNoSpaces, sentences, paragraphs, readTime, uniqueWords }
  }, [text])

  const s = stats()

  return (
    <>
      <FaqSchema faqs={faqs} />
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Word Counter</h1>
          <p className="text-slate-400 text-lg">Count words, characters, sentences and more instantly as you type</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          <div className="stat-card"><div className="text-3xl font-display font-bold text-emerald-400">{s.words}</div><div className="text-slate-500 text-sm mt-1">Words</div></div>
          <div className="stat-card"><div className="text-3xl font-display font-bold text-blue-400">{s.chars}</div><div className="text-slate-500 text-sm mt-1">Characters</div></div>
          <div className="stat-card"><div className="text-3xl font-display font-bold text-purple-400">{s.sentences}</div><div className="text-slate-500 text-sm mt-1">Sentences</div></div>
          <div className="stat-card"><div className="text-3xl font-display font-bold text-yellow-400">{s.readTime} min</div><div className="text-slate-500 text-sm mt-1">Read Time</div></div>
        </div>
        <div className="mb-6">
          <textarea value={text} onChange={e => setText(e.target.value)} placeholder="Start typing or paste your text here..." rows={12} className="text-base" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
          <div className="stat-card"><div className="text-2xl font-display font-bold text-white">{s.charsNoSpaces}</div><div className="text-slate-500 text-sm mt-1">Characters (no spaces)</div></div>
          <div className="stat-card"><div className="text-2xl font-display font-bold text-white">{s.paragraphs}</div><div className="text-slate-500 text-sm mt-1">Paragraphs</div></div>
          <div className="stat-card"><div className="text-2xl font-display font-bold text-white">{s.uniqueWords}</div><div className="text-slate-500 text-sm mt-1">Unique Words</div></div>
        </div>
        <div className="flex gap-3">
          <button onClick={() => setText('')} className="btn-secondary">Clear Text</button>
          <button onClick={() => navigator.clipboard.writeText(text)} className="btn-secondary">Copy Text</button>
        </div>
        <div className="space-y-6 mt-12">
          <div className="result-box">
            <h2 className="text-xl font-display font-bold text-white mb-4">Free Online Word Counter Tool</h2>
            <p className="text-slate-400 text-sm leading-relaxed">Our free word counter tool instantly counts words, characters, sentences, paragraphs and reading time as you type. Perfect for students writing essays, bloggers checking article length, social media managers counting post length, and writers meeting manuscript requirements. No sign up required.</p>
          </div>
          <div className="result-box">
            <h2 className="text-xl font-display font-bold text-white mb-4">How to Use the Word Counter</h2>
            <p className="text-slate-400 text-sm leading-relaxed">Just type or paste your text into the text box above and the results update instantly. The tool automatically counts your words, characters, sentences, paragraphs, reading time and unique words in real time. To clear the text, click the Clear Text button. To copy your text, use the Copy Text button.</p>
          </div>
          <div className="result-box">
            <h2 className="text-xl font-display font-bold text-white mb-4">Who Uses a Word Counter?</h2>
            <div className="text-slate-400 text-sm leading-relaxed space-y-3">
              <p><strong className="text-white">Students and academics</strong> use word counters to meet essay and assignment word count requirements.</p>
              <p><strong className="text-white">Bloggers and content writers</strong> check article length for SEO. Blog posts of 1,500 to 2,000 words tend to rank better in Google.</p>
              <p><strong className="text-white">Social media managers</strong> count characters for Twitter (280), Instagram (2,200) and LinkedIn (3,000).</p>
              <p><strong className="text-white">Authors and novelists</strong> track manuscript word counts. A typical novel is 70,000 to 100,000 words.</p>
            </div>
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