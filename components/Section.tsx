import { ReactNode } from "react";

interface SectionProps {
  id: string;
  numeral: string;
  title: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, numeral, title, children, className = "" }: SectionProps) {
  return (
    <section id={id} aria-label={title} className={`py-20 md:py-28 ${className}`}>
      <div className="mb-10">
        <div className="flex items-baseline gap-4 mb-2">
          <span aria-hidden="true" className="numeral">{numeral}.</span>
          <h2 className="font-display text-3xl md:text-4xl font-normal tracking-tight text-ink">
            {title}
          </h2>
        </div>
        <hr aria-hidden="true" className="border-none m-0" style={{ borderTop: "1px solid var(--rule)" }} />
      </div>
      {children}
    </section>
  );
}
