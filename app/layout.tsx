import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Resume - Muhammad Fahad",
  description:
    "Frontend Developer specializing in React, Next.js, TypeScript, responsive UI, API integration and accessible web applications.",
  openGraph: {
    title: "Resume - Muhammad Fahad",
    description:
      "Frontend Developer specializing in React, Next.js, TypeScript, responsive UI, API integration and accessible web applications.",
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
