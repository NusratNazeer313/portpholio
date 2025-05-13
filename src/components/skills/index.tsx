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
    title: "React native",
    description: "Building scalable SPAs with TypeScript.",
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
    title: "Typescript",
    description: "Creating modern and responsive designs.",
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
    title: "Mobx state tree",
    description: "Developing backend services and APIs.",
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
    title: "AntD",
    description: "Handling NoSQL databases efficiently.",
    color: "#13AA52",
  },
  {
    image: "/mui.svg",
    percentage: 70,
    title: "Material UI",
    description: "Building reactive web applications.",
    color: "#FF3E00",
  },
  {
    image: "/css.svg",
    percentage: 70,
    title: "CSS",
    description: "Building reactive web applications.",
    color: "#FF3E00",
  },
];

const Skils = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center pb-20">
      <h1 className="text-2xl font-bold text-black flex items-center justify-center pt-20  ">
        Skills
      </h1>
      <div className="flex justify-center items-center">
        <div className="w-4 h-4 bg-gray-600 rounded-[50%]" />
        <div className="w-24 h-1 bg-orange-600" />
        <div className="w-4 h-4 bg-gray-600 rounded-[50%]" />
      </div>
      <div className="w-24 h-1 bg-gray-400 mb-20" />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 gap-x-0 place-items-center w-3/4">
        {Skills.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1, delay: index * 0.2 }}
            className="relative flex flex-col items-center justify-center p-6 w-[230px] h-[130px] rounded-md
            bg-gray-100 border-2 
           
            shadow-[inset_0_2px_3px_rgba(0,0,0,0.75)]"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full flex items-center justify-center mt-2"
            >
              <div className="bg-white p-4 rounded-full flex items-center justify-center">
                <Image
                  src={src.image}
                  width={50}
                  height={50}
                  color="#FFA500"
                  alt={`Skill ${index + 1}`}
                  className="object-cover rounded-full"
                />
              </div>
            </motion.div>
            <h2 className="text-base font-semibold text-black mt-2">
              {src.title}
            </h2>
            {/* <p className="text-sm text-black">{src.description}</p> */}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skils;
