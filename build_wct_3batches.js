const fs = require('fs');
const path = require('path');

const AD_SLOT = '3248634657';

// ═══════════════════════════════════════════════════════════
// BATCH 1: READING TIME PAGES /reading-time/for/[words]
// ═══════════════════════════════════════════════════════════

const readingTimeData = [
  { slug: '100-words', words: 100, minutes: '1 minute', seconds: '24 seconds', fast: '37 seconds', slow: '50 seconds' },
  { slug: '200-words', words: 200, minutes: '1 minute', seconds: '48 seconds', fast: '1 minute 15 seconds', slow: '1 minute 40 seconds' },
  { slug: '300-words', words: 300, minutes: '1 minute', seconds: '12 seconds', fast: '1 minute 53 seconds', slow: '2 minutes 30 seconds' },
  { slug: '400-words', words: 400, minutes: '1 minute', seconds: '36 seconds', fast: '2 minutes 30 seconds', slow: '3 minutes 20 seconds' },
  { slug: '500-words', words: 500, minutes: '2 minutes', seconds: '0 seconds', fast: '3 minutes 8 seconds', slow: '4 minutes 10 seconds' },
  { slug: '600-words', words: 600, minutes: '2 minutes', seconds: '24 seconds', fast: '3 minutes 45 seconds', slow: '5 minutes' },
  { slug: '700-words', words: 700, minutes: '2 minutes', seconds: '48 seconds', fast: '4 minutes 22 seconds', slow: '5 minutes 50 seconds' },
  { slug: '800-words', words: 800, minutes: '3 minutes', seconds: '12 seconds', fast: '5 minutes', slow: '6 minutes 40 seconds' },
  { slug: '900-words', words: 900, minutes: '3 minutes', seconds: '36 seconds', fast: '5 minutes 37 seconds', slow: '7 minutes 30 seconds' },
  { slug: '1000-words', words: 1000, minutes: '4 minutes', seconds: '0 seconds', fast: '6 minutes 15 seconds', slow: '8 minutes 20 seconds' },
  { slug: '1200-words', words: 1200, minutes: '4 minutes', seconds: '48 seconds', fast: '7 minutes 30 seconds', slow: '10 minutes' },
  { slug: '1500-words', words: 1500, minutes: '6 minutes', seconds: '0 seconds', fast: '9 minutes 22 seconds', slow: '12 minutes 30 seconds' },
  { slug: '1700-words', words: 1700, minutes: '6 minutes', seconds: '48 seconds', fast: '10 minutes 37 seconds', slow: '14 minutes 10 seconds' },
  { slug: '2000-words', words: 2000, minutes: '8 minutes', seconds: '0 seconds', fast: '12 minutes 30 seconds', slow: '16 minutes 40 seconds' },
  { slug: '2500-words', words: 2500, minutes: '10 minutes', seconds: '0 seconds', fast: '15 minutes 37 seconds', slow: '20 minutes 50 seconds' },
  { slug: '3000-words', words: 3000, minutes: '12 minutes', seconds: '0 seconds', fast: '18 minutes 45 seconds', slow: '25 minutes' },
  { slug: '3500-words', words: 3500, minutes: '14 minutes', seconds: '0 seconds', fast: '21 minutes 52 seconds', slow: '29 minutes 10 seconds' },
  { slug: '4000-words', words: 4000, minutes: '16 minutes', seconds: '0 seconds', fast: '25 minutes', slow: '33 minutes 20 seconds' },
  { slug: '5000-words', words: 5000, minutes: '20 minutes', seconds: '0 seconds', fast: '31 minutes 15 seconds', slow: '41 minutes 40 seconds' },
  { slug: '6000-words', words: 6000, minutes: '24 minutes', seconds: '0 seconds', fast: '37 minutes 30 seconds', slow: '50 minutes' },
  { slug: '7000-words', words: 7000, minutes: '28 minutes', seconds: '0 seconds', fast: '43 minutes 45 seconds', slow: '58 minutes 20 seconds' },
  { slug: '7500-words', words: 7500, minutes: '30 minutes', seconds: '0 seconds', fast: '46 minutes 52 seconds', slow: '1 hour 2 minutes' },
  { slug: '8000-words', words: 8000, minutes: '32 minutes', seconds: '0 seconds', fast: '50 minutes', slow: '1 hour 6 minutes' },
  { slug: '9000-words', words: 9000, minutes: '36 minutes', seconds: '0 seconds', fast: '56 minutes 15 seconds', slow: '1 hour 15 minutes' },
  { slug: '10000-words', words: 10000, minutes: '40 minutes', seconds: '0 seconds', fast: '62 minutes 30 seconds', slow: '1 hour 23 minutes' },
  { slug: '15000-words', words: 15000, minutes: '60 minutes', seconds: '0 seconds', fast: '1 hour 34 minutes', slow: '2 hours 5 minutes' },
  { slug: '20000-words', words: 20000, minutes: '80 minutes', seconds: '0 seconds', fast: '2 hours 5 minutes', slow: '2 hours 47 minutes' },
  { slug: '25000-words', words: 25000, minutes: '100 minutes', seconds: '0 seconds', fast: '2 hours 36 minutes', slow: '3 hours 29 minutes' },
  { slug: '30000-words', words: 30000, minutes: '2 hours', seconds: '0 minutes', fast: '3 hours 7 minutes', slow: '4 hours 10 minutes' },
  { slug: '40000-words', words: 40000, minutes: '2 hours 40 minutes', seconds: '0 seconds', fast: '4 hours 10 minutes', slow: '5 hours 33 minutes' },
  { slug: '50000-words', words: 50000, minutes: '3 hours 20 minutes', seconds: '0 seconds', fast: '5 hours 12 minutes', slow: '6 hours 57 minutes' },
  { slug: '60000-words', words: 60000, minutes: '4 hours', seconds: '0 seconds', fast: '6 hours 15 minutes', slow: '8 hours 20 minutes' },
  { slug: '75000-words', words: 75000, minutes: '5 hours', seconds: '0 seconds', fast: '7 hours 49 minutes', slow: '10 hours 25 minutes' },
  { slug: '80000-words', words: 80000, minutes: '5 hours 20 minutes', seconds: '0 seconds', fast: '8 hours 20 minutes', slow: '11 hours 6 minutes' },
  { slug: '90000-words', words: 90000, minutes: '6 hours', seconds: '0 seconds', fast: '9 hours 22 minutes', slow: '12 hours 30 minutes' },
  { slug: '100000-words', words: 100000, minutes: '6 hours 40 minutes', seconds: '0 seconds', fast: '10 hours 25 minutes', slow: '13 hours 53 minutes' },
];

function generateReadingTimePage(d) {
  const w = d.words.toLocaleString();
  const avgWPM = 250;
  const avgMins = Math.round(d.words / avgWPM);
  const avgTime = avgMins < 60 ? avgMins + ' minute' + (avgMins !== 1 ? 's' : '') : Math.floor(avgMins / 60) + ' hour' + (Math.floor(avgMins / 60) !== 1 ? 's' : '') + (avgMins % 60 > 0 ? ' ' + (avgMins % 60) + ' minutes' : '');

  return `import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import AdUnit from '../../../components/AdUnit';

export const metadata = {
  title: 'How Long Does It Take to Read ${w} Words? | WordCounterTool.net',
  description: 'Find out exactly how long it takes to read ${w} words at average, fast and slow reading speeds. Plus tips on reading time for different content types.',
  alternates: { canonical: 'https://www.wordcountertool.net/reading-time/for/${d.slug}' },
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-950 text-white">
        <div className="max-w-4xl mx-auto px-4 py-12">

          <nav className="text-sm text-slate-500 mb-6">
            <a href="/" className="hover:text-emerald-400 transition-colors">Home</a>
            <span className="mx-2">/</span>
            <a href="/reading-time" className="hover:text-emerald-400 transition-colors">Reading Time</a>
            <span className="mx-2">/</span>
            <span className="text-slate-300">${w} Words</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">How Long Does It Take to Read ${w} Words?</h1>
          <p className="text-slate-400 text-lg mb-10">Reading time for ${w} words depends on your reading speed. Here are the exact times at slow, average and fast reading speeds.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            <div className="bg-slate-800/50 border border-emerald-500/30 rounded-2xl p-6 text-center">
              <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2">Average Reader</p>
              <p className="text-white text-3xl font-bold mb-1">${avgTime}</p>
              <p className="text-slate-400 text-sm">250 words per minute</p>
            </div>
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 text-center">
              <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Fast Reader</p>
              <p className="text-white text-3xl font-bold mb-1">${d.fast}</p>
              <p className="text-slate-400 text-sm">400 words per minute</p>
            </div>
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 text-center">
              <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Slow Reader</p>
              <p className="text-white text-3xl font-bold mb-1">${d.slow}</p>
              <p className="text-slate-400 text-sm">150 words per minute</p>
            </div>
          </div>

          <div className="bg-slate-800/40 border border-emerald-500/20 rounded-2xl p-6 mb-10">
            <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2">Quick Answer</p>
            <p className="text-white text-lg">It takes approximately <strong>${avgTime}</strong> to read ${w} words at the average reading speed of 250 words per minute. At a fast reading speed of 400 WPM it takes ${d.fast}. At a slow reading speed of 150 WPM it takes ${d.slow}.</p>
          </div>

          <AdUnit slot="${AD_SLOT}" />

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Reading Speed Reference Chart</h2>
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.2)'}}>
                    <th className="text-left text-emerald-400 py-3 pr-4 font-semibold">Reading Speed</th>
                    <th className="text-left text-emerald-400 py-3 pr-4 font-semibold">Words Per Minute</th>
                    <th className="text-left text-emerald-400 py-3 pr-4 font-semibold">Time for ${w} Words</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="text-white font-medium py-3 pr-4">Very slow</td>
                    <td className="text-slate-300 py-3 pr-4">100 WPM</td>
                    <td className="text-slate-300 py-3 pr-4">${Math.round(d.words/100)} minutes</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="text-white font-medium py-3 pr-4">Slow</td>
                    <td className="text-slate-300 py-3 pr-4">150 WPM</td>
                    <td className="text-slate-300 py-3 pr-4">${d.slow}</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="text-white font-medium py-3 pr-4">Average</td>
                    <td className="text-slate-300 py-3 pr-4">250 WPM</td>
                    <td className="text-slate-300 py-3 pr-4">${avgTime}</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="text-white font-medium py-3 pr-4">Fast</td>
                    <td className="text-slate-300 py-3 pr-4">400 WPM</td>
                    <td className="text-slate-300 py-3 pr-4">${d.fast}</td>
                  </tr>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="text-white font-medium py-3 pr-4">Speed reader</td>
                    <td className="text-slate-300 py-3 pr-4">700 WPM</td>
                    <td className="text-slate-300 py-3 pr-4">${Math.round(d.words/700)} minutes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">What Can You Read in ${w} Words?</h2>
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6">
              <p className="text-slate-300 leading-relaxed mb-4">${w} words is roughly the length of a ${
    d.words <= 300 ? 'short social media post or a paragraph in a news article' :
    d.words <= 800 ? 'short news article or a detailed email' :
    d.words <= 1500 ? 'standard blog post or a magazine article' :
    d.words <= 3000 ? 'long-form blog post or a short story' :
    d.words <= 7000 ? 'feature magazine article or a short chapter' :
    d.words <= 15000 ? 'short novella chapter or a detailed report' :
    d.words <= 50000 ? 'short novel or a detailed business document' :
    'full-length novel'
  }. Use the reading time calculator to check any piece of content instantly.</p>
              <a href="/reading-time" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-6 py-3 rounded-xl transition-colors">Calculate Reading Time Free</a>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="border border-slate-700/50 rounded-xl p-5">
                <h3 className="text-white font-semibold mb-2">How long does it take to read ${w} words out loud?</h3>
                <p className="text-slate-400 text-sm leading-relaxed">Reading aloud is slower than silent reading. The average speaking pace is 130 to 150 words per minute. At 140 WPM, ${w} words takes approximately ${Math.round(d.words/140)} minutes to read aloud. This is useful for speeches, podcasts and audiobook estimates.</p>
              </div>
              <div className="border border-slate-700/50 rounded-xl p-5">
                <h3 className="text-white font-semibold mb-2">How many pages is ${w} words?</h3>
                <p className="text-slate-400 text-sm leading-relaxed">In a standard document with Times New Roman 12pt double spacing, ${w} words is approximately ${Math.round(d.words/275)} pages. Single spaced it is about ${Math.round(d.words/550)} pages. Published books average 250 to 300 words per page.</p>
              </div>
              <div className="border border-slate-700/50 rounded-xl p-5">
                <h3 className="text-white font-semibold mb-2">Does reading speed affect comprehension?</h3>
                <p className="text-slate-400 text-sm leading-relaxed">Yes. Reading too fast reduces comprehension. The average reader retains about 60 to 70 percent of what they read at 250 WPM. Speed readers trading speed for comprehension may retain only 50 percent. For important material, read at a pace where you understand and retain 70 to 80 percent.</p>
              </div>
              <div className="border border-slate-700/50 rounded-xl p-5">
                <h3 className="text-white font-semibold mb-2">How do I calculate reading time for my content?</h3>
                <p className="text-slate-400 text-sm leading-relaxed">Divide your word count by 250 to get the reading time in minutes at average speed. For example, ${w} divided by 250 equals ${(d.words/250).toFixed(1)} minutes. Use our free reading time calculator to get instant results for any text.</p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Related Tools</h2>
            <div className="flex flex-wrap gap-3">
              <a href="/reading-time" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Reading Time Calculator</a>
              <a href="/word-counter" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Word Counter</a>
              <a href="/words-per-minute" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Words Per Minute Calculator</a>
              <a href="/blog/average-reading-speed" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Average Reading Speed Guide</a>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}
`;
}

