const fs = require('fs');

let content = fs.readFileSync('app/word-counter/page.js', 'utf8');

// Add useEffect and useRef to imports
content = content.replace(
  `import { useState, useCallback } from 'react'`,
  `import { useState, useCallback, useEffect, useRef } from 'react'`
);

// Add animation state after existing states
content = content.replace(
  `  const [copied, setCopied] = useState(false)`,
  `  const [copied, setCopied] = useState(false)
  const [animated, setAnimated] = useState(false)
  const prevWords = useRef(0)

  useEffect(() => {
    const s = stats()
    if (s.words !== prevWords.current) {
      setAnimated(false)
      setTimeout(() => setAnimated(true), 10)
      prevWords.current = s.words
    }
  }, [text])`
);

// Replace stat cards with animated versions
content = content.replace(
  `        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          <div className="stat-card"><div className="text-3xl font-display font-bold text-emerald-400">{s.words}</div><div className="text-slate-500 text-sm mt-1">Words</div></div>
          <div className="stat-card"><div className="text-3xl font-display font-bold text-blue-400">{s.chars}</div><div className="text-slate-500 text-sm mt-1">Characters</div></div>
          <div className="stat-card"><div className="text-3xl font-display font-bold text-purple-400">{s.sentences}</div><div className="text-slate-500 text-sm mt-1">Sentences</div></div>
          <div className="stat-card"><div className="text-3xl font-display font-bold text-yellow-400">{s.readTime} min</div><div className="text-slate-500 text-sm mt-1">Read Time</div>`,
  `        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          <div className="stat-card" style={{transition:'all 0.3s ease',transform: animated && s.words > 0 ? 'scale(1.02)' : 'scale(1)'}}><div className="text-3xl font-display font-bold text-emerald-400" style={{transition:'all 0.3s ease'}}>{s.words}</div><div className="text-slate-500 text-sm mt-1">Words</div></div>
          <div className="stat-card" style={{transition:'all 0.3s ease',transform: animated && s.chars > 0 ? 'scale(1.02)' : 'scale(1)'}}><div className="text-3xl font-display font-bold text-blue-400" style={{transition:'all 0.3s ease'}}>{s.chars}</div><div className="text-slate-500 text-sm mt-1">Characters</div></div>
          <div className="stat-card" style={{transition:'all 0.3s ease',transform: animated && s.sentences > 0 ? 'scale(1.02)' : 'scale(1)'}}><div className="text-3xl font-display font-bold text-purple-400" style={{transition:'all 0.3s ease'}}>{s.sentences}</div><div className="text-slate-500 text-sm mt-1">Sentences</div></div>
          <div className="stat-card" style={{transition:'all 0.3s ease',transform: animated && s.readTime > 0 ? 'scale(1.02)' : 'scale(1)'}}><div className="text-3xl font-display font-bold text-yellow-400" style={{transition:'all 0.3s ease'}}>{s.readTime} min</div><div className="text-slate-500 text-sm mt-1">Read Time</div>`
);

// Add textarea glow effect when typing
content = content.replace(
  `          <textarea`,
  `          <textarea
            style={{boxShadow: text.length > 0 ? '0 0 0 2px rgba(52,211,153,0.3)' : 'none', transition:'box-shadow 0.3s ease'}}`
);

fs.writeFileSync('app/word-counter/page.js', content, 'utf8');
console.log('✅ Animations added to word counter!');
console.log('Run: git add . && git commit -m "Add result animations to word counter" && git push');
