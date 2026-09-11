import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#10161D",
          color: "#F5F3EE",
          fontSize: 30,
          fontWeight: 600,
          letterSpacing: "-0.02em",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        JC
      </div>
    ),
    { ...size }
  );
}
