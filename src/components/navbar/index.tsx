"use client";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id: string) => {
    if (id) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    // Close mobile menu after clicking
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { name: "Home", id: "" },
    { name: "About Me", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Certificates", id: "certificates" },
    { name: "Projects", id: "projects" },
    { name: "Education", id: "education" },
    { name: "Contact Me", id: "contact" },
  ];

  return (
    <nav className="bg-black sticky top-0 z-50 shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Logo - Responsive sizing */}
          <div className="flex-shrink-0">
            <h1
              className="text-orange-500 text-2xl sm:text-3xl lg:text-4xl font-bold cursor-pointer hover:text-orange-400 transition-colors duration-300"
              onClick={() => handleScroll("")}
            >
              Nusrat
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <div className="flex space-x-2 xl:space-x-4">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleScroll(item.id)}
                  className={`relative group rounded-md px-3 py-2 text-sm xl:text-base font-medium transition-all duration-300 ease-in-out hover:scale-105 ${
                    item.name === "Contact Me"
                      ? "text-black bg-white hover:bg-orange-100 shadow-[inset_0_3px_6px_rgba(0,0,0,0.1)]"
                      : "text-white hover:text-orange-300 shadow-[inset_0_3px_6px_rgba(0,0,0,0.5)] hover:shadow-[inset_0_5px_10px_rgba(255,165,0,0.2)]"
                  }`}
                >
                  {item.name}
                  {/* Hover underline effect for regular items */}
                  {item.name !== "Contact Me" && (
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-orange-300 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500 transition-colors duration-300"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <div className="w-6 h-6 relative">
                <span
                  className={`absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                    isOpen ? "rotate-45 translate-y-2" : "translate-y-0"
                  }`}
                ></span>
                <span
                  className={`absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out translate-y-2 ${
                    isOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                    isOpen ? "-rotate-45 translate-y-2" : "translate-y-4"
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900 border-t border-gray-700">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleScroll(item.id)}
              className={`block w-full text-left px-3 py-3 rounded-md text-base font-medium transition-all duration-300 ease-in-out ${
                item.name === "Contact Me"
                  ? "text-black bg-white hover:bg-orange-100 shadow-md"
                  : "text-white hover:text-orange-300 hover:bg-gray-800"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
