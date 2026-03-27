const fs = require('fs');
let c = fs.readFileSync('next.config.js', 'utf8');

const newRedirect = `      {
        source: '/word-count',
        destination: '/word-counter',
        permanent: true,
      },`;

// Insert before the closing ] of redirects
c = c.replace(
  "    ]\n  },\n}\nmodule.exports = nextConfig",
  "      " + newRedirect.trim() + "\n    ]\n  },\n}\nmodule.exports = nextConfig"
);

fs.writeFileSync('next.config.js', c);
console.log('Added /word-count -> /word-counter redirect');
console.log('Now run: git add . && git commit -m "Add word-count redirect" && git push origin master');
