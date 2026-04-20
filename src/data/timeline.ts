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
}

export const timelineItems: TimelineEntry[] = [
  {
    id: "booking",
    year: "2026 - Present",
    title: "Software Engineer",
    subtitle: "Booking.com",
    description: "Recently joined Booking.com as a Software Engineer in Amsterdam, working on scalable systems and production-grade software.",
    logo: "/logos/booking.svg"
  },
  {
    id: "msc-cs",
    year: "2023 - 2025",
    title: "M.Sc Computer Science",
    subtitle: "VU Amsterdam & University of Amsterdam",
    description: "Graduated with a Master's degree focusing on advanced topics in distributed systems, cloud computing, and software architecture. Dissertation: Developed real-world industrial anomaly detection pipeline for CNC machines using MLflow/Kubeflow, automating model training through deployment.",
    logo: "/logos/Amsterdamuniversitylogo.svg.png"
  },
  {
    id: "phoenixnap",
    year: "2021 - 2026",
    title: "Software Engineer",
    subtitle: "PhoenixNAP",
    description: "Worked as a full-time Java engineer at this bare metal cloud provider, developing automation systems and internal tools. Led projects including automated RAID configuration, custom OS image creation, and internal provisioning tools built with Spring Boot.",
    logo: "/logos/pnap-favicon.png"
  },
  {
    id: "ccbill",
    year: "2018 - 2021",
    title: "Software Engineer Intern",
    subtitle: "CCBill",
    description: "Developed and maintained an internal employee management tool as part of a small intern team, handling the full stack including frontend, backend, database, deployment, and support. Collaborated with Product Owners to prioritise sprint tasks and gained practical experience with Java, Spring, Maven, SQL, and JavaScript.",
    logo: "/logos/CCBill_transparent_1.png"
  },
  {
    id: "bsc-ai",
    year: "2018 - 2021",
    title: "B.Sc Artificial Intelligence",
    subtitle: "University of Malta",
    description: "Studied core AI concepts including machine learning, computer vision, and knowledge representation.",
    logo: "/logos/UoM_logo.jpg"
  }
];
