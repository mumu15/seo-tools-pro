import ReadabilityChecker from './PageClient'

export const metadata = {
  title: 'Readability Checker — Is Your Writing Too Complex?',
  description: 'Check your text readability with Flesch-Kincaid, Gunning Fog, and more. Get a grade level score and tips to simplify your writing.',
  alternates: { canonical: 'https://www.wordcountertool.net/readability-checker' },
}

export default function Page() {
  return <ReadabilityChecker />
}
