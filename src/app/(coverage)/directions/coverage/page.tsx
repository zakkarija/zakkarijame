import Image from "next/image";

import { coverageAreas, coverageSources } from "~/data/coverage";
import { bio, profile } from "~/data/profile";
import { selectedWork } from "~/data/projects";
import { timelineItems } from "~/data/timeline";
import { getBlogPosts } from "~/lib/blog";
import { formatPeriod, formatPostDate } from "~/lib/format";
import { OPEN_TO_WORK, OPEN_TO_WORK_NOTE } from "~/lib/site-config";

const sections = [
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "writing", label: "Writing" },
  { id: "contact", label: "Contact" },
];

export default async function CoveragePage() {
  const posts = await getBlogPosts();

  return (
    <div className="page">
      <header className="hero wrap">
        <nav aria-label="Sections">
          <ul className="nav">
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`}>{s.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <h1 className="name">
          <span>{profile.givenName}</span> <span>{profile.familyName}</span>
        </h1>

        <div className="facts grid-cols">
          <p className="role">
            {profile.role} on the {profile.team} team at {profile.company}
          </p>
          <p className="place">{profile.city}</p>
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
      </header>

      <main>
        <section className="coverage wrap" aria-labelledby="coverage-title">
          <h2 id="coverage-title" className="visually-hidden">
            Areas of work
          </h2>

          {/* Wide screens: the matrix itself. */}
          <table className="matrix">
            <colgroup>
              <col className="matrix__area-col" />
              {coverageSources.map((s) => (
                <col key={s.id} />
              ))}
            </colgroup>
            <thead>
              <tr>
                <td />
                {coverageSources.map((s) => (
                  <th
                    key={s.id}
                    scope="col"
                    className={s.current ? "is-current" : undefined}
                  >
                    <span className="matrix__source">{s.label}</span>
                    <span className="matrix__period">{s.period}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {coverageAreas.map((area) => (
                <tr key={area.id}>
                  <th scope="row">{area.label}</th>
                  {coverageSources.map((s, col) => {
                    const text = area.cells[s.id];
                    return (
                      <td
                        key={s.id}
                        className={text ? "is-filled" : "is-empty"}
                        style={{ "--col": col } as React.CSSProperties}
                      >
                        {text}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>

          {/* Narrow screens: the same data, grouped by area, gaps omitted. */}
          <ul className="coverage-list">
            {coverageAreas.map((area) => (
              <li key={area.id}>
                <h3>{area.label}</h3>
                <dl>
                  {coverageSources
                    .filter((s) => area.cells[s.id])
                    .map((s) => (
                      <div key={s.id}>
                        <dt>
                          {s.label}
                          <span className="coverage-list__period">
                            {s.period}
                          </span>
                        </dt>
                        <dd>{area.cells[s.id]}</dd>
                      </div>
                    ))}
                </dl>
              </li>
            ))}
          </ul>

          <p className="coverage__note">
            Each filled cell names work that was done there. Empty cells are
            left empty.
          </p>
        </section>

        <section id="experience" className="section wrap" aria-labelledby="experience-title">
          <h2 id="experience-title" className="section__title">
            Experience
          </h2>
          <p className="lede">{bio}</p>

          <ol className="roles">
            {timelineItems.map((item) => (
              <li
                key={item.id}
                className={item.end === null ? "role-entry is-current" : "role-entry"}
              >
                <p className="role-entry__period">
                  {formatPeriod(item.start, item.end)}
                </p>
                <div className="role-entry__head">
                  <h3>{item.subtitle}</h3>
                  <p>
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
                      sizes="(min-width: 1200px) 720px, 100vw"
                    />
                  </figure>
                ) : null}
                <div className="work__text">
                  <p className="work__kind">
                    {work.kind}, {work.year}
                  </p>
                  <h3>{work.heading}</h3>
                  {work.citation ? (
                    <p className="work__citation">{work.citation}</p>
                  ) : null}
                  <p className="work__summary">{work.summary}</p>
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

        <section id="writing" className="section wrap" aria-labelledby="writing-title">
          <h2 id="writing-title" className="section__title">
            Writing
          </h2>
          <ol className="posts">
            {posts.map((post) => (
              <li key={post.slug} className="post">
                <p className="post__date">
                  <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                </p>
                <div>
                  <h3>
                    <a href={`/blogs/${post.slug}`}>{post.title}</a>
                  </h3>
                  <p>{post.excerpt}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="contact" className="section section--contact wrap" aria-labelledby="contact-title">
          <h2 id="contact-title" className="section__title">
            Contact
          </h2>
          <div className="contact">
            {OPEN_TO_WORK ? <p className="contact__note">{OPEN_TO_WORK_NOTE}</p> : null}
            <p className="contact__email">{profile.email}</p>
            <div className="actions">
              <a className="button button--primary" href={`mailto:${profile.email}`}>
                Email me
              </a>
              <a className="button button--secondary" href={profile.calUrl}>
                Book a call
              </a>
            </div>
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
          </div>
        </section>
      </main>

      <footer className="footer wrap">
        <p>© {new Date().getFullYear()} {profile.name}</p>
      </footer>
    </div>
  );
}
