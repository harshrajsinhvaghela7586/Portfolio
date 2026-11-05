import type { ReactNode } from "react";
import { cssVars } from "@/lib/css";

type Props = {
  no: string;
  label: string;
  /** Each entry becomes one masked line that slides up. Wrap a word in <i> for the serif accent. */
  lines: ReactNode[];
  id?: string;
};

export default function SectionHead({ no, label, lines, id }: Props) {
  return (
    <header className="shead">
      <p className="eyebrow" data-reveal>
        <span className="eyebrow__no">{no}</span>
        <span className="eyebrow__rule" aria-hidden="true" />
        <span>{label}</span>
      </p>
      <h2 className="display shead__title" data-reveal="mask" id={id}>
        {lines.map((line, i) => (
          <span className="ln" key={i} style={cssVars({"--l": i})}>
            <span>{line}</span>
          </span>
        ))}
      </h2>
    </header>
  );
}
