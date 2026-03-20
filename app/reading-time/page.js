import ReadingTime from './PageClient'

export const metadata = {
  title: 'Reading Time Calculator | WordCounterTool.net',
  description: 'Calculate how long it takes to read any text. Get reading time, speaking time, and word count instantly. Free reading time estimator.',
  alternates: { canonical: 'https://www.wordcountertool.net/reading-time' },
}

export default function Page() {
  return <ReadingTime />
}
