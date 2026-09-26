"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

/** Tell the fixed bar which surface is under it so it can keep its contrast. */
function updateBarTone() {
  const barH =
    parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--bar-h")) || 0;
  const card = document
    .elementsFromPoint(window.innerWidth / 2, barH / 2)
    .find((el) => el.classList.contains("card"));
  const tone = !card
    ? "dark"
    : card.classList.contains("card--paper")
      ? "light"
      : card.classList.contains("card--accent")
        ? "accent"
        : "dark";
  if (document.documentElement.dataset.bar !== tone) {
    document.documentElement.dataset.bar = tone;
  }
}

export function Motion() {
  useEffect(() => {
    updateBarTone();
    let toneFrame = 0;
    const onScroll = () => {
      cancelAnimationFrame(toneFrame);
      toneFrame = requestAnimationFrame(updateBarTone);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const lenis = new Lenis({ lerp: 0.1, anchors: true });
      lenis.on("scroll", () => ScrollTrigger.update());
      const tick = (time: number) => lenis.raf(time * 1000);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);

      // Oversized section headings drift sideways with the scroll.
      document.querySelectorAll<HTMLElement>(".drift").forEach((el) => {
        gsap.fromTo(
          el,
          { xPercent: 6 },
          {
            xPercent: -6,
            ease: "none",
            scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
          },
        );
      });

      // Cards grow into place as they arrive.
      document.querySelectorAll<HTMLElement>(".grow").forEach((el) => {
        gsap.fromTo(
          el,
          { scale: 0.92 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: { trigger: el, start: "top bottom", end: "top 40%", scrub: true },
          },
        );
      });

      return () => {
        gsap.ticker.remove(tick);
        lenis.destroy();
      };
    });

    return () => {
      mm.revert();
      cancelAnimationFrame(toneFrame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
}
