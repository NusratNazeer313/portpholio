"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
// import ImageSession from "@/components/image";
// import ParticlesBackground from "@/components/background/page";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
const Introduction = () => {
  const role = "React.js, React Native, Next.js Developer";
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setIndex(0);
        }
      }, 100);
    } else {
      timeout = setTimeout(() => {
        setDisplayText((prev) => role.slice(0, prev.length + 1));
        if (displayText.length === role.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      }, 150);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting]);

  return (
    <div className="relative w-[100%] h-screen flex  md:flex-row items-center  gap-8 ">
      {/* <ParticlesBackground /> */}

      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 30 }}
        transition={{ duration: 1, delay: 1 }}
        className=" rounded-lg w-full pl-20  pb-32 relative z-10"
      >
        <h1 className="text-black font-extrabold text-4xl">Hello! It is me</h1>
        <h1 className="text-orange-500 font-extrabold text-5xl">
          Nusrat Nazeer
        </h1>
        <motion.p
          key={index}
          className="text-black  bg-clip-text text-2xl font-bold mt-4"
        >
          {displayText}|
        </motion.p>
        <p className="text-black mt-5">
          Building modern, high-performance web and mobile applications with{" "}
          <br />
          React.js, Next.js, and React Native—turning ideas into seamless
          digital experiences.
        </p>
        <a href="/Nusratnazeer.pdf" download="cv">
          <button className="mt-5 relative  px-2 py-2 text-white font-bold text-sm rounded-full  border-2 transition-all duration-300 ease-in-out transform bg-orange-500 hover:scale-110 hover:shadow-[0_0_40px_rgba(255,255,0,0.7)] ">
            Download CV
          </button>
        </a>
      </motion.div>

      <DotLottieReact
        src="https://lottie.host/2297cea6-f45e-44dd-94f4-ded3d0af2d32/EhtfWq39dr.lottie"
        loop
        autoplay
      />
    </div>
  );
};

export default Introduction;
