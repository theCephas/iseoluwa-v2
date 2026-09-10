import { skills } from "@/lib/data";
import { Section } from "@/components/Section";
import { Tag } from "@/components/Tag";

export function Skills() {
  return (
    <Section id="skills" numeral="IV" title="Skills">
      <div className="grid gap-10 md:gap-x-12"
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 22rem), 1fr))" }}
      >
        {skills.map((group) => (
          <div key={group.category}>
            <p className="label-caps mb-3.5">{group.category}</p>
            <div className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <Tag key={item} label={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
