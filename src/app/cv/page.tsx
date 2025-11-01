"use client";

import Image from "next/image";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaDatabase, FaCode, FaPython } from "react-icons/fa";

const CV = () => {
  return (
    <section className="min-h-screen w-full bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-gray-100 flex flex-col md:flex-row overflow-hidden">
      {/* Sidebar */}
      <aside className="md:w-1/3 bg-gradient-to-b from-blue-600 to-teal-500 p-8 flex flex-col items-center text-center md:text-left shadow-xl relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_70%)]" />
        <div className="relative z-10">
          <Image
            src="/clean-img.jpg"
            alt="Profile"
            width={150}
            height={150}
            className="rounded-full border-4 border-white shadow-lg mx-auto"
          />
          <h2 className="text-2xl font-bold mt-4 text-white">Syeda Gulzar Bano</h2>
          <p className="text-sm text-white/90 mb-6">Oracle Developer | Web Designer</p>

          <div className="space-y-3 text-white/90">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <FaPhone /> <span>+92 336 3893198</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <FaEnvelope /> <span>syedagulzarbano@gmail.com</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <FaMapMarkerAlt /> <span>Karachi, Pakistan</span>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-white mb-2">Languages</h3>
            <ul className="text-white/90 space-y-1 text-sm">
              <li>English – Fluent</li>
              <li>Urdu – Native</li>
            </ul>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="md:w-2/3 bg-gray-900/70 backdrop-blur-xl p-8 md:p-12 overflow-y-auto">
        {/* Section: Education */}
        <div className="border-l-4 border-blue-500 pl-4 mb-10">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 mb-3">
            Education
          </h2>
          <ul className="space-y-3 text-gray-300">
            <li>
              🎓 <strong>BS Computer Science</strong> – Florida Green University (Karachi Campus)
            </li>
            <li>🎓 Intermediate – Malir Cantt College</li>
            <li>🎓 Matric – Govt. Boys & Girls School, Karachi</li>
          </ul>
        </div>

        {/* Section: Skills */}
        <div className="border-l-4 border-blue-500 pl-4 mb-10">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 mb-3">
            Skills
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-gray-300">
            <div className="flex items-center gap-2"><FaDatabase /> Database</div>
            <div className="flex items-center gap-2"><FaCode /> HTML / CSS / TypeScript</div>
            <div className="flex items-center gap-2"><FaCode /> React / Next.js</div>
            <div className="flex items-center gap-2"><FaPython /> Python</div>
            <div className="flex items-center gap-2"><FaCode /> Oracle SQL</div>
            <div className="flex items-center gap-2"><FaCode /> Tailwind CSS</div>
          </div>
        </div>

        {/* Section: Experience */}
        <div className="border-l-4 border-blue-500 pl-4 mb-10">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 mb-3">
            Work Experience
          </h2>
          <div className="space-y-2 text-gray-300">
            <p><strong>Oracle Developer Intern</strong> – State Bank of Pakistan</p>
            <p className="text-sm italic">3-month internship as Oracle Developer</p>
          </div>
        </div>

        {/* Section: Current Course */}
        <div className="border-l-4 border-blue-500 pl-4 mb-10">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 mb-3">
            Current Course
          </h2>
          <p className="text-gray-300">
            AI, Web 3.0, and Metaverse – Governor Initiative for AI (GIAIC)
          </p>
        </div>

        {/* Section: Personal Info */}
        <div className="border-l-4 border-blue-500 pl-4 mb-10">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 mb-3">
            Personal Information
          </h2>
          <ul className="space-y-1 text-gray-300">
            <li><strong>Name:</strong> Syeda Gulzar Bano</li>
            <li><strong>Father’s Name:</strong> Syed Kazim Raza Shah</li>
            <li><strong>Religion:</strong> Islam</li>
            <li><strong>Marital Status:</strong> Single</li>
            <li><strong>NIC:</strong> 42201-0545280-0</li>
          </ul>
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-gray-400 mt-8">
          <p>© {new Date().getFullYear()} Syeda Gulzar Bano — All Rights Reserved</p>
        </div>
      </main>
    </section>
  );
};

export default CV;
