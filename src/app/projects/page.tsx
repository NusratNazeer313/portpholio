"use client";
import Image from "next/image";

const Skills = [
  { image: "/Food.png", skill: "HTML, CSS, Tailwind CSS, React.js, Next.js" },
  {
    image: "/practice.jpg",
    skill: "HTML, CSS, Tailwind CSS, React.js, Next.js",
  },
  {
    image: "/practice.jpg",
    skill: "HTML, CSS, Tailwind CSS, React.js, Next.js",
  },
  {
    image: "/practice.jpg",
    skill: "HTML, CSS, Tailwind CSS, React.js, Next.js",
  },
  {
    image: "/practice.jpg",
    skill: "HTML, CSS, Tailwind CSS, React.js, Next.js",
  },
  {
    image: "/practice.jpg",
    skill: "HTML, CSS, Tailwind CSS, React.js, Next.js",
  },
];

const Projects = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center pb-20">
      <h1 className="text-2xl font-bold text-black flex items-center justify-center pt-20">
        React js Projects
      </h1>
      <div className="flex justify-center items-center">
        <div className="w-4 h-4 bg-gray-600 rounded-[50%]" />
        <div className="w-24 h-1 bg-orange-600" />
        <div className="w-4 h-4 bg-gray-600 rounded-[50%]" />
      </div>
      <div className="w-24 h-1 bg-gray-400 mb-6" />

      {/* Scrollable Container with Vertical & Horizontal Scrolling */}
      <div className="w-[1000px] h-[500px]">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 place-items-center">
          {Skills.map((src, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center justify-center min-w-[320px] h-[230px] rounded-md bg-gray-100 border-2 shadow-[inset_0_2px_3px_rgba(0,0,0,0.75)] overflow-hidden"
            >
              {/* Scrollable Image */}
              <div className="h-[400px] w-full overflow-y-auto">
                <Image
                  src={src.image}
                  width={320}
                  height={400}
                  alt={`Skill ${index + 1}`}
                  className="object-cover w-full"
                />
              </div>

              {/* Hidden Overlay, Appears on Hover */}
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-orange-500 bg-opacity-70 flex items-center justify-center p-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                <p className="text-white font-semibold">{src.skill} </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
