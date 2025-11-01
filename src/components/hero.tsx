"use client";
import Image from "next/image";
import React, { useState } from "react";
import Typewriter from "typewriter-effect";

const Hero = () => {
  const [showContact, setShowContact] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-gray-100 relative overflow-hidden">
      {/* Subtle glow background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(20,184,166,0.1),transparent_60%)]" />

      <div className="relative z-10 max-w-7xl w-full px-6 md:px-12 lg:px-20 flex flex-col-reverse md:flex-row items-center justify-between gap-14 md:gap-20 py-20 md:py-28">
        {/* Text Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 md:space-y-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
            Hi! I&apos;m{" "}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-teal-400 to-blue-600">
              Syeda Gulzar Bano
            </span>
          </h1>

          <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-400">
            <Typewriter
              options={{
                strings: [
                  "Oracle Developer",
                  "Web Developer",
                  "Graphic Designer",
                  "Creative Thinker",
                ],
                autoStart: true,
                loop: true,
                delay: 70,
                deleteSpeed: 40,
              }}
            />
          </div>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-md md:max-w-lg">
            I&apos;m a frontend developer and designer who blends creativity with
            technical precision. My goal is to craft digital experiences that
            feel elegant, functional, and memorable — with clean design and
            strong user focus.
          </p>

          <button
            onClick={() => setShowContact(true)}
            className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-teal-500 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
          >
            Get in Touch
          </button>
        </div>

        {/* Image Section */}
        <div className="flex justify-center md:justify-end w-full md:w-1/2">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-tr from-blue-500 to-teal-400 rounded-2xl opacity-30 blur-2xl group-hover:opacity-50 transition duration-500" />
            <Image
              src="/clean-img.jpg"
              alt="Profile Image"
              width={420}
              height={420}
              className="relative rounded-2xl shadow-2xl object-cover w-64 h-64 sm:w-80 sm:h-80 md:w-[420px] md:h-[420px] border border-gray-700 hover:border-blue-400 transition duration-300"
              priority
            />
          </div>
        </div>
      </div>

      {/* 💬 Contact Popup */}
      {showContact && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-gray-900/90 border border-gray-700 rounded-2xl p-8 sm:p-10 w-[90%] max-w-md text-gray-100 shadow-2xl animate-fadeIn relative">
            <button
              onClick={() => setShowContact(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
            >
              ✕
            </button>
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-teal-400 to-blue-600">
              Get in Touch
            </h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! Your message has been sent.");
                setShowContact(false);
              }}
              className="flex flex-col gap-4"
            >
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 rounded-md bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 rounded-md bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="p-3 rounded-md bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-teal-500 hover:to-blue-600 text-white py-3 rounded-md font-semibold transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
