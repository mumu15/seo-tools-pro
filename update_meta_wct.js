const fs = require('fs');

const updates = [
  {
    file: 'app/word-counter/page.js',
    title: 'Free Word Counter Online — Words, Characters, Speaking Time & Case Changer',
    desc: 'Free word counter with speaking time, case changer, find & replace and download. Count words, characters, sentences and paragraphs instantly. No sign up required.',
  },
  {
    file: 'app/character-counter/page.js',
    title: 'Free Character Counter — Twitter, Instagram, SMS & 9 Platform Limit Bars',
    desc: 'Free character counter with live platform limit bars for Twitter, Instagram, LinkedIn, SMS, YouTube and more. See instantly if you are over the limit. No sign up needed.',
  },
  {
    file: 'app/reading-time/page.js',
    title: 'Reading Time Calculator — Slow, Average & Fast Reader + Speaking Time',
    desc: 'Free reading time calculator with slow, average and fast reader modes. Also calculates speaking time for presentations. Includes reading speed reference table.',
  },
  {
    file: 'app/hashtag-counter/page.js',
    title: 'Free Hashtag Counter — Platform Limit Bars for Instagram, Twitter, TikTok',
    desc: 'Free hashtag counter with visual platform limit bars for Instagram, Twitter, TikTok, LinkedIn and YouTube. Detects duplicates and extracts all hashtags instantly.',
  },
  {
    file: 'app/sentence-counter/page.js',
    title: 'Free Sentence Counter — Avg Sentence Length, Longest Sentence & Quality Tips',
    desc: 'Free sentence counter that analyzes average sentence length, detects your longest sentence and gives writing quality tips. Improve readability instantly.',
  },
  {
    file: 'app/readability-checker/page.js',
    title: 'Free Readability Checker — Flesch Score Gauge, Grade Level & Improvement Tips',
    desc: 'Free readability checker with circular Flesch score gauge, US grade level badge and actionable improvement tips. Instantly check if your content is easy to read.',
  },
  {
    file: 'app/keyword-density/page.js',
    title: 'Free Keyword Density Checker — Visual Bars, SEO Tips & CSV Export',
    desc: 'Free keyword density checker with color-coded density bars, ideal vs too-high warnings and CSV export. Find over-used keywords and fix SEO issues instantly.',
  },
  {
    file: 'app/twitter-thread-counter/page.js',
    title: 'Free Twitter Thread Counter — Auto-Split Threads & Copy Individual Tweets',
    desc: 'Free Twitter thread counter with auto-split feature. Paste long content and it instantly splits into perfect 280-character tweets. Copy each tweet individually.',
  },
  {
    file: 'app/sentence-counter/page.js',
    title: 'Free Sentence Counter — Avg Sentence Length, Longest Sentence & Quality Tips',
    desc: 'Free sentence counter that shows average sentence length, detects your longest sentence and gives writing quality tips. Improve readability score instantly.',
  },
  {
    file: 'app/words-per-page/page.js',
    title: 'Words Per Page Calculator — Convert Word Count to Pages for Any Font Size',
    desc: 'Free words per page calculator. Convert word count to pages for any font size and spacing. Find out how many words are in 1, 2, 5 or 10 pages instantly.',
  },
  {
    file: 'app/words-per-minute/page.js',
    title: 'Free Typing Speed Test — WPM Test with Live Results & Speed Rating',
    desc: 'Free typing speed test online. Test your WPM in 60 seconds with live character counting and speed rating. See if you are slow, average or fast typist.',
  },
  {
    file: 'app/meta-tag-generator/page.js',
    title: 'Free Meta Tag Generator — Live Google Preview & Character Count Warnings',
    desc: 'Free meta tag generator with live Google search preview. Get instant warnings if title or description is too long. Generate perfect SEO meta tags in seconds.',
  },
];

let fixed = 0;

updates.forEach(({ file, title, desc }) => {
  if (!fs.existsSync(file)) {
    console.log(`⚠️  Not found: ${file}`);
    return;
  }

  let content = fs.readFileSync(file, 'utf8');

  // Update title
  content = content.replace(
    /title: ['"][^'"]+['"]/,
    `title: '${title}'`
  );

  // Update description
  content = content.replace(
    /description: ['"][^'"]+['"]/,
    `description: '${desc}'`
  );

  fs.writeFileSync(file, content, 'utf8');
  console.log(`✅ Updated: ${file}`);
  fixed++;
});

console.log(`\n🎉 Done! ${fixed} files updated with new feature-rich metadata.`);
console.log('Run: git add . && git commit -m "Update metadata to reflect all new tool features" && git push');
