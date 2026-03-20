import TwitterThreadCounter from './PageClient'

export const metadata = {
  title: 'Twitter Thread Counter & Splitter | WordCounterTool.net',
  description: 'Split long text into Twitter/X threads. Count characters per tweet, preview your thread, and copy individual tweets. Free thread tool.',
  alternates: { canonical: 'https://www.wordcountertool.net/twitter-thread-counter' },
}

export default function Page() {
  return <TwitterThreadCounter />
}
