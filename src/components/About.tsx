import Image from "next/image";
import { education, facts } from "@/data/profile";
import SectionHead from "./SectionHead";

export default function About() {
  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="container">
        <SectionHead no="01" label="About" id="about-title" lines={["Hi. I build things", <>that <i className="serif">work</i> end to end.</>]} />

        <div className="about__grid">
          <figure className="about__photo" data-reveal data-tilt="4">
            <Image
              src="/images/harshrajsinh-1000.webp"
              alt="Portrait of Harshrajsinh Vaghela"
              width={1000}
              height={1250}
              sizes="(max-width: 880px) 70vw, 380px"
              priority={false}
            />
            <figcaption className="scribble scribble--photo" aria-hidden="true">
              hi, that&rsquo;s me
            </figcaption>
          </figure>

          <div className="about__text">
            <p className="about__statement" data-words>
              I&rsquo;m a full-stack developer who likes owning a feature from start to finish: the screen, the API behind it and the
              database under that. I care about pages that load fast, flows that don&rsquo;t fall over at the edge cases, and code the
              next person can read without me in the room.
            </p>

            <ul className="edu" data-stagger="90">
              {education.map((e) => (
                <li key={e.school + e.degree}>
                  <span className="edu__when">{e.when}</span>
                  <span className="edu__what">
                    <strong>{e.degree}</strong>
                    <em>{e.school}{e.note ? ` · ${e.note}` : ""}</em>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <dl className="facts" data-stagger="90">
          {facts.map((f) => (
            <div className="fact" key={f.label}>
              <dt>{f.label}</dt>
              <dd>{f.value}</dd>
              <p>{f.note}</p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
