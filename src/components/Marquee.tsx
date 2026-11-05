import { Spark } from "./Icons";
import { cssVars } from "@/lib/css";

type Props = {
  items: readonly string[];
  className?: string;
  /** Seconds for one full loop (CSS driven). */
  duration?: number;
};

/** Pure CSS marquee: two identical copies, the second hidden from assistive tech. */
export default function Marquee({ items, className = "", duration = 38 }: Props) {
  const row = (hidden: boolean) => (
    <ul className="marquee__row" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <li key={item}>
          <span>{item}</span>
          <Spark className="marquee__spark" />
        </li>
      ))}
    </ul>
  );

  return (
    <div className={`marquee ${className}`} style={cssVars({"--marquee-time": `${duration}s`})}>
      <div className="marquee__track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
