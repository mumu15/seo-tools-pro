import SentenceCounter from './PageClient'

export const metadata = {
  title: 'Free Sentence Counter Online | WordCounterTool.net',
  description: 'Count sentences, words, paragraphs and average sentence length instantly. Free sentence counter for writers and students.',
  alternates: { canonical: 'https://www.wordcountertool.net/sentence-counter' },
}

export default function Page() {
  return <SentenceCounter />
}
