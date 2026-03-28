import ReadingTime from './PageClient'

export const metadata = {
  title: 'Reading Time Calculator — How Long to Read Your Text?',
  description: 'Calculate reading time and speaking time for any text. Adjustable speed for slow, average, and fast readers. Free reading time estimator.',
  alternates: { canonical: 'https://www.wordcountertool.net/reading-time' },
}

export default function Page() {
  return <ReadingTime />
}
