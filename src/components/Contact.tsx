"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import SectionHeading from "./SectionHeading";

const EMAIL = "harshrajsinhvaghela7419@gmail.com";
const GITHUB_URL = "https://github.com/harshrajsinhvaghela7586";
const LINKEDIN_URL =
  "https://www.linkedin.com/in/harshrajsinh-vaghela-a38bba300/";

function GitHubSvg({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.22-3.37-1.22-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.35 9.35 0 0 1 12 6.99c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9 0 1.38-.01 2.49-.01 2.83 0 .27.18.59.69.49A10.08 10.08 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function LinkedInSvg({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.3 8.1h4.4V23H.3V8.1ZM8.1 8.1h4.22v2.04h.06c.59-1.12 2.03-2.3 4.18-2.3 4.47 0 5.29 2.94 5.29 6.76V23h-4.4v-7.45c0-1.78-.03-4.07-2.48-4.07-2.48 0-2.86 1.94-2.86 3.94V23H8.1V8.1Z" />
    </svg>
  );
}

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const subject = encodeURIComponent(
      form.subject || "Portfolio Contact - Project Discussion"
    );

    const body = encodeURIComponent(
      `Hi Harshrajsinh,\n\n${form.message}\n\nName: ${form.name}\nEmail: ${form.email}`
    );

    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="section-padding bg-slate-950/95">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something great together."
          description="Open to full-stack developer opportunities, project discussions, and collaboration."
        />

        <div className="grid gap-7 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-[2rem] p-7"
          >
            <h3 className="text-2xl font-bold text-white">Contact Details</h3>

            <div className="mt-7 space-y-5">
              <a
                href={`mailto:${EMAIL}`}
                className="flex gap-4 rounded-2xl p-3 transition hover:bg-white/5"
              >
                <Mail className="text-cyan-300" />
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <p className="break-all text-sm text-slate-400">{EMAIL}</p>
                </div>
              </a>

              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="flex gap-4 rounded-2xl p-3 transition hover:bg-white/5"
              >
                <span className="text-cyan-300">
                  <GitHubSvg />
                </span>
                <div>
                  <p className="font-semibold text-white">GitHub</p>
                  <p className="break-all text-sm text-slate-400">
                    github.com/harshrajsinhvaghela7586
                  </p>
                </div>
              </a>

              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                className="flex gap-4 rounded-2xl p-3 transition hover:bg-white/5"
              >
                <span className="text-cyan-300">
                  <LinkedInSvg />
                </span>
                <div>
                  <p className="font-semibold text-white">LinkedIn</p>
                  <p className="break-all text-sm text-slate-400">
                    linkedin.com/in/harshrajsinh-vaghela-a38bba300
                  </p>
                </div>
              </a>

              <div className="flex gap-4 rounded-2xl p-3">
                <MapPin className="text-cyan-300" />
                <div>
                  <p className="font-semibold text-white">Location</p>
                  <p className="text-sm text-slate-400">
                    Ahmedabad, Gujarat, India
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-[2rem] p-7"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, name: e.target.value }))
                }
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-300"
              />

              <input
                type="email"
                placeholder="Your email"
                value={form.email}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, email: e.target.value }))
                }
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-300"
              />
            </div>

            <input
              type="text"
              placeholder="Project discussion"
              value={form.subject}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, subject: e.target.value }))
              }
              className="mt-5 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-300"
            />

            <textarea
              rows={6}
              placeholder="Write your message..."
              value={form.message}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, message: e.target.value }))
              }
              className="mt-5 w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-300"
            />

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-cyan-300 sm:w-auto"
            >
              <Send size={18} />
              Send Message
            </button>

           
          </motion.form>
        </div>
      </div>
    </section>
  );
}