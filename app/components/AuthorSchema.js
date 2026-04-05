export default function AuthorSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "WordCounterTool.net",
    "url": "https://www.wordcountertool.net",
    "logo": "https://www.wordcountertool.net/og-image.png",
    "sameAs": [],
    "description": "Free professional word counter and SEO writing tools. 250+ pages of tools, guides, and calculators."
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ArticleSchema({ title, description, url, datePublished, dateModified }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "url": url,
    "datePublished": datePublished || "2026-02-01",
    "dateModified": dateModified || new Date().toISOString().split('T')[0],
    "author": {
      "@type": "Organization",
      "name": "WordCounterTool.net",
      "url": "https://www.wordcountertool.net"
    },
    "publisher": {
      "@type": "Organization",
      "name": "WordCounterTool.net",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.wordcountertool.net/og-image.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    }
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
