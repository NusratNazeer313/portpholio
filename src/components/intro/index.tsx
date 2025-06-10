"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
});

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
    <div className="relative w-full min-h-screen flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8 px-4 sm:px-6 lg:px-8 py-8 lg:py-0">
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 30 }}
        transition={{ duration: 1, delay: 1 }}
        className="w-full lg:w-1/2 max-w-2xl text-center lg:text-left order-2 lg:order-1 z-10"
      >
        {/* Main heading - responsive text sizes */}
        <h1 className="text-black font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl leading-tight">
          Hello! It is me
        </h1>

        {/* Name - responsive text sizes */}
        <h1 className="text-orange-500 font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl mt-2 leading-tight">
          Nusrat Nazeer
        </h1>

        {/* Typewriter effect - responsive text sizes */}
        <motion.p
          key={index}
          className="text-black text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold mt-4 min-h-[2rem] sm:min-h-[2.5rem] md:min-h-[3rem]"
        >
          {displayText}|
        </motion.p>

        {/* Description - responsive text and spacing */}
        <p className="text-black text-sm sm:text-base md:text-lg mt-4 lg:mt-5 max-w-xl mx-auto lg:mx-0 leading-relaxed">
          Building modern, high-performance web and mobile applications with{" "}
          <span className="hidden sm:inline">
            <br />
          </span>
          React.js, Next.js, and React Native—turning ideas into seamless
          digital experiences.
        </p>

        {/* Download button - responsive sizing */}
        <a href="/Nusratnazeer.pdf" download="cv">
          <button className="mt-6 lg:mt-8 px-4 sm:px-6 py-2 sm:py-3 text-white font-bold text-sm sm:text-base rounded-full border-2 bg-orange-500 hover:bg-orange-600 hover:scale-105 lg:hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl">
            Download CV
          </button>
        </a>
      </motion.div>

      {/* Spline 3D model container - responsive sizing and positioning */}
      <div className="w-full lg:w-1/2 h-64 sm:h-80 md:h-96 lg:h-screen max-h-[600px] lg:max-h-none order-1 lg:order-2 flex items-center justify-center">
        <div className="w-full h-full max-w-md lg:max-w-none">
          <Spline scene="https://prod.spline.design/nkmDMXXRASgQL2nP/scene.splinecode" />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
