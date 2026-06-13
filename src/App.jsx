import { useState, useEffect } from "react";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import ShinyText from "./components/ShinyText/ShinyText";
import BlurText from "./components/BlurText/BlurText";
import Lanyard from "./components/Lanyard/Lanyard";
import { listTools, listProyek } from "./data";
import ChromaGrid from "./components/ChromaGrid/ChromaGrid";
import ProjectModal from "./components/ProjectModal/ProjectModal";
import Aurora from "./components/Aurora/Aurora";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import Stats from "./components/Stats/Stats";
import TiltCard from "./components/TiltCard/TiltCard";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  useEffect(() => {
    const isReload =
      performance.getEntriesByType("navigation")[0]?.type === "reload";
    if (isReload) {
      const baseUrl = window.location.origin + "/";
      window.location.replace(baseUrl);
    }
  }, []);

  return (
    <>
      <div className="aurora-wrapper absolute top-0 left-0 w-full h-full -z-10">
        <Aurora
          colorStops={["#1e1b3a", "#3b3a5c", "#1e293b"]}
          blend={0.4}
          amplitude={0.8}
          speed={0.35}
        />
      </div>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── HERO ─────────────────────────────────────────────── */}
        <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
          <div className="animate__animated animate__fadeInUp animate__delay-3s">
            <div className="flex items-center gap-3 mb-4" />
            <h1 className="text-5xl font-bold mb-6">
              <ShinyText text="Hola, soy Airam Fuentes" disabled={false} speed={3} className='custom-class' />
            </h1>
            <BlurText
              text="Desarrollador web en proceso enfocado en darle un toque creativo e innovador al mundo digital"
              delay={150}
              animateBy="words"
              direction="top"
              className=" mb-6"
            />
            <div className="flex flex-wrap items-center sm:gap-4 gap-3">
              <a
                href="#project"
                className="font-medium btn-accent p-4 px-6 rounded-full text-white transition-all duration-300 hover:-translate-y-0.5"
              >
                Ver proyectos
              </a>
              <a
                href="#contact"
                className="font-medium bg-zinc-900/60 p-4 px-6 rounded-full border border-zinc-700 hover:border-zinc-500 hover:bg-zinc-800/60 transition-all hover:-translate-y-0.5"
              >
                <ShinyText text="Contáctame" disabled={false} speed={3} className="custom-class" />
              </a>
            </div>

            <a
              href="#about"
              aria-label="Desplázate hacia abajo"
              className="hidden md:flex items-center gap-3 mt-12 opacity-60 hover:opacity-100 transition-opacity w-fit"
            >
              <span className="scroll-hint" />
              <span className="text-sm">Desliza para conocerme</span>
            </a>
          </div>
          <div className="md:ml-auto animate__animated animate__fadeInUp animate__delay-4s">
            <ProfileCard
              name="Airam Fuentes"
              title="Desarrollador Web"
              handle="airamfuentes"
              status="Coding..."
              contactText="Contáctame"
              avatarUrl="./assets/profile_photo.webp"
              miniAvatarUrl="./assets/foto_card.png"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => window.location.href = 'mailto:airamfuentes2020@gmail.com'}
            />
          </div>
        </div>

        {/* ── STATS ───────────────────────────────────────────── */}
        <Stats />

        {/* ── SOBRE MÍ ────────────────────────────────────────── */}
        <div
          className="mt-32 mx-auto w-full max-w-[1600px] rounded-3xl border border-zinc-800 shadow-[0_8px_40px_rgba(0,0,0,0.35)] bg-gradient-to-br from-[#0d0d0f] via-[#111113] to-[#161618] p-6 light-card"
          id="about"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 pt-0 px-8" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            <div className="basis-full md:basis-7/12 pr-0 md:pr-8 border-b md:border-b-0 md:border-r border-zinc-800">
              <div className="flex-1 text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
                  Sobre mí
                </h2>
                <BlurText
                  text="Soy Airam Fuentes, estudiante y apasionado del desarrollo web. Fiel representante de que la innovación siempre es la clave y lo creativo siempre se impone."
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="text-base md:text-lg leading-relaxed mb-10 text-gray-300"
                />
                <ShinyText
                  text='El mejor modo de predecir el futuro es inventándotelo... "Alan Kay"'
                  disabled={false}
                  speed={3}
                  className="text-sm md:text-base accent-text"
                />
              </div>
            </div>
            <div className="basis-full md:basis-5/12 pl-0 md:pl-8 overflow-hidden max-w-full flex justify-center">
              <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
            </div>
          </div>
        </div>

        {/* ── TOOLS ───────────────────────────────────────────── */}
        <div className="tools mt-32">
          <h1 className="text-4xl/snug font-bold mb-4 gradient-text w-fit" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Herramientas / Tecnologías</h1>
          <p className="md:w-2/5 text-base/loose opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Mi stack principal</p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map((tool) => (
              <div
                key={tool.id}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={tool.dad}
                data-aos-once="true"
              >
                <TiltCard className="flex items-center gap-4 p-4 border border-zinc-700/80 rounded-xl bg-zinc-900/50 backdrop-blur-md hover:bg-zinc-800/60 hover:border-zinc-500/70 transition-colors duration-300 group light-card">
                  <img
                    src={tool.gambar}
                    alt={tool.nama}
                    loading="lazy"
                    className="w-16 h-16 object-contain bg-zinc-800 p-2 rounded-lg group-hover:bg-zinc-900 transition-all duration-300"
                  />
                  <div className="flex flex-col overflow-hidden">
                    <div className="truncate">
                      <ShinyText
                        text={tool.nama}
                        disabled={false}
                        speed={3}
                        className="text-lg font-semibold block"
                      />
                    </div>
                    <p className="text-sm text-zinc-400 truncate">{tool.ket}</p>
                  </div>
                </TiltCard>
              </div>
            ))}
          </div>
        </div>

        {/* ── EXPERIENCIA / FORMACIÓN ─────────────────────────── */}
        <Experience />

        {/* ── PROYECTOS ──────────────────────────────────────── */}
        <div className="proyek mt-32 py-10" id="project" />
        <h1 className="text-center text-4xl font-bold mb-2 gradient-text w-fit mx-auto" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Proyectos</h1>
        <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Algunas ideas y trabajos que desarrollé o sigo en proceso</p>
        <p className="text-center text-sm opacity-50 mt-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" data-aos-once="true">Más proyectos próximamente</p>
        <div className="proyek-box mt-14">
          <div style={{ height: 'auto', position: 'relative' }} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" data-aos-once="true">
            <ChromaGrid
              items={listProyek}
              onItemClick={handleProjectClick}
              radius={500}
              damping={0.45}
              fadeOut={0.6}
              ease="power3.out"
            />
          </div>
        </div>

        {/* ── CONTACTO ────────────────────────────────────────── */}
        <Contact />
      </main>

      <ProjectModal
        isOpen={!!selectedProject}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </>
  )
}

export default App
