"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Mail,
} from "lucide-react";

function GitHubSvg({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.22-3.37-1.22-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.35 9.35 0 0 1 12 6.99c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9 0 1.38-.01 2.49-.01 2.83 0 .27.18.59.69.49A10.08 10.08 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function LinkedInSvg({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.3 8.1h4.4V23H.3V8.1ZM8.1 8.1h4.22v2.04h.06c.59-1.12 2.03-2.3 4.18-2.3 4.47 0 5.29 2.94 5.29 6.76V23h-4.4v-7.45c0-1.78-.03-4.07-2.48-4.07-2.48 0-2.86 1.94-2.86 3.94V23H8.1V8.1Z" />
    </svg>
  );
}
export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-grid pt-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.22),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.22),transparent_30%)]" />

      <div className="container-custom relative z-10 grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-5 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200">
            MERN Stack Developer
          </p>

          <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl md:text-7xl">
            Hi, I&apos;m{" "}
            <span className="gradient-text">Harshrajsinh Vaghela</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            I build full-stack web applications with modern frontend, scalable
            backend, secure authentication, payments, and cloud deployment.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              View Projects
              <ArrowRight size={18} />
            </a>

            <a
              href="public/Harshrajsinh_Vaghela_Resume.pdf"
              download
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 font-bold text-white transition hover:border-cyan-300 hover:text-cyan-200"
            >
              <Download size={18} />
              Download Resume
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 font-bold text-white transition hover:border-cyan-300 hover:text-cyan-200"
            >
              <Mail size={18} />
              Contact Me
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <a
              href="https://github.com/harshrajsinhvaghela7586"
              aria-label="GitHub"
              className="rounded-full border border-white/10 p-3 text-slate-300 transition hover:border-cyan-300 hover:text-cyan-300"
            >
              <GitHubSvg size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/harshrajsinh-vaghela-a38bba300/"
              aria-label="LinkedIn"
              className="rounded-full border border-white/10 p-3 text-slate-300 transition hover:border-cyan-300 hover:text-cyan-300"
            >
              <LinkedInSvg size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="glass-card mx-auto w-full max-w-sm rounded-[2rem] p-6"
        >
          <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-6">
            <div className="mb-6 h-32 rounded-3xl bg-gradient-to-br from-cyan-400/30 via-blue-500/20 to-indigo-500/30" />

            <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
              Portfolio
            </p>

            <h3 className="mt-3 text-2xl font-bold text-white">
              Full-Stack Developer
            </h3>

            <p className="mt-4 text-sm leading-6 text-slate-400">
              React, Next.js, Node.js, MongoDB, APIs, authentication, payments,
              dashboards, and deployment-focused project development.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}