// ═══════════════════════════════════════════════════════════
// BATCH 2: CHARACTER LIMIT PAGES /character-limits/[platform]
// ═══════════════════════════════════════════════════════════

const platformData = [
  {
    slug: 'twitter',
    name: 'Twitter / X',
    title: 'Twitter X Character Limit: Complete Guide (2026)',
    description: 'Complete guide to Twitter X character limits in 2026. Tweets, replies, DMs, bios, display names and Premium limits all explained.',
    limits: [
      ['Element', 'Character Limit'],
      ['Standard tweet', '280 characters'],
      ['X Premium post', '25,000 characters'],
      ['Direct message', '10,000 characters'],
      ['Profile bio', '160 characters'],
      ['Display name', '50 characters'],
      ['Username', '15 characters'],
      ['URL (any link)', '23 characters'],
    ],
    quickAnswer: 'A standard Twitter/X tweet is limited to 280 characters. X Premium subscribers can post up to 25,000 characters. URLs always count as 23 characters regardless of actual length.',
    tool: '/character-counter',
    toolName: 'Character Counter',
  },
  {
    slug: 'instagram',
    name: 'Instagram',
    title: 'Instagram Character Limit: Complete Guide (2026)',
    description: 'Complete guide to Instagram character limits in 2026. Captions, bios, stories, Reels and comment limits all covered.',
    limits: [
      ['Element', 'Character Limit'],
      ['Feed caption', '2,200 characters'],
      ['Visible before More', '125 characters'],
      ['Bio', '150 characters'],
      ['Username', '30 characters'],
      ['Story caption', '250 characters'],
      ['Reels caption', '2,200 characters'],
      ['Comment', '2,200 characters'],
    ],
    quickAnswer: 'Instagram captions can be up to 2,200 characters. However only the first 125 characters show before the See More button. Your bio is limited to 150 characters.',
    tool: '/character-counter',
    toolName: 'Character Counter',
  },
  {
    slug: 'linkedin',
    name: 'LinkedIn',
    title: 'LinkedIn Character Limit: Complete Guide (2026)',
    description: 'Complete guide to LinkedIn character limits in 2026. Posts, articles, headlines, summaries, messages and connection requests all covered.',
    limits: [
      ['Element', 'Character Limit'],
      ['Post', '3,000 characters'],
      ['Article body', '125,000 characters'],
      ['Article headline', '150 characters'],
      ['Profile headline', '220 characters'],
      ['About section', '2,600 characters'],
      ['Connection request', '300 characters'],
      ['InMail message', '1,900 characters'],
      ['Comment', '1,250 characters'],
    ],
    quickAnswer: 'LinkedIn posts are limited to 3,000 characters. Your profile headline is 220 characters. Connection requests are limited to 300 characters. Articles can be up to 125,000 characters.',
    tool: '/character-counter',
    toolName: 'Character Counter',
  },
  {
    slug: 'facebook',
    name: 'Facebook',
    title: 'Facebook Character Limit: Complete Guide (2026)',
    description: 'Complete guide to Facebook character limits in 2026. Posts, comments, page names, ads and group descriptions all covered.',
    limits: [
      ['Element', 'Character Limit'],
      ['Personal post', '63,206 characters'],
      ['Page post', '63,206 characters'],
      ['Comment', '8,000 characters'],
      ['Page name', '75 characters'],
      ['Page description', '255 characters'],
      ['Event name', '64 characters'],
      ['Event description', '65,535 characters'],
      ['Ad primary text', '125 characters (before cutoff)'],
      ['Ad headline', '27 characters'],
    ],
    quickAnswer: 'Facebook posts can be up to 63,206 characters. However Facebook ad primary text is truncated after 125 characters. Ad headlines are limited to 27 characters.',
    tool: '/character-counter',
    toolName: 'Character Counter',
  },
  {
    slug: 'tiktok',
    name: 'TikTok',
    title: 'TikTok Character Limit: Complete Guide (2026)',
    description: 'Complete guide to TikTok character limits in 2026. Captions, bios, comments and username limits all explained.',
    limits: [
      ['Element', 'Character Limit'],
      ['Video caption', '2,200 characters'],
      ['Bio', '80 characters'],
      ['Username', '24 characters'],
      ['Comment', '150 characters'],
      ['Hashtag in caption', 'Counts toward 2,200'],
    ],
    quickAnswer: 'TikTok video captions are limited to 2,200 characters. Your bio is only 80 characters. Comments are limited to 150 characters. Usernames can be up to 24 characters.',
    tool: '/character-counter',
    toolName: 'Character Counter',
  },
  {
    slug: 'youtube',
    name: 'YouTube',
    title: 'YouTube Character Limit: Complete Guide (2026)',
    description: 'Complete guide to YouTube character limits in 2026. Video titles, descriptions, tags, comments and channel info limits all covered.',
    limits: [
      ['Element', 'Character Limit'],
      ['Video title', '100 characters'],
      ['Video description', '5,000 characters'],
      ['Visible in search results', '157 characters'],
      ['Tag', '30 characters per tag'],
      ['All tags combined', '500 characters'],
      ['Comment', '10,000 characters'],
      ['Channel name', '30 characters'],
      ['Channel description', '1,000 characters'],
    ],
    quickAnswer: 'YouTube video titles are limited to 100 characters but only the first 70 show in search results. Descriptions can be up to 5,000 characters but only 157 show in search snippets.',
    tool: '/character-counter',
    toolName: 'Character Counter',
  },
  {
    slug: 'pinterest',
    name: 'Pinterest',
    title: 'Pinterest Character Limit: Complete Guide (2026)',
    description: 'Complete guide to Pinterest character limits in 2026. Pin titles, descriptions, board names and profile bio limits all explained.',
    limits: [
      ['Element', 'Character Limit'],
      ['Pin title', '100 characters'],
      ['Pin description', '500 characters'],
      ['Visible in feed', '50-60 characters'],
      ['Board name', '50 characters'],
      ['Board description', '500 characters'],
      ['Profile name', '30 characters'],
      ['Profile bio', '160 characters'],
    ],
    quickAnswer: 'Pinterest pin descriptions can be up to 500 characters but only 50 to 60 characters show in the feed. Pin titles are limited to 100 characters. Your profile bio is 160 characters.',
    tool: '/character-counter',
    toolName: 'Character Counter',
  },
  {
    slug: 'google-ads',
    name: 'Google Ads',
    title: 'Google Ads Character Limit: Complete Guide (2026)',
    description: 'Complete guide to Google Ads character limits in 2026. Responsive search ads, headlines, descriptions and display URLs all covered.',
    limits: [
      ['Element', 'Character Limit'],
      ['Headline', '30 characters'],
      ['Description', '90 characters'],
      ['Display URL path 1', '15 characters'],
      ['Display URL path 2', '15 characters'],
      ['Final URL', '2,048 characters'],
      ['Sitelink headline', '25 characters'],
      ['Sitelink description', '35 characters'],
      ['Call extension', '25 characters'],
    ],
    quickAnswer: 'Google Ads headlines are limited to 30 characters. Descriptions are 90 characters. Display URL path fields are 15 characters each. All limits are per field.',
    tool: '/meta-tag-generator',
    toolName: 'Meta Tag Generator',
  },
  {
    slug: 'meta-title',
    name: 'Meta Title (SEO)',
    title: 'Meta Title Character Limit for SEO (2026 Guide)',
    description: 'The exact meta title character limit for Google SEO in 2026. Learn the safe character and pixel width limits to avoid truncation in search results.',
    limits: [
      ['Scenario', 'Limit'],
      ['Google desktop display', '~600 pixels / 55-60 chars'],
      ['Google mobile display', '~920 pixels / 70-78 chars'],
      ['Safe zone (all devices)', '50-55 characters'],
      ['Maximum recommended', '60 characters'],
      ['Gets truncated', '65+ characters'],
    ],
    quickAnswer: 'The safe meta title length is 50 to 60 characters. Google measures width in pixels not characters so exact limits vary by letter width. Keep titles under 60 characters to avoid truncation in search results.',
    tool: '/meta-tag-generator',
    toolName: 'Meta Tag Generator',
  },
  {
    slug: 'meta-description',
    name: 'Meta Description (SEO)',
    title: 'Meta Description Character Limit for SEO (2026 Guide)',
    description: 'The exact meta description character limit for Google SEO in 2026. Learn optimal length to maximize click-through rates from search results.',
    limits: [
      ['Scenario', 'Character Limit'],
      ['Desktop Google snippet', '155-160 characters'],
      ['Mobile Google snippet', '120 characters'],
      ['Safe zone', '150-155 characters'],
      ['Minimum recommended', '120 characters'],
      ['Gets truncated', '160+ characters'],
    ],
    quickAnswer: 'Meta descriptions should be 150 to 160 characters for desktop. Google truncates descriptions longer than 155 to 160 characters. On mobile, descriptions over 120 characters may be cut off.',
    tool: '/meta-tag-generator',
    toolName: 'Meta Tag Generator',
  },
  {
    slug: 'email-subject-line',
    name: 'Email Subject Line',
    title: 'Email Subject Line Character Limit: Best Practices (2026)',
    description: 'The ideal email subject line character limit for maximum open rates in 2026. Covers Gmail, Outlook, iPhone Mail and all major email clients.',
    limits: [
      ['Email Client', 'Characters Visible'],
      ['iPhone Mail', '35-38 characters'],
      ['Android Gmail', '30-35 characters'],
      ['Desktop Gmail', '70-80 characters'],
      ['Desktop Outlook', '60-70 characters'],
      ['Apple Watch', '15-18 characters'],
      ['Safe zone (all clients)', '30-40 characters'],
    ],
    quickAnswer: 'Email subject lines should be 30 to 50 characters for maximum visibility across all email clients. Mobile shows only 30 to 38 characters so put your most important words first.',
    tool: '/character-counter',
    toolName: 'Character Counter',
  },
  {
    slug: 'sms',
    name: 'SMS Text Message',
    title: 'SMS Character Limit: Complete Guide (2026)',
    description: 'Complete guide to SMS character limits in 2026. Single SMS length, multi-part messages, Unicode limits and MMS all explained.',
    limits: [
      ['Message Type', 'Character Limit'],
      ['Single SMS (standard)', '160 characters'],
      ['Single SMS (Unicode)', '70 characters'],
      ['Multi-part SMS segment', '153 characters'],
      ['Max SMS length (US)', '1,600 characters'],
      ['MMS text', '1,600 characters'],
    ],
    quickAnswer: 'A single SMS is limited to 160 characters for standard text. If you use special Unicode characters like emojis the limit drops to 70 characters. Messages over 160 characters are split into multiple parts.',
    tool: '/character-counter',
    toolName: 'Character Counter',
  },
];

