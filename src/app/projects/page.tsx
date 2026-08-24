"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const featured = {
  title: "Finance Management",
  tag: "Personal · Full Stack",
  description:
    "A full-stack finance management platform to track income, expenses, budgets, and savings goals — with secure auth, live dashboards, and clear spending insights.",
  image: "/Home.jpg",
  stack: [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Express",
    "MongoDB",
    "Tailwind CSS",
  ],
  highlights: [
    "Expense & income tracking",
    "Budget planning & goals",
    "Auth & protected routes",
    "Analytics dashboard",
  ],
};

const projects = [
  {
    image: "/Food.png",
    title: "Food Platform",
    skill: "HTML, CSS, Tailwind CSS, React.js, Next.js",
  },
  {
    image: "/practice.jpg",
    title: "Practice Hub",
    skill: "HTML, CSS, Tailwind CSS, React.js, Next.js",
  },
  {
    image: "/practice.jpg",
    title: "Dashboard UI",
    skill: "HTML, CSS, Tailwind CSS, React.js, Next.js",
  },
  {
    image: "/practice.jpg",
    title: "Landing Page",
    skill: "HTML, CSS, Tailwind CSS, React.js, Next.js",
  },
  {
    image: "/practice.jpg",
    title: "Commerce Flow",
    skill: "HTML, CSS, Tailwind CSS, React.js, Next.js",
  },
  {
    image: "/practice.jpg",
    title: "Portfolio Site",
    skill: "HTML, CSS, Tailwind CSS, React.js, Next.js",
  },
];

const Projects = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center pb-16 atmosphere px-4 py-16 md:py-24">
      <SectionHeading
        title="Projects"
        subtitle="Personal full-stack work and selected React / Next.js builds."
      />

      {/* Featured: Finance Management */}
      <motion.article
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        className="group w-full max-w-6xl mx-auto mb-12 md:mb-16 overflow-hidden border border-ink/10 bg-ink text-stone"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative h-[240px] sm:h-[300px] lg:h-full min-h-[280px] overflow-hidden">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/30 to-transparent lg:bg-gradient-to-t lg:from-ink/60 lg:via-transparent" />
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute top-0 left-0 right-0 h-[3px] origin-left bg-ember"
            />
          </div>

          <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
            <p className="text-[11px] tracking-[0.25em] uppercase text-ember-bright font-medium mb-3">
              {featured.tag}
            </p>
            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
              {featured.title}
            </h3>
            <p className="mt-4 text-stone/65 text-sm sm:text-base leading-relaxed">
              {featured.description}
            </p>

            <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2">
              {featured.highlights.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.06 }}
                  className="flex items-center gap-2 text-sm text-stone/80"
                >
                  <span className="w-1.5 h-1.5 bg-ember shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              {featured.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-[11px] tracking-wide uppercase border border-white/10 px-2.5 py-1 text-stone/70"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.article>

      <div className="w-full max-w-6xl mx-auto mb-6">
        <motion.h3
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-xl sm:text-2xl font-bold text-ink"
        >
          More React.js work
        </motion.h3>
      </div>

      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.65,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden border border-ink/10 bg-stone-deep/40"
            >
              <div className="relative h-[220px] overflow-hidden">
                <Image
                  src={project.image}
                  width={480}
                  height={360}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-700 ease-expo group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
              </div>

              <div className="absolute inset-x-0 bottom-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-[11px] tracking-widest uppercase text-ember-bright mb-1">
                  Web App
                </p>
                <h3 className="font-display text-xl font-bold text-stone">
                  {project.title}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-stone/70 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
                  {project.skill}
                </p>
              </div>

              <div className="absolute top-0 left-0 h-[2px] w-0 group-hover:w-full bg-ember transition-all duration-500" />
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
