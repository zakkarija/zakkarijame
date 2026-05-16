"use client";

import { useEffect, useRef } from "react";

const CAL_URL = "https://cal.com/zakkarija-micallef";
const EMAIL = "zak.micallef27@gmail.com";

export function BookCall() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const open = () => dialogRef.current?.showModal();
    window.addEventListener("book-call:open", open);
    return () => window.removeEventListener("book-call:open", open);
  }, []);

  const close = () => dialogRef.current?.close();

  const onBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) close();
  };

  return (
    <>
      <button
        type="button"
        className="book-fab"
        onClick={() => dialogRef.current?.showModal()}
        aria-label="Book a consultation call"
      >
        <span className="book-fab__dot" aria-hidden="true" />
        Book a call
      </button>
      <dialog ref={dialogRef} className="book-modal" onClick={onBackdropClick}>
        <div className="book-modal__inner">
          <button
            type="button"
            className="book-modal__close"
            onClick={close}
            aria-label="Close"
          >
            ×
          </button>
          <span className="book-modal__kicker">Set up a call</span>
          <h2 className="book-modal__title">
            Talk through what&apos;s <em>possible</em>.
          </h2>
          <p className="book-modal__body">
            Whether you know exactly what you want built, or just want to see
            what AI can actually do for your business, book a 30-minute call.
            No pitch.
          </p>
          <a
            className="book-modal__cta"
            href={CAL_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book on Cal.com <span aria-hidden="true">↗</span>
          </a>
          <a className="book-modal__alt" href={`mailto:${EMAIL}`}>
            or email {EMAIL}
          </a>
        </div>
      </dialog>
    </>
  );
}

export function BookCallTrigger({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => window.dispatchEvent(new Event("book-call:open"))}
    >
      {children}
    </button>
  );
}
