"use client";
import React, { useState } from "react";
import ReactPlayer from "react-player";
import { MdClose } from "react-icons/md";

const ReactNativeProjects = () => {
  //   const [activeIndex, setActiveIndex] = useState<number | null>(null);
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
      id: 3,
      title: "E-commerce App",
      description:
        "Mobile shopping application with product catalog, cart, and payment integration.",
      technologies: "React Native, Stripe, Express.js",
      videoUrl: "/videos/journey.mp4",
    },
    {
      id: 4,
      title: "E-commerce App",
      description:
        "Mobile shopping application with product catalog, cart, and payment integration.",
      technologies: "React Native, Stripe, Express.js",
      videoUrl: "/videos/journey.mp4",
    },
    {
      id: 5,
      title: "E-commerce App",
      description:
        "Mobile shopping application with product catalog, cart, and payment integration.",
      technologies: "React Native, Stripe, Express.js",
      videoUrl: "/videos/journey.mp4",
    },
    {
      id: 6,
      title: "E-commerce App",
      description:
        "Mobile shopping application with product catalog, cart, and payment integration.",
      technologies: "React Native, Stripe, Express.js",
      videoUrl: "/videos/journey.mp4",
    },
  ];

  const handleProjectClick = (index: number) => {
    setModalIndex(index);
    setIsModalOpen(true);
  };

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center pb-20">
      <h1 className="text-2xl font-bold text-black flex items-center justify-center pt-20">
        React Native Projects
      </h1>
      <div className="flex justify-center items-center">
        <div className="w-4 h-4 bg-gray-600 rounded-[50%]" />
        <div className="w-24 h-1 bg-orange-600" />
        <div className="w-4 h-4 bg-gray-600 rounded-[50%]" />
      </div>
      <div className="w-24 h-1 bg-gray-400 mb-6" />

      <div className="w-full max-w-6xl px-4">
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => handleProjectClick(index)}
            >
              <ReactPlayer
                url={project.videoUrl}
                controls
                width="100%"
                height="100%"
                playing={hoveredIndex === index}
              />

              {/* Hover Overlay */}
              {hoveredIndex === index && (
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-orange-500/90 to-transparent transition-all duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-bold text-lg">{project.title}</h3>
                    <p className="text-sm line-clamp-2">
                      {project.description}
                    </p>
                    <button className="mt-2 text-sm font-semibold underline">
                      View Details
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-20">
            <div className="bg-white rounded-lg max-w-6xl w-full max-h-[100vh] overflow-hidden flex flex-col md:flex-row">
              {/* Video Section */}
              <div className="md:w-1/2 aspect-video bg-black">
                <ReactPlayer
                  url={projects[modalIndex].videoUrl}
                  controls
                  width="100%"
                  height="100%"
                  playing={true}
                />
              </div>

              {/* Details Section */}
              <div className="md:w-1/2 p-6 overflow-y-auto">
                <div className="flex justify-between items-start">
                  <h2 className="text-2xl font-bold text-gray-800">
                    {projects[modalIndex].title}
                  </h2>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <MdClose size={24} />
                  </button>
                </div>

                <div className="mt-4 space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-700">
                      Description:
                    </h3>
                    <p className="text-gray-600 mt-1">
                      {projects[modalIndex].description}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-700">
                      Technologies Used:
                    </h3>
                    <p className="text-gray-600 mt-1">
                      {projects[modalIndex].technologies}
                    </p>
                  </div>

                  <div className="flex space-x-2 mt-6">
                    {projects.map((_, index) => (
                      <button
                        key={index}
                        className={`w-3 h-3 rounded-full ${
                          index === modalIndex ? "bg-orange-600" : "bg-gray-300"
                        }`}
                        onClick={() => setModalIndex(index)}
                        aria-label={`View project ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReactNativeProjects;
