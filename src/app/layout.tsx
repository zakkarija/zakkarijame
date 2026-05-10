import "~/styles/globals.css";
import "~/styles/grotesque.css";

import { type Metadata } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Zakkarija Micallef — software engineer, Amsterdam",
  description:
    "Zakkarija Micallef — software engineer on the GenAI Engineering team at Booking.com.",
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

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${instrumentSerif.variable}`}>
      <body className="grotesque">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
