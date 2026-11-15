"use client";

import { useRef, useState } from "react";

import type { Organisation } from "~/data/organisations";

import { OrgLink, WithMentions } from "./OrgLink";

export type Role = {
  id: string;
  tab: string;
  /** Second line on the tab, e.g. the full university name under a degree. */
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

/**
 * All of experience in one card: a list of roles that switches the detail
 * panel beside it. Every panel is rendered (only the selected one is shown),
 * so the content is all in the HTML. WAI-ARIA tabs pattern with roving focus.
 */
export function ExperienceTabs({ roles, mentions }: { roles: Role[]; mentions: Organisation[] }) {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  const select = (i: number, focus = false) => {
    const next = (i + roles.length) % roles.length;
    setActive(next);
    const tab = tabs.current[next];
    if (focus) tab?.focus({ preventScroll: true });
    // In the phone layout the role list scrolls sideways: keep the choice in view.
    tab?.scrollIntoView({ block: "nearest", inline: "nearest" });
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    const moves: Record<string, number> = {
      ArrowDown: active + 1,
      ArrowRight: active + 1,
      ArrowUp: active - 1,
      ArrowLeft: active - 1,
      Home: 0,
      End: roles.length - 1,
    };
    const to = moves[e.key];
    if (to === undefined) return;
    e.preventDefault();
    select(to, true);
  };

  return (
    <div className="xp">
      <div className="xp__tabs" role="tablist" aria-label="Roles" onKeyDown={onKeyDown}>
        {roles.map((r, i) => (
          <button
            key={r.id}
            ref={(el) => {
              tabs.current[i] = el;
            }}
            type="button"
            role="tab"
            id={`xp-tab-${r.id}`}
            aria-selected={active === i}
            aria-controls={`xp-panel-${r.id}`}
            tabIndex={active === i ? 0 : -1}
            className={r.school ? "xp__tab xp__tab--study" : "xp__tab"}
            onClick={() => select(i)}
          >
            <span className="xp__tab-period">{r.period}</span>
            <span className="xp__tab-name">{r.tab}</span>
            {r.school ? <span className="xp__tab-school">{r.school}</span> : null}
          </button>
        ))}
      </div>

      {/* Panels share one grid cell, so the card is as tall as the tallest
          panel and switching roles never shifts the page. */}
      <div className="xp__panels">
      {roles.map((r, i) => (
        <div
          key={r.id}
          role="tabpanel"
          id={`xp-panel-${r.id}`}
          aria-labelledby={`xp-tab-${r.id}`}
          hidden={active !== i}
          tabIndex={0}
          className="xp__panel"
        >
          <div className="xp__meta">
            {r.org ? <OrgLink org={r.org} variant="chip" /> : null}
            {r.current ? <span className="badge">Current role</span> : null}
          </div>

          <h3 className="xp__role">{r.heading}</h3>

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
              <h4 className="card__label">{r.builtLabel ?? "What I built"}</h4>
              <ol
                className="tiles"
                style={{ "--cols": r.built.length === 4 ? 2 : r.built.length } as React.CSSProperties}
              >
                {r.built.map((b, n) => (
                  <li key={b.title} className="tile">
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
      ))}
      </div>
    </div>
  );
}
