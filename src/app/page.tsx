import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Project from "@/components/project";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-gray-100 overflow-hidden">
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}
      <Project />

      {/* Footer */}
      <Footer />
    </main>
  );
}
