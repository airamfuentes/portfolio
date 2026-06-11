import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

const Navbar = ({ hidden = false }) => {
  if (hidden) return null;

  const [active, setActive] = useState(false);
  const { dark, toggle } = useTheme();

  useEffect(() => {
    const handleScroll = () => setActive(window.scrollY > 150);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar relative z-50 py-7 flex items-center justify-between px-6 md:px-12">
      {/* Logo */}
      <div className="logo">
        <h1 className="text-3xl font-bold p-1">airamfuentes</h1>
      </div>

      {/* Menu + toggle */}
      <div className="flex items-center gap-4">
        <ul
          className={`flex items-center sm:gap-10 gap-4
            md:static fixed left-1/2 -translate-x-1/2 md:translate-x-0
            md:opacity-100 bg-white/10 backdrop-blur-md
            md:bg-transparent md:backdrop-blur-none
            p-4 rounded-br-2xl rounded-bl-2xl
            transition-all md:transition-none
            ${active ? "top-0 opacity-100" : "-top-10 opacity-0"}`}
        >
          <li><a href="#home" className="sm:text-lg text-base font-medium">Inicio</a></li>
          <li><a href="#about" className="sm:text-lg text-base font-medium">Sobre mí</a></li>
          <li><a href="#project" className="sm:text-lg text-base font-medium">Proyectos</a></li>
          <li><a href="#contact" className="sm:text-lg text-base font-medium">Contacto</a></li>
        </ul>

        {/* Theme toggle */}
        <button
          onClick={toggle}
          aria-label="Cambiar tema"
          className="p-2 rounded-full border border-zinc-600 hover:border-violet-500 transition-colors duration-300 bg-white/10 backdrop-blur-md text-xl"
        >
          {dark ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
