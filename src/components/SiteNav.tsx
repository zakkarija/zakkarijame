import { ThemeToggle } from "~/components/ThemeToggle";
import { SHOW_AVAILABLE } from "~/lib/site-config";

export function SiteNav() {
  return (
    <nav className="site-nav" aria-label="Primary">
      <div className="site-nav__inner">
        <a className="site-nav__mark" href="#top" aria-label="Back to top">
          Zakkarija Micallef
        </a>
        <ul className="site-nav__links">
          {SHOW_AVAILABLE && (
            <li>
              <a href="#available">Consultation work</a>
            </li>
          )}
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>
        </ul>
        <ThemeToggle />
      </div>
    </nav>
  );
}
