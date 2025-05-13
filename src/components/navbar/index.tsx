"use client";

const Navbar = () => {
  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="bg-black">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <h1 className="text-orange-500 text-4xl font-bold">Nusrat</h1>
          <div className="hidden sm:block">
            <div className="flex space-x-4">
              {[
                { name: "Home", id: "" },
                { name: "About Me", id: "about" },
                { name: "Skills", id: "skills" },
                { name: "Certificates", id: "certificates" },
                { name: "Projects", id: "projects" },
                { name: "Education", id: "education" },
                { name: "Contact Me", id: "contact" },
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => item.id && handleScroll(item.id)}
                  className={`relative group rounded-md px-3 py-2 text-sm font-medium  ${
                    item.name === "Contact Me" ? "text-black" : " text-white"
                  }
                  shadow-[inset_0_3px_6px_rgba(0,0,0,0.5)] transition-all duration-300 ease-in-out 
                  ${item.name === "Contact Me" ? "bg-white" : ""}`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
