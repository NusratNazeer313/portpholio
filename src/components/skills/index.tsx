"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Skills = [
  {
    image: "/js.svg",
    percentage: 90,
    title: "JavaScript",
    description: "Writing clean and efficient JS code.",
    color: "#FFCA28",
    className: "rounded-full",
  },
  {
    image: "/react.svg",
    percentage: 90,
    title: "React",
    description: "Building dynamic UI components with React.",
    color: "#53C1DE",
  },
  {
    image: "/react.svg",
    percentage: 70,
    title: "React Native",
    description: "Building mobile applications.",
    color: "#C3002F",
  },
  {
    image: "/next.svg",
    percentage: 80,
    title: "Next.js",
    description: "Developing fast and SEO-friendly web apps.",
    color: "#000000",
  },
  {
    image: "/typescript.svg",
    percentage: 90,
    title: "TypeScript",
    description: "Building scalable SPAs with TypeScript.",
    color: "#3178C6",
  },
  {
    image: "/redux.svg",
    percentage: 90,
    title: "Redux",
    description: "Managing global state efficiently.",
    color: "#764ABC",
  },
  {
    image: "/mobxstatetree.svg",
    percentage: 70,
    title: "MobX State Tree",
    description: "Alternative state management solution.",
    color: "#8CC84B",
  },
  {
    image: "/tailwind.svg",
    percentage: 90,
    title: "Tailwind CSS",
    description: "Creating modern and responsive designs.",
    color: "#44A8B3",
  },
  {
    image: "/bootstrap.svg",
    percentage: 80,
    title: "Bootstrap",
    description: "Quick and responsive styling.",
    color: "#563D7C",
    className: "rounded-full",
  },
  {
    image: "/antdesign.svg",
    percentage: 70,
    title: "Ant Design",
    description: "Enterprise-class UI design language.",
    color: "#13AA52",
  },
  {
    image: "/mui.svg",
    percentage: 70,
    title: "Material UI",
    description: "Google's Material Design components.",
    color: "#FF3E00",
  },
  {
    image: "/css.svg",
    percentage: 70,
    title: "CSS",
    description: "Styling web applications.",
    color: "#2965F1",
  },
];

const SkillsComponent = () => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center px-4 py-12 md:py-20">
      {/* Title Section */}
      <div className="w-full max-w-6xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold text-gray-900"
        >
          My Skills
        </motion.h1>

        {/* Decorative line under heading */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center items-center mt-2"
        >
          <div className="w-3 h-3 bg-gray-600 rounded-full" />
          <div className="w-16 h-1 bg-orange-500 mx-2" />
          <div className="w-3 h-3 bg-gray-600 rounded-full" />
        </motion.div>
        <div className="w-16 h-1 bg-gray-300 mb-10 md:mb-16 mx-auto" />
      </div>

      {/* Skills Grid Container */}
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {Skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)",
              }}
              className="flex flex-col items-center justify-center p-6 w-full h-[180px]
              bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all"
            >
              {/* Skill Icon */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4
                shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]"
              >
                <Image
                  src={skill.image}
                  width={40}
                  height={40}
                  alt={`${skill.title} icon`}
                  className={`object-contain w-10 h-10 ${
                    skill.className || ""
                  }`}
                  style={{ color: skill.color }}
                />
              </motion.div>

              {/* Skill Title */}
              <h2 className="text-base font-semibold text-gray-800 text-center mb-1">
                {skill.title}
              </h2>

              {/* Percentage Bar */}
              <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percentage}%` }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="h-full rounded-full"
                  style={{ backgroundColor: skill.color }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsComponent;
