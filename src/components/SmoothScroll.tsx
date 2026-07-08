"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      prevent: (node) =>
        node.nodeName === "PRE" ||
        node.nodeName === "CODE" ||
        !!(node as HTMLElement).closest?.("pre, code, table"),
    });

    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    const resizeObserver = new ResizeObserver(() => lenis.resize());
    resizeObserver.observe(document.body);

    const handleLoad = () => lenis.resize();
    window.addEventListener("load", handleLoad);

    document.querySelectorAll("img").forEach((img) => {
      if (!img.complete) {
        img.addEventListener("load", handleLoad, { once: true });
      }
    });

    return () => {
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
      window.removeEventListener("load", handleLoad);
      lenis.destroy();
    };
  }, []);

  return null;
}
