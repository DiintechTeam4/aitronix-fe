import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`navbar fixed left-0 w-full h-20 flex items-center justify-center z-50 transition-all duration-300 ${
        scrolled ? "shadow-md backdrop-blur-lg top-0" : "bg-transparent"
      }`}
    >
      <div className="w-full h-full flex items-center justify-between px-4 sm:px-6 md:px-10">
        {/* Logo */}
        <div className="text-white text-lg font-bold cursor-pointer">
          <a href="#home">AITRONIX LOGO</a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center">
          <ul className="flex items-center gap-6 lg:gap-12 text-white text-sm lg:text-base font-medium">
            <li className="cursor-pointer hover:text-[#00d4ff] transition-colors">
              <a href="#product">Products</a>
            </li>
            <li className="cursor-pointer hover:text-[#00d4ff] transition-colors">
              <a href="#solution">Solutions</a>
            </li>
            <li className="cursor-pointer hover:text-[#00d4ff] transition-colors">
              <a href="#service">Services</a>
            </li>
            <li className="cursor-pointer hover:text-[#00d4ff] transition-colors">
              <a href="#bookdemo">Book Demo</a>
            </li>
            <li className="cursor-pointer hover:text-[#00d4ff] transition-colors">
              <a href="#contacts">Contact</a>
            </li>
            <li className="cursor-pointer hover:text-[#00d4ff] transition-colors">
              <a href="#gallary">Gallary</a>
            </li>
          </ul>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden text-white">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <i
              className={`fa-solid ${
                menuOpen ? "fa-xmark" : "fa-bars"
              } text-2xl`}
            ></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="slideIn md:hidden w-full absolute top-20 left-0 bg-gradient-to-b from-black to-blue-950 flex flex-col items-center gap-6 py-10 px-4 shadow-xl transition-all duration-300"
          style={{
            animation: "slideIn 0.5s ease-out forwards", // Adding custom animation
          }}
        >
          <ul className="flex flex-col items-center gap-6 text-white text-base">
            <li className="cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:text-[#00d4ff]">
              <a href="#product">Products</a>
            </li>
            <li className="cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:text-[#00d4ff]">
              <a href="#solution">Solutions</a>
            </li>
            <li className="cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:text-[#00d4ff]">
              <a href="#service">Services</a>
            </li>
            <li className="cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:text-[#00d4ff]">
              <a href="#bookdemo">Book Demo</a>
            </li>
            <li className="cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:text-[#00d4ff]">
              <a href="#contacts">Contact</a>
            </li>
            <li className="cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:text-[#00d4ff]">
              <a href="#gallary">Gallary</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
