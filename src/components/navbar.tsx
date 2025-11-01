"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaDownload, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-lg z-50">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between px-5 py-4 md:py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center text-white">
          <Image
            src="/proimg.jpg"
            alt="Portfolio"
            width={50}
            height={50}
            className="w-12 h-12 rounded-full shadow-lg object-cover"
          />
          <span className="ml-3 text-2xl font-bold tracking-wider">Portfolio</span>
        </Link>

        {/* Hamburger Menu (Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links */}
        <nav
          className={`absolute md:static left-0 w-full md:w-auto transition-all duration-300 ease-in-out
          ${isOpen ? "top-16 opacity-100" : "top-[-400px] opacity-0 md:opacity-100"}
          md:flex md:items-center md:space-x-8 text-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 md:bg-transparent py-5 md:py-0 flex flex-col md:flex-row items-center gap-4`}
        >
          <Link href="/" className="hover:text-gray-300 transition duration-300">
            Home
          </Link>
          <Link href="/#about" className="hover:text-gray-300 transition duration-300">
            About
          </Link>
          <Link href="/#skill" className="hover:text-gray-300 transition duration-300">
            Skills
          </Link>
          <Link href="/#project" className="hover:text-gray-300 transition duration-300">
            Projects
          </Link>
          <Link href="/#Contact" className="hover:text-gray-300 transition duration-300">
            Contact
          </Link>
        </nav>

        {/* Download CV Button */}
        <a href="" download className="hidden md:block">
          <button className="inline-flex items-center bg-white text-indigo-600 border-2 border-white py-2 px-5 
          rounded-full shadow-md hover:bg-indigo-600 hover:text-white transition-colors duration-300">
            Download CV
            <FaDownload className="ml-2 text-xl" />
          </button>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
