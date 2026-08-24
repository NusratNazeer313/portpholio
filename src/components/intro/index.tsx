"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import ParticlesBackground from "@/components/background/page";

const roles = [
  "React.js Developer",
  "Next.js Engineer",
  "React Native Builder",
];

const stack = [
  "React",
  "Next.js",
  "TypeScript",
  "React Native",
  "Redux",
  "Tailwind",
  "Node.js",
  "MongoDB",
];

const name = "Nusrat Nazeer";
const ease = [0.16, 1, 0.3, 1] as const;

const Introduction = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 90, damping: 22 });
  const smoothY = useSpring(mouseY, { stiffness: 90, damping: 22 });
  const photoX = useTransform(smoothX, [-0.5, 0.5], [-8, 8]);
  const photoY = useTransform(smoothY, [-0.5, 0.5], [-6, 6]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const current = roles[roleIndex];
    const speed = isDeleting ? 36 : 80;
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const next = current.slice(0, displayText.length + 1);
        setDisplayText(next);
        if (next === current) setTimeout(() => setIsDeleting(true), 1400);
      } else {
        const next = current.slice(0, displayText.length - 1);
        setDisplayText(next);
        if (next.length === 0) {
          setIsDeleting(false);
          setRoleIndex((i) => (i + 1) % roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex, mounted]);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={onMove}
      className="relative w-full min-h-[85svh] overflow-hidden atmosphere-dark grain flex flex-col"
    >
      {/* Decorations — must stay absolute (do not take layout space) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ParticlesBackground />
        <div className="hero-grid absolute inset-0 opacity-60" />
        <div
          className="orb absolute top-0 left-0 w-64 h-64 rounded-full blur-3xl opacity-40"
          style={{
            background:
              "radial-gradient(circle, rgba(232,93,4,0.5) 0%, transparent 70%)",
          }}
        />
        <div
          className="orb absolute bottom-0 right-0 w-72 h-72 rounded-full blur-3xl opacity-25"
          style={{
            background:
              "radial-gradient(circle, rgba(255,122,26,0.4) 0%, transparent 70%)",
            animationDelay: "-5s",
          }}
        />
      </div>

      {/* Real content — taller hero, content vertically centered */}
      <div className="atmosphere-content relative z-10 flex-1 flex items-center mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10 pt-20 lg:pt-24 pb-10">
        <div className="flex w-full flex-col-reverse lg:flex-row items-center gap-8 lg:gap-14">
          {/* Text */}
          <div className="w-full lg:flex-1 text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
              className="inline-flex items-center gap-2 text-ember-bright text-[11px] sm:text-xs tracking-[0.28em] uppercase font-medium mb-3"
            >
              <span className="block h-px w-7 bg-ember" />
              Frontend Developer
            </motion.p>

            <h1 className="font-display font-extrabold tracking-tight leading-[0.95]">
              <motion.span
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease }}
                className="block text-stone/50 text-xl sm:text-2xl md:text-3xl mb-2"
              >
                Hello, I&apos;m
              </motion.span>
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] shimmer-text">
                {name.split("").map((char, i) => (
                  <motion.span
                    key={`${char}-${i}`}
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.08 + i * 0.028, ease }}
                    className="inline-block"
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="mt-4 text-base sm:text-lg md:text-xl font-medium text-stone/90 min-h-[1.75rem]"
            >
              {displayText}
              <span className="cursor-blink text-ember-bright">|</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.5, ease }}
              className="mt-4 text-stone/55 text-sm sm:text-base max-w-md mx-auto lg:mx-0 leading-relaxed"
            >
              High-performance web & mobile apps with React, Next.js, and React
              Native.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.5, ease }}
              className="mt-7 flex flex-wrap items-center justify-center lg:justify-start gap-3"
            >
              <a href="/Nusratnazeer.pdf" download="cv">
                <motion.button
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-6 py-3 text-ink font-semibold text-sm bg-ember hover:bg-ember-bright transition-colors"
                >
                  Download CV
                </motion.button>
              </a>
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-6 py-3 text-stone font-semibold text-sm border border-stone/25 hover:border-ember hover:text-ember-bright transition-colors"
              >
                View work →
              </motion.button>
            </motion.div>
          </div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease }}
            style={{ x: photoX, y: photoY }}
            className="relative shrink-0 w-[180px] sm:w-[220px] md:w-[260px] lg:w-[300px] aspect-[4/5]"
          >
            <div className="absolute -inset-2 border border-ember/30" />
            <div className="absolute -inset-1 border border-stone/10" />
            <div
              className="absolute -inset-4 blur-2xl opacity-50 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(232,93,4,0.45) 0%, transparent 70%)",
              }}
            />
            <div className="relative h-full w-full overflow-hidden border border-stone/10 bg-ink-soft">
              <Image
                src="/profile.jpeg"
                alt="Nusrat Nazeer"
                fill
                priority
                sizes="300px"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Tech ticker */}
      <div className="atmosphere-content relative z-10 mt-auto border-t border-white/5 overflow-hidden py-3 bg-ink/50">
        <div className="marquee-track-fast flex w-max gap-8 whitespace-nowrap">
          {[...stack, ...stack, ...stack, ...stack].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="text-[10px] sm:text-[11px] tracking-[0.22em] uppercase text-stone/35 font-medium"
            >
              <span className="inline-block w-1 h-1 bg-ember mr-2 align-middle" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Introduction;
