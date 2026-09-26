import Image from "next/image";

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
      {String(n).padStart(2, "0")} / {String(of).padStart(2, "0")}
    </span>
  );
}

export default function ShowcasePage() {
  const experienceCount = work.length + 1;

  return (
    <>
      <ContourBackground />

      <header className="bar">
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
            <ul className="hero__links">
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
                  <h3 className="card__title">{job.subtitle}</h3>
                  <p className="card__role">
                    {job.title}
                    {job.team ? `, ${job.team}` : null}
                  </p>
                  <div className="card__grid">
                    <div>
                      <p className="card__label">What I built</p>
                      <ul className="built">
                        {job.built?.map((b) => <li key={b}>{b}</li>)}
                      </ul>
                    </div>
                    <div className="card__aside">
                      <p className="card__text">{job.description}</p>
                      {job.stack ? (
                        <ul className="tags" aria-label="Technologies">
                          {job.stack.map((s) => (
                            <li key={s}>{s}</li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  </div>
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
                <h3 className="card__title">Education</h3>
                <div className="card__grid card__grid--even">
                  {education.map((e) => (
                    <div key={e.id} className="degree">
                      <p className="card__label">{formatPeriod(e.start, e.end)}</p>
                      <p className="degree__name">{e.title}</p>
                      <p className="degree__school">{e.subtitle}</p>
                      <p className="card__text">{e.description}</p>
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="projects" className="section" aria-labelledby="projects-title">
          <h2 id="projects-title" className="section__heading drift">
            Projects
          </h2>

          <div className="stack">
            {selectedWork.map((p, i) => (
              <div key={p.id} className="stack__item">
                <article
                  className={`card card--project ${i % 2 === 0 ? "card--raised" : "card--paper"} ${p.image ? "" : "card--no-image"}`}
                >
                  <div className="card__top">
                    <span className="card__period">
                      {p.kind}, {p.year}
                    </span>
                    <Index n={i + 1} of={selectedWork.length} />
                  </div>
                  <h3 className="card__title card__title--project">{p.heading}</h3>
                  <div className="card__grid">
                    {p.image ? (
                      <figure className="project__figure">
                        <Image
                          src={p.image.src}
                          width={p.image.width}
                          height={p.image.height}
                          alt={p.image.alt}
                          sizes="(min-width: 1024px) 50vw, 100vw"
                        />
                      </figure>
                    ) : null}
                    <div className="card__aside">
                      <p className="card__text card__text--lead">{p.summary}</p>
                      {p.citation ? <p className="project__citation">{p.citation}</p> : null}
                      <ul className="project__links">
                        {p.links.map((l) => (
                          <li key={l.url}>
                            <a className="btn btn--line" href={l.url}>
                              {l.name}
                              <Arrow />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="section section--contact" aria-labelledby="contact-title">
          <div className="card card--accent contact">
            <p className="card__period">Contact</p>
            <h2 id="contact-title" className="contact__title">
              Get in touch
            </h2>
            <a className="contact__email" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            {OPEN_TO_WORK ? <p className="contact__note">{OPEN_TO_WORK_NOTE}</p> : null}
            <div className="contact__actions">
              <a className="btn btn--ink" href={`mailto:${profile.email}`}>
                Email me
              </a>
              <a className="btn btn--line" href={profile.calUrl}>
                Book a call
                <Arrow />
              </a>
            </div>
            <ul className="contact__links">
              <li>
                <a href={profile.github}>
                  GitHub <Arrow />
                </a>
              </li>
              <li>
                <a href={profile.linkedin}>
                  LinkedIn <Arrow />
                </a>
              </li>
              <li>
                <a href={profile.cvUrl}>
                  Download CV <Arrow />
                </a>
              </li>
            </ul>
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
