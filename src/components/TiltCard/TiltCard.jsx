import { useRef } from "react";

/**
 * Subtle 3D tilt that follows the cursor. Minimal and professional —
 * small max angle, springy reset, disabled on touch / reduced-motion.
 */
export default function TiltCard({ children, className = "", max = 6, ...rest }) {
  const ref = useRef(null);
  const raf = useRef(null);

  const allowed =
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const handleMove = (e) => {
    if (!allowed || !ref.current) return;
    const el = ref.current;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    if (raf.current) return;
    raf.current = requestAnimationFrame(() => {
      el.style.transform = `perspective(700px) rotateX(${(-py * max).toFixed(2)}deg) rotateY(${(px * max).toFixed(2)}deg)`;
      raf.current = null;
    });
  };

  const reset = () => {
    if (!ref.current) return;
    ref.current.style.transform =
      "perspective(700px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ transition: "transform 0.25s ease-out", willChange: "transform" }}
      {...rest}
    >
      {children}
    </div>
  );
}
