import type { CSSProperties } from "react";

/** Typed way to pass CSS custom properties through the `style` prop: style={cssVars({ "--i": 3 })}. */
export const cssVars = (vars: Record<string, string | number>) => vars as unknown as CSSProperties;
