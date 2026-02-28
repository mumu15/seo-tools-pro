import './globals.css'

export const metadata = {
  metadataBase: new URL('https://www.wordcountertool.net'),
  title: {
    default: 'WordCounterTool.net – Free Online Word Counter & SEO Tools',
    template: '%s | WordCounterTool.net'
  },
  description: 'Free professional word counter and SEO writing tools. Word counter, keyword density checker, meta tag generator, readability checker and more. Instant results, no sign up.',
  keywords: ['word counter', 'keyword density checker', 'meta tag generator', 'readability checker', 'character counter', 'sentence counter', 'free seo tools'],
  authors: [{ name: 'WordCounterTool.net' }],
  creator: 'WordCounterTool.net',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.wordcountertool.net',
    siteName: 'WordCounterTool.net',
    title: 'WordCounterTool.net – Free Online Word Counter & SEO Tools',
    description: 'Free professional word counter and SEO writing tools. Word counter, keyword density checker, meta tag generator, readability checker and more. Instant results, no sign up.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WordCounterTool.net – Free Online Word Counter & SEO Tools',
    description: 'Free professional word counter and SEO writing tools. Instant results, no sign up.',
    site: '@wordcountertool',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-9VCD465V0S"></script>
        <script dangerouslySetInnerHTML={{__html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-9VCD465V0S');
        `}} />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8934829211507329" crossOrigin="anonymous"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}