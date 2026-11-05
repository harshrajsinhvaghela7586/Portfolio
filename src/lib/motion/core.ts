// Tiny shared helpers. One requestAnimationFrame loop drives every effect.

export type Cleanup = () => void;
export const noop: Cleanup = () => {};

export const clamp = (v: number, min: number, max: number) =>
  Math.min(max, Math.max(min, v));

export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

/** Frame-rate independent smoothing. `lambda` is how snappy it feels (higher = faster). */
export const damp = (current: number, target: number, lambda: number, dtMs: number) =>
  lerp(current, target, 1 - Math.exp((-lambda * dtMs) / 1000));

/** Values written by one effect and read by another, without touching the DOM. */
export const shared = { scrollVel: 0 };

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const hasFinePointer = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(hover: hover) and (pointer: fine)").matches;

type FrameFn = (time: number, dt: number) => void;

const subscribers = new Set<FrameFn>();
let rafId = 0;
let lastTime = 0;

function loop(time: number) {
  const dt = Math.min(64, time - lastTime || 16);
  lastTime = time;
  subscribers.forEach((fn) => fn(time, dt));
  rafId = subscribers.size ? requestAnimationFrame(loop) : 0;
}

/** Subscribe to the shared frame loop. Returns an unsubscribe function. */
export function onFrame(fn: FrameFn): Cleanup {
  subscribers.add(fn);
  if (!rafId) {
    lastTime = performance.now();
    rafId = requestAnimationFrame(loop);
  }
  return () => {
    subscribers.delete(fn);
  };
}

/** Calls `cb` whenever an element enters or leaves the viewport. */
export function watchVisible(
  el: Element,
  cb: (visible: boolean) => void,
  margin = "10% 0px",
): Cleanup {
  if (typeof IntersectionObserver === "undefined") {
    cb(true);
    return noop;
  }
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => cb(e.isIntersecting)),
    { rootMargin: margin },
  );
  io.observe(el);
  return () => io.disconnect();
}

export const qsa = <T extends HTMLElement = HTMLElement>(sel: string, root: ParentNode = document) =>
  Array.from(root.querySelectorAll<T>(sel));
