import "~/styles/reset.css";
import "./sources.css";

import { type Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-plex-sans",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
});

export const metadata: Metadata = {
  title: "Zakkarija Micallef, software engineer",
  description:
    "Zakkarija Micallef, software engineer on the GenAI Engineering team at Booking.com, Amsterdam.",
  robots: { index: false, follow: false },
  icons: { icon: [{ url: "/favicon.ico?v=2", sizes: "any" }] },
};

export default function SourcesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${plexSans.variable} ${plexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
