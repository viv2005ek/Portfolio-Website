# Vivekfolio - Premium Developer Portfolio Website

A state-of-the-art, interactive portfolio website designed to showcase projects, patents, experience, and academic accolades. Features a cyberpunk/hacker design theme with a fully operational simulated OS diagnostics loader, an interactive WebGL canvas background, and dynamic navigation.

---

## Key Features

* **VIVEK_OS Diagnostics Loader**: A themed booting terminal overlay that prints system verification steps matching real-time loading percentages before mounting the application interface.
* **Three.js WebGL Particle Background**: Interactive 3D particle waves that react to mouse movements and hover states, using custom React Three Fiber (`@react-three/fiber` and `@react-three/drei`) canvas renderers.
* **Vite manualChunks Optimization**: Implemented Rollup code-splitting strategies to isolate massive WebGL core engines (`three.js`) from the standard vendor bundle, dropping initial entry bundle sizes from 1.32 MB to just 150 kB for fast page loads.
* **Responsive Memories Carousel**: Custom horizontal cluster-preloading gallery to render certificates, hackathon wins, and project media items.
* **NodeMailer Backend Integration**: Direct connection with a secure Express email server, featuring rich, structured notification templates and user confirmation automated responses.
* **Themed Epic 404 Route & Navigation Fallback**: Robust routing using React Router DOM, featuring a custom 404 screen with automatic navbar link intercepts that route users back to single-page scroll sections.

---

## Tech Stack

* **Frontend**: React 18, TypeScript, TailwindCSS, Framer Motion, Lucide Icons, React Icons
* **3D Visuals**: Three.js, React Three Fiber, React Three Drei
* **Routing**: React Router DOM (v7)
* **Build Tool**: Vite (v5)
* **Email Service**: Node.js, Express, Nodemailer (NodeMailer-Server)

---

## Project Structure

```
Portfolio-Website/
├── NodeMailer-Server/     # Secure Nodemailer express API server
├── public/                # Static assets, WebP images, and Resume PDF
├── src/
│   ├── components/        # Reusable UI widgets (Carousel, Terminal, Cards)
│   ├── data/              # Portfolio content database (portfolio.ts)
│   ├── pages/             # Layout sections (Home, About, Skills, Contact, 404)
│   ├── App.tsx            # Root routing manager
│   ├── index.css          # Main Tailwind styles
│   └── main.tsx           # Entry React mounting point
├── index.html             # Application entry point with JSON-LD SEO schema
├── vite.config.ts         # Vite build configuration with manualChunks rules
└── package.json           # Dependencies and build script specifications
```

---

## Getting Started

### Prerequisites

* Node.js (v18.x or above)
* npm (v10.x or above)

### Installation & Development

1. Clone the repository and navigate to the project directory:
   ```bash
   cd Portfolio-Website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch the local development server:
   ```bash
   npm run dev
   ```

4. Open http://localhost:5173 in your browser to view the application.

### Production Build

To build and compile the optimized production bundle:
```bash
npm run build
```
This compiles the application assets into the /dist directory with separate cached chunk files.

---

## Contact Form Backend

The contact form interfaces with the server inside the NodeMailer-Server directory. 
* To start the nodemailer server locally:
  ```bash
  cd NodeMailer-Server
  npm install
  npm start
  ```
* Ensure you configure appropriate environment variables (such as SMTP email, credentials, and port) inside the server directory prior to running.
