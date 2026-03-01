const fs = require('fs');

let content = fs.readFileSync('app/word-counter/page.js', 'utf8');

// 1. Add useState for copied and add copy/clear functions
content = content.replace(
  `'use client'
import { useState, useCallback } from 'react'`,
  `'use client'
import { useState, useCallback } from 'react'`
);

// 2. Add copied state and functions after existing state
content = content.replace(
  `  const [text, setText] = useState('')`,
  `  const [text, setText] = useState('')
  const [copied, setCopied] = useState(false)

  const copyResults = () => {
    const s = stats()
    const summary = \`Word Count Results:\\nWords: \${s.words}\\nCharacters: \${s.chars}\\nCharacters (no spaces): \${s.charsNoSpaces}\\nSentences: \${s.sentences}\\nParagraphs: \${s.paragraphs}\\nReading Time: \${s.readTime} min\\nUnique Words: \${s.uniqueWords}\`
    navigator.clipboard.writeText(summary).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  const clearText = () => setText('')`
);

// 3. Add copy and clear buttons after the stats grid
content = content.replace(
  `          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">`,
  `          {/* Action Buttons */}
          <div className="flex gap-3 mb-4 justify-end">
            <button onClick={clearText}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-slate-400 hover:text-white transition-all"
              style={{background:'rgba(255,255,255,0.05)',border:'1px solid rgba(255,255,255,0.1)'}}>
              🗑️ Clear
            </button>
            <button onClick={copyResults}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all"
              style={{background: copied ? 'rgba(52,211,153,0.2)' : 'rgba(52,211,153,0.1)', border:'1px solid rgba(52,211,153,0.3)', color: copied ? '#34d399' : '#94a3b8'}}>
              {copied ? '✅ Copied!' : '📋 Copy Results'}
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">`
);

fs.writeFileSync('app/word-counter/page.js', content, 'utf8');
console.log('✅ Copy to clipboard and clear button added to word counter!');
console.log('Run: git add . && git commit -m "Add copy results and clear button to word counter" && git push');
