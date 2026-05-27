import Popovers from "~/components/Popovers";

// Temporarily hidden: not advertising consulting availability right now.
const SHOW_AVAILABLE = false;

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
          </div>

          <ul className="directory" aria-label="Contact">
            <li>
              <a href="mailto:zak.micallef27@gmail.com">
                <span className="kicker">Email</span>
                <span className="handle">zak.micallef27@&#8203;gmail.com</span>
                <span className="arrow">→</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/zakkarija"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="kicker">GitHub</span>
                <span className="handle">@zakkarija</span>
                <span className="arrow">→</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/zakkarija-micallef/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="kicker">LinkedIn</span>
                <span className="handle">in/zakkarija-micallef</span>
                <span className="arrow">→</span>
              </a>
            </li>
            <li>
              <a
                href="https://nakv6s9tvu.ufs.sh/f/dWAZu4wE3JKxJCq2baEIbfhXNIRd0927apZygWQESMPDUHkv"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="kicker">CV</span>
                <span className="handle">PDF, 2026</span>
                <span className="arrow">→</span>
              </a>
            </li>
          </ul>

          <p className="bio" data-screen-label="Bio">
            I build the <strong>backend systems</strong> behind LLM-backed product features at
            Booking.com in Amsterdam. Before this, four years at PhoenixNAP on backend
            orchestration for a bare-metal cloud, alongside an MSc at{" "}
            <button className="pop" data-pop="vu">
              VU Amsterdam
            </button>{" "}
            and UvA on industrial MLOps. Originally from Malta.
          </p>
        </div>
      </header>

      <main>
        {SHOW_AVAILABLE && (
          <section data-screen-label="Available">
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
                  <li>
                    <h3>Backend services</h3>
                    <p>Java and Spring. APIs, data pipelines, the unglamorous middle.</p>
                  </li>
                  <li>
                    <h3>Infrastructure</h3>
                    <p>AWS and Kubernetes. Setup, hardening, migrations, day-2 operations.</p>
                  </li>
                  <li>
                    <h3>MLOps pipelines</h3>
                    <p>Training to deployment to monitoring. MLflow, Kubeflow, or built from primitives.</p>
                  </li>
                  <li>
                    <h3>LLM glue work</h3>
                    <p>Wiring LLMs into production: retrieval, evals, guardrails, cost.</p>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        )}

        <section data-screen-label="Experience">
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
                    <br />— Now
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
                    <p className="role-line">
                      Software engineer at{" "}
                      <button className="pop" data-pop="booking">
                        Booking.com
                      </button>
                    </p>
                    <p className="gloss">
                      GenAI Engineering team. Backend tooling and infrastructure for LLM-backed
                      product features. Production systems, not research prototypes.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="when">2023 — 2025</span>
                  <span className="logo">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://zakkarija.com/logos/Amsterdamuniversitylogo.svg.png"
                      alt="VU Amsterdam & UvA"
                      referrerPolicy="no-referrer"
                    />
                  </span>
                  <div className="what">
                    <p className="role-line">
                      MSc Computer Science,{" "}
                      <button className="pop" data-pop="vu">
                        VU Amsterdam
                      </button>{" "}
                      and UvA
                    </p>
                    <p className="gloss">
                      Joint programme. Coursework in distributed systems, cloud computing,
                      software architecture. Thesis on MLOps pipelines for CNC anomaly detection
                      (MLflow vs. Kubeflow), with{" "}
                      <button className="pop" data-pop="ideko">
                        IDEKO
                      </button>
                      .
                    </p>
                  </div>
                </li>
                <li>
                  <span className="when">2021 — 2025</span>
                  <span className="logo">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://zakkarija.com/logos/pnap-favicon.png"
                      alt="PhoenixNAP"
                      referrerPolicy="no-referrer"
                    />
                  </span>
                  <div className="what">
                    <p className="role-line">Software engineer, PhoenixNAP</p>
                    <p className="gloss">
                      Java engineer at a bare-metal cloud provider. Automated RAID configuration,
                      custom OS image creation, Spring Boot provisioning tools, Temporal workflow
                      migration, iPXE / SSH / Ansible integration, MongoDB-based distributed
                      locking.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="when">2018 — 2021</span>
                  <span className="logo">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://zakkarija.com/logos/CCBill_transparent_1.png"
                      alt="CCBill"
                      referrerPolicy="no-referrer"
                    />
                  </span>
                  <div className="what">
                    <p className="role-line">Software engineer intern, CCBill</p>
                    <p className="gloss">
                      A PhoenixNAP brand. Three summers building a full-stack internal employee
                      management tool with a small team (Java, Spring, Maven, SQL, JS), through
                      to deployment and support.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="when">2018 — 2021</span>
                  <span className="logo">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://zakkarija.com/logos/UoM_logo.jpg"
                      alt="University of Malta"
                      referrerPolicy="no-referrer"
                    />
                  </span>
                  <div className="what">
                    <p className="role-line">BSc Artificial Intelligence, University of Malta</p>
                    <p className="gloss">
                      Machine learning, computer vision, knowledge representation. Dissertation
                      on saliency-directed product placement.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </section>

        <section className="last" data-screen-label="Selected work">
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
                      several together — interoperability becomes the central concern.
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
                      Kubernetes fluency before it gives you anything. Both work — the choice is
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
