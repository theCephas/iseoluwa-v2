import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          border: "1.5px solid #111111",
        }}
      >
        <span
          style={{
            color: "#f8f6f1",
            fontSize: 13,
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
