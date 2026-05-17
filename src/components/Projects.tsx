import { projects } from "../data/projects";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-slate-950">
      <div className="container-custom">
        <SectionHeading eyebrow="Projects" title="Production-style projects" description="Full-stack projects focused on real-world features, clean architecture, and deployment readiness." />
        <div className="grid gap-7 lg:grid-cols-2">{projects.map((project, index) => <ProjectCard key={project.name} project={project} index={index} />)}</div>
      </div>
    </section>
  );
}
