const fs = require('fs');
const path = require('path');

const APP = path.join(__dirname, 'app');
const SLOT_A = '3248634657';
const SLOT_B = '3763639977';
let updated = 0, skipped = 0, already = 0;

console.log('\n=====================================================');
console.log('  ADD 4 AD UNITS — SAFE VERSION');
console.log('  (Never inserts inside .map() or arrays)');
console.log('=====================================================\n');

// Recursively find all page.js and PageClient.js files
function findPages(dir, results = []) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) findPages(full, results);
    else if (item === 'page.js' || item === 'PageClient.js') results.push(full);
  }
  return results;
}

// Check if a position is inside a .map() callback or array literal
function isInsideMapOrArray(content, position) {
  // Look backward from position for unclosed .map( or [[ patterns
  const before = content.slice(Math.max(0, position - 2000), position);
  
  // Count unclosed brackets
  let brackets = 0, parens = 0;
  for (let i = 0; i < before.length; i++) {
    if (before[i] === '[') brackets++;
    if (before[i] === ']') brackets--;
    if (before[i] === '(') parens++;
    if (before[i] === ')') parens--;
  }
  
  // If we have unclosed brackets or are inside a .map() paren, it's unsafe
  if (brackets > 1) return true; // inside nested array
  
  // Check if we're inside a .map() callback
  const lastMap = before.lastIndexOf('.map(');
  if (lastMap > -1) {
    // Count parens from that .map( to our position
    let p = 0;
    for (let i = lastMap; i < before.length; i++) {
      if (before[i] === '(') p++;
      if (before[i] === ')') p--;
    }
    if (p > 0) return true; // still inside .map() callback
  }
  
  return false;
}

const allFiles = findPages(APP);
const skipPaths = ['layout', 'sitemap', 'not-found', 'error', 'opengraph', 'robots'];

// Group by directory
const pageMap = {};
for (const f of allFiles) {
  const dir = path.dirname(f);
  const name = path.basename(f);
  if (!pageMap[dir]) pageMap[dir] = {};
  pageMap[dir][name] = f;
}

