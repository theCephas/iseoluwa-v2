import { experience } from "@/lib/data";
import { Section } from "@/components/Section";
import { HairlineDivider } from "@/components/HairlineDivider";

export function Experience() {
  return (
    <Section id="experience" numeral="II" title="Experience">
      <div className="flex flex-col">
        {experience.map((job, i) => (
          <div key={`${job.company}-${job.startDate}`}>
            <div className={`grid grid-cols-1 gap-4 ${i === 0 ? "pt-0" : "pt-10"} pb-10`}>
              {/* Company + meta */}
              <div className="flex flex-col gap-1">
                {/* Index + Company name */}
                <div className="flex items-baseline gap-3.5">
                  <span aria-hidden="true" className="numeral">{String(i + 1).padStart(2, "0")}.</span>
                  <h3 className="font-display font-normal text-ink m-0"
                    style={{ fontSize: "clamp(1.125rem, 2.5vw, 1.375rem)" }}
                  >
                    {job.company}
                  </h3>
                </div>

                {/* Role, dates, location */}
                <div className="flex flex-wrap gap-x-5 gap-y-1 mt-1" style={{ paddingLeft: "2.375rem" }}>
                  <span className="font-body text-sm italic text-ink-light">{job.role}</span>
                  <span className="meta-tag">{job.startDate} – {job.endDate}</span>
                  <span className="meta-tag">{job.location}</span>
                </div>
              </div>

              {/* Highlights */}
              <ul className="list-none m-0 flex flex-col gap-2.5" style={{ padding: "0 0 0 2.375rem" }}>
                {job.highlights.map((h, j) => (
                  <li
                    key={j}
                    className="font-body text-[0.9375rem] leading-[1.75] text-ink-light pl-5 relative bullet-dash"
                  >
                    {h}
                  </li>
                ))}
              </ul>
            </div>
            {i < experience.length - 1 && <HairlineDivider />}
          </div>
        ))}
      </div>
    </Section>
  );
}
