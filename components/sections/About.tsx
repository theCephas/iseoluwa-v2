import { Section } from "@/components/Section";

export function About() {
  return (
    <Section id="about" numeral="I" title="About">
      <div
        className="max-w-[68ch] flex flex-col gap-6 font-body text-ink-light leading-[1.8]"
        style={{ fontSize: "clamp(1rem, 1.5vw, 1.0625rem)" }}
      >
        <p>
          I am a full stack engineer with a background in English; which is
          perhaps why I think about software the way I think about writing:
          structure matters, clarity is its own kind of elegance, and good work
          earns its reader&apos;s trust line by line.
        </p>
        <p>
          Over the past few years I have built across the stack - from real-time
          dashboards and fintech contribution platforms to telecommunications
          infrastructure and, most recently, an AI-driven compliance and
          verification system at{" "}
          <strong className="text-ink font-semibold">
            Sage-Grey Technologies
          </strong>
          . That last one has sharpened a genuine interest I carry into every
          project: how do you build systems that are not just functional, but
          intelligently designed; systems that surface the right information,
          reduce friction, and help people make better decisions faster?
        </p>
        <p>
          AI is part of my answer to that question. I am actively exploring
          AI-driven product development, understanding where language models and
          intelligent automation can replace drudgery, and where careful human
          judgment still needs to remain in the loop. It is not a buzzword I am
          borrowing; it is where I am spending my learning hours.
        </p>
        <p>
          Outside of engineering: I read widely, think carefully, and am
          convinced that the best software engineers are also good
          communicators. I am based in Yaba, Lagos — one of the more interesting
          places in the world to be building things right now.
        </p>
      </div>
    </Section>
  );
}
