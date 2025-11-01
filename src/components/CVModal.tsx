"use client";
import Image from "next/image";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCode,
  FaPython,
  FaDatabase,
} from "react-icons/fa";

export default function CVModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center animate-fadeIn">
      <div className="bg-gray-900/90 border border-gray-700 rounded-2xl shadow-2xl w-[95%] sm:w-[85%] md:w-[65%] lg:w-[55%] max-h-[85vh] overflow-y-auto relative p-8 md:p-10 text-gray-100">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-5 text-gray-400 hover:text-white text-2xl font-light"
        >
          ×
        </button>

        {/* Header */}
        <div className="text-center border-b border-gray-700 pb-6">
          <Image
            src="/clean-img.jpg"
            alt="Profile"
            width={120}
            height={120}
            className="mx-auto rounded-full border-4 border-blue-500 shadow-lg"
          />
          <h2 className="text-3xl font-bold mt-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
            Syeda Gulzar Bano
          </h2>
          <p className="text-gray-400 mt-1 text-sm">
            Oracle Developer • Frontend Designer
          </p>
        </div>

        {/* Contact Info */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 text-center gap-6 text-gray-300">
          <div className="flex flex-col items-center gap-1">
            <FaPhone className="text-blue-400" />
            <span>+92 336 3893198</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <FaEnvelope className="text-blue-400" />
            <span>syedagulzarbano@gmail.com</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <FaMapMarkerAlt className="text-blue-400" />
            <span>Karachi, Pakistan</span>
          </div>
        </div>

        {/* Summary */}
        <section className="mt-8 border-l-4 border-blue-500 pl-4">
          <h3 className="text-lg font-semibold mb-2 text-blue-400">Profile Summary</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Passionate and detail-oriented developer with hands-on experience in Oracle,
            frontend design, and modern web technologies. Skilled at blending creativity
            with technical precision to craft intuitive, high-performance digital
            experiences.
          </p>
        </section>

        {/* Education */}
        <section className="mt-8 border-l-4 border-blue-500 pl-4">
          <h3 className="text-lg font-semibold mb-2 text-blue-400">Education</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              🎓 <strong>BS Computer Science</strong> — Florida Green University, Karachi
            </li>
            <li>Intermediate — Malir Cantt College</li>
            <li>Matric — Govt. Boys & Girls School, Karachi</li>
          </ul>
        </section>

        {/* Skills */}
        <section className="mt-8 border-l-4 border-blue-500 pl-4">
          <h3 className="text-lg font-semibold mb-2 text-blue-400">Core Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-gray-300 text-sm">
            <div className="flex items-center gap-2">
              <FaDatabase className="text-teal-400" /> Oracle / SQL
            </div>
            <div className="flex items-center gap-2">
              <FaCode className="text-teal-400" /> HTML / CSS / JS
            </div>
            <div className="flex items-center gap-2">
              <FaCode className="text-teal-400" /> React / Next.js
            </div>
            <div className="flex items-center gap-2">
              <FaPython className="text-teal-400" /> Python
            </div>
            <div className="flex items-center gap-2">
              <FaCode className="text-teal-400" /> TypeScript / Tailwind
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="mt-8 border-l-4 border-blue-500 pl-4">
          <h3 className="text-lg font-semibold mb-2 text-blue-400">
            Professional Experience
          </h3>
          <div className="text-sm text-gray-300">
            <p>
              <strong>Oracle Developer Intern</strong> — State Bank of Pakistan
            </p>
            <p className="text-gray-400 italic">
              3-month internship focused on Oracle database design, PL/SQL development,
              and business logic optimization.
            </p>
          </div>
        </section>

        {/* Certifications */}
        <section className="mt-8 border-l-4 border-blue-500 pl-4">
          <h3 className="text-lg font-semibold mb-2 text-blue-400">Certifications</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>🏆 Governor Initiative for AI (GIAIC) — AI, Web 3.0 & Metaverse</li>
            <li>🏆 Frontend Development — React & Next.js Track</li>
          </ul>
        </section>

        {/* Footer */}
        <div className="mt-10 border-t border-gray-700 pt-4 text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Syeda Gulzar Bano • Professional CV</p>
        </div>
      </div>
    </div>
  );
}
