import { education } from "@/lib/data";
import { Section } from "@/components/Section";

export function Education() {
  return (
    <Section id="education" numeral="VI" title="Education">
      <div className="flex flex-col gap-8">
        {education.map((edu) => (
          <div key={edu.institution}>
            <h3
              className="font-display font-normal text-ink mb-1.5"
              style={{ fontSize: "clamp(1.125rem, 2.5vw, 1.375rem)" }}
            >
              {edu.institution}
            </h3>
            <div className="flex flex-wrap gap-x-6 gap-y-1 mb-2">
              <span className="font-body text-[0.9375rem] italic text-ink-light">
                {edu.degree}, {edu.field}
              </span>
              <span className="meta-tag">{edu.graduationDate}</span>
              <span className="meta-tag">{edu.location}</span>
            </div>
            {edu.gpa && edu.gpa.length > 0 && (
              <div className="flex flex-wrap gap-x-5 gap-y-1">
                {edu.gpa.map((g) => (
                  <span key={g.scale} className="meta-tag">
                    {g.value} / {g.scale} GPA
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
