"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const images = [
  { src: "/intro.jpg", label: "Introduction to Web" },
  { src: "/inter.jpg", label: "Intermediate Track" },
  { src: "/web.jpg", label: "Web Development" },
];

const Certificates = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center atmosphere-dark px-4 py-20 md:py-28">
      <SectionHeading
        title="Certificates & Awards"
        subtitle="SoloLearn certifications that reflect continuous learning in modern web technologies."
        light
      />

      <div className="w-full max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6">
          {images.map((item, index) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, y: 40, rotate: index % 2 === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-br from-ember/40 to-transparent opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500" />
              <div className="relative border border-white/10 bg-ink-soft p-3 overflow-hidden">
                <div className="overflow-hidden">
                  <Image
                    src={item.src}
                    width={400}
                    height={400}
                    alt={item.label}
                    className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="mt-3 text-center text-sm font-medium text-stone/70 group-hover:text-ember-bright transition-colors">
                  {item.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;
