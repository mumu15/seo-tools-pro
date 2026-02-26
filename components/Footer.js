import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t mt-20 py-12" style={{ borderColor: 'rgba(52,211,153,0.1)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
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
              <li><Link href="/word-counter" className="text-slate-500 text-sm hover:text-emerald-400 transition-colors">Word Counter</Link></li>
              <li><Link href="/character-counter" className="text-slate-500 text-sm hover:text-emerald-400 transition-colors">Character Counter</Link></li>
              <li><Link href="/sentence-counter" className="text-slate-500 text-sm hover:text-emerald-400 transition-colors">Sentence Counter</Link></li>
              <li><Link href="/readability-checker" className="text-slate-500 text-sm hover:text-emerald-400 transition-colors">Readability Checker</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">SEO Tools</h4>
            <ul className="space-y-2">
              <li><Link href="/keyword-density" className="text-slate-500 text-sm hover:text-emerald-400 transition-colors">Keyword Density Checker</Link></li>
              <li><Link href="/meta-tag-generator" className="text-slate-500 text-sm hover:text-emerald-400 transition-colors">Meta Tag Generator</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Info</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-slate-500 text-sm hover:text-emerald-400 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-slate-500 text-sm hover:text-emerald-400 transition-colors">Contact</Link></li>
              <li><Link href="/privacy-policy" className="text-slate-500 text-sm hover:text-emerald-400 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-6 flex flex-col sm:flex-row justify-between items-center gap-4" style={{ borderColor: 'rgba(52,211,153,0.1)' }}>
          <p className="text-slate-600 text-sm">© {new Date().getFullYear()} WordCounterTool.net. All rights reserved.</p>
          <p className="text-slate-700 text-xs">Free tools for bloggers, writers and marketers.</p>
        </div>
      </div>
    </footer>
  )
}