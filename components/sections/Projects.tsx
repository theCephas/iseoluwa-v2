"use client";

import { useEffect, useRef, useState } from "react";
import { projects } from "@/lib/data";
import { Section } from "@/components/Section";
import { Tag } from "@/components/Tag";
import { HairlineDivider } from "@/components/HairlineDivider";

const featured = projects.filter((p) => p.featured);
const extra    = projects.filter((p) => !p.featured);

// ─── Single project entry ─────────────────────────────────────────────────────
function ProjectEntry({ project, index, last }: { project: typeof projects[0]; index: number; last: boolean }) {
  return (
    <div>
      <div className={`${index === 0 ? "pt-0" : "pt-10"} pb-10`}>
        {/* Header */}
        <div className="flex items-baseline gap-3.5 flex-wrap mb-2">
          <span aria-hidden="true" className="numeral">{String(index + 1).padStart(2, "0")}.</span>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-display font-normal text-ink no-underline border-b border-rule transition-[border-color] duration-150 hover:border-ink"
            style={{ fontSize: "clamp(1.125rem, 2.5vw, 1.375rem)" }}
          >
            {project.name}
          </a>
          <span className="meta-tag">{project.date}</span>
        </div>

        {/* Description */}
        <p
          className="font-body text-[0.9375rem] leading-[1.75] text-ink-light max-w-[60ch] mb-3"
          style={{ paddingLeft: "2.375rem" }}
        >
          {project.description}
        </p>

        {/* Highlights */}
        <ul className="list-none m-0 mb-4 flex flex-col gap-1.5" style={{ padding: "0 0 0 2.375rem" }}>
          {project.highlights.map((h, j) => (
            <li key={j} className="font-body text-sm leading-[1.7] text-muted pl-5 relative bullet-dash">
              {h}
            </li>
          ))}
        </ul>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5" style={{ paddingLeft: "2.375rem" }}>
          {project.tech.map((t) => <Tag key={t} label={t} />)}
        </div>
      </div>
      {!last && <HairlineDivider />}
    </div>
  );
}

// ─── "View all" modal ─────────────────────────────────────────────────────────
function AllProjectsModal({ onClose }: { onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    requestAnimationFrame(() => closeRef.current?.focus());
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") { e.preventDefault(); onClose(); } };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  // Native touchend on close button for mobile reliability
  useEffect(() => {
    const btn = closeRef.current;
    if (!btn) return;
    const handler = (e: TouchEvent) => { e.preventDefault(); onClose(); };
    btn.addEventListener("touchend", handler, { passive: false });
    return () => btn.removeEventListener("touchend", handler);
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="All projects"
      className="fixed inset-0 z-[200] bg-ink/90 flex items-end md:items-center justify-center animate-[fade-in_200ms_ease_forwards]"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-ivory w-full md:max-w-2xl md:mx-6 max-h-[90svh] flex flex-col">
        {/* Modal header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-rule shrink-0">
          <p className="label-caps m-0">More Projects</p>
          <button
            ref={closeRef}
            aria-label="Close projects"
            onClick={onClose}
            className="
              w-8 h-8 border border-ink bg-transparent text-ink
              flex items-center justify-center text-sm cursor-pointer select-none
              transition-colors duration-150 hover:bg-ink hover:text-ivory
              touch-manipulation [-webkit-tap-highlight-color:transparent]
            "
          >
            ✕
          </button>
        </div>

        {/* Scrollable project list */}
        <div className="overflow-y-auto px-6">
          {extra.map((project, i) => (
            <div key={project.name}>
              <div className="py-8">
                <div className="flex items-baseline gap-3 flex-wrap mb-2">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display font-normal text-ink no-underline border-b border-rule transition-[border-color] duration-150 hover:border-ink"
                    style={{ fontSize: "clamp(1rem, 2.5vw, 1.25rem)" }}
                  >
                    {project.name}
                  </a>
                  <span className="meta-tag">{project.date}</span>
                </div>

                <p className="font-body text-[0.875rem] leading-[1.75] text-ink-light max-w-[60ch] mb-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => <Tag key={t} label={t} />)}
                </div>
              </div>
              {i < extra.length - 1 && <HairlineDivider />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────
export function Projects() {
  const [modalOpen, setModalOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Native touchend for "View all" button
  useEffect(() => {
    const btn = triggerRef.current;
    if (!btn) return;
    const handler = (e: TouchEvent) => { e.preventDefault(); setModalOpen(true); };
    btn.addEventListener("touchend", handler, { passive: false });
    return () => btn.removeEventListener("touchend", handler);
  }, []);

  return (
    <>
      <Section id="projects" numeral="III" title="Projects">
        <div className="flex flex-col">
          {featured.map((project, i) => (
            <ProjectEntry
              key={project.name}
              project={project}
              index={i}
              last={i === featured.length - 1}
            />
          ))}
        </div>

        {/* View all button */}
        {extra.length > 0 && (
          <div className="mt-10">
            <HairlineDivider />
            <div className="pt-8">
              <button
                ref={triggerRef}
                onClick={() => setModalOpen(true)}
                className="
                  inline-flex items-center gap-3
                  label-caps text-ink border-b border-rule pb-px
                  bg-transparent border-x-0 border-t-0 cursor-pointer
                  transition-[border-color] duration-150 hover:border-ink
                  touch-manipulation [-webkit-tap-highlight-color:transparent]
                "
              >
                View all projects
                <span aria-hidden="true" className="font-display italic text-muted text-xs">
                  +{extra.length} more
                </span>
              </button>
            </div>
          </div>
        )}
      </Section>

      {modalOpen && (
        <AllProjectsModal onClose={() => setModalOpen(false)} />
      )}

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>
    </>
  );
}
