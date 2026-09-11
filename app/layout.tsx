import type { Metadata } from "next";
import "@fontsource-variable/fraunces/wght.css";
import "@fontsource-variable/fraunces/wght-italic.css";
import "@fontsource-variable/instrument-sans/wght.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://joseconejo.dev"),
  title: "Jose Conejo | Software Developer, AI & Automation",
  description:
    "Jose Conejo is a Computer Science & AI graduate from Costa Rica building software, automation, and AI-driven tools for real business problems.",
  keywords: [
    "Jose Conejo",
    "Software Developer",
    "AI Developer",
    "Automation Engineer",
    "Full Stack Developer",
    "DevOps",
    "Costa Rica",
  ],
  authors: [{ name: "Jose Conejo" }],
  openGraph: {
    title: "Jose Conejo | Software Developer, AI & Automation",
    description:
      "Software engineering, AI, and automation. Built with purpose.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
