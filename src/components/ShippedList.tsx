"use client";

import { useId, useState } from "react";
import type { Shipped } from "@/data/experience";
import { Plus } from "./Icons";

/**
 * Accordion of work shipped at the company. One row open at a time.
 * No data-reveal on the rows: React rewrites className on every toggle and would wipe the is-in class.
 */
export default function ShippedList({ items }: { items: Shipped[] }) {
  const [open, setOpen] = useState(0);
  const uid = useId();

  return (
    <ol className="shipped">
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${uid}-panel-${i}`;
        const btnId = `${uid}-btn-${i}`;
        return (
          <li className={`row${isOpen ? " is-open" : ""}`} key={item.title}>
            <h3 className="row__h">
              <button
                id={btnId}
                type="button"
                className="row__btn"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                <span className="row__no">{String(i + 1).padStart(2, "0")}</span>
                <span className="row__title">{item.title}</span>
                <span className="row__kind">{item.kind}</span>
                <span className="row__meta">
                  {item.status ? <em className="pill pill--warm">{item.status}</em> : null}
                  <span className="row__year">{item.year}</span>
                </span>
                <span className="row__icon" aria-hidden="true">
                  <Plus />
                </span>
              </button>
            </h3>

            <div id={panelId} role="region" aria-labelledby={btnId} className="row__panel">
              <div className="row__panel-in">
                <div className="row__body">
                  <p className="row__blurb">{item.blurb}</p>
                  <p className="row__role">
                    <b>My part</b>
                    {item.role}
                  </p>
                  <ul className="row__points">
                    {item.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
                <div className="row__side">
                  <p className="label">Stack</p>
                  <ul className="tags">
                    {item.stack.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
