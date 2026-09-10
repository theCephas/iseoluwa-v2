import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#111111",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            color: "#f8f6f1",
            fontSize: 72,
            fontStyle: "italic",
            fontWeight: 700,
            letterSpacing: "0.04em",
            fontFamily: "Georgia, serif",
            lineHeight: 1,
          }}
        >
          I.O.
        </span>
      </div>
    ),
    { ...size }
  );
}
