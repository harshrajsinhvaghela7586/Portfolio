import { clamp, noop, onFrame, qsa, watchVisible, type Cleanup } from "./core";

/**
 * Stacking project cards. Each card is `position: sticky` (see CSS). While the next card
 * slides over it, we expose how covered it is as --p (0..1); CSS turns that into a
 * slight shrink and a dark veil. Below 900px the cards are not sticky and --p stays 0.
 */
export function initStack(): Cleanup {
  const containers = qsa("[data-stack]");
  if (!containers.length) return noop;

  const cleanups: Cleanup[] = [];

  containers.forEach((container) => {
    const cards = qsa("[data-stack-card]", container);
    let visible = false;
    cleanups.push(watchVisible(container, (v) => (visible = v), "20% 0px"));

    const stop = onFrame(() => {
      if (!visible) return;
      const wide = window.matchMedia("(min-width: 900px)").matches;
      const vh = window.innerHeight;
      cards.forEach((card, i) => {
        const next = cards[i + 1];
        if (!wide || !next) {
          card.style.setProperty("--p", "0");
          return;
        }
        const stickyTop = parseFloat(getComputedStyle(next).top) || 0;
        const nextTop = next.getBoundingClientRect().top;
        const p = clamp((vh - nextTop) / (vh - stickyTop), 0, 1);
        card.style.setProperty("--p", p.toFixed(3));
      });
    });
    cleanups.push(stop);
  });

  return () => cleanups.forEach((c) => c());
}
