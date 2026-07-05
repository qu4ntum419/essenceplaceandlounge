import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-5 left-5 z-40 grid place-items-center h-11 w-11 rounded-full bg-card border border-border text-gold hover:bg-gold hover:text-primary-foreground transition-colors"
      aria-label="Back to top">
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}