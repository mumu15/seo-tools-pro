const fs = require('fs');
const path = require('path');

const BASE = path.join(__dirname, 'app');
const COMP = path.join(__dirname, 'components');

console.log('');
console.log('=====================================================');
console.log('  REDESIGN: Header + Homepage + Footer');
console.log('  WordCounterTool.net');
console.log('=====================================================');
console.log('');

// ============================================================
// 1. HEADER — Mega menu with categories
// ============================================================
console.log('--- Upgrading Header ---');

const headerContent = `'use client'
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

const categories = [
  {
    title: 'Writing Tools',
    items: [
      { name: 'Word Counter', href: '/word-counter', desc: 'Count words, characters, sentences' },
      { name: 'Character Counter', href: '/character-counter', desc: 'Track characters for social media' },
      { name: 'Sentence Counter', href: '/sentence-counter', desc: 'Analyze sentence structure' },
      { name: 'Readability Checker', href: '/readability-checker', desc: 'Flesch-Kincaid readability score' },
      { name: 'Reading Time', href: '/reading-time', desc: 'Estimate read time for any text' },
      { name: 'Words Per Minute', href: '/words-per-minute', desc: 'Test your reading/typing speed' },
    ]
  },
  {
    title: 'SEO Tools',
    items: [
      { name: 'Keyword Density', href: '/keyword-density', desc: 'Analyze keyword frequency' },
      { name: 'Meta Tag Generator', href: '/meta-tag-generator', desc: 'Generate SEO meta tags' },
      { name: 'Hashtag Counter', href: '/hashtag-counter', desc: 'Count and optimize hashtags' },
      { name: 'Thread Counter', href: '/twitter-thread-counter', desc: 'Plan Twitter/X threads' },
    ]
  },
  {
    title: 'Converters & Guides',
    items: [
      { name: 'Words to Pages', href: '/words-to-pages', desc: 'Convert word count to pages' },
      { name: 'Words Per Page', href: '/words-per-page', desc: 'Words per page calculator' },
      { name: 'Speech Word Count', href: '/words-per-minute/speech', desc: 'Words for any speech length' },
      { name: 'Character Limits', href: '/character-limits', desc: 'Limits for every platform' },
      { name: 'Word Count Guides', href: '/word-count/for', desc: 'Word counts for every document' },
      { name: 'Language Counters', href: '/word-counter/language', desc: '15 languages supported' },
    ]
  },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const megaRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(e) {
      if (megaRef.current && !megaRef.current.contains(e.target)) setMegaOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header className="sticky top-0 z-50" style={{ background: 'rgba(3,7,18,0.97)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(52,211,153,0.12)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 group">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center font-extrabold text-sm text-white shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-500/40 transition-shadow"
              style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}>W</div>
            <span className="font-extrabold text-white text-sm tracking-tight">
              WordCounter<span className="text-emerald-400">Tool</span>
              <span className="text-slate-600">.net</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            <div className="relative" ref={megaRef}>
              <button onClick={() => setMegaOpen(!megaOpen)}
                className="flex items-center gap-1.5 text-slate-300 hover:text-white text-sm px-4 py-2 rounded-lg hover:bg-white/5 transition-all font-medium">
                All Tools
                <svg className={\`w-3.5 h-3.5 transition-transform \${megaOpen ? 'rotate-180' : ''}\`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {megaOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 rounded-2xl border shadow-2xl overflow-hidden"
                  style={{ background: 'rgba(8,12,24,0.98)', borderColor: 'rgba(52,211,153,0.15)', backdropFilter: 'blur(20px)', width: 680 }}>
                  <div className="grid grid-cols-3 gap-0 p-4">
                    {categories.map((cat, ci) => (
                      <div key={ci} className={ci < 2 ? 'pr-4 border-r' : 'pl-4'} style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                        <div className="text-emerald-400 text-[10px] font-bold uppercase tracking-widest mb-3 px-2">{cat.title}</div>
                        {cat.items.map(item => (
                          <Link key={item.href} href={item.href} onClick={() => setMegaOpen(false)}
                            className="block px-2 py-2 rounded-lg hover:bg-emerald-500/8 transition-all group">
                            <div className="text-white text-sm font-medium group-hover:text-emerald-400 transition-colors">{item.name}</div>
                            <div className="text-slate-500 text-[11px] mt-0.5">{item.desc}</div>
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                  <div className="border-t px-6 py-3 flex items-center justify-between" style={{ borderColor: 'rgba(255,255,255,0.05)', background: 'rgba(52,211,153,0.03)' }}>
                    <span className="text-slate-500 text-xs">250+ pages of free tools, guides & calculators</span>
                    <Link href="/blog" onClick={() => setMegaOpen(false)} className="text-emerald-400 text-xs font-semibold hover:underline">Read the Blog</Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/word-count/for" className="text-slate-300 hover:text-white text-sm px-3 py-2 rounded-lg hover:bg-white/5 transition-all font-medium">Guides</Link>
            <Link href="/words-to-pages" className="text-slate-300 hover:text-white text-sm px-3 py-2 rounded-lg hover:bg-white/5 transition-all font-medium">Words to Pages</Link>
            <Link href="/blog" className="text-slate-300 hover:text-white text-sm px-3 py-2 rounded-lg hover:bg-white/5 transition-all font-medium">Blog</Link>

            <Link href="/word-counter"
              className="text-sm px-5 py-2 rounded-xl font-bold transition-all ml-3 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg, #10b981, #059669)', color: 'white' }}>
              Try Free
            </Link>
          </nav>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-slate-400 hover:text-white p-2 rounded-lg hover:bg-white/5">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {mobileOpen && (
          <div className="lg:hidden py-4 border-t" style={{ borderColor: 'rgba(52,211,153,0.1)' }}>
            {categories.map((cat, ci) => (
              <div key={ci} className="mb-4">
                <div className="text-emerald-400 text-[10px] font-bold uppercase tracking-widest mb-2 px-2">{cat.title}</div>
                <div className="grid grid-cols-2 gap-1">
                  {cat.items.map(item => (
                    <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}
                      className="px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all text-sm">
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <div className="border-t pt-3 mt-2 flex gap-2" style={{ borderColor: 'rgba(52,211,153,0.1)' }}>
              <Link href="/blog" onClick={() => setMobileOpen(false)} className="flex-1 text-center text-slate-300 text-sm px-3 py-2.5 rounded-lg hover:bg-white/5">Blog</Link>
              <Link href="/word-counter" onClick={() => setMobileOpen(false)}
                className="flex-1 text-center text-sm px-3 py-2.5 rounded-xl font-bold text-white"
                style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}>
                Try Free
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
`;

