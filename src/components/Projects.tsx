import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  links: { name: string, url: string }[];
  mediaType: 'image' | 'video';
  mediaUrl: string;
  technologies: string[];
}

const projects: Project[] = [
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

const Projects = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="section-title">Projects</h2>
      
      <div className="glass-panel glass-panel-hover p-4 sm:p-6 md:p-10">
        <div className="space-y-16 sm:space-y-20 md:space-y-32">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-6 sm:gap-8 md:gap-12 items-center`}
            >
              {/* Media Section */}
              <div className="w-full md:w-1/2">
                {project.mediaType === 'image' ? (
                  <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl transition-transform hover:scale-[1.02] duration-300">
                    <Image
                      src={project.mediaUrl}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                ) : (
                  <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
                    <iframe
                      src={project.mediaUrl}
                      title={project.title}
                      className="absolute top-0 left-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="w-full md:w-1/2 space-y-4 sm:space-y-5">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold gradient-text">
                  {project.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 sm:px-3 py-1 bg-cyan-950/50 border border-cyan-800/30 rounded-full text-xs sm:text-sm text-cyan-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4 sm:gap-6 pt-2">
                  {project.links.map((link) => (
                    <Link
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group"
                    >
                      <span>{link.name}</span>
                      <svg className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects; 