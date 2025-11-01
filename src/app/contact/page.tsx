"use client";

import { useState } from "react";
import { FiSend } from "react-icons/fi";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", feedback: "" });
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("Thank you for your feedback! 😊");
    setIsSubmitted(true);
    setFormData({ name: "", email: "", feedback: "" });

    setTimeout(() => {
      setMessage("");
      setIsSubmitted(false);
    }, 2500);
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-gray-100 px-4 py-16"
    >
      {/* Accent Background Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(20,184,166,0.08),transparent_70%)]" />

      <div className="relative z-10 w-full max-w-lg backdrop-blur-lg bg-gray-900/70 border border-gray-700 shadow-2xl rounded-2xl p-8 sm:p-10 animate-fadeIn">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-teal-400 to-blue-600 text-center mb-8">
          Contact Me
        </h2>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-200 placeholder-gray-400"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-200 placeholder-gray-400"
            required
          />
          <textarea
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            placeholder="Your Message"
            rows={4}
            className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-200 placeholder-gray-400"
            required
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className={`flex items-center justify-center gap-2 py-3 rounded-md font-semibold transition-all duration-300 ${
              isSubmitted
                ? "bg-green-500 text-white"
                : "bg-gradient-to-r from-blue-600 to-teal-500 hover:from-teal-500 hover:to-blue-600 text-white"
            }`}
          >
            {isSubmitted ? (
              "Submitted ✅"
            ) : (
              <>
                <FiSend className="text-lg" /> Send Message
              </>
            )}
          </button>
        </form>

        {/* Feedback Message */}
        {message && (
          <div className="mt-6 p-3 rounded-md border border-green-500 text-green-400 text-center bg-green-900/20 animate-fadeIn">
            {message}
          </div>
        )}
      </div>
    </section>
  );
}
