"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

/** Gap kept between a stuck card's bottom and the viewport's bottom edge. */
const BOTTOM_GAP = 16;

/*
 * Sticky offsets for stacked cards. A card sticks with a small stepped offset
 * so the edge of the card underneath stays visible. A card taller than the
 * viewport sticks later, once its bottom is on screen, so none of its content
 * is ever trapped below the fold.
 */
function layoutStacks() {
  const nav =
    parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--bar-h")) || 0;
  document.querySelectorAll<HTMLElement>(".stack").forEach((stack) => {
    stack.querySelectorAll<HTMLElement>(".stack__item").forEach((item, i) => {
      const card = item.firstElementChild as HTMLElement | null;
      if (!card) return;
      const wanted = nav + i * 12;
      const fits = window.innerHeight - card.offsetHeight - BOTTOM_GAP;
      item.style.setProperty("--stick", `${Math.min(wanted, fits)}px`);
    });
  });
}

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
    layoutStacks();
    updateBarTone();
    let toneFrame = 0;
    const onScroll = () => {
      cancelAnimationFrame(toneFrame);
      toneFrame = requestAnimationFrame(updateBarTone);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    const observer = new ResizeObserver(() => {
      layoutStacks();
      ScrollTrigger.refresh();
    });
    document.querySelectorAll(".stack__item > .card").forEach((c) => observer.observe(c));
    window.addEventListener("resize", layoutStacks);

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const lenis = new Lenis({ lerp: 0.1, anchors: true });
      lenis.on("scroll", () => ScrollTrigger.update());
      const tick = (time: number) => lenis.raf(time * 1000);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);

      // Each card recedes as the next one slides over it.
      document.querySelectorAll<HTMLElement>(".stack").forEach((stack) => {
        const items = Array.from(stack.querySelectorAll<HTMLElement>(".stack__item"));
        items.forEach((item, i) => {
          if (i === 0) return;
          const below = items[i - 1]?.firstElementChild;
          if (!below) return;
          gsap.to(below, {
            scale: 0.92,
            "--dim": 0.6,
            ease: "none",
            scrollTrigger: {
              trigger: item,
              start: "top bottom",
              end: () => `top top+=${parseFloat(item.style.getPropertyValue("--stick")) || 0}`,
              scrub: true,
              invalidateOnRefresh: true,
            },
          });
        });
      });

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

      return () => {
        gsap.ticker.remove(tick);
        lenis.destroy();
      };
    });

    return () => {
      mm.revert();
      observer.disconnect();
      cancelAnimationFrame(toneFrame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", layoutStacks);
    };
  }, []);

  return null;
}
