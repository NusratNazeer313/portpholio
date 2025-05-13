"use client";
import Navbar from "@/components/navbar";
import Introduction from "@/components/intro";
import About from "./about/page";
import Skils from "@/components/skills";
import Certificates from "./certificates/pages";
import Education from "./education/page";
import Awards from "../components/carosole/index";
import Contact from "./contact/page";
import Projects from "./projects/page";

export default function Home() {
  return (
    <main className="w-full  overflow-hidden">
      <Navbar />
      <Introduction />
      <About />
      <Skils />
      <Certificates />
      <Projects />
      <Awards />
      <Education />
      <Contact />
    </main>
  );
}
