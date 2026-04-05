const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'app', 'page.js');
let content = fs.readFileSync(file, 'utf8');

// The stats array currently has "15 Languages" twice
// Find the SECOND occurrence and change it to something unique

// Strategy: Replace the last ['15', 'Languages'] with ['24/7', 'Always Free']
// We need to find the array with all 4 stats and fix the duplicate

// Pattern: The stats are in an array like [['250+', 'Free Pages'], ['11', 'Pro Tools'], ['15', 'Languages'], ['15', 'Languages']]
// Replace the last one

const before = content;

// Find all occurrences of ['15', 'Languages']
let count = 0;
content = content.replace(/\['15',\s*'Languages'\]/g, (match) => {
  count++;
  if (count >= 2) {
    return "['24/7', 'Always Free']";
  }
  return match;
});

// Also handle object style: { number: '15', label: 'Languages', icon: '🌍' } if duplicated
count = 0;
content = content.replace(/\{\s*number:\s*'15',\s*label:\s*'Languages',\s*icon:\s*'🌍'\s*\}/g, (match) => {
  count++;
  if (count >= 2) {
    return "{ number: '24/7', label: 'Always Free', icon: '💚' }";
  }
  return match;
});

if (content !== before) {
  fs.writeFileSync(file, content, 'utf8');
  console.log('✅ Fixed duplicate stat: second "15 Languages" → "24/7 Always Free"');
} else {
  console.log('⚠️  No duplicate found. Check app/page.js manually.');
}

console.log('\nNow run:');
console.log('  git add . && git commit -m "Fix duplicate Languages stat on homepage" && git push origin master');
