import { onFrame, shared, type Cleanup } from "./core";

/**
 * Page-level scroll state, written as classes and CSS variables on <html>:
 *   --progress      0..1 through the page (drives the top progress bar)
 *   .is-scrolled    past the very top (nav gets a background)
 *   .nav-hidden     scrolling down past the fold (nav slides away, returns on scroll up)
 * It also publishes smoothed scroll velocity (px/frame) as shared.scrollVel for the marquee.
 */
export function initScrollState(): Cleanup {
  const root = document.documentElement;
  let lastY = window.scrollY;
  let vel = 0;
  let acc = 0;

  const stop = onFrame(() => {
    const y = window.scrollY;
    const max = Math.max(1, root.scrollHeight - window.innerHeight);
    root.style.setProperty("--progress", (y / max).toFixed(4));

    const dy = y - lastY;
    lastY = y;
    vel += (dy - vel) * 0.12;
    shared.scrollVel = vel;

    root.classList.toggle("is-scrolled", y > 24);

    // hide the nav on a sustained downward scroll, show it as soon as the user scrolls up
    acc = Math.sign(dy) === Math.sign(acc) ? acc + dy : dy;
    if (y < 160 || acc < -12) root.classList.remove("nav-hidden");
    else if (acc > 40 && !root.classList.contains("menu-open")) root.classList.add("nav-hidden");
  });

  return () => {
    stop();
    root.classList.remove("is-scrolled", "nav-hidden");
  };
}
