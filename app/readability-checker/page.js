import ReadabilityChecker from './PageClient'

export const metadata = {
  title: 'Free Readability Checker | WordCounterTool.net',
  description: 'Check your Flesch-Kincaid readability score, grade level, and reading ease. Improve your writing with our free readability tool.',
  alternates: { canonical: 'https://www.wordcountertool.net/readability-checker' },
}

export default function Page() {
  return <ReadabilityChecker />
}
