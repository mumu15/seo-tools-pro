'use client'
import { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FaqSchema from '../../components/FaqSchema'

const faqs = [
  { q: 'How many hashtags should I use on Instagram?', a: 'Instagram allows up to 30 hashtags per post. Research suggests using 5-10 highly relevant hashtags performs better than using all 30. Using too many hashtags can look spammy and may reduce engagement.' },
  { q: 'How many hashtags should I use on Twitter?', a: 'Twitter recommends using no more than 2 hashtags per tweet. Tweets with 1-2 hashtags get 21% more engagement than those with 3 or more.' },
  { q: 'How many hashtags should I use on LinkedIn?', a: 'LinkedIn recommends using 3-5 hashtags per post. Using more than 5 hashtags on LinkedIn can reduce the reach of your post.' },
  { q: 'Do hashtags still work in 2024?', a: 'Yes, hashtags still work in 2024. They help categorize content and make it discoverable to users who follow or search for specific topics. However their importance has decreased on some platforms as algorithms have improved.' },
  { q: 'Is this hashtag counter free?', a: 'Yes, completely free with no sign up required.' },
]

const LIMITS = [
  { platform: 'Instagram', limit: 30, recommended: '5-10', icon: '📸' },
  { platform: 'Twitter / X', limit: 2, recommended: '1-2', icon: '𝕏' },
  { platform: 'LinkedIn', limit: 30, recommended: '3-5', icon: '💼' },
  { platform: 'TikTok', limit: 100, recommended: '3-5', icon: '🎵' },
  { platform: 'Facebook', limit: 30, recommended: '2-3', icon: '👤' },
  { platform: 'YouTube', limit: 60, recommended: '3-5', icon: '▶️' },
]

export default function HashtagCounter() {
  const [text, setText] = useState('')

  const hashtags = text.match(/#[\w\u0590-\u05ff]+/gi) || []
  const uniqueHashtags = [...new Set(hashtags.map(h => h.toLowerCase()))]
  const count = hashtags.length

  return (
    <>
      <FaqSchema faqs={faqs} />
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Hashtag Counter</h1>
          <p className="text-slate-400 text-lg">Count hashtags and check platform limits instantly</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <label className="text-white font-medium block mb-3">Your Post or Caption</label>
            <textarea value={text} onChange={e => setText(e.target.value)}
              placeholder="Paste your social media post here including hashtags..."
              rows={10} />
            <button onClick={() => setText('')} className="btn-secondary mt-3 text-sm">Clear</button>

            {uniqueHashtags.length > 0 && (
              <div className="result-box mt-4">
                <h3 className="text-white font-medium mb-3 text-sm">Hashtags Found</h3>
                <div className="flex flex-wrap gap-2">
                  {uniqueHashtags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{background:'rgba(52,211,153,0.1)', color:'#34d399', border:'1px solid rgba(52,211,153,0.2)'}}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="stat-card text-center">
                <div className="text-4xl font-display font-bold text-emerald-400">{count}</div>
                <div className="text-slate-500 text-sm mt-1">Total Hashtags</div>
              </div>
              <div className="stat-card text-center">
                <div className="text-4xl font-display font-bold text-blue-400">{uniqueHashtags.length}</div>
                <div className="text-slate-500 text-sm mt-1">Unique Hashtags</div>
              </div>
            </div>

            <h3 className="text-white font-medium">Platform Limits</h3>
            {LIMITS.map((p, i) => {
              const over = count > p.limit
              const pct = Math.min(100, (count / p.limit) * 100)
              return (
                <div key={i} className="stat-card">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <span>{p.icon}</span>
                      <span className="text-white text-sm font-medium">{p.platform}</span>
                    </div>
                    <div className="text-right">
                      <span className={`text-sm font-mono font-bold ${over ? 'text-red-400' : 'text-emerald-400'}`}>{count}/{p.limit}</span>
                      <div className="text-slate-600 text-xs">Recommended: {p.recommended}</div>
                    </div>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{width:`${pct}%`, background: over ? 'linear-gradient(90deg,#ef4444,#dc2626)' : 'linear-gradient(90deg,#10b981,#34d399)'}} />
                  </div>
                  {over && <p className="text-red-400 text-xs mt-1">Over limit by {count - p.limit}</p>}
                </div>
              )
            })}
          </div>
        </div>

        <div className="space-y-6 mt-12">
          <div className="result-box">
            <h2 className="text-xl font-display font-bold text-white mb-4">Free Hashtag Counter Tool</h2>
            <p className="text-slate-400 text-sm leading-relaxed">Our free hashtag counter instantly counts all hashtags in your social media post and shows you how many you have used compared to the limits and recommendations for each major platform including Instagram, Twitter, LinkedIn, TikTok, Facebook and YouTube. Paste your caption or post and instantly see your hashtag count.</p>
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
