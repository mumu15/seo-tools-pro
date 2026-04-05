// Run: node generate_og_png.js
// Requires: npm install canvas
const { createCanvas } = require('canvas');
const fs = require('fs');

const w = 1200, h = 630;
const canvas = createCanvas(w, h);
const ctx = canvas.getContext('2d');

// Background
ctx.fillStyle = '#0f172a';
ctx.fillRect(0, 0, w, h);

// Accent gradient bar
const grd = ctx.createLinearGradient(0, 0, w, 0);
grd.addColorStop(0, '#10b981');
grd.addColorStop(1, '#06b6d4');
ctx.fillStyle = grd;
ctx.fillRect(0, 0, w, 6);

// Logo text
ctx.fillStyle = '#10b981';
ctx.font = 'bold 28px Arial';
ctx.fillText('W', 60, 80);
ctx.fillStyle = '#e2e8f0';
ctx.font = '24px Arial';
ctx.fillText('WordCounterTool.net', 95, 80);

// Main title
ctx.fillStyle = '#f8fafc';
ctx.font = 'bold 52px Arial';
ctx.fillText('Free Word Counter', 60, 260);
ctx.fillText('& SEO Writing Tools', 60, 325);

// Subtitle
ctx.fillStyle = '#94a3b8';
ctx.font = '24px Arial';
ctx.fillText('Word counter, readability checker, keyword density,', 60, 390);
ctx.fillText('meta tag generator, and 250+ free writing tools.', 60, 425);

// Stats badges
const badges = [
  { text: '250+ Tools', x: 60 },
  { text: '100% Free', x: 240 },
  { text: 'No Sign Up', x: 410 },
  { text: '15 Languages', x: 600 },
];
badges.forEach(b => {
  ctx.fillStyle = 'rgba(16,185,129,0.15)';
  ctx.beginPath();
  ctx.roundRect(b.x, 480, 150, 40, 20);
  ctx.fill();
  ctx.fillStyle = '#34d399';
  ctx.font = '16px Arial';
  ctx.fillText(b.text, b.x + 20, 506);
});

// Decorative dots
ctx.fillStyle = 'rgba(16,185,129,0.08)';
for (let i = 0; i < 20; i++) {
  const x = 800 + Math.random() * 350;
  const y = 100 + Math.random() * 400;
  const r = 5 + Math.random() * 30;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fill();
}

// Save
const buf = canvas.toBuffer('image/png');
fs.writeFileSync('public/og-image.png', buf);
console.log('✅ OG image saved: public/og-image.png (' + buf.length + ' bytes)');
