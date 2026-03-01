'use client'
import { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'


export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <Header />
      <main className="max-w-2xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Contact Us</h1>
          <p className="text-slate-400 text-lg">We read every message and respond within 24-48 hours</p>
        </div>

        {submitted ? (
          <div className="result-box text-center py-12">
            <div className="text-5xl mb-4">✅</div>
            <h2 className="text-2xl font-bold text-white mb-2">Message Sent!</h2>
            <p className="text-slate-400">Thank you for reaching out. We will get back to you within 24-48 hours.</p>
          </div>
        ) : (
          <div className="result-box">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-slate-400 text-sm mb-2">Your Name</label>
                <input
                  type="text" required
                  value={form.name}
                  onChange={e => setForm({...form, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl text-white text-sm outline-none transition-all"
                  style={{background:'rgba(255,255,255,0.05)',border:'1px solid rgba(52,211,153,0.2)'}}
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label className="block text-slate-400 text-sm mb-2">Email Address</label>
                <input
                  type="email" required
                  value={form.email}
                  onChange={e => setForm({...form, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl text-white text-sm outline-none transition-all"
                  style={{background:'rgba(255,255,255,0.05)',border:'1px solid rgba(52,211,153,0.2)'}}
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-slate-400 text-sm mb-2">Subject</label>
                <select
                  value={form.subject}
                  onChange={e => setForm({...form, subject: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl text-white text-sm outline-none"
                  style={{background:'rgba(255,255,255,0.05)',border:'1px solid rgba(52,211,153,0.2)'}}>
                  <option value="">Select a subject</option>
                  <option value="feedback">General Feedback</option>
                  <option value="bug">Report a Bug</option>
                  <option value="feature">Request a Feature</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-slate-400 text-sm mb-2">Message</label>
                <textarea
                  required rows={5}
                  value={form.message}
                  onChange={e => setForm({...form, message: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl text-white text-sm outline-none resize-none"
                  style={{background:'rgba(255,255,255,0.05)',border:'1px solid rgba(52,211,153,0.2)'}}
                  placeholder="Tell us how we can help..."
                />
              </div>
              <button type="submit" className="btn-primary w-full py-3 font-semibold">
                Send Message →
              </button>
            </form>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          {[
            { icon: '📧', title: 'Email Us', desc: 'contact@wordcountertool.net', note: 'Response within 24-48 hours' },
            { icon: '💬', title: 'Feedback', desc: 'We read all suggestions', note: 'Your ideas shape our tools' },
          ].map((item, i) => (
            <div key={i} className="result-box text-center">
              <div className="text-3xl mb-2">{item.icon}</div>
              <h3 className="text-white font-bold mb-1">{item.title}</h3>
              <p className="text-emerald-400 text-sm">{item.desc}</p>
              <p className="text-slate-500 text-xs mt-1">{item.note}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
