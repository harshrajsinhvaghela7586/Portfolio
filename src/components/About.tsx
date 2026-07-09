"use client";

import { motion } from "framer-motion";
import { Code2, CreditCard, ShieldCheck, UploadCloud } from "lucide-react";
import SectionHeading from "./SectionHeading";

const highlights = [
  {
    icon: ShieldCheck,
    title: "Secure Development",
    text: "Authentication, authorization, protected routes, JWT, password hashing, and secure backend practices.",
  },
  {
    icon: CreditCard,
    title: "Real-World Projects",
    text: "Built client-focused applications featuring dashboards, e-commerce workflows, payments, and dynamic content management.",
  },
  {
    icon: UploadCloud,
    title: "API & Integrations",
    text: "REST APIs, Cloudinary, email services, third-party integrations, and backend data management.",
  },
  {
    icon: Code2,
    title: "Clean Code",
    text: "Reusable components, scalable architecture, responsive design, performance optimization, and deployment-ready applications.",
  },
];
export default function About() {
  return (
    <section id="about" className="section-padding bg-slate-950">
      <div className="container-custom">
        <SectionHeading
          eyebrow="About"
          title="Building scalable full-stack web applications with modern technologies"
          description="I develop modern MERN and Next.js applications with a strong focus on performance, clean architecture, responsive UI, secure backend development, and real-world user experience."
        />

        <div className="grid gap-7 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-[2rem] p-7 sm:p-10"
          >
            <div className="space-y-5 text-base leading-8 text-slate-300 sm:text-lg">
              <p>
                I am a Full Stack Developer with hands-on experience building modern web
                applications using React.js, Next.js, Node.js, Express.js, MongoDB,
                TypeScript, and Tailwind CSS. I enjoy transforming ideas into scalable,
                responsive, and production-ready applications.
              </p>

              <p>
                During my internship, I have worked on real client projects, developing
                responsive user interfaces, reusable components, dynamic pages, REST APIs,
                authentication systems, dashboards, payment integrations, image uploads,
                and performance optimization. I follow clean coding practices and focus on
                writing maintainable, reusable, and efficient code.
              </p>

              <p>
                I continuously explore new technologies and improve my development
                workflow through Git, modern deployment platforms, and industry best
                practices. My goal is to build reliable software that delivers an excellent
                user experience while solving real business problems.
              </p>
            </div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="glass-card rounded-3xl p-6"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                    <Icon size={24} />
                  </div>

                  <h3 className="text-lg font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}