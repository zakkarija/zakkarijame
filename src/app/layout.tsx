import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import Background from "~/components/Background";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Zakkarija Micallef",
  description: "Zakkarija Micallef's Portfolio",
  icons: {
    icon: [
      {
        url: '/favicon.ico?v=2',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
    shortcut: ['/favicon.ico?v=2'],
    apple: [
      {
        url: '/favicon.ico?v=2',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  },
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body>
        <Background />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
