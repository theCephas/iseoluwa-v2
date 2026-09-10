import { profile } from "@/lib/data";
import { BorderButton } from "@/components/BorderButton";

export function Hero() {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="flex flex-col justify-end"
      style={{
        minHeight: "100svh",
        paddingTop: "clamp(5rem, 12vw, 9rem)",
        paddingBottom: "clamp(3rem, 8vw, 6rem)",
      }}
    >
      {/* Location label */}
      <p className="label-caps mb-5">{profile.location}</p>

      {/* Name */}
      <h1
        className="font-display font-normal text-ink leading-[1.02] tracking-[-0.02em] mb-5"
        style={{ fontSize: "clamp(2.75rem, 9vw, 7.5rem)" }}
      >
        {profile.name}
      </h1>

      {/* Title */}
      <p
        className="font-display italic text-ink-light mb-10"
        style={{ fontSize: "clamp(1.125rem, 3vw, 1.75rem)" }}
      >
        {profile.title}
      </p>

      <hr
        aria-hidden="true"
        className="border-none m-0"
        style={{ borderTop: "1px solid var(--rule)" }}
      />

      {/* Summary */}
      <p
        className="font-body text-ink-light leading-[1.75] max-w-[58ch] mt-8 mb-12"
        style={{ fontSize: "clamp(1rem, 1.8vw, 1.125rem)" }}
      >
        {profile.summary}
      </p>

      {/* CTA links */}
      <div className="flex flex-wrap gap-3 items-center">
        <BorderButton
          href={`mailto:${profile.email}`}
          className="hover:bg-ink! hover:text-ivory!"
        >
          Email me
        </BorderButton>
        <BorderButton
          href={profile.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:bg-ink! hover:text-ivory!"
        >
          LinkedIn
        </BorderButton>
        <BorderButton
          href={profile.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:bg-ink! hover:text-ivory!"
        >
          GitHub
        </BorderButton>
        <BorderButton
          href={profile.links.cv}
          download
          small
          className="border-rule! text-ink-light! hover:bg-ink! hover:text-ivory!"
        >
          Download CV
        </BorderButton>
      </div>
    </section>
  );
}
