interface HairlineDividerProps {
  className?: string;
  dark?: boolean;
}

/** A 1px hairline rule — the primary section separator in the classical theme. */
export function HairlineDivider({ className = "", dark = false }: HairlineDividerProps) {
  return (
    <hr
      aria-hidden="true"
      className={`border-none m-0 ${dark ? "border-t border-rule-dark" : "border-t border-rule"} ${className}`}
      // border-t alone sets border-top-width:1px; the border-rule class sets the color
      style={{ borderTopWidth: "1px", borderTopStyle: "solid" }}
    />
  );
}
