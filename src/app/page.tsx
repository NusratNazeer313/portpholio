"use client";

import Navbar from "@/components/navbar";
import Introduction from "@/components/intro";
import About from "./about/page";
import Skils from "@/components/skills";
import Certificates from "./certificates/pages";
import Contact from "./contact/page";
import Projects from "./projects/page";
import ReactNAtiveProjects from "./reactNativeProjects/page";
import ScrollProgress from "@/components/ui/ScrollProgress";

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
   
      <Navbar />

      <section id="home">
        <Introduction />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skils />
      </section>

      <section id="projects">
        <Projects />
        <ReactNAtiveProjects />
      </section>

      <section id="certificates">
        <Certificates />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}
