import "remixicon/fonts/remixicon.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-32 pb-10 relative z-10">
      <div className="section-divider" />

      <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-6">
        <h1 className="text-xl font-semibold">airamfuentes</h1>

        <div className="flex gap-4">
          <a
            href="https://github.com/airamfuentes"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="w-10 h-10 grid place-items-center rounded-full border border-zinc-700/80 hover:border-zinc-500 hover:-translate-y-1 transition-all duration-300 light-card"
          >
            <i className="ri-github-fill ri-lg"></i>
          </a>
          <a
            href="mailto:airamfuentes2020@gmail.com"
            aria-label="Email"
            className="w-10 h-10 grid place-items-center rounded-full border border-zinc-700/80 hover:border-zinc-500 hover:-translate-y-1 transition-all duration-300 light-card"
          >
            <i className="ri-mail-fill ri-lg"></i>
          </a>
        </div>

        <p className="text-xs opacity-40">© {year} Airam Fuentes</p>
      </div>
    </footer>
  );
};

export default Footer;
