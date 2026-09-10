"use client";

import { AnchorHTMLAttributes, ReactNode } from "react";

interface BorderButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  small?: boolean;
}

/**
 * Bordered button — no fill at rest, inverts (ink bg, ivory text) on hover.
 * No rounded corners, no shadows — purely classical.
 */
export function BorderButton({
  children,
  small = false,
  className = "",
  ...props
}: BorderButtonProps) {
  return (
    <a
      {...props}
      className={`
        inline-block border border-ink text-ink bg-transparent
        ${
          small
            ? "text-[0.6875rem] px-[0.85rem] py-[0.35rem]"
            : "text-[0.8125rem] px-5 py-[0.55rem]"
        }
        font-semibold tracking-widest uppercase no-underline cursor-pointer
        transition-colors duration-180
        hover:bg-ink hover:text-ivory
        focus-visible:outline-2 focus-visible:outline-ink focus-visible:outline-offset-2
        touch-manipulation
        [-webkit-tap-highlight-color:transparent]
        ${className}
      `}
    >
      {children}
    </a>
  );
}
