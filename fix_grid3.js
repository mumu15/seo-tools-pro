const fs = require('fs');
const path = require('path');

const pageFile = path.join(__dirname, 'app', 'page.js');
let content = fs.readFileSync(pageFile, 'utf8');
const original = content;

// Replace the inline grid style with Tailwind classes
// The data section uses: style={{display:'grid',gridTemplateColumns:'repeat(auto-fill, minmax(240px, 1fr))',gap:10}}
// Replace with Tailwind: className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3"

// Pattern 1: Match the exact inline style
content = content.replace(
  /style=\{\{display:'grid',gridTemplateColumns:'repeat\(auto-fill, minmax\(240px, 1fr\)\)',gap:10\}\}/g,
  'className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3"'
);

// Pattern 2: Slightly different formatting
content = content.replace(
  /style=\{\{display:\s*'grid',\s*gridTemplateColumns:\s*'repeat\(auto-fill,\s*minmax\(240px,\s*1fr\)\)',\s*gap:\s*10\s*\}\}/g,
  'className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3"'
);

// Pattern 3: Double quotes
content = content.replace(
  /style=\{\{display:"grid",gridTemplateColumns:"repeat\(auto-fill, minmax\(240px, 1fr\)\)",gap:10\}\}/g,
  'className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3"'
);

if (content !== original) {
  fs.writeFileSync(pageFile, content, 'utf8');
  console.log('✅ Replaced inline grid style with Tailwind classes');
} else {
  // If no pattern matched, try a broader search and manual fix
  console.log('⚠️  Exact pattern not found. Searching for the grid container...');
  
  // Find the data section and show context
  const dataIdx = content.indexOf('Data & Reference');
  if (dataIdx > -1) {
    // Find the grid div after it
    const afterData = content.substring(dataIdx, dataIdx + 1000);
    const gridMatch = afterData.match(/style=\{\{[^}]*grid[^}]*\}\}/i);
    if (gridMatch) {
      console.log('  Found grid style: ' + gridMatch[0]);
      // Replace it
      content = content.replace(gridMatch[0], 'className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3"');
      fs.writeFileSync(pageFile, content, 'utf8');
      console.log('  ✅ Replaced with Tailwind grid classes');
    } else {
      console.log('  Looking for any grid-related inline style near Data & Reference...');
      // Try finding gridTemplateColumns anywhere near the data section
      const searchArea = content.substring(Math.max(0, dataIdx - 500), dataIdx + 2000);
      const anyGrid = searchArea.match(/gridTemplateColumns|grid-template-columns/);
      if (anyGrid) {
        console.log('  Found reference at position: ' + anyGrid.index);
        console.log('  Context: ...' + searchArea.substring(Math.max(0, anyGrid.index - 50), anyGrid.index + 100) + '...');
      } else {
        console.log('  No grid styles found near Data & Reference section');
        console.log('  The grid might use a different structure. Check app/page.js manually.');
      }
    }
  } else {
    console.log('  ❌ "Data & Reference" section not found in app/page.js');
  }
}

console.log('');
console.log('Now run:');
console.log('  git add . && git commit -m "Fix Data & Reference to use Tailwind grid" && git push origin master');
