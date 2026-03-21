import Link from 'next/link'

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
