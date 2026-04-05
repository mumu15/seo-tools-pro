const fs = require('fs');
const path = require('path');

// Fix: ThemeProvider is in app/components/ but Header.js is in components/
// Solution: Copy ThemeProvider.js to wherever Header.js lives

const COMP_APP = path.join(__dirname, 'app', 'components');
const COMP_ROOT = path.join(__dirname, 'components');

// Find where Header.js actually is
let headerDir;
if (fs.existsSync(path.join(COMP_ROOT, 'Header.js'))) {
  headerDir = COMP_ROOT;
} else if (fs.existsSync(path.join(COMP_APP, 'Header.js'))) {
  headerDir = COMP_APP;
} else {
  console.error('❌ Cannot find Header.js');
  process.exit(1);
}

console.log('Header.js is in:', path.relative(__dirname, headerDir));

// Find where ThemeProvider.js currently is
let themeSource;
if (fs.existsSync(path.join(COMP_APP, 'ThemeProvider.js'))) {
  themeSource = path.join(COMP_APP, 'ThemeProvider.js');
} else if (fs.existsSync(path.join(COMP_ROOT, 'ThemeProvider.js'))) {
  themeSource = path.join(COMP_ROOT, 'ThemeProvider.js');
}

const themeDest = path.join(headerDir, 'ThemeProvider.js');

if (themeSource && themeSource !== themeDest) {
  // Copy ThemeProvider to same directory as Header
  fs.copyFileSync(themeSource, themeDest);
  console.log('✅ Copied ThemeProvider.js to', path.relative(__dirname, headerDir));
} else if (!themeSource) {
  console.error('❌ ThemeProvider.js not found anywhere');
  process.exit(1);
} else {
  console.log('⏭️  ThemeProvider.js already in correct directory');
}

// Also fix the import in layout.js to point to the right path
const layoutPath = path.join(__dirname, 'app', 'layout.js');
let layout = fs.readFileSync(layoutPath, 'utf8');

// Determine correct import path from app/layout.js to ThemeProvider
let correctImport;
if (headerDir === COMP_ROOT) {
  correctImport = "'../components/ThemeProvider'";
} else {
  correctImport = "'./components/ThemeProvider'";
}

// Fix any wrong import path
layout = layout.replace(
  /from ['"][^'"]*ThemeProvider['"]/g,
  'from ' + correctImport
);

fs.writeFileSync(layoutPath, layout, 'utf8');
console.log('✅ Fixed ThemeProvider import in layout.js →', correctImport);

// Verify Header.js import is correct (should be './ThemeProvider' since same dir)
let header = fs.readFileSync(path.join(headerDir, 'Header.js'), 'utf8');
if (header.includes("from './ThemeProvider'")) {
  console.log('✅ Header.js import is correct (./ThemeProvider)');
} else {
  // Fix it
  header = header.replace(
    /from ['"][^'"]*ThemeProvider['"]/g,
    "from './ThemeProvider'"
  );
  fs.writeFileSync(path.join(headerDir, 'Header.js'), header, 'utf8');
  console.log('✅ Fixed Header.js ThemeProvider import');
}

console.log('\nNow run:');
console.log('  git add . && git commit -m "Fix ThemeProvider import path" && git push origin master');