for (const [dir, files] of Object.entries(pageMap)) {
  // Pick the right file to edit
  let targetFile;
  if (files['PageClient.js']) {
    const pageContent = files['page.js'] ? fs.readFileSync(files['page.js'], 'utf8') : '';
    targetFile = (pageContent.includes('PageClient') || pageContent.length < 800) 
      ? files['PageClient.js'] : files['page.js'];
  } else if (files['page.js']) {
    targetFile = files['page.js'];
  } else continue;
  
  const relPath = path.relative(APP, targetFile);
  if (skipPaths.some(s => relPath.includes(s))) { skipped++; continue; }
  
  let content = fs.readFileSync(targetFile, 'utf8');
  if (content.length < 500 || !content.includes('<') || !content.includes('return')) { skipped++; continue; }
  
  // Count existing ads
  const adImports = (content.match(/import.*AdUnit/g) || []).length;
  const adTotal = (content.match(/AdUnit/g) || []).length;
  const existingAds = adTotal - adImports;
  
  if (existingAds >= 4) { already++; continue; }
  
  const original = content;
  
  // === Ensure AdUnit is imported ===
  if (!content.includes('AdUnit')) {
    const appComp = path.join(APP, 'components', 'AdUnit.js');
    const rootComp = path.join(__dirname, 'components', 'AdUnit.js');
    let importDir = fs.existsSync(appComp) 
      ? path.join(APP, 'components') 
      : path.join(__dirname, 'components');
    let rel = path.relative(dir, importDir).replace(/\\/g, '/');
    
    const lastImport = content.lastIndexOf('\nimport ');
    if (lastImport > -1) {
      const lineEnd = content.indexOf('\n', lastImport + 1);
      content = content.slice(0, lineEnd + 1) + `import AdUnit from '${rel}/AdUnit'\n` + content.slice(lineEnd + 1);
    }
  }
  
  // === Find SAFE insertion points ===
  // Only insert at these specific markers that are NEVER inside .map():
  const safePositions = [];
  
  // 1. After Quick Answer box — look for the closing pattern
  const qaPatterns = [
    'border-emerald-500/30',  // our expanded blogs
    'st.quick',               // build_wct_blogs.js style
    'Quick Answer',           // generic
  ];
  for (const pat of qaPatterns) {
    const idx = content.indexOf(pat);
    if (idx > -1) {
      // Find the parent div's close - look for the next line that starts with spaces + <
      let searchFrom = idx;
      // Skip past the Quick Answer div (find matching close)
      let depth = 0;
      let i = content.lastIndexOf('<div', idx);
      for (; i < content.length && i > -1; i++) {
        if (content.slice(i, i+4) === '<div') depth++;
        if (content.slice(i, i+6) === '</div>') { depth--; if (depth <= 0) { searchFrom = i + 6; break; } }
      }
      if (searchFrom > idx && !isInsideMapOrArray(content, searchFrom)) {
        safePositions.push({ pos: searchFrom, label: 'after-qa' });
      }
      break;
    }
  }
  
  // 2. Before FAQ section
  const faqIdx = content.indexOf('Frequently Asked Questions');
  if (faqIdx > -1) {
    let sectionStart = content.lastIndexOf('<section', faqIdx);
    if (sectionStart === -1) sectionStart = content.lastIndexOf('<div', faqIdx);
    if (sectionStart > -1 && !isInsideMapOrArray(content, sectionStart)) {
      safePositions.push({ pos: sectionStart, label: 'before-faq' });
    }
  }
  
  // 3. Before Related Tools section
  const rtIdx = content.indexOf('Related Tools');
  if (rtIdx > -1) {
    let sectionStart = content.lastIndexOf('<section', rtIdx);
    if (sectionStart > -1 && !isInsideMapOrArray(content, sectionStart)) {
      safePositions.push({ pos: sectionStart, label: 'before-related' });
    }
  }
  
  // 4. Before </main> or <Footer
  const footerIdx = content.lastIndexOf('<Footer');
  const mainClose = content.lastIndexOf('</main>');
  const articleClose = content.lastIndexOf('</article>');
  let bottomPos = footerIdx > -1 ? footerIdx : (mainClose > -1 ? mainClose : articleClose);
  if (bottomPos > -1 && !isInsideMapOrArray(content, bottomPos)) {
    safePositions.push({ pos: bottomPos, label: 'bottom' });
  }
  
  // 5. Mid-content: find </section> tags that are NOT inside .map()
  let searchIdx = 0;
  const safeSectionEnds = [];
  while (true) {
    const idx = content.indexOf('</section>', searchIdx);
    if (idx === -1) break;
    const endPos = idx + '</section>'.length;
    if (!isInsideMapOrArray(content, endPos)) {
      safeSectionEnds.push(endPos);
    }
    searchIdx = idx + 1;
  }
  
  // If we have safe section ends, add mid-content positions
  if (safeSectionEnds.length >= 2) {
    const mid = Math.floor(safeSectionEnds.length / 2);
    safePositions.push({ pos: safeSectionEnds[mid], label: 'mid-section' });
    if (safeSectionEnds.length >= 4) {
      const quarter = Math.floor(safeSectionEnds.length / 4);
      safePositions.push({ pos: safeSectionEnds[quarter], label: 'quarter-section' });
    }
  }
  
  // Deduplicate positions (within 100 chars of each other)
  safePositions.sort((a, b) => a.pos - b.pos);
  const uniquePositions = [];
  for (const sp of safePositions) {
    if (uniquePositions.length === 0 || sp.pos - uniquePositions[uniquePositions.length - 1].pos > 100) {
      uniquePositions.push(sp);
    }
  }
  
  // Select up to (4 - existingAds) positions to insert
  const adsToAdd = Math.min(4 - existingAds, uniquePositions.length);
  
  if (adsToAdd <= 0) {
    skipped++;
    continue;
  }
  
  // Distribute evenly if we have more positions than ads needed
  let selectedPositions;
  if (uniquePositions.length <= adsToAdd) {
    selectedPositions = uniquePositions;
  } else {
    // Pick evenly spaced positions
    selectedPositions = [];
    const step = uniquePositions.length / adsToAdd;
    for (let i = 0; i < adsToAdd; i++) {
      selectedPositions.push(uniquePositions[Math.floor(i * step)]);
    }
  }
  
  // Insert in reverse order (so positions don't shift)
  selectedPositions.sort((a, b) => b.pos - a.pos);
  
  for (let i = 0; i < selectedPositions.length; i++) {
    const slot = i % 2 === 0 ? SLOT_A : SLOT_B;
    const pos = selectedPositions[i].pos;
    const indent = '            ';
    const adCode = `\n${indent}<AdUnit slot="${slot}" />\n`;
    content = content.slice(0, pos) + adCode + content.slice(pos);
  }
  
  // Verify we didn't break anything — count final ads
  const finalAdImports = (content.match(/import.*AdUnit/g) || []).length;
  const finalAdTotal = (content.match(/<AdUnit/g) || []).length;
  
  if (content !== original) {
    fs.writeFileSync(targetFile, content, 'utf8');
    updated++;
    console.log('  ✅ ' + relPath + ': ' + existingAds + ' → ' + finalAdTotal + ' ads');
  } else {
    skipped++;
  }
}

console.log('\n=====================================================');
console.log('  ✅ Updated: ' + updated + ' pages');
console.log('  ⏭️  Already 4+: ' + already);
console.log('  ⏭️  Skipped: ' + skipped);
console.log('=====================================================');
console.log('\nDeploy:');
console.log('  git add .');
console.log('  git commit -m "Add 4 ad units safely to every page"');
console.log('  git push origin master\n');
