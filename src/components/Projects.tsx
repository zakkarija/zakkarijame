import React from 'react';
import Link from 'next/link';

interface Project {
  title: string;
  description: string;
  githubUrl: string;
  mediaType: 'image' | 'video';
  mediaUrl: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    title: "Project 1",
    description: "A full-stack web application built with Next.js and TypeScript. Features include real-time updates, user authentication, and a responsive design. The project demonstrates modern web development practices and scalable architecture.",
    githubUrl: "https://github.com/yourusername/project1",
    mediaType: "image",
    mediaUrl: "https://example.com/project1-image.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"]
  },
  {
    title: "Project 2",
    description: "An AI-powered application that processes and analyzes data in real-time. Built with Python and TensorFlow, this project showcases machine learning integration in web applications.",
    githubUrl: "https://github.com/yourusername/project2",
    mediaType: "video",
    mediaUrl: "https://www.youtube.com/embed/your-video-id",
    technologies: ["Python", "TensorFlow", "React", "FastAPI"]
  },
  {
    title: "Project 3",
    description: "A mobile-first e-commerce platform with advanced search capabilities and secure payment processing. Demonstrates expertise in building scalable and secure web applications.",
    githubUrl: "https://github.com/yourusername/project3",
    mediaType: "image",
    mediaUrl: "https://example.com/project3-image.jpg",
    technologies: ["React Native", "Node.js", "MongoDB", "Stripe"]
  }
];

const Projects = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
      <div className="space-y-24">
        {projects.map((project, index) => (
          <div 
            key={project.title}
            className={`flex flex-col ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            } gap-8 items-center`}
          >
            {/* Media Section */}
            <div className="w-full md:w-1/2">
              {project.mediaType === 'image' ? (
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <img
                    src={project.mediaUrl}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="relative aspect-video rounded-lg overflow-hidden">
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
            <div className="w-full md:w-1/2 space-y-4">
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="text-gray-300 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-800 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-blue-400 hover:text-blue-300 transition-colors"
              >
                View on GitHub →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 