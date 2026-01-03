/**
 * Projects Component
 *
 * Showcases selected portfolio projects with descriptions, media (images/videos), and technologies used.
 * Features alternating layout for visual interest and responsive design.
 * Each project includes links to live demos, repositories, or documentation.
 */

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '~/data/projects';

/**
 * Main Projects Component
 * Renders the complete projects section with header and project cards
 * Uses alternating left-right layout for visual variety
 */
const Projects = () => {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Section header - matches Technical Skills style */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
          Projects
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Selected projects showcasing my technical skills and problem-solving abilities
        </p>
      </div>

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
                  <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl transition-transform hover:scale-[1.02] duration-300 bg-gray-900/50">
                    <Image
                      src={project.mediaUrl}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-contain"
                      priority={index === 0}
                    />
                  </div>
                ) : (
                  <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
                    <iframe
                      src={project.mediaUrl}
                      title={project.title}
                      name={`project-video-${index}`}
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
