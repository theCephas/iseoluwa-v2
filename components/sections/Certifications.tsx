"use client";

import { useState } from "react";
import { certifications } from "@/lib/data";
import { Section } from "@/components/Section";
import { HairlineDivider } from "@/components/HairlineDivider";
import { CertModal } from "@/components/CertModal";

export function Certifications() {
  const [activeCert, setActiveCert] = useState<{
    url: string;
    title: string;
  } | null>(null);

  return (
    <>
      <Section id="certifications" numeral="V" title="Certifications">
        <div className="flex flex-col">
          {certifications.map((cert, i) => (
            <div key={`${cert.title}-${i}`}>
              <div
                className={`flex flex-col gap-1 ${
                  i === 0 ? "pt-0" : "pt-7"
                } pb-7`}
              >
                {/* Index + title */}
                <div className="flex items-baseline gap-3.5 flex-wrap">
                  <span aria-hidden="true" className="numeral">
                    {String(i + 1).padStart(2, "0")}.
                  </span>
                  <h3
                    className="font-display font-normal text-ink m-0"
                    style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}
                  >
                    {cert.title}
                  </h3>
                </div>

                {/* Issuer + date */}
                <div
                  className="flex flex-wrap gap-x-5 gap-y-1"
                  style={{ paddingLeft: "2.375rem" }}
                >
                  <span className="font-body text-sm italic text-ink-light">
                    {cert.issuer}
                  </span>
                  <span className="meta-tag">{cert.date}</span>
                </div>

                {/* View credential button */}
                {cert.credentialUrl && (
                  <div className="mt-1" style={{ paddingLeft: "2.375rem" }}>
                    <button
                      onClick={() =>
                        setActiveCert({
                          url: cert.credentialUrl!,
                          title: cert.title,
                        })
                      }
                      className="
                        meta-tag bg-transparent border-none p-0 cursor-pointer
                        underline underline-offset-[3px]
                        hover:text-ink transition-colors duration-150
                        touch-manipulation [-webkit-tap-highlight-color:transparent]
                      "
                    >
                      View Credential
                    </button>
                  </div>
                )}
              </div>
              {i < certifications.length - 1 && <HairlineDivider />}
            </div>
          ))}
        </div>
      </Section>

      {activeCert && (
        <CertModal
          url={activeCert.url}
          title={activeCert.title}
          onClose={() => setActiveCert(null)}
        />
      )}
    </>
  );
}
