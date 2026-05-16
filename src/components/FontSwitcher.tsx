"use client";

import { useEffect, useState } from "react";

type FontKey = "fraunces" | "instrument";

const STORAGE_KEY = "display-font";

export function FontSwitcher() {
  const [font, setFont] = useState<FontKey>("instrument");

  useEffect(() => {
    const stored = (localStorage.getItem(STORAGE_KEY) as FontKey | null) ?? "instrument";
    setFont(stored);
    document.documentElement.dataset.font = stored;
  }, []);

  const choose = (next: FontKey) => {
    setFont(next);
    localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.dataset.font = next;
  };

  return (
    <div className="font-switcher" role="group" aria-label="Display font">
      <button
        type="button"
        aria-pressed={font === "instrument"}
        onClick={() => choose("instrument")}
      >
        OG
      </button>
      <button
        type="button"
        aria-pressed={font === "fraunces"}
        onClick={() => choose("fraunces")}
      >
        Fraunces
      </button>
    </div>
  );
}
