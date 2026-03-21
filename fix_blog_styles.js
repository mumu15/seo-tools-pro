const fs = require('fs');
const path = require('path');

const blogDir = path.join(__dirname, 'app', 'blog');
let fixed = 0;

const dirs = fs.readdirSync(blogDir).filter(d => 
  fs.statSync(path.join(blogDir, d)).isDirectory()
);

for (const dir of dirs) {
  const file = path.join(blogDir, dir, 'page.js');
  if (!fs.existsSync(file)) continue;
  
  let c = fs.readFileSync(file, 'utf8');
  const before = c;

  // Fix: style="color:#xxx" → style={{color:'#xxx'}}
  c = c.replace(/style="color:(#[a-fA-F0-9]+)"/g, "style={{color:'$1'}}");
  
  // Fix: style="color: #xxx" (with space)
  c = c.replace(/style="color: (#[a-fA-F0-9]+)"/g, "style={{color:'$1'}}");

  if (c !== before) {
    fs.writeFileSync(file, c, 'utf8');
    fixed++;
    console.log('  ✅ Fixed ' + dir);
  }
}

console.log('');
console.log('Fixed ' + fixed + ' files');
console.log('');
console.log('Now run:');
console.log('  git add . && git commit -m "Fix JSX style props in blog posts" && git push origin main');
