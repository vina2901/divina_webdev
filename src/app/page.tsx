import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fdf8f2] text-[#1c1812]">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </div>
  );
}