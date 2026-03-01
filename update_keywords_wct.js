const fs = require('fs');

const updates = [
  {
    file: 'app/word-counter/page.js',
    oldMeta: /title: ['"].*?['"]/,
    newTitle: 'Free Word Counter Online — Count Words Instantly, No Sign Up',
    newDesc: 'Free word counter online with no sign up required. Count words, characters, sentences and paragraphs instantly as you type. Trusted by 50,000+ writers monthly.',
    oldH1: 'Word Counter',
    newH1: 'Free Word Counter Online',
    oldP: 'Count words, characters, sentences and more instantly as you type',
    newP: 'Count words, characters, sentences and paragraphs instantly — free, no sign up required',
  },
  {
    file: 'app/keyword-density/page.js',
    newTitle: 'Keyword Density Checker Free Online — SEO Analysis Tool 2026',
    newDesc: 'Free keyword density checker online. Find out what percentage of your content is your target keyword. Ideal keyword density for SEO is 1-2%. Instant results.',
    oldH1: 'Keyword Density Checker',
    newH1: 'Keyword Density Checker — Free SEO Tool',
    oldP: /Count keyword.*?instantly/,
    newP: 'Check keyword density percentage in seconds — free keyword density checker for SEO',
  },
  {
    file: 'app/meta-tag-generator/page.js',
    newTitle: 'Free Meta Tag Generator Online — SEO Title & Description Tool 2026',
    newDesc: 'Free meta tag generator online. Create perfect SEO meta titles under 60 characters and meta descriptions under 160 characters. Live Google search preview included.',
    oldH1: 'Meta Tag Generator',
    newH1: 'Free Meta Tag Generator for SEO',
    oldP: /Generate.*?meta tags/,
    newP: 'Generate perfect SEO meta titles and descriptions with live Google preview — 100% free',
  },
  {
    file: 'app/readability-checker/page.js',
    newTitle: 'Free Readability Score Checker Online — Flesch-Kincaid Tool 2026',
    newDesc: 'Free readability score checker online. Check your Flesch-Kincaid readability score instantly. Aim for a score of 60-70 for most web content. No sign up needed.',
    oldH1: 'Readability Checker',
    newH1: 'Free Readability Score Checker Online',
    oldP: /Check.*?readability/,
    newP: 'Check your Flesch-Kincaid readability score instantly — free online readability checker',
  },
  {
    file: 'app/character-counter/page.js',
    newTitle: 'Free Character Counter Online — Twitter, Instagram, SMS Limit Checker',
    newDesc: 'Free character counter online for Twitter, Instagram, SMS and more. Count characters with and without spaces instantly. Check platform character limits in real time.',
    oldH1: 'Character Counter',
    newH1: 'Free Character Counter Online',
    oldP: /Count characters.*?more/,
    newP: 'Count characters for Twitter, Instagram, SMS and meta tags — free character counter online',
  },
  {
    file: 'app/sentence-counter/page.js',
    newTitle: 'Free Sentence Counter Online — Count Sentences Instantly 2026',
    newDesc: 'Free sentence counter online. Count sentences in any text instantly. Also counts words, characters and paragraphs. No sign up or account required.',
    oldH1: 'Sentence Counter',
    newH1: 'Free Sentence Counter Online',
    oldP: /Count sentences.*?instantly/,
    newP: 'Count sentences, words and paragraphs in any text instantly — free online sentence counter',
  },
  {
    file: 'app/words-per-page/page.js',
    newTitle: 'Words Per Page Calculator — How Many Words in 1, 2, 5, 10 Pages?',
    newDesc: 'Free words per page calculator. Find out how many words are in 1, 2, 5 or 10 pages for any font size and spacing. Convert word count to pages instantly.',
    oldH1: 'Words Per Page Calculator',
    newH1: 'Words Per Page Calculator — Free Online Tool',
    oldP: /Convert.*?pages/,
    newP: 'Convert word count to pages or pages to words — free words per page calculator for any font size',
  },
  {
    file: 'app/reading-time/page.js',
    newTitle: 'Reading Time Calculator Free — How Long to Read Any Text?',
    newDesc: 'Free reading time calculator. Find out how long it takes to read any text based on average reading speed of 200-250 words per minute. Instant results.',
    oldH1: 'Reading Time Calculator',
    newH1: 'Reading Time Calculator — How Long to Read Your Content?',
    oldP: /Estimate.*?read/,
    newP: 'Calculate how long it takes to read any text — free reading time estimator based on WPM',
  },
  {
    file: 'app/words-per-minute/page.js',
    newTitle: 'Free Typing Speed Test Online — Words Per Minute WPM Test 2026',
    newDesc: 'Free typing speed test online. Test your WPM (words per minute) typing speed in 60 seconds. Average typing speed is 40 WPM. Can you beat it? No sign up needed.',
    oldH1: 'WPM Typing Speed Test',
    newH1: 'Free Typing Speed Test — Words Per Minute (WPM)',
    oldP: /Test.*?typing speed/,
    newP: 'Test your typing speed in words per minute (WPM) — free online typing speed test, no sign up',
  },
  {
    file: 'app/hashtag-counter/page.js',
    newTitle: 'Free Hashtag Counter — How Many Hashtags on Instagram, Twitter 2026?',
    newDesc: 'Free hashtag counter online. Count hashtags for Instagram, Twitter, TikTok and LinkedIn. Instagram allows up to 30 hashtags. Find the ideal number for each platform.',
    oldH1: 'Hashtag Counter',
    newH1: 'Free Hashtag Counter — Instagram, Twitter, TikTok',
    oldP: /Count hashtags.*?more/,
    newP: 'Count hashtags and check platform limits for Instagram, Twitter, TikTok and LinkedIn — free tool',
  },
  {
    file: 'app/twitter-thread-counter/page.js',
    newTitle: 'Free Twitter Thread Counter — Plan X Threads Under 280 Characters',
    newDesc: 'Free Twitter thread counter online. Plan your Twitter threads and check character count per tweet. Twitter allows 280 characters per tweet. Never go over the limit again.',
    oldH1: 'Twitter Thread Counter',
    newH1: 'Free Twitter Thread Counter — Plan Your X Threads',
    oldP: /Plan.*?threads/,
    newP: 'Plan Twitter threads and count characters per tweet — free thread counter for X (Twitter)',
  },
];

let fixed = 0;

updates.forEach(({ file, newTitle, newDesc, oldH1, newH1, oldP, newP }) => {
  if (!fs.existsSync(file)) {
    console.log(`⚠️  Not found: ${file}`);
    return;
  }

  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  // Update title in metadata
  if (content.includes("title: '") || content.includes('title: "')) {
    content = content.replace(
      /title: ['"]([^'"]+)['"]/,
      `title: '${newTitle}'`
    );
    changed = true;
  }

  // Update description in metadata
  if (content.includes("description: '") || content.includes('description: "')) {
    content = content.replace(
      /description: ['"]([^'"]+)['"]/,
      `description: '${newDesc}'`
    );
    changed = true;
  }

  // Update H1
  if (oldH1 && content.includes(oldH1)) {
    content = content.replace(oldH1, newH1);
    changed = true;
  }

  // Update subtitle paragraph
  if (oldP && newP) {
    if (typeof oldP === 'string' && content.includes(oldP)) {
      content = content.replace(oldP, newP);
      changed = true;
    } else if (oldP instanceof RegExp) {
      content = content.replace(oldP, newP);
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`✅ Updated: ${file}`);
    fixed++;
  } else {
    console.log(`⏭️  No changes: ${file}`);
  }
});

console.log(`\n🎉 Done! ${fixed} files updated.`);
console.log('Run: git add . && git commit -m "Update tool pages with targeted BOFU and long tail keywords" && git push');