function generateCharacterLimitPage(p) {
  const rowsJsx = p.limits.slice(1).map(row =>
    `<tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="text-white font-medium py-3 pr-4">${row[0]}</td>
                    <td className="text-slate-300 py-3 pr-4">${row[1]}</td>
                  </tr>`
  ).join('\n                  ');

  return `import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import AdUnit from '../../../components/AdUnit';

export const metadata = {
  title: '${p.title} | WordCounterTool.net',
  description: '${p.description}',
  alternates: { canonical: 'https://www.wordcountertool.net/character-limits/${p.slug}' },
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-950 text-white">
        <div className="max-w-4xl mx-auto px-4 py-12">

          <nav className="text-sm text-slate-500 mb-6">
            <a href="/" className="hover:text-emerald-400 transition-colors">Home</a>
            <span className="mx-2">/</span>
            <a href="/character-limits" className="hover:text-emerald-400 transition-colors">Character Limits</a>
            <span className="mx-2">/</span>
            <span className="text-slate-300">${p.name}</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">${p.name} Character Limits (2026)</h1>
          <p className="text-slate-400 text-lg mb-10">Complete and up-to-date character limits for every ${p.name} element. Use the free character counter below to check your content before posting.</p>

          <div className="bg-slate-800/40 border border-emerald-500/20 rounded-2xl p-6 mb-10">
            <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2">Quick Answer</p>
            <p className="text-white text-lg leading-relaxed">${p.quickAnswer}</p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Complete ${p.name} Character Limits</h2>
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.2)'}}>
                    <th className="text-left text-emerald-400 py-3 pr-4 font-semibold">${p.limits[0][0]}</th>
                    <th className="text-left text-emerald-400 py-3 pr-4 font-semibold">${p.limits[0][1]}</th>
                  </tr>
                </thead>
                <tbody>
                  ${rowsJsx}
                </tbody>
              </table>
            </div>
          </section>

          <AdUnit slot="${AD_SLOT}" />

          <div className="bg-gradient-to-r from-emerald-900/30 to-teal-900/20 border border-emerald-500/30 rounded-2xl p-6 mb-10 text-center">
            <p className="text-white font-semibold text-lg mb-2">Check Your ${p.name} Content Length Free</p>
            <p className="text-slate-400 text-sm mb-4">Paste your content to count characters instantly</p>
            <a href="${p.tool}" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-8 py-3 rounded-xl transition-colors">Open ${p.toolName}</a>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Related Tools and Guides</h2>
            <div className="flex flex-wrap gap-3">
              <a href="/character-counter" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Character Counter</a>
              <a href="/word-counter" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Word Counter</a>
              <a href="/meta-tag-generator" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Meta Tag Generator</a>
              <a href="/character-limits" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">All Platform Limits</a>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}
`;
}

