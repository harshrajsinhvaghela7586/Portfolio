"use client";
import { motion } from "framer-motion";

type Props = { eyebrow: string; title: string; description?: string };

export default function SectionHeading({ eyebrow, title, description }: Props) {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mx-auto mb-14 max-w-3xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">{title}</h2>
      {description && <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">{description}</p>}
    </motion.div>
  );
}
