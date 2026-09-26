import "~/styles/reset.css";
import "./index.css";

import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Design directions",
  robots: { index: false, follow: false },
  icons: { icon: [{ url: "/favicon.ico?v=2", sizes: "any" }] },
};

export default function IndexLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
