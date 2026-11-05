"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "./Icons";

/** Copies the address to the clipboard and confirms it. Falls back to a hidden textarea if the Clipboard API is blocked. */
export default function CopyEmail({ email }: { email: string }) {
  const [done, setDone] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = email;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
      } catch {
        /* nothing else to try */
      }
      ta.remove();
    }
    setDone(true);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setDone(false), 2200);
  };

  return (
    <button type="button" className="btn btn--ghost" onClick={copy} data-magnetic="0.3">
      {done ? <Check className="btn__icon" /> : <Copy className="btn__icon" />}
      {done ? "Copied" : "Copy email"}
      <span className="sr-only" role="status" aria-live="polite">
        {done ? "Email address copied to clipboard" : ""}
      </span>
    </button>
  );
}
