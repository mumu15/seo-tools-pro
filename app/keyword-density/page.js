'use client'
import { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FaqSchema from '../../components/FaqSchema'
import AdUnit from '../../components/AdUnit'
import BreadcrumbSchema from '../../components/BreadcrumbSchema'
import WebAppSchema from '../../components/WebAppSchema'

const faqs = [
  { q: 'What is keyword density?', a: 'Keyword density is the percentage of times a keyword appears in your content compared to the total word count. A density of 1-2% is generally considered ideal for SEO.' },
  { q: 'What is the ideal keyword density for SEO?', a: 'Most SEO experts recommend a keyword density of 1-2%. Going above 3-4% can be seen as keyword stuffing by Google and may result in ranking penalties.' },
  { q: 'How do I calculate keyword density?', a: 'Keyword density = (Number of times keyword appears / Total word count) x 100. For example if your keyword appears 10 times in a 1000 word article the density is 1%.' },
  { q: 'Does keyword density still matter for SEO?', a: 'Keyword density is less important than it used to be. Google now focuses more on semantic relevance and topical authority. However having your keyword appear naturally 1-2% of the time is still recommended.' },
  { q: 'What is keyword stuffing?', a: 'Keyword stuffing is the practice of overusing keywords in content to manipulate search rankings. It results in poor user experience and Google may penalize pages that keyword stuff.' },
]

const STOPWORDS = new Set(['the','a','an','and','or','but','in','on','at','to','for','of','with','by','from','is','are','was','were','be','been','being','have','has','had','do','does','did','will','would','could','should','may','might','it','its','this','that','these','those','i','you','he','she','we','they','my','your','his','her','our','their','what','which','who','when','where','how','all','as','if','than','then','so','up','out','about','into','through','after','before','not','no','can'])

export default function KeywordDensity() {
  const [text, setText] = useState('')
  const [showAll, setShowAll] = useState(false)
  const [copied, setCopied] = useState(false)

  const words = text.trim() === '' ? [] : text.toLowerCase().match(/\b[a-z]{3,}\b/g) || []
  const totalWords = text.trim() === '' ? 0 : text.trim().split(/\s+/).length

  const freq = {}
  words.forEach(w => {
    if (!STOPWORDS.has(w)) freq[w] = (freq[w] || 0) + 1
  })

  const sorted = Object.entries(freq).sort((a, b) => b[1] - a[1])
  const displayed = showAll ? sorted : sorted.slice(0, 15)

  const exportCSV = () => {
    const csv = 'Keyword,Count,Density\n' + sorted.map(([word, count]) =>
      `${word},${count},${((count / totalWords) * 100).toFixed(2)}%`
    ).join('\n')
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'keyword-density.csv'
    a.click()
    URL.revokeObjectURL(url)
  }

  const getDensityColor = (pct) => {
    if (pct < 0.5) return '#64748b'
    if (pct <= 2) return '#34d399'
    if (pct <= 3) return '#f59e0b'
    return '#ef4444'
  }

  const getDensityLabel = (pct) => {
    if (pct < 0.5) return 'Low'
    if (pct <= 2) return 'Ideal'
    if (pct <= 3) return 'High'
    return 'Too High'
  }

  return (
    <>
      <FaqSchema faqs={faqs} />
      <BreadcrumbSchema items={[{"name":"Home","url":"https://www.wordcountertool.net"},{"name":"Keyword Density Checker","url":"https://www.wordcountertool.net/keyword-density"}]} />
      <WebAppSchema name="Keyword Density Checker" description="Analyze keyword frequency and density in your content for SEO. Free keyword density checker with CSV export." url="https://www.wordcountertool.net/keyword-density" />
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Keyword Density Checker</h1>
          <p className="text-slate-400 text-lg">Analyze keyword frequency and density — ideal SEO keyword density is 1-2%</p>
        </div>

        <div className="flex gap-2 mb-3 justify-end">
          <button onClick={() => setText('')}
            className="px-3 py-1.5 rounded-lg text-xs font-medium transition-all"
            style={{background:'rgba(255,255,255,0.05)',border:'1px solid rgba(255,255,255,0.1)',color:'#94a3b8'}}>
            🗑️ Clear
          </button>
          {sorted.length > 0 && (
            <button onClick={exportCSV}
              className="px-3 py-1.5 rounded-lg text-xs font-medium transition-all"
              style={{background:'rgba(52,211,153,0.1)',border:'1px solid rgba(52,211,153,0.3)',color:'#34d399'}}>
              ⬇️ Export CSV
            </button>
          )}
        </div>

        <textarea
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Paste your content here to analyze keyword density..."
          className="w-full h-48 px-4 py-3 rounded-xl text-white text-sm outline-none resize-none mb-6 leading-relaxed"
          style={{background:'rgba(255,255,255,0.03)',border:'1px solid rgba(52,211,153,0.15)',boxShadow: text.length > 0 ? '0 0 0 2px rgba(52,211,153,0.15)' : 'none',transition:'box-shadow 0.3s ease'}}
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
          {[
            { label: 'Total Words', value: totalWords, color: 'text-emerald-400' },
            { label: 'Unique Keywords', value: sorted.length, color: 'text-blue-400' },
            { label: 'Top Keyword', value: sorted[0] ? sorted[0][0] : '—', color: 'text-purple-400' },
          ].map((stat, i) => (
            <div key={i} className="stat-card">
              <div className={`text-xl font-display font-bold ${stat.color} truncate`}>{stat.value}</div>
              <div className="text-slate-500 text-xs mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {displayed.length > 0 && (
          <div className="result-box">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-white font-bold">Keyword Frequency</h3>
              <div className="flex gap-3 text-xs text-slate-500">
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-400 inline-block"/>&nbsp;Ideal (1-2%)</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-yellow-400 inline-block"/>&nbsp;High</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-red-400 inline-block"/>&nbsp;Too High</span>
              </div>
            </div>
            <div className="space-y-2">
              {displayed.map(([word, count], i) => {
                const pct = totalWords > 0 ? ((count / totalWords) * 100) : 0
                const color = getDensityColor(pct)
                const barWidth = Math.min(100, (count / sorted[0][1]) * 100)
                return (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-white text-sm w-28 truncate font-medium">{word}</span>
                    <div className="flex-1 h-2 rounded-full overflow-hidden" style={{background:'rgba(255,255,255,0.05)'}}>
                      <div className="h-full rounded-full transition-all duration-300" style={{width:`${barWidth}%`,background:color}}/>
                    </div>
                    <span className="text-slate-400 text-xs w-8 text-right">{count}x</span>
                    <span className="text-xs w-16 text-right font-medium" style={{color}}>{pct.toFixed(2)}% <span className="text-slate-600">({getDensityLabel(pct)})</span></span>
                  </div>
                )
              })}
            </div>
            {sorted.length > 15 && (
              <button onClick={() => setShowAll(!showAll)}
                className="mt-4 text-emerald-400 text-sm hover:underline">
                {showAll ? 'Show Less ↑' : `Show All ${sorted.length} Keywords ↓`}
              </button>
            )}
          </div>
        )}

        <AdUnit slot="3763639977" />

        {/* Internal Link */}
        <div className="mt-8 p-4 rounded-xl border border-emerald-500/20" style={{background:'rgba(52,211,153,0.05)'}}>
          <p className="text-slate-400 text-sm mb-2">📖 Related Guide</p>
          <a href="/blog/keyword-density-seo-guide" className="text-emerald-400 font-semibold hover:underline">Keyword Density SEO Guide: What Percentage is Ideal in 2026?</a>
        </div>

        {/* Related Tools */}
        <div className="mt-12">
          <h2 className="text-2xl font-display font-bold text-white mb-6">You Might Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {href:'/word-counter',icon:'📝',name:'Word Counter',desc:'Count words and characters instantly'},
              {href:'/meta-tag-generator',icon:'🏷️',name:'Meta Tag Generator',desc:'Generate perfect SEO meta tags'},
              {href:'/readability-checker',icon:'📖',name:'Readability Checker',desc:'Check your content readability score'},
              {href:'/character-counter',icon:'🔤',name:'Character Counter',desc:'Count characters for any platform'},
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
