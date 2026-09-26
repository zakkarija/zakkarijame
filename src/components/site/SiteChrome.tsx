import Link from "next/link";

import { profile } from "~/data/profile";

import { EmailLink } from "./EmailLink";

/**
 * The fixed top bar and the footer, shared by the homepage and the blog.
 * On the homepage the section links are in-page anchors; elsewhere they
 * point back to the homepage sections.
 */
export function SiteBar({ home = false }: { home?: boolean }) {
  const to = (id: string) => (home ? `#${id}` : `/#${id}`);

  return (
    <header className="bar">
      <div className="bar__scrim" aria-hidden="true" />
      {home ? (
        <a className="bar__mark" href="#top" aria-label={`${profile.name}, back to top`}>
          <span>{profile.givenName}</span>
          <span>{profile.familyName}</span>
        </a>
      ) : (
        <Link className="bar__mark" href="/" aria-label={`${profile.name}, home`}>
          <span>{profile.givenName}</span>
          <span>{profile.familyName}</span>
        </Link>
      )}
      <nav aria-label="Sections">
        <ul className="bar__nav">
          <li>
            <a href={to("experience")}>Experience</a>
          </li>
          <li>
            <a href={to("projects")}>Projects</a>
          </li>
          <li>
            <a href={to("contact")}>Contact</a>
          </li>
        </ul>
      </nav>
      <EmailLink email={profile.email} className="btn btn--accent bar__cta">
        Email me
      </EmailLink>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} {profile.name}
      </p>
      <ul className="footer__links">
        <li>
          <Link href="/blogs">Writing</Link>
        </li>
        <li>
          <a href={profile.github}>GitHub</a>
        </li>
        <li>
          <a href={profile.linkedin}>LinkedIn</a>
        </li>
      </ul>
      <p>{profile.location}</p>
    </footer>
  );
}
