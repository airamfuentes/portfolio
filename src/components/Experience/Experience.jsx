const experiences = [
  {
    year: "2025 – 2026",
    role: "Web Developer en prácticas",
    company: "Zesei",
    desc: "Desarrollo de aplicaciones web profesionales en entorno real, aplicando buenas prácticas y stack moderno.",
    type: "work",
  },
  {
    year: "2025 – 2026",
    role: "Dependiente área tecnológica",
    company: "Worten",
    desc: "Atención al cliente y asesoramiento técnico en productos de electrónica e informática.",
    type: "work",
  },
  {
    year: "2024 – 2025",
    role: "Monitor de pista",
    company: "Gran Karting Lanzarote",
    desc: "Gestión de actividad, atención al cliente y supervisión de seguridad en pista.",
    type: "work",
  },
  {
    year: "2023 – 2024",
    role: "Reponedor",
    company: "SuperDino Costa Teguise",
    desc: "Gestión de stock, reposición y atención al cliente.",
    type: "work",
  },
];

const education = [
  {
    year: "2024 – 2026",
    role: "CFGS Desarrollo de Aplicaciones Web (DAW)",
    company: "Informática y Comunicaciones — 2º curso",
    desc: "Ciclo Formativo de Grado Superior centrado en desarrollo full-stack, bases de datos, despliegue y arquitectura web.",
  },
  {
    year: "2021 – 2023",
    role: "Bachillerato Humanidades y Ciencias Sociales",
    company: "IES Playa Honda",
    desc: "Formación generalista con énfasis en comunicación, análisis y trabajo en equipo.",
  },
  {
    year: "2022",
    role: "Oxford Test of English — B2",
    company: "Escuela Oficial de Idiomas (Arrecife)",
    desc: "Certificación oficial de nivel B2 en inglés.",
  },
];

function Timeline({ items, accent = "violet" }) {
  const accentMap = {
    violet: "bg-violet-600 border-zinc-900",
    cyan: "bg-cyan-500 border-zinc-900",
  };
  const textAccent = accent === "violet" ? "text-violet-400" : "text-cyan-400";

  return (
    <div className="relative">
      <div className="absolute left-4 top-0 bottom-0 w-px bg-zinc-700 hidden sm:block" />
      <div className="flex flex-col gap-6">
        {items.map((exp, i) => (
          <div
            key={i}
            className="sm:pl-14 relative"
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay={i * 100}
            data-aos-once="true"
          >
            <span
              className={`hidden sm:block absolute left-0 top-3 w-8 h-8 rounded-full border-4 ${accentMap[accent]} z-10`}
            />
            <div className="rounded-2xl border border-zinc-700 bg-zinc-900/60 backdrop-blur-md p-6 shadow-md hover:border-violet-500/60 transition-all duration-300 hover:translate-x-1 light-card">
              <span className={`text-xs font-semibold ${textAccent} uppercase tracking-widest`}>
                {exp.year}
              </span>
              <h3 className="text-lg font-bold mt-1">{exp.role}</h3>
              <p className="text-sm text-zinc-400 mb-3">{exp.company}</p>
              <p className="text-sm leading-relaxed opacity-75">{exp.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="mt-32"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-once="true"
    >
      <h2 className="text-4xl font-bold mb-2">Trayectoria</h2>
      <p className="text-base opacity-50 mb-12">Experiencia laboral y formación</p>

      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-violet-500 inline-block" />
            Experiencia laboral
          </h3>
          <Timeline items={experiences} accent="violet" />
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-500 inline-block" />
            Formación académica
          </h3>
          <Timeline items={education} accent="cyan" />
        </div>
      </div>
    </section>
  );
}