// ═══════════════════════════════════════════════════════════
// BATCH 3: WORD COUNT BY DOCUMENT /word-count/for/[document]
// ═══════════════════════════════════════════════════════════

const documentData = [
  {
    slug: 'essay',
    name: 'Essay',
    title: 'Word Count for an Essay: Complete Guide (2026)',
    description: 'How many words should an essay be? Complete guide to essay word counts for high school, college and university assignments in 2026.',
    quickAnswer: 'A standard college essay is 1,500 to 2,000 words. A high school essay is 500 to 1,000 words. A university essay is 1,500 to 3,000 words. Always check your assignment guidelines as word limits vary by institution and level.',
    table: [
      ['Essay Type', 'Word Count'],
      ['High school essay', '500-1,000 words'],
      ['College application essay', '250-650 words'],
      ['Standard university essay', '1,500-2,000 words'],
      ['Extended essay', '3,000-5,000 words'],
      ['Scholarship essay', '250-600 words'],
      ['Five paragraph essay', '500-800 words'],
      ['Argumentative essay', '1,000-3,000 words'],
      ['Analytical essay', '1,500-3,000 words'],
    ],
  },
  {
    slug: 'thesis',
    name: 'Thesis',
    title: 'Word Count for a Thesis: Complete Guide (2026)',
    description: 'How many words is a thesis? Complete guide to thesis and dissertation word counts for undergraduate, master and PhD levels in 2026.',
    quickAnswer: 'An undergraduate thesis is typically 8,000 to 15,000 words. A master thesis is 15,000 to 50,000 words. A PhD thesis is 70,000 to 100,000 words. Word count requirements vary significantly by institution and discipline.',
    table: [
      ['Thesis Level', 'Word Count'],
      ['Undergraduate thesis', '8,000-15,000 words'],
      ['Honours thesis', '10,000-20,000 words'],
      ['Master thesis (arts)', '20,000-50,000 words'],
      ['Master thesis (science)', '15,000-30,000 words'],
      ['PhD thesis (humanities)', '80,000-100,000 words'],
      ['PhD thesis (sciences)', '50,000-80,000 words'],
    ],
  },
  {
    slug: 'cover-letter',
    name: 'Cover Letter',
    title: 'Word Count for a Cover Letter: Complete Guide (2026)',
    description: 'How many words should a cover letter be? The ideal cover letter length for job applications in 2026, by career level and industry.',
    quickAnswer: 'A cover letter should be 250 to 400 words and fit on one page. Three to four short paragraphs is the ideal structure. Hiring managers spend under 30 seconds on cover letters so brevity and impact are essential.',
    table: [
      ['Career Level', 'Word Count'],
      ['Student or intern', '200-300 words'],
      ['Entry level', '250-350 words'],
      ['Mid career', '300-400 words'],
      ['Senior level', '350-450 words'],
      ['Executive', '400-500 words'],
    ],
  },
  {
    slug: 'resume',
    name: 'Resume',
    title: 'Word Count for a Resume: Complete Guide (2026)',
    description: 'How many words should a resume be? The ideal resume length and word count by career level and experience in 2026.',
    quickAnswer: 'A one-page resume is 400 to 600 words. A two-page resume for senior professionals is 700 to 900 words. Entry-level candidates should always aim for one page. The goal is relevance not length.',
    table: [
      ['Career Stage', 'Word Count'],
      ['Student or intern', '300-450 words'],
      ['Entry level (0-3 years)', '400-500 words'],
      ['Mid level (3-10 years)', '500-700 words'],
      ['Senior level (10+ years)', '700-900 words'],
      ['Executive', '900-1,200 words'],
      ['Academic CV', '2,000+ words'],
    ],
  },
  {
    slug: 'blog-post',
    name: 'Blog Post',
    title: 'Word Count for a Blog Post: SEO Guide (2026)',
    description: 'How many words should a blog post be? The ideal blog post length for SEO and reader engagement in 2026, by content type.',
    quickAnswer: 'The ideal blog post for SEO is 1,500 to 2,500 words. Competitive topics benefit from 2,500 to 4,000 words. Short how-to posts can rank at 800 to 1,200 words. Quality and comprehensiveness matter more than hitting a specific number.',
    table: [
      ['Blog Post Type', 'Word Count'],
      ['Quick tip or update', '500-800 words'],
      ['Standard post', '1,000-1,500 words'],
      ['SEO-focused post', '1,500-2,500 words'],
      ['In-depth guide', '2,500-4,000 words'],
      ['Pillar content', '4,000-8,000 words'],
      ['Ultimate guide', '7,000-12,000 words'],
    ],
  },
  {
    slug: 'research-paper',
    name: 'Research Paper',
    title: 'Word Count for a Research Paper: Complete Guide (2026)',
    description: 'How many words is a research paper? Ideal word counts for college, university and academic journal research papers in 2026.',
    quickAnswer: 'A college research paper is typically 2,000 to 5,000 words. A university journal article is 5,000 to 8,000 words. An abstract should be 150 to 300 words. A literature review chapter is 3,000 to 8,000 words.',
    table: [
      ['Research Paper Type', 'Word Count'],
      ['High school research paper', '1,500-3,000 words'],
      ['College research paper', '2,000-5,000 words'],
      ['Journal article', '5,000-8,000 words'],
      ['Conference paper', '3,000-6,000 words'],
      ['Literature review', '3,000-8,000 words'],
      ['Abstract', '150-300 words'],
      ['Research proposal', '1,500-3,000 words'],
    ],
  },
  {
    slug: 'book',
    name: 'Book',
    title: 'Word Count for a Book: Complete Guide (2026)',
    description: 'How many words is a book? Average word counts for every book genre and format in 2026, from novellas to epic fantasy.',
    quickAnswer: 'A standard novel is 70,000 to 100,000 words. A novella is 20,000 to 50,000 words. Non-fiction books are typically 50,000 to 80,000 words. Picture books are 500 to 1,000 words. Genre significantly affects the target word count.',
    table: [
      ['Book Type', 'Word Count'],
      ['Picture book', '500-1,000 words'],
      ['Middle grade novel', '20,000-50,000 words'],
      ['YA novel', '50,000-80,000 words'],
      ['Literary fiction', '70,000-100,000 words'],
      ['Mystery or thriller', '70,000-90,000 words'],
      ['Romance', '50,000-100,000 words'],
      ['Fantasy or sci-fi', '90,000-150,000 words'],
      ['Non-fiction', '50,000-80,000 words'],
      ['Memoir', '60,000-90,000 words'],
      ['Self-help', '40,000-60,000 words'],
    ],
  },
  {
    slug: 'email',
    name: 'Email',
    title: 'Word Count for an Email: Best Practices (2026)',
    description: 'How long should an email be? Ideal email word counts for different email types including newsletters, cold outreach, follow-ups and formal business emails.',
    quickAnswer: 'A professional email should be 50 to 200 words. Cold outreach emails perform best at 50 to 125 words. Email newsletters should be 200 to 500 words. Formal business letters are 200 to 400 words.',
    table: [
      ['Email Type', 'Word Count'],
      ['Cold outreach', '50-125 words'],
      ['Follow-up email', '50-100 words'],
      ['Professional reply', '75-150 words'],
      ['Business proposal email', '150-300 words'],
      ['Email newsletter', '200-500 words'],
      ['Formal business letter', '200-400 words'],
      ['Welcome email', '150-300 words'],
    ],
  },
  {
    slug: 'speech',
    name: 'Speech',
    title: 'Word Count for a Speech: Complete Guide (2026)',
    description: 'How many words is a speech? Exact word counts for 1, 5, 10, 15, 20 and 30 minute speeches at different speaking speeds.',
    quickAnswer: 'A 5 minute speech is approximately 650 to 750 words at an average speaking pace of 130 to 150 words per minute. A 10 minute speech needs 1,300 to 1,500 words. A 20 minute speech needs 2,600 to 3,000 words.',
    table: [
      ['Speech Duration', 'Word Count (140 WPM avg)'],
      ['1 minute', '130-150 words'],
      ['2 minutes', '260-300 words'],
      ['3 minutes', '390-450 words'],
      ['5 minutes', '650-750 words'],
      ['10 minutes', '1,300-1,500 words'],
      ['15 minutes', '1,950-2,250 words'],
      ['20 minutes', '2,600-3,000 words'],
      ['30 minutes', '3,900-4,500 words'],
      ['45 minutes', '5,850-6,750 words'],
      ['60 minutes', '7,800-9,000 words'],
    ],
  },
  {
    slug: 'press-release',
    name: 'Press Release',
    title: 'Word Count for a Press Release: Complete Guide (2026)',
    description: 'How long should a press release be? The ideal press release word count and format for maximum media pickup in 2026.',
    quickAnswer: 'A press release should be 400 to 600 words and fit on a single page. Journalists receive hundreds of press releases daily. Concise well-structured releases consistently get more coverage than long ones.',
    table: [
      ['Press Release Section', 'Word Count'],
      ['Headline', '10-15 words'],
      ['Dateline and intro paragraph', '50-75 words'],
      ['Body paragraphs', '250-400 words'],
      ['Boilerplate', '75-150 words'],
      ['Total press release', '400-600 words'],
    ],
  },
  {
    slug: 'business-plan',
    name: 'Business Plan',
    title: 'Word Count for a Business Plan: Complete Guide (2026)',
    description: 'How long should a business plan be? Ideal word counts for startup, investor and internal business plans in 2026.',
    quickAnswer: 'A full business plan is typically 5,000 to 15,000 words or 20 to 40 pages. A lean startup business plan is 1,000 to 2,000 words. An executive summary for investors is 500 to 1,000 words. Length depends on complexity and audience.',
    table: [
      ['Business Plan Type', 'Word Count'],
      ['Executive summary only', '500-1,000 words'],
      ['Lean startup plan', '1,000-2,000 words'],
      ['Standard business plan', '5,000-10,000 words'],
      ['Full investor business plan', '10,000-15,000 words'],
      ['Franchise business plan', '8,000-12,000 words'],
    ],
  },
  {
    slug: 'short-story',
    name: 'Short Story',
    title: 'Word Count for a Short Story: Complete Guide (2026)',
    description: 'How many words is a short story? Word count ranges for flash fiction, short stories, novelettes and novellas in 2026.',
    quickAnswer: 'A short story is 1,000 to 10,000 words. Flash fiction is under 1,000 words. Micro fiction is under 300 words. A novelette is 10,000 to 20,000 words. Always check the specific publication submission guidelines.',
    table: [
      ['Fiction Format', 'Word Count'],
      ['Micro fiction', '100-300 words'],
      ['Flash fiction', '300-1,000 words'],
      ['Short story', '1,000-10,000 words'],
      ['Novelette', '10,000-20,000 words'],
      ['Novella', '20,000-50,000 words'],
      ['Novel', '50,000-100,000 words'],
    ],
  },
  {
    slug: 'linkedin-post',
    name: 'LinkedIn Post',
    title: 'Word Count for a LinkedIn Post: Best Practices (2026)',
    description: 'How long should a LinkedIn post be? The ideal LinkedIn post word count and character count for maximum reach and engagement in 2026.',
    quickAnswer: 'The ideal LinkedIn post is 150 to 300 words or 1,000 to 1,300 characters. LinkedIn shows only the first 215 characters before the See More button. Posts between 1,000 and 3,000 characters get the highest reach.',
    table: [
      ['LinkedIn Content Type', 'Word Count'],
      ['Short update', '50-100 words'],
      ['Standard post', '150-300 words'],
      ['Long-form post', '300-500 words'],
      ['LinkedIn article', '1,000-2,000 words'],
      ['LinkedIn newsletter', '500-1,500 words'],
    ],
  },
  {
    slug: 'product-description',
    name: 'Product Description',
    title: 'Word Count for a Product Description: Complete Guide (2026)',
    description: 'How many words should a product description be? Ideal word counts for ecommerce product descriptions by product type and price point.',
    quickAnswer: 'Most product descriptions should be 150 to 300 words. Complex or premium products benefit from 300 to 600 words. Simple everyday items can be 75 to 150 words. Always include benefits not just features.',
    table: [
      ['Product Type', 'Word Count'],
      ['Simple consumer product', '75-150 words'],
      ['Standard product', '150-300 words'],
      ['Complex or technical product', '300-500 words'],
      ['Premium or luxury product', '300-600 words'],
      ['B2B product or software', '400-800 words'],
    ],
  },
  {
    slug: 'grant-proposal',
    name: 'Grant Proposal',
    title: 'Word Count for a Grant Proposal: Complete Guide (2026)',
    description: 'How long should a grant proposal be? Typical word counts for research grants, nonprofit grants and government grant applications.',
    quickAnswer: 'Grant proposals vary widely by funder. A federal research grant narrative is typically 5,000 to 15,000 words. A nonprofit foundation grant is 1,500 to 5,000 words. Always follow the specific funder guidelines exactly as exceeding limits can disqualify your application.',
    table: [
      ['Grant Type', 'Word Count'],
      ['Letter of inquiry', '500-1,000 words'],
      ['Small foundation grant', '1,500-3,000 words'],
      ['Large foundation grant', '3,000-6,000 words'],
      ['Federal research grant (narrative)', '5,000-15,000 words'],
      ['NIH R01 application', '12,000-13,000 words'],
      ['NSF project description', '7,500-15,000 words'],
    ],
  },
];