fs.writeFileSync(path.join(COMP, 'Header.js'), headerContent, 'utf8');
console.log('  Done');

// ============================================================
// 2. HOMEPAGE — Interactive, categorized, engaging
// ============================================================
console.log('--- Upgrading Homepage ---');

const homepageContent = `import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

const writingTools = [
  { title: 'Word Counter', desc: 'Count words, characters, sentences, paragraphs and reading time instantly.', href: '/word-counter', gradient: 'from-emerald-500 to-teal-600' },
  { title: 'Character Counter', desc: 'Count characters for Twitter, Instagram, SMS, meta tags and more.', href: '/character-counter', gradient: 'from-blue-500 to-cyan-600' },
  { title: 'Sentence Counter', desc: 'Analyze sentence structure and average sentence length.', href: '/sentence-counter', gradient: 'from-violet-500 to-purple-600' },
  { title: 'Readability Checker', desc: 'Check your Flesch-Kincaid score and grade level.', href: '/readability-checker', gradient: 'from-amber-500 to-orange-600' },
  { title: 'Reading Time', desc: 'Calculate how long it takes to read any text.', href: '/reading-time', gradient: 'from-cyan-500 to-blue-600' },
  { title: 'Words Per Minute', desc: 'Test your reading speed or typing speed in WPM.', href: '/words-per-minute', gradient: 'from-green-500 to-emerald-600' },
]

const seoTools = [
  { title: 'Keyword Density', desc: 'Analyze keyword frequency and density for SEO.', href: '/keyword-density', gradient: 'from-rose-500 to-pink-600' },
  { title: 'Meta Tag Generator', desc: 'Generate perfect meta tags for Google and social media.', href: '/meta-tag-generator', gradient: 'from-purple-500 to-indigo-600' },
  { title: 'Hashtag Counter', desc: 'Count and optimize hashtags for Instagram and Twitter.', href: '/hashtag-counter', gradient: 'from-pink-500 to-rose-600' },
  { title: 'Thread Counter', desc: 'Plan and split Twitter/X threads before posting.', href: '/twitter-thread-counter', gradient: 'from-slate-500 to-zinc-600' },
]

const converters = [
  { title: 'Words to Pages', desc: 'Convert any word count to pages instantly.', href: '/words-to-pages', count: '22 converters' },
  { title: 'Words Per Page', desc: 'Calculate words per page for any font and spacing.', href: '/words-per-page', count: 'All formats' },
  { title: 'Character Limits', desc: 'Character limits for every social media platform.', href: '/character-limits', count: '21 platforms' },
  { title: 'Speech Calculator', desc: 'How many words for any speech length.', href: '/words-per-minute/speech', count: '20 durations' },
]

const guides = [
  { title: 'Word Count Guides', desc: 'How many words for essays, resumes, dissertations and 45+ document types.', href: '/word-count/for', count: '48 guides' },
  { title: 'Language Counters', desc: 'Word counter for Spanish, French, German, Chinese, Japanese and 10 more.', href: '/word-counter/language', count: '15 languages' },
  { title: 'Reading Time Guide', desc: 'How long to read 100 to 100,000 words at any speed.', href: '/reading-time/for', count: '37 calculations' },
  { title: 'Writing Blog', desc: 'SEO tips, word count guides, writing advice updated for 2026.', href: '/blog', count: '51 articles' },
]

export const metadata = {
  title: 'Free Word Counter & SEO Writing Tools | WordCounterTool.net',
  description: 'Free online word counter, character counter, readability checker, keyword density analyzer, and 250+ writing tools. No sign up required. Instant results.',
  alternates: { canonical: 'https://www.wordcountertool.net' },
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(16,185,129,0.08), transparent)' }} />
          <div className="max-w-6xl mx-auto px-4 pt-16 pb-14 relative">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 tracking-wide"
                style={{ background: 'rgba(52,211,153,0.08)', color: '#34d399', border: '1px solid rgba(52,211,153,0.15)' }}>
                250+ FREE TOOLS &amp; GUIDES
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-5 leading-[1.05] tracking-tight">
                Write Better.<br />
                <span style={{ background: 'linear-gradient(135deg, #34d399, #10b981, #059669)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Rank Higher.</span>
              </h1>
              <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
                Free word counter, SEO analyzer, readability checker and 250+ writing tools. No sign up. No limits. Instant results.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link href="/word-counter"
                  className="px-8 py-3.5 rounded-xl font-bold text-white text-sm shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5 transition-all"
                  style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}>
                  Open Word Counter
                </Link>
                <Link href="/blog"
                  className="px-8 py-3.5 rounded-xl font-bold text-sm transition-all hover:-translate-y-0.5"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', color: '#94a3b8' }}>
                  Read the Blog
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-4 mt-14 max-w-3xl mx-auto">
              {[
                ['250+', 'Free Pages'],
                ['11', 'Pro Tools'],
                ['15', 'Languages'],
                ['4.9/5', 'User Rating'],
              ].map(([num, label], i) => (
                <div key={i} className="text-center py-4 rounded-xl" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div className="text-xl md:text-2xl font-extrabold text-emerald-400">{num}</div>
                  <div className="text-slate-500 text-[11px] mt-1 font-medium">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WRITING TOOLS */}
        <section className="max-w-6xl mx-auto px-4 py-14">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white">Writing Tools</h2>
              <p className="text-slate-500 text-sm mt-1">Count, analyze, and improve your writing</p>
            </div>
            <Link href="/word-counter" className="text-emerald-400 text-sm font-semibold hover:underline hidden sm:block">View all tools</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {writingTools.map(tool => (
              <Link key={tool.href} href={tool.href}
                className="group rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1"
                style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div className={\`w-10 h-10 rounded-xl bg-gradient-to-br \${tool.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg\`}>
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-base mb-1.5 group-hover:text-emerald-400 transition-colors">{tool.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{tool.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* SEO TOOLS */}
        <section className="max-w-6xl mx-auto px-4 py-14">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white">SEO Tools</h2>
              <p className="text-slate-500 text-sm mt-1">Optimize your content for search engines</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {seoTools.map(tool => (
              <Link key={tool.href} href={tool.href}
                className="group rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1"
                style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div className={\`w-10 h-10 rounded-xl bg-gradient-to-br \${tool.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg\`}>
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-base mb-1.5 group-hover:text-emerald-400 transition-colors">{tool.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{tool.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* CONVERTERS */}
        <section className="py-14" style={{ background: 'rgba(52,211,153,0.02)' }}>
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-extrabold text-white">Converters & Calculators</h2>
              <p className="text-slate-500 text-sm mt-2">Instantly convert between words, pages, minutes, and characters</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {converters.map(c => (
                <Link key={c.href} href={c.href}
                  className="group rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(52,211,153,0.1)' }}>
                  <h3 className="text-white font-bold text-base mb-2 group-hover:text-emerald-400 transition-colors">{c.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-3">{c.desc}</p>
                  <span className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold"
                    style={{ background: 'rgba(52,211,153,0.08)', color: '#34d399', border: '1px solid rgba(52,211,153,0.15)' }}>
                    {c.count}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* GUIDES & RESOURCES */}
        <section className="max-w-6xl mx-auto px-4 py-14">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">Guides & Resources</h2>
            <p className="text-slate-500 text-sm mt-2">In-depth word count guides, language tools, and writing tips</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {guides.map(g => (
              <Link key={g.href} href={g.href}
                className="group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <h3 className="text-white font-bold text-base mb-2 group-hover:text-emerald-400 transition-colors">{g.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-3">{g.desc}</p>
                <span className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold"
                  style={{ background: 'rgba(99,102,241,0.08)', color: '#818cf8', border: '1px solid rgba(99,102,241,0.15)' }}>
                  {g.count}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-4 py-14">
          <div className="rounded-3xl p-10 text-center relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.08), rgba(5,150,105,0.04))', border: '1px solid rgba(52,211,153,0.15)' }}>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Start Counting Words Free</h2>
            <p className="text-slate-400 text-base max-w-xl mx-auto mb-8 leading-relaxed">
              Join thousands of writers, students, and SEO professionals who use our free tools every day. No sign up, no limits, no cost.
            </p>
            <Link href="/word-counter"
              className="inline-block px-10 py-4 rounded-xl font-bold text-white text-base shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5 transition-all"
              style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}>
              Open Word Counter
            </Link>
          </div>
        </section>
      </main>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebApplication","name":"WordCounterTool.net","applicationCategory":"UtilityApplication","operatingSystem":"Web","url":"https://www.wordcountertool.net","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.9","ratingCount":"5241","bestRating":"5","worstRating":"1"}})}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.wordcountertool.net"}]})}} />
      <Footer />
    </>
  )
}
`;

