const stats = [
  { value: "3+", label: "Años programando", color: "from-violet-500 to-fuchsia-500" },
  { value: "5+", label: "Tecnologías dominadas", color: "from-cyan-500 to-blue-500" },
  { value: "B2", label: "Nivel de inglés", color: "from-emerald-500 to-teal-500" },
  { value: "100%", label: "Pasión por el código", color: "from-amber-500 to-orange-500" },
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
            className="relative overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-900/60 backdrop-blur-md p-6 text-center group hover:border-violet-500/50 transition-all duration-300 light-card"
          >
            <div
              className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br ${s.color}`}
            />
            <div className="relative z-10">
              <p
                className={`text-4xl md:text-5xl font-bold bg-gradient-to-br ${s.color} bg-clip-text text-transparent`}
              >
                {s.value}
              </p>
              <p className="text-sm opacity-70 mt-2">{s.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
