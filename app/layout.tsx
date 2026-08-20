import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammad Fahad — Frontend Developer",
  description:
    "Frontend Developer specializing in React, Next.js and TypeScript, building production-ready web experiences.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Muhammad Fahad — Frontend Developer",
    description:
      "Frontend Developer specializing in React, Next.js and TypeScript, building production-ready web experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
