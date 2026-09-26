import Link from "next/link";

const directions = [
  {
    href: "/directions/coverage",
    name: "Coverage",
    idea: "An evidence matrix under the name: areas of work against where each was done. Empty cells stay empty.",
    system: "Enclosure grey and signal green. Archivo, condensed for display.",
  },
  {
    href: "/directions/to-scale",
    name: "To scale",
    idea: "The career drawn on a true-scale time axis, so the parallel tracks (work alongside both degrees) are visible at a glance.",
    system: "Graphite and amber, dark. Schibsted Grotesk.",
  },
  {
    href: "/directions/sources",
    name: "Sources",
    idea: "One record, with the primary source for each claim in the margin: DOIs, repository records, code.",
    system: "White and petrol. IBM Plex Sans, with Plex Mono only for identifiers.",
  },
];

export default function DirectionsIndex() {
  return (
    <main className="index">
      <h1>Design directions</h1>
      <p className="index__intro">
        Three directions built from the same content in <code>src/data/</code>.
        Each is a full page. The current site is at <Link href="/">/</Link>.
      </p>
      <ol className="index__list">
        {directions.map((d) => (
          <li key={d.href}>
            <h2>
              <Link href={d.href}>{d.name}</Link>
            </h2>
            <p>{d.idea}</p>
            <p className="index__system">{d.system}</p>
          </li>
        ))}
      </ol>
    </main>
  );
}
