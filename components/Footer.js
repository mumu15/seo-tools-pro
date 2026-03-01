import Link from 'next/link'

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
