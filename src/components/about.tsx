"use client";

import React, { useState } from "react";
import Image from "next/image";
import CVModal from "./CVModal"; // popup component

const About = () => {
  const [showCV, setShowCV] = useState(false);

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-gray-100 overflow-hidden py-20 px-6 md:px-12"
    >
      {/* Glow accents */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.15),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(20,184,166,0.1),transparent_70%)]" />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-14 max-w-6xl w-full">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-tr from-blue-500 to-teal-400 rounded-2xl opacity-30 blur-2xl group-hover:opacity-50 transition duration-500" />
            <Image
              src="/proimg.jpg"
              alt="Profile Image"
              width={420}
              height={420}
              priority
              className="relative object-cover rounded-2xl shadow-2xl w-64 h-64 sm:w-80 sm:h-80 md:w-[420px] md:h-[420px] border border-gray-700 hover:border-blue-400 transition duration-300"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-teal-400 to-blue-600">
            About Me
          </h2>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-md md:max-w-lg">
            I am currently enrolled in the GIAIC program, where I have completed
            Quarter 3 and am now focused on Artificial Intelligence. Through this
            journey, I’ve developed hands-on experience in
            <span className="text-blue-400 font-medium"> HTML, CSS, TypeScript, Node.js, Next.js, Python, React, and Agent SDK</span>.
            As I move into Quarter 4, I’m exploring Prompt and Context Engineering —
            combining creativity and logic to build AI-driven digital experiences.
          </p>

          {/* View CV Button */}
          <button
            onClick={() => setShowCV(true)}
            className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-teal-500 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
          >
            View CV
          </button>
        </div>
      </div>

      {/* CV Modal */}
      {showCV && <CVModal onClose={() => setShowCV(false)} />}
    </section>
  );
};

export default About;
