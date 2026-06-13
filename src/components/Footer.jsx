import "remixicon/fonts/remixicon.css";

const Footer = () => {
  const year = new Date().getFullYear();

  const links = [
    { href: "#home", label: "Inicio" },
    { href: "#about", label: "Sobre mí" },
    { href: "#experience", label: "Trayectoria" },
    { href: "#project", label: "Proyectos" },
    { href: "#contact", label: "Contacto" },
  ];

  return (
    <footer className="mt-32 pb-10 relative z-10">
      <div className="section-divider" />

      <div className="w-full flex flex-col md:flex-row items-center md:items-start md:justify-between gap-8 text-center md:text-left">
        {/* Marca */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <h1 className="text-2xl font-bold">airamfuentes</h1>
          <p className="text-sm opacity-60 max-w-xs">
            Desarrollador web · Lanzarote, España
          </p>
        </div>

        {/* Navegación */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium opacity-70 hover:opacity-100 hover:text-violet-400 transition-all"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Redes */}
        <div className="flex gap-4">
          <a
            href="https://github.com/airamfuentes"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="w-10 h-10 grid place-items-center rounded-full border border-zinc-700 hover:border-violet-500/60 hover:text-violet-400 hover:-translate-y-1 transition-all duration-300 light-card"
          >
            <i className="ri-github-fill ri-lg"></i>
          </a>
          <a
            href="mailto:airamfuentes2020@gmail.com"
            aria-label="Email"
            className="w-10 h-10 grid place-items-center rounded-full border border-zinc-700 hover:border-violet-500/60 hover:text-violet-400 hover:-translate-y-1 transition-all duration-300 light-card"
          >
            <i className="ri-mail-fill ri-lg"></i>
          </a>
        </div>
      </div>

      <p className="text-center text-xs opacity-50 mt-10">
        © {year} Airam Fuentes · Hecho con React + Vite
      </p>
    </footer>
  );
};

export default Footer;
