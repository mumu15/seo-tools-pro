'use client'
import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext({ theme: 'light', toggleTheme: () => {} })

export function useTheme() {
  return useContext(ThemeContext)
}

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem('wct-theme')
    if (saved === 'dark' || saved === 'light') {
      setTheme(saved)
      document.documentElement.setAttribute('data-theme', saved)
    } else {
      document.documentElement.setAttribute('data-theme', 'light')
    }
  }, [])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    localStorage.setItem('wct-theme', next)
    document.documentElement.setAttribute('data-theme', next)
  }

  // Prevent flash — render children immediately but with a class
  return (
    <ThemeContext.Provider value={{ theme: mounted ? theme : 'light', toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
