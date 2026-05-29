"use client";
import { useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" }, { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" }, { label: "Projects", href: "#projects" },
  { label: "Timeline", href: "#timeline" }, { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <motion.header initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.55 }} className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
      <nav className="container-custom flex h-16 items-center justify-between">
        <a href="#home" className="text-lg font-bold text-white">Harshrajsinh<span className="text-cyan-300"> Vaghela</span></a>
        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => <a key={link.href} href={link.href} className="text-sm font-medium text-slate-300 transition hover:text-cyan-300">{link.label}</a>)}
        </div>
        <a href="/Harshrajsinh_Vaghela_Resume.pdf" download className="hidden items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-400/20 lg:flex"><Download size={16}/>Resume</a>
        <button type="button" onClick={() => setOpen(!open)} className="rounded-xl border border-white/10 p-2 text-white lg:hidden">{open ? <X size={22}/> : <Menu size={22}/>}</button>
      </nav>
      {open && <div className="border-t border-white/10 bg-slate-950/95 px-4 py-5 lg:hidden"><div className="flex flex-col gap-4">
        {navLinks.map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-2 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-cyan-300">{link.label}</a>)}
        <a href="/Harshrajsinh_Vaghela_Resume.pdf" download className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-4 py-3 text-sm font-bold text-slate-950"><Download size={16}/>Download Resume</a>
      </div></div>}
    </motion.header>
  );
}
