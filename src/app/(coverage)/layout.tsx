import "~/styles/reset.css";
import "./coverage.css";

import { type Metadata } from "next";
import { Archivo } from "next/font/google";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  title: "Zakkarija Micallef, software engineer",
  description:
    "Zakkarija Micallef, software engineer on the GenAI Engineering team at Booking.com, Amsterdam.",
  robots: { index: false, follow: false },
  icons: { icon: [{ url: "/favicon.ico?v=2", sizes: "any" }] },
};

export default function CoverageLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={archivo.variable}>
      <body>{children}</body>
    </html>
  );
}
