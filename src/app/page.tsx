import Image from "next/image";

import { DownloadIcon, GitHubIcon, LinkedInIcon } from "~/components/icons";
import { organisationById, organisations } from "~/data/organisations";
import { profile } from "~/data/profile";
import { selectedWork } from "~/data/projects";
import { timelineItems } from "~/data/timeline";
import { formatPeriod } from "~/lib/format";
import { OPEN_TO_WORK, OPEN_TO_WORK_NOTE } from "~/lib/site-config";

import { ContourBackground } from "~/components/site/ContourBackground";
import { EmailLink } from "~/components/site/EmailLink";
import { ExperienceTabs, type Role } from "~/components/site/ExperienceTabs";
import { Motion } from "~/components/site/Motion";
import { OrgLink, WithMentions } from "~/components/site/OrgLink";
import { SiteBar, SiteFooter } from "~/components/site/SiteChrome";

const work = timelineItems.filter((t) => t.track === "work");
const education = timelineItems.filter((t) => t.track === "study");
const mentions = organisations.filter((o) => o.mentions);

const roles: Role[] = [
  ...work.map((job) => ({
    id: job.id,
    tab: job.subtitle,
    period: formatPeriod(job.start, job.end),
    current: job.end === null,
    heading: job.team ? `${job.title}, ${job.team}` : job.title,
    lead: job.description,
    tags: job.stack,
    org: organisationById(job.org),
    built: job.built,
  })),
  // One entry per degree, newest first: the degree names the tab and the
  // full university name sits under it.
  ...education
    .sort((a, b) => b.start - a.start)
    .map((study) => ({
      id: study.id,
      tab: study.degree ?? study.title,
      school: study.subtitle,
      period: formatPeriod(study.start, study.end),
      current: false,
      heading: study.degree ?? study.title,
      lead: study.description,
      org: organisationById(study.org),
      built: study.built,
      builtLabel: study.builtLabel,
    })),
];

const pad = (n: number) => String(n).padStart(2, "0");

function Arrow() {
  return (
    <svg className="arrow" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M4.5 11.5 11.5 4.5M6 4.5h5.5V10" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
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
  const booking = organisationById("booking");

  return (
    <>
      <ContourBackground />

      <SiteBar home />

      <div className="page">
        <main id="top">
          <section className="hero" aria-labelledby="hero-name">
            <div className="hero__body">
              <h1 id="hero-name" className="hero__name">
                <span className="line">
                  <span style={{ "--d": "0.05s" } as React.CSSProperties}>{profile.givenName}</span>
                </span>
                <span className="line">
                  <span style={{ "--d": "0.15s" } as React.CSSProperties}>{profile.familyName}</span>
                </span>
              </h1>
              <div className="hero__details reveal" style={{ "--d": "0.5s" } as React.CSSProperties}>
                <p className="hero__role">
                  {profile.role}, {profile.team}
                  <br />
                  {booking ? <OrgLink org={booking}>{profile.company}</OrgLink> : profile.company}
                </p>
                <p className="hero__city">{profile.city}</p>
                <ProfileLinks />
              </div>
            </div>
          </section>

          <section id="experience" className="section" aria-labelledby="experience-title">
            <h2 id="experience-title" className="section__heading">
              Experience
            </h2>

            <div className="solo">
              <div className="card card--paper grow">
                <ExperienceTabs roles={roles} mentions={mentions} />
              </div>
            </div>
          </section>

          <section id="projects" className="section" aria-labelledby="projects-title">
            <h2 id="projects-title" className="section__heading">
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
                      <p className="project__summary">
                        <WithMentions text={p.summary} orgs={mentions} />
                      </p>
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
              <div>
                <p className="card__period">Contact</p>
                <h2 id="contact-title" className="contact__title">
                  Get in touch
                </h2>
                {OPEN_TO_WORK ? <p className="contact__note">{OPEN_TO_WORK_NOTE}</p> : null}
              </div>
              <div>
                <EmailLink email={profile.email} className="contact__email">
                  {profile.email}
                </EmailLink>
                <div className="contact__actions">
                  <EmailLink email={profile.email} className="btn btn--ink btn--lg">
                    Email me
                  </EmailLink>
                  <a className="btn btn--line btn--lg" href={profile.calUrl}>
                    Book a call
                    <Arrow />
                  </a>
                </div>
                <ProfileLinks className="profile-links--contact" />
              </div>
            </div>
          </section>
        </main>

        <SiteFooter />
      </div>

      <Motion />
    </>
  );
}
