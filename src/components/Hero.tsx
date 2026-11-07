import { heroStats, marqueeStack, profile, roles } from "@/data/profile";
import HeroCanvas from "./HeroCanvas";
import { ArrowDown, ArrowUpRight, Download } from "./Icons";
import Marquee from "./Marquee";
import LocalTime from "./LocalTime";
import { cssVars } from "@/lib/css";

/** Splits a word into letters so each one can rise on its own. Purely visual; the h1 has an aria-label. */
function Letters({ text, start = 0 }: { text: string; start?: number }) {
  return (
    <>
      {Array.from(text).map((ch, i) => (
        <span className="ch" key={i} style={cssVars({"--i": start + i})} aria-hidden="true">
          {ch}
        </span>
      ))}
    </>
  );
}

export default function Hero() {
  const first = "Harshrajsinh";
  const second = "Vaghela";

  return (
    <section id="top" className="hero" data-hero>
      <HeroCanvas />
      <div className="hero__glow" aria-hidden="true" />

      <div className="container hero__inner">
        

        <h1 className="hero__title" aria-label={profile.name}>
          <span className="hero__line">
            <Letters text={first} />
          </span>
          <span className="hero__line hero__line--serif">
            <Letters text={second} start={first.length} />
            <span className="ch hero__stop" style={cssVars({"--i": first.length + second.length})} aria-hidden="true">
              .
            </span>
          </span>
        </h1>

        <div className="hero__bottom">
          <div className="hero__copy">
            <p className="hero__role">
              <span className="serif">{profile.role}</span> building{" "}
              <span className="rotator" aria-hidden="true">
                <span className="rotator__list">
                  {[...roles, roles[0]].map((r, i) => (
                    <span key={i}>{r}</span>
                  ))}
                </span>
              </span>
              <span className="sr-only">{roles.join(", ")}</span>
            </p>
            <p className="hero__lead">
              Next.js, Node and React Native, from the database to the pixels. Six months in, with four websites and two mobile apps
              already shipped.
            </p>
            <div className="hero__cta">
              <a className="btn btn--primary" href="#work" data-magnetic="0.3">
                See my work
                <ArrowDown className="btn__icon" />
              </a>
              <a className="btn btn--ghost" href={profile.resume} download data-magnetic="0.3">
                Resume
                <Download className="btn__icon" />
              </a>
              <a className="btn btn--text" href="#contact">
                Get in touch
                <ArrowUpRight className="btn__icon" />
              </a>
            </div>
          </div>

          <dl className="hero__stats">
            {heroStats.map((s) => (
              <div className="stat" key={s.label}>
                <dt>{s.label}</dt>
                <dd>
                  <span data-count={s.value} data-delay="900" data-pad={"pad" in s ? "1" : undefined}>
                    {"pad" in s ? String(s.value).padStart(2, "0") : s.value}
                  </span>
                  {s.suffix}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <Marquee items={marqueeStack} className="hero__marquee" duration={46} />
    </section>
  );
}
