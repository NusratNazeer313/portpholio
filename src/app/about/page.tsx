"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const facts = [
  { label: "Role", value: "Frontend Developer" },
  { label: "Location", value: "Bahawalpur" },
  { label: "Experience", value: "2 Years" },
  { label: "Company", value: "Enigmatix" },
];

const About = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center atmosphere px-4 py-20 md:py-28">
      <SectionHeading
        title="About Me"
        subtitle="A frontend developer focused on polished interfaces and performant products."
      />

      <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-6xl mx-auto gap-10 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-1/2 flex items-center justify-center"
        >
          <div className="relative w-full max-w-sm aspect-[4/5]">
            <div className="absolute top-4 left-4 right-[-12px] bottom-[-12px] bg-ember/20" />
            <div className="relative h-full w-full overflow-hidden border border-ink/10 bg-stone-deep shadow-soft">
              <Image
                src="/professional.png"
                alt="Nusrat Nazeer — Frontend Developer"
                fill
                sizes="(max-width: 1024px) 90vw, 420px"
                className="object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-5 left-6 right-6 bg-ink text-stone px-5 py-3 shadow-lift">
              <p className="font-display font-bold text-sm sm:text-base">
                Nusrat Nazeer
              </p>
              <p className="text-ember-bright text-xs mt-0.5 tracking-wide">
                Frontend Developer
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-1/2 text-center lg:text-left pt-8 lg:pt-0"
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold text-ink">
            Building interfaces that feel effortless
          </h3>
          <p className="mt-2 text-ember font-medium text-sm md:text-base">
            React · Next.js · React Native
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4">
            {facts.map((fact, i) => (
              <motion.div
                key={fact.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
                className="border-l-2 border-ember/40 pl-3 text-left"
              >
                <p className="text-[11px] tracking-wider uppercase text-mist">
                  {fact.label}
                </p>
                <p className="text-sm md:text-base font-semibold text-ink mt-0.5">
                  {fact.value}
                </p>
              </motion.div>
            ))}
          </div>

          <p className="mt-6 text-ink/65 text-sm md:text-base leading-relaxed">
            Hi, I&apos;m Nusrat — a frontend developer specializing in React.js,
            Next.js, and React Native. I build modern, high-performance web and
            mobile applications with a sharp focus on seamless user experiences.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-sm">
            <a
              href="https://github.com/NusratNazeer313"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink font-medium hover:text-ember transition-colors underline underline-offset-4 decoration-ember/30"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/your-linkedin-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink font-medium hover:text-ember transition-colors underline underline-offset-4 decoration-ember/30"
            >
              LinkedIn
            </a>
            <a
              href="mailto:your-email@example.com"
              className="text-ink font-medium hover:text-ember transition-colors underline underline-offset-4 decoration-ember/30"
            >
              Email
            </a>
          </div>

          <div className="mt-8">
            <a href="/Nusratnazeer.pdf" download="cv">
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 text-white font-semibold text-sm bg-ember hover:bg-ember-bright transition-colors duration-300"
              >
                Download CV
              </motion.button>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
