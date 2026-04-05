const fs = require('fs');
const path = require('path');

// FIX 7b: Fix theme toggle button placement in Header.js
// The toggle needs to be visible in the desktop nav, before "Try Free"

const COMP_APP = path.join(__dirname, 'app', 'components');
const COMP_ROOT = path.join(__dirname, 'components');
const headerPath = fs.existsSync(path.join(COMP_APP, 'Header.js'))
  ? path.join(COMP_APP, 'Header.js')
  : path.join(COMP_ROOT, 'Header.js');

if (!fs.existsSync(headerPath)) {
  console.error('❌ Header.js not found');
  process.exit(1);
}

let header = fs.readFileSync(headerPath, 'utf8');
const original = header;

// Step 1: Ensure useTheme import exists
if (!header.includes('useTheme')) {
  // Add import after the first line or after 'use client'
  if (header.includes("'use client'")) {
    header = header.replace(
      "'use client'",
      "'use client'\nimport { useTheme } from './ThemeProvider'"
    );
  } else {
    header = "import { useTheme } from './ThemeProvider'\n" + header;
  }
  console.log('  ✅ Added useTheme import');
} else {
  console.log('  ⏭️  useTheme import already exists');
}

// Step 2: Ensure useTheme() is called inside the component
if (!header.includes('toggleTheme')) {
  // Find the component function body
  const funcPatterns = [
    /export default function \w+\([^)]*\)\s*\{/,
    /function \w+\([^)]*\)\s*\{/,
  ];

  for (const pat of funcPatterns) {
    const match = header.match(pat);
    if (match) {
      const idx = header.indexOf(match[0]) + match[0].length;
      header = header.slice(0, idx) + '\n  const { theme, toggleTheme } = useTheme()' + header.slice(idx);
      console.log('  ✅ Added useTheme() call');
      break;
    }
  }
}

// Step 3: Remove any previously inserted toggle button (cleanup from FIX 7)
header = header.replace(/\s*\{\/\* Theme Toggle \*\/\}[\s\S]*?<\/button>\s*/g, (match) => {
  // Only remove if it looks like our toggle
  if (match.includes('toggleTheme')) {
    console.log('  🧹 Removed old toggle button placement');
    return '\n';
  }
  return match;
});

// Step 4: Insert toggle button right before "Try Free" link in desktop nav
// Look for the "Try Free" link pattern
const tryFreePatterns = [
  /(\s*<Link\s+href="\/word-counter"[^>]*>\s*Try Free)/,
  /(\s*<Link\s+href="\/word-counter"[\s\S]*?Try Free[\s\S]*?<\/Link>)/,
  /(\s*<a\s+href="\/word-counter"[^>]*>\s*Try Free)/,
];

const toggleButtonJSX = `
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg transition-all hover:scale-110"
              style={{ color: 'var(--text-muted)' }}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
            >
              {theme === 'dark' ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
`;

let inserted = false;

for (const pat of tryFreePatterns) {
  const match = header.match(pat);
  if (match) {
    const idx = header.indexOf(match[0]);
    header = header.slice(0, idx) + toggleButtonJSX + header.slice(idx);
    inserted = true;
    console.log('  ✅ Toggle button inserted before "Try Free" link');
    break;
  }
}

// Fallback: insert before Blog link if Try Free not found
if (!inserted) {
  const blogPattern = /(\s*<Link\s+href="\/blog")/;
  const blogMatch = header.match(blogPattern);
  if (blogMatch) {
    const idx = header.indexOf(blogMatch[0]);
    header = header.slice(0, idx) + toggleButtonJSX + header.slice(idx);
    inserted = true;
    console.log('  ✅ Toggle button inserted before Blog link (fallback)');
  }
}

// Fallback 2: insert before </nav>
if (!inserted) {
  const navClose = header.lastIndexOf('</nav>');
  if (navClose > -1) {
    header = header.slice(0, navClose) + toggleButtonJSX + '          ' + header.slice(navClose);
    inserted = true;
    console.log('  ✅ Toggle button inserted before </nav> (fallback 2)');
  }
}

if (!inserted) {
  console.error('❌ Could not find insertion point for toggle button');
  process.exit(1);
}

fs.writeFileSync(headerPath, header, 'utf8');
console.log('\n✅ FIX 7b DONE: Theme toggle button added to Header');
console.log('   It should appear as a moon icon (☽) next to "Try Free"');
console.log('');
console.log('Now run:');
console.log('  git add . && git commit -m "Fix theme toggle button placement in header" && git push origin master');
