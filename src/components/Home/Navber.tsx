import { useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import logoImage from "@/assets/logo 1.png";

export const Navbar = () => {
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "Label Bridge", path: "/labelbridge" },
    { name: "News & Articles", path: "/news-articles" },
    { name: "About", path: "/about" },
    { name: "Shop", path: "/shop" },
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full max-w-[1350px] mx-auto p-4 md:p-6 mt-5 
                    bg-[#FFFFFF1A]/40 backdrop-blur-md rounded-[40px] 
                    border border-white/10 shadow-2xl flex justify-between items-center relative z-20">

      {/* Logo */}
      <motion.img
        src={logoImage}
        alt="Company Logo"
        className="h-8 w-8 sm:h-10 sm:w-10 object-cover rounded-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
      />

      {/* Desktop Links */}
      <div className="hidden md:flex gap-4 lg:gap-6">
        {links.map((link) => {
          const isActive = location.pathname === link.path;

          return (
            <a
              key={link.name}
              href={link.path}
              className={`text-gray-400 no-underline text-sm sm:text-base px-3 sm:px-4 py-2 font-medium 
                          transition-all duration-300 hover:text-white
                ${
                  isActive
                    ? "!text-[#00ff00] bg-green-500/10 rounded-xl shadow-lg shadow-green-500/30"
                    : ""
                }`}
            >
              {link.name}
            </a>
          );
        })}
      </div>

      {/* Sign In Button */}
      <button
        className="bg-[#3a4790] text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-xl text-sm sm:text-base
                   cursor-pointer transition-all duration-300 shadow-lg shadow-[#3a4790]/50 hover:bg-[#4b58a1]">
        Sign In
      </button>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white focus:outline-none">
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-[90px] left-0 w-full bg-black/90 backdrop-blur-md 
                        flex flex-col items-center py-4 rounded-2xl md:hidden gap-3">
          {links.map((link) => {
            const isActive = location.pathname === link.path;

            return (
              <a
                key={link.name}
                href={link.path}
                className={`text-gray-400 text-base px-4 py-2 font-medium 
                            transition-all duration-300 hover:text-white
                ${
                  isActive
                    ? "!text-[#00ff00] bg-green-500/10 rounded-xl shadow-lg shadow-green-500/30"
                    : ""
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
};
