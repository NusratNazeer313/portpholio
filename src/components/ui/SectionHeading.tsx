"use client";

import { motion } from "framer-motion";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  light?: boolean;
};

const SectionHeading = ({ title, subtitle, light }: SectionHeadingProps) => {
  return (
    <div className="w-full max-w-6xl mx-auto text-center mb-12 md:mb-16">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`text-xs sm:text-sm tracking-[0.25em] uppercase mb-3 font-medium ${
          light ? "text-ember-bright" : "text-ember"
        }`}
      >
        Portfolio
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        className={`font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight ${
          light ? "text-stone" : "text-ink"
        }`}
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto mt-4 h-[3px] w-16 origin-center rounded-full bg-ember"
      />
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.28 }}
          className={`mt-5 max-w-xl mx-auto text-sm sm:text-base leading-relaxed ${
            light ? "text-stone/70" : "text-ink/60"
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;
