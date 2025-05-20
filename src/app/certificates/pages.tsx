"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const images = ["/intro.jpg", "/inter.jpg", "/web.jpg"];

const Certificates = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center mt-10 pt-20 bg-gray-100 pb-20 px-4">
      {/* Title Section - Made responsive */}
      <h1 className="flex items-center justify-center text-3xl sm:text-4xl font-bold text-black">
        Certificates & Awards
      </h1>
      <div className="flex justify-center items-center">
        <div className="w-3 sm:w-4 h-3 sm:h-4 bg-gray-600 rounded-full" />
        <div className="w-24 sm:w-40 h-1 bg-orange-600 mx-2" />
        <div className="w-3 sm:w-4 h-3 sm:h-4 bg-gray-600 rounded-full" />
      </div>
      <div className="w-24 sm:w-36 h-1 bg-gray-400" />

      {/* Description - Made responsive */}
      <h1 className="w-full sm:w-3/4 md:w-1/2 text-center pt-6 sm:pt-10 pb-6 sm:pb-10 text-sm sm:text-base font-semibold">
        Successfully completing certificates from SoloLearn has strengthened my
        skills in web development and modern technologies. These certifications
        showcase my dedication to continuous learning and professional growth.
      </h1>

      {/* Lottie Animation - Made responsive */}
      <div className="relative w-full flex justify-center">
        <DotLottieReact
          src="https://lottie.host/09833cba-123f-4342-beff-4677d2357248/oEsUElBaGm.lottie"
          loop
          autoplay
          style={{
            position: "absolute",
            backgroundColor: "transparent",
            zIndex: 1,
            width: "100%",
            maxWidth: "800px",
            height: "auto",
          }}
        />

        {/* Certificates Grid - Made responsive */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full max-w-[1000px] z-10">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1, delay: index * 0.5 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              animate={{
                width:
                  hoveredIndex === index
                    ? ["280px", "360px", "340px"]
                    : ["280px", "280px", "280px"],
                height:
                  hoveredIndex === index
                    ? ["280px", "360px", "340px"]
                    : ["280px", "280px", "280px"],
              }}
              className="relative flex items-center justify-center p-4 bg-orange-500 border-2 rounded-md shadow-[inset_0_6px_14px_rgba(0,0,0,0.75)] w-[280px] h-[280px] sm:w-[280px] sm:h-[280px]"
            >
              <Image
                src={src}
                width={260}
                height={260}
                alt={`Certificate ${index + 1}`}
                className="w-full h-full object-cover rounded-md"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;
