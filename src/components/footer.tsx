"use client";

import React from "react";
import Image from "next/image";
import { FaXTwitter, FaLinkedinIn, FaFacebookF, FaGithub } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="relative w-full bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-gray-300 border-t border-gray-800">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(59,130,246,0.15),transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left: Logo */}
        <div className="flex items-center space-x-3">
          <Image
            src="/clean-img.jpg"
            alt="Portfolio Logo"
            width={48}
            height={48}
            className="w-12 h-12 rounded-full object-cover border border-gray-700 shadow-md"
          />
          <span className="text-xl sm:text-2xl font-bold text-white tracking-wide">
            Syeda Gulzar Bano
          </span>
        </div>

        {/* Center: Copyright */}
        <p className="text-sm text-gray-400 text-center sm:text-left">
          © {new Date().getFullYear()} Syeda Gulzar Bano — All Rights Reserved
        </p>

        {/* Right: Clean SVG Icons */}
        <div className="flex space-x-4">
          {[
            {
              href: "https://x.com/SyedaGulzarBano",
              icon: <FaXTwitter />,
              label: "Twitter",
            },
            {
              href: "https://www.linkedin.com/in/gulzar-bano-syeda-b3b7b1230",
              icon: <FaLinkedinIn />,
              label: "LinkedIn",
            },
            {
              href: "https://web.facebook.com/people/Gulzar-Bano/pfbid0gcgEC1MH2Fd67NzH8Z7LVhrzFLzyciNVEugaXhUEPoJMDJCqEqWUpmnAcR8VuFhKl",
              icon: <FaFacebookF />,
              label: "Facebook",
            },
            {
              href: "https://github.com/Syedabanog-1",
              icon: <FaGithub />,
              label: "GitHub",
            },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 border border-gray-700 hover:border-blue-500 text-gray-300 hover:text-blue-400 hover:shadow-[0_0_10px_rgba(59,130,246,0.5)] transition-all duration-300 text-lg"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="relative z-10 border-t border-gray-800 mt-6">
        <p className="text-center text-sm text-gray-500 py-4">
          Designed & Built with 💙 using Next.js and Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
