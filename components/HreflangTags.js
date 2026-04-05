export default function HreflangTags({ currentLang, currentPath }) {
  const langs = [
    { code: 'en', slug: '', name: 'English' },
    { code: 'ar', slug: 'arabic', name: 'Arabic' },
    { code: 'zh', slug: 'chinese', name: 'Chinese' },
    { code: 'nl', slug: 'dutch', name: 'Dutch' },
    { code: 'fr', slug: 'french', name: 'French' },
    { code: 'de', slug: 'german', name: 'German' },
    { code: 'hi', slug: 'hindi', name: 'Hindi' },
    { code: 'it', slug: 'italian', name: 'Italian' },
    { code: 'ja', slug: 'japanese', name: 'Japanese' },
    { code: 'ko', slug: 'korean', name: 'Korean' },
    { code: 'pl', slug: 'polish', name: 'Polish' },
    { code: 'pt', slug: 'portuguese', name: 'Portuguese' },
    { code: 'ru', slug: 'russian', name: 'Russian' },
    { code: 'es', slug: 'spanish', name: 'Spanish' },
    { code: 'sv', slug: 'swedish', name: 'Swedish' },
    { code: 'tr', slug: 'turkish', name: 'Turkish' },
  ];

  const base = 'https://www.wordcountertool.net';

  return (
    <>
      {langs.map(lang => (
        <link
          key={lang.code}
          rel="alternate"
          hrefLang={lang.code}
          href={lang.slug ? base + '/word-counter/language/' + lang.slug : base + '/word-counter'}
        />
      ))}
      <link rel="alternate" hrefLang="x-default" href={base + '/word-counter'} />
    </>
  );
}
