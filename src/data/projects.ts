/**
 * Projects Data
 * Portfolio project entries for the Projects component
 */

export interface ProjectLink {
  name: string;
  url: string;
}

export interface Project {
  title: string;
  description: string;
  links: ProjectLink[];
  mediaType: "image" | "video";
  mediaUrl: string;
  technologies: string[];
}

export const projects: Project[] = [
  {
    title: "MLOps Research: From Literature Review to Industrial Implementation",
    description: "For my Master's I did two related pieces of work. First, a systematic literature review where I went through 41 academic papers and mapped out which MLOps tools people actually use and what they say about them. Then I took the most popular tools from that review and built two real pipelines with them, one around MLflow and one around Kubeflow. This was done with IDEKO, a manufacturing research company in Spain, using their industrial anomaly detection use case. The hands on work showed things you would never learn from documentation: MLflow setups are straightforward and you can get going quickly, while Kubeflow needs proper Kubernetes knowledge before you can do much of anything. Both papers are linked below.",
    links: [
      { name: "Thesis", url: "https://nakv6s9tvu.ufs.sh/f/dWAZu4wE3JKxM85nfhPrzpT6i8kR4KAmJhoqExUCNa0wlIVG" },
      { name: "Literature Review", url: "https://nakv6s9tvu.ufs.sh/f/dWAZu4wE3JKxDRIwCMeRQVnEYAs4oD92tr10wUIjgL6BFShC" },
      { name: "Zenodo", url: "https://zenodo.org/records/17454143" }
    ],
    mediaType: "image",
    mediaUrl: "https://nakv6s9tvu.ufs.sh/f/dWAZu4wE3JKxDGoXYcseRQVnEYAs4oD92tr10wUIjgL6BFSh",
    technologies: ["MLOps", "MLflow", "Kubeflow", "DVC", "Anomaly Detection", "Python"]
  },
  {
    title: "Saliency-Directed Product Placement",
    description: "I developed a computer vision system that predicts which products in a scene will attract customer attention first. The system uses visual saliency (how certain objects naturally stand out due to contrast, color, or orientation) to objectively rank products based on their attention-grabbing potential. The tool combines state-of-the-art object detection with a novel saliency segment ranking algorithm, achieving a 0.66 correlation coefficient when compared with human attention patterns. This modular system allows marketers to optimize product placement for maximum visual impact before expensive physical implementations.",
    links: [
      { name: "Report", url: "https://www.um.edu.mt/library/oar/handle/123456789/92203" },
      { name: "GitHub", url: "https://github.com/zakkarija/Sal_Object_Rank" }
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
