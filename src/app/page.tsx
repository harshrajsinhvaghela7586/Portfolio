import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ProjectTimeline from "../components/ProjectTimeline";
import Education from "../components/Education";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Experience from "../components/Experience";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <ProjectTimeline />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
