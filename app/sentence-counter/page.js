'use client'
import { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FaqSchema from '../../components/FaqSchema'
import AdUnit from '../../components/AdUnit'
import BreadcrumbSchema from '../../components/BreadcrumbSchema'
import WebAppSchema from '../../components/WebAppSchema'

const faqs = [
  { q: 'What is the ideal sentence length for readability?', a: 'The ideal average sentence length is 15-20 words. Sentences under 10 words are very easy to read. Sentences over 30 words are hard to follow. Mix short and long sentences for better flow.' },
  { q: 'How many sentences should a paragraph have?', a: 'A paragraph should have 3-5 sentences on average. Web content works best with shorter paragraphs of 2-3 sentences to improve scannability.' },
  { q: 'How do I improve my sentence structure?', a: 'Vary your sentence length, avoid starting too many sentences with the same word, use active voice instead of passive voice and break up very long sentences into shorter ones.' },
  { q: 'What is a good sentence count for a blog post?', a: 'A 1,500 word blog post typically has 75-100 sentences at an average of 15-20 words per sentence. Quality and clarity matter more than sentence count.' },
  { q: 'How many words per sentence is too many?', a: 'Sentences over 25 words become harder to read. Sentences over 35 words are considered very hard to read and should be broken up into shorter sentences.' },
]

export default function SentenceCounter() {
  const [text, setText] = useState('')
  const [copied, setCopied] = useState(false)

  const sentences = text.trim() === '' ? [] : text.match(/[^.!?]+[.!?]+/g) || (text.trim() ? [text.trim()] : [])
  const sentenceCount = sentences.length
  const words = text.trim() === '' ? 0 : text.trim().split(/\s+/).length
  const avgWordsPerSentence = sentenceCount === 0 ? 0 : Math.round(words / sentenceCount)
  const paragraphs = text.trim() === '' ? 0 : text.split(/\n+/).filter(p => p.trim()).length || (text.trim() ? 1 : 0)

  const longestSentence = sentences.reduce((a, b) => 
    (a.trim().split(/\s+/).length > b.trim().split(/\s+/).length ? a : b), '')

  const getReadabilityTip = () => {
    if (sentenceCount === 0) return null
    if (avgWordsPerSentence <= 15) return { color: 'text-emerald-400', icon: '✅', tip: 'Excellent! Your average sentence length is ideal for easy reading.' }
    if (avgWordsPerSentence <= 20) return { color: 'text-blue-400', icon: '👍', tip: 'Good sentence length. Your content is easy to read.' }
    if (avgWordsPerSentence <= 25) return { color: 'text-yellow-400', icon: '⚠️', tip: 'Sentences are getting long. Try breaking some up for better readability.' }
    return { color: 'text-red-400', icon: '❌', tip: 'Sentences are too long on average. Break them up to improve readability.' }
  }

  const tip = getReadabilityTip()

  const copyResults = () => {
    const summary = `Sentence Analysis:\nSentences: ${sentenceCount}\nWords: ${words}\nParagraphs: ${paragraphs}\nAvg Words per Sentence: ${avgWordsPerSentence}\nLongest Sentence: ${longestSentence.trim()}`
    navigator.clipboard.writeText(summary).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <>
      <FaqSchema faqs={faqs} />
      <BreadcrumbSchema items={[{"name":"Home","url":"https://www.wordcountertool.net"},{"name":"Sentence Counter","url":"https://www.wordcountertool.net/sentence-counter"}]} />
      <WebAppSchema name="Free Sentence Counter" description="Count sentences and analyze average sentence length. Free sentence counter with writing quality tips." url="https://www.wordcountertool.net/sentence-counter" />
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Free Sentence Counter Online</h1>
          <p className="text-slate-400 text-lg">Count sentences and analyze average sentence length — get writing quality tips instantly</p>
        </div>

        <div className="flex gap-2 mb-3 justify-end">
          <button onClick={() => setText('')}
            className="px-3 py-1.5 rounded-lg text-xs font-medium transition-all"
            style={{background:'rgba(255,255,255,0.05)',border:'1px solid rgba(255,255,255,0.1)',color:'#94a3b8'}}>
            🗑️ Clear
          </button>
          <button onClick={copyResults}
            className="px-3 py-1.5 rounded-lg text-xs font-medium transition-all"
            style={{background: copied ? 'rgba(52,211,153,0.2)' : 'rgba(52,211,153,0.1)', border:'1px solid rgba(52,211,153,0.3)', color: copied ? '#34d399' : '#94a3b8'}}>
            {copied ? '✅ Copied!' : '📋 Copy Results'}
          </button>
        </div>

        <textarea
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Paste your text here to analyze sentence structure..."
          className="w-full h-48 px-4 py-3 rounded-xl text-white text-sm outline-none resize-none mb-6 leading-relaxed"
          style={{background:'rgba(255,255,255,0.03)',border:'1px solid rgba(52,211,153,0.15)',boxShadow: text.length > 0 ? '0 0 0 2px rgba(52,211,153,0.15)' : 'none',transition:'box-shadow 0.3s ease'}}
        />

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {[
            { label: 'Sentences', value: sentenceCount, color: 'text-emerald-400' },
            { label: 'Words', value: words, color: 'text-blue-400' },
            { label: 'Paragraphs', value: paragraphs, color: 'text-purple-400' },
            { label: 'Avg Words/Sentence', value: avgWordsPerSentence, color: 'text-yellow-400' },
          ].map((stat, i) => (
            <div key={i} className="stat-card">
              <div className={`text-2xl font-display font-bold ${stat.color}`}>{stat.value}</div>
              <div className="text-slate-500 text-xs mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Writing Quality Tip */}
        {tip && (
          <div className="result-box mb-6" style={{borderColor:`rgba(52,211,153,0.2)`}}>
            <div className="flex items-start gap-3">
              <span className="text-2xl">{tip.icon}</span>
              <div>
                <h3 className={`font-bold mb-1 ${tip.color}`}>Writing Quality</h3>
                <p className="text-slate-400 text-sm">{tip.tip}</p>
              </div>
            </div>
          </div>
        )}

        {/* Longest Sentence */}
        {longestSentence && (
          <div className="result-box mb-6">
            <h3 className="text-white font-bold text-sm mb-2">Longest Sentence ({longestSentence.trim().split(/\s+/).length} words)</h3>
            <p className="text-slate-400 text-sm italic leading-relaxed">"{longestSentence.trim()}"</p>
          </div>
        )}

        {/* Sentence Length Guide */}
        <div className="result-box mb-6">
          <h3 className="text-white font-bold mb-4">Sentence Length Guide</h3>
          <div className="space-y-2">
            {[
              { range: 'Under 10 words', label: 'Very Easy', color: 'bg-emerald-500' },
              { range: '10-15 words', label: 'Easy', color: 'bg-green-500' },
              { range: '15-20 words', label: 'Ideal', color: 'bg-blue-500' },
              { range: '20-25 words', label: 'Moderate', color: 'bg-yellow-500' },
              { range: '25-30 words', label: 'Hard', color: 'bg-orange-500' },
              { range: 'Over 30 words', label: 'Very Hard', color: 'bg-red-500' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${item.color}`} />
                <span className="text-slate-400 text-sm w-32">{item.range}</span>
                <span className="text-white text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <AdUnit slot="3763639977" />

        {/* Internal Link */}
        <div className="mt-4 p-4 rounded-xl border border-emerald-500/20" style={{background:'rgba(52,211,153,0.05)'}}>
          <p className="text-slate-400 text-sm mb-2">📖 Related Guide</p>
          <a href="/blog/ideal-blog-post-length-for-seo" className="text-emerald-400 font-semibold hover:underline">Ideal Blog Post Length for SEO in 2026</a>
        </div>

        {/* Related Tools */}
        <div className="mt-12">
          <h2 className="text-2xl font-display font-bold text-white mb-6">You Might Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {href:'/word-counter',icon:'📝',name:'Word Counter',desc:'Count words and characters instantly'},
              {href:'/readability-checker',icon:'📖',name:'Readability Checker',desc:'Check your readability score'},
              {href:'/character-counter',icon:'🔤',name:'Character Counter',desc:'Count characters for any platform'},
              {href:'/reading-time',icon:'⏱️',name:'Reading Time',desc:'Estimate reading time for your content'},
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
