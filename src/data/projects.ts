/**
 * Projects Data
 * Portfolio project entries for the Projects component
 */

export interface ProjectLink {
  name: string;
  url: string;
  /** The stable identifier behind the link (a DOI, a record number, a repo path). */
  identifier?: string;
}

export interface ProjectImage {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export interface Project {
  title: string;
  description: string;
  links: ProjectLink[];
  mediaType: "image" | "video";
  mediaUrl: string;
  technologies: string[];
  /** Fields below are used by the redesign; entries without an id are not shown there. */
  id?: string;
  kind?: string;
  /** Display heading for the redesign, where the legacy title carries extra labels. */
  heading?: string;
  /** Label short enough to sit on a time axis. */
  short?: string;
  /** Timeline entry this work came out of (see timeline.ts). */
  partOf?: string;
  year?: number;
  summary?: string;
  citation?: string;
  image?: ProjectImage;
}

export const projects: Project[] = [
  {
    id: "cain-2026",
    kind: "Peer-reviewed paper",
    heading: "A Systematic Review of MLOps Tools",
    short: "CAIN ’26 paper",
    partOf: "msc-cs",
    year: 2026,
    title: "A Systematic Review of MLOps Tools (CAIN 2026)",
    citation: "Micallef, Z., Rajenthiram, K., and Gerostathopoulos, I. (2026). A Systematic Review of MLOps Tools: Tool Adoption, Lifecycle Coverage and Critical Insights. In Proceedings of the 5th International Conference on AI Engineering (CAIN '26). ACM, Rio de Janeiro.",
    summary: "Maps MLOps-native tools to lifecycle components, across 41 papers, and synthesises the benefits and limitations reported from real use. Orchestration, data versioning, experiment tracking and managed cloud platforms dominate. No single tool covers the whole lifecycle, so teams stitch several together and interoperability becomes the central problem.",
    image: {
      src: "/projects/cain-2026-mlops-heatmap.png",
      width: 1024,
      height: 867,
      alt: "Heatmap of MLOps tools against ML lifecycle components, coloured by how often the literature mentions each pairing. MLflow dominates; most cells are empty.",
    },
    description: "Peer-reviewed paper published at the 5th International Conference on AI Engineering (CAIN 2026, Rio de Janeiro), co-authored with Keerthiga Rajenthiram and Ilias Gerostathopoulos (VU Amsterdam). The paper conducts a systematic literature review of MLOps-native tools, mapping them to lifecycle components to reveal their function, scope, and the challenges they address. We identify adoption trends and synthesise reported benefits and limitations from real-world usage. The most commonly used components turn out to be orchestration frameworks, data versioning, experiment tracking, and managed cloud platforms, and no single tool covers the entire lifecycle, so teams routinely stitch together several tools, which makes interoperability a central concern for production MLOps pipelines.",
    links: [
      { name: "DOI", url: "https://doi.org/10.1145/3793653.3793785", identifier: "10.1145/3793653.3793785" },
      { name: "ResearchGate", url: "https://www.researchgate.net/publication/403771320_A_Systematic_Review_of_MLOps_Tools_Tool_Adoption_Lifecycle_Coverage_and_Critical_Insights", identifier: "publication/403771320" }
    ],
    mediaType: "image",
    mediaUrl: "/projects/cain-2026-mlops-heatmap.png",
    technologies: ["MLOps", "Systematic Review", "ML Lifecycle", "CAIN 2026", "Academic Publication"]
  },
  {
    id: "msc-thesis",
    kind: "MSc thesis",
    heading: "Industrial MLOps for anomaly detection",
    short: "MSc thesis",
    partOf: "msc-cs",
    year: 2025,
    title: "MLOps Research: From Literature Review to Industrial Implementation",
    summary: "Two pipelines for the same industrial anomaly-detection use case on CNC machine signals, with IDEKO: one built on MLflow, one on Kubeflow. MLflow gets a team running quickly; Kubeflow needs Kubernetes fluency before it gives anything back. Which to pick depends mostly on what the team already runs.",
    description: "For my Master's I did two related pieces of work. First, a systematic literature review where I went through 41 academic papers and mapped out which MLOps tools people actually use and what they say about them. Then I took the most popular tools from that review and built two real pipelines with them, one around MLflow and one around Kubeflow. This was done with IDEKO, a manufacturing research company in Spain, using their industrial anomaly detection use case. The hands on work showed things you would never learn from documentation: MLflow setups are straightforward and you can get going quickly, while Kubeflow needs proper Kubernetes knowledge before you can do much of anything. Both papers are linked below.",
    links: [
      { name: "Thesis", url: "https://nakv6s9tvu.ufs.sh/f/dWAZu4wE3JKxM85nfhPrzpT6i8kR4KAmJhoqExUCNa0wlIVG" },
      { name: "Literature review", url: "https://nakv6s9tvu.ufs.sh/f/dWAZu4wE3JKxDRIwCMeRQVnEYAs4oD92tr10wUIjgL6BFShC" },
      { name: "Zenodo", url: "https://zenodo.org/records/17454143", identifier: "records/17454143" }
    ],
    mediaType: "image",
    mediaUrl: "https://nakv6s9tvu.ufs.sh/f/dWAZu4wE3JKxDGoXYcseRQVnEYAs4oD92tr10wUIjgL6BFSh",
    technologies: ["MLOps", "MLflow", "Kubeflow", "DVC", "Anomaly Detection", "Python"]
  },
  {
    id: "saliency",
    kind: "BSc dissertation",
    heading: "Saliency-directed product placement",
    short: "BSc dissertation",
    partOf: "bsc-ai",
    year: 2021,
    title: "Saliency-Directed Product Placement",
    summary: "Ranks the products in a scene by how likely each is to catch attention first, combining Mask R-CNN object detection with a saliency-segment ranking algorithm. The ranking reached a 0.66 correlation with human attention patterns.",
    image: {
      src: "/projects/saliency-product-ranking.png",
      width: 832,
      height: 551,
      alt: "Three products on a green backdrop, each boxed and numbered by predicted attention rank: the deodorant first, the shampoo second, the shaving foam third.",
    },
    description: "I developed a computer vision system that predicts which products in a scene will attract customer attention first. The system uses visual saliency (how certain objects naturally stand out due to contrast, color, or orientation) to objectively rank products based on their attention-grabbing potential. The tool combines state-of-the-art object detection with a novel saliency segment ranking algorithm, achieving a 0.66 correlation coefficient when compared with human attention patterns. This modular system allows marketers to optimize product placement for maximum visual impact before expensive physical implementations.",
    links: [
      { name: "Report", url: "https://www.um.edu.mt/library/oar/handle/123456789/92203", identifier: "handle/123456789/92203" },
      { name: "GitHub", url: "https://github.com/zakkarija/Sal_Object_Rank", identifier: "zakkarija/Sal_Object_Rank" }
    ],
    mediaType: "image",
    mediaUrl: "https://nakv6s9tvu.ufs.sh/f/dWAZu4wE3JKxoeVEOc4TjWbHD43p9hvwdrISa5cyflZBmzJ1",
    technologies: ["Python", "OpenCV", "Mask R-CNN", "Supervisely", "Saliency Detection"]
  },
  {
    title: "Unity Game Development",
    description: "Throughout my university courses and hackathons, I developed several games with Unity. The highlight was a 2-player platformer created during a 48-hour hackathon that won 2nd place and resulted in an internship offer. Other projects include a roguelike with procedurally generated maps (shown on the right) and an idle game. Each project helped me explore different aspects of game development, from path finding to procedural content generation.",
    links: [
      { name: "GitHub", url: "https://github.com/zakkarija/ProjectBen" }
    ],
    mediaType: "video",
    mediaUrl: "https://www.youtube.com/embed/uZtqgU7XOds",
    technologies: ["Unity", "C#", "Game Design", "Procedural Generation", "2D Animations"]
  },
  {
    title: "Personal Portfolio Website",
    description: "This very website you're browsing! I built this portfolio as a project to learn modern web development, particularly React and Next.js. The site is deployed using Vercel for seamless continuous deployment from GitHub.",
    links: [
      { name: "GitHub", url: "https://github.com/zakkarija/zakkarijame" }
    ],
    mediaType: "image",
    mediaUrl: "https://nakv6s9tvu.ufs.sh/f/dWAZu4wE3JKxZlvTIZEHcSpFhLO2yE4VbsldnG790ajWvtDX",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vercel"]
  }
];

/** The projects the redesign shows, in display order. */
export const selectedWork = projects.filter(
  (p): p is Project & Required<Pick<Project, "id" | "kind" | "heading" | "short" | "year" | "summary">> =>
    Boolean(p.id && p.kind && p.heading && p.short && p.year && p.summary),
);
