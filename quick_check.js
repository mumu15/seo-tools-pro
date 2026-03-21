const fs = require('fs');
const https = require('https');

const sm = fs.readFileSync('app/sitemap.js', 'utf8');
const urls = [];
const regex = /base \+ "([^"]+)"/g;
let m;
while ((m = regex.exec(sm)) !== null) urls.push(m[1]);

// Also try alternate format
if (urls.length === 0) {
  const regex2 = /"(\/[^"]+)"/g;
  while ((m = regex2.exec(sm)) !== null) {
    if (m[1].startsWith('/') && !m[1].includes('http')) urls.push(m[1]);
  }
}

// Dedupe
const unique = [...new Set(urls)];
console.log('Sitemap URLs: ' + unique.length);
console.log('Testing live...');

let ok = 0, errs = 0, done = 0;
const start = Date.now();

function check(u) {
  return new Promise(r => {
    https.get('https://www.wordcountertool.net' + u, { timeout: 15000 }, res => {
      res.resume();
      if (res.statusCode === 200) ok++; else errs++;
      done++;
      process.stdout.write('\r  ' + done + '/' + unique.length + ' (' + Math.round(done/unique.length*100) + '%)');
      r();
    }).on('error', () => { errs++; done++; r(); }).on('timeout', () => { errs++; done++; r(); });
  });
}

async function run() {
  const q = [...unique];
  const workers = [];
  for (let i = 0; i < 5; i++) workers.push((async () => { while (q.length) await check(q.shift()); })());
  await Promise.all(workers);
  const avg = ok > 0 ? ((Date.now() - start) / ok / 1000).toFixed(2) : 'N/A';
  console.log('\n');
  console.log('OK (200): ' + ok);
  console.log('Errors:   ' + errs);
  console.log('Time:     ' + ((Date.now() - start) / 1000).toFixed(1) + 's');
  console.log('Avg load: ' + avg + 's');
  console.log(ok >= 20 && errs === 0 ? '\n6/6 READY!' : '\nIssues found — check errors');
}
run();
