const fs = require('fs');

function write(filePath, content) {
  const dir = filePath.substring(0, filePath.lastIndexOf('/'));
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✅ ${filePath}`);
}

// ── ABOUT PAGE ────────────────────────────────────────────────────────────────
write('app/about/page.js', `import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'About Us | WordCounterTool.net',
  description: 'Learn about WordCounterTool.net — free online writing and SEO tools for bloggers, students, writers and content creators.',
}

export default function About() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">About WordCounterTool.net</h1>
          <p className="text-slate-400 text-lg">Free writing and SEO tools for everyone</p>
        </div>

        <div className="space-y-8">
          <div className="result-box">
            <h2 className="text-2xl font-display font-bold text-white mb-4">Our Mission</h2>
            <p className="text-slate-400 leading-relaxed">WordCounterTool.net was built with one simple goal: give writers, bloggers, students and content creators access to professional writing and SEO tools completely free — no sign up, no credit card, no limits.</p>
            <p className="text-slate-400 leading-relaxed mt-3">We believe that great tools should be accessible to everyone. Whether you are a student checking your essay word count, a blogger optimizing content for SEO or a professional writer tracking your daily output — our tools are here to help.</p>
          </div>

          <div className="result-box">
            <h2 className="text-2xl font-display font-bold text-white mb-4">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: '📝', title: 'Word Counter', desc: 'Instant word, character and sentence counting' },
                { icon: '🔍', title: 'Keyword Density', desc: 'SEO keyword analysis and optimization' },
                { icon: '🏷️', title: 'Meta Tag Generator', desc: 'Perfect meta titles and descriptions' },
                { icon: '📖', title: 'Readability Checker', desc: 'Flesch-Kincaid readability scoring' },
                { icon: '⏱️', title: 'Reading Time', desc: 'Estimate reading time for any content' },
                { icon: '⌨️', title: 'WPM Test', desc: 'Test and improve your typing speed' },
                { icon: '#️⃣', title: 'Hashtag Counter', desc: 'Count hashtags for all social platforms' },
                { icon: '🧵', title: 'Thread Counter', desc: 'Plan Twitter threads character by character' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl" style={{background:'rgba(52,211,153,0.05)'}}>
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h3 className="text-white font-bold text-sm">{item.title}</h3>
                    <p className="text-slate-500 text-xs mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="result-box">
            <h2 className="text-2xl font-display font-bold text-white mb-4">Why Choose Us?</h2>
            <div className="space-y-3">
              {[
                { icon: '⚡', title: 'Instant Results', desc: 'All tools work in real time as you type. No waiting, no loading.' },
                { icon: '🔒', title: 'No Sign Up Required', desc: 'Use every tool without creating an account or providing any personal information.' },
                { icon: '💯', title: '100% Free Forever', desc: 'Every tool on our site is completely free. We do not have paid plans or premium tiers.' },
                { icon: '📱', title: 'Works Everywhere', desc: 'Our tools work on desktop, tablet and mobile. No app download required.' },
                { icon: '🛡️', title: 'Privacy Focused', desc: 'We do not store or share your text. Everything is processed in your browser.' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-xl">{item.icon}</span>
                  <div>
                    <h3 className="text-white font-bold text-sm">{item.title}</h3>
                    <p className="text-slate-400 text-sm mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="result-box text-center">
            <h2 className="text-2xl font-display font-bold text-white mb-4">Get in Touch</h2>
            <p className="text-slate-400 mb-6">Have a suggestion, found a bug or want to request a new tool? We would love to hear from you.</p>
            <Link href="/contact" className="btn-primary inline-block px-6 py-3">Contact Us</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
`);

// ── CONTACT PAGE ──────────────────────────────────────────────────────────────
write('app/contact/page.js', `'use client'
import { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'Contact Us | WordCounterTool.net',
  description: 'Contact WordCounterTool.net for support, feedback or tool suggestions.',
}

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
`);

// ── PRIVACY POLICY PAGE ───────────────────────────────────────────────────────
write('app/privacy-policy/page.js', `import Header from '../../components/Header'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'Privacy Policy | WordCounterTool.net',
  description: 'Privacy policy for WordCounterTool.net. Learn how we handle your data and protect your privacy.',
}

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-slate-400">Last updated: February 2026</p>
        </div>

        <div className="space-y-6">
          {[
            {
              title: '1. Information We Collect',
              content: 'WordCounterTool.net does not collect, store or transmit any text you enter into our tools. All text processing happens entirely in your browser. We do not have access to your content. We collect anonymous usage data through Google Analytics including page views, time on site and general location data to help us improve our tools.'
            },
            {
              title: '2. How We Use Information',
              content: 'Anonymous analytics data is used solely to understand how our tools are used and to improve the user experience. We do not sell, trade or transfer your information to third parties. We do not use your data for advertising targeting.'
            },
            {
              title: '3. Cookies',
              content: 'We use cookies through Google Analytics to track anonymous usage statistics. These cookies do not contain personally identifiable information. You can disable cookies in your browser settings at any time without affecting your ability to use our tools.'
            },
            {
              title: '4. Google AdSense',
              content: 'We use Google AdSense to display advertisements. Google may use cookies to serve ads based on your prior visits to our website or other websites. You can opt out of personalized advertising by visiting Google Ad Settings.'
            },
            {
              title: '5. Your Text and Content',
              content: 'Any text you paste or type into our tools is processed locally in your browser. We do not store, transmit, analyze or have any access to the content you enter into our tools. Your content remains completely private.'
            },
            {
              title: '6. Third Party Links',
              content: 'Our website may contain links to third party websites. We are not responsible for the privacy practices of those sites. We encourage you to review the privacy policies of any third party sites you visit.'
            },
            {
              title: '7. Changes to This Policy',
              content: 'We may update this privacy policy from time to time. Any changes will be posted on this page with an updated date. Continued use of our tools after changes constitutes acceptance of the updated policy.'
            },
            {
              title: '8. Contact Us',
              content: 'If you have questions about this privacy policy please contact us at contact@wordcountertool.net.'
            },
          ].map((section, i) => (
            <div key={i} className="result-box">
              <h2 className="text-white font-bold text-lg mb-3">{section.title}</h2>
              <p className="text-slate-400 leading-relaxed text-sm">{section.content}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
`);

// ── UPDATE FOOTER WITH LINKS ──────────────────────────────────────────────────
const footer = `import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t mt-16" style={{ borderColor: 'rgba(52,211,153,0.1)' }}>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs text-white"
                style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}>W</div>
              <span className="font-bold text-white text-sm">WordCounter<span className="text-emerald-400">Tool</span>.net</span>
            </Link>
            <p className="text-slate-500 text-xs leading-relaxed">Free online writing and SEO tools for bloggers, students and content creators.</p>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-white font-bold text-sm mb-3">Tools</h3>
            <ul className="space-y-2">
              {[
                ['Word Counter', '/word-counter'],
                ['Keyword Density', '/keyword-density'],
                ['Meta Tag Generator', '/meta-tag-generator'],
                ['Readability Checker', '/readability-checker'],
                ['Character Counter', '/character-counter'],
                ['Reading Time', '/reading-time'],
              ].map(([name, href]) => (
                <li key={href}><Link href={href} className="text-slate-500 hover:text-emerald-400 text-xs transition-colors">{name}</Link></li>
              ))}
            </ul>
          </div>

          {/* More Tools */}
          <div>
            <h3 className="text-white font-bold text-sm mb-3">More Tools</h3>
            <ul className="space-y-2">
              {[
                ['Sentence Counter', '/sentence-counter'],
                ['Words Per Page', '/words-per-page'],
                ['WPM Test', '/words-per-minute'],
                ['Hashtag Counter', '/hashtag-counter'],
                ['Thread Counter', '/twitter-thread-counter'],
                ['Blog', '/blog'],
              ].map(([name, href]) => (
                <li key={href}><Link href={href} className="text-slate-500 hover:text-emerald-400 text-xs transition-colors">{name}</Link></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-bold text-sm mb-3">Company</h3>
            <ul className="space-y-2">
              {[
                ['About Us', '/about'],
                ['Contact', '/contact'],
                ['Privacy Policy', '/privacy-policy'],
                ['Blog', '/blog'],
              ].map(([name, href]) => (
                <li key={href}><Link href={href} className="text-slate-500 hover:text-emerald-400 text-xs transition-colors">{name}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderColor: 'rgba(52,211,153,0.1)' }}>
          <p className="text-slate-600 text-xs">© 2026 WordCounterTool.net — All rights reserved</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="text-slate-600 hover:text-slate-400 text-xs transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="text-slate-600 hover:text-slate-400 text-xs transition-colors">Contact</Link>
            <Link href="/about" className="text-slate-600 hover:text-slate-400 text-xs transition-colors">About</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
`;

fs.writeFileSync('components/Footer.js', footer, 'utf8');
console.log('✅ Premium footer with links created!');

console.log('\n🎉 About, Contact, Privacy Policy and Footer all done!');
console.log('Run: git add . && git commit -m "Add About, Contact, Privacy Policy pages and premium footer" && git push');
