# Harshrajsinh Vaghela | Portfolio

Personal portfolio of a full-stack (MERN) developer based in Ahmedabad, India. Built with Next.js and TypeScript. All styling and animation is hand-written: no Tailwind, Framer Motion or other UI/animation libraries.

**Live:** [harshrajsinh-vaghela.vercel.app](https://harshrajsinh-vaghela.vercel.app)

## About me

Full Stack Developer with five months of experience at Visezy Solutions, building and maintaining live websites and mobile apps with Next.js, React, React Native, Node.js, Express and MongoDB. I take features from Figma design to REST API to deployment, and I care about page speed and readable code.

Currently looking for a full-time full-stack role (Ahmedabad or remote).

- LinkedIn: [harshrajsinh-vaghela](https://www.linkedin.com/in/harshrajsinh-vaghela-a38bba300/)
- Email: harshrajsinhvaghela7419@gmail.com

## What's on the site

| Section | What it shows |
| --- | --- |
| Hero | Name, role, rotating "what I build" line, quick stats |
| About | Short intro, education, a few facts |
| Experience | Internship at Visezy Solutions, performance results (Lighthouse 69 to 99, page load 4-5s to under 2s) and a list of the work I did there |
| Work | Personal projects with live demos and source code |
| Skills | Grouped by how well I know them: daily use, used in projects, foundations |
| Contact | Email, phone, GitHub, LinkedIn, résumé download |

The work I did at Visezy Solutions is private, so the site only describes it: no links, repositories or screenshots.

## Personal projects

| Project | What it is | Stack |
| --- | --- | --- |
| [TechStore](https://github.com/harshrajsinhvaghela7586/TechStore-MERN) | Full-stack e-commerce: JWT auth, database cart, Stripe Checkout with webhook-created orders, invoices, admin panel | Next.js, Node.js, Express, MongoDB, Stripe |
| [Smart Campus Assistant](https://github.com/harshrajsinhvaghela7586/Smart-Campus-Assistant-MERN) | Role-based campus platform for admin, faculty and students (attendance, scheduling, academics), plus a React Native app | MERN, React Native, GitHub Actions |
| [SpendPilot](https://github.com/harshrajsinhvaghela7586/spendpilot-ai-audit) | AI spend audit tool that compares plans and suggests savings | Next.js, TypeScript, Firebase, Gemini API |
| Digital Wardrobe | AI wardrobe assistant with membership tier and admin dashboard (private repo) | Django, Gemini API, Stripe, Docker |

## Tech

- **Framework:** Next.js (App Router), React, TypeScript
- **Styling:** plain CSS with custom properties (`src/styles`)
- **Motion:** a small hand-written layer in `src/lib/motion` (smooth scroll, custom cursor, magnetic buttons, scroll reveals, count-ups, sticky stacking cards). Respects `prefers-reduced-motion` and is switched off on touch devices where it makes no sense.
- **Fonts:** Bricolage Grotesque, Instrument Serif, JetBrains Mono, Caveat via `next/font`
- **Hosting:** Vercel

## Project structure

```txt
portfolio/
├── public/
│   ├── Harshrajsinh_Vaghela_Resume.pdf
│   ├── images/            # portrait
│   └── og/og.png          # link-preview card
├── src/
│   ├── app/               # layout.tsx, page.tsx, icon.svg
│   ├── components/        # Hero, About, Experience, Work, Skills, Contact, ...
│   ├── data/              # all text content (profile, experience, projects, skills)
│   ├── lib/motion/        # animation and pointer effects
│   └── styles/            # base.css, components.css, sections.css
├── next.config.ts
├── package.json
└── tsconfig.json
```

## Run locally

Needs Node.js 20.9 or newer.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

## Edit the content

Everything you read on the site lives in `src/data`. Change the text there; the components don't need touching.

## Deploy

Import the repo in Vercel (no settings to change). Optionally set `NEXT_PUBLIC_SITE_URL` to your live URL so link previews use absolute image URLs.
