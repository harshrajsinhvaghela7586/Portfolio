import { noop, qsa, type Cleanup } from "./core";

/**
 * Scroll reveals. Anything marked [data-reveal] fades or slides in once, when it
 * first enters the viewport. A parent marked [data-stagger] staggers its children.
 * Content is visible by default; hiding only happens under html.js (see CSS), so a
 * failed script never leaves an empty page.
 */
export function initReveal(): Cleanup {
  // stagger children
  qsa("[data-stagger]").forEach((parent) => {
    const step = parseInt(parent.dataset.stagger || "", 10) || 80;
    Array.from(parent.children).forEach((child, i) => {
      const el = child as HTMLElement;
      if (!el.hasAttribute("data-reveal")) el.setAttribute("data-reveal", "");
      el.style.setProperty("--d", `${i * step}ms`);
    });
  });

  qsa("[data-delay]").forEach((el) => el.style.setProperty("--d", `${el.dataset.delay}ms`));

  const targets = qsa("[data-reveal]");
  if (typeof IntersectionObserver === "undefined") {
    targets.forEach((el) => el.classList.add("is-in"));
    return noop;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        io.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
  );
  targets.forEach((el) => io.observe(el));
  return () => io.disconnect();
}
