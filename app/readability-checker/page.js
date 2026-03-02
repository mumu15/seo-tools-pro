'use client'
import { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FaqSchema from '../../components/FaqSchema'
import AdUnit from '../../components/AdUnit'
import BreadcrumbSchema from '../../components/BreadcrumbSchema'
import WebAppSchema from '../../components/WebAppSchema'

const faqs = [
  { q: 'What is a good Flesch-Kincaid readability score?', a: 'A score of 60-70 is considered good for most web content and is understood by 13-15 year olds. Higher scores mean easier reading. Aim for 60+ for blog posts and general content.' },
  { q: 'What readability score does Google prefer?', a: 'Google does not have an official readability requirement but content scoring 60-70 on the Flesch Reading Ease scale tends to perform well. Easy to read content gets more engagement and lower bounce rates.' },
  { q: 'How do I improve my readability score?', a: 'Use shorter sentences under 20 words, choose simpler words, break up long paragraphs, use active voice instead of passive voice and avoid jargon where possible.' },
  { q: 'What reading level should I write for?', a: 'Most popular websites including news sites target a 6th to 8th grade reading level. Unless writing for experts always aim to write as simply as possible without losing meaning.' },
  { q: 'What is the difference between Flesch Reading Ease and Flesch-Kincaid Grade Level?', a: 'Flesch Reading Ease gives a score from 0-100 where higher is easier. Flesch-Kincaid Grade Level gives a US school grade level. Both use sentence length and syllable count.' },
]

function countSyllables(word) {
  word = word.toLowerCase()
  if (word.length <= 3) return 1
  word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '')
  word = word.replace(/^y/, '')
  const matches = word.match(/[aeiouy]{1,2}/g)
  return matches ? matches.length : 1
}

function getGradeLabel(score) {
  if (score >= 90) return { grade: 'Very Easy', level: '5th grade', color: '#34d399', bg: 'rgba(52,211,153,0.15)' }
  if (score >= 80) return { grade: 'Easy', level: '6th grade', color: '#34d399', bg: 'rgba(52,211,153,0.1)' }
  if (score >= 70) return { grade: 'Fairly Easy', level: '7th grade', color: '#60a5fa', bg: 'rgba(96,165,250,0.1)' }
  if (score >= 60) return { grade: 'Standard', level: '8th-9th grade', color: '#60a5fa', bg: 'rgba(96,165,250,0.1)' }
  if (score >= 50) return { grade: 'Fairly Difficult', level: '10th-12th grade', color: '#f59e0b', bg: 'rgba(245,158,11,0.1)' }
  if (score >= 30) return { grade: 'Difficult', level: 'College level', color: '#f97316', bg: 'rgba(249,115,22,0.1)' }
  return { grade: 'Very Difficult', level: 'Professional', color: '#ef4444', bg: 'rgba(239,68,68,0.1)' }
}

