const fs = require('fs');

let content = fs.readFileSync('app/page.js', 'utf8');

// Add trust badges + stats bar between hero and tools grid
const trustSection = `
        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {[
            { icon: '⚡', text: 'Instant Results' },
            { icon: '🔒', text: 'No Sign Up Required' },
            { icon: '💯', text: '100% Free Forever' },
            { icon: '🚫', text: 'No Ads' },
            { icon: '📱', text: 'Works on Mobile' },
          ].map((badge, i) => (
            <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
              style={{ background: 'rgba(52,211,153,0.08)', border: '1px solid rgba(52,211,153,0.15)', color: '#94a3b8' }}>
              <span>{badge.icon}</span>
              <span>{badge.text}</span>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14 p-6 rounded-2xl border"
          style={{ background: 'rgba(52,211,153,0.03)', borderColor: 'rgba(52,211,153,0.1)' }}>
          {[
            { number: '11', label: 'Free Tools', icon: '🛠️' },
            { number: '50K+', label: 'Monthly Users', icon: '👥' },
            { number: '100%', label: 'Free Forever', icon: '💚' },
            { number: '4.9★', label: 'User Rating', icon: '⭐' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className="text-2xl font-bold text-white">{stat.number}</div>
              <div className="text-slate-500 text-xs mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

`;

// Insert trust section before tools grid
content = content.replace(
  '        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">',
  trustSection + '        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">'
);

fs.writeFileSync('app/page.js', content, 'utf8');
console.log('✅ Trust badges and stats bar added to homepage!');
console.log('Run: git add . && git commit -m "Add trust badges and stats bar to homepage" && git push');
