import { useEffect } from "react";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Fades/slides elements with the `rv` class into view as they enter the screen. */
export function useReveal() {
  useEffect(() => {
    if (prefersReducedMotion() || !("IntersectionObserver" in window)) return;

    const root = document.documentElement;
    root.classList.add("js");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -5% 0px" }
    );
    document.querySelectorAll(".rv").forEach((el) => io.observe(el));

    return () => {
      io.disconnect();
      root.classList.remove("js");
    };
  }, []);
}

/** Drives the thin gold progress bar at the top of the page. */
export function useScrollProgress(progressRef) {
  useEffect(() => {
    let ticking = false;
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${
          max > 0 ? Math.min(1, window.scrollY / max) : 0
        })`;
      }
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [progressRef]);
}
