import type { Cleanup } from "./core";
import { initCounters } from "./count";
import { initCursor } from "./cursor";
import { initMarquee } from "./marquee";
import { initParallax } from "./parallax";
import { initPointerFx } from "./pointer-fx";
import { initReveal } from "./reveal";
import { initScrollState } from "./scroll-state";
import { initSmoothScroll } from "./smooth-scroll";
import { initStack } from "./stack";
import { initWords } from "./words";

/** Starts every page effect and returns one function that stops them all. */
export function initMotion(): Cleanup {
  const root = document.documentElement;
  const cleanups = [
    initSmoothScroll(),
    initScrollState(),
    initReveal(),
    initWords(),
    initCounters(),
    initStack(),
    initParallax(),
    initMarquee(),
    initPointerFx(),
    initCursor(),
  ];
  root.classList.add("is-ready");
  return () => {
    root.classList.remove("is-ready");
    cleanups.forEach((c) => c());
  };
}
