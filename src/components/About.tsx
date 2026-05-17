"use client";

import { motion } from "framer-motion";
import { Code2, CreditCard, ShieldCheck, UploadCloud } from "lucide-react";
import SectionHeading from "./SectionHeading";

const highlights = [
  {
    icon: ShieldCheck,
    title: "Authentication",
    text: "JWT auth, protected routes, password hashing, and role-based access.",
  },
  {
    icon: CreditCard,
    title: "Payments",
    text: "Stripe Checkout, webhook-based order creation, and production flow debugging.",
  },
  {
    icon: UploadCloud,
    title: "Integrations",
    text: "Cloudinary uploads, Nodemailer emails, and external API integrations.",
  },
  {
    icon: Code2,
    title: "Clean Structure",
    text: "Reusable components, scalable folders, API testing, and deployment-ready code.",
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-slate-950">
      <div className="container-custom">
        <SectionHeading
          eyebrow="About"
          title="Focused on production-style full-stack applications"
          description="I build MERN and Next.js applications that are close to real-world workflows — authentication, dashboards, payments, uploads, emails, APIs, and deployment."
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
                I am a MERN Stack Developer focused on building practical
                full-stack applications using React.js, Next.js, Node.js,
                Express.js, MongoDB, and TypeScript.
              </p>

              <p>
                My strongest project is TechStore MERN, a production-style
                e-commerce platform with authentication, database cart, Stripe
                checkout, webhook-based order creation, invoice download,
                email confirmation, admin dashboard, product CRUD, image
                upload, and Vercel deployment.
              </p>

              <p>
                I prefer building applications with clean UI, secure backend
                logic, reusable components, structured APIs, and deployment-ready
                implementation instead of only basic demo projects.
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