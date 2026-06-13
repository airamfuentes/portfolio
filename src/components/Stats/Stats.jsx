const stats = [
  { value: "2+", label: "Años programando" },
  { value: "5+", label: "Tecnologías dominadas" },
  { value: "B2", label: "Nivel de inglés" },
  { value: "100%", label: "Pasión por el código" },
];

export default function Stats() {
  return (
    <section
      className="mt-24"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-once="true"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <div
            key={i}
            data-aos="zoom-in"
            data-aos-delay={i * 100}
            data-aos-once="true"
            className="rounded-2xl border border-zinc-700/80 bg-zinc-900/50 backdrop-blur-md p-6 text-center transition-colors duration-300 hover:border-zinc-500/60 light-card"
          >
            <p className="text-4xl md:text-5xl font-semibold accent-text">
              {s.value}
            </p>
            <p className="text-sm opacity-60 mt-2">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