function generateDocumentPage(d) {
  const rowsJsx = d.table.slice(1).map(row =>
    `<tr className="border-b" style={{borderColor:'rgba(52,211,153,0.05)'}}>
                    <td className="text-white font-medium py-3 pr-4">${row[0]}</td>
                    <td className="text-slate-300 py-3 pr-4">${row[1]}</td>
                  </tr>`
  ).join('\n                  ');

  return `import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import AdUnit from '../../../components/AdUnit';

export const metadata = {
  title: '${d.title} | WordCounterTool.net',
  description: '${d.description}',
  alternates: { canonical: 'https://www.wordcountertool.net/word-count/for/${d.slug}' },
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-950 text-white">
        <div className="max-w-4xl mx-auto px-4 py-12">

          <nav className="text-sm text-slate-500 mb-6">
            <a href="/" className="hover:text-emerald-400 transition-colors">Home</a>
            <span className="mx-2">/</span>
            <a href="/word-count" className="hover:text-emerald-400 transition-colors">Word Count</a>
            <span className="mx-2">/</span>
            <span className="text-slate-300">${d.name}</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Word Count for ${d.name}</h1>

          <div className="bg-slate-800/40 border border-emerald-500/20 rounded-2xl p-6 mb-10">
            <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2">Quick Answer</p>
            <p className="text-white text-lg leading-relaxed">${d.quickAnswer}</p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">${d.name} Word Count by Type</h2>
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b" style={{borderColor:'rgba(52,211,153,0.2)'}}>
                    <th className="text-left text-emerald-400 py-3 pr-4 font-semibold">${d.table[0][0]}</th>
                    <th className="text-left text-emerald-400 py-3 pr-4 font-semibold">${d.table[0][1]}</th>
                  </tr>
                </thead>
                <tbody>
                  ${rowsJsx}
                </tbody>
              </table>
            </div>
          </section>

          <AdUnit slot="${AD_SLOT}" />

          <div className="bg-gradient-to-r from-emerald-900/30 to-teal-900/20 border border-emerald-500/30 rounded-2xl p-6 mb-10 text-center">
            <p className="text-white font-semibold text-lg mb-2">Check Your ${d.name} Word Count Free</p>
            <p className="text-slate-400 text-sm mb-4">Paste your text to get an instant word count, reading time and character count</p>
            <a href="/word-counter" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-8 py-3 rounded-xl transition-colors">Open Word Counter</a>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Related Tools and Guides</h2>
            <div className="flex flex-wrap gap-3">
              <a href="/word-counter" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Word Counter</a>
              <a href="/character-counter" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Character Counter</a>
              <a href="/reading-time" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">Reading Time Calculator</a>
              <a href="/word-count" className="inline-block bg-slate-800 hover:bg-slate-700 text-emerald-400 text-sm px-4 py-2 rounded-lg transition-colors">All Word Count Guides</a>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}
`;
}

