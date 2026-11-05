import { noop, onFrame, prefersReducedMotion, qsa, shared, watchVisible, type Cleanup } from "./core";

/**
 * Scroll-reactive marquee: [data-marquee] holds two identical copies of a row. It drifts
 * at a base speed; scrolling pushes it faster, and scrolling the other way reverses it.
 */
export function initMarquee(): Cleanup {
  if (prefersReducedMotion()) return noop;

  const cleanups: Cleanup[] = [];
  qsa("[data-marquee]").forEach((el) => {
    const base = parseFloat(el.dataset.marquee || "") || 0.06; // px per ms
    const dir = el.dataset.dir === "right" ? 1 : -1;
    let x = 0;
    let visible = false;
    cleanups.push(watchVisible(el, (v) => (visible = v), "20% 0px"));
    cleanups.push(
      onFrame((_, dt) => {
        if (!visible) return;
        const half = el.scrollWidth / 2;
        if (!half) return;
        x += dir * (base * dt + shared.scrollVel * 0.6);
        if (x <= -half) x += half;
        if (x > 0) x -= half;
        el.style.transform = `translate3d(${x.toFixed(2)}px, 0, 0)`;
      }),
    );
  });
  return () => cleanups.forEach((c) => c());
}
