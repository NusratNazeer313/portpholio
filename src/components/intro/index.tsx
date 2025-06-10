"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
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
    <div className="relative w-full min-h-screen flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8 xl:gap-12 px-4 sm:px-6 lg:px-8 py-8 lg:py-0">
      {/* Text Content Section */}
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 30 }}
        transition={{ duration: 1, delay: 1 }}
        className="w-full lg:w-1/2 max-w-2xl text-center lg:text-left order-2 lg:order-1 z-10"
      >
        {/* Main Greeting */}
        <h1 className="text-black font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl leading-tight">
          Hello! It is me
        </h1>

        {/* Name */}
        <h1 className="text-orange-500 font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl mt-2 leading-tight">
          Nusrat Nazeer
        </h1>

        {/* Typewriter Effect */}
        <motion.p
          key={index}
          className="text-black bg-clip-text text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold mt-4 min-h-[2rem] sm:min-h-[2.5rem] md:min-h-[3rem] lg:min-h-[3.5rem]"
        >
          {displayText}|
        </motion.p>

        {/* Description */}
        <p className="text-black text-sm sm:text-base md:text-lg lg:text-base xl:text-lg mt-4 lg:mt-6 max-w-xl mx-auto lg:mx-0 leading-relaxed">
          Building modern, high-performance web and mobile applications with{" "}
          <span className="hidden sm:inline lg:inline">
            <br />
          </span>
          React.js, Next.js, and React Native—turning ideas into seamless
          digital experiences.
        </p>

        {/* Download CV Button */}
        <a href="/Nusratnazeer.pdf" download="cv">
          <button className="mt-6 lg:mt-8 relative px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 text-white font-bold text-sm sm:text-base lg:text-lg rounded-full border-2 transition-all duration-300 ease-in-out transform bg-orange-500 hover:bg-orange-600 hover:scale-105 lg:hover:scale-110 hover:shadow-[0_0_30px_rgba(255,165,0,0.7)] sm:hover:shadow-[0_0_40px_rgba(255,165,0,0.7)] focus:outline-none focus:ring-4 focus:ring-orange-300">
            Download CV
          </button>
        </a>
      </motion.div>

      {/* Lottie Animation Section */}
      <div className="w-full lg:w-1/2 flex justify-center items-center order-1 lg:order-2">
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative"
          >
            <DotLottieReact
              src="https://lottie.host/6db9bb2e-11fc-468f-bcf5-0d21d86b5ccf/xCcfIA5arb.lottie"
              loop
              autoplay
              style={{
                width: "100%",
                height: "auto",
                filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.1))",
              }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
