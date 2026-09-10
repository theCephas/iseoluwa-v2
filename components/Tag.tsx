interface TagProps {
  label: string;
}

/**
 * Outline-style tech tag — no color fill, no rounded pill.
 * Sharp corners, hairline border, small-caps label.
 */
export function Tag({ label }: TagProps) {
  return (
    <span className="inline-block border border-rule text-ink-light text-[0.625rem] font-semibold tracking-[0.12em] uppercase px-[0.55rem] py-[0.2rem] leading-[1.6]">
      {label}
    </span>
  );
}
