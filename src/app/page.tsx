import About from "@/components/About";
import Behaviors from "@/components/Behaviors";
import Contact from "@/components/Contact";
import Curtain from "@/components/Curtain";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Skills from "@/components/Skills";
import Work from "@/components/Work";

export default function Page() {
  return (
    <>
      <Curtain />
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Work />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <Behaviors />
    </>
  );
}
