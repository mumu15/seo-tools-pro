import './globals.css'

export const metadata = {
  metadataBase: new URL('https://www.wordcountertool.net'),
  title: {
    default: 'SEO Tools Pro – Free Online SEO & Writing Tools',
    template: '%s | SEO Tools Pro'
  },
  description: 'Free professional SEO and writing tools. Word counter, keyword density checker, meta tag generator, readability checker and more. Instant results, no sign up.',
  keywords: ['word counter', 'keyword density checker', 'meta tag generator', 'readability checker', 'seo tools', 'free seo tools'],
  robots: { index: true, follow: true }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Replace with your AdSense publisher ID when ready */}
       <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8934829211507329" crossOrigin="anonymous"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
