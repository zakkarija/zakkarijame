import { type Metadata } from "next";

import { SiteBar, SiteFooter } from "~/components/site/SiteChrome";

export const metadata: Metadata = {
  title: "Writing",
  description: "Writing by Zakkarija Micallef on software, the web and technology.",
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteBar />
      <div className="page">
        <main className="blog">{children}</main>
        <SiteFooter />
      </div>
    </>
  );
}
