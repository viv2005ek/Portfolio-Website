<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=100&section=header" width="100%" alt="Header" />
</p>

<h1 align="center">Vivekfolio</h1>

<p align="center">
  <b>Interactive developer portfolio with a cyberpunk design theme, simulated OS boot loader, and Three.js WebGL particle canvas.</b>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Three.js-WebGL-000000?style=flat-square&logo=three.js&logoColor=white" alt="Three.js" />
  <img src="https://img.shields.io/badge/TailwindCSS-4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" alt="TailwindCSS" />
  <img src="https://img.shields.io/badge/Framer_Motion-Animations-FF0050?style=flat-square&logo=framer&logoColor=white" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/Deployed_on-Vercel-000000?style=flat-square&logo=vercel&logoColor=white" alt="Vercel" />
</p>

<p align="center">
  <a href="https://vivekfolio-six.vercel.app/">
    <img src="https://img.shields.io/badge/View_Live_Demo-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo" />
  </a>
</p>

---

## Overview

Vivekfolio is a performance-optimized, single-page portfolio application built with React 18 and TypeScript. It features a custom **VIVEK_OS** boot sequence terminal overlay, interactive Three.js particle wave backgrounds, dynamic navigation with scroll-spy behavior, and a comprehensive project showcase. The build pipeline uses Vite with manual code-splitting to isolate the Three.js engine (~1.1 MB) into a separate lazy-loaded chunk, keeping the initial page load under 150 kB.

---

## Features

- **VIVEK_OS Diagnostics Loader** — Themed booting terminal that prints system verification steps with real-time loading progress before mounting the application
- **Three.js WebGL Particle Background** — Interactive 3D particle waves that respond to mouse position and hover states, built with React Three Fiber and Drei
- **Vite Manual Chunks Optimization** — Rollup code-splitting isolates the Three.js engine from the vendor bundle, reducing initial load from 1.32 MB to ~150 kB
- **Responsive Media Carousel** — Horizontal cluster-preloading gallery for certificates, hackathon wins, and project media
- **Nodemailer Contact Backend** — Express API server with structured HTML email templates and user confirmation responses
- **JSON-LD Structured Data** — Comprehensive SEO schema markup for search engines and AI scrapers
- **Custom 404 Route** — Themed error screen with automatic navbar link intercepts for SPA navigation
- **Framer Motion Transitions** — Page-level and component-level animations with staggered reveal patterns

---

## Tech Stack

| Category | Technologies |
|:---|:---|
| **Frontend** | React 18, TypeScript, TailwindCSS, Framer Motion, Lucide Icons, React Icons |
| **3D Visuals** | Three.js, React Three Fiber, React Three Drei |
| **Routing** | React Router DOM v7 |
| **Build** | Vite 5, Rollup (manual chunks) |
| **Email** | Node.js, Express, Nodemailer |
| **SEO** | JSON-LD, Open Graph, Meta Tags, Semantic HTML |
| **Deployment** | Vercel |

---

## Project Structure

```
Portfolio-Website/
├── NodeMailer-Server/     # Express API server for contact form emails
├── public/                # Static assets, WebP images, Resume PDF
├── src/
│   ├── components/        # Reusable UI (Carousel, Terminal, Cards)
│   ├── data/              # Portfolio content database (portfolio.ts)
│   ├── pages/             # Layout sections (Home, About, Skills, Contact, 404)
│   ├── App.tsx            # Root routing manager
│   ├── index.css          # TailwindCSS entry
│   └── main.tsx           # React mount point
├── index.html             # Entry point with JSON-LD SEO schema
├── vite.config.ts         # Build config with manualChunks rules
└── package.json           # Dependencies and scripts
```

---

## Getting Started

### Prerequisites

- Node.js v18.x or above
- npm v10.x or above

### Installation

```bash
git clone https://github.com/viv2005ek/Portfolio-Website.git
cd Portfolio-Website
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
npm run build
```

Compiles optimized assets into `/dist` with separate cached chunk files.

---

## Contact Form Backend

The contact form connects to the Express server in `NodeMailer-Server/`.

```bash
cd NodeMailer-Server
npm install
npm start
```

Configure SMTP credentials (email, password, port) via environment variables before running.

---

## Author

**Vivek Kumar Garg**

<p>
  <a href="https://vivekfolio-six.vercel.app/">
    <img src="https://img.shields.io/badge/Portfolio-000000?style=flat-square&logo=vercel&logoColor=white" alt="Portfolio" />
  </a>
  <a href="https://www.linkedin.com/in/vivek-kumar-garg-097677280/">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=flat-square&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>
  <a href="https://github.com/viv2005ek">
    <img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white" alt="GitHub" />
  </a>
  <a href="mailto:viv2005ek@gmail.com">
    <img src="https://img.shields.io/badge/Email-D14836?style=flat-square&logo=gmail&logoColor=white" alt="Email" />
  </a>
</p>

---

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=100&section=footer" width="100%" alt="Footer" />
</p>
