import { profile } from "@/data/profile";
import CopyEmail from "./CopyEmail";
import { ArrowUpRight, Download } from "./Icons";
import { cssVars } from "@/lib/css";

export default function Contact() {
  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container">
        <p className="eyebrow" data-reveal>
          <span className="eyebrow__no">06</span>
          <span className="eyebrow__rule" aria-hidden="true" />
          <span>Contact</span>
        </p>

        <h2 className="display contact__title" id="contact-title" data-reveal="mask">
          <span className="ln" style={cssVars({"--l": 0})}>
            <span>Let&rsquo;s build</span>
          </span>
          <span className="ln" style={cssVars({"--l": 1})}>
            <span>
              something <i className="serif">good.</i>
            </span>
          </span>
        </h2>

        <p className="contact__lead" data-reveal>
          I&rsquo;m looking for a full-time full-stack role, in Ahmedabad or remote. If you have an opening, or a problem that needs a
          developer who finishes things, write to me.
        </p>

        <a className="contact__mail" href={`mailto:${profile.email}`} data-reveal data-cursor="Write">
          <span>{profile.email}</span>
          <ArrowUpRight className="contact__arrow" />
        </a>

        <div className="contact__actions" data-reveal>
          <CopyEmail email={profile.email} />
          <a className="btn btn--ghost" href={profile.resume} download data-magnetic="0.3">
            Resume
            <Download className="btn__icon" />
          </a>
        </div>

        <ul className="contact__links" data-stagger="80">
          <li>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              <span className="label">GitHub</span>
              <span>harshrajsinhvaghela7586</span>
              <ArrowUpRight />
            </a>
          </li>
          <li>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              <span className="label">LinkedIn</span>
              <span>harshrajsinh-vaghela</span>
              <ArrowUpRight />
            </a>
          </li>
          <li>
            <a href={profile.phoneHref}>
              <span className="label">Phone</span>
              <span>{profile.phone}</span>
              <ArrowUpRight />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
