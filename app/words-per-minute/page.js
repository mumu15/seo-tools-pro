import WordsPerMinute from './PageClient'

export const metadata = {
  title: 'Words Per Minute Calculator | WordCounterTool.net',
  description: 'Calculate your reading speed and typing speed in words per minute. See how you compare to averages. Free WPM calculator.',
  alternates: { canonical: 'https://www.wordcountertool.net/words-per-minute' },
}

export default function Page() {
  return <WordsPerMinute />
}
