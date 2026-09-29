# Muhammad Adil — Senior Flutter Developer Portfolio

A premium, animated, fully responsive portfolio built with **React + Vite**, **Tailwind CSS** and **Framer Motion**.

## ✨ Design

Dark neon hero → bright editorial body sections → orange showcase band → dark close.
Violet · fuchsia · coral gradient system, Sora display type with Instrument Serif italic accents.

## 🎬 Animations

- Blur-in, word-by-word display headlines
- Drifting light-streak beams and a cursor-tracking glow in the hero
- Parallax portrait and copy on scroll
- Count-up statistics
- Seamless infinite marquees (tech strip, project band)
- Magnetic buttons that lean toward the cursor
- 3D tilt cards with a cursor-tracked glare
- Sticky, stacking project cards that recede as the next slides over
- Scroll-driven gradient rail on the experience timeline
- Sliding active indicator in the nav, animated FAQ accordion
- Scroll progress bar, footer wordmark that rises into place

Everything honours `prefers-reduced-motion`.

## 🚀 Getting Started

```bash
npm install
npm run dev       # start dev server
npm run build     # production build → dist/
npm run preview   # preview the production build
```

## ✏️ Personalizing

**Almost everything lives in one file:** [`src/data/portfolio.js`](src/data/portfolio.js)

Update there:

- Name, role, tagline, location, availability
- Phone / WhatsApp number, LinkedIn & GitHub URLs
- Stats, about copy, bento metrics, skills, experience, projects, services, certifications, testimonials, FAQ
- `marqueeTech` — the scrolling tech strip under the hero

Also:

- **Resume:** drop your PDF at `public/resume.pdf` (the Download Resume button points to `/resume.pdf`)
- **Photo:** `public/adil-portrait.webp` is the background-removed hero cutout, `public/adil-avatar.webp` the square version. Replace both to change the photo.
- **SEO:** update the `<title>` / meta descriptions in `index.html`
- **Project links:** set each project's `demo` / `github` URLs in the data file

## 📁 Structure

```
src/
├── components/
│   ├── layout/        # Navbar, Footer
│   ├── sections/      # Hero, About, Services, Skills, Projects,
│   │                  # Experience, Testimonials, Certifications, Faq, Contact
│   └── ui/            # Beams, CountUp, CursorGlow, Magnetic, Marquee,
│                      # Reveal, ScrollProgress, SectionHeading, SkillIcon, TiltCard
├── data/              # portfolio.js — ALL content lives here
├── utils/             # motion.js — shared Framer Motion variants
├── App.jsx
├── index.css          # Tailwind layers + design system classes
└── main.jsx
```

## ☁️ Deployment

**Netlify** — pre-configured via `netlify.toml`. Connect the repo; build command `npm run build`, publish dir `dist`.

**Vercel** — pre-configured via `vercel.json`. Import the repo (framework preset: Vite).

## 🛠 Tech Stack

React 18 · Vite 5 · Tailwind CSS 3 · Framer Motion 11 · React Icons
