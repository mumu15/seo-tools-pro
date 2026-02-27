import './globals.css'

export const metadata = {
  metadataBase: new URL('https://www.wordcountertool.net'),
  title: {
    default: 'WordCounterTool.net – Free Online Word Counter & SEO Tools',
    template: '%s | WordCounterTool.net'
  },
  description: 'Free professional word counter and SEO writing tools. Word counter, keyword density checker, meta tag generator, readability checker and more. Instant results, no sign up.',
  keywords: ['word counter', 'keyword density checker', 'meta tag generator', 'readability checker', 'seo tools', 'free seo tools'],
  icons: {
    icon: '/favicon.svg',
  },
  robots: { index: true, follow: true }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8934829211507329" crossOrigin="anonymous"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}