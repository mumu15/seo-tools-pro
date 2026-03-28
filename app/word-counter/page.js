import WordCounter from './PageClient'

export const metadata = {
  title: 'Word Counter — Count Words, Characters & Sentences Instantly',
  description: 'Paste your text and get instant word count, character count, sentences, paragraphs, and reading time. Free, no sign-up. Works in 15+ languages.',
  alternates: { canonical: 'https://www.wordcountertool.net/word-counter' },
}

export default function Page() {
  return <WordCounter />
}
