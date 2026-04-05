'use client'
import { createContext, useContext, useState, useEffect, useCallback } from 'react'

const ThemeContext = createContext({ theme: 'light', toggleTheme: () => {} })

export function useTheme() {
  return useContext(ThemeContext)
}

// Color mappings: dark-mode color → light-mode replacement
const LIGHT_COLORS = {
  // Backgrounds
  '#0f1117': 'var(--bg-primary)',
  '#0a0d14': 'var(--bg-primary)',
  '#0a0f1e': 'var(--bg-primary)',
  '#030712': 'var(--bg-primary)',
  'rgb(10, 13, 20)': 'var(--bg-primary)',
  'rgb(15, 17, 23)': 'var(--bg-primary)',
  // Text - light colors that need to go dark
  '#f1f5f9': 'var(--text-primary)',
  '#e2e8f0': 'var(--text-secondary)',
  '#cbd5e1': 'var(--text-body)',
  '#94a3b8': 'var(--text-muted)',
  '#64748b': 'var(--text-faint)',
  '#fff': 'var(--text-primary)',
  '#ffffff': 'var(--text-primary)',
  'white': 'var(--text-primary)',
  // Accents
  '#34d399': 'var(--accent)',
  '#10b981': 'var(--accent)',
}

const DARK_COLORS = {
  '#0f1117': '#0f1117',
  '#0a0d14': '#0a0d14',
  '#f1f5f9': '#f1f5f9',
  '#e2e8f0': '#e2e8f0',
  '#cbd5e1': '#cbd5e1',
  '#94a3b8': '#94a3b8',
  '#64748b': '#64748b',
  '#fff': '#ffffff',
  '#ffffff': '#ffffff',
  'white': '#ffffff',
  '#34d399': '#34d399',
  '#10b981': '#10b981',
}

function applyThemeToDOM(theme) {
  const isLight = theme === 'light'
  const colorMap = isLight ? LIGHT_COLORS : DARK_COLORS

  // Fix inline style colors on all elements
  const allElements = document.querySelectorAll('[style]')
  allElements.forEach(el => {
    const style = el.getAttribute('style')
    if (!style) return

    // Skip gradient buttons (keep white text on green)
    if (style.includes('linear-gradient')) return

    let newStyle = style

    // Replace color values
    Object.entries(colorMap).forEach(([from, to]) => {
      // Match color property values
      const patterns = [
        new RegExp('color:\\s*' + from.replace(/[.*+?^${}()|[\]\\]/g, '\\\$&') + '(?![0-9a-f])', 'gi'),
      ]
      patterns.forEach(pat => {
        if (newStyle.match(pat)) {
          newStyle = newStyle.replace(pat, 'color: ' + to)
        }
      })
    })

    // Replace background colors (but not gradients or rgba with opacity)
    if (isLight) {
      // Dark bg → light bg
      newStyle = newStyle.replace(/background:s*#0[a-f0-9]{5}/gi, 'background: var(--bg-primary)')
      newStyle = newStyle.replace(/background:s*rgb(1[0-5],s*1[0-7],s*[12][0-9])/gi, 'background: var(--bg-primary)')
      // Semi-transparent white → light card
      newStyle = newStyle.replace(/background:s*rgba(255,s*255,s*255,s*0.0[2-6])/gi, 'background: var(--bg-card)')
      // Border colors
      newStyle = newStyle.replace(/border-color:s*rgba(255,s*255,s*255,s*0.0[3-9])/gi, 'border-color: var(--border-color)')
      newStyle = newStyle.replace(/border:s*1px solid rgba(255,s*255,s*255,s*0.0[3-9])/gi, 'border: 1px solid var(--border-color)')
      // Emerald borders stay
      // Text colors - light to dark
      newStyle = newStyle.replace(/color:s*#f[0-9a-f]f[0-9a-f]f[0-9a-f]/gi, 'color: var(--text-primary)')
      newStyle = newStyle.replace(/color:s*#e[0-9a-f]e[0-9a-f]f[0-9a-f]/gi, 'color: var(--text-secondary)')
      newStyle = newStyle.replace(/color:s*#cbd5e1/gi, 'color: var(--text-body)')
      newStyle = newStyle.replace(/color:s*#94a3b8/gi, 'color: var(--text-muted)')
      newStyle = newStyle.replace(/color:s*#64748b/gi, 'color: var(--text-faint)')
      newStyle = newStyle.replace(/color:s*white/gi, 'color: var(--text-primary)')
      newStyle = newStyle.replace(/color:s*#fff(?![0-9a-f])/gi, 'color: var(--text-primary)')
      newStyle = newStyle.replace(/color:s*#ffffff/gi, 'color: var(--text-primary)')
      // Emerald accent
      newStyle = newStyle.replace(/color:s*#34d399/gi, 'color: var(--accent)')
      newStyle = newStyle.replace(/color:s*#10b981/gi, 'color: var(--accent)')
    }

    if (newStyle !== style) {
      el.setAttribute('style', newStyle)
    }
  })
}

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light')
  const [mounted, setMounted] = useState(false)

  const applyTheme = useCallback((t) => {
    document.documentElement.setAttribute('data-theme', t)
    // Small delay to let CSS variables apply first, then fix inline styles
    requestAnimationFrame(() => {
      applyThemeToDOM(t)
    })
  }, [])

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem('wct-theme')
    const initial = (saved === 'dark') ? 'dark' : 'light'
    setTheme(initial)
    applyTheme(initial)

    // Re-apply on route changes (Next.js client navigation)
    const observer = new MutationObserver(() => {
      const current = localStorage.getItem('wct-theme') || 'light'
      applyThemeToDOM(current)
    })
    observer.observe(document.body, { childList: true, subtree: true })

    // Cleanup after initial heavy fix
    const cleanup = setTimeout(() => {
      const current = localStorage.getItem('wct-theme') || 'light'
      applyThemeToDOM(current)
    }, 500)

    return () => {
      observer.disconnect()
      clearTimeout(cleanup)
    }
  }, [applyTheme])

  const toggleTheme = useCallback(() => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    localStorage.setItem('wct-theme', next)
    applyTheme(next)
    // Double-apply to catch any lazy-loaded content
    setTimeout(() => applyThemeToDOM(next), 100)
    setTimeout(() => applyThemeToDOM(next), 500)
  }, [theme, applyTheme])

  return (
    <ThemeContext.Provider value={{ theme: mounted ? theme : 'light', toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
