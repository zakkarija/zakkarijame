/**
 * Organisations
 * Short context shown when a visitor clicks an organisation's name. Text is
 * carried over from the previous site's popovers.
 */

export interface Organisation {
  id: string;
  name: string;
  blurb: string;
  links: { label: string; url: string }[];
  /** Exact strings in body copy that should open this organisation's card. */
  mentions?: string[];
}

export const organisations: Organisation[] = [
  {
    id: "booking",
    name: "Booking.com",
    blurb:
      "Online travel platform headquartered in Amsterdam. The GenAI Engineering team builds the internal developer platform: agent platform, MCP integration platform and supporting infrastructure to accelerate engineers across the company.",
    links: [{ label: "Visit site", url: "https://www.booking.com" }],
  },
  {
    id: "phoenixnap",
    name: "PhoenixNAP",
    blurb:
      "Global IaaS provider headquartered in Phoenix, Arizona, with engineering hubs in Malta. Operates a bare-metal cloud across 17 data-center locations, with a focus on dedicated infrastructure and security-first compute.",
    links: [{ label: "Visit site", url: "https://phoenixnap.com" }],
  },
  {
    id: "ccbill",
    name: "CCBill",
    blurb:
      "Online payment processor and PhoenixNAP sister brand. One of the longest-running card-not-present merchants on the web, processing recurring billing across subscription businesses since 1998.",
    links: [{ label: "Visit site", url: "https://ccbill.com" }],
  },
  {
    id: "vu",
    name: "UvA & VU Amsterdam",
    blurb:
      "A joint MSc Computer Science, run together by the University of Amsterdam (UvA) and Vrije Universiteit Amsterdam (VU), with courses at both. UvA is consistently ranked among the top universities in continental Europe.",
    links: [
      { label: "Visit UvA", url: "https://www.uva.nl/en" },
      { label: "Visit VU", url: "https://vu.nl/en" },
    ],
  },
  {
    id: "uom",
    name: "University of Malta",
    blurb:
      "Malta's national university, founded in 1592 and one of the oldest universities in Europe. Its Department of Artificial Intelligence teaches machine learning, computer vision and knowledge representation.",
    links: [{ label: "Visit site", url: "https://www.um.edu.mt" }],
  },
  {
    id: "ideko",
    name: "IDEKO",
    blurb:
      "Manufacturing research centre in Elgoibar, Spain. Specialises in industrial digitalisation and machine-tool research. Provided the CNC anomaly-detection use case for the MSc thesis.",
    links: [{ label: "Visit site", url: "https://www.ideko.es/en" }],
    mentions: ["IDEKO"],
  },
  {
    id: "cain",
    name: "CAIN 2026",
    blurb:
      "The 5th International Conference on AI Engineering, on software engineering for AI systems. Held in Rio de Janeiro in April 2026, co-located with ICSE, the International Conference on Software Engineering. Proceedings published by ACM.",
    links: [
      { label: "Read the paper", url: "https://doi.org/10.1145/3793653.3793785" },
      { label: "Conference site", url: "https://conf.researchr.org/home/cain-2026" },
    ],
    mentions: ["CAIN 2026"],
  },
];

export const organisationById = (id: string | undefined) =>
  organisations.find((o) => o.id === id);
