import "~/styles/globals.css";
import "~/styles/grotesque.css";

import { type Metadata } from "next";
import { Geist, Fraunces, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { BookCall } from "~/components/BookCall";
import { SiteNav } from "~/components/SiteNav";

const themeInitScript = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = stored || (prefersDark ? 'dark' : 'light');
    document.documentElement.dataset.theme = theme;
    var storedFont = localStorage.getItem('display-font') || 'instrument';
    document.documentElement.dataset.font = storedFont;
  } catch (e) {}
})();
`;

export const metadata: Metadata = {
  title: "Zakkarija Micallef, software engineer, Amsterdam",
  description:
    "Zakkarija Micallef, software engineer on the GenAI Engineering team at Booking.com.",
  icons: {
    icon: [{ url: "/favicon.ico?v=2", sizes: "any", type: "image/x-icon" }],
    shortcut: ["/favicon.ico?v=2"],
    apple: [{ url: "/favicon.ico?v=2", sizes: "any", type: "image/x-icon" }],
  },
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["SOFT", "WONK", "opsz"],
  variable: "--font-fraunces",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-font="instrument"
      data-theme="light"
      suppressHydrationWarning
      className={`${geist.variable} ${fraunces.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="grotesque">
        <a id="top" />
        <SiteNav />
        {children}
        <BookCall />
        <Analytics />
      </body>
    </html>
  );
}
