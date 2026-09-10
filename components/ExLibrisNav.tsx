"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";

interface TocEntry {
  numeral: string;
  label: string;
  id: string;
}

const TOC_ENTRIES: TocEntry[] = [
  { numeral: "I", label: "About", id: "about" },
  { numeral: "II", label: "Experience", id: "experience" },
  { numeral: "III", label: "Projects", id: "projects" },
  { numeral: "IV", label: "Skills", id: "skills" },
  { numeral: "V", label: "Certifications", id: "certifications" },
  { numeral: "VI", label: "Education", id: "education" },
  { numeral: "VII", label: "Contact", id: "contact" },
];

export function ExLibrisNav() {
  const [open, setOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const firstEntryRef = useRef<HTMLAnchorElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const openOverlay = useCallback(() => setOpen(true), []);

  const closeOverlay = useCallback(() => {
    setOpen(false);
    requestAnimationFrame(() => triggerRef.current?.focus());
  }, []);

  const navigateTo = useCallback(
    (id: string) => {
      closeOverlay();
      // Give the exit animation time to start before scrolling
      setTimeout(() => {
        document
          .getElementById(id)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 200);
    },
    [closeOverlay]
  );

  // ── Native touchend on trigger ───────────────────────────────────────────
  useEffect(() => {
    const btn = triggerRef.current;
    if (!btn) return;
    const handler = (e: TouchEvent) => {
      e.preventDefault();
      openOverlay();
    };
    btn.addEventListener("touchend", handler, { passive: false });
    return () => btn.removeEventListener("touchend", handler);
  }, [openOverlay]);

  // Auto-focus first entry when overlay opens
  useEffect(() => {
    if (open) requestAnimationFrame(() => firstEntryRef.current?.focus());
  }, [open]);

  // Keyboard: Escape + focus trap
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeOverlay();
        return;
      }
      if (e.key === "Tab" && overlayRef.current) {
        const focusable = overlayRef.current.querySelectorAll<HTMLElement>(
          'a[href], button, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last?.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first?.focus();
          }
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, closeOverlay]);

  // Prevent body scroll while overlay is open + flip cursor color
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    document.body.style.setProperty("--cursor-color", open ? "#f8f6f1" : "#111111");
    return () => {
      document.body.style.overflow = "";
      document.body.style.setProperty("--cursor-color", "#111111");
    };
  }, [open]);

  // Parachute variants — expands from the top-right corner downward
  const overlayVariants = {
    hidden: {
      clipPath: "inset(0% 0% 100% 0% round 0px)",
      opacity: 0,
    },
    visible: {
      clipPath: "inset(0% 0% 0% 0% round 0px)",
      opacity: 1,
      transition: shouldReduceMotion
        ? { duration: 0.01 }
        : {
            clipPath: {
              type: "spring" as const,
              damping: 36,
              stiffness: 260,
              mass: 0.8,
            },
            opacity: { duration: 0.12 },
          },
    },
    exit: {
      clipPath: "inset(0% 0% 100% 0% round 0px)",
      opacity: 0,
      transition: shouldReduceMotion
        ? { duration: 0.01 }
        : {
            clipPath: { duration: 0.3, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] },
            opacity: { duration: 0.2, delay: 0.1 },
          },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: shouldReduceMotion
        ? { duration: 0.01 }
        : { delay: 0.18, duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
    },
    exit: { opacity: 0, transition: { duration: 0.1 } },
  };

  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.055,
        delayChildren: shouldReduceMotion ? 0 : 0.25,
      },
    },
    exit: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.03,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: shouldReduceMotion
        ? { duration: 0.01 }
        : { duration: 0.32, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
    },
    exit: {
      opacity: 0,
      x: -12,
      transition: { duration: 0.15 },
    },
  };

  return (
    <>
      {/* ── Corner stamp — top right ─────────────────────────────────────── */}
      <motion.button
        ref={triggerRef}
        aria-label="Open table of contents"
        aria-expanded={open}
        aria-haspopup="dialog"
        onClick={openOverlay}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="
          fixed top-7 right-7 z-50
          w-11 h-11 min-w-11 min-h-11
          border border-ink bg-ivory text-ink
          font-display italic text-sm font-bold tracking-wide
          flex items-center justify-center
          cursor-none select-none
          focus-visible:outline-2 focus-visible:outline-ink focus-visible:outline-offset-2
          touch-manipulation
          [-webkit-tap-highlight-color:transparent]
          [-webkit-user-select:none]
        "
        style={{ opacity: open ? 0 : 1, pointerEvents: open ? "none" : "auto" }}
      >
        I.O.
      </motion.button>

      {/* ── Full-screen ToC overlay — parachute animation ────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            ref={overlayRef}
            key="toc-overlay"
            role="dialog"
            aria-modal="true"
            aria-label="Table of contents"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-[100] bg-ink text-ivory flex flex-col justify-center"
            style={{ padding: "clamp(2rem, 8vw, 6rem)" }}
            onClick={(e) => {
              if (e.target === e.currentTarget) closeOverlay();
            }}
          >
            {/* Close button */}
            <TocCloseButton onClose={closeOverlay} />

            {/* Name & title */}
            <motion.div
              variants={headerVariants}
              className="mb-[clamp(2rem,5vw,3.5rem)]"
            >
              <p className="label-caps text-ivory/45 mb-2">Table of Contents</p>
              <h2
                className="font-display font-normal text-ivory leading-[1.15]"
                style={{
                  fontSize: "clamp(1.75rem, 5vw, 3rem)",
                  letterSpacing: "-0.01em",
                }}
              >
                Iseoluwa Osho
              </h2>
              <p className="font-body text-[0.9375rem] text-ivory/55 mt-1.5">
                Full Stack Engineer
              </p>
            </motion.div>

            {/* Hairline divider */}
            <motion.hr
              aria-hidden="true"
              variants={headerVariants}
              className="border-none mb-[clamp(1.5rem,4vw,2.5rem)]"
              style={{ borderTop: "1px solid rgba(248,246,241,0.2)" }}
            />

            {/* ToC entries */}
            <nav aria-label="Site sections">
              <motion.ul
                variants={listVariants}
                className="list-none p-0 m-0 flex flex-col"
              >
                {TOC_ENTRIES.map((entry, i) => (
                  <motion.li
                    key={entry.id}
                    variants={itemVariants}
                    className="border-b"
                    style={{ borderColor: "rgba(248,246,241,0.12)" }}
                  >
                    <TocEntry
                      entry={entry}
                      entryRef={i === 0 ? firstEntryRef : undefined}
                      onNavigate={navigateTo}
                    />
                  </motion.li>
                ))}
              </motion.ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ── Sub-components ────────────────────────────────────────────────────────────

function TocCloseButton({ onClose }: { onClose: () => void }) {
  const ref = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const btn = ref.current;
    if (!btn) return;
    const handler = (e: TouchEvent) => {
      e.preventDefault();
      onClose();
    };
    btn.addEventListener("touchend", handler, { passive: false });
    return () => btn.removeEventListener("touchend", handler);
  }, [onClose]);

  return (
    <motion.button
      ref={ref}
      aria-label="Close table of contents"
      onClick={onClose}
      initial={{ opacity: 0, rotate: -90 }}
      animate={{ opacity: 1, rotate: 0, transition: { delay: 0.3, duration: 0.3 } }}
      exit={{ opacity: 0, rotate: 90, transition: { duration: 0.15 } }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="
        absolute top-7 right-7
        w-9 h-9 min-w-9 min-h-9
        border border-ivory/50 bg-transparent text-ivory
        flex items-center justify-center
        font-body text-base cursor-none select-none
        hover:bg-ivory hover:text-ink
        touch-manipulation
        [-webkit-tap-highlight-color:transparent]
        transition-colors duration-150
      "
    >
      ✕
    </motion.button>
  );
}

