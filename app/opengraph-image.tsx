import { ImageResponse } from "next/og";

export const alt = "Muhammad Fahad - Frontend Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#050a14",
          color: "#f4f7fb",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "center",
          padding: "80px",
          width: "100%",
        }}
      >
        <div style={{ color: "#5cff9a", display: "flex", fontSize: 28 }}>
          &lt;/&gt; FAHAD
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 76,
            fontWeight: 700,
            marginTop: 34,
          }}
        >
          Muhammad Fahad
        </div>
        <div
          style={{
            color: "#a5b1c2",
            display: "flex",
            fontSize: 38,
            marginTop: 20,
          }}
        >
          Frontend Developer | React | Next.js | TypeScript
        </div>
        <div
          style={{
            background: "#5cff9a",
            height: 6,
            marginTop: 48,
            width: 180,
          }}
        />
      </div>
    ),
    { ...size },
  );
}