// ═══════════════════════════════════════════════════════════
// HUB / INDEX PAGES
// ═══════════════════════════════════════════════════════════

function generateReadingTimeIndex() {
  const links = readingTimeData.map(d =>
    `  { slug: '${d.slug}', label: '${d.words.toLocaleString()} Words' }`
  ).join(',\n');
  return `import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export const metadata = {
  title: 'Reading Time by Word Count | WordCounterTool.net',
  description: 'How long does it take to read any number of words? Find reading times for 100 to 100,000 words at slow, average and fast reading speeds.',
};

const pages = [
${links}
];

export default function Page() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-950 text-white">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-white mb-4 text-center">Reading Time by Word Count</h1>
          <p className="text-slate-400 text-lg text-center mb-12">Find out exactly how long it takes to read any number of words.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {pages.map(p => (
              <a key={p.slug} href={'/reading-time/for/' + p.slug} className="bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-emerald-500/30 rounded-xl p-4 text-center transition-all group">
                <p className="text-white font-bold group-hover:text-emerald-400 transition-colors">{p.label}</p>
                <p className="text-slate-500 text-xs mt-1">Reading time</p>
              </a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
`;
}

function generateCharacterLimitsIndex() {
  const links = platformData.map(p =>
    `  { slug: '${p.slug}', name: '${p.name}' }`
  ).join(',\n');
  return `import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export const metadata = {
  title: 'Character Limits by Platform: Complete 2026 Guide | WordCounterTool.net',
  description: 'Character limits for every major platform in 2026. Twitter, Instagram, LinkedIn, Facebook, TikTok, YouTube, Google Ads and more.',
};

const platforms = [
${links}
];

export default function Page() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-950 text-white">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-white mb-4 text-center">Character Limits by Platform</h1>
          <p className="text-slate-400 text-lg text-center mb-12">Up-to-date character limits for every major social media platform, ad network and content type.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {platforms.map(p => (
              <a key={p.slug} href={'/character-limits/' + p.slug} className="bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-emerald-500/30 rounded-2xl p-5 transition-all group">
                <h2 className="text-white font-bold group-hover:text-emerald-400 transition-colors">{p.name}</h2>
                <p className="text-slate-500 text-sm mt-1">View all character limits</p>
              </a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
`;
}

