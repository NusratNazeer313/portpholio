"use client";

import React, { useState } from "react";
import ReactPlayer from "react-player";
import { MdClose } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import ClientOnly from "@/components/ui/ClientOnly";

const ReactNativeProjects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Recipe App",
      description:
        "A mobile application for discovering and saving recipes with user authentication and cloud synchronization.",
      technologies: "React Native, Firebase, Redux",
      videoUrl: "/videos/recipe.mp4",
    },
    {
      id: 2,
      title: "Fitness Tracker",
      description:
        "Workout tracking app with progress charts and exercise demonstrations.",
      technologies: "React Native, MongoDB, Node.js",
      videoUrl: "/videos/candy.mp4",
    },
    {
      id: 3,
      title: "E-commerce App",
      description:
        "Mobile shopping application with product catalog, cart, and payment integration.",
      technologies: "React Native, Stripe, Express.js",
      videoUrl: "/videos/journey.mp4",
    },
    {
      id: 4,
      title: "Journey App",
      description:
        "Travel companion app with itineraries and offline maps.",
      technologies: "React Native, Stripe, Express.js",
      videoUrl: "/videos/journey.mp4",
    },
    {
      id: 5,
      title: "Candy Store",
      description:
        "Playful commerce experience with smooth product browsing.",
      technologies: "React Native, Stripe, Express.js",
      videoUrl: "/videos/candy.mp4",
    },
    {
      id: 6,
      title: "Mobile Shop",
      description:
        "Catalog, cart, and checkout flow built for mobile-first shopping.",
      technologies: "React Native, Stripe, Express.js",
      videoUrl: "/videos/journey.mp4",
    },
  ];

  const handleProjectClick = (index: number) => {
    setModalIndex(index);
    setIsModalOpen(true);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center pb-8 atmosphere px-4 pt-8 md:pt-12">
      <SectionHeading
        title="React Native Projects"
        subtitle="Mobile experiences with motion-rich demos — hover to preview."
      />

      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.07,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative aspect-video bg-ink overflow-hidden cursor-pointer border border-ink/10 group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => handleProjectClick(index)}
            >
              <ClientOnly
                fallback={<div className="w-full h-full bg-ink" aria-hidden />}
              >
                <ReactPlayer
                  url={project.videoUrl}
                  controls={false}
                  width="100%"
                  height="100%"
                  playing={hoveredIndex === index}
                  muted
                  loop
                />
              </ClientOnly>

              <div
                className={`absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent transition-opacity duration-400 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-80"
                }`}
              />

              <div className="absolute bottom-0 left-0 right-0 p-4 text-stone translate-y-1 group-hover:translate-y-0 transition-transform duration-400">
                <h3 className="font-display font-bold text-lg">{project.title}</h3>
                <p className="text-xs text-stone/70 mt-1 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                  {project.description}
                </p>
                <span className="inline-block mt-2 text-xs font-semibold text-ember-bright opacity-0 group-hover:opacity-100 transition-opacity">
                  View details →
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-ink/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-8"
              onClick={() => setIsModalOpen(false)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="bg-stone max-w-5xl w-full overflow-hidden flex flex-col md:flex-row shadow-lift"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="md:w-1/2 aspect-video bg-ink">
                  <ReactPlayer
                    url={projects[modalIndex].videoUrl}
                    controls
                    width="100%"
                    height="100%"
                    playing
                  />
                </div>

                <div className="md:w-1/2 p-6 sm:p-8 overflow-y-auto">
                  <div className="flex justify-between items-start gap-4">
                    <h2 className="font-display text-2xl font-bold text-ink">
                      {projects[modalIndex].title}
                    </h2>
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="text-mist hover:text-ink transition-colors"
                      aria-label="Close"
                    >
                      <MdClose size={24} />
                    </button>
                  </div>

                  <div className="mt-5 space-y-4">
                    <div>
                      <h3 className="text-xs tracking-widest uppercase text-ember font-semibold">
                        Description
                      </h3>
                      <p className="text-ink/70 mt-1.5 text-sm leading-relaxed">
                        {projects[modalIndex].description}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xs tracking-widest uppercase text-ember font-semibold">
                        Technologies
                      </h3>
                      <p className="text-ink/70 mt-1.5 text-sm">
                        {projects[modalIndex].technologies}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-6">
                      {projects.map((_, index) => (
                        <button
                          key={index}
                          className={`h-1.5 transition-all duration-300 ${
                            index === modalIndex
                              ? "w-8 bg-ember"
                              : "w-3 bg-ink/20 hover:bg-ink/40"
                          }`}
                          onClick={() => setModalIndex(index)}
                          aria-label={`View project ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ReactNativeProjects;
