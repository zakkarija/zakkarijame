import Image from "next/image";

import { bio, profile } from "~/data/profile";
import { selectedWork } from "~/data/projects";
import { timelineItems } from "~/data/timeline";
import { getBlogPosts } from "~/lib/blog";
import { formatPeriod, formatPostDate, fractionalYear } from "~/lib/format";
import { OPEN_TO_WORK, OPEN_TO_WORK_NOTE } from "~/lib/site-config";

const sections = [
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "writing", label: "Writing" },
  { id: "contact", label: "Contact" },
];

/* The axis runs from the first year on record to the end of the current one. */
const AXIS_START = Math.min(...timelineItems.map((t) => t.start));
const NOW = fractionalYear();
const AXIS_END = Math.floor(NOW) + 1;
const SPAN = AXIS_END - AXIS_START;
const at = (year: number) => (year - AXIS_START) / SPAN;

const years = Array.from(
  { length: AXIS_END - AXIS_START },
  (_, i) => AXIS_START + i,
);

type Mark = {
  id: string;
  label: string;
  period: string;
  a: number;
  b: number;
  current: boolean;
};

const bar = (t: (typeof timelineItems)[number]): Mark => ({
  id: t.id,
  label: t.short,
  period: formatPeriod(t.start, t.end),
  a: at(t.start),
  b: at(t.end ?? NOW),
  current: t.end === null,
});

const tracks: { id: string; label: string; kind: "bar" | "point"; marks: Mark[] }[] = [
  {
    id: "work",
    label: "Work",
    kind: "bar",
    marks: timelineItems.filter((t) => t.track === "work").map(bar),
  },
  {
    id: "study",
    label: "Study",
    kind: "bar",
    marks: timelineItems.filter((t) => t.track === "study").map(bar),
  },
  {
    id: "published",
    label: "Published",
    kind: "point",
    marks: selectedWork.map((w) => ({
      id: w.id,
      label: w.short,
      period: String(w.year),
      a: at(w.year),
      b: at(w.year),
      current: false,
    })),
  },
];

const pos = (a: number, b: number) =>
  ({ "--a": a.toFixed(4), "--b": b.toFixed(4) }) as React.CSSProperties;

export default async function ToScalePage() {
  const posts = await getBlogPosts();

  return (
    <div className="page">
      <header className="wrap">
        <nav aria-label="Sections">
          <ul className="nav">
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`}>{s.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hero">
          <h1 className="name">{profile.name}</h1>
          <div className="hero__meta">
            <p className="role">
              {profile.role}, {profile.team}
              <br />
              {profile.company}, {profile.city}
            </p>
            <ul className="links">
              <li>
                <a href={`mailto:${profile.email}`}>Email</a>
              </li>
              <li>
                <a href={profile.github}>GitHub</a>
              </li>
              <li>
                <a href={profile.linkedin}>LinkedIn</a>
              </li>
              <li>
                <a href={profile.cvUrl}>CV</a>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <main>
        <section className="wrap scale-section" aria-labelledby="scale-title">
          <h2 id="scale-title" className="visually-hidden">
            Career, drawn to scale
          </h2>
          <figure className="scale">
            <div
              className="scale__plot"
              style={{ "--span": SPAN } as React.CSSProperties}
            >
              <div className="scale__axis" aria-hidden="true">
                {years.map((y) => (
                  <span key={y} className="scale__year" style={pos(at(y), at(y))}>
                    {y}
                  </span>
                ))}
                <span className="scale__now" style={pos(at(NOW), at(NOW))}>
                  Now
                </span>
              </div>

              {tracks.map((track) => (
                <div key={track.id} className={`scale__track scale__track--${track.id}`}>
                  <h3 className="scale__track-label">{track.label}</h3>
                  <ol className={`scale__marks scale__marks--${track.kind}`}>
                    {track.marks.map((m) => (
                      <li
                        key={m.id}
                        className={m.current ? "scale__mark is-current" : "scale__mark"}
                        style={pos(m.a, m.b)}
                      >
                        <span className="scale__label">
                          <span className="scale__label-name">{m.label}</span>
                          <span className="scale__label-period">{m.period}</span>
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
            <figcaption className="scale__caption">
              Drawn to scale by year. Work ran alongside both degrees.
            </figcaption>
          </figure>
        </section>

        <section id="experience" className="section wrap" aria-labelledby="experience-title">
          <div className="section__head">
            <h2 id="experience-title" className="section__title">
              Experience
            </h2>
            <p className="lede">{bio}</p>
          </div>

          <ol className="roles">
            {timelineItems.map((item) => (
              <li
                key={item.id}
                className={item.end === null ? "role-entry is-current" : "role-entry"}
              >
                <div className="role-entry__head">
                  <p className="role-entry__period">
                    {formatPeriod(item.start, item.end)}
                  </p>
                  <h3>{item.subtitle}</h3>
                  <p className="role-entry__title">
                    {item.title}
                    {item.team ? `, ${item.team}` : null}
                  </p>
                </div>
                <p className="role-entry__body">{item.description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="work" className="section wrap" aria-labelledby="work-title">
          <h2 id="work-title" className="section__title">
            Selected work
          </h2>
          <ol className="works">
            {selectedWork.map((work) => (
              <li
                key={work.id}
                className={`work ${work.image ? "work--image" : "work--text"}`}
              >
                {work.image ? (
                  <figure className="work__figure">
                    <Image
                      src={work.image.src}
                      width={work.image.width}
                      height={work.image.height}
                      alt={work.image.alt}
                      sizes="(min-width: 1200px) 1312px, 100vw"
                    />
                  </figure>
                ) : null}
                <div className="work__head">
                  <p className="work__kind">
                    {work.kind}, {work.year}
                  </p>
                  <h3>{work.heading}</h3>
                  {work.citation ? (
                    <p className="work__citation">{work.citation}</p>
                  ) : null}
                </div>
                <div className="work__body">
                  <p>{work.summary}</p>
                  <ul className="work__links">
                    {work.links.map((link) => (
                      <li key={link.url}>
                        <a href={link.url}>{link.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="writing" className="section section--split wrap" aria-labelledby="writing-title">
          <h2 id="writing-title" className="section__title">
            Writing
          </h2>
          <ol className="posts">
            {posts.map((post) => (
              <li key={post.slug} className="post">
                <h3>
                  <a href={`/blogs/${post.slug}`}>{post.title}</a>
                </h3>
                <p className="post__date">
                  <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                  <span className="post__read">{post.readTime}</span>
                </p>
                <p className="post__excerpt">{post.excerpt}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="contact" className="section section--split section--contact wrap" aria-labelledby="contact-title">
          <h2 id="contact-title" className="section__title">
            Contact
          </h2>
          <div className="contact">
            {OPEN_TO_WORK ? <p className="contact__note">{OPEN_TO_WORK_NOTE}</p> : null}
            <div className="actions">
              <a className="button button--primary" href={`mailto:${profile.email}`}>
                Email me
              </a>
              <a className="button button--secondary" href={profile.calUrl}>
                Book a call
              </a>
            </div>
            <p className="contact__email">{profile.email}</p>
          </div>
        </section>
      </main>

      <footer className="footer wrap">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <ul className="links">
          <li>
            <a href={profile.github}>GitHub</a>
          </li>
          <li>
            <a href={profile.linkedin}>LinkedIn</a>
          </li>
          <li>
            <a href={profile.cvUrl}>Download CV</a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
