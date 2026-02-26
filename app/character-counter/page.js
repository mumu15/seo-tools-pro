'use client'
import { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const LIMITS = [
  { platform: 'Twitter/X Post', limit: 280, icon: '𝕏' },
  { platform: 'Instagram Caption', limit: 2200, icon: '📸' },
  { platform: 'Instagram Bio', limit: 150, icon: '📸' },
  { platform: 'Facebook Post', limit: 63206, icon: '👤' },
  { platform: 'LinkedIn Post', limit: 3000, icon: '💼' },
  { platform: 'Meta Description', limit: 160, icon: '🔍' },
  { platform: 'Meta Title', limit: 60, icon: '🔍' },
  { platform: 'SMS Message', limit: 160, icon: '💬' },
  { platform: 'YouTube Title', limit: 100, icon: '▶️' },
  { platform: 'YouTube Description', limit: 5000, icon: '▶️' },
]

export default function CharacterCounter() {
  const [text, setText] = useState('')

  const chars = text.length
  const charsNoSpaces = text.replace(/\s/g, '').length
  const words = text.trim() === '' ? 0 : text.trim().split(/\s+/).length
  const lines = text.split('\n').length

  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Character Counter
          </h1>
          <p className="text-slate-400 text-lg">Count characters for Twitter, Instagram, SMS, meta tags and more</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {[
            { label: 'Characters', value: chars, color: 'text-emerald-400' },
            { label: 'No Spaces', value: charsNoSpaces, color: 'text-blue-400' },
            { label: 'Words', value: words, color: 'text-purple-400' },
            { label: 'Lines', value: lines, color: 'text-yellow-400' },
          ].map((s, i) => (
            <div key={i} className="stat-card">
              <div className={`text-3xl font-display font-bold ${s.color}`}>{s.value}</div>
              <div className="text-slate-500 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <textarea
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Type or paste your text here..."
          rows={8}
          className="mb-6"
        />

        <h3 className="text-white font-display font-bold text-xl mb-4">Platform Limits</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {LIMITS.map((p, i) => {
            const pct = Math.min(100, (chars / p.limit) * 100)
            const over = chars > p.limit
            return (
              <div key={i} className="stat-card">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <span>{p.icon}</span>
                    <span className="text-white text-sm font-medium">{p.platform}</span>
                  </div>
                  <span className={`text-sm font-mono font-bold ${over ? 'text-red-400' : 'text-emerald-400'}`}>
                    {chars}/{p.limit}
                  </span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{
                    width: `${pct}%`,
                    background: over ? 'linear-gradient(90deg, #ef4444, #dc2626)' : 'linear-gradient(90deg, #10b981, #34d399)'
                  }} />
                </div>
                {over && <p className="text-red-400 text-xs mt-1">⚠️ {chars - p.limit} characters over limit</p>}
              </div>
            )
          })}
        </div>

        <div className="flex gap-3 mt-6">
          <button onClick={() => setText('')} className="btn-secondary">Clear</button>
          <button onClick={() => navigator.clipboard.writeText(text)} className="btn-secondary">Copy Text</button>
        </div>

        <div className="space-y-6 mt-12">
          <div className="result-box">
            <h2 className="text-xl font-display font-bold text-white mb-4">Free Online Character Counter</h2>
            <p className="text-slate-400 text-sm leading-relaxed">Our free character counter tool counts characters instantly as you type. It shows characters with spaces, characters without spaces, word count and line count. It also shows you exactly how many characters you have used compared to the limits of popular platforms like Twitter, Instagram, LinkedIn and more.</p>
          </div>
          <div className="result-box">
            <h2 className="text-xl font-display font-bold text-white mb-4">Character Limits for Popular Platforms</h2>
            <div className="text-slate-400 text-sm leading-relaxed space-y-3">
              <p><strong className="text-white">Twitter/X</strong> has a limit of 280 characters per tweet. This includes spaces and punctuation. URLs count as 23 characters regardless of their actual length.</p>
              <p><strong className="text-white">Instagram</strong> captions can be up to 2,200 characters but only the first 125 characters show before the "more" button. Instagram bios are limited to 150 characters.</p>
              <p><strong className="text-white">LinkedIn</strong> posts can be up to 3,000 characters. Articles on LinkedIn can be much longer.</p>
              <p><strong className="text-white">Meta descriptions</strong> should be under 160 characters. Google typically displays the first 155-160 characters in search results.</p>
              <p><strong className="text-white">SMS messages</strong> are limited to 160 characters per message. Longer messages are split into multiple SMS which costs more to send.</p>
            </div>
          </div>
          <div className="result-box">
            <h2 className="text-xl font-display font-bold text-white mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4 text-sm">
              <div className="border-b pb-4" style={{borderColor: "rgba(52,211,153,0.1)"}}>
                <h3 className="text-white font-semibold mb-2">What is the difference between characters with and without spaces?</h3>
                <p className="text-slate-400">Characters with spaces counts every character including spaces. Characters without spaces only counts letters, numbers and punctuation. Most social media platforms count spaces as characters.</p>
              </div>
              <div className="border-b pb-4" style={{borderColor: "rgba(52,211,153,0.1)"}}>
                <h3 className="text-white font-semibold mb-2">Is this character counter free?</h3>
                <p className="text-slate-400">Yes, completely free with no sign up required and no usage limits.</p>
              </div>
              <div className="pb-4">
                <h3 className="text-white font-semibold mb-2">Does it work on mobile?</h3>
                <p className="text-slate-400">Yes, our character counter works on all devices including phones and tablets.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}