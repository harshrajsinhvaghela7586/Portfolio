import { projects, type Project } from "@/data/projects";
import { ArrowUpRight } from "./Icons";
import SectionHead from "./SectionHead";
import { cssVars } from "@/lib/css";

function Shot({ p }: { p: Project }) {
  const { shot } = p;
  const srcSet = shot.widths.map((w) => `/projects/${shot.base}-${w}.webp ${w}w`).join(", ");
  const src = `/projects/${shot.base}-${shot.widths[shot.widths.length - 1]}.webp`;
  const img = (
    <img
      src={src}
      srcSet={srcSet}
      sizes={shot.kind === "phone" ? "(min-width: 900px) 300px, 70vw" : "(min-width: 900px) 56vw, 92vw"}
      width={shot.w}
      height={shot.h}
      alt={shot.alt}
      loading="lazy"
      decoding="async"
    />
  );

  if (shot.kind === "phone") {
    return (
      <div className="phone" data-tilt="7">
        {img}
      </div>
    );
  }

  return (
    <div className="frame" data-tilt="4">
      <div className="frame__bar" aria-hidden="true">
        <i />
        <i />
        <i />
        <span>{shot.url}</span>
      </div>
      {img}
    </div>
  );
}

function Card({ p, index }: { p: Project; index: number }) {
  const media = (
    <div className="proj__media">
      <div className="proj__float" data-parallax={p.shot.kind === "phone" ? "0.05" : "0.04"}>
        <Shot p={p} />
      </div>
    </div>
  );

  return (
    <article className="proj" data-stack-card style={cssVars({"--i": index})} aria-labelledby={`proj-${index}`}>
      <div className="proj__inner">
        <div className="proj__shade" aria-hidden="true" />

        <div className="proj__info">
          <div className="proj__top">
            <span className="proj__no">{p.no}</span>
            <span className="proj__date">{p.date}</span>
            <span className={`pill ${p.status === "Live" ? "pill--live" : ""}`}>{p.status}</span>
          </div>

          <h3 className="proj__title" id={`proj-${index}`}>
            {p.title}
          </h3>
          <p className="proj__kicker">{p.kicker}</p>
          <p className="proj__blurb">{p.blurb}</p>

          <ul className="proj__points">
            {p.points.map((pt) => (
              <li key={pt}>{pt}</li>
            ))}
          </ul>

          <ul className="tags">
            {p.stack.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>

          <div className="proj__links">
            {p.live ? (
              <a className="btn btn--primary btn--sm" href={p.live} target="_blank" rel="noopener noreferrer" data-magnetic="0.25">
                Live demo
                <ArrowUpRight className="btn__icon" />
              </a>
            ) : null}
            {p.github ? (
              <a className="btn btn--ghost btn--sm" href={p.github} target="_blank" rel="noopener noreferrer" data-magnetic="0.25">
                Source
                <ArrowUpRight className="btn__icon" />
              </a>
            ) : null}
            {!p.live && !p.github ? <span className="proj__note">Code shared on request</span> : null}
          </div>
        </div>

        {p.live ? (
          <a
            className="proj__hit"
            href={p.live}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="Open"
            aria-label={`Open ${p.title} live demo`}
            tabIndex={-1}
          >
            {media}
          </a>
        ) : (
          media
        )}
      </div>
    </article>
  );
}

export default function Work() {
  return (
    <section id="work" className="section work" aria-labelledby="work-title">
      <div className="container">
        <SectionHead no="03" label="Selected builds" id="work-title" lines={["Things I built", <>on my <i className="serif">own time.</i></>]} />
        <p className="work__intro" data-reveal>
          Side projects where I made every decision, from the schema to the deploy. Open the live demos, they&rsquo;re real.
        </p>
      </div>

      <div className="container">
        <div className="stack" data-stack>
          {projects.map((p, i) => (
            <Card key={`${p.no}-${p.title}`} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
