import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(pct);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-1 z-[100] transition-[width] duration-150 ease-out"
      style={{
        width: `${progress}%`,
        background:
          "linear-gradient(90deg, #8b5cf6 0%, #06b6d4 50%, #10b981 100%)",
        boxShadow: "0 0 10px rgba(139, 92, 246, 0.6)",
      }}
    />
  );
}
