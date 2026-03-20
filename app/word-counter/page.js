import WordCounter from './PageClient'

export const metadata = {
  title: 'Free Word Counter Online | WordCounterTool.net',
  description: 'Count words, characters, sentences and paragraphs instantly. Reading time, speaking time, and more. Free word counter, no sign up.',
  alternates: { canonical: 'https://www.wordcountertool.net/word-counter' },
}

export default function Page() {
  return <WordCounter />
}
