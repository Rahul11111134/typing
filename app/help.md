# Help & Guide

Welcome to the Typing Speed Test app — yahan par kuch madad aur instructions milengi.

Sections:

- Getting started
- Running locally
- Deploying to Vercel
- Features

## Getting started
1. Install dependencies: `npm install`
2. Run locally: `npm run dev`
3. Open: http://localhost:3000

## Running locally
- The app uses Next.js (pages router). The main typing test component is in `components/TypingTest.jsx`.
- Sample passages are in `data/texts.js`.

## Deploying to Vercel
1. Create a Vercel account at https://vercel.com
2. Import the GitHub repository `Rahul11111134/typing` (or your fork)
3. Vercel auto-detects Next.js. Build command: `npm run build` (default)
4. The repository includes `vercel.json` with recommended config.

## Features
- Multi-language passages (English, Hindi, Urdu, Spanish, French)
- Timer presets + custom seconds
- Realtime WPM, accuracy, error count
- Results saved to localStorage and exportable to CSV
- Mobile-friendly tweaks: autocorrect disabled, responsive layout

If you want more help, create an issue on the GitHub repo or ask here.
