import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_portfolio";
const TEMPLATE_ID = "template_contact";
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | ok | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });
      setStatus("ok");
      formRef.current.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="mt-32"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-once="true"
    >
      <h2 className="text-4xl font-bold mb-2 text-center gradient-text w-fit mx-auto">Contacto</h2>
      <p className="text-base text-center opacity-50 mb-10">
        ¿Tienes un proyecto en mente? Escríbeme
      </p>

      <div className="max-w-xl mx-auto rounded-3xl border border-zinc-700 bg-zinc-900/60 backdrop-blur-md p-8 shadow-lg dark:bg-zinc-900/60 light-card">
        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium opacity-70">Nombre</label>
            <input
              name="from_name"
              required
              type="text"
              placeholder="Tu nombre"
              className="bg-zinc-800/60 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500 transition-colors"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium opacity-70">Email</label>
            <input
              name="reply_to"
              required
              type="email"
              placeholder="tu@email.com"
              className="bg-zinc-800/60 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500 transition-colors"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium opacity-70">Mensaje</label>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Cuéntame tu idea..."
              className="bg-zinc-800/60 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500 transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full py-3 rounded-xl bg-violet-600 hover:bg-violet-500 disabled:opacity-50 font-semibold transition-all duration-300 text-white"
          >
            {status === "sending" ? "Enviando..." : "Enviar mensaje"}
          </button>

          {status === "ok" && (
            <p className="text-center text-green-400 text-sm">
              ¡Mensaje enviado! Te respondo pronto.
            </p>
          )}
          {status === "error" && (
            <p className="text-center text-red-400 text-sm">
              Algo falló. Escríbeme directamente a airamfuentes2020@gmail.com
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
