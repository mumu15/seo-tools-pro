import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t mt-20 py-12" style={{ borderColor: 'rgba(52,211,153,0.1)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center text-dark-950 font-bold text-xs"
                style={{ background: 'linear-gradient(135deg, #10b981, #34d399)' }}>S</div>
              <span className="font-display font-bold text-white">SEOTools<span className="text-emerald-400">Pro</span></span>
            </div>
            <p className="text-slate-500 text-sm">Free professional SEO and writing tools. No sign up, instant results.</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Writing Tools</h4>
            <ul className="space-y-2">
              {[
                { href: '/word-counter', label: 'Word Counter' },
                { href: '/character-counter', label: 'Character Counter' },
                { href: '/sentence-counter', label: 'Sentence Counter' },
                { href: '/readability-checker', label: 'Readability Checker' },
              ].map(l => (
                <li key={l.href}><Link href={l.href} className="text-slate-500 text-sm hover:text-emerald-400 transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">SEO Tools</h4>
            <ul className="space-y-2">
              {[
                { href: '/keyword-density', label: 'Keyword Density Checker' },
                { href: '/meta-tag-generator', label: 'Meta Tag Generator' },
              ].map(l => (
                <li key={l.href}><Link href={l.href} className="text-slate-500 text-sm hover:text-emerald-400 transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t pt-6 flex justify-between items-center" style={{ borderColor: 'rgba(52,211,153,0.1)' }}>
          <p className="text-slate-600 text-sm">© {new Date().getFullYear()} SEOToolsPro. All rights reserved.</p>
          <p className="text-slate-700 text-xs">Free tools for bloggers, writers and marketers.</p>
        </div>
      </div>
    </footer>
  )
}
