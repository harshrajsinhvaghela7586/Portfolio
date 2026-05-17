"use client";

import { motion } from "framer-motion";
import { CalendarDays, GraduationCap, MapPin } from "lucide-react";
import SectionHeading from "./SectionHeading";

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    status: "Pursuing",
    institute: "LJ University",
    year: "Expected Apr 2027",
    location: "Ahmedabad, Gujarat",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    status: "Completed",
    institute: "LJ University",
    year: "Apr 2025",
    location: "Ahmedabad, Gujarat",
  },
];

export default function Education() {
  return (
    <section id="education" className="section-padding bg-slate-950">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Education"
          title="Academic Background"
          description="My academic foundation in computer applications, software development, and practical project building."
        />

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          {education.map((item, index) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="glass-card rounded-[2rem] p-7"
            >
              <div className="mb-6 flex items-center justify-between gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                  <GraduationCap size={28} />
                </div>

                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-bold text-cyan-200">
                  {item.status}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white">{item.degree}</h3>

              <p className="mt-3 text-lg font-semibold text-slate-300">
                {item.institute}
              </p>

              <div className="mt-5 space-y-3 text-sm text-slate-400">
                <p className="flex items-center gap-2">
                  <CalendarDays size={16} className="text-cyan-300" />
                  {item.year}
                </p>

                <p className="flex items-center gap-2">
                  <MapPin size={16} className="text-cyan-300" />
                  {item.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}