const { execSync } = require('child_process');
const path = require('path');

console.log('');
console.log('╔═══════════════════════════════════════════════════════════════╗');
console.log('║  WORDCOUNTERTOOL.NET — FULL SEO OVERHAUL                     ║');
console.log('║  Running all 3 fix scripts in sequence                       ║');
console.log('╠═══════════════════════════════════════════════════════════════╣');
console.log('║                                                               ║');
console.log('║  Part 1: Core SEO (layout, schemas, ads, OG, titles, hreflang)║');
console.log('║  Part 2: Blog Hub (categories, cards, noindex lang posts)     ║');
console.log('║  Part 3: Humanize (AI removal, images, thickening, schemas)   ║');
console.log('║                                                               ║');
console.log('╚═══════════════════════════════════════════════════════════════╝');
console.log('');

const scripts = [
  'fix_wct_part1_core_seo.js',
  'fix_wct_part2_blog_hub.js',
  'fix_wct_part3_humanize_blogs.js',
];

let success = 0;
let failed = 0;

scripts.forEach((script, i) => {
  const scriptPath = path.join(__dirname, script);
  console.log(`\n${'━'.repeat(60)}`);
  console.log(`  Running Part ${i + 1}: ${script}`);
  console.log(`${'━'.repeat(60)}\n`);

  try {
    execSync(`node "${scriptPath}"`, { stdio: 'inherit', cwd: __dirname });
    success++;
  } catch (err) {
    console.error(`  ❌ FAILED: ${script}`);
    console.error(`  Error: ${err.message}`);
    failed++;
  }
});

console.log('');
console.log('╔═══════════════════════════════════════════════════════════════╗');
console.log(`║  ALL DONE — ${success} scripts succeeded, ${failed} failed                  ║`);
console.log('╠═══════════════════════════════════════════════════════════════╣');
console.log('║                                                               ║');
console.log('║  NEXT STEPS:                                                  ║');
console.log('║                                                               ║');
console.log('║  1. Generate PNG OG image:                                    ║');
console.log('║     npm install canvas && node generate_og_png.js             ║');
console.log('║                                                               ║');
console.log('║  2. Create NEW AdSense ad units in your dashboard:            ║');
console.log('║     • Header leaderboard (728x90) → replace "1111111111"      ║');
console.log('║     • Blog header → replace "3333333333"                      ║');
console.log('║     • Blog bottom → replace "4444444444"                      ║');
console.log('║     • Tool bottom → replace "2222222222"                      ║');
console.log('║     • Anchor ad → replace "ANCHOR_SLOT" in AdUnit.js         ║');
console.log('║                                                               ║');
console.log('║  3. Deploy:                                                   ║');
console.log('║     git add .                                                 ║');
console.log('║     git commit -m "Full SEO overhaul: ads, schemas, blog,     ║');
console.log('║       humanized content, categories, infographics"            ║');
console.log('║     git push origin master                                    ║');
console.log('║                                                               ║');
console.log('║  4. After deploy, verify in Google Search Console:            ║');
console.log('║     • Submit updated sitemap                                  ║');
console.log('║     • Request indexing for key pages                          ║');
console.log('║     • Check for coverage errors                               ║');
console.log('║                                                               ║');
console.log('║  5. In AdSense dashboard:                                     ║');
console.log('║     • Enable Auto Ads as backup                               ║');
console.log('║     • Set up anchor/vignette ads                              ║');
console.log('║     • Monitor RPM per page over 7 days                        ║');
console.log('║                                                               ║');
console.log('╚═══════════════════════════════════════════════════════════════╝');
