"use client";

import { useEffect, useRef } from "react";
import { clamp, damp, hasFinePointer, onFrame, prefersReducedMotion, watchVisible } from "@/lib/motion/core";

type Dot = { x: number; y: number; ox: number; oy: number; seed: number };
type Ripple = { x: number; y: number; t0: number };

const GAP = 30;
const REACH = 150;

/**
 * A grid of dots that gets pushed away by the pointer and lights up near it.
 * Clicking or tapping sends a ripple through the grid. Pauses off-screen.
 */
export default function HeroCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const parent = canvas?.parentElement;
    if (!canvas || !parent) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = prefersReducedMotion();
    const fine = hasFinePointer();
    let dots: Dot[] = [];
    let w = 0;
    let h = 0;
    let dpr = 1;
    let visible = true;
    let mx = -9999;
    let my = -9999;
    let energy = 0; // 0..1, how present the pointer is
    const ripples: Ripple[] = [];

    const build = () => {
      const rect = parent.getBoundingClientRect();
      w = Math.max(1, Math.round(rect.width));
      h = Math.max(1, Math.round(rect.height));
      dpr = Math.min(2, window.devicePixelRatio || 1);
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      dots = [];
      const cols = Math.ceil(w / GAP) + 1;
      const rows = Math.ceil(h / GAP) + 1;
      const offX = (w - (cols - 1) * GAP) / 2;
      const offY = (h - (rows - 1) * GAP) / 2;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          dots.push({ x: offX + c * GAP, y: offY + r * GAP, ox: 0, oy: 0, seed: c * 0.33 + r * 0.21 });
        }
      }
      draw(performance.now(), 16);
    };

    const draw = (time: number, dt: number) => {
      ctx.clearRect(0, 0, w, h);
      const now = time;
      // drop finished ripples
      for (let i = ripples.length - 1; i >= 0; i--) if (now - ripples[i].t0 > 1400) ripples.splice(i, 1);

      for (const d of dots) {
        let tx = 0;
        let ty = 0;
        let glow = 0;

        if (!reduced && energy > 0.01) {
          const dx = d.x - mx;
          const dy = d.y - my;
          const dist = Math.hypot(dx, dy);
          if (dist < REACH) {
            const f = Math.pow(1 - dist / REACH, 2);
            const inv = dist || 1;
            tx += (dx / inv) * f * 24 * energy;
            ty += (dy / inv) * f * 24 * energy;
            glow = Math.max(glow, f * energy);
          }
        }

        if (!reduced) {
          for (const rp of ripples) {
            const age = (now - rp.t0) / 1000;
            const radius = age * 520;
            const dx = d.x - rp.x;
            const dy = d.y - rp.y;
            const dist = Math.hypot(dx, dy);
            const band = Math.exp(-Math.pow((dist - radius) / 46, 2));
            const life = 1 - age / 1.4;
            if (band > 0.02 && life > 0) {
              const inv = dist || 1;
              tx += (dx / inv) * band * 16 * life;
              ty += (dy / inv) * band * 16 * life;
              glow = Math.max(glow, band * life);
            }
          }
        }

        d.ox = damp(d.ox, tx, 11, dt);
        d.oy = damp(d.oy, ty, 11, dt);

        const ambient = reduced ? 0 : 0.5 + 0.5 * Math.sin(now * 0.0011 + d.seed);
        const alpha = 0.13 + ambient * 0.07 + glow * 0.8;
        const size = 1.05 + ambient * 0.25 + glow * 1.7;

        if (glow > 0.06) ctx.fillStyle = `rgba(200, 245, 96, ${clamp(alpha, 0, 1).toFixed(3)})`;
        else ctx.fillStyle = `rgba(244, 242, 235, ${alpha.toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(d.x + d.ox, d.y + d.oy, size, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    build();
    const ro = new ResizeObserver(build);
    ro.observe(parent);
    const stopVisible = watchVisible(parent, (v) => (visible = v), "0px");

    let stopFrame = () => {};
    if (!reduced) {
      stopFrame = onFrame((time, dt) => {
        if (!visible) return;
        // fade pointer energy in/out
        energy = damp(energy, mx > -9000 ? 1 : 0, 6, dt);
        draw(time, dt);
      });
    }

    const toLocal = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      return { x: e.clientX - r.left, y: e.clientY - r.top, inside: e.clientY >= r.top && e.clientY <= r.bottom };
    };
    const onMove = (e: PointerEvent) => {
      if (!fine) return;
      const p = toLocal(e);
      if (p.inside) {
        mx = p.x;
        my = p.y;
      } else {
        mx = -9999;
      }
    };
    const onLeave = () => (mx = -9999);
    const onDown = (e: PointerEvent) => {
      const p = toLocal(e);
      if (!p.inside || reduced) return;
      ripples.push({ x: p.x, y: p.y, t0: performance.now() });
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    window.addEventListener("pointerdown", onDown, { passive: true });

    return () => {
      stopFrame();
      stopVisible();
      ro.disconnect();
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("pointerdown", onDown);
    };
  }, []);

  return <canvas ref={ref} className="hero__canvas" aria-hidden="true" />;
}
