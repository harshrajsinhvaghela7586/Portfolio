import { bigMarquee, certs, pipeline, tiers } from "@/data/skills";
import { Spark } from "./Icons";
import SectionHead from "./SectionHead";

export default function Skills() {
  return (
    <>
      <section id="skills" className="section skills" aria-labelledby="skills-title">
        <div className="container">
          <SectionHead no="04" label="Skills" id="skills-title" lines={["What I work with,", <>and how <i className="serif">well.</i></>]} />
          <p className="skills__intro" data-reveal>
            Grouped by depth instead of one long wall of logos, so you can see what I use daily and what I only know the basics of.
          </p>

          <div className="tiers">
            {tiers.map((t) => (
              <div className={`tier tier--${t.key}`} key={t.key} data-reveal>
                <div className="tier__head">
                  <h3>{t.title}</h3>
                  <p>{t.note}</p>
                  {t.key === "daily" ? (
                    <span className="scribble" aria-hidden="true">
                      the ones I&rsquo;d happily be quizzed on
                      <svg viewBox="0 0 70 40" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 6c14-3 38 0 50 14 4 4 6 9 7 14M61 34l-9-5M61 34l3-10" />
                      </svg>
                    </span>
                  ) : null}
                </div>
                <ul className="run">
                  {t.items.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bigmarquee" aria-hidden="true">
        <div className="bigmarquee__track" data-marquee="0.05">
          {[0, 1].map((copy) => (
            <div className="bigmarquee__row" key={copy}>
              {bigMarquee.map((w) => (
                <span key={w}>
                  {w}
                  <Spark className="bigmarquee__spark" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <section className="section infra" aria-labelledby="infra-title">
        <div className="container">
          <SectionHead no="05" label="How it ships" id="infra-title" lines={["From commit", <>to <i className="serif">production.</i></>]} />
          <p className="skills__intro" data-reveal>
            Shipping is part of the job. My projects, at work and on my own, follow the same path: a pull request, an automated check
            from GitHub Actions, then a live deploy on Vercel or Render.
          </p>

          <ol className="pipe" data-stagger="130">
            {pipeline.map((s) => (
              <li className="pipe__node" key={s.step} data-spot>
                <span className="pipe__step">{s.step}</span>
                <h3>{s.title}</h3>
                <p>{s.sub}</p>
              </li>
            ))}
          </ol>

          <div className="certs" data-stagger="100">
            <p className="label">Certifications</p>
            <ul>
              {certs.map((c) => (
                <li key={c.title}>
                  <a href={c.url} target="_blank" rel="noopener noreferrer" className="certs__link">
                    <strong>{c.title}</strong>
                    <span>{c.issuer}</span>
                    <em className="certs__verify">View credential ↗</em>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}