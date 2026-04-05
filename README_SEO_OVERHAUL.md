# WordCounterTool.net — Full SEO Overhaul

## What these scripts fix

### Part 1: Core SEO (`fix_wct_part1_core_seo.js`)
| Fix | What it does | Revenue impact |
|-----|-------------|----------------|
| OG Image → PNG | Social platforms can't render SVG. Now generates proper PNG | Unlocks social traffic |
| Title template | Removes double branding (`Title \| WCT \| WCT.net` → `Title \| WCT.net`) | Better CTR in search |
| Fake ratings removed | Removes hardcoded 4.9/5 from WebAppSchema — Google penalty risk | Prevents manual action |
| AdUnit upgrade | Supports header, mid-content, bottom, and anchor ad formats | 3-4x ad revenue |
| Multi-slot ads | Adds 3-4 ad placements per tool page (was 1) | 60-70% more revenue |
| Blog multi-ads | Adds header + mid + bottom ads to all blog posts | More impressions |
| Duplicate titles | Fixes `\| WordCounterTool.net \| WordCounterTool.net` everywhere | Better SEO |
| Encoding fixes | Replaces ΓÇö, ΓÇ£, etc with proper UTF-8 characters | Cleaner rendering |
| AuthorSchema | Adds Organization + Article structured data | Rich results |
| HreflangTags | Links 15 language tool pages with proper hreflang | International SEO |
| robots.js | Creates proper Next.js App Router robots config | Better crawling |

### Part 2: Blog Hub (`fix_wct_part2_blog_hub.js`)
| Fix | What it does | Revenue impact |
|-----|-------------|----------------|
| Noindex lang posts | Adds `noindex` to 90 template-generated language blog posts | Removes quality drag |
| Blog hub redesign | Cards with excerpts, reading times, category tags | Higher engagement |
| Category system | 5 categories: Word count, SEO, Social media, Writing, Productivity | Topical authority |
| Category pages | Individual `/blog/category/[slug]` pages with proper metadata | More indexable pages |
| Sitemap update | Adds categories, removes noindexed lang posts | Cleaner index |

### Part 3: Humanize Blogs (`fix_wct_part3_humanize_blogs.js`)
| Fix | What it does | Revenue impact |
|-----|-------------|----------------|
| AI pattern removal | Removes 50+ AI writing patterns (filler phrases, promotional language) | Avoids HCU penalty |
| Content thickening | Adds unique 300-400 word sections to thin posts | 1500+ word target |
| SVG infographics | Generates unique data-visualization images for each post | Time on page, shares |
| CTA reduction | Removes excess "Use our free tool" CTAs (max 2 per post) | Less spammy |
| ArticleSchema | Adds Article structured data with dates and author | Rich results |
| Published dates | Adds visible publication and update dates | Freshness signal |

## How to run

```bash
# Navigate to your project
cd C:\Users\acess\Desktop\seo-tools-pro\seo-tools-pro

# Copy all 4 scripts to your project root
# Then run the master script:
node run_all_fixes.js

# Or run individually:
node fix_wct_part1_core_seo.js
node fix_wct_part2_blog_hub.js
node fix_wct_part3_humanize_blogs.js

# Generate PNG OG image (requires canvas package):
npm install canvas
node generate_og_png.js

# Deploy:
git add .
git commit -m "Full SEO overhaul"
git push origin master
```

## After deploying

### AdSense setup (do this in your AdSense dashboard)
1. Create 4 new ad units:
   - **Header leaderboard** (728×90) → replace `"1111111111"` in code
   - **Blog header** (responsive) → replace `"3333333333"` in code
   - **Blog bottom** (responsive) → replace `"4444444444"` in code
   - **Tool bottom** (responsive) → replace `"2222222222"` in code
   - **Anchor ad** (sticky bottom) → replace `"ANCHOR_SLOT"` in AdUnit.js
2. Enable **Auto Ads** in AdSense → Settings → Auto ads → toggle ON
3. Enable **Anchor ads** and **Vignette ads** in Auto ads settings

### Google Search Console
1. Go to Search Console → Sitemaps → submit `https://www.wordcountertool.net/sitemap.xml`
2. Request indexing for your top 10 pages
3. Check Coverage report for errors after 48 hours
4. Monitor "Page experience" for Core Web Vitals

### Ongoing content strategy
- Publish 2 genuinely original blog posts per week
- Add original data/research to top 10 posts
- Build 5-8 backlinks per month (guest posts, HARO, outreach)
- Monitor keyword rankings weekly

## Files created
```
fix_wct_part1_core_seo.js      — Core SEO fixes
fix_wct_part2_blog_hub.js      — Blog hub redesign + noindex
fix_wct_part3_humanize_blogs.js — Humanize + thicken + images
run_all_fixes.js               — Master runner (runs all 3)
generate_og_png.js             — PNG OG image generator

Components created:
  app/components/AdUnit.js      — Multi-format ad component
  app/components/AuthorSchema.js — Organization + Article schema
  app/components/HreflangTags.js — Language alternate links
  app/robots.js                 — Next.js robots config
  app/blog/blogData.js          — Blog category data
  app/blog/category/*/page.js   — 5 category pages

Images created:
  public/images/blog/*.svg      — Infographics for each post
```
