AGENTS
======

Project: Portfólio Engenheiro de Software (local Vite + React app)

Overview
--------
This repository contains a minimal Vite + React (TypeScript) SPA generated from a Stitch project export and modularized into idiomatic React components.

What I did
-----------
- Bootstrapped a Vite + React project and converted to TypeScript.
- Downloaded the Stitch project HTML and assets into `public/stitch/`.
- Initially injected the exported HTML body into the React app for a faithful render.
- Modularized the app into components under `src/components/`:
  - TopNav.tsx
  - Hero.tsx
  - About.tsx
  - Projects.tsx
  - Skills.tsx
  - Trajectory.tsx
  - Blog.tsx
  - Contact.tsx
  - Footer.tsx
- Implemented shared behaviors in `src/App.tsx`:
  - Smooth-scrolling for anchor links (delegated click handler)
  - IntersectionObserver-based reveal for `section` elements

Files Added/Modified (high-level)
--------------------------------
- package.json: switched to TypeScript devDependencies; added `dev:hot` and updated `dev` to open and bind to host
- tsconfig.json: TypeScript configuration
- vite.config.ts: Vite config in TypeScript
- index.html: Tailwind CDN, fonts and stitch Tailwind config injected
- public/stitch/: contains `portfoliocode.html` and downloaded images
- src/
  - main.tsx: bootstraps the app and loads `public/stitch/portfoliocode.html` (initial approach)
  - App.tsx: application layout and behavior (smooth scroll, observer)
  - components/*: modular React components for each section

How the Stitch content was handled
----------------------------------
- The exported Stitch HTML is placed in `public/stitch/portfoliocode.html` and served by Vite at `/stitch/portfoliocode.html`.
- On startup, the app fetches that file, extracts the `<body>` content and renders it when the project was first wired. After modularization, the app now uses React components to replicate the same structure and visuals.

Developer Notes
---------------
- Hot reload: `npm run dev:hot` runs Vite normally (HMR enabled). `npm run dev` runs `vite --host --open` which opens the browser and exposes to the network; both support HMR from Vite.
- Security: `npm audit` shows 2 moderate vulnerabilities. Consider running `npm audit fix`.
- Styling: to keep the build simple, Tailwind is loaded via CDN in index.html using the Stitch-provided config. If you prefer to compile Tailwind locally (recommended for production), I can add PostCSS and Tailwind as devDependencies and convert classes accordingly.
- Accessibility: components are simple and semantic, but further a11y testing is recommended (forms, color contrast in dark mode, alt text completeness).

Next steps (suggested)
----------------------
1. Convert all static markup into fully controlled React components (done). Remove any remaining raw HTML injection.
2. Add unit tests (Jest + React Testing Library) for critical components.
3. Add Prettier + ESLint with TypeScript rules.
4. Add Tailwind local build and purge for production builds.
5. Initialize a git repo and create a remote.

If you want me to continue, tell me which of the next steps you'd like and I will implement it.
