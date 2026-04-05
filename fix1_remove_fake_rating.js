const fs = require('fs');
const path = require('path');

// FIX 1: Remove fake "4.9/5 User Rating" from homepage
// Replace with "15 Languages" which is an actual site feature

const file = path.join(__dirname, 'app', 'page.js');

if (!fs.existsSync(file)) {
  console.error('❌ File not found:', file);
  console.error('   Make sure you run this from the project root: C:\\Users\\acess\\Desktop\\seo-tools-pro\\seo-tools-pro');
  process.exit(1);
}

let content = fs.readFileSync(file, 'utf8');
const original = content;

// Pattern 1: The redesigned homepage stats (array style)
// Matches: ['4.9/5', 'User Rating']
content = content.replace(
  /\['4\.9\/5',\s*'User Rating'\]/g,
  "['15', 'Languages']"
);

// Pattern 2: The trust badges stats bar (object style)
// Matches: { number: '4.9★', label: 'User Rating', icon: '⭐' }
content = content.replace(
  /\{\s*number:\s*'4\.9★',\s*label:\s*'User Rating',\s*icon:\s*'⭐'\s*\}/g,
  "{ number: '15', label: 'Languages', icon: '🌍' }"
);

// Pattern 3: Catch any other variant
content = content.replace(
  /\{\s*number:\s*'4\.9\/5',\s*label:\s*'User Rating'[^}]*\}/g,
  "{ number: '15', label: 'Languages', icon: '🌍' }"
);

if (content === original) {
  console.log('⚠️  No changes made. The fake rating may have already been removed, or the format is different.');
  console.log('   Check app/page.js manually for any "4.9" or "User Rating" text.');
} else {
  fs.writeFileSync(file, content, 'utf8');
  console.log('✅ FIX 1 DONE: Removed fake "4.9/5 User Rating" from homepage');
  console.log('   Replaced with "15 Languages" (actual site feature)');
  console.log('');
  console.log('Now run:');
  console.log('  git add .');
  console.log('  git commit -m "Remove fake user rating, replace with Languages stat"');
  console.log('  git push origin master');
  console.log('');
  console.log('After deploy, verify at https://www.wordcountertool.net/ that the stats bar shows "15 Languages" instead of "4.9/5 User Rating"');
}
