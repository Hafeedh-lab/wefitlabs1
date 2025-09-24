# weFit Labs – Investor Landing Page

A high-converting, numbers-first investor landing page for **weFit Labs**, the social fitness platform built by Ethan Noblesala and Eric Chen. The site highlights traction, retention mechanics, monetization strategy, and an investor contact funnel with analytics tracking.

## ✨ Features

- **Hero narrative variants** cycle between numbers, storytelling, and distribution angles for rapid testing.
- **Metrics dashboard** with animated counters showcasing DAU/WAU, retention, challenge completion, and waitlist growth.
- **Problem → Solution storytelling** including custom retention curve visualization.
- **Traction timeline** and **business model** sections with Framer Motion animations and lazy loading for performance.
- **Founder spotlight** with professional placeholder imagery and LinkedIn CTAs.
- **Investor contact form** with real-time validation, Formspree integration, and analytics instrumentation.
- **Google Analytics helper** that loads GA4 when `VITE_GA_MEASUREMENT_ID` is provided.
- Tailwind CSS theme using the provided brand palette, typography, and spacing system.

## 🧰 Tech Stack

- [React](https://react.dev/) + [Vite](https://vitejs.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) with typography plugin
- [Framer Motion](https://www.framer.com/motion/) for interactions & scroll animations
- [lucide-react](https://lucide.dev/) icon system
- [react-helmet-async](https://github.com/staylor/react-helmet-async) for SEO metadata

## 🚀 Getting Started

```bash
npm install
npm run dev
```

The app runs on [http://localhost:5173](http://localhost:5173) by default.

## 🧪 Scripts

```bash
npm run lint        # Lints TypeScript/React files in src/
npm run type-check  # TypeScript type checking without emitting files
npm run build       # Production build with Vite
npm run preview     # Preview the production build locally
```

## 🔧 Environment Variables

Create a `.env` file (or use your deployment platform) to enable analytics and form submission:

```env
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_ID
VITE_CALENDAR_BOOKING_URL=https://calendly.com/wefit-investors
```

## 📁 Key Structure

```
src/
├── components/
│   ├── layout/         # Header & footer
│   ├── sections/       # Page sections (Hero, Metrics, etc.)
│   └── ui/             # Button, Card, Input primitives
├── assets/             # Placeholder imagery & illustrations
├── styles/             # Global Tailwind styles
├── utils/              # Analytics helper & data constants
└── App.tsx             # Page composition & lazy loading
```

## 📸 Assets

- `src/assets/images/ethan-headshot.jpg` and `eric-headshot.jpg` are high-res placeholders ready to swap for real photography.
- `src/assets/images/retention-curve-comparison.svg` visualizes the retention delta between weFit cohorts and the industry average.

## ✅ Checklist

- Hero CTA clicks, contact form submissions, and Formspree posts are tracked via GA4 when configured.
- Contact form gracefully degrades when endpoints are missing, guiding investors to email directly.
- Layout is mobile-first with touch-friendly buttons, sticky navigation, and smooth scrolling.
- Animations respect progressive enhancement with sensible fallbacks and lazy loading.

---

Crafted for investor storytelling—swap in live metrics, founder photos, and product screenshots to launch.
