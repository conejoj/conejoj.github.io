import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SmoothScroll from "@/lib/SmoothScroll";
import { LanguageProvider } from "@/lib/i18n";

// Self-hosted fonts (files from the @fontsource packages) loaded through
// next/font: the two above-the-fold faces are preloaded, and Next generates
// metric-matched fallbacks so text doesn't shift when they arrive.
// Fraunces keeps its optical-size axis (display cut at large sizes).
const fraunces = localFont({
  src: "../node_modules/@fontsource-variable/fraunces/files/fraunces-latin-opsz-normal.woff2",
  weight: "100 900",
  variable: "--font-display",
  display: "swap",
  // Next sizes its automatic fallback from Fraunces' small-text cut, which
  // is wider than the display cut used for headings; the Georgia fallback in
  // globals.css is tuned for the headings instead.
  adjustFontFallback: false,
  fallback: ["Fraunces Fallback", "Georgia", "serif"],
});
const instrumentSans = localFont({
  src: "../node_modules/@fontsource-variable/instrument-sans/files/instrument-sans-latin-wght-normal.woff2",
  weight: "400 700",
  variable: "--font-sans",
  display: "swap",
  adjustFontFallback: "Arial",
  fallback: ["system-ui", "-apple-system", "sans-serif"],
});
const plexMono = localFont({
  src: "../node_modules/@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-400-normal.woff2",
  weight: "400",
  variable: "--font-mono",
  display: "swap",
  preload: false,
  adjustFontFallback: false,
  fallback: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://joseconejo.me"),
  alternates: { canonical: "/" },
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
    url: "/",
    siteName: "Jose Conejo",
    locale: "en_US",
    alternateLocale: ["es_CR"],
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jose Conejo, Software Engineer: I use technology to solve real problems.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jose Conejo | Software Engineer",
    description:
      "Software engineer from Costa Rica working on web applications, automation workflows, and machine-learning projects.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // suppressHydrationWarning: the inline script below adds a class to
    // <html> before React loads.
    <html
      lang="en"
      className={`${fraunces.variable} ${instrumentSans.variable} ${plexMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          // Hide scroll-reveal content only when JS is running; if the app
          // hasn't started within 4s (slow or failed load), show everything.
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.classList.add('js');setTimeout(function(){if(!window.__revealReady)document.documentElement.classList.remove('js')},4000);",
          }}
        />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <SmoothScroll />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
