import { damp, noop, onFrame, prefersReducedMotion, qsa, type Cleanup } from "./core";

/**
 * [data-parallax="0.12"] drifts vertically against the scroll. The value is how many
 * pixels it moves per pixel of distance from the viewport centre (negative reverses it).
 */
export function initParallax(): Cleanup {
  if (prefersReducedMotion()) return noop;

  const items = qsa("[data-parallax]").map((el) => ({
    el,
    speed: parseFloat(el.dataset.parallax || "") || 0.1,
    y: 0,
    on: false,
  }));
  if (!items.length) return noop;

  let io: IntersectionObserver | null = null;
  if (typeof IntersectionObserver !== "undefined") {
    io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          const it = items.find((i) => i.el === e.target);
          if (it) it.on = e.isIntersecting;
        }),
      { rootMargin: "20% 0px" },
    );
    items.forEach((i) => io!.observe(i.el));
  } else {
    items.forEach((i) => (i.on = true));
  }

  const stop = onFrame((_, dt) => {
    const mid = window.innerHeight / 2;
    const active = items.filter((i) => i.on);
    const rects = active.map((i) => i.el.getBoundingClientRect());
    active.forEach((it, idx) => {
      const r = rects[idx];
      // rect already contains the current translate, so remove it before measuring
      const centre = r.top + r.height / 2 - it.y;
      const target = (centre - mid) * -it.speed;
      it.y = damp(it.y, target, 10, dt);
      it.el.style.transform = `translate3d(0, ${it.y.toFixed(2)}px, 0)`;
    });
  });

  return () => {
    stop();
    io?.disconnect();
    items.forEach((i) => (i.el.style.transform = ""));
  };
}
