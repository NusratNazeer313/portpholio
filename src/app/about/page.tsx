"use client";

import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const About = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-slate-100 px-4 py-8 md:py-12">
      <h1 className="text-2xl md:text-3xl lg:text-4xl pt-4 md:pt-10 font-bold text-center">
        About Me
      </h1>

      {/* Decorative line under heading */}
      <div className="flex justify-center items-center mt-2">
        <div className="w-3 h-3 md:w-4 md:h-4 bg-gray-600 rounded-full" />
        <div className="w-16 h-1 md:w-24 md:h-1 bg-orange-600" />
        <div className="w-3 h-3 md:w-4 md:h-4 bg-gray-600 rounded-full" />
      </div>
      <div className="w-16 h-1 md:w-24 md:h-1 bg-gray-400 mb-6 md:mb-10" />

      {/* Main content */}
      <div className="flex flex-col lg:flex-row items-center justify-center bg-slate-100 w-full max-w-6xl mx-auto gap-6 md:gap-8 lg:gap-12">
        {/* Lottie Animation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          className="w-full lg:w-1/2 h-[300px] sm:h-[350px] md:h-[400px] flex items-center justify-center"
        >
          <DotLottieReact
            src="https://lottie.host/7ac1bdd2-9c91-4a0e-b8ee-35bf751c43f8/26GAkCpa4D.lottie"
            loop
            autoplay
            style={{ width: "100%", height: "100%" }}
          />
        </motion.div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 h-auto lg:h-[400px] text-center lg:text-left flex flex-col justify-center px-2 sm:px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">
            Nusrat Nazeer
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Frontend Developer | Bahawalpur
          </p>
          <p className="text-gray-600 text-sm md:text-base">
            Experience: 2 Years
          </p>
          <p className="text-gray-600 text-sm md:text-base">
            Company: Enigmatix
          </p>

          <p className="mt-2 md:mt-4 text-gray-700 text-sm md:text-base">
            Hi, I m Nusrat! A Frontend Developer with expertise in React.js,
            Next.js and React Native. I specialize in building modern,
            high-performance web and mobile applications with a focus on
            seamless user experiences.
          </p>

          {/* Contact Links */}
          <div className="mt-4 md:mt-6 space-y-1 md:space-y-2">
            <p className="text-gray-700 text-sm md:text-base">
              <a
                href="https://www.linkedin.com/in/your-linkedin-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-semibold hover:underline"
              >
                LinkedIn:
              </a>{" "}
              Nusrat Nazeer
            </p>
            <p className="text-gray-700 text-sm md:text-base">
              <a
                href="https://github.com/NusratNazeer313"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 font-semibold hover:underline"
              >
                GitHub:
              </a>{" "}
              NusratNazeer313
            </p>
            <p className="text-gray-700 text-sm md:text-base">
              <a
                href="mailto:your-email@example.com"
                className="text-red-600 font-semibold hover:underline"
              >
                Email:
              </a>{" "}
              your-email@example.com
            </p>
          </div>

          {/* Download CV Buttons */}
          <div className="mt-4 md:mt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 md:gap-4">
            <a href="/Nusratnazeer.pdf" download="cv">
              <button className="px-4 py-1.5 md:px-6 md:py-2 text-white font-bold text-xs md:text-sm rounded-full border-2 transition-all duration-300 ease-in-out transform bg-orange-500 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,165,0,0.5)]">
                Download CV
              </button>
            </a>
            <a href="/Nusratnazeer.pdf" download="cv">
              <button className="px-4 py-1.5 md:px-6 md:py-2 text-black font-bold text-xs md:text-sm rounded-full border-2 border-black transition-all duration-300 ease-in-out transform bg-slate-100 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,0,0,0.1)]">
                Download CV
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
