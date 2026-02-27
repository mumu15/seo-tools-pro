'use client'
import { useState, useCallback } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FaqSchema from '../../components/FaqSchema'

const faqs = [
  { q: 'What is the ideal sentence length?', a: 'For most web content, the ideal average sentence length is 15 to 20 words. Academic writing can have longer sentences, while marketing copy tends to use shorter sentences for impact.' },
  { q: 'How does the sentence counter work?', a: 'Our tool detects sentences by looking for punctuation marks like periods, exclamation marks and question marks. It then counts the total number of sentences and calculates the average words per sentence.' },
  { q: 'Why does sentence length matter for SEO?', a: 'Shorter sentences improve readability which is a Google ranking factor. Content with good readability has lower bounce rates and higher engagement, both of which help with SEO rankings.' },
  { q: 'How can I improve my sentence structure?', a: 'Vary your sentence length by mixing short punchy sentences with longer ones. Aim for an average of 15-20 words per sentence. Break very long sentences into two shorter ones and remove unnecessary words.' },
  { q: 'Is this sentence counter free?', a: 'Yes, completely free with no sign up required and no usage limits.' },
]

export default function SentenceCounter() {
  const [text, setText] = useState('')

  const analyze = useCallback(() => {
    if (!text.trim()) return null
    const sentenceList = text.match(/[^.!?]+[.!?]+/g) || []
    const sentences = sentenceList.length
    const words = text.trim().split(/\s+/).length
    const paragraphs = text.split(/\n\s*\n/).filter(p => p.trim()).length || 1
    const avgWordsPerSentence = sentences > 0 ? (words / sentences).toFixed(1) : 0
    const longest = sentenceList.reduce((max, s) => s.split(/\s+/).length > max.split(/\s+/).length ? s : max, '')
    const shortest = sentenceList.reduce((min, s) => s.split(/\s+/).length < min.split(/\s+/).length ? s : min, sentenceList[0] || '')
    return { sentences, words, paragraphs, avgWordsPerSentence, longest: longest.trim(), shortest: shortest?.trim() }
  }, [text])

  const result = analyze()

  return (
    <>
      <FaqSchema faqs={faqs} />
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Sentence Counter</h1>
          <p className="text-slate-400 text-lg">Count sentences and analyze your writing structure</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <label className="text-white font-medium block mb-3">Your Text</label>
            <textarea value={text} onChange={e => setText(e.target.value)} placeholder="Paste your text here to analyze sentence structure..." rows={14} />
            <button onClick={() => setText('')} className="btn-secondary mt-3 text-sm">Clear</button>
          </div>

          <div>
            {!result ? (
              <div className="result-box text-center py-16">
                <div className="text-5xl mb-4">📊</div>
                <p className="text-slate-500">Paste your text to analyze sentences</p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: 'Sentences', value: result.sentences, color: 'text-emerald-400' },
                    { label: 'Words', value: result.words, color: 'text-blue-400' },
                    { label: 'Paragraphs', value: result.paragraphs, color: 'text-purple-400' },
                    { label: 'Avg words/sentence', value: result.avgWordsPerSentence, color: 'text-yellow-400' },
                  ].map((s, i) => (
                    <div key={i} className="stat-card">
                      <div className={`text-3xl font-display font-bold ${s.color}`}>{s.value}</div>
                      <div className="text-slate-500 text-sm mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>
                {result.longest && (
                  <div className="result-box">
                    <h4 className="text-white font-medium mb-2 text-sm">Longest Sentence</h4>
                    <p className="text-slate-400 text-sm leading-relaxed italic">"{result.longest}"</p>
                    <p className="text-slate-600 text-xs mt-1">{result.longest.split(/\s+/).length} words</p>
                  </div>
                )}
                {result.shortest && result.shortest !== result.longest && (
                  <div className="result-box">
                    <h4 className="text-white font-medium mb-2 text-sm">Shortest Sentence</h4>
                    <p className="text-slate-400 text-sm leading-relaxed italic">"{result.shortest}"</p>
                    <p className="text-slate-600 text-xs mt-1">{result.shortest.split(/\s+/).length} words</p>
                  </div>
                )}
                <div className="result-box">
                  <h4 className="text-white font-medium mb-2 text-sm">💡 Writing Tips</h4>
                  <ul className="space-y-1 text-slate-400 text-xs">
                    {parseFloat(result.avgWordsPerSentence) > 25 && <li>• Your sentences are long — try to keep them under 25 words</li>}
                    {parseFloat(result.avgWordsPerSentence) < 10 && <li>• Your sentences are very short — consider combining some for better flow</li>}
                    {parseFloat(result.avgWordsPerSentence) >= 10 && parseFloat(result.avgWordsPerSentence) <= 25 && <li>✅ Great sentence length! Easy to read.</li>}
                    <li>• Ideal average is 15–20 words per sentence</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-6 mt-12">
          <div className="result-box">
            <h2 className="text-xl font-display font-bold text-white mb-4">Free Online Sentence Counter</h2>
            <p className="text-slate-400 text-sm leading-relaxed">Our free sentence counter tool counts sentences, words and paragraphs in your text and shows your average sentence length. It also identifies your longest and shortest sentences to help you improve your writing structure. No sign up required — just paste your text and get instant results.</p>
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