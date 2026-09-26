import "~/styles/reset.css";
import "./to-scale.css";

import { type Metadata } from "next";
import { Schibsted_Grotesk } from "next/font/google";

const schibsted = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-schibsted",
});

export const metadata: Metadata = {
  title: "Zakkarija Micallef, software engineer",
  description:
    "Zakkarija Micallef, software engineer on the GenAI Engineering team at Booking.com, Amsterdam.",
  robots: { index: false, follow: false },
  icons: { icon: [{ url: "/favicon.ico?v=2", sizes: "any" }] },
};

export default function ToScaleLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={schibsted.variable}>
      <body>{children}</body>
    </html>
  );
}
