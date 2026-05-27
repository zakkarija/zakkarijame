import Popovers from "~/components/Popovers";
import { EmailIcon, GitHubIcon, LinkedInIcon, DownloadIcon } from "~/components/icons";
import { BookCallTrigger } from "~/components/BookCall";
import { SHOW_AVAILABLE } from "~/lib/site-config";

export default function HomePage() {
  return (
    <>
      <header className="container">
        <div className="banner grid12" data-screen-label="Hero">
          <div className="nameplate">
            <h1 className="display-name">
              <span className="l1">Zakkarija</span>
              <span className="l2">Micallef</span>
            </h1>

            <p className="tagline">
              Software engineer at{" "}
              <button className="pop" data-pop="booking">
                <span className="roman">Booking.com</span>
              </button>
              , on the <span className="roman">GenAI Engineering</span> team.
            </p>

            <p className="location" aria-label="Based in Amsterdam and Malta">
              <svg
                className="location__pin"
                viewBox="0 0 24 24"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11z" />
                <circle cx="12" cy="10" r="2.4" />
              </svg>
              Amsterdam / Malta
            </p>
          </div>

          <ul className="directory" aria-label="Contact">
            <li>
              <a href="mailto:zak.micallef27@gmail.com">
                <span className="ico" aria-hidden="true">
                  <EmailIcon fill="currentColor" />
                </span>
                <span className="row-text">
                  <span className="label">Email</span>
                  <span className="caption">zak.micallef27@gmail.com</span>
                </span>
                <span className="arrow">→</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/zakkarija"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="ico" aria-hidden="true">
                  <GitHubIcon fill="currentColor" />
                </span>
                <span className="row-text">
                  <span className="label">GitHub</span>
                  <span className="caption">@zakkarija</span>
                </span>
                <span className="arrow">→</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/zakkarija-micallef/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="ico" aria-hidden="true">
                  <LinkedInIcon fill="currentColor" />
                </span>
                <span className="row-text">
                  <span className="label">LinkedIn</span>
                  <span className="caption">in/zakkarija-micallef</span>
                </span>
                <span className="arrow">→</span>
              </a>
            </li>
            <li>
              <a
                href="https://nakv6s9tvu.ufs.sh/f/dWAZu4wE3JKxJCq2baEIbfhXNIRd0927apZygWQESMPDUHkv"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="ico" aria-hidden="true">
                  <DownloadIcon />
                </span>
                <span className="row-text">
                  <span className="label">CV</span>
                  <span className="caption">PDF, 2026</span>
                </span>
                <span className="arrow">→</span>
              </a>
            </li>
          </ul>
        </div>

        <p className="bio" data-screen-label="Bio">
          I build <strong>developer tooling</strong> at Booking.com in Amsterdam: the
          internal agent platform, the MCP integration platform, and the infrastructure
          that helps engineering ship faster. Four years at PhoenixNAP before that on
          backend orchestration for a bare-metal cloud, alongside an MSc at{" "}
          <button className="pop" data-pop="vu">
            VU Amsterdam &amp; University of Amsterdam
          </button>{" "}
          on industrial MLOps.
        </p>
      </header>

      <main>
        {SHOW_AVAILABLE && (
        <section id="available" data-screen-label="Available">
          <div className="container">
            <div className="grid12 sec-grid">
              <div className="eyebrow-block">
                <p className="eyebrow">
                  <span className="num">01</span>Available for
                </p>
              </div>
              <h2 className="sec-title">
                Open to <em>short-term contract work</em> in Amsterdam, Malta &amp; remote-EU.
              </h2>
              <ul className="services">
                <li className="services__featured">
                  <span className="service-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="3" y="5" width="18" height="14" rx="1" />
                      <line x1="3" y1="9" x2="21" y2="9" />
                      <circle cx="6" cy="7" r="0.6" fill="currentColor" />
                      <circle cx="8.4" cy="7" r="0.6" fill="currentColor" />
                      <circle cx="10.8" cy="7" r="0.6" fill="currentColor" />
                    </svg>
                  </span>
                  <h3>Web &amp; commerce</h3>
                  <p>
                    Get online and start selling. Marketing sites that convert.
                    Online stores with real-time inventory, secure checkout and
                    order tracking. AI features that lift conversion: smart
                    site search, a support chatbot that handles the obvious
                    questions, product recommendations that learn from buyers.
                  </p>
                  <ul className="tags">
                    <li>Next.js</li>
                    <li>Tailwind</li>
                    <li>Stripe</li>
                    <li>Shopify</li>
                    <li>Inventory</li>
                    <li>Webhooks</li>
                    <li>RAG search</li>
                    <li>AI chat</li>
                  </ul>
                  <p className="examples-heading">Recent work</p>
                  <ul className="examples">
                    <li>
                      <a
                        href="https://volta-ebike.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="ex-name">Volta</span>
                        <span className="ex-desc">E-bike storefront</span>
                        <span className="ex-host">volta-ebike.vercel.app</span>
                        <span className="ex-arrow" aria-hidden="true">↗</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://zenith-studio-kappa.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="ex-name">Zenith Studio</span>
                        <span className="ex-desc">Creative studio site</span>
                        <span className="ex-host">zenith-studio-kappa.vercel.app</span>
                        <span className="ex-arrow" aria-hidden="true">↗</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://zakkarija.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="ex-name">zakkarija.com</span>
                        <span className="ex-desc">Earlier portfolio</span>
                        <span className="ex-host">zakkarija.com</span>
                        <span className="ex-arrow" aria-hidden="true">↗</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="service-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 3l1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3z" />
                      <path d="M19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15z" />
                    </svg>
                  </span>
                  <h3>AI that does a job</h3>
                  <p>
                    Set up agents, MCP servers and custom skills that plug
                    straight into your stack. Integrate the right tool for the
                    job: Glean for company-wide search, a Slack or Notion
                    connector, a support chatbot that handles the routine
                    tickets, document processing that replaces hours of manual
                    review. Build, or buy and integrate, whichever ships you
                    value faster.
                  </p>
                  <ul className="tags">
                    <li>Agents</li>
                    <li>MCP</li>
                    <li>Custom skills</li>
                    <li>Glean</li>
                    <li>Support chat</li>
                    <li>Doc extraction</li>
                  </ul>
                </li>
                <li>
                  <span className="service-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="3" y="4" width="18" height="5" rx="1" />
                      <rect x="3" y="10" width="18" height="5" rx="1" />
                      <rect x="3" y="16" width="18" height="5" rx="1" />
                      <circle cx="6.5" cy="6.5" r="0.6" fill="currentColor" />
                      <circle cx="6.5" cy="12.5" r="0.6" fill="currentColor" />
                      <circle cx="6.5" cy="18.5" r="0.6" fill="currentColor" />
                    </svg>
                  </span>
                  <h3>Backend &amp; integrations</h3>
                  <p>
                    Make your systems talk and your processes run themselves.
                    Connect the tools your team already uses, automate the
                    handoffs that someone is doing manually today, and build
                    APIs your team and partners can rely on.
                  </p>
                  <ul className="tags">
                    <li>Java</li>
                    <li>Spring</li>
                    <li>Temporal</li>
                    <li>gRPC</li>
                    <li>PostgreSQL</li>
                    <li>MongoDB</li>
                  </ul>
                </li>
                <li>
                  <span className="service-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M7 18a5 5 0 0 1-1-9.9A6 6 0 0 1 18 9.5 4 4 0 0 1 17 17.5" />
                      <path d="M7 18h10" strokeLinecap="round" />
                    </svg>
                  </span>
                  <h3>Cloud &amp; infrastructure</h3>
                  <p>
                    Run reliably and pay less. Cloud setup that scales without
                    surprises on your bill, deployments that don&apos;t wake
                    anyone at 3am, and monitoring that catches problems before
                    customers notice them.
                  </p>
                  <ul className="tags">
                    <li>AWS</li>
                    <li>Kubernetes</li>
                    <li>Terraform</li>
                    <li>Ansible</li>
                    <li>Docker</li>
                    <li>GitHub Actions</li>
                  </ul>
                </li>
                <li>
                  <span className="service-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="5" cy="6" r="2" />
                      <circle cx="5" cy="18" r="2" />
                      <circle cx="19" cy="12" r="2" />
                      <path d="M7 6h6a3 3 0 0 1 3 3v2" strokeLinecap="round" />
                      <path d="M7 18h6a3 3 0 0 0 3-3v-2" strokeLinecap="round" />
                    </svg>
                  </span>
                  <h3>ML in production</h3>
                  <p>
                    Take your models from notebook to production, and keep
                    them working. Automated training, versioning and
                    deployment, with monitoring that flags drift before it
                    starts costing you. Your team ships models instead of
                    fighting tooling.
                  </p>
                  <ul className="tags">
                    <li>MLflow</li>
                    <li>Kubeflow</li>
                    <li>Argo</li>
                    <li>Docker</li>
                    <li>Python</li>
                    <li>PyTorch</li>
                  </ul>
                </li>
              </ul>
              <div className="services__cta">
                <p className="services__cta-body">
                  Don&apos;t know what any of this means? Set up a call and
                  we&apos;ll walk you through how AI can actually move your
                  business forward.
                </p>
                <BookCallTrigger className="services__cta-btn">
                  Book a consultation <span aria-hidden="true">↗</span>
                </BookCallTrigger>
              </div>
            </div>
          </div>
        </section>
        )}

        <section id="experience" data-screen-label="Experience">
          <div className="container">
            <div className="grid12 sec-grid">
              <div className="eyebrow-block">
                <h2 className="eyebrow">
                  <span className="num">01</span>Experience
                </h2>
              </div>
              <ol className="cv">
                <li className="current">
                  <span className="when">
                    <em>Apr 2025</em>
                    <br />to Now
                  </span>
                  <span className="logo">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://zakkarija.com/logos/booking.svg"
                      alt="Booking.com"
                      referrerPolicy="no-referrer"
                    />
                  </span>
                  <div className="what">
                    <p className="org">
                      <button className="pop" data-pop="booking">
                        Booking.com
                      </button>
                    </p>
                    <p className="role">Software Engineer · GenAI Engineering</p>
                    <p className="gloss">
                      Building tools to accelerate developers across the company:
                      the internal agent platform, MCP integration platform, and the
                      infrastructure around them.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="when">2023 to 2025</span>
                  <span className="logo">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://zakkarija.com/logos/Amsterdamuniversitylogo.svg.png"
                      alt="VU Amsterdam & University of Amsterdam"
                      referrerPolicy="no-referrer"
                    />
                  </span>
                  <div className="what">
                    <p className="org">
                      <button className="pop" data-pop="vu">
                        VU Amsterdam &amp; University of Amsterdam
                      </button>
                    </p>
                    <p className="role">M.Sc Computer Science</p>
                    <p className="gloss">
                      Graduated with a Master&apos;s degree focusing on advanced topics in
                      distributed systems, cloud computing, and software architecture.
                      Dissertation: developed a real-world industrial anomaly detection
                      pipeline for CNC machines using MLflow/Kubeflow, automating model
                      training through deployment, with{" "}
                      <button className="pop" data-pop="ideko">
                        IDEKO
                      </button>
                      .
                    </p>
                  </div>
                </li>
                <li>
                  <span className="when">2021 to 2025</span>
                  <span className="logo">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://zakkarija.com/logos/pnap-favicon.png"
                      alt="PhoenixNAP"
                      referrerPolicy="no-referrer"
                    />
                  </span>
                  <div className="what">
                    <p className="org">
                      <button className="pop" data-pop="pnap">
                        PhoenixNAP
                      </button>
                    </p>
                    <p className="role">Software Engineer</p>
                    <p className="gloss">
                      Worked as a full-time Java engineer at this bare-metal cloud
                      provider, developing automation systems and internal tools. Led
                      projects including automated RAID configuration, custom OS image
                      creation, and internal provisioning tools built with Spring Boot.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="when">2018 to 2021</span>
                  <span className="logo">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://zakkarija.com/logos/CCBill_transparent_1.png"
                      alt="CCBill"
                      referrerPolicy="no-referrer"
                    />
                  </span>
                  <div className="what">
                    <p className="org">
                      <button className="pop" data-pop="ccbill">
                        CCBill
                      </button>
                    </p>
                    <p className="role">Software Engineer Intern</p>
                    <p className="gloss">
                      Developed and maintained an internal employee management tool as
                      part of a small intern team, handling the full stack including
                      frontend, backend, database, deployment, and support. Collaborated
                      with Product Owners to prioritise sprint tasks and gained practical
                      experience with Java, Spring, Maven, SQL, and JavaScript.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="when">2018 to 2021</span>
                  <span className="logo">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://zakkarija.com/logos/UoM_logo.jpg"
                      alt="University of Malta"
                      referrerPolicy="no-referrer"
                    />
                  </span>
                  <div className="what">
                    <p className="org">
                      <button className="pop" data-pop="uom">
                        University of Malta
                      </button>
                    </p>
                    <p className="role">B.Sc Artificial Intelligence</p>
                    <p className="gloss">
                      Studied core AI concepts including machine learning, computer
                      vision, and knowledge representation.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </section>

        <section id="work" className="last" data-screen-label="Selected work">
          <div className="container">
            <div className="grid12 sec-grid">
              <div className="eyebrow-block">
                <h2 className="eyebrow">
                  <span className="num">02</span>Selected work
                </h2>
              </div>
              <ol className="work-list">
                <li>
                  <div className="work-thumb key-finding" aria-hidden="false">
                    <span className="panel-eyebrow">
                      Key finding<span className="dot">·</span>CAIN 2026
                    </span>
                    <blockquote>
                      No single tool covers the full <em>MLOps lifecycle</em>. Teams stitch
                      several together. Interoperability becomes the central concern.
                    </blockquote>
                    <div className="panel-foot">
                      <span className="stat">41</span>
                      <span>
                        papers reviewed across orchestration, versioning, tracking, deployment,
                        monitoring.
                      </span>
                    </div>
                  </div>
                  <div className="work-meta">
                    <span className="badge">Peer-reviewed paper</span>
                    <h3>
                      A Systematic Review of <em>MLOps Tools</em>
                    </h3>
                    <p className="citation">
                      <span className="me">Micallef, Z.</span>, Rajenthiram, K., and
                      Gerostathopoulos, I. (2026).{" "}
                      <span className="title">
                        In Proceedings of the 5th International Conference on AI Engineering
                        (CAIN &apos;26).
                      </span>{" "}
                      ACM, Rio de Janeiro.
                    </p>
                    <p className="summary">
                      Maps MLOps-native tools to lifecycle components, identifies adoption
                      patterns, and synthesises reported limitations from real-world usage. Fed
                      directly into the MSc thesis pipelines built on{" "}
                      <button className="pop" data-pop="ideko">
                        IDEKO
                      </button>
                      &apos;s industrial use case.
                    </p>
                    <div className="links">
                      <a href="https://doi.org/10.1145/3793653.3793785">DOI →</a>
                      <a href="https://www.researchgate.net/publication/403771320_A_Systematic_Review_of_MLOps_Tools_Tool_Adoption_Lifecycle_Coverage_and_Critical_Insights">
                        ResearchGate →
                      </a>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="work-thumb">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://nakv6s9tvu.ufs.sh/f/dWAZu4wE3JKxDGoXYcseRQVnEYAs4oD92tr10wUIjgL6BFSh"
                      alt="Industrial MLOps pipeline figure"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="work-meta">
                    <span className="badge">MSc Thesis</span>
                    <h3>
                      Industrial MLOps for <em>Anomaly Detection</em>
                    </h3>
                    <p className="summary">
                      Two pipelines (one MLflow, one Kubeflow) built around an industrial
                      anomaly-detection use case on CNC machine signals, with{" "}
                      <button className="pop" data-pop="ideko">
                        IDEKO
                      </button>
                      . Honest finding: MLflow gets you running quickly; Kubeflow needs
                      Kubernetes fluency before it gives you anything. Both work; the choice is
                      mostly about what the team already runs.
                    </p>
                    <div className="links">
                      <a href="https://nakv6s9tvu.ufs.sh/f/dWAZu4wE3JKxM85nfhPrzpT6i8kR4KAmJhoqExUCNa0wlIVG">
                        Thesis PDF →
                      </a>
                      <a href="https://nakv6s9tvu.ufs.sh/f/dWAZu4wE3JKxDRIwCMeRQVnEYAs4oD92tr10wUIjgL6BFShC">
                        Lit. Review →
                      </a>
                      <a href="https://zenodo.org/records/17454143">Zenodo →</a>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="work-thumb">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://nakv6s9tvu.ufs.sh/f/dWAZu4wE3JKxoeVEOc4TjWbHD43p9hvwdrISa5cyflZBmzJ1"
                      alt="Saliency-directed product placement"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="work-meta">
                    <span className="badge">BSc Dissertation</span>
                    <h3>
                      Saliency-Directed <em>Product Placement</em>
                    </h3>
                    <p className="summary">
                      Computer-vision system that ranks products in a scene by predicted
                      attention. Mask R-CNN object detection plus a custom saliency-segment
                      ranking algorithm. 0.66 correlation with human attention on a held-out
                      set. Python, OpenCV, Mask R-CNN, Supervisely.
                    </p>
                    <div className="links">
                      <a href="https://github.com/zakkarija/Sal_Object_Rank">GitHub →</a>
                      <a href="https://www.um.edu.mt/library/oar/handle/123456789/92203">
                        Report →
                      </a>
                      <a href="https://www.youtube.com/watch?v=uZtqgU7XOds">Demo →</a>
                    </div>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </section>
      </main>

      <div className="container">
        <footer className="foot" data-screen-label="Footer">
          <span>Maltese, in Amsterdam.</span>
          <span className="right">© 2026 Z. Micallef</span>
        </footer>
      </div>

      <Popovers />
    </>
  );
}
