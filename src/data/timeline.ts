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
  /** What was built there, one item per line. Facts only. */
  built?: string[];
  /** Technologies named in the description. */
  stack?: string[];
}

export const timelineItems: TimelineEntry[] = [
  {
    id: "booking",
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
      "The internal agent platform",
      "The MCP integration platform",
      "The infrastructure and developer tooling around both",
    ],
    stack: ["AI agents", "MCP"],
  },
  {
    id: "msc-cs",
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
      "Backend orchestration for a bare-metal cloud",
      "Automated RAID configuration",
      "Custom OS image creation",
      "Internal provisioning tools in Spring Boot",
    ],
    stack: ["Java", "Spring Boot"],
  },
  {
    id: "ccbill",
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
      "An internal employee-management tool, end to end",
      "Frontend, backend, database, deployment and support",
    ],
    stack: ["Java", "Spring", "Maven", "SQL", "JavaScript"],
  },
  {
    id: "bsc-ai",
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
