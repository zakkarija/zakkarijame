import Image from "next/image";

import { bio, profile } from "~/data/profile";
import { type ProjectLink, selectedWork } from "~/data/projects";
import { timelineItems } from "~/data/timeline";
import { getBlogPosts } from "~/lib/blog";
import { formatPeriod, formatPostDate } from "~/lib/format";
import { OPEN_TO_WORK, OPEN_TO_WORK_NOTE } from "~/lib/site-config";

const sections = [
  { id: "record", label: "Record" },
  { id: "writing", label: "Writing" },
  { id: "contact", label: "Contact" },
];

type Source = { label: string; href: string; identifier?: string };

const fromLinks = (links: ProjectLink[]): Source[] =>
  links.map((l) => ({ label: l.name, href: l.url, identifier: l.identifier }));

function Sources({ items }: { items: Source[] }) {
  if (items.length === 0) return null;
  return (
    <aside className="row__aside" aria-label="Sources">
      <p className="sources__label">Sources</p>
      <ul className="sources">
        {items.map((s) => (
          <li key={s.href}>
            <a href={s.href}>
              <span className="sources__name">{s.label}</span>
              {s.identifier ? <code className="sources__id">{s.identifier}</code> : null}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default async function SourcesPage() {
  const posts = await getBlogPosts();

  const contactSources: Source[] = [
    { label: "Email", href: `mailto:${profile.email}`, identifier: profile.email },
    { label: "GitHub", href: profile.github, identifier: `github.com/${profile.githubHandle}` },
    {
      label: "LinkedIn",
      href: profile.linkedin,
      identifier: `linkedin.com/in/${profile.linkedinHandle}`,
    },
    { label: "CV (PDF)", href: profile.cvUrl },
  ];

  return (
    <div className="page">
      <header>
        <div className="row row--nav">
          <nav className="row__main" aria-label="Sections">
            <ul className="nav">
              {sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`}>{s.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="row__aside" aria-hidden="true">
            <p className="column-label">Sources</p>
          </div>
        </div>

        <div className="row row--hero">
          <div className="row__main">
            <h1 className="name">{profile.name}</h1>
            <p className="role">
              {profile.role} on the {profile.team} team at {profile.company}
            </p>
            <p className="place">{profile.city}</p>
          </div>
          <Sources items={contactSources} />
        </div>
      </header>

      <main>
        <div className="row row--intro">
          <p className="row__main lede">{bio}</p>
        </div>

        <section id="record" aria-labelledby="record-title">
          <div className="row row--heading">
            <h2 id="record-title" className="row__main section-title">
              Record
            </h2>
          </div>

          <ol className="record">
            {timelineItems.map((item) => {
              const outputs = selectedWork.filter((w) => w.partOf === item.id);
              const current = item.end === null;
              return (
                <li key={item.id} className={current ? "entry is-current" : "entry"}>
                  <div className="row row--entry">
                    <div className="row__main entry__main">
                      <p className="entry__period">{formatPeriod(item.start, item.end)}</p>
                      <div className="entry__body">
                        <h3>{item.subtitle}</h3>
                        <p className="entry__title">
                          {item.title}
                          {item.team ? `, ${item.team}` : null}
                        </p>
                        <p className="entry__text">{item.description}</p>
                      </div>
                    </div>
                  </div>

                  {outputs.map((work) => (
                    <div key={work.id} className="row row--output">
                      <div className="row__main entry__main">
                        <p className="entry__period">{work.year}</p>
                        <div className="entry__body output">
                          <p className="output__kind">{work.kind}</p>
                          <h4>{work.heading}</h4>
                          {work.citation ? (
                            <p className="output__citation">{work.citation}</p>
                          ) : null}
                          <p className="output__summary">{work.summary}</p>
                          {work.image ? (
                            <figure className="output__figure">
                              <Image
                                src={work.image.src}
                                width={work.image.width}
                                height={work.image.height}
                                alt={work.image.alt}
                                sizes="(min-width: 1200px) 640px, 100vw"
                              />
                            </figure>
                          ) : null}
                        </div>
                      </div>
                      <Sources items={fromLinks(work.links)} />
                    </div>
                  ))}
                </li>
              );
            })}
          </ol>
        </section>

        <section id="writing" aria-labelledby="writing-title">
          <div className="row row--heading">
            <h2 id="writing-title" className="row__main section-title">
              Writing
            </h2>
          </div>
          <ol>
            {posts.map((post) => (
              <li key={post.slug} className="row row--entry">
                <div className="row__main entry__main">
                  <p className="entry__period">
                    <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                  </p>
                  <div className="entry__body">
                    <h3>
                      <a href={`/blogs/${post.slug}`}>{post.title}</a>
                    </h3>
                    <p className="entry__text">{post.excerpt}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="contact" aria-labelledby="contact-title">
          <div className="row row--heading">
            <h2 id="contact-title" className="row__main section-title">
              Contact
            </h2>
          </div>
          <div className="row row--contact">
            <div className="row__main entry__main">
              <div className="entry__body contact">
                {OPEN_TO_WORK ? <p className="contact__note">{OPEN_TO_WORK_NOTE}</p> : null}
                <div className="actions">
                  <a className="button button--primary" href={`mailto:${profile.email}`}>
                    Email me
                  </a>
                  <a className="button button--secondary" href={profile.calUrl}>
                    Book a call
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="row row--footer">
        <p className="row__main">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </footer>
    </div>
  );
}
