"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";

import type { Organisation } from "~/data/organisations";

import { OrgLink, WithMentions } from "./OrgLink";

export type Role = {
  id: string;
  tab: string;
  /** Second line on the row, e.g. the full university name under a degree. */
  school?: string;
  period: string;
  current: boolean;
  heading: string;
  lead?: string;
  tags?: string[];
  org?: Organisation;
  built?: { title: string; detail: string }[];
  builtLabel?: string;
};

const pad = (n: number) => String(n).padStart(2, "0");

/** Matches the CSS breakpoint where the roles become a stacked accordion. */
const STACKED = "(max-width: 1023px)";

/**
 * All of experience in one card. In the DOM each role is a heading button
 * followed by its panel (the WAI-ARIA accordion pattern), so on phones the
 * content opens directly under the row you tapped. On desktop the grid puts
 * the buttons in a left column and the open panel beside them.
 *
 * Every panel is rendered (only the open one is shown), so all of the
 * content is in the HTML. On desktop one role is always open; on phones the
 * open one can be closed again.
 */
export function ExperienceTabs({ roles, mentions }: { roles: Role[]; mentions: Organisation[] }) {
  const [active, setActive] = useState(0);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);

  // Desktop has no "all closed" state: reopen the first role if needed.
  useEffect(() => {
    const mq = window.matchMedia(STACKED);
    const onChange = () => {
      if (!mq.matches) setActive((a) => (a === -1 ? 0 : a));
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const select = (i: number, focus = false) => {
    const stacked = window.matchMedia(STACKED).matches;
    const next = (i + roles.length) % roles.length;
    const target = stacked && next === active ? -1 : next;
    const button = buttons.current[next];

    // Closing a panel above the tapped row would pull the row up under the
    // finger. Keep the row where it was on screen.
    const before = button?.getBoundingClientRect().top ?? 0;
    flushSync(() => setActive(target));
    const after = button?.getBoundingClientRect().top ?? 0;
    if (stacked && Math.abs(after - before) > 1) window.scrollBy(0, after - before);

    if (focus) button?.focus({ preventScroll: true });
  };

  const onKeyDown = (e: React.KeyboardEvent, i: number) => {
    const moves: Record<string, number> = {
      ArrowDown: i + 1,
      ArrowUp: i - 1,
      Home: 0,
      End: roles.length - 1,
    };
    const to = moves[e.key];
    if (to === undefined) return;
    e.preventDefault();
    buttons.current[(to + roles.length) % roles.length]?.focus();
  };

  return (
    <div className="xp" style={{ "--n": roles.length } as React.CSSProperties}>
      {roles.map((r, i) => (
        <Fragment key={r.id}>
          <h3 className="xp__head">
            <button
              ref={(el) => {
                buttons.current[i] = el;
              }}
              type="button"
              id={`xp-tab-${r.id}`}
              aria-expanded={active === i}
              aria-controls={`xp-panel-${r.id}`}
              className={r.school ? "xp__tab xp__tab--study" : "xp__tab"}
              onClick={() => select(i)}
              onKeyDown={(e) => onKeyDown(e, i)}
            >
              <span className="xp__tab-period">{r.period}</span>
              <span className="xp__tab-name">{r.tab}</span>
              {r.school ? <span className="xp__tab-school">{r.school}</span> : null}
            </button>
          </h3>

          <div
            role="region"
            id={`xp-panel-${r.id}`}
            aria-labelledby={`xp-tab-${r.id}`}
            hidden={active !== i}
            className="xp__panel"
          >
            <div className="xp__meta">
              {r.org ? <OrgLink org={r.org} variant="chip" /> : null}
              {r.current ? <span className="badge">Current role</span> : null}
            </div>

            {/* A degree's heading repeats its row name; the stacked layout hides it. */}
            <h4 className={r.heading === r.tab ? "xp__role xp__role--repeat" : "xp__role"}>
              {r.heading}
            </h4>

            {r.lead ? (
              <p className="xp__lead">
                <WithMentions text={r.lead} orgs={mentions} />
              </p>
            ) : null}

            {r.tags ? (
              <ul className="tags" aria-label="Technologies">
                {r.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            ) : null}

            {r.built ? (
              <div className="xp__built">
                <h5 className="card__label">{r.builtLabel ?? "What I built"}</h5>
                <ol
                  className="tiles"
                  style={{ "--cols": r.built.length === 4 ? 2 : r.built.length } as React.CSSProperties}
                >
                  {r.built.map((b, n) => (
                    <li key={b.title} className={r.built!.length > 1 ? "tile" : "tile tile--plain"}>
                      {r.built!.length > 1 ? <span className="tile__index">{pad(n + 1)}</span> : null}
                      <p className="tile__title">
                        <WithMentions text={b.title} orgs={mentions} />
                      </p>
                      <p className="tile__text">
                        <WithMentions text={b.detail} orgs={mentions} />
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            ) : null}
          </div>
        </Fragment>
      ))}
    </div>
  );
}
