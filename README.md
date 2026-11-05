# Harshrajsinh Vaghela: Portfolio

Dark, editorial developer portfolio built with **Next.js (App Router) + TypeScript**. Every animation is hand-written: no Framer Motion, GSAP, Lenis or Tailwind. The whole motion layer is about 700 lines in `src/lib/motion`.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

Needs Node 20.9 or newer (Next 16).

## What's in it

| Effect | Where |
| --- | --- |
| Inertial wheel scrolling (native scroll still drives keyboard, touch, scrollbar) | `lib/motion/smooth-scroll.ts` |
| Custom cursor with a trailing ring and `data-cursor="Open"` labels | `lib/motion/cursor.ts` |
| Magnetic buttons, 3D tilt, mouse spotlight, hero glow | `lib/motion/pointer-fx.ts` |
| Hero dot-grid that reacts to the pointer and ripples on click | `components/HeroCanvas.tsx` |
| Scroll reveals and masked headline reveals | `lib/motion/reveal.ts` |
| Scroll-scrubbed paragraph in About | `lib/motion/words.ts` |
| Count-up numbers | `lib/motion/count.ts` |
| Sticky stacking project cards | `lib/motion/stack.ts` + `.proj` in `sections.css` |
| Scroll-velocity marquee | `lib/motion/marquee.ts` |
| Parallax, scroll progress bar, hide-on-scroll nav | `parallax.ts`, `scroll-state.ts` |

Everything respects `prefers-reduced-motion`, switches off the cursor and smooth scroll on touch devices, and the page is fully readable if JavaScript fails (hidden states only apply once the `js` class is set, with a 6 second failsafe).

## Edit your content

All text lives in `src/data`:

- `profile.ts`: name, links, email, phone, hero stats, rotating words, facts
- `experience.ts`: the Visezy role, highlights, and the "what I worked on" list
- `projects.ts`: the five stacking project cards (screenshots in `public/projects`)
- `skills.ts`: skill tiers, pipeline steps, certifications

To add a project, copy an entry in `projects.ts` and add WebP screenshots named `<base>-900.webp` and `<base>-1600.webp` to `public/projects`.

Colours and spacing are CSS variables at the top of `src/styles/base.css`.

## Deploy (Vercel)

1. Push this folder to your GitHub repo and import it in Vercel. No settings to change.
2. Add an environment variable `NEXT_PUBLIC_SITE_URL` with your real URL (for example `https://harshrajsinh.dev`) so link previews use absolute image URLs.
3. Share the link on LinkedIn once to check the preview card (`public/og/og.png`).

## Privacy of the Visezy work

Everything under "What I worked on there" is private work. The data in `experience.ts` has no repo, live link or screenshot fields on purpose; keep it that way. Only descriptive text is allowed.

## Keep it honest

The skills section is grouped by depth on purpose (daily, used in projects, foundations). Before you send the link out, make sure every item in the first two groups is something you can explain in an interview.
