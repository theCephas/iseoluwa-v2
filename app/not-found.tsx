import { BorderButton } from "@/components/BorderButton";

export default function NotFound() {
  return (
    <div
      className="flex flex-col items-center justify-center text-center gap-8"
      style={{
        minHeight: "100svh",
        paddingInline: "clamp(1.25rem, 6vw, 3rem)",
      }}
    >
      {/* Ornamental rule */}
      <div aria-hidden="true" className="w-8 mx-auto" style={{ borderTop: "1px solid var(--rule)" }} />

      <div>
        <p className="label-caps mb-3">404</p>
        <h1
          className="font-display font-normal text-ink leading-[1.1] m-0"
          style={{ fontSize: "clamp(2rem, 6vw, 4rem)" }}
        >
          Page not found.
        </h1>
        <p className="font-body italic text-base text-ink-light mt-4">
          This page has closed its covers.
        </p>
      </div>

      {/* Ornamental rule */}
      <div aria-hidden="true" className="w-8 mx-auto" style={{ borderTop: "1px solid var(--rule)" }} />

      <BorderButton href="/">Return to the beginning</BorderButton>
    </div>
  );
}
