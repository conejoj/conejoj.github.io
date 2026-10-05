import type { Metadata } from "next";
import "@fontsource-variable/fraunces/wght.css";
import "@fontsource-variable/fraunces/wght-italic.css";
import "@fontsource-variable/instrument-sans/wght.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "./globals.css";
import SmoothScroll from "@/lib/SmoothScroll";

export const metadata: Metadata = {
  metadataBase: new URL("https://joseconejo.dev"),
  title: "Jose Conejo | Software Engineer",
  description:
    "Portfolio of Jose Conejo, a software engineer from Costa Rica and Computer Science & AI graduate of John Brown University, working on web applications, automation workflows, and machine-learning projects.",
  keywords: [
    "Jose Conejo",
    "Software Engineer",
    "AI Developer",
    "Automation Engineer",
    "Full Stack Developer",
    "DevOps",
    "Costa Rica",
  ],
  authors: [{ name: "Jose Conejo" }],
  openGraph: {
    title: "Jose Conejo | Software Engineer",
    description:
      "Software engineer from Costa Rica working on web applications, automation workflows, and machine-learning projects.",
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
      <body className="font-sans antialiased">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
