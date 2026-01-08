import { useEffect, useState } from "react";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { ScrollProgress } from "./components/ScrollProgress";
import { ParticlesBackground } from "./components/ParticlesBackground";

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-x-hidden">
      {/* Animated gradient orb that follows mouse */}
      <div
        className="fixed w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl pointer-events-none transition-transform duration-1000 ease-out z-0"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />
      
      <ParticlesBackground />
      <ScrollProgress />
      <Header />
      
      <main className="relative z-10">
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
      
      <footer className="relative z-10 bg-slate-950/50 backdrop-blur-sm border-t border-slate-800 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-400">
            © 2025 Daniel paululs. 
          </p>
        </div>
      </footer>
    </div>
  );
}