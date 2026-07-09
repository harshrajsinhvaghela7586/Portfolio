import { experiences } from "../data/experience";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Experience"
          title="Professional Experience"
          description="My journey building production-ready web applications and working on real client projects."
        />

        <div className="space-y-8">
          {experiences.map((experience) => (
            <div
              key={experience.company}
              className="glass-card rounded-3xl p-8"
            >
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {experience.role}
                  </h3>

                  <p className="text-cyan-300">
                    {experience.company}
                  </p>
                </div>

                <div className="text-sm text-slate-400">
                  <p>{experience.duration}</p>
                  <p>{experience.location}</p>
                </div>
              </div>

              <p className="mt-6 text-slate-300 leading-7">
                {experience.description}
              </p>

              <ul className="mt-6 space-y-3">
                {experience.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-slate-300"
                  >
                    <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}