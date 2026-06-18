import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

// EmailJS public key is safe to expose — it ships in the client bundle by design.
const SERVICE_ID = "service_2s4jctn";
const TEMPLATE_ID = "template_p7tre8p";
const PUBLIC_KEY = "6yAX0WTbHRirnhIpm";

const EMAIL = "airamfuentes2020@gmail.com";

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | ok | error
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });
      setStatus("ok");
      formRef.current.reset();
    } catch (err) {
      console.error("EmailJS error:", err?.status, err?.text || err);
      setStatus("error");
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
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
      <h2 className="text-4xl font-bold mb-10 text-center">Contacto</h2>

      <div className="max-w-xl mx-auto rounded-3xl border border-zinc-700 bg-zinc-900/60 backdrop-blur-md p-8 shadow-lg dark:bg-zinc-900/60 light-card">
        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium opacity-70">Nombre</label>
            <input
              name="from_name"
              required
              type="text"
              placeholder="Tu nombre"
              className="bg-zinc-800/60 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-400 transition-colors"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium opacity-70">Email</label>
            <input
              name="reply_to"
              required
              type="email"
              placeholder="tu@email.com"
              className="bg-zinc-800/60 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-400 transition-colors"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium opacity-70">Mensaje</label>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Cuéntame tu idea..."
              className="bg-zinc-800/60 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-400 transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full py-3 rounded-xl btn-accent disabled:opacity-50 font-medium transition-all duration-300 text-white"
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

        <div className="mt-6 pt-6 border-t border-zinc-700/60 flex items-center justify-center">
          <button
            type="button"
            onClick={copyEmail}
            className="group inline-flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity"
            aria-label="Copiar email"
          >
            <i className={`ri-${copied ? "check" : "file-copy"}-line accent-text`}></i>
            <span>{copied ? "¡Email copiado!" : EMAIL}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
