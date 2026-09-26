import Image from "next/image";

import { DownloadIcon, GitHubIcon, LinkedInIcon } from "~/components/icons";
import { profile } from "~/data/profile";
import { selectedWork } from "~/data/projects";
import { timelineItems } from "~/data/timeline";
import { formatPeriod } from "~/lib/format";
import { OPEN_TO_WORK, OPEN_TO_WORK_NOTE } from "~/lib/site-config";

import { ContourBackground } from "./ContourBackground";
import { Motion } from "./Motion";

const work = timelineItems.filter((t) => t.track === "work");
const education = timelineItems.filter((t) => t.track === "study");

const marquee = [
  "Agent platforms",
  "MCP integrations",
  "Developer tooling",
  "Backend orchestration",
  "Bare-metal cloud",
  "MLOps pipelines",
];

const pad = (n: number) => String(n).padStart(2, "0");

function Arrow() {
  return (
    <svg className="arrow" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M4.5 11.5 11.5 4.5M6 4.5h5.5V10" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function Index({ n, of }: { n: number; of: number }) {
  return (
    <span className="card__index">
      {pad(n)} / {pad(of)}
    </span>
  );
}

/** GitHub, LinkedIn and CV as full buttons with their marks. */
function ProfileLinks({ className }: { className?: string }) {
  return (
    <ul className={`profile-links ${className ?? ""}`}>
      <li>
        <a className="btn btn--line btn--lg" href={profile.github}>
          <GitHubIcon className="btn__icon" fill="currentColor" aria-hidden="true" />
          GitHub
        </a>
      </li>
      <li>
        <a className="btn btn--line btn--lg" href={profile.linkedin}>
          <LinkedInIcon className="btn__icon" fill="currentColor" aria-hidden="true" />
          LinkedIn
        </a>
      </li>
      <li>
        <a className="btn btn--line btn--lg" href={profile.cvUrl}>
          <DownloadIcon className="btn__icon" aria-hidden="true" />
          CV
        </a>
      </li>
    </ul>
  );
}

export default function ShowcasePage() {
  const experienceCount = work.length + 1;

  return (
    <>
      <ContourBackground />

      <header className="bar">
        <div className="bar__scrim" aria-hidden="true" />
        <a className="bar__mark" href="#top" aria-label={`${profile.name}, back to top`}>
          <span>{profile.givenName}</span>
          <span>{profile.familyName}</span>
        </a>
        <nav aria-label="Sections">
          <ul className="bar__nav">
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <a className="btn btn--accent bar__cta" href={`mailto:${profile.email}`}>
          Email me
        </a>
      </header>

      <div className="page">
        <main id="top">
          <section className="hero" aria-labelledby="hero-name">
            <p className="hero__kicker reveal" style={{ "--d": "0.5s" } as React.CSSProperties}>
              {profile.role}, {profile.team}
              <br />
              {profile.company}
            </p>
            <h1 id="hero-name" className="hero__name">
              <span className="line">
                <span style={{ "--d": "0.05s" } as React.CSSProperties}>{profile.givenName}</span>
              </span>
              <span className="line">
                <span style={{ "--d": "0.15s" } as React.CSSProperties}>{profile.familyName}</span>
              </span>
            </h1>
            <div className="hero__foot reveal" style={{ "--d": "0.6s" } as React.CSSProperties}>
              <span>{profile.city}</span>
              <ProfileLinks />
            </div>
          </section>

          <div className="marquee" aria-hidden="true">
            <div className="marquee__track">
              {[0, 1].map((copy) => (
                <span key={copy} className="marquee__group">
                  {marquee.map((m) => (
                    <span key={m} className="marquee__item">
                      {m}
                      <span className="marquee__sep" />
                    </span>
                  ))}
                </span>
              ))}
            </div>
          </div>

          <section id="experience" className="section" aria-labelledby="experience-title">
            <h2 id="experience-title" className="section__heading drift">
              Experience
            </h2>

            <div className="stack">
              {work.map((job, i) => (
                <div key={job.id} className="stack__item">
                  <article className={`card ${i % 2 === 0 ? "card--paper" : "card--raised"}`}>
                    <div className="card__top">
                      <span className="card__period">{formatPeriod(job.start, job.end)}</span>
                      {job.end === null ? <span className="badge">Current role</span> : null}
                      <Index n={i + 1} of={experienceCount} />
                    </div>

                    <div className="card__head">
                      <div>
                        <h3 className="card__title">{job.subtitle}</h3>
                        <p className="card__role">
                          {job.title}
                          {job.team ? `, ${job.team}` : null}
                        </p>
                      </div>
                      <div className="card__summary">
                        <p className="card__lead">{job.description}</p>
                        {job.stack ? (
                          <ul className="tags" aria-label="Technologies">
                            {job.stack.map((s) => (
                              <li key={s}>{s}</li>
                            ))}
                          </ul>
                        ) : null}
                      </div>
                    </div>

                    {job.built ? (
                      <div className="card__built">
                        <h4 className="card__label">What I built</h4>
                        <ol className="tiles">
                          {job.built.map((b, n) => (
                            <li key={b.title} className="tile">
                              <span className="tile__index">{pad(n + 1)}</span>
                              <p className="tile__title">{b.title}</p>
                              <p className="tile__text">{b.detail}</p>
                            </li>
                          ))}
                        </ol>
                      </div>
                    ) : null}
                  </article>
                </div>
              ))}

              <div className="stack__item">
                <article
                  className={`card ${work.length % 2 === 0 ? "card--paper" : "card--raised"}`}
                >
                  <div className="card__top">
                    <span className="card__period">
                      {formatPeriod(
                        Math.min(...education.map((e) => e.start)),
                        Math.max(...education.map((e) => e.end ?? 0)),
                      )}
                    </span>
                    <Index n={experienceCount} of={experienceCount} />
                  </div>
                  <div className="card__head">
                    <h3 className="card__title">Education</h3>
                  </div>
                  <div className="card__built">
                    <ol className="tiles tiles--wide">
                      {education.map((e) => (
                        <li key={e.id} className="tile">
                          <span className="tile__index">{formatPeriod(e.start, e.end)}</span>
                          <p className="tile__title tile__title--lg">{e.title}</p>
                          <p className="tile__school">{e.subtitle}</p>
                          <p className="tile__text">{e.description}</p>
                        </li>
                      ))}
                    </ol>
                  </div>
                </article>
              </div>
            </div>
          </section>

          <section id="projects" className="section" aria-labelledby="projects-title">
            <h2 id="projects-title" className="section__heading drift">
              Projects
            </h2>

            <div className="solo">
              <div className="card card--raised grow">
                <div className="card__top">
                  <span>Research and projects</span>
                  <span className="card__index">{pad(selectedWork.length)} total</span>
                </div>
                <ol className="projects">
                  {selectedWork.map((p) => (
                    <li key={p.id} className="project">
                      {p.image ? (
                        <figure className="project__media">
                          <Image
                            src={p.image.src}
                            width={p.image.width}
                            height={p.image.height}
                            alt={p.image.alt}
                            sizes="(min-width: 1024px) 30vw, 100vw"
                          />
                        </figure>
                      ) : (
                        <blockquote className="project__media project__media--quote">
                          <p>{p.highlight ?? p.summary}</p>
                        </blockquote>
                      )}
                      <p className="project__kind">
                        {p.kind}, {p.year}
                      </p>
                      <h3 className="project__title">{p.heading}</h3>
                      <p className="project__summary">{p.summary}</p>
                      <ul className="project__links">
                        {p.links.map((l) => (
                          <li key={l.url}>
                            <a className="btn btn--line btn--sm" href={l.url}>
                              {l.name}
                              <Arrow />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </section>

          <section id="contact" className="section section--contact" aria-labelledby="contact-title">
            <div className="card card--accent contact grow">
              <p className="card__period">Contact</p>
              <h2 id="contact-title" className="contact__title">
                Get in touch
              </h2>
              <a className="contact__email" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
              {OPEN_TO_WORK ? <p className="contact__note">{OPEN_TO_WORK_NOTE}</p> : null}
              <div className="contact__actions">
                <a className="btn btn--ink btn--lg" href={`mailto:${profile.email}`}>
                  Email me
                </a>
                <a className="btn btn--line btn--lg" href={profile.calUrl}>
                  Book a call
                  <Arrow />
                </a>
              </div>
              <ProfileLinks className="profile-links--contact" />
            </div>
          </section>
        </main>

        <footer className="footer">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p>{profile.location}</p>
        </footer>
      </div>

      <Motion />
    </>
  );
}
