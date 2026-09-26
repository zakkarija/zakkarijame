import "~/styles/reset.css";
import "~/styles/site.css";

import { type Metadata, type Viewport } from "next";
import { Mona_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import { profile } from "~/data/profile";

const mona = Mona_Sans({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-mona",
});

const description =
  "Software engineer on the GenAI Engineering team at Booking.com in Amsterdam, building the internal agent platform, the MCP integration platform and developer tooling.";

export const metadata: Metadata = {
  metadataBase: new URL("https://zakkarija.com"),
  title: {
    default: `${profile.name}, software engineer`,
    template: `%s | ${profile.name}`,
  },
  description,
  openGraph: {
    type: "website",
    url: "/",
    siteName: profile.name,
    title: `${profile.name}, software engineer`,
    description,
  },
  icons: {
    icon: [{ url: "/favicon.ico?v=2", sizes: "any", type: "image/x-icon" }],
    shortcut: ["/favicon.ico?v=2"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0e0f0c",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={mona.variable}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
