export default function sitemap() {
  const base = 'https://www.wordcountertool.net';
  const today = '2026-03-08';

  const staticPages = ["/","/word-counter","/character-counter","/keyword-density","/meta-tag-generator","/readability-checker","/sentence-counter","/reading-time","/words-per-minute","/words-per-page","/twitter-thread-counter","/about","/contact","/privacy-policy","/faq","/blog"];
  const blogSlugs = ["how-many-words-per-page","ideal-blog-post-length-for-seo","how-to-improve-readability-score","how-many-words-in-a-novel","what-is-keyword-density","how-to-write-meta-descriptions","average-reading-speed","how-many-hashtags-to-use","how-to-write-twitter-thread","average-typing-speed","how-to-count-words-online","how-many-words-in-a-paragraph","how-many-words-in-a-short-story","how-many-words-in-a-speech","how-many-characters-in-a-tweet","instagram-caption-length","how-to-write-seo-title-tags","what-is-flesch-kincaid-score","how-many-words-in-a-resume","how-to-type-faster","how-to-write-blog-introduction","seo-content-length-guide","how-to-write-product-descriptions","long-tail-keywords-guide","how-to-write-headline-formulas","how-to-use-keywords-in-blog-posts","how-many-words-in-a-cover-letter","how-to-write-for-skimmable-content","how-to-write-email-subject-lines","how-to-write-blog-conclusion","words-per-minute-reading-guide"];
  const professionSlugs = ["student","blogger","writer","journalist","lawyer","copywriter","teacher","seo-specialist","social-media-manager","content-marketer","academic","novelist","email-marketer","screenwriter","hr-professional"];
  const readingTimeSlugs = ["100-words","200-words","300-words","400-words","500-words","600-words","700-words","800-words","900-words","1000-words","1200-words","1500-words","1700-words","2000-words","2500-words","3000-words","3500-words","4000-words","5000-words","6000-words","7000-words","7500-words","8000-words","9000-words","10000-words","15000-words","20000-words","25000-words","30000-words","40000-words","50000-words","60000-words","75000-words","80000-words","90000-words","100000-words"];
  const characterLimitSlugs = ["twitter","instagram","linkedin","facebook","tiktok","youtube","pinterest","google-ads","meta-title","meta-description","email-subject-line","sms"];
  const documentSlugs = ["essay","thesis","cover-letter","resume","blog-post","research-paper","book","email","speech","press-release","business-plan","short-story","linkedin-post","product-description","grant-proposal"];

  const entries = [
    ...staticPages.map(u => ({
      url: base + u,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: u === '/' ? 1.0 : u === '/word-counter' ? 0.9 : 0.8,
    })),
    ...blogSlugs.map(s => ({
      url: base + '/blog/' + s,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.7,
    })),
    {
      url: base + '/word-counter/for',
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...professionSlugs.map(s => ({
      url: base + '/word-counter/for/' + s,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    })),
    {
      url: base + '/reading-time/for',
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...readingTimeSlugs.map(s => ({
      url: base + '/reading-time/for/' + s,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    })),
    {
      url: base + '/character-limits',
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...characterLimitSlugs.map(s => ({
      url: base + '/character-limits/' + s,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    })),
    {
      url: base + '/word-count/for',
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...documentSlugs.map(s => ({
      url: base + '/word-count/for/' + s,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    })),
  ];

  return entries;
}
