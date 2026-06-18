import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "WALTOA · Science. Sound. Strategy.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "96px",
          backgroundColor: "#faf9f7",
          color: "#3a3a3a",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#6f6c66",
          }}
        >
          Acoustics · Research · Technology
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 150,
            fontWeight: 600,
            letterSpacing: 18,
            textTransform: "uppercase",
          }}
        >
          Waltoa
        </div>
        <div style={{ marginTop: 12, fontSize: 54, fontWeight: 500 }}>
          Science. Sound. Strategy.
        </div>
        <div
          style={{
            marginTop: 36,
            fontSize: 28,
            color: "#6f6c66",
            maxWidth: 820,
          }}
        >
          Solutions people hear, understand and trust.
        </div>
      </div>
    ),
    { ...size }
  );
}
