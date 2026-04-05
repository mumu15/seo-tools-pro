const fs = require('fs');
const path = require('path');

// ROLLBACK: Remove all dark/light mode toggle
// Restore original dark-only theme
// 1. Strip globals.css to just Tailwind directives
// 2. Remove ThemeProvider from layout.js
// 3. Remove theme toggle from Header.js
// 4. Delete ThemeProvider.js files

const APP = path.join(__dirname, 'app');
const COMP_APP = path.join(APP, 'components');
const COMP_ROOT = path.join(__dirname, 'components');

// ============================================================
// 1. Rewrite globals.css — Tailwind only, no theme stuff
// ============================================================
console.log('--- Step 1: Cleaning globals.css ---');

const globalsPath = path.join(APP, 'globals.css');
const current = fs.readFileSync(globalsPath, 'utf8');

// Extract Tailwind directives
const tailwindLines = [];
current.split('\n').forEach(line => {
  if (line.trim().startsWith('@tailwind') || line.trim().startsWith('@import')) {
    tailwindLines.push(line.trim());
  }
});

if (tailwindLines.length === 0) {
  tailwindLines.push('@tailwind base;');
  tailwindLines.push('@tailwind components;');
  tailwindLines.push('@tailwind utilities;');
}

// Write clean globals.css — just Tailwind, nothing else
const cleanGlobals = tailwindLines.join('\n') + '\n';
fs.writeFileSync(globalsPath, cleanGlobals, 'utf8');
console.log('  ✅ globals.css cleaned — Tailwind directives only');

// ============================================================
// 2. Remove ThemeProvider from layout.js
// ============================================================
console.log('\n--- Step 2: Cleaning layout.js ---');

const layoutPath = path.join(APP, 'layout.js');
let layout = fs.readFileSync(layoutPath, 'utf8');

// Remove ThemeProvider import
layout = layout.replace(/import ThemeProvider from ['"'][^'"]+ThemeProvider['"']\n?/g, '');

// Remove ThemeProvider wrapper
layout = layout.replace(/<ThemeProvider>/g, '');
layout = layout.replace(/<\/ThemeProvider>/g, '');

// Remove anti-flash script
layout = layout.replace(/\s*<script dangerouslySetInnerHTML=\{\{ __html: `[\s\S]*?wct-theme[\s\S]*?`\s*\}\} \/>/g, '');

// Remove suppressHydrationWarning
layout = layout.replace(/\s*suppressHydrationWarning\s*/g, ' ');

// Clean up double spaces
layout = layout.replace(/  +/g, ' ');

fs.writeFileSync(layoutPath, layout, 'utf8');
console.log('  ✅ layout.js cleaned — ThemeProvider removed');

// ============================================================
// 3. Remove theme toggle from Header.js
// ============================================================
console.log('\n--- Step 3: Cleaning Header.js ---');

const headerPaths = [
  path.join(COMP_APP, 'Header.js'),
  path.join(COMP_ROOT, 'Header.js'),
];

headerPaths.forEach(hp => {
  if (!fs.existsSync(hp)) return;
  let header = fs.readFileSync(hp, 'utf8');

  // Remove useTheme import
  header = header.replace(/import \{ useTheme \} from ['"'][^'"]+ThemeProvider['"']\n?/g, '');

  // Remove useTheme() call
  header = header.replace(/\s*const \{ theme, toggleTheme \} = useTheme\(\)\n?/g, '\n');

  // Remove the entire theme toggle button block
  header = header.replace(/\s*\{\/\* Theme Toggle \*\/\}[\s\S]*?<\/button>\s*/g, '\n');

  fs.writeFileSync(hp, header, 'utf8');
  console.log('  ✅ Cleaned: ' + path.relative(__dirname, hp));
});

// ============================================================
// 4. Delete ThemeProvider.js files
// ============================================================
console.log('\n--- Step 4: Removing ThemeProvider.js ---');

const tpPaths = [
  path.join(COMP_APP, 'ThemeProvider.js'),
  path.join(COMP_ROOT, 'ThemeProvider.js'),
];

tpPaths.forEach(tp => {
  if (fs.existsSync(tp)) {
    fs.unlinkSync(tp);
    console.log('  ✅ Deleted: ' + path.relative(__dirname, tp));
  }
});

// ============================================================
// 5. Remove data-theme attribute references if any remain
// ============================================================
console.log('\n--- Step 5: Final cleanup ---');

// Re-read layout to remove any leftover data-theme
let layoutFinal = fs.readFileSync(layoutPath, 'utf8');
layoutFinal = layoutFinal.replace(/data-theme="[^"]*"/g, '');
fs.writeFileSync(layoutPath, layoutFinal, 'utf8');

console.log('  ✅ Removed any leftover data-theme attributes');

// ============================================================
// DONE
// ============================================================
console.log('\n═══════════════════════════════════════════════');
console.log('  ROLLBACK COMPLETE — Dark mode only');
console.log('═══════════════════════════════════════════════');
console.log('  ✅ globals.css: Tailwind only, no theme overrides');
console.log('  ✅ layout.js: No ThemeProvider, no anti-flash');
console.log('  ✅ Header.js: No toggle button');
console.log('  ✅ ThemeProvider.js: Deleted');
console.log('');
console.log('  Site is back to the original dark-only theme.');
console.log('');
console.log('Now run:');
console.log('  git add . && git commit -m "Rollback: Remove dark/light toggle, restore dark-only theme" && git push origin master');
