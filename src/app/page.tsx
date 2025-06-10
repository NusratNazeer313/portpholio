"use client";
import Navbar from "@/components/navbar";
import Introduction from "@/components/intro";
import About from "./about/page";
import Skils from "@/components/skills";
import Certificates from "./certificates/pages";
// import Education from "./education/page";
// import Awards from "../components/carosole/index";
import Contact from "./contact/page";
import Projects from "./projects/page";
import ReactNAtiveProjects from "./reactNativeProjects/page";

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <Navbar />

      {/* Home Section - Introduction */}
      <section id="home">
        <Introduction />
      </section>

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Skills Section */}
      <section id="skills">
        <Skils />
      </section>

      {/* Projects Section - Combined both project components */}
      <section id="projects">
        <Projects />
        <ReactNAtiveProjects />
      </section>

      {/* Certificates Section */}
      <section id="certificates">
        <Certificates />
        {/* <Awards /> */}
      </section>

      {/* Education Section - Currently commented out */}
      {/* <section id="education">
        <Education />
      </section> */}

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}
