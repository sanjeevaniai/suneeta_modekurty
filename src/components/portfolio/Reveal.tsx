import { ReactNode, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  className?: string;
}

/**
 * Scroll-linked reveal: as the section scrolls up into view it emerges from the
 * left (the side panel) and fades in. The motion is tied directly to scroll
 * position — not a one-shot trigger — so it feels smooth and seamless rather
 * than popping. Styles are written straight to the DOM each frame (no React
 * re-render of the section). SSR/prerender-safe (renders fully visible, so the
 * copy is in the static HTML) and honors prefers-reduced-motion.
 */
const Reveal = ({ children, className }: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Reduced motion: pin fully visible, no scroll animation.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.transform = "none";
      el.style.opacity = "1";
      return;
    }

    let raf = 0;
    const apply = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const wh = window.innerHeight || document.documentElement.clientHeight;
      // Emerge while the section's top travels from near the bottom (start) up to
      // the upper-middle of the viewport (end), where it settles fully in place.
      const start = wh * 0.92;
      const end = wh * 0.5;
      const p = Math.min(1, Math.max(0, (start - rect.top) / (start - end)));
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic — graceful settle
      el.style.transform = `translate3d(${(1 - eased) * -90}px, 0, 0)`;
      el.style.opacity = String(0.1 + eased * 0.9);
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(apply);
    };

    el.style.willChange = "transform, opacity";
    apply();
    // capture:true so this also catches scroll from the inner <main> scroller.
    window.addEventListener("scroll", onScroll, { passive: true, capture: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll, { capture: true } as EventListenerOptions);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
};

export default Reveal;
