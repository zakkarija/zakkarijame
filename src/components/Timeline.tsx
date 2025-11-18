/**
 * Timeline Component
 *
 * Displays professional experience and education in a chronological timeline format.
 * Features company/university logos, visual timeline connector, and responsive layout.
 * Includes hover effects and smooth transitions for better user experience.
 */

import React from 'react';
import Image from 'next/image';

// Type definition for timeline item data structure
interface TimelineItemProps {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  logo?: string;
  isLast?: boolean;
}

/**
 * TimelineItem Component
 * Renders individual timeline entry with year, title, organization, description, and logo
 * Features responsive layout with visual timeline connector on larger screens
 */
const TimelineItem: React.FC<TimelineItemProps> = ({
  year,
  title,
  subtitle,
  description,
  logo,
  isLast = false
}) => {
  return (
    <div className="flex flex-col sm:flex-row mb-12 last:mb-0 group">
      {/* Year Column - Responsive */}
      <div className="w-full sm:w-24 lg:w-32 flex-shrink-0 mb-4 sm:mb-0 sm:text-right sm:pr-6 lg:pr-8">
        <div className="text-cyan-400 font-semibold transition-all group-hover:text-cyan-300 text-sm sm:text-base">
          {year}
        </div>
      </div>

      {/* Timeline Line - Hidden on mobile, visible on larger screens */}
      <div className="hidden sm:flex relative flex-col items-center mr-6">
        <div className="rounded-full h-5 w-5 bg-cyan-500 shadow-glow z-10 transition-all duration-300 group-hover:scale-110 group-hover:bg-cyan-400"></div>
        {!isLast && (
          <div className="h-full w-px bg-gradient-to-b from-cyan-500 via-cyan-700 to-cyan-900 absolute top-5 opacity-70"></div>
        )}
      </div>

      {/* Content Column */}
      <div className="flex-grow pt-1 relative">
        {/* Company/University Logo */}
        {logo && (
          <div className="absolute top-0 right-0 w-12 h-12 sm:w-14 sm:h-14">
            <Image
              src={logo}
              alt={`${subtitle} logo`}
              fill
              className="object-contain rounded-full"
            />
          </div>
        )}

        <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-2 transition-all group-hover:translate-x-1 pr-16">{title}</h3>
        <div className="text-cyan-300 font-medium mb-3 text-sm sm:text-base">{subtitle}</div>
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

/**
 * Main Timeline Component
 * Renders the complete experience/education section with header and timeline items
 * Timeline data includes work experience and educational background in reverse chronological order
 */
const Timeline = () => {
  // Timeline data: work experience and education
  const timelineItems = [
    {
      id: "phoenixnap",
      year: "2021 - Present",
      title: "Software Engineer",
      subtitle: "PhoenixNAP",
      description: "Worked as a full-time Java engineer at this bare metal cloud provider, developing automation systems and internal tools. Led projects including automated RAID configuration, custom OS image creation, and internal provisioning tools built with Spring Boot.",
      logo: "/logos/pnap-favicon.png"
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

  return (
    <div className="max-w-5xl mx-auto">
      {/* Section header - matches Technical Skills style */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
          Experience
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          My professional journey and educational background
        </p>
      </div>

      <div className="glass-panel glass-panel-hover p-4 sm:p-6 md:p-10">
        {timelineItems.map((item, index) => (
          <TimelineItem
            key={item.id}
            year={item.year}
            title={item.title}
            subtitle={item.subtitle}
            description={item.description}
            logo={item.logo}
            isLast={index === timelineItems.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline; 