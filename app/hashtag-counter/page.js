'use client'
import { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FaqSchema from '../../components/FaqSchema'
import AdUnit from '../../components/AdUnit'
import BreadcrumbSchema from '../../components/BreadcrumbSchema'
import WebAppSchema from '../../components/WebAppSchema'

const faqs = [
  { q: 'How many hashtags should I use on Instagram?', a: 'Instagram allows up to 30 hashtags per post. Research suggests 3-5 highly relevant hashtags perform better than 30 generic ones. For Reels use 3-10 hashtags.' },
  { q: 'How many hashtags should I use on Twitter?', a: 'Twitter recommends using no more than 2 hashtags per tweet. Using more than 2 hashtags can reduce engagement.' },
  { q: 'How many hashtags should I use on TikTok?', a: 'TikTok recommends using 3-5 relevant hashtags. Always include one broad hashtag, one niche hashtag and one trending hashtag.' },
  { q: 'How many hashtags should I use on LinkedIn?', a: 'LinkedIn recommends using 3-5 hashtags per post. LinkedIn hashtags help your content get discovered by people following those topics.' },
  { q: 'Do hashtags help reach on Instagram?', a: 'Hashtags can help new accounts get discovered but their impact has decreased over time. Focus on relevant niche hashtags rather than the most popular generic ones.' },
]

const PLATFORMS = [
  { name: 'Instagram', limit: 30, recommended: '3-5', color: '#e1306c', icon: '📸' },
  { name: 'Twitter/X', limit: 2, recommended: '1-2', color: '#1da1f2', icon: '🐦' },
  { name: 'TikTok', limit: 100, recommended: '3-5', color: '#010101', icon: '🎵' },
  { name: 'LinkedIn', limit: 30, recommended: '3-5', color: '#0a66c2', icon: '💼' },
  { name: 'Facebook', limit: 30, recommended: '2-3', color: '#1877f2', icon: '👥' },
  { name: 'YouTube', limit: 15, recommended: '3-5', color: '#ff0000', icon: '▶️' },
]

export default function HashtagCounter() {
  const [text, setText] = useState('')
  const [copied, setCopied] = useState(false)

  const hashtags = (text.match(/#[\w]+/g) || [])
  const count = hashtags.length
  const unique = new Set(hashtags.map(h => h.toLowerCase())).size

  const copyHashtags = () => {
    navigator.clipboard.writeText(hashtags.join(' ')).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <>
      <FaqSchema faqs={faqs} />
      <BreadcrumbSchema items={[{"name":"Home","url":"https://www.wordcountertool.net"},{"name":"Hashtag Counter","url":"https://www.wordcountertool.net/hashtag-counter"}]} />
      <WebAppSchema name="Free Hashtag Counter" description="Count hashtags for Instagram, Twitter, TikTok and more with platform limit bars." url="https://www.wordcountertool.net/hashtag-counter" />
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Free Hashtag Counter</h1>
          <p className="text-slate-400 text-lg">Count hashtags and check platform limits for Instagram, Twitter, TikTok and LinkedIn</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left - Input */}
          <div className="lg:col-span-2">
            <div className="flex gap-2 mb-3 justify-end">
              <button onClick={() => setText('')}
                className="px-3 py-1.5 rounded-lg text-xs font-medium transition-all"
                style={{background:'rgba(255,255,255,0.05)',border:'1px solid rgba(255,255,255,0.1)',color:'#94a3b8'}}>
                🗑️ Clear
              </button>
              <button onClick={copyHashtags}
                className="px-3 py-1.5 rounded-lg text-xs font-medium transition-all"
                style={{background: copied ? 'rgba(52,211,153,0.2)' : 'rgba(52,211,153,0.1)', border:'1px solid rgba(52,211,153,0.3)', color: copied ? '#34d399' : '#94a3b8'}}>
                {copied ? '✅ Copied!' : '📋 Copy Hashtags'}
              </button>
            </div>
            <textarea
              value={text}
              onChange={e => setText(e.target.value)}
              placeholder="Paste your caption or hashtags here... #example #hashtag"
              className="w-full h-48 px-4 py-3 rounded-xl text-white text-sm outline-none resize-none mb-4 leading-relaxed"
              style={{background:'rgba(255,255,255,0.03)',border:'1px solid rgba(52,211,153,0.15)',boxShadow: text.length > 0 ? '0 0 0 2px rgba(52,211,153,0.15)' : 'none',transition:'box-shadow 0.3s ease'}}
            />

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 mb-4">
              {[
                { label: 'Total Hashtags', value: count, color: 'text-emerald-400' },
                { label: 'Unique Hashtags', value: unique, color: 'text-blue-400' },
                { label: 'Duplicates', value: count - unique, color: 'text-red-400' },
              ].map((stat, i) => (
                <div key={i} className="stat-card">
                  <div className={`text-2xl font-display font-bold ${stat.color}`}>{stat.value}</div>
                  <div className="text-slate-500 text-xs mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Hashtag List */}
            {hashtags.length > 0 && (
              <div className="result-box">
                <h3 className="text-white font-bold text-sm mb-3">Detected Hashtags</h3>
                <div className="flex flex-wrap gap-2">
                  {[...new Set(hashtags)].map((tag, i) => (
                    <span key={i} className="px-2 py-1 rounded-lg text-xs font-medium"
                      style={{background:'rgba(52,211,153,0.1)',color:'#34d399',border:'1px solid rgba(52,211,153,0.2)'}}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right - Platform Limits */}
          <div className="result-box">
            <h3 className="text-white font-bold mb-4">Platform Limits</h3>
            <div className="space-y-4">
              {PLATFORMS.map((platform, i) => {
                const pct = Math.min(100, (count / platform.limit) * 100)
                const remaining = platform.limit - count
                const over = remaining < 0
                return (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-slate-300 text-xs flex items-center gap-1">
                        <span>{platform.icon}</span>{platform.name}
                      </span>
                      <span className={`text-xs font-bold ${over ? 'text-red-400' : 'text-slate-400'}`}>
                        {count}/{platform.limit}
                      </span>
                    </div>
                    <div className="w-full h-2 rounded-full overflow-hidden mb-1" style={{background:'rgba(255,255,255,0.05)'}}>
                      <div className="h-full rounded-full transition-all duration-300"
                        style={{width:`${pct}%`,background: over ? '#ef4444' : pct > 80 ? '#f59e0b' : platform.color}} />
                    </div>
                    <div className="text-slate-600 text-xs">Recommended: {platform.recommended}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <AdUnit slot="3763639977" />

        {/* Internal Link */}
        <div className="mt-8 p-4 rounded-xl border border-emerald-500/20" style={{background:'rgba(52,211,153,0.05)'}}>
          <p className="text-slate-400 text-sm mb-2">📖 Related Guide</p>
          <a href="/blog/how-many-hashtags-to-use" className="text-emerald-400 font-semibold hover:underline">How Many Hashtags to Use on Instagram, Twitter and LinkedIn (2026)</a>
        </div>

        {/* Related Tools */}
        <div className="mt-12">
          <h2 className="text-2xl font-display font-bold text-white mb-6">You Might Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {href:'/twitter-thread-counter',icon:'🧵',name:'Thread Counter',desc:'Plan your Twitter threads'},
              {href:'/character-counter',icon:'🔤',name:'Character Counter',desc:'Count characters for any platform'},
              {href:'/word-counter',icon:'📝',name:'Word Counter',desc:'Count words and characters instantly'},
              {href:'/meta-tag-generator',icon:'🏷️',name:'Meta Tag Generator',desc:'Generate perfect SEO meta tags'},
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