export default function ReadabilityChecker() {
  const [text, setText] = useState('')

  const words = text.trim() === '' ? [] : text.trim().split(/\s+/)
  const wordCount = words.length
  const sentences = text.trim() === '' ? 0 : (text.match(/[.!?]+/g) || []).length || 1
  const syllables = words.reduce((sum, word) => sum + countSyllables(word.replace(/[^a-zA-Z]/g, '')), 0)

  const fleschScore = wordCount === 0 ? 0 : Math.round(
    206.835 - 1.015 * (wordCount / sentences) - 84.6 * (syllables / wordCount)
  )
  const score = Math.max(0, Math.min(100, fleschScore))
  const gradeInfo = getGradeLabel(score)

  const avgSentenceLength = wordCount === 0 ? 0 : Math.round(wordCount / sentences)
  const avgSyllablesPerWord = wordCount === 0 ? 0 : (syllables / wordCount).toFixed(1)

  const getTips = () => {
    const tips = []
    if (avgSentenceLength > 20) tips.push('✂️ Shorten your sentences. Aim for under 20 words per sentence.')
    if (avgSyllablesPerWord > 1.8) tips.push('📖 Use simpler words with fewer syllables.')
    if (score >= 60) tips.push('✅ Good readability! Your content is easy to read.')
    if (score < 50) tips.push('⚠️ Consider rewriting complex sentences in simpler language.')
    return tips
  }

  return (
    <>
      <FaqSchema faqs={faqs} />
      <BreadcrumbSchema items={[{"name":"Home","url":"https://www.wordcountertool.net"},{"name":"Readability Checker","url":"https://www.wordcountertool.net/readability-checker"}]} />
      <WebAppSchema name="Free Readability Checker" description="Check your Flesch-Kincaid readability score instantly. Free readability checker with grade level and improvement tips." url="https://www.wordcountertool.net/readability-checker" />
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Free Readability Score Checker</h1>
          <p className="text-slate-400 text-lg">Check your Flesch-Kincaid readability score — get grade level and improvement tips instantly</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <button onClick={() => setText('')}
              className="px-3 py-1.5 rounded-lg text-xs font-medium transition-all mb-3 float-right"
              style={{background:'rgba(255,255,255,0.05)',border:'1px solid rgba(255,255,255,0.1)',color:'#94a3b8'}}>
              🗑️ Clear
            </button>
            <textarea
              value={text}
              onChange={e => setText(e.target.value)}
              placeholder="Paste your content here to check readability..."
              className="w-full h-56 px-4 py-3 rounded-xl text-white text-sm outline-none resize-none mb-4 leading-relaxed"
              style={{background:'rgba(255,255,255,0.03)',border:'1px solid rgba(52,211,153,0.15)',boxShadow: text.length > 0 ? '0 0 0 2px rgba(52,211,153,0.15)' : 'none',transition:'box-shadow 0.3s ease'}}
            />

            <div className="grid grid-cols-3 gap-3 mb-4">
              {[
                { label: 'Words', value: wordCount, color: 'text-emerald-400' },
                { label: 'Sentences', value: sentences, color: 'text-blue-400' },
                { label: 'Avg Sentence Length', value: avgSentenceLength + ' words', color: 'text-purple-400' },
              ].map((stat, i) => (
                <div key={i} className="stat-card">
                  <div className={`text-xl font-display font-bold ${stat.color}`}>{stat.value}</div>
                  <div className="text-slate-500 text-xs mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Improvement Tips */}
            {wordCount > 0 && (
              <div className="result-box">
                <h3 className="text-white font-bold mb-3">Improvement Tips</h3>
                <div className="space-y-2">
                  {getTips().map((tip, i) => (
                    <p key={i} className="text-slate-400 text-sm">{tip}</p>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Score Panel */}
          <div className="space-y-4">
            <div className="result-box text-center py-6">
              <div className="text-slate-400 text-sm mb-3">Flesch Reading Ease</div>
              <div className="relative w-32 h-32 mx-auto mb-4">
                <svg className="w-32 h-32 -rotate-90" viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="10"/>
                  <circle cx="60" cy="60" r="50" fill="none" stroke={gradeInfo.color} strokeWidth="10"
                    strokeDasharray={2 * Math.PI * 50}
                    strokeDashoffset={2 * Math.PI * 50 * (1 - score / 100)}
                    style={{transition:'stroke-dashoffset 0.5s ease'}}/>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-bold" style={{color:gradeInfo.color}}>{score}</span>
                </div>
              </div>
              <div className="font-bold text-lg mb-1" style={{color:gradeInfo.color}}>{gradeInfo.grade}</div>
              <div className="text-slate-500 text-sm">{gradeInfo.level}</div>
            </div>

            {/* Score Scale */}
            <div className="result-box">
              <h3 className="text-white font-bold text-sm mb-3">Score Scale</h3>
              <div className="space-y-1.5">
                {[
                  { range: '90-100', label: 'Very Easy', color: '#34d399' },
                  { range: '70-90', label: 'Easy', color: '#60a5fa' },
                  { range: '60-70', label: 'Standard ✓', color: '#818cf8' },
                  { range: '50-60', label: 'Fairly Difficult', color: '#f59e0b' },
                  { range: '0-50', label: 'Difficult', color: '#ef4444' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between text-xs">
                    <span style={{color:item.color}}>{item.range}</span>
                    <span className="text-slate-400">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <AdUnit slot="3763639977" />

        {/* Internal Link */}
        <div className="mt-8 p-4 rounded-xl border border-emerald-500/20" style={{background:'rgba(52,211,153,0.05)'}}>
          <p className="text-slate-400 text-sm mb-2">📖 Related Guide</p>
          <a href="/blog/how-to-improve-readability-score" className="text-emerald-400 font-semibold hover:underline">How to Improve Your Readability Score (Flesch-Kincaid Guide)</a>
        </div>

        {/* Related Tools */}
        <div className="mt-12">
          <h2 className="text-2xl font-display font-bold text-white mb-6">You Might Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {href:'/word-counter',icon:'📝',name:'Word Counter',desc:'Count words and characters instantly'},
              {href:'/keyword-density',icon:'🔍',name:'Keyword Density',desc:'Analyze keyword frequency in your content'},
              {href:'/sentence-counter',icon:'📋',name:'Sentence Counter',desc:'Count sentences and analyze structure'},
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
