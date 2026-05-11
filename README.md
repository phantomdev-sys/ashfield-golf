# Ashfield Golf Club — Website

Next.js 15 website for Ashfield Golf Club, South Armagh, Northern Ireland.

## Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS + inline styles
- **Fonts**: Playfair Display (display), DM Sans (body), Libre Baskerville (accent)
- **Icons**: Lucide React
- **Hosting**: Vercel

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Pages
| Route | Page |
|-------|------|
| `/` | Homepage |
| `/course` | Course overview — all 18 holes |
| `/scorecard` | Interactive scorecard (stableford calculator) |
| `/membership` | Membership rates |
| `/visitors` | Green fees & society packages |
| `/about` | Club history |
| `/gallery` | Photo gallery |
| `/competitions` | Competitions & events |
| `/contact` | Contact & location |

## Images
All client images are in `/public/images/`. Key files:
- `aerial-main.jpeg` — primary hero image (drone shot)
- `aerial-clean.png` — pylon-removed aerial (edited)
- `logo.webp` — club crest (used in navbar & footer)

## Deploying to Vercel

```bash
# Push to GitHub first
git init
git add .
git commit -m "Initial commit — Ashfield Golf Club website"
git remote add origin https://github.com/phantomdev-sys/ashfield-golf.git
git push -u origin main
```
Then connect the repo in Vercel dashboard. Framework preset: **Next.js**.

## TODO Before Launch
- [ ] Confirm 2025 pricing with client (membership & green fees)
- [ ] Add Google Maps embed to contact page
- [ ] Connect custom domain (ashfieldgolfcourse.com)
- [ ] Swap Google Fonts import for self-hosted fonts (performance)
- [ ] Add Facebook feed or live results integration
- [ ] Client to supply updated competition results content
