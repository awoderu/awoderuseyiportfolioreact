import React, { useState, useEffect } from 'react';
import dlab_logo from "../assets/dlab_logo.png";
import { Link } from "react-router-dom";
import '../index.css';
import { Menu, X } from "lucide-react";



const Navbar = () => {
  const [mobileMenuIsOpen, setMobilemenuisOpen] = useState(false);

  useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth >= 768) {
          setMobilemenuisOpen(false);
        }
      };
  
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

  return (
    <nav className="fixed top-0 w-full lg:w-full z-50 transition-all
     duration-300 bg-red-500 backdrop-blur-sm justify-between left-0 z-50 ">
      {/* extend nav bar old value - max-w-7xl */}
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8  " >
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20 relative">
           <Link to="/#hero" className="flex items-center space-x-1 group cursor-pointer">
            {/* <div>
              <img src={dlab_logo} className="w-6 h-6 sm:w-8 sm:h-8" alt="portfolio" />
            </div> */}
            <span className=" flex flex-col text-lg sm:text-xl md:text-2xl font-extrabold font-mono text-black">
              <span className="#">Oluwaseyi </span>
              <span className="#">Awoderu</span>
              {/* <span className="block text-[10px] text-left leading-none text-gray-400">
                Services limited
              </span> */}
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-6 lg:space-x-8 font-mono text-black">
            <a href="/" className=" hover:text-green-500 text-sm lg:text-base ">Home</a>
            <a href="/#projectpage" className="hover:text-green-500 text-sm lg:text-base">Projects</a>
            {/* <a href="/home#contact" className=" hover:text-green-500 text-sm lg:text-base">Contact</a> */}
            <Link to="/#contact" className="hover:text-green-500 text-sm lg:text-base">Contact</Link>
            {/* <Link to="#contact" className="hover:text-green-500 text-sm lg:text-base">Contact</Link> */}
          </div>

      <button
            className="md:hidden p-2 text-black hover:text-white ml-auto"
            onClick={() => setMobilemenuisOpen((prev) => !prev)}
            type="button"
            aria-label="Open menu"
          >
            {mobileMenuIsOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuIsOpen && (
        <div className="md:hidden bg-black backdrop-blur-lg  border-slate-800 text-white font-mono">
          <div className="px-4 py-4 sm:py-6 space-y-3 sm:space-y-4">
            <a href="/" onClick={() => setMobilemenuisOpen(false)} className="block  hover:text-white text-sm lg:text-base">
              Home
            </a>
            <a href="/#projectpage" onClick={() => setMobilemenuisOpen(false)} className="block  hover:text-white text-sm lg:text-base">
              Projects
            </a>
            <Link to="/#contact" onClick={() => setMobilemenuisOpen(false)} className="block hover:text-white text-sm lg:text-base">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;