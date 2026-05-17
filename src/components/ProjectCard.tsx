"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Star,
  Lock,
} from "lucide-react";
import { Project } from "../data/projects";

function GitHubSvg({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.22-3.37-1.22-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.35 9.35 0 0 1 12 6.99c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9 0 1.38-.01 2.49-.01 2.83 0 .27.18.59.69.49A10.08 10.08 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
const isMobileProject = project.name.toLowerCase().includes("react native");
  const hasGithub = Boolean(project.github);
  const hasLiveDemo = Boolean(project.liveDemo);

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className={`glass-card overflow-hidden rounded-[2rem] ${
        project.isFeatured ? "ring-1 ring-cyan-300/30" : ""
      }`}
    >
      <div className="relative h-56 w-full overflow-hidden bg-slate-900">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className={`transition duration-500 hover:scale-105 ${
  isMobileProject ? "object-contain p-4" : "object-cover"
}`}
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

        <div className="absolute left-5 top-5 flex flex-wrap gap-2">
          {project.isFeatured && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-300/40 bg-cyan-400/15 px-3 py-1 text-xs font-bold text-cyan-100 backdrop-blur">
              <Star size={13} />
              Featured
            </span>
          )}

          <span
            className={`rounded-full border px-3 py-1 text-xs font-bold backdrop-blur ${
              project.status === "Live"
                ? "border-emerald-300/40 bg-emerald-400/15 text-emerald-100"
                : "border-amber-300/40 bg-amber-400/15 text-amber-100"
            }`}
          >
            {project.status}
          </span>
        </div>
      </div>

      <div className="p-6 sm:p-7">
        <p className="mb-3 text-sm font-semibold text-cyan-300">
          {project.date}
        </p>

        <h3 className="text-2xl font-bold text-white">{project.name}</h3>

        <p className="mt-4 text-sm leading-7 text-slate-400">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.techStack.slice(0, 9).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {expanded && (
          <div className="mt-6">
            <h4 className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-slate-300">
              Feature Highlights
            </h4>

            <ul className="grid gap-2 text-sm text-slate-400 sm:grid-cols-2">
              {project.features.map((feature) => (
                <li key={feature} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          {hasGithub ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-200"
            >
              <GitHubSvg size={17} />
              GitHub
            </a>
          ) : (
            <button
              type="button"
              disabled
              className="inline-flex cursor-not-allowed items-center justify-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-sm font-semibold text-slate-500"
            >
              <Lock size={17} />
              GitHub Soon
            </button>
          )}

          {hasLiveDemo ? (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-4 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              <ExternalLink size={17} />
              Live Demo
            </a>
          ) : (
            <button
              type="button"
              disabled
              className="inline-flex cursor-not-allowed items-center justify-center gap-2 rounded-full bg-white/10 px-4 py-2.5 text-sm font-bold text-slate-500"
            >
              <Lock size={17} />
              Live Soon
            </button>
          )}

          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-200"
          >
            {expanded ? <ChevronUp size={17} /> : <ChevronDown size={17} />}
            {expanded ? "Hide Details" : "Details"}
          </button>
        </div>
      </div>
    </motion.article>
  );
}