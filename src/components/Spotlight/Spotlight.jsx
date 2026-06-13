import { useEffect } from "react";

/**
 * A very subtle cursor-following spotlight rendered behind the content.
 * Pointer-events: none, single passive listener, throttled with rAF — cheap.
 */
export default function Spotlight() {
  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    if (!mq.matches) return; // skip on touch devices

    let raf = null;
    const onMove = (e) => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        document.documentElement.style.setProperty("--mx", `${e.clientX}px`);
        document.documentElement.style.setProperty("--my", `${e.clientY}px`);
        raf = null;
      });
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return <div className="spotlight" aria-hidden="true" />;
}
