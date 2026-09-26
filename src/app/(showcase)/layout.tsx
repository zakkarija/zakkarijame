import "~/styles/reset.css";
import "./showcase.css";

import { type Metadata } from "next";
import { Mona_Sans } from "next/font/google";

const mona = Mona_Sans({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-mona",
});

export const metadata: Metadata = {
  title: "Zakkarija Micallef, software engineer",
  description:
    "Zakkarija Micallef, software engineer on the GenAI Engineering team at Booking.com, Amsterdam.",
  robots: { index: false, follow: false },
  icons: { icon: [{ url: "/favicon.ico?v=2", sizes: "any" }] },
};

export default function ShowcaseLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={mona.variable}>
      <body>{children}</body>
    </html>
  );
}
