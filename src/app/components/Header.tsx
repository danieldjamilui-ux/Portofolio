import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (id === "home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMenuOpen(false);
    return;
  }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-md shadow-lg border-b border-slate-800"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">  
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {["Beranda", "proyek", "keahlian", "kontak"].map((item, index) => (
              <motion.button
                key={item}
                onClick={() =>
                  scrollToSection(
                    item === "Beranda"
                      ? "home"
                      : item === "proyek"
                      ? "projects"
                      : item === "keahlian"
                      ? "skills"
                      : "contact"
                  )
                }
                className="relative text-slate-300 hover:text-white transition-colors capitalize group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {item}
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"
                />
              </motion.button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-4 border-t border-slate-800">
                {["Beranda", "proyek", "keahlian", "kontak"].map((item, index) => (
                  <motion.button
                    key={item}
                    onClick={() =>
                      scrollToSection(
                        item === "Beranda"
                          ? "home"
                          : item === "proyek"
                          ? "projects"
                          : item === "keahlian"
                          ? "skills"
                          : "contact"
                      )
                    }
                    className="block w-full text-left text-slate-300 hover:text-white transition-colors capitalize py-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item}
                  </motion.button>
                ))}

              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}