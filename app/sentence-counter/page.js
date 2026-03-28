import SentenceCounter from './PageClient'

export const metadata = {
  title: 'Sentence Counter — Count Sentences & Avg Length',
  description: 'Count sentences, calculate average sentence length, and find your longest and shortest sentences. Improve readability instantly.',
  alternates: { canonical: 'https://www.wordcountertool.net/sentence-counter' },
}

export default function Page() {
  return <SentenceCounter />
}
