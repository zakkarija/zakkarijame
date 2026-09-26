"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

/**
 * A mailto link that also copies the address. mailto does nothing for
 * visitors without a default mail app (most webmail users), so the copy
 * plus a short notice means the click always gives them the address.
 */
export function EmailLink({
  email,
  className,
  children,
}: {
  email: string;
  className?: string;
  children: React.ReactNode;
}) {
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => {
    setMounted(true);
    return () => window.clearTimeout(timer.current);
  }, []);

  const onClick = () => {
    if (!navigator.clipboard) return;
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setCopied(true);
        window.clearTimeout(timer.current);
        timer.current = window.setTimeout(() => setCopied(false), 2600);
      })
      .catch(() => {
        // Clipboard blocked: the mailto link still does its job.
      });
  };

  return (
    <>
      <a href={`mailto:${email}`} className={className} onClick={onClick}>
        {children}
      </a>
      {mounted
        ? createPortal(
            <p className={`toast ${copied ? "is-visible" : ""}`} role="status" aria-live="polite">
              {copied ? `Copied ${email}` : ""}
            </p>,
            document.body,
          )
        : null}
    </>
  );
}
