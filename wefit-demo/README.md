# weFit Labs Investor Demo

This project is an interactive 60-second walkthrough of the weFit Labs platform tailored for investors. It highlights value for three personas—Members, Group Admins, and Corporate wellness leaders—across four animated screens built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Visit the local development URL printed in the terminal and explore the personas to see how challenges, community engagement, and analytics adapt in real time.

## 📦 Available Scripts

- `npm run dev` – start the Vite development server
- `npm run build` – type-check and create a production build
- `npm run preview` – preview the production build locally
- `npm run lint` – run ESLint with the configured TypeScript rules

## 🧱 Tech Stack

- **React + TypeScript + Vite** for the application shell and build tooling
- **Tailwind CSS** for styling with custom theming that matches weFit branding
- **Framer Motion** for high polish transitions between screens
- **Recharts** for retention and engagement visualizations
- **Zustand** for lightweight global state that tracks persona, screen progress, and analytics events

## 🧭 Demo Flow

1. **Persona Selection** – Investors choose between Member, Group Admin, or Corporate views.
2. **Challenges Dashboard** – Adaptive challenge cards show how each persona discovers and manages programs.
3. **Community View** – Social proof, leaderboards, and ROI snapshots highlight retention and engagement loops.
4. **Insights Dashboard** – Cohort charts, key metrics, and high-intent CTAs drive requests for full demos.

Persistent header and footer controls keep the 60-second experience on track with live timers, progress indicators, and "Request Full Demo" actions instrumented through a simple analytics utility.

## 📁 Project Structure

```
src/
├── components/
│   ├── charts/
│   ├── layout/
│   ├── screens/
│   └── ui/
├── data/
├── store/
├── types/
└── utils/
```

## 📈 Analytics Hook

A lightweight `trackDemoEvent` helper is provided in `src/utils/analytics.ts`. Replace the console logging with your analytics provider (Amplitude, Mixpanel, Segment, etc.) when you connect the demo to production instrumentation.

---

For questions or investor outreach, email **investors@wefitlabs.com**.
