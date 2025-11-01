"use client";

import React from "react";
import Link from "next/link";

const projects = [
  {
    title: "Marketplace E-Commerce",
    description:
      "A fully functional and responsive multi-vendor e-commerce platform.",
    url: "https://hackhathon-ecommerce-website-eidb.vercel.app/",
  },
  {
    title: "Dashboard E-Commerce",
    description:
      "An advanced dashboard to manage products, orders, and analytics efficiently.",
    url: "https://dashboard-ecommerce-ws.vercel.app/",
  },
  {
    title: "Clerk Authentication",
    description: "A secure authentication system using Clerk integration.",
    url: "https://clerk-authentication-five.vercel.app/",
  },
  {
    title: "Todo List Next.js",
    description: "A minimalist, fast, and responsive Todo app built with Next.js.",
    url: "https://todo-list-nextjs-project-three.vercel.app/",
  },
  {
    title: "Book API",
    description: "A REST API project for managing and browsing books data.",
    url: "https://my-nextjs-book-api-with-ei5vzyxyg-syeda-gulzar-bano-s-projects.vercel.app/",
  },
  {
    title: "Stripe Embedded Integration",
    description: "A seamless Stripe integration for embedded payments.",
    url: "https://stripe-embeded-nextjs.vercel.app/",
  },
];

const Project = () => {
  return (
    <section
      id="project"
      className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-gray-100 overflow-hidden py-20 px-6 md:px-12"
    >
      {/* Accent lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(20,184,166,0.1),transparent_70%)]" />

      <div className="relative z-10 max-w-7xl w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-teal-400 to-blue-600 mb-4">
            My Projects
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Here are some of the projects I’ve built — blending clean design with
            powerful functionality. Each one reflects my focus on user experience,
            performance, and modern development practices.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 shadow-lg hover:shadow-2xl hover:border-blue-500 transition-all duration-300 overflow-hidden"
            >
              {/* Subtle glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-tr from-blue-500 via-teal-400 to-blue-500 blur-2xl transition duration-500" />

              <div className="relative p-6 flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base mb-6 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <Link
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-blue-400 font-semibold hover:text-teal-400 transition underline underline-offset-4"
                >
                  View Project →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
