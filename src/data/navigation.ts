/**
 * Navigation Data
 * Defines all navigation items used in Nav component
 */

export interface NavItem {
  id: string;
  label: string;
  href: string;
  type: "anchor" | "route";
}

export const navItems: NavItem[] = [
  { id: "about", label: "About", href: "#about", type: "anchor" },
  { id: "timeline", label: "Experience", href: "#timeline", type: "anchor" },
  { id: "skills", label: "Skills", href: "#skills", type: "anchor" },
  { id: "projects", label: "Projects", href: "#projects", type: "anchor" },
  { id: "blog", label: "Blog", href: "/blogs", type: "route" },
];

export const footerQuickLinks = [
  { id: "about", label: "About Me", href: "#about" },
  { id: "timeline", label: "Experience", href: "#timeline" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "blog", label: "Blog", href: "/blogs", isRoute: true },
];

