"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const Skills = [
  {
    image: "/js.svg",
    percentage: 90,
    title: "JavaScript",
    color: "#FFCA28",
    className: "rounded-full",
  },
  {
    image: "/react.svg",
    percentage: 90,
    title: "React",
    color: "#53C1DE",
  },
  {
    image: "/react.svg",
    percentage: 70,
    title: "React Native",
    color: "#C3002F",
  },
  {
    image: "/next.svg",
    percentage: 80,
    title: "Next.js",
    color: "#000000",
  },
  {
    image: "/typescript.svg",
    percentage: 90,
    title: "TypeScript",
    color: "#3178C6",
  },
  {
    image: "/redux.svg",
    percentage: 90,
    title: "Redux",
    color: "#764ABC",
  },
  {
    image: "/mobxstatetree.svg",
    percentage: 70,
    title: "MobX State Tree",
    color: "#8CC84B",
  },
  {
    image: "/tailwind.svg",
    percentage: 90,
    title: "Tailwind CSS",
    color: "#44A8B3",
  },
  {
    image: "/bootstrap.svg",
    percentage: 80,
    title: "Bootstrap",
    color: "#563D7C",
    className: "rounded-full",
  },
  {
    image: "/antdesign.svg",
    percentage: 70,
    title: "Ant Design",
    color: "#13AA52",
  },
  {
    image: "/mui.svg",
    percentage: 70,
    title: "Material UI",
    color: "#FF3E00",
  },
  {
    image: "/css.svg",
    percentage: 70,
    title: "CSS",
    color: "#2965F1",
  },
];

const SkillsComponent = () => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center atmosphere-dark px-4 py-20 md:py-28">
      <SectionHeading
        title="My Skills"
        subtitle="Tools and technologies I use to ship polished interfaces."
        light
      />

      {/* Marquee of skill names */}
      <div className="w-full overflow-hidden mb-12 border-y border-white/5 py-3">
        <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
          {[...Skills, ...Skills].map((skill, i) => (
            <span
              key={`${skill.title}-${i}`}
              className="text-stone/30 font-display text-sm tracking-widest uppercase"
            >
              {skill.title} ·
            </span>
          ))}
        </div>
      </div>

      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {Skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: index * 0.04,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col items-center justify-center p-5 sm:p-6 min-h-[160px]
                bg-white/[0.03] border border-white/10 hover:border-ember/50
                transition-colors duration-300 backdrop-blur-sm"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${skill.color}22, transparent 70%)`,
                }}
              />

              <motion.div
                whileHover={{ rotate: [0, -8, 8, 0], scale: 1.08 }}
                transition={{ duration: 0.45 }}
                className="relative w-14 h-14 flex items-center justify-center mb-3"
              >
                <Image
                  src={skill.image}
                  width={40}
                  height={40}
                  alt={`${skill.title} icon`}
                  className={`object-contain w-10 h-10 ${skill.className || ""}`}
                />
              </motion.div>

              <h3 className="relative text-sm font-semibold text-stone text-center mb-3">
                {skill.title}
              </h3>

              <div className="relative w-full bg-white/10 h-1 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percentage}%` }}
                  transition={{ duration: 1, delay: 0.15 + index * 0.04 }}
                  viewport={{ once: true }}
                  className="h-full"
                  style={{ backgroundColor: skill.color }}
                />
              </div>
              <p className="relative mt-2 text-[11px] text-stone/40 font-medium">
                {skill.percentage}%
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsComponent;
