"use client";

import { useEffect, useRef } from "react";

interface CertModalProps {
  url: string;
  title: string;
  onClose: () => void;
}

export function CertModal({ url, title, onClose }: CertModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  // Native touchend on close button — same fix as ExLibrisNav
  useEffect(() => {
    const btn = closeRef.current;
    if (!btn) return;
    const handler = (e: TouchEvent) => {
      e.preventDefault();
      onClose();
    };
    btn.addEventListener("touchend", handler, { passive: false });
    return () => btn.removeEventListener("touchend", handler);
  }, [onClose]);

  // Focus close button when modal opens
  useEffect(() => {
    requestAnimationFrame(() => closeRef.current?.focus());
  }, []);

  // Keyboard: Escape to close
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  // Prevent body scroll while open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Certificate: ${title}`}
      className="fixed inset-0 z-200 bg-ink/80 flex flex-col animate-[fade-in_200ms_ease_forwards]"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Header bar */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-rule-dark bg-ink shrink-0">
        <p className="font-body text-[0.6875rem] font-semibold tracking-[0.15em] uppercase text-ivory/60 m-0">
          {title}
        </p>
        <button
          ref={closeRef}
          aria-label="Close certificate"
          onClick={onClose}
          className="
            w-8 h-8 border border-ivory/30 bg-transparent text-ivory
            flex items-center justify-center text-sm cursor-pointer select-none
            transition-colors duration-150
            hover:bg-ivory hover:text-ink
            touch-manipulation [-webkit-tap-highlight-color:transparent]
          "
        >
          ✕
        </button>
      </div>

      {/* PDF iframe */}
      <iframe
        src={url}
        title={title}
        className="flex-1 w-full border-none bg-ivory"
      />
    </div>
  );
}
