const fs = require('fs');

const header = `'use client'
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

const tools = [
  { name: 'Word Counter', href: '/word-counter', icon: '📝' },
  { name: 'Keyword Density', href: '/keyword-density', icon: '🔍' },
  { name: 'Meta Tag Generator', href: '/meta-tag-generator', icon: '🏷️' },
  { name: 'Readability Checker', href: '/readability-checker', icon: '📖' },
  { name: 'Character Counter', href: '/character-counter', icon: '🔤' },
  { name: 'Sentence Counter', href: '/sentence-counter', icon: '📋' },
  { name: 'Words Per Page', href: '/words-per-page', icon: '📄' },
  { name: 'Reading Time', href: '/reading-time', icon: '⏱️' },
  { name: 'WPM Test', href: '/words-per-minute', icon: '⌨️' },
  { name: 'Hashtag Counter', href: '/hashtag-counter', icon: '#️⃣' },
  { name: 'Thread Counter', href: '/twitter-thread-counter', icon: '🧵' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b" style={{ borderColor: 'rgba(52,211,153,0.15)', background: 'rgba(3,7,18,0.97)', backdropFilter: 'blur(20px)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm text-white"
              style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}>W</div>
            <span className="font-bold text-white text-sm">
              WordCounter<span className="text-emerald-400">Tool</span>
              <span className="text-slate-500">.net</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">

            {/* Tools Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1.5 text-slate-300 hover:text-white text-sm px-4 py-2 rounded-lg hover:bg-white/5 transition-all"
              >
                <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                All Tools
                <svg className={\`w-3.5 h-3.5 transition-transform \${dropdownOpen ? 'rotate-180' : ''}\`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 rounded-xl border shadow-2xl overflow-hidden"
                  style={{ background: 'rgba(10,15,30,0.98)', borderColor: 'rgba(52,211,153,0.2)', backdropFilter: 'blur(20px)' }}>
                  <div className="p-2">
                    {tools.map(tool => (
                      <Link key={tool.href} href={tool.href}
                        onClick={() => setDropdownOpen(false)}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-emerald-500/10 transition-all text-sm group">
                        <span className="text-base">{tool.icon}</span>
                        <span className="group-hover:text-emerald-400 transition-colors">{tool.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/blog"
              className="text-slate-300 hover:text-white text-sm px-4 py-2 rounded-lg hover:bg-white/5 transition-all">
              Blog
            </Link>

            <Link href="/word-counter"
              className="text-sm px-4 py-2 rounded-lg font-medium transition-all ml-2"
              style={{ background: 'linear-gradient(135deg, #10b981, #059669)', color: 'white' }}>
              Try Free →
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-slate-400 hover:text-white p-1">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden py-3 border-t" style={{ borderColor: 'rgba(52,211,153,0.1)' }}>
            <div className="grid grid-cols-2 gap-1 mb-3">
              {tools.map(tool => (
                <Link key={tool.href} href={tool.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all text-sm">
                  <span>{tool.icon}</span>
                  <span>{tool.name}</span>
                </Link>
              ))}
            </div>
            <div className="border-t pt-3 flex gap-2" style={{ borderColor: 'rgba(52,211,153,0.1)' }}>
              <Link href="/blog" onClick={() => setMobileOpen(false)}
                className="flex-1 text-center text-slate-300 hover:text-white text-sm px-3 py-2 rounded-lg hover:bg-white/5 transition-all">
                Blog
              </Link>
              <Link href="/word-counter" onClick={() => setMobileOpen(false)}
                className="flex-1 text-center text-sm px-3 py-2 rounded-lg font-medium text-white transition-all"
                style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}>
                Try Free →
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
`;

fs.writeFileSync('components/Header.js', header, 'utf8');
console.log('✅ Premium header created!');
console.log('Run: git add . && git commit -m "Premium header with tools dropdown" && git push');
