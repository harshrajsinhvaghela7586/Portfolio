"use client";

import { useEffect } from "react";
import { initMotion } from "@/lib/motion";

/** Mounts every page-wide effect once the page has hydrated. Renders nothing. */
export default function Behaviors() {
  useEffect(() => {
    // wait one frame so the first paint (and the curtain) isn't competing with setup work
    let stop: (() => void) | undefined;
    const id = requestAnimationFrame(() => {
      stop = initMotion();
    });
    return () => {
      cancelAnimationFrame(id);
      stop?.();
    };
  }, []);

  return null;
}
