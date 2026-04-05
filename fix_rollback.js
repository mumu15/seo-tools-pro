const fs = require('fs');
const path = require('path');

// FIX ROLLBACK: 
// 1. Restore dark body/html background in globals.css
// 2. Replace ALL var(--xxx) references in page files with actual dark theme colors

const APP = path.join(__dirname, 'app');

// ============================================================
// 1. Fix globals.css — add dark body background
// ============================================================
console.log('--- Step 1: Restoring dark body background ---');

const globalsPath = path.join(APP, 'globals.css');
let globals = fs.readFileSync(globalsPath, 'utf8');

// Only add if not already there
if (!globals.includes('body {')) {
  globals += `

/* Dark theme base styles */
html {
  scroll-behavior: smooth;
}

body {
  background: #0a0d14;
  color: #e2e8f0;
}

main.min-h-screen,
.min-h-screen:not(html):not(body) {
  min-height: auto !important;
}

body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

body > div, #__next {
  flex: 1;
  display: flex;
  flex-direction: column;
}

main { flex: 1; }
footer { margin-top: auto; }

/* Responsive */
@media (max-width: 639px) {
  h1 { font-size: clamp(28px, 7vw, 48px) !important; line-height: 1.1 !important; }
  h2 { font-size: clamp(20px, 5vw, 28px) !important; }
  footer .grid { grid-template-columns: 1fr !important; gap: 24px !important; }
  textarea, input[type="text"], input[type="email"] { font-size: 16px !important; }
}

@media (min-width: 640px) and (max-width: 1023px) {
  footer .grid { grid-template-columns: repeat(2, 1fr) !important; }
}

@media print {
  header, footer, .adsbygoogle { display: none !important; }
}
`;
  fs.writeFileSync(globalsPath, globals, 'utf8');
  console.log('  ✅ Dark body background restored');
} else {
  console.log('  ⏭️  Already has body styles');
}

// ============================================================
// 2. Replace CSS variables in ALL files
// ============================================================
console.log('\n--- Step 2: Replacing CSS variables with dark theme colors ---');

const varMap = {
  "var(--text-primary)": "#f1f5f9",
  "var(--text-secondary)": "#e2e8f0",
  "var(--text-body)": "#cbd5e1",
  "var(--text-muted)": "#94a3b8",
  "var(--text-faint)": "#64748b",
  "var(--accent)": "#34d399",
  "var(--accent-text)": "#34d399",
  "var(--accent-bg)": "rgba(16,185,129,0.06)",
  "var(--accent-border)": "rgba(16,185,129,0.2)",
  "var(--bg-primary)": "#0a0d14",
  "var(--bg-secondary)": "#0f1117",
  "var(--bg-card)": "rgba(255,255,255,0.03)",
  "var(--bg-card-hover)": "rgba(255,255,255,0.06)",
  "var(--bg-input)": "rgba(255,255,255,0.05)",
  "var(--border-color)": "rgba(255,255,255,0.08)",
  "var(--border-subtle)": "rgba(255,255,255,0.04)",
  "var(--header-bg)": "rgba(3,7,18,0.97)",
  "var(--header-border)": "rgba(52,211,153,0.15)",
  "var(--code-bg)": "rgba(255,255,255,0.05)",
  "var(--shadow)": "none",
};

function findAllJS(dir, results = []) {
  if (!fs.existsSync(dir)) return results;
  for (const item of fs.readdirSync(dir)) {
    if (item === 'node_modules' || item === '.next' || item === '.git') continue;
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) {
      findAllJS(full, results);
    } else if (item.endsWith('.js') || item.endsWith('.jsx')) {
      results.push(full);
    }
  }
  return results;
}

const allFiles = findAllJS(APP);
let filesFixed = 0;

for (const file of allFiles) {
  let content = fs.readFileSync(file, 'utf8');
  
  // Skip if no CSS variables
  if (!content.includes('var(--')) continue;
  
  const original = content;
  
  for (const [varName, value] of Object.entries(varMap)) {
    // Replace all occurrences
    while (content.includes(varName)) {
      content = content.replace(varName, value);
    }
  }
  
  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    filesFixed++;
  }
}

console.log('  ✅ Replaced CSS variables in ' + filesFixed + ' files');

// Also check components directory
const compFiles = findAllJS(path.join(__dirname, 'components'));
let compFixed = 0;
for (const file of compFiles) {
  let content = fs.readFileSync(file, 'utf8');
  if (!content.includes('var(--')) continue;
  const original = content;
  for (const [varName, value] of Object.entries(varMap)) {
    while (content.includes(varName)) {
      content = content.replace(varName, value);
    }
  }
  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    compFixed++;
  }
}
if (compFixed > 0) {
  console.log('  ✅ Replaced CSS variables in ' + compFixed + ' component files');
}

// ============================================================
// DONE
// ============================================================
console.log('\n═══════════════════════════════════════════════');
console.log('  ROLLBACK FIX COMPLETE');
console.log('═══════════════════════════════════════════════');
console.log('  ✅ Dark body background restored');
console.log('  ✅ CSS variables replaced in ' + (filesFixed + compFixed) + ' files');
console.log('  ✅ Site should be fully dark again');
console.log('');
console.log('Now run:');
console.log('  git add . && git commit -m "Fix rollback: restore dark theme colors everywhere" && git push origin master');
