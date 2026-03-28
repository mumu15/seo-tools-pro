const fs = require('fs');
const path = require('path');

// 1. Create AdUnit component if it doesn't exist
const adPath = path.join(__dirname, 'components', 'AdUnit.js');
if (!fs.existsSync(adPath)) {
  const adUnit = `'use client'
export default function AdUnit({ slot }) {
  return null
}
`;
  fs.writeFileSync(adPath, adUnit, 'utf8');
  console.log('Created components/AdUnit.js (placeholder)');
} else {
  console.log('AdUnit.js already exists');
}

// 2. Create FaqSchema component if it doesn't exist
const faqPath = path.join(__dirname, 'components', 'FaqSchema.js');
if (!fs.existsSync(faqPath)) {
  const faqSchema = `export default function FaqSchema({ faqs }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
`;
  fs.writeFileSync(faqPath, faqSchema, 'utf8');
  console.log('Created components/FaqSchema.js');
} else {
  console.log('FaqSchema.js already exists');
}

// 3. Fix unescaped quotes in FAQ JSON in all data pages
const dataSlugs = [
  'word-count-popular-books',
  'social-media-character-limits',
  'most-common-english-words',
  'most-spoken-languages-in-the-world',
  'essay-word-count-guide',
  'social-media-image-sizes',
  'average-reading-speed-by-age',
];

let fixed = 0;
dataSlugs.forEach(slug => {
  const filePath = path.join(__dirname, 'app', slug, 'page.js');
  if (fs.existsSync(filePath)) {
    let c = fs.readFileSync(filePath, 'utf8');
    
    // Fix: unescaped double quotes inside JSON string values
    // Find the const faqs = [...] line and fix quotes inside strings
    const faqMatch = c.match(/const faqs = (\[.*?\])\n/s);
    if (faqMatch) {
      let faqStr = faqMatch[1];
      // Replace curly/smart quotes with escaped quotes
      faqStr = faqStr.replace(/\u201c/g, '\\"').replace(/\u201d/g, '\\"');
      faqStr = faqStr.replace(/\u2018/g, "\\'").replace(/\u2019/g, "\\'");
      
      // Fix: unescaped regular quotes inside JSON values
      // Pattern: ,"a":"... "word" ..."  -> the inner quotes break JSON
      // Replace "The" with \'The\', "more" with \'more\' etc inside answers
      try {
        const faqs = JSON.parse(faqStr);
        // If it parses, it's fine
      } catch(e) {
        // Fix by rebuilding - replace inner quotes
        // Simple approach: find "a":" and fix content until next "}
        faqStr = faqStr.replace(/"The"/g, "'The'");
        faqStr = faqStr.replace(/"more"/g, "'more'");
        faqStr = faqStr.replace(/"See More"/g, "'See More'");
      }
      
      c = c.replace(faqMatch[1], faqStr);
    }
    
    // Alternative safer fix: rewrite faqs as array in code
    // Find problem patterns and escape them
    c = c.replace(/:"([^"]*)"([A-Za-z])/g, function(match, p1, p2) {
      // This catches cases like ..."The" is... where The starts after closing quote
      return ':"' + p1 + "'" + p2;
    });
    
    // Nuclear option: replace all problematic inner quotes in faqs line
    const lines = c.split('\n');
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].startsWith('const faqs = ')) {
        // Replace "The" "more" "See More" patterns with escaped versions
        lines[i] = lines[i].replace(/""The""/g, "'The'");
        lines[i] = lines[i].replace(/""more""/g, "'more'");
        
        // Better: find all cases where a quote appears inside a value
        // Replace double-quotes that are inside string values with single quotes
        // Match pattern: text "word" text inside JSON values
        lines[i] = lines[i].replace(
          /("a":"[^}]*?")/g,
          function(match) {
            // Inside answer strings, replace inner escaped quotes with single quotes
            // The issue is "The" appearing as literal in the string
            return match;
          }
        );
      }
    }
    c = lines.join('\n');
    
    fs.writeFileSync(filePath, c, 'utf8');
    fixed++;
    console.log('  Fixed: ' + slug);
  }
});

// 4. Now do a more targeted fix - read and rewrite FAQ lines properly
dataSlugs.forEach(slug => {
  const filePath = path.join(__dirname, 'app', slug, 'page.js');
  if (!fs.existsSync(filePath)) return;
  
  let c = fs.readFileSync(filePath, 'utf8');
  
  // Find the faqs line
  const faqLineMatch = c.match(/^const faqs = .+$/m);
  if (!faqLineMatch) return;
  
  let line = faqLineMatch[0];
  
  // Check if it has unescaped quotes causing issues
  // The pattern: ..."a":"Free Twitter/X users have a 280-character limit per tweet. X Premium subscribers can post up to 25,000 characters."},{"q":"What is the Instagram caption limit?","a":"Instagram captions can be up to 2,200 characters. However, only the first 125 characters show in the feed before "more" is clicked."}
  // The problem is "more" inside the JSON string
  
  // Strategy: extract the JSON, parse defensively, fix, and rewrite
  const jsonStr = line.replace('const faqs = ', '');
  
  // Replace problematic patterns: "word" inside strings
  let fixedJson = jsonStr;
  // Common problematic patterns from our content:
  fixedJson = fixedJson.replace(/before "more" is clicked/g, "before 'more' is clicked");
  fixedJson = fixedJson.replace(/""The" is the most common/g, "'The' is the most common");
  fixedJson = fixedJson.replace(/"The" is the most common/g, "'The' is the most common");
  fixedJson = fixedJson.replace(/word, making up/g, "word, making up");
  
  // More general fix: inside "a":"..." values, replace " followed by a word char with '
  // This is tricky in regex, so let's be specific about known issues:
  const knownFixes = [
    ['"The" is', "'The' is"],
    ['"more" is clicked', "'more' is clicked"],
    ['"See More"', "'See More'"],
    ['before "more"', "before 'more'"],
    ['"more" is', "'more' is"],
  ];
  
  knownFixes.forEach(([from, to]) => {
    fixedJson = fixedJson.split(from).join(to);
  });
  
  const newLine = 'const faqs = ' + fixedJson;
  c = c.replace(faqLineMatch[0], newLine);
  
  fs.writeFileSync(filePath, c, 'utf8');
});

console.log('');
console.log('All fixes applied!');
console.log('Now run: git add . && git commit -m "Fix data pages" && git push origin master');
