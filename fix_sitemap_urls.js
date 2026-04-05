const fs = require('fs');
const path = require('path');

const sitemapPath = path.join(__dirname, 'app', 'sitemap.js');

if (!fs.existsSync(sitemapPath)) {
  console.log('❌ app/sitemap.js not found');
  process.exit(1);
}

let content = fs.readFileSync(sitemapPath, 'utf8');
const before = content;

// The sitemap.js has a .map() at the end that prepends base URL to entry.url
// But only if the entry uses the format: { url: "/path", priority: X, freq: "Y" }
// 
// The category URLs may have been inserted with a format that doesn't match
// the .map() function. Let's check and fix.

// Fix 1: If category URLs were inserted as standalone objects outside the .map()
// Replace relative category paths with full URLs
const categoryPaths = [
  '/blog/category/word-count-guides',
  '/blog/category/seo-writing',
  '/blog/category/social-media',
  '/blog/category/writing-craft',
  '/blog/category/productivity',
];

categoryPaths.forEach(catPath => {
  // If it's just the path without base URL being applied
  // Check if it exists in the file
  if (content.includes(`"${catPath}"`)) {
    // Check if this entry is inside the return array that gets .map()'d
    // The .map() adds base + entry.url — so the entry format must have url: "/path"
    // Let's verify the entry format matches
    
    const entryPattern = new RegExp(
      `\\{\\s*url:\\s*"${catPath.replace(/\//g, '\\/')}"`,
      'g'
    );
    
    if (entryPattern.test(content)) {
      console.log(`  ✅ ${catPath} — found in sitemap, format looks correct`);
    }
  } else {
    console.log(`  ⚠️  ${catPath} — not found in sitemap`);
  }
});

// Fix 2: The real issue — check if the .map() function exists at the end
// If not, the URLs are being output raw without the base domain
if (!content.includes('.map(entry')) {
  console.log('');
  console.log('  🔧 Sitemap does NOT use .map() — URLs need full domain');
  
  // Replace relative paths with full URLs
  categoryPaths.forEach(catPath => {
    content = content.replace(
      new RegExp(`url:\\s*"${catPath.replace(/\//g, '\\/')}"`, 'g'),
      `url: "https://www.wordcountertool.net${catPath}"`
    );
  });
  
  console.log('  ✅ Added full domain to all category URLs');
} else {
  // The .map() exists — maybe the category entries were inserted AFTER the .map()
  // or in a position that doesn't get mapped
  
  // Check if entries are inside the return [...] array before .map()
  const returnStart = content.indexOf('return [');
  const mapStart = content.indexOf('.map(');
  
  categoryPaths.forEach(catPath => {
    const catPos = content.indexOf(`"${catPath}"`);
    if (catPos > -1 && mapStart > -1 && catPos > mapStart) {
      // Entry is AFTER the .map() — it won't get the base URL prepended
      console.log(`  🔧 ${catPath} is outside .map() — moving it inside`);
      
      // Remove it from current position
      const lineStart = content.lastIndexOf('\n', catPos);
      const lineEnd = content.indexOf('\n', catPos);
      const line = content.slice(lineStart, lineEnd + 1);
      content = content.replace(line, '');
      
      // Insert it inside the return array
      content = content.replace(
        'return [',
        `return [\n    { url: "${catPath}", priority: 0.6, freq: "weekly" },`
      );
    }
  });
}

// Fix 3: Nuclear option — just ensure every URL in the sitemap has the full domain
// Scan for any url: "/something" patterns and prepend domain if missing
content = content.replace(
  /url:\s*["'](\/(blog\/category\/[^"']+))["']/g,
  'url: "https://www.wordcountertool.net$1"'
);

if (content !== before) {
  fs.writeFileSync(sitemapPath, content, 'utf8');
  console.log('');
  console.log('✅ Sitemap fixed! Category URLs now have full domain.');
} else {
  console.log('');
  console.log('ℹ️  No changes needed — checking if the issue is elsewhere...');
  
  // Maybe the sitemap format is fine but Google hasn't re-read it yet
  // Let's output what the sitemap currently generates
  console.log('');
  console.log('Current category entries in sitemap:');
  categoryPaths.forEach(catPath => {
    if (content.includes(catPath)) {
      console.log(`  Found: ${catPath}`);
    }
  });
}

console.log('');
console.log('Run: git add . && git commit -m "Fix sitemap category URLs" && git push origin master');
console.log('Then resubmit sitemap in Google Search Console.');
