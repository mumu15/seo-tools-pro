const fs = require('fs');
const path = require('path');

const APP = path.join(__dirname, 'app');
const SLOT_A = '3248634657';
const SLOT_B = '3763639977';
let updated = 0, skipped = 0, already = 0;

console.log('\n=====================================================');
console.log('  ADD ADS — BULLETPROOF VERSION');
console.log('  Only inserts between top-level JSX siblings');
console.log('=====================================================\n');

// Find all content files
function findFiles(dir, results = []) {
  for (const item of fs.readdirSync(dir)) {
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) findFiles(full, results);
    else if (item === 'page.js' || item === 'PageClient.js') results.push(full);
  }
  return results;
}

// Get correct AdUnit import path for a given file
function getImportPath(filePath) {
  const appComp = path.join(APP, 'components', 'AdUnit.js');
  const rootComp = path.join(__dirname, 'components', 'AdUnit.js');
  const dir = path.dirname(filePath);
  
  if (fs.existsSync(appComp)) {
    return path.relative(dir, path.join(APP, 'components')).replace(/\\/g, '/') + '/AdUnit';
  } else if (fs.existsSync(rootComp)) {
    return path.relative(dir, path.join(__dirname, 'components')).replace(/\\/g, '/') + '/AdUnit';
  }
  return null;
}

const allFiles = findFiles(APP);
const skipNames = ['layout', 'sitemap', 'not-found', 'error', 'opengraph', 'robots', 'loading'];

// Group files by directory, prefer PageClient if it has content
const pageMap = {};
for (const f of allFiles) {
  const dir = path.dirname(f);
  if (!pageMap[dir]) pageMap[dir] = {};
  pageMap[dir][path.basename(f)] = f;
}

