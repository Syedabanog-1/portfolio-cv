"use client";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiOracle,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
  { name: "React", icon: <FaReact className="text-sky-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Python", icon: <FaPython className="text-yellow-400" /> },
  { name: "Oracle", icon: <SiOracle className="text-red-500" /> },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative flex flex-col items-center justify-center bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-gray-100 overflow-hidden py-20 px-6 md:px-12"
    >
      {/* Accent Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(20,184,166,0.08),transparent_70%)]" />

      <div className="relative z-10 max-w-6xl w-full text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-teal-400 to-blue-600 mb-10">
          My Skills
        </h2>

        {/* Compact Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 justify-items-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center p-4 rounded-xl bg-gray-800/40 border border-gray-700 hover:border-blue-500 hover:bg-gray-800/70 hover:shadow-[0_0_12px_rgba(59,130,246,0.4)] transition-all duration-300 w-24 sm:w-28"
            >
              <div className="text-3xl sm:text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <span className="text-xs sm:text-sm font-medium text-gray-300 group-hover:text-white">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-10 text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
          Technologies and tools I use to build fast, modern, and scalable web
          applications.
        </p>
      </div>
    </section>
  );
};

export default Skills;