fs.writeFileSync(path.join(BASE, 'page.js'), homepageContent, 'utf8');
console.log('  Done');

// ============================================================
// 3. FOOTER — Updated with all new sections
// ============================================================
console.log('--- Upgrading Footer ---');

const footerContent = `import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(52,211,153,0.08)', background: 'rgba(3,7,18,0.5)' }}>
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-xl flex items-center justify-center font-extrabold text-xs text-white"
                style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}>W</div>
              <span className="font-extrabold text-white text-sm">WordCounter<span className="text-emerald-400">Tool</span><span className="text-slate-600">.net</span></span>
            </Link>
            <p className="text-slate-500 text-xs leading-relaxed mb-3">Free professional writing and SEO tools. 250+ pages of tools, guides, and calculators.</p>
            <div className="flex gap-3">
              {['250+ Pages', '100% Free'].map(badge => (
                <span key={badge} className="text-[10px] font-semibold px-2.5 py-1 rounded-full"
                  style={{ background: 'rgba(52,211,153,0.06)', color: '#34d399', border: '1px solid rgba(52,211,153,0.12)' }}>
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Writing Tools */}
          <div>
            <h3 className="text-white font-bold text-xs uppercase tracking-wider mb-4">Writing Tools</h3>
            <ul className="space-y-2.5">
              {[['Word Counter','/word-counter'],['Character Counter','/character-counter'],['Sentence Counter','/sentence-counter'],['Readability Checker','/readability-checker'],['Reading Time','/reading-time'],['Words Per Minute','/words-per-minute']].map(([n,h]) => (
                <li key={h}><Link href={h} className="text-slate-500 hover:text-emerald-400 text-xs transition-colors">{n}</Link></li>
              ))}
            </ul>
          </div>

          {/* SEO Tools */}
          <div>
            <h3 className="text-white font-bold text-xs uppercase tracking-wider mb-4">SEO Tools</h3>
            <ul className="space-y-2.5">
              {[['Keyword Density','/keyword-density'],['Meta Tag Generator','/meta-tag-generator'],['Hashtag Counter','/hashtag-counter'],['Thread Counter','/twitter-thread-counter'],['Character Limits','/character-limits'],['Words Per Page','/words-per-page']].map(([n,h]) => (
                <li key={h}><Link href={h} className="text-slate-500 hover:text-emerald-400 text-xs transition-colors">{n}</Link></li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-bold text-xs uppercase tracking-wider mb-4">Resources</h3>
            <ul className="space-y-2.5">
              {[['Words to Pages','/words-to-pages'],['Word Count Guides','/word-count/for'],['Speech Calculator','/words-per-minute/speech'],['Language Counters','/word-counter/language'],['Reading Time Guide','/reading-time/for'],['Blog','/blog']].map(([n,h]) => (
                <li key={h}><Link href={h} className="text-slate-500 hover:text-emerald-400 text-xs transition-colors">{n}</Link></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-bold text-xs uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2.5">
              {[['About Us','/about'],['Contact','/contact'],['Privacy Policy','/privacy-policy']].map(([n,h]) => (
                <li key={h}><Link href={h} className="text-slate-500 hover:text-emerald-400 text-xs transition-colors">{n}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
          <p className="text-slate-600 text-xs">&copy; 2026 WordCounterTool.net. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="text-slate-600 hover:text-slate-400 text-xs transition-colors">Privacy</Link>
            <Link href="/contact" className="text-slate-600 hover:text-slate-400 text-xs transition-colors">Contact</Link>
            <Link href="/about" className="text-slate-600 hover:text-slate-400 text-xs transition-colors">About</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
`;

fs.writeFileSync(path.join(COMP, 'Footer.js'), footerContent, 'utf8');
console.log('  Done');

console.log('');
console.log('=====================================================');
console.log('  REDESIGN COMPLETE');
console.log('  Header: Mega menu with 3 categories, 16 links');
console.log('  Homepage: Hero + 4 sections + CTA + stats');
console.log('  Footer: 5 columns, all new pages linked');
console.log('=====================================================');
console.log('');
console.log('Now run:');
console.log('  git add .');
console.log('  git commit -m "Redesign header, homepage, footer"');
console.log('  git push origin main');

