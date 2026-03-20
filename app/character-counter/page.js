import CharacterCounter from './PageClient'

export const metadata = {
  title: 'Free Character Counter Online | WordCounterTool.net',
  description: 'Count characters, words, sentences and paragraphs instantly. Check character limits for Twitter, Instagram, LinkedIn and more. Free, no sign up.',
  alternates: { canonical: 'https://www.wordcountertool.net/character-counter' },
}

export default function Page() {
  return <CharacterCounter />
}
