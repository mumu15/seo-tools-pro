const fs = require('fs');
const path = require('path');

const configPath = path.join(__dirname, 'next.config.js');

if (!fs.existsSync(configPath)) {
  console.log('❌ next.config.js not found');
  process.exit(1);
}

let config = fs.readFileSync(configPath, 'utf8');

// Check if these redirects already exist
const needed = [];

if (!config.includes("source: '/faq'")) {
  needed.push({
    source: '/faq',
    destination: '/',
    permanent: true,
  });
}

if (!config.includes("source: '/word-count'")) {
  needed.push({
    source: '/word-count',
    destination: '/word-counter',
    permanent: true,
  });
}

if (needed.length === 0) {
  console.log('✅ Both redirects already exist');
  process.exit(0);
}

// Insert redirects into the existing redirects array
needed.forEach(r => {
  // Find the return [ inside async redirects()
  config = config.replace(
    /async redirects\(\)\s*\{[\s\S]*?return\s*\[/,
    (match) => {
      return match + `\n      {\n        source: '${r.source}',\n        destination: '${r.destination}',\n        permanent: true,\n      },`;
    }
  );
  console.log(`✅ Added redirect: ${r.source} → ${r.destination}`);
});

fs.writeFileSync(configPath, config, 'utf8');

console.log('');
console.log('Run:');
console.log('  git add . && git commit -m "Fix 404s: add redirects for /faq and /word-count" && git push origin master');
