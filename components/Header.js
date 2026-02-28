'use client'
import { useState } from 'react'
import Link from 'next/link'

const tools = [
  { name: 'Word Counter', href: '/word-counter' },
  { name: 'Keyword Density', href: '/keyword-density' },
  { name: 'Meta Tags', href: '/meta-tag-generator' },
  { name: 'Readability', href: '/readability-checker' },
  { name: 'Character Counter', href: '/character-counter' },
  { name: 'Sentence Counter', href: '/sentence-counter' },
  { name: 'Words Per Page', href: '/words-per-page' },
  { name: 'Reading Time', href: '/reading-time' },
  { name: 'WPM Test', href: '/words-per-minute' },
  { name: 'Hashtag Counter', href: '/hashtag-counter' },
  { name: 'Thread Counter', href: '/twitter-thread-counter' },
  { name: 'Blog', href: '/blog' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="border-b sticky top-0 z-50" style={{ borderColor: 'rgba(52,211,153,0.1)', background: 'rgba(3,7,18,0.95)', backdropFilter: 'blur(10px)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center text-dark-950 font-bold text-xs"
              style={{ background: 'linear-gradient(135deg, #10b981, #34d399)' }}>W</div>
            <span className="font-display font-bold text-white">WordCounter<span className="text-emerald-400">Tool</span></span>
          </Link>

          <nav className="hidden md:flex items-center gap-1 overflow-x-auto max-w-3xl">
            {tools.map(tool => (
              <Link key={tool.href} href={tool.href}
                className="text-slate-400 hover:text-white text-xs px-2 py-2 rounded-lg hover:bg-white/5 transition-colors whitespace-nowrap">
                {tool.name}
              </Link>
            ))}
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden text-slate-400 hover:text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden py-4 border-t" style={{ borderColor: 'rgba(52,211,153,0.1)' }}>
            {tools.map(tool => (
              <Link key={tool.href} href={tool.href} onClick={() => setOpen(false)}
                className="block text-slate-400 hover:text-white text-sm px-3 py-2 rounded-lg hover:bg-white/5 transition-colors">
                {tool.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
