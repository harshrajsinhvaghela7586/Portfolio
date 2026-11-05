import { job, shipped } from "@/data/experience";
import SectionHead from "./SectionHead";
import ShippedList from "./ShippedList";
import { cssVars } from "@/lib/css";

const RING = 2 * Math.PI * 44; // circumference of the gauge

export default function Experience() {
  return (
    <section id="experience" className="section experience" aria-labelledby="exp-title">
      <div className="container">
        <SectionHead no="02" label="Experience" id="exp-title" lines={["Shipping at", <><i className="serif">Visezy</i> Solutions.</>]} />

        <div className="job">
          <aside className="job__who" data-reveal>
            <p className="label">Role</p>
            <h3 className="job__role">{job.role}</h3>
            <p className="job__co">{job.company}</p>
            <p className="job__period">
              {job.period}
              <span aria-hidden="true"> · </span>
              {job.place}
            </p>
            <p className="job__sum">{job.summary}</p>
          </aside>

          <div className="job__main">
            <div className="metrics" data-stagger="110">
              <div className="metric metric--gauge" data-spot>
                <svg className="gauge" viewBox="0 0 100 100" aria-hidden="true">
                  <circle className="gauge__track" cx="50" cy="50" r="44" />
                  <circle
                    className="gauge__fill"
                    cx="50"
                    cy="50"
                    r="44"
                    strokeDasharray={RING}
                    style={cssVars({"--ring": RING, "--to": RING * (1 - 0.99)})}
                  />
                </svg>
                <div className="metric__num">
                  <span data-count="99" data-from="69" data-dur="1800">
                    99
                  </span>
                </div>
                <p className="metric__label">Lighthouse performance, up from 69</p>
              </div>

              <div className="metric" data-spot>
                <div className="metric__big">
                  <s>4–5s</s>
                  <span aria-hidden="true">→</span>
                  <b>&lt;2s</b>
                </div>
                <p className="metric__label">Page load time after image, pagination and data-fetching work</p>
              </div>

              <div className="metric" data-spot>
                <div className="metric__big">
                  <b>4+</b>
                  <span aria-hidden="true">/</span>
                  <b>2</b>
                </div>
                <p className="metric__label">Websites and mobile apps contributed to</p>
              </div>
            </div>

            <ol className="hl" data-stagger="70">
              {job.highlights.map((h, i) => (
                <li key={i}>
                  <span className="hl__no">{String(i + 1).padStart(2, "0")}</span>
                  <p>{h}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="shipped-head" data-reveal>
          <p className="label">What I worked on there</p>
          <p className="shipped-head__note">Open a row for the details.</p>
        </div>
        <div data-reveal>
          <ShippedList items={shipped} />
        </div>
        <p className="private-note" data-reveal>
          All of this is private work, so there are no public links, repos or screenshots here. Happy to walk through how it was built on a call.
        </p>
      </div>
    </section>
  );
}
