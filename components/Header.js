'use client'
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
  {
    title: 'Data & Reference',
    items: [
      { name: 'Book Word Counts', href: '/word-count-popular-books', desc: 'Harry Potter, LOTR, Bible & more' },
      { name: 'Character Limits', href: '/social-media-character-limits', desc: 'Every social media platform' },
      { name: 'Common Words', href: '/most-common-english-words', desc: 'Top 1,000 English words ranked' },
      { name: 'World Languages', href: '/most-spoken-languages-in-the-world', desc: 'Languages ranked by speakers' },
      { name: 'Essay Lengths', href: '/essay-word-count-guide', desc: 'Word counts for every essay type' },
      { name: 'Image Sizes', href: '/social-media-image-sizes', desc: 'Dimensions for every platform' },
      { name: 'Reading Speed', href: '/average-reading-speed-by-age', desc: 'WPM by age and grade level' },
    ],
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
                <svg className={`w-3.5 h-3.5 transition-transform ${megaOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
