import { clamp, damp, hasFinePointer, noop, onFrame, prefersReducedMotion, qsa, type Cleanup } from "./core";

/**
 * Pointer driven effects that share one set of listeners:
 *  - [data-magnetic]  buttons lean toward the cursor
 *  - [data-tilt]      cards tilt in 3D under the cursor
 *  - [data-spot]      a soft light follows the cursor (sets --mx / --my)
 *  - hero glow        a lime light trailing the pointer (sets --gx / --gy)
 */
export function initPointerFx(): Cleanup {
  if (!hasFinePointer()) return noop;
  const reduced = prefersReducedMotion();

  let px = -9999;
  let py = -9999;
  const onMove = (e: PointerEvent) => {
    px = e.clientX;
    py = e.clientY;
  };
  window.addEventListener("pointermove", onMove, { passive: true });

  // ---- spotlight: write --mx/--my on the hovered spot element only ----
  const onSpot = (e: PointerEvent) => {
    const el = (e.target as HTMLElement | null)?.closest<HTMLElement>("[data-spot]");
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  document.addEventListener("pointermove", onSpot, { passive: true });

  if (reduced) {
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointermove", onSpot);
    };
  }

  // ---- magnetic ----
  const magnets = qsa("[data-magnetic]").map((el) => ({
    el,
    strength: parseFloat(el.dataset.magnetic || "") || 0.32,
    x: 0,
    y: 0,
  }));

  // ---- tilt ----
  const tilts = qsa("[data-tilt]").map((el) => ({
    el,
    max: parseFloat(el.dataset.tilt || "") || 6,
    rx: 0,
    ry: 0,
    hover: false,
  }));
  const tiltCleanups = tilts.map((t) => {
    const enter = () => (t.hover = true);
    const leave = () => (t.hover = false);
    t.el.addEventListener("pointerenter", enter);
    t.el.addEventListener("pointerleave", leave);
    return () => {
      t.el.removeEventListener("pointerenter", enter);
      t.el.removeEventListener("pointerleave", leave);
    };
  });

  // ---- hero glow ----
  const hero = document.querySelector<HTMLElement>("[data-hero]");
  let gx = 0;
  let gy = 0;
  let gInit = false;

  const vh = () => window.innerHeight;

  const stop = onFrame((_, dt) => {
    // ---- read phase: measure everything first, so we never interleave reads and writes ----
    const magnetTargets = magnets.map((m) => {
      const r = m.el.getBoundingClientRect();
      if (r.bottom < -200 || r.top > vh() + 200) return null;
      const cx = r.left + r.width / 2 - m.x;
      const cy = r.top + r.height / 2 - m.y;
      const dx = px - cx;
      const dy = py - cy;
      const near = Math.hypot(dx, dy) < Math.max(r.width, r.height) * 0.85;
      return near ? { x: dx * m.strength, y: dy * m.strength } : { x: 0, y: 0 };
    });

    const tiltTargets = tilts.map((t) => {
      if (!t.hover) return { x: 0, y: 0 };
      const r = t.el.getBoundingClientRect();
      const nx = clamp((px - r.left) / r.width, 0, 1) - 0.5;
      const ny = clamp((py - r.top) / r.height, 0, 1) - 0.5;
      return { x: -ny * t.max * 2, y: nx * t.max * 2 };
    });

    // ---- write phase ----
    magnets.forEach((m, i) => {
      const tgt = magnetTargets[i];
      if (!tgt) return;
      m.x = damp(m.x, tgt.x, 12, dt);
      m.y = damp(m.y, tgt.y, 12, dt);
      m.el.style.transform =
        Math.abs(m.x) + Math.abs(m.y) < 0.05 ? "" : `translate3d(${m.x.toFixed(2)}px, ${m.y.toFixed(2)}px, 0)`;
    });

    tilts.forEach((t, i) => {
      const tgt = tiltTargets[i];
      t.rx = damp(t.rx, tgt.x, 9, dt);
      t.ry = damp(t.ry, tgt.y, 9, dt);
      t.el.style.transform =
        Math.abs(t.rx) + Math.abs(t.ry) < 0.01
          ? ""
          : `perspective(1100px) rotateX(${t.rx.toFixed(3)}deg) rotateY(${t.ry.toFixed(3)}deg)`;
    });

    if (hero && px > -9000) {
      const r = hero.getBoundingClientRect();
      if (r.bottom > 0 && r.top < window.innerHeight) {
        if (!gInit) {
          gx = px - r.left;
          gy = py - r.top;
          gInit = true;
        }
        gx = damp(gx, px - r.left, 5, dt);
        gy = damp(gy, py - r.top, 5, dt);
        hero.style.setProperty("--gx", `${gx.toFixed(1)}px`);
        hero.style.setProperty("--gy", `${gy.toFixed(1)}px`);
      }
    }
  });

  return () => {
    stop();
    tiltCleanups.forEach((c) => c());
    magnets.forEach((m) => (m.el.style.transform = ""));
    tilts.forEach((t) => (t.el.style.transform = ""));
    window.removeEventListener("pointermove", onMove);
    document.removeEventListener("pointermove", onSpot);
  };
}
