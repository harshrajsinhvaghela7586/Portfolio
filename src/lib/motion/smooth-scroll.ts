import { clamp, damp, hasFinePointer, noop, onFrame, prefersReducedMotion, type Cleanup } from "./core";

/**
 * Inertial wheel scrolling. Native scroll stays in charge for keyboard, scrollbar
 * drag, touch and anchors in the URL: we only smooth mouse-wheel and trackpad input
 * on devices with a fine pointer. Anything that moves the page on its own is picked up
 * by the scroll listener and resynced, so nothing fights the browser.
 */
export function initSmoothScroll(): Cleanup {
  if (prefersReducedMotion() || !hasFinePointer()) return noop;

  const root = document.documentElement;
  let target = window.scrollY;
  let current = target;

  const maxScroll = () => Math.max(0, root.scrollHeight - window.innerHeight);

  const onWheel = (e: WheelEvent) => {
    if (e.ctrlKey || e.defaultPrevented) return; // pinch-zoom
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return; // horizontal gesture
    const el = e.target as HTMLElement | null;
    if (el && el.closest("[data-native-scroll]")) return;
    if (root.classList.contains("menu-open")) return;

    e.preventDefault();
    let dy = e.deltaY;
    if (e.deltaMode === 1) dy *= 32;
    else if (e.deltaMode === 2) dy *= window.innerHeight;
    target = clamp(target + dy, 0, maxScroll());
  };

  // Scroll moved by something other than us (keyboard, scrollbar, find-in-page).
  const onScroll = () => {
    if (Math.abs(window.scrollY - current) > 2) {
      target = current = window.scrollY;
    }
  };

  const onClick = (e: MouseEvent) => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;
    const a = (e.target as HTMLElement | null)?.closest<HTMLAnchorElement>('a[href^="#"]');
    if (!a) return;
    const hash = a.getAttribute("href") || "";
    const el = hash.length > 1 ? document.getElementById(hash.slice(1)) : document.body;
    if (!el) return;
    e.preventDefault();
    const top = el === document.body ? 0 : el.getBoundingClientRect().top + window.scrollY;
    target = clamp(top, 0, maxScroll());
    if (hash.length > 1) history.pushState(null, "", hash);
  };

  const onResize = () => {
    target = clamp(target, 0, maxScroll());
  };

  const stop = onFrame((_, dt) => {
    if (Math.abs(target - current) < 0.08) {
      if (current !== target) {
        current = target;
        window.scrollTo({ top: current, behavior: "instant" as ScrollBehavior });
      }
      return;
    }
    current = damp(current, target, 8.5, dt);
    window.scrollTo({ top: current, behavior: "instant" as ScrollBehavior });
  });

  window.addEventListener("wheel", onWheel, { passive: false });
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onResize);
  document.addEventListener("click", onClick);

  return () => {
    stop();
    window.removeEventListener("wheel", onWheel);
    window.removeEventListener("scroll", onScroll);
    window.removeEventListener("resize", onResize);
    document.removeEventListener("click", onClick);
  };
}
