import CharacterCounter from './PageClient'

export const metadata = {
  title: 'Character Counter — Check Twitter, Instagram & LinkedIn Limits',
  description: 'Count characters instantly with live social media limits. See remaining characters for Twitter (280), Instagram (2200), LinkedIn (3000), and more.',
  alternates: { canonical: 'https://www.wordcountertool.net/character-counter' },
}

export default function Page() {
  return <CharacterCounter />
}
