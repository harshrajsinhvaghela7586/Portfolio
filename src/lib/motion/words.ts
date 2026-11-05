import { clamp, noop, onFrame, prefersReducedMotion, qsa, type Cleanup } from "./core";

/**
 * Scroll-scrubbed text. Words in [data-words] light up one by one as the paragraph
 * travels up the screen. Splitting walks text nodes only, so inline tags (<em>) survive.
 */
export function initWords(): Cleanup {
  if (prefersReducedMotion()) return noop;

  const blocks = qsa("[data-words]").map((root) => {
    const words: HTMLElement[] = [];
    if (!root.dataset.split) {
      const walk = (node: Node) => {
        Array.from(node.childNodes).forEach((child) => {
          if (child.nodeType === 3) {
            const frag = document.createDocumentFragment();
            (child.textContent || "").split(/(\s+)/).forEach((part) => {
              if (!part) return;
              if (/^\s+$/.test(part)) {
                frag.appendChild(document.createTextNode(part));
                return;
              }
              const span = document.createElement("span");
              span.className = "w";
              span.textContent = part;
              frag.appendChild(span);
            });
            child.replaceWith(frag);
          } else if (child.nodeType === 1) {
            walk(child);
          }
        });
      };
      walk(root);
      root.dataset.split = "1";
    }
    root.querySelectorAll<HTMLElement>(".w").forEach((w) => words.push(w));
    return { root, words, last: new Array<number>(words.length).fill(-1) };
  });

  const stop = onFrame(() => {
    const vh = window.innerHeight;
    for (const b of blocks) {
      const r = b.root.getBoundingClientRect();
      if (r.bottom < -50 || r.top > vh + 50) continue;
      const p = clamp((vh * 0.9 - r.top) / (vh * 0.5 + r.height * 0.55), 0, 1);
      const n = b.words.length;
      for (let i = 0; i < n; i++) {
        const a = clamp((p * 1.14 - i / n) / 0.14, 0, 1);
        const o = Math.round((0.16 + 0.84 * a) * 100) / 100;
        if (o !== b.last[i]) {
          b.words[i].style.opacity = String(o);
          b.last[i] = o;
        }
      }
    }
  });
  return stop;
}
