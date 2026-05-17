"use client";
import { motion } from "framer-motion";
import { SkillCategory } from "../data/skills";
import SectionHeading from "./SectionHeading";
import { skillCategories } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-slate-950/95">
      <div className="container-custom">
        <SectionHeading eyebrow="Skills" title="Technical skills and production-focused tools" description="A practical stack for building modern full-stack web applications." />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {skillCategories.map((group, index) => (
            <motion.div key={group.category} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.05 }} className="glass-card rounded-3xl p-6">
              <h3 className="mb-5 text-lg font-bold text-white">{group.category}</h3>
              <div className="flex flex-wrap gap-2">{group.skills.map((skill) => <span key={skill} className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-sm text-cyan-100">{skill}</span>)}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
