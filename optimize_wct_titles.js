const fs = require('fs');

console.log('Optimizing WCT titles for CTR...');
console.log('');

const OPTS = [
  {
    file: 'app/word-counter/page.js',
    old: 'Free Word Counter Online | WordCounterTool.net',
    new: 'Word Counter — Count Words, Characters & Sentences Instantly',
    desc: 'Paste your text and get instant word count, character count, sentences, paragraphs, and reading time. Free, no sign-up. Works in 15+ languages.'
  },
  {
    file: 'app/character-counter/page.js',
    old: 'Free Character Counter Online | WordCounterTool.net',
    new: 'Character Counter — Check Twitter, Instagram & LinkedIn Limits',
    desc: 'Count characters instantly with live social media limits. See remaining characters for Twitter (280), Instagram (2200), LinkedIn (3000), and more.'
  },
  {
    file: 'app/reading-time/page.js',
    old: 'Reading Time Calculator | WordCounterTool.net',
    new: 'Reading Time Calculator — How Long to Read Your Text?',
    desc: 'Calculate reading time and speaking time for any text. Adjustable speed for slow, average, and fast readers. Free reading time estimator.'
  },
  {
    file: 'app/keyword-density/page.js',
    old: 'Free Keyword Density Checker | WordCounterTool.net',
    new: 'Keyword Density Checker — Is Your SEO On Point?',
    desc: 'Analyze keyword frequency and density in your content. Find overused words, check ideal 1-2% density, and optimize for Google rankings.'
  },
  {
    file: 'app/readability-checker/page.js',
    old: 'Free Readability Checker | WordCounterTool.net',
    new: 'Readability Checker — Is Your Writing Too Complex?',
    desc: 'Check your text readability with Flesch-Kincaid, Gunning Fog, and more. Get a grade level score and tips to simplify your writing.'
  },
  {
    file: 'app/words-per-minute/page.js',
    old: 'Words Per Minute Calculator | WordCounterTool.net',
    new: 'Words Per Minute Test — How Fast Do You Type?',
    desc: 'Test your typing speed in WPM. Average is 40 WPM, good is 60+, professional is 80+. Free typing speed test with accuracy tracking.'
  },
  {
    file: 'app/words-to-pages/page.js',
    old: 'Words to Pages Converter — How Many Pages Is Your Text? | WordCounterTool.net',
    new: 'Words to Pages Converter — How Many Pages Is 1000 Words?',
    desc: 'Convert any word count to pages. 250 words = 1 page double-spaced. Works for any font, size, and spacing. Free instant converter.'
  },
  {
    file: 'app/meta-tag-generator/page.js',
    old: 'Free Meta Tag Generator | WordCounterTool.net',
    new: 'Meta Tag Generator — Perfect SEO Titles & Descriptions',
    desc: 'Generate optimized meta titles and descriptions for Google. See character count, pixel width preview, and SEO best practices. Free tool.'
  },
  {
    file: 'app/sentence-counter/page.js',
    old: 'Free Sentence Counter Online | WordCounterTool.net',
    new: 'Sentence Counter — Count Sentences & Avg Length',
    desc: 'Count sentences, calculate average sentence length, and find your longest and shortest sentences. Improve readability instantly.'
  },
];

let fixed = 0;

OPTS.forEach(opt => {
  if (!fs.existsSync(opt.file)) {
    console.log('  SKIP: ' + opt.file);
    return;
  }

  let c = fs.readFileSync(opt.file, 'utf8');

  if (c.includes(opt.old)) {
    // Replace title everywhere it appears
    c = c.split(opt.old).join(opt.new);

    // Also update description if possible
    if (opt.desc) {
      const descMatch = c.match(/description:\s*'([^']+)'/);
      if (descMatch) {
        c = c.replace("description: '" + descMatch[1] + "'", "description: '" + opt.desc + "'");
      }
    }

    fs.writeFileSync(opt.file, c, 'utf8');
    console.log('  UPDATED: ' + opt.file.split('/')[1]);
    fixed++;
  } else {
    console.log('  SKIP (title not found): ' + opt.file.split('/')[1]);
  }
});

console.log('');
console.log('Updated ' + fixed + ' pages');
console.log('');
console.log('Run: git add . && git commit -m "Optimize tool titles for CTR" && git push origin master');
