import { damp, hasFinePointer, noop, onFrame, prefersReducedMotion, type Cleanup } from "./core";

const INTERACTIVE = "a, button, summary, label, input, textarea, select, [role='button']";

/**
 * Custom cursor: a dot that sticks to the pointer and a ring that trails behind it.
 * The ring grows over interactive elements and shows a label over anything with
 * `data-cursor="Text"`. Only runs for mouse-like pointers.
 */
export function initCursor(): Cleanup {
  if (!hasFinePointer() || prefersReducedMotion()) return noop;

  const html = document.documentElement;
  const root = document.createElement("div");
  root.className = "cursor is-hidden";
  root.setAttribute("aria-hidden", "true");
  root.innerHTML =
    '<span class="cursor__dot"></span><span class="cursor__ring"><span class="cursor__label"></span></span>';
  document.body.appendChild(root);

  const dot = root.querySelector<HTMLElement>(".cursor__dot")!;
  const ring = root.querySelector<HTMLElement>(".cursor__ring")!;
  const label = root.querySelector<HTMLElement>(".cursor__label")!;

  let x = -100;
  let y = -100;
  let rx = x;
  let ry = y;
  let seen = false;

  const setState = (target: EventTarget | null) => {
    const el = target as HTMLElement | null;
    const withLabel = el?.closest<HTMLElement>("[data-cursor]");
    if (withLabel) {
      label.textContent = withLabel.dataset.cursor || "";
      root.classList.add("is-label");
      root.classList.remove("is-link");
      return;
    }
    root.classList.remove("is-label");
    root.classList.toggle("is-link", !!el?.closest(INTERACTIVE));
  };

  const onMove = (e: PointerEvent) => {
    if (e.pointerType === "touch") return;
    x = e.clientX;
    y = e.clientY;
    if (!seen) {
      seen = true;
      rx = x;
      ry = y;
      html.classList.add("has-cursor");
      root.classList.remove("is-hidden");
    }
  };
  const onOver = (e: PointerEvent) => setState(e.target);
  const onDown = () => root.classList.add("is-down");
  const onUp = () => root.classList.remove("is-down");
  const onLeave = () => root.classList.add("is-hidden");
  const onEnter = () => seen && root.classList.remove("is-hidden");

  const stop = onFrame((_, dt) => {
    rx = damp(rx, x, 18, dt);
    ry = damp(ry, y, 18, dt);
    dot.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
  });

  window.addEventListener("pointermove", onMove, { passive: true });
  document.addEventListener("pointerover", onOver, { passive: true });
  window.addEventListener("pointerdown", onDown, { passive: true });
  window.addEventListener("pointerup", onUp, { passive: true });
  document.documentElement.addEventListener("pointerleave", onLeave);
  document.documentElement.addEventListener("pointerenter", onEnter);

  return () => {
    stop();
    window.removeEventListener("pointermove", onMove);
    document.removeEventListener("pointerover", onOver);
    window.removeEventListener("pointerdown", onDown);
    window.removeEventListener("pointerup", onUp);
    document.documentElement.removeEventListener("pointerleave", onLeave);
    document.documentElement.removeEventListener("pointerenter", onEnter);
    html.classList.remove("has-cursor");
    root.remove();
  };
}
