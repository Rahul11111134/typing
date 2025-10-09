# Typing Speed Test (Next.js)

This project is a starter Next.js typing speed test web app that supports multiple languages, real-time results (WPM, accuracy, errors), timer options, and result persistence in localStorage.

Quick start

```bash
# install deps
npm install

# run dev server
npm run dev
```

Open http://localhost:3000 in your browser.

Help page

There's a help guide at `/help` generated from `app/help.md`.

Vercel

The repo includes `vercel.json` with recommended settings for deploying to Vercel. When importing the repo on Vercel, it will detect Next.js automatically.

What's included
- Multi-language sample texts
- Timer options (15s/30s/60s/custom)
- Real-time WPM and accuracy
- Error highlighting and per-character feedback
- Save results to localStorage with timestamp
- Clean, responsive UI
 - Static sitemap.xml and robots.txt under /public for basic SEO

Next steps (suggestions)
- Add user accounts and server-side result storage
- Add more passages and difficulty modes
- Add leaderboards and social sharing
