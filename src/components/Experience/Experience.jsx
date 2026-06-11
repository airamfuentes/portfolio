const experiences = [
  {
    year: "2023 – presente",
    role: "Desarrollador Web Freelance",
    company: "Proyectos propios",
    desc: "Diseño y desarrollo de aplicaciones web completas. Stack principal: Laravel, Vue 3, React, Tailwind CSS e integración de pasarelas de pago.",
  },
  {
    year: "2024",
    role: "Proyecto Rustikan",
    company: "Marketplace local — Lanzarote",
    desc: "Plataforma de comercio sostenible con sistema de moneda propia (Rusticoin), pagos con Stripe, chat en vivo y paneles de administración multi-rol.",
  },
  {
    year: "2022 – 2024",
    role: "Formación en Desarrollo de Aplicaciones Web",
    company: "DAW — España",
    desc: "Ciclo formativo superior en Desarrollo de Aplicaciones Web. Bases sólidas de programación, bases de datos, despliegue y arquitectura cliente-servidor.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="mt-32"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-once="true"
    >
      <h2 className="text-4xl font-bold mb-2">Experiencia</h2>
      <p className="text-base opacity-50 mb-12">Mi trayectoria hasta aquí</p>

      <div className="relative">
        {/* línea vertical */}
        <div className="absolute left-4 top-0 bottom-0 w-px bg-zinc-700 hidden sm:block" />

        <div className="flex flex-col gap-8">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="sm:pl-14 relative"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={i * 150}
              data-aos-once="true"
            >
              {/* dot */}
              <span className="hidden sm:block absolute left-0 top-3 w-8 h-8 rounded-full bg-violet-600 border-4 border-zinc-900 z-10" />

              <div className="rounded-2xl border border-zinc-700 bg-zinc-900/60 backdrop-blur-md p-6 shadow-md hover:border-violet-500/60 transition-colors duration-300 light-card">
                <span className="text-xs font-semibold text-violet-400 uppercase tracking-widest">
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
    </section>
  );
}
