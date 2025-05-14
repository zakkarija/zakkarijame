import React from 'react';

interface TimelineItemProps {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  isLast?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ 
  year, 
  title, 
  subtitle, 
  description, 
  isLast = false 
}) => {
  return (
    <div className="flex mb-12 last:mb-0 group">
      {/* Year Column */}
      <div className="w-32 flex-shrink-0 text-right pr-8">
        <div className="text-purple-400 font-semibold transition-all group-hover:text-purple-300">{year}</div>
      </div>
      
      {/* Timeline Line */}
      <div className="relative flex flex-col items-center mr-6">
        <div className="rounded-full h-5 w-5 bg-purple-500 shadow-glow z-10 transition-all duration-300 group-hover:scale-110 group-hover:bg-purple-400"></div>
        {!isLast && (
          <div className="h-full w-px bg-gradient-to-b from-purple-500 via-purple-700 to-purple-900 absolute top-5 opacity-70"></div>
        )}
      </div>
      
      {/* Content Column */}
      <div className="flex-grow pt-1">
        <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 transition-all group-hover:translate-x-1">{title}</h3>
        <div className="text-purple-300 font-medium mb-3">{subtitle}</div>
        <p className="text-gray-300 text-sm md:text-base leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const Timeline = () => {
  const timelineItems = [
    {
      id: "msc-cs",
      year: "2023 - Present",
      title: "M.Sc Computer Science",
      subtitle: "VU Amsterdam & University of Amsterdam",
      description: "Currently pursuing a Master's degree while working part-time as a Java engineer at PhoenixNAP. Focusing on advanced topics in distributed systems, cloud computing, and software architecture."
    },
    {
      id: "phoenixnap",
      year: "2021 - Present",
      title: "Software Engineer",
      subtitle: "PhoenixNAP",
      description: "Worked as a full-time Java engineer at this bare metal cloud provider, developing automation systems and internal tools. Led projects including automated RAID configuration, custom OS image creation, and internal provisioning tools built with Spring Boot."
    },
    {
      id: "ccbill",
      year: "2018 - 2021",
      title: "Software Engineer Intern",
      subtitle: "CCBill",
      description: "Developed and maintained an internal employee management tool as part of a small intern team, handling the full stack including frontend, backend, database, deployment, and support. Collaborated with Product Owners to prioritise sprint tasks and gained practical experience with Java, Spring, Maven, SQL, and JavaScript."
    },
    {
      id: "bsc-ai",
      year: "2018 - 2021",
      title: "B.Sc Artificial Intelligence",
      subtitle: "University of Malta",
      description: "Studied core AI concepts including machine learning, computer vision, and knowledge representation."
    }
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="section-title">Education & Experience</h2>
      
      <div className="glass-panel glass-panel-hover p-6 md:p-10">
        {timelineItems.map((item, index) => (
          <TimelineItem 
            key={item.id}
            year={item.year}
            title={item.title}
            subtitle={item.subtitle}
            description={item.description}
            isLast={index === timelineItems.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline; 