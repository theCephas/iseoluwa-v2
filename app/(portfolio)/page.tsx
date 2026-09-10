import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Certifications } from "@/components/sections/Certifications";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";
import { HairlineDivider } from "@/components/HairlineDivider";

/**
 * Home page — all sections composed in order, within a classical content column.
 * Max-width and horizontal padding match the "printed page" aesthetic (generous margins).
 */
export default function Home() {
  return (
    <main
      style={{
        maxWidth: "52rem", // ~832px — comfortable reading column
        marginInline: "auto",
        paddingInline: "clamp(1.25rem, 6vw, 3rem)",
      }}
    >
      <Hero />
      <HairlineDivider />
      <About />
      <HairlineDivider />
      <Experience />
      <HairlineDivider />
      <Projects />
      <HairlineDivider />
      <Skills />
      <HairlineDivider />
      <Certifications />
      <HairlineDivider />
      <Education />
      <Contact />
    </main>
  );
}
