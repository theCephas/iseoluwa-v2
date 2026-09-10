"use client";

import { useEffect } from "react";
import Link from "next/link";

interface Props {
  title: string;
  issuer: string;
  date: string;
  url: string;
}

export function CertViewer({ title, issuer, date, url }: Props) {
  useEffect(() => {
    document.body.style.cursor = "auto";
    return () => { document.body.style.cursor = ""; };
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col bg-ink">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-rule-dark shrink-0">
        <div className="flex flex-col gap-0.5">
          <p className="font-body text-[0.6875rem] font-semibold tracking-[0.15em] uppercase text-ivory m-0">
            {title}
          </p>
          <p
            className="font-body text-[0.6875rem] tracking-[0.08em] uppercase m-0"
            style={{ color: "rgba(248,246,241,0.5)" }}
          >
            {issuer} · {date}
          </p>
        </div>

        <div className="flex items-center gap-2">
          {/* Download */}
          <a
            href={url}
            download
            aria-label="Download certificate"
            className="
              h-8 px-3
              border border-ivory/30 
              flex items-center justify-center
              font-body text-[0.6875rem] tracking-[0.12em] uppercase
              select-none
              transition-colors duration-150
              bg-ivory text-ink
              touch-manipulation [-webkit-tap-highlight-color:transparent]
            "
          >
            Download
          </a>

          {/* Back to portfolio */}
          <Link
            href="/#certifications"
            aria-label="Back to portfolio"
            className="
              h-8 px-3
              border border-ivory/30
              flex items-center justify-center
              font-body text-[0.6875rem] tracking-[0.12em] uppercase
              select-none
              transition-colors duration-150
              bg-ivory text-ink
              touch-manipulation [-webkit-tap-highlight-color:transparent]
            "
          >
            ← Portfolio
          </Link>
        </div>
      </div>

      {/* PDF */}
      <iframe
        src={url}
        title={title}
        className="flex-1 w-full border-none bg-ivory"
      />
    </div>
  );
}