for (const [dir, files] of Object.entries(pageMap)) {
  let targetFile;
  
  if (files['PageClient.js']) {
    const clientContent = fs.readFileSync(files['PageClient.js'], 'utf8');
    // Only use PageClient if it actually has JSX content
    if (clientContent.includes('return') && clientContent.includes('<') && clientContent.length > 500) {
      targetFile = files['PageClient.js'];
    } else if (files['page.js']) {
      const pageContent = fs.readFileSync(files['page.js'], 'utf8');
      if (pageContent.length > 500 && pageContent.includes('return') && pageContent.includes('<')) {
        targetFile = files['page.js'];
      } else {
        skipped++;
        continue;
      }
    } else {
      skipped++;
      continue;
    }
  } else if (files['page.js']) {
    targetFile = files['page.js'];
  } else {
    skipped++;
    continue;
  }
  
  const relPath = path.relative(APP, targetFile);
  if (skipNames.some(s => relPath.includes(s))) { skipped++; continue; }
  
  let content = fs.readFileSync(targetFile, 'utf8');
  
  // Skip tiny/non-JSX files
  if (content.length < 500 || !content.includes('return') || !content.includes('<')) {
    skipped++;
    continue;
  }
  
  // Count current ads
  const currentAds = (content.match(/<AdUnit\s/g) || []).length;
  if (currentAds >= 4) { already++; continue; }
  
  const original = content;
  const adsToAdd = 4 - currentAds;
  let adsPlaced = 0;
  
  // === ENSURE IMPORT ===
  if (!content.includes('AdUnit')) {
    const importPath = getImportPath(targetFile);
    if (!importPath) { skipped++; continue; }
    
    // Find last import statement
    const lines = content.split('\n');
    let lastImportLine = -1;
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].trimStart().startsWith('import ')) lastImportLine = i;
    }
    if (lastImportLine > -1) {
      lines.splice(lastImportLine + 1, 0, `import AdUnit from '${importPath}'`);
      content = lines.join('\n');
    }
  }
  
  // === STRATEGY: Only insert BETWEEN complete JSX elements ===
  // We use a simple, safe regex: find lines that are EXACTLY "</section>" or "</div>"
  // at the TOP indentation level of the JSX tree (not nested in expressions)
  
  // The ONLY safe insertion points are:
  // 1. Lines matching: "          </section>" or "            </section>" (top-level section close)
  // 2. Right before lines matching: "          <section" (top-level section open)
  // 3. Right before "<Footer" 
  // 4. Right before "</main>"
  
  // BUT we must verify each point is NOT inside a { } expression block
  
  const lines = content.split('\n');
  const safeInsertLines = []; // line numbers where it's safe to insert AFTER
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();
    
    // Skip if this line or surrounding lines contain .map(, array brackets, or JS expressions
    const context = lines.slice(Math.max(0, i-3), Math.min(lines.length, i+4)).join('\n');
    if (context.includes('.map(') && !context.includes('faqs.map')) continue;
    if (context.includes('].map')) continue;
    if (context.includes('}).map')) continue;
    
    // Check for safe closing tags at reasonable indentation (not deeply nested)
    const indent = line.length - line.trimStart().length;
    
    // Safe: </section> at indent 8-16 (top-level content sections)
    if (trimmed === '</section>' && indent >= 8 && indent <= 16) {
      // Verify the next non-empty line starts a new element or is also a section close
      let nextIdx = i + 1;
      while (nextIdx < lines.length && lines[nextIdx].trim() === '') nextIdx++;
      if (nextIdx < lines.length) {
        const nextTrimmed = lines[nextIdx].trim();
        // Safe if next line starts a new <section, <div, <AdUnit, </div, or is a comment
        if (nextTrimmed.startsWith('<section') || nextTrimmed.startsWith('<div') || 
            nextTrimmed.startsWith('<AdUnit') || nextTrimmed.startsWith('</div') ||
            nextTrimmed.startsWith('{/*') || nextTrimmed.startsWith('<Footer') ||
            nextTrimmed.startsWith('</main') || nextTrimmed.startsWith('<script')) {
          safeInsertLines.push(i);
        }
      }
    }
  }
  
  // Also add position right before <Footer if not already covered
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].trim().startsWith('<Footer')) {
      // Check if previous non-empty line ends a section
      if (!safeInsertLines.includes(i - 1)) {
        safeInsertLines.push(i - 1);
      }
    }
  }
  
  // Deduplicate and sort
  const uniqueLines = [...new Set(safeInsertLines)].sort((a, b) => a - b);
  
  if (uniqueLines.length === 0) {
    // Fallback: try to insert before </main> and <Footer only
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].trim() === '</main>' || lines[i].trim().startsWith('<Footer')) {
        uniqueLines.push(i - 1);
      }
    }
  }
  
  if (uniqueLines.length === 0) {
    skipped++;
    continue;
  }
  
  // Select positions: distribute evenly
  let selectedLines;
  if (uniqueLines.length <= adsToAdd) {
    selectedLines = uniqueLines;
  } else {
    selectedLines = [];
    const step = uniqueLines.length / adsToAdd;
    for (let j = 0; j < adsToAdd; j++) {
      selectedLines.push(uniqueLines[Math.floor(j * step)]);
    }
  }
  
  // Insert ads in reverse order (so line numbers stay valid)
  selectedLines.sort((a, b) => b - a);
  const linesArr = content.split('\n');
  
  for (let j = 0; j < selectedLines.length; j++) {
    const lineNum = selectedLines[j];
    const slot = j % 2 === 0 ? SLOT_A : SLOT_B;
    // Match the indentation of surrounding content
    const refLine = linesArr[lineNum] || '';
    const indent = ' '.repeat(Math.max(8, refLine.length - refLine.trimStart().length));
    linesArr.splice(lineNum + 1, 0, '', indent + `<AdUnit slot="${slot}" />`, '');
    adsPlaced++;
  }
  
  content = linesArr.join('\n');
  
  // Final safety check: verify no AdUnit appears inside .map() or array literals
  const adPositions = [];
  let searchFrom = 0;
  while (true) {
    const idx = content.indexOf('<AdUnit', searchFrom);
    if (idx === -1) break;
    adPositions.push(idx);
    searchFrom = idx + 1;
  }
  
  let safe = true;
  for (const pos of adPositions) {
    // Check 500 chars before this position for unclosed .map( or [[
    const before = content.slice(Math.max(0, pos - 500), pos);
    let brackets = 0;
    for (const ch of before) {
      if (ch === '[') brackets++;
      if (ch === ']') brackets--;
    }
    if (brackets > 1) { safe = false; break; } // inside nested array
    
    // Check for unclosed .map(
    const lastMap = before.lastIndexOf('.map(');
    const lastMapClose = before.lastIndexOf('))');
    if (lastMap > -1 && (lastMapClose === -1 || lastMapClose < lastMap)) {
      // Could be inside .map — check more carefully
      let parens = 0;
      for (let i = lastMap; i < before.length; i++) {
        if (before[i] === '(') parens++;
        if (before[i] === ')') parens--;
      }
      if (parens > 0) { safe = false; break; }
    }
    
    // Check if we're inside an HTML tag (between < and >)
    const lastOpen = before.lastIndexOf('<');
    const lastClose = before.lastIndexOf('>');
    if (lastOpen > lastClose) { safe = false; break; } // inside an unclosed tag
  }
  
  if (!safe) {
    console.log('  ⚠️  UNSAFE positions detected in ' + relPath + ' — SKIPPING');
    skipped++;
    continue;
  }
  
  const finalAds = (content.match(/<AdUnit\s/g) || []).length;
  
  if (content !== original && finalAds > currentAds) {
    fs.writeFileSync(targetFile, content, 'utf8');
    updated++;
    console.log('  ✅ ' + relPath + ': ' + currentAds + ' → ' + finalAds + ' ads');
  } else {
    skipped++;
  }
}

console.log('\n=====================================================');
console.log('  ✅ Updated: ' + updated + ' pages');
console.log('  ✅ Already 4+: ' + already);
console.log('  ⏭️  Skipped: ' + skipped);
console.log('=====================================================');
console.log('\nDeploy:');
console.log('  git add .');
console.log('  git commit -m "Add ad units to all pages (safe insertion)"');
console.log('  git push origin master\n');
