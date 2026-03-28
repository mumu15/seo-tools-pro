import WordsPerMinute from './PageClient'

export const metadata = {
  title: 'Words Per Minute Test — How Fast Do You Type?',
  description: 'Test your typing speed in WPM. Average is 40 WPM, good is 60+, professional is 80+. Free typing speed test with accuracy tracking.',
  alternates: { canonical: 'https://www.wordcountertool.net/words-per-minute' },
}

export default function Page() {
  return <WordsPerMinute />
}
