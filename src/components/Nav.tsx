"use client";

import { useEffect, useState } from "react";
import { navLinks, profile } from "@/data/profile";
import { ArrowUpRight } from "./Icons";
import { cssVars } from "@/lib/css";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  // highlight the section currently in the middle of the screen
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    const hero = document.getElementById("top");
    if (hero) {
      const heroIo = new IntersectionObserver(
        (entries) => entries.forEach((e) => e.isIntersecting && setActive("")),
        { rootMargin: "-45% 0px -50% 0px" },
      );
      heroIo.observe(hero);
      return () => {
        io.disconnect();
        heroIo.disconnect();
      };
    }
    return () => io.disconnect();
  }, []);

  // lock the page behind the mobile menu
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("menu-open", open);
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      root.classList.remove("menu-open");
    };
  }, [open]);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="progress" aria-hidden="true" />

      <header className="nav">
        <div className="nav__inner">
          <a className="nav__logo" href="#top" aria-label="Harshrajsinh Vaghela, back to top" data-magnetic="0.25">
            <span className="nav__mark">HV</span>
            <span className="nav__name">
              Harsh<span className="nav__dot">.</span>
            </span>
          </a>

          <nav className="nav__links" aria-label="Primary">
            {navLinks.map((l, i) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className={active === l.id ? "is-active" : undefined}
                aria-current={active === l.id ? "true" : undefined}
              >
                <span className="nav__idx">0{i + 1}</span>
                {l.label}
              </a>
            ))}
          </nav>

          <div className="nav__end">
            <a className="btn btn--sm btn--ghost nav__resume" href={profile.resume} download data-magnetic="0.3">
              Resume
              <ArrowUpRight className="btn__icon" />
            </a>
            <button
              type="button"
              className="burger"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div id="mobile-menu" className={`menu${open ? " is-open" : ""}`} data-native-scroll inert={!open}>
        <nav aria-label="Mobile">
          {navLinks.map((l, i) => (
            <a key={l.id} href={`#${l.id}`} style={cssVars({"--i": i})} onClick={() => setOpen(false)}>
              <span>0{i + 1}</span>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="menu__foot">
          <a href={profile.resume} download>
            Download resume
          </a>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </div>
      </div>
    </>
  );
}
