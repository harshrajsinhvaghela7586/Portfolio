"use client";
import { motion } from "framer-motion";
import { CalendarDays, Code2 } from "lucide-react";
import { timelineProjects } from "../data/projects";
import SectionHeading from "./SectionHeading";

export default function ProjectTimeline() {
  return (
    <section id="timeline" className="section-padding bg-slate-950/95">
      <div className="container-custom">
        <SectionHeading eyebrow="Timeline" title="Project Timeline" description="A chronological view of the projects I have built." />
        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-cyan-300 via-blue-500 to-indigo-500 md:left-1/2" />
          <div className="space-y-8">{timelineProjects.map((item, index) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: index * 0.08 }} className={`relative flex gap-6 md:gap-10 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
              <div className="absolute left-0 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-cyan-300/40 bg-slate-950 text-cyan-300 md:left-1/2 md:-translate-x-1/2"><Code2 size={18}/></div>
              <div className="ml-16 w-full md:ml-0 md:w-1/2"><div className="glass-card rounded-3xl p-6"><div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-200"><CalendarDays size={15}/>{item.period}</div><h3 className="text-xl font-bold text-white">{item.title}</h3><p className="mt-3 text-sm leading-7 text-slate-400">{item.description}</p></div></div>
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}</div>
        </div>
      </div>
    </section>
  );
}
