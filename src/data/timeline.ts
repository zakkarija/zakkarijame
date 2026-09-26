/**
 * Timeline Data
 * Work experience and education entries for the Timeline component
 */

export interface TimelineEntry {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  description: string;
  logo?: string;
  /** First year, used to place the entry on a time axis. */
  start: number;
  /** Last year, or null while the entry is current. */
  end: number | null;
  track: "work" | "study";
  team?: string;
  /** Label short enough to sit on a time axis. */
  short: string;
  /** Organisation id in organisations.ts, for the click-for-context card. */
  org?: string;
  /**
   * What was built there. Details are drafted strictly from the description
   * above (and what the names mean); Zakkarija should check the wording.
   */
  built?: { title: string; detail: string }[];
  /** Technologies named in the description. */
  stack?: string[];
}

export const timelineItems: TimelineEntry[] = [
  {
    id: "booking",
    org: "booking",
    year: "2026 - Present",
    title: "Software Engineer",
    subtitle: "Booking.com",
    short: "Booking.com",
    team: "GenAI Engineering",
    description: "Builds tools that speed up engineers across the company: the internal agent platform, the MCP integration platform, and the infrastructure around them.",
    logo: "/logos/booking.svg",
    start: 2026,
    end: null,
    track: "work",
    built: [
      {
        title: "Internal agent platform",
        detail: "An internal platform for AI agents, built for engineers across the company.",
      },
      {
        title: "MCP integration platform",
        detail: "Connects internal tools and services to agents through the Model Context Protocol.",
      },
      {
        title: "Developer tooling",
        detail: "The infrastructure and tooling around both platforms, so engineering ships faster.",
      },
    ],
    stack: ["AI agents", "MCP"],
  },
  {
    id: "msc-cs",
    org: "vu",
    year: "2023 - 2025",
    title: "M.Sc Computer Science",
    subtitle: "VU Amsterdam & University of Amsterdam",
    short: "MSc, VU and UvA",
    description: "Thesis with IDEKO: industrial anomaly-detection pipelines on CNC machine signals, built once on MLflow and once on Kubeflow to compare the two in practice.",
    logo: "/logos/Amsterdamuniversitylogo.svg.png",
    start: 2023,
    end: 2025,
    track: "study",
  },
  {
    id: "phoenixnap",
    org: "phoenixnap",
    year: "2021 - 2026",
    title: "Software Engineer",
    subtitle: "PhoenixNAP",
    short: "PhoenixNAP",
    description: "Java engineer on backend orchestration for a bare-metal cloud provider. Led automated RAID configuration, custom OS image creation, and internal provisioning tools built with Spring Boot.",
    logo: "/logos/pnap-favicon.png",
    start: 2021,
    end: 2026,
    track: "work",
    built: [
      {
        title: "Backend orchestration",
        detail: "Java backend orchestration for a bare-metal cloud provider.",
      },
      {
        title: "Automated RAID configuration",
        detail: "Led the project to configure server RAID automatically.",
      },
      {
        title: "Custom OS images",
        detail: "Led the work on creating custom operating-system images.",
      },
      {
        title: "Provisioning tools",
        detail: "Internal tools for provisioning servers, built with Spring Boot.",
      },
    ],
    stack: ["Java", "Spring Boot"],
  },
  {
    id: "ccbill",
    org: "ccbill",
    year: "2018 - 2021",
    title: "Software Engineer Intern",
    subtitle: "CCBill",
    short: "CCBill",
    description: "Part of a small intern team that built and ran an internal employee-management tool end to end: frontend, backend, database, deployment and support. Worked with Product Owners on sprint priorities. Java, Spring, Maven, SQL and JavaScript.",
    logo: "/logos/CCBill_transparent_1.png",
    start: 2018,
    end: 2021,
    track: "work",
    built: [
      {
        title: "Employee-management tool",
        detail: "An internal tool, built and run end to end by a small intern team.",
      },
      {
        title: "Full stack, start to finish",
        detail: "Frontend, backend, database, deployment and support, with sprint priorities set alongside Product Owners.",
      },
    ],
    stack: ["Java", "Spring", "Maven", "SQL", "JavaScript"],
  },
  {
    id: "bsc-ai",
    org: "uom",
    year: "2018 - 2021",
    title: "B.Sc Artificial Intelligence",
    subtitle: "University of Malta",
    short: "BSc, University of Malta",
    description: "Machine learning, computer vision and knowledge representation. Dissertation on saliency-directed product placement.",
    logo: "/logos/UoM_logo.jpg",
    start: 2018,
    end: 2021,
    track: "study",
  },
];