function TocEntry({
  entry,
  entryRef,
  onNavigate,
}: {
  entry: TocEntry;
  entryRef?: React.Ref<HTMLAnchorElement>;
  onNavigate: (id: string) => void;
}) {
  const localRef = useRef<HTMLAnchorElement>(null);

  const setRef = useCallback(
    (node: HTMLAnchorElement | null) => {
      (localRef as React.MutableRefObject<HTMLAnchorElement | null>).current =
        node;
      if (typeof entryRef === "function") entryRef(node);
      else if (entryRef && "current" in entryRef)
        (entryRef as React.MutableRefObject<HTMLAnchorElement | null>).current =
          node;
    },
    [entryRef]
  );

  useEffect(() => {
    const el = localRef.current;
    if (!el) return;
    const handler = (e: TouchEvent) => {
      e.preventDefault();
      onNavigate(entry.id);
    };
    el.addEventListener("touchend", handler, { passive: false });
    return () => el.removeEventListener("touchend", handler);
  }, [entry.id, onNavigate]);

  return (
    <motion.a
      ref={setRef}
      href={`#${entry.id}`}
      onClick={(e) => {
        e.preventDefault();
        onNavigate(entry.id);
      }}
      whileHover={{ x: 8, opacity: 0.7 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className="
        flex items-baseline gap-6
        py-[clamp(0.75rem,2vw,1rem)]
        no-underline text-ivory font-display font-normal
        select-none cursor-none
        touch-manipulation
        [-webkit-tap-highlight-color:transparent]
      "
      style={{ fontSize: "clamp(1.25rem, 3.5vw, 1.875rem)" }}
    >
      <span
        aria-hidden="true"
        className="font-display italic text-ivory/40 shrink-0 min-w-10"
        style={{ fontSize: "clamp(0.875rem, 2vw, 1.125rem)" }}
      >
        {entry.numeral}.
      </span>
      <span>{entry.label}</span>
    </motion.a>
  );
}
