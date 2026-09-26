"use client";

import { Fragment, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";

import type { Organisation } from "~/data/organisations";

const EDGE = 12;
const GAP = 10;
const WIDTH = 320;

function InfoIcon() {
  return (
    <svg className="org__icon" viewBox="0 0 16 16" aria-hidden="true">
      <circle cx="8" cy="8" r="6.75" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 7.25v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="8" cy="4.9" r="0.95" fill="currentColor" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg className="arrow" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M4.5 11.5 11.5 4.5M6 4.5h5.5V10" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

/**
 * An organisation's name that opens a small card with context and links.
 * Uses the native popover API (light dismiss, Esc, top layer) and places the
 * card beside its trigger. The card is portalled to <body> so it can sit
 * inside running text without breaking HTML nesting.
 */
export function OrgLink({
  org,
  children,
  variant = "inline",
}: {
  org: Organisation;
  children?: React.ReactNode;
  variant?: "inline" | "chip";
}) {
  const popId = `org-${org.id}-${useId().replace(/[^a-zA-Z0-9-]/g, "")}`;
  const triggerRef = useRef<HTMLButtonElement>(null);
  const popRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const pop = popRef.current;
    const trigger = triggerRef.current;
    if (!pop || !trigger) return;

    const placeBelow = () => {
      const r = trigger.getBoundingClientRect();
      const width = Math.min(WIDTH, window.innerWidth - EDGE * 2);
      pop.style.top = `${r.bottom + GAP}px`;
      pop.style.left = `${Math.min(Math.max(r.left, EDGE), window.innerWidth - width - EDGE)}px`;
    };

    // Once open it has a real height: flip above if it would run off screen.
    const refine = () => {
      const r = trigger.getBoundingClientRect();
      const h = pop.offsetHeight;
      if (r.bottom + GAP + h > window.innerHeight - EDGE && r.top - GAP - h > EDGE) {
        pop.style.top = `${r.top - GAP - h}px`;
      }
    };

    const close = () => {
      if (pop.matches(":popover-open")) pop.hidePopover();
    };

    const onBeforeToggle = (e: Event) => {
      if ((e as Event & { newState?: string }).newState === "open") placeBelow();
    };

    const onToggle = (e: Event) => {
      if ((e as Event & { newState?: string }).newState === "open") {
        refine();
        window.addEventListener("scroll", close, { passive: true });
        window.addEventListener("resize", close);
      } else {
        window.removeEventListener("scroll", close);
        window.removeEventListener("resize", close);
      }
    };

    pop.addEventListener("beforetoggle", onBeforeToggle);
    pop.addEventListener("toggle", onToggle);
    return () => {
      pop.removeEventListener("beforetoggle", onBeforeToggle);
      pop.removeEventListener("toggle", onToggle);
      window.removeEventListener("scroll", close);
      window.removeEventListener("resize", close);
    };
  }, [mounted]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className={`org org--${variant}`}
        popoverTarget={popId}
        aria-haspopup="dialog"
      >
        {children ?? org.name}
        <InfoIcon />
      </button>
      {mounted
        ? createPortal(
            <div
              ref={popRef}
              id={popId}
              popover="auto"
              role="dialog"
              aria-label={org.name}
              className="org-pop"
            >
              <p className="org-pop__name">{org.name}</p>
              <p className="org-pop__blurb">{org.blurb}</p>
              <ul className="org-pop__links">
                {org.links.map((l) => (
                  <li key={l.url}>
                    <a href={l.url} target="_blank" rel="noopener noreferrer">
                      {l.label}
                      <ArrowIcon />
                    </a>
                  </li>
                ))}
              </ul>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}

/** Body copy with any organisation mentions turned into OrgLinks. */
export function WithMentions({ text, orgs }: { text: string; orgs: Organisation[] }) {
  const targets = orgs.flatMap((o) => (o.mentions ?? []).map((m) => ({ m, o })));
  const parts: React.ReactNode[] = [];
  let rest = text;
  let key = 0;

  while (rest) {
    let best: { i: number; m: string; o: Organisation } | null = null;
    for (const t of targets) {
      const i = rest.indexOf(t.m);
      if (i >= 0 && (!best || i < best.i)) best = { i, m: t.m, o: t.o };
    }
    if (!best) {
      parts.push(<Fragment key={key++}>{rest}</Fragment>);
      break;
    }
    parts.push(<Fragment key={key++}>{rest.slice(0, best.i)}</Fragment>);
    parts.push(
      <OrgLink key={key++} org={best.o}>
        {best.m}
      </OrgLink>,
    );
    rest = rest.slice(best.i + best.m.length);
  }

  return <>{parts}</>;
}
