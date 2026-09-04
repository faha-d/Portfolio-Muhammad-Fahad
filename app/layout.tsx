import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  title: "Resume - Muhammad Fahad",
  description:
    "Frontend Developer specializing in React, Next.js, TypeScript, responsive UI, API integration and accessible web applications.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Resume - Muhammad Fahad",
    description:
      "Frontend Developer specializing in React, Next.js, TypeScript, responsive UI, API integration and accessible web applications.",
    type: "website",
    url: siteUrl,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Muhammad Fahad - Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Resume - Muhammad Fahad",
    description:
      "Frontend Developer specializing in React, Next.js, TypeScript, responsive UI, API integration and accessible web applications.",
    images: ["/opengraph-image"],
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
