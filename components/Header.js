'use client'
import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/word-counter', label: 'Word Counter' },
  { href: '/keyword-density', label: 'Keyword Density' },
  { href: '/meta-tag-generator', label: 'Meta Tags' },
  { href: '/readability-checker', label: 'Readability' },
  { href: '/character-counter', label: 'Character Counter' },
  { href: '/sentence-counter', label: 'Sentence Counter' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="nav-bar sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-dark-950 font-bold text-sm"
              style={{ background: 'linear-gradient(135deg, #10b981, #34d399)' }}>S</div>
            <span className="font-display font-bold text-xl text-white">
              SEOTools<span className="text-emerald-400">Pro</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => (
              <Link key={link.href} href={link.href}
                className={`px-3 py-1.5 rounded-lg text-sm transition-all duration-200 ${
                  pathname === link.href
                    ? 'bg-emerald-500 text-white font-bold'
                    : 'text-slate-400 hover:text-white hover:bg-dark-700'
                }`}>{link.label}</Link>
            ))}
          </nav>

          <button onClick={() => setOpen(!open)} className="lg:hidden text-slate-400 p-2">
            <div className={`w-5 h-0.5 bg-current mb-1 transition-all ${open ? 'rotate-45 translate-y-1.5' : ''}`} />
            <div className={`w-5 h-0.5 bg-current mb-1 transition-all ${open ? 'opacity-0' : ''}`} />
            <div className={`w-5 h-0.5 bg-current transition-all ${open ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </div>

        {open && (
          <nav className="lg:hidden pb-4 border-t border-dark-700 mt-2 pt-4">
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)}
                className={`block px-4 py-2 rounded-lg text-sm mb-1 transition-all ${
                  pathname === link.href ? 'bg-emerald-500 text-white font-bold' : 'text-slate-400 hover:bg-dark-700 hover:text-white'
                }`}>{link.label}</Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
