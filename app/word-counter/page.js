'use client'
import { useState, useCallback } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

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
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Word Counter
          </h1>
          <p className="text-slate-400 text-lg">Count words, characters, sentences and more — instantly as you type</p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {[
            { label: 'Words', value: s.words, color: 'text-emerald-400' },
            { label: 'Characters', value: s.chars, color: 'text-blue-400' },
            { label: 'Sentences', value: s.sentences, color: 'text-purple-400' },
            { label: 'Read Time', value: `${s.readTime} min`, color: 'text-yellow-400' },
          ].map((stat, i) => (
            <div key={i} className="stat-card">
              <div className={`text-3xl font-display font-bold ${stat.color}`}>{stat.value}</div>
              <div className="text-slate-500 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Textarea */}
        <div className="mb-6">
          <textarea
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Start typing or paste your text here..."
            rows={12}
            className="text-base"
          />
        </div>

        {/* More Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
          {[
            { label: 'Characters (no spaces)', value: s.charsNoSpaces },
            { label: 'Paragraphs', value: s.paragraphs },
            { label: 'Unique Words', value: s.uniqueWords },
          ].map((stat, i) => (
            <div key={i} className="stat-card">
              <div className="text-2xl font-display font-bold text-white">{stat.value}</div>
              <div className="text-slate-500 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="flex gap-3">
          <button onClick={() => setText('')} className="btn-secondary">Clear Text</button>
          <button onClick={() => navigator.clipboard.writeText(text)} className="btn-secondary">Copy Text</button>
        </div>

        {/* SEO Content */}
        <div className="result-box mt-12">
          <h2 className="text-xl font-display font-bold text-white mb-4">About This Word Counter</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Our free word counter tool instantly counts words, characters, sentences, paragraphs and reading time as you type. 
            Perfect for students writing essays, bloggers checking article length, social media managers counting post length, 
            and writers meeting manuscript requirements. No sign up required — just paste your text and get instant results.
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
