import { noop, prefersReducedMotion, qsa, type Cleanup } from "./core";

const easeOutExpo = (t: number) => (t >= 1 ? 1 : 1 - Math.pow(2, -10 * t));

/**
 * Number counters: <span data-count="99" data-from="69">99</span>.
 * The final value is in the markup, so it reads correctly without JS or with reduced motion.
 */
export function initCounters(): Cleanup {
  if (prefersReducedMotion() || typeof IntersectionObserver === "undefined") return noop;

  const els = qsa("[data-count]");
  const pad = (el: HTMLElement, n: number) => (el.dataset.pad ? String(n).padStart(2, "0") : String(n));
  const num = (v: string | undefined) => parseInt(v || "0", 10);

  els.forEach((el) => {
    el.textContent = pad(el, num(el.dataset.from));
  });

  const frames = new Set<number>();

  const run = (el: HTMLElement) => {
    const from = num(el.dataset.from);
    const to = num(el.dataset.count);
    const dur = num(el.dataset.dur) || 1500;
    const t0 = performance.now() + num(el.dataset.delay);
    const tick = () => {
      const t = Math.min(1, Math.max(0, (performance.now() - t0) / dur));
      el.textContent = pad(el, Math.round(from + (to - from) * easeOutExpo(t)));
      if (t < 1) frames.add(requestAnimationFrame(tick));
    };
    frames.add(requestAnimationFrame(tick));
  };

  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        run(e.target as HTMLElement);
        io.unobserve(e.target);
      }),
    { threshold: 0.6 },
  );
  els.forEach((el) => io.observe(el));

  return () => {
    io.disconnect();
    frames.forEach((id) => cancelAnimationFrame(id));
    frames.clear();
    els.forEach((el) => (el.textContent = pad(el, num(el.dataset.count))));
  };
}
