import { profile } from "@/lib/data";
import { HairlineDivider } from "@/components/HairlineDivider";
import { BorderButton } from "@/components/BorderButton";

export function Contact() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" aria-label="Contact and footer">
      <HairlineDivider dark />

      <div
        className="flex flex-col gap-12"
        style={{
          paddingTop: "clamp(3.5rem, 8vw, 6rem)",
          paddingBottom: "clamp(3rem, 6vw, 5rem)",
        }}
      >
        {/* Heading */}
        <div>
          <p className="label-caps mb-4">VII. Contact</p>
          <h2
            className="font-display font-normal text-ink leading-[1.1] max-w-[20ch] m-0"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Let&apos;s build something worth building.
          </h2>
        </div>

        {/* Contact links */}
        <div className="flex flex-wrap gap-3">
          <BorderButton href={`mailto:${profile.email}`}>{profile.email}</BorderButton>
          <BorderButton href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </BorderButton>
          <BorderButton href={profile.links.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </BorderButton>
        </div>

        <HairlineDivider />

        {/* Footer meta */}
        <div className="flex flex-wrap justify-between items-center gap-2">
          <p className="font-body text-xs text-muted m-0">
            © {year} {profile.name}. All rights reserved.
          </p>
          <p className="font-display italic text-[0.8125rem] text-muted m-0">
            {profile.location}
          </p>
        </div>
      </div>
    </footer>
  );
}