function generateWordCountIndex() {
  const links = documentData.map(d =>
    `  { slug: '${d.slug}', name: '${d.name}', description: '${d.description}' }`
  ).join(',\n');
  return `import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export const metadata = {
  title: 'Word Count by Document Type | WordCounterTool.net',
  description: 'How many words should every document be? Complete word count guides for essays, resumes, blog posts, speeches, books and more.',
};

const documents = [
${links}
];

export default function Page() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-950 text-white">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-white mb-4 text-center">Word Count by Document Type</h1>
          <p className="text-slate-400 text-lg text-center mb-12">Find the ideal word count for every document type from essays to novels.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {documents.map(d => (
              <a key={d.slug} href={'/word-count/for/' + d.slug} className="bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-emerald-500/30 rounded-2xl p-5 transition-all group">
                <h2 className="text-white font-bold mb-1 group-hover:text-emerald-400 transition-colors">{d.name}</h2>
                <p className="text-slate-400 text-sm leading-relaxed">{d.description}</p>
              </a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
`;
}

// ═══════════════════════════════════════════════════════════
// WRITE ALL FILES
// ═══════════════════════════════════════════════════════════

let total = 0;

// Batch 1: Reading time pages
readingTimeData.forEach(d => {
  const dir = path.join('app', 'reading-time', 'for', d.slug);
  fs.mkdirSync(dir, { recursive: true });
  const file = path.join(dir, 'page.js');
  if (!fs.existsSync(file)) {
    fs.writeFileSync(file, generateReadingTimePage(d), 'utf8');
    console.log('✅ /reading-time/for/' + d.slug);
    total++;
  }
});
// Index
const rtIndexDir = path.join('app', 'reading-time', 'for');
fs.mkdirSync(rtIndexDir, { recursive: true });
fs.writeFileSync(path.join(rtIndexDir, 'page.js'), generateReadingTimeIndex(), 'utf8');
console.log('✅ /reading-time/for (index)');

// Batch 2: Character limit pages
platformData.forEach(p => {
  const dir = path.join('app', 'character-limits', p.slug);
  fs.mkdirSync(dir, { recursive: true });
  const file = path.join(dir, 'page.js');
  if (!fs.existsSync(file)) {
    fs.writeFileSync(file, generateCharacterLimitPage(p), 'utf8');
    console.log('✅ /character-limits/' + p.slug);
    total++;
  }
});
// Index
const clIndexDir = path.join('app', 'character-limits');
fs.mkdirSync(clIndexDir, { recursive: true });
fs.writeFileSync(path.join(clIndexDir, 'page.js'), generateCharacterLimitsIndex(), 'utf8');
console.log('✅ /character-limits (index)');

// Batch 3: Word count by document
documentData.forEach(d => {
  const dir = path.join('app', 'word-count', 'for', d.slug);
  fs.mkdirSync(dir, { recursive: true });
  const file = path.join(dir, 'page.js');
  if (!fs.existsSync(file)) {
    fs.writeFileSync(file, generateDocumentPage(d), 'utf8');
    console.log('✅ /word-count/for/' + d.slug);
    total++;
  }
});
// Index
const wcIndexDir = path.join('app', 'word-count', 'for');
fs.mkdirSync(wcIndexDir, { recursive: true });
fs.writeFileSync(path.join(wcIndexDir, 'page.js'), generateWordCountIndex(), 'utf8');
console.log('✅ /word-count/for (index)');

console.log('\n🎉 Done! ' + total + ' pages created across 3 batches.');
console.log('\nBatch summary:');
console.log('  Batch 1: ' + readingTimeData.length + ' reading time pages → /reading-time/for/[words]');
console.log('  Batch 2: ' + platformData.length + ' character limit pages → /character-limits/[platform]');
console.log('  Batch 3: ' + documentData.length + ' word count pages → /word-count/for/[document]');
console.log('\nNext step:');
console.log('  git add .');
console.log('  git commit -m "Add 3 programmatic SEO batches (~65 pages)"');
console.log('  git push origin master');
