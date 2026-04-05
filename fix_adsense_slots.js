const fs = require('fs');
const path = require('path');

const APP = path.join(__dirname, 'app');

console.log('');
console.log('╔═══════════════════════════════════════════════════════════╗');
console.log('║  FIX ADSENSE: Replace placeholder slots with real ones  ║');
console.log('╚═══════════════════════════════════════════════════════════╝');
console.log('');

// Your real AdSense slot IDs
const SLOT_A = '3763639977';  // Tool slot
const SLOT_B = '3248634657';  // Blog slot

// Placeholder IDs to replace
const replacements = {
  '1111111111': SLOT_A,   // Header ads → tool slot
  '2222222222': SLOT_B,   // Bottom ads → blog slot
  '3333333333': SLOT_A,   // Blog header → tool slot
  '4444444444': SLOT_B,   // Blog bottom → blog slot
  'ANCHOR_SLOT': SLOT_B,  // Anchor ad → blog slot
};

let totalFiles = 0;
let totalReplacements = 0;

function walkAndFix(dir) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach(item => {
    if (item === 'node_modules' || item === '.next') return;
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) {
      walkAndFix(full);
    } else if (item.endsWith('.js')) {
      let c = fs.readFileSync(full, 'utf8');
      const before = c;
      let fileReplacements = 0;

      Object.entries(replacements).forEach(([placeholder, real]) => {
        const regex = new RegExp(placeholder, 'g');
        const matches = c.match(regex);
        if (matches) {
          c = c.replace(regex, real);
          fileReplacements += matches.length;
        }
      });

      if (c !== before) {
        fs.writeFileSync(full, c, 'utf8');
        const rel = path.relative(__dirname, full).replace(/\\/g, '/');
        console.log(`  ✅ ${rel} (${fileReplacements} replacements)`);
        totalFiles++;
        totalReplacements += fileReplacements;
      }
    }
  });
}

// Fix app directory
walkAndFix(APP);

// Also fix components directory at root level
walkAndFix(path.join(__dirname, 'components'));

console.log('');
console.log(`Done: ${totalReplacements} placeholder IDs replaced across ${totalFiles} files`);
console.log('');
console.log('Run:');
console.log('  git add . && git commit -m "Replace placeholder ad slots with real AdSense IDs" && git push origin master');
