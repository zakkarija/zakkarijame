import React from 'react';
import Image from 'next/image';

// Categorized skills with additional technologies
const skillCategories = [
  {
    name: "Core Expertise",
    skills: [
      { name: 'Java', icon: 'https://svgl.app/library/java.svg' },
      { name: 'Spring', icon: 'https://svgl.app/library/spring.svg' },
      { name: 'Python', icon: 'https://svgl.app/library/python.svg' },
    ]
  },
  {
    name: "DevOps & Cloud",
    skills: [
      { name: 'Docker', icon: 'https://svgl.app/library/docker.svg' },
      { name: 'AWS', icon: 'https://svgl.app/library/aws_light.svg' },
      { name: 'Git', icon: 'https://svgl.app/library/git.svg' },
    ]
  },
  {
    name: "Databases",
    skills: [
      { name: 'MongoDB', icon: 'https://svgl.app/library/mongodb.svg' },
      { name: 'PostgreSQL', icon: 'https://svgl.app/library/postgresql.svg' },
    ]
  },
  {
    name: "Misc",
    skills: [
      { name: 'TensorFlow', icon: 'https://svgl.app/library/tensorflow.svg' },
      { name: 'OpenCV', icon: 'https://www.svgrepo.com/show/354139/opencv.svg' },
      { name: 'Unity', icon: 'https://svgl.app/library/unity_dark.svg' }
    ]
  },
  {
    name: "Systems",
    skills: [
      { name: 'Linux', icon: 'https://svgl.app/library/linux.svg' },
      { name: 'C', icon: 'https://svgl.app/library/c.svg' },
      { name: 'Bash', icon: 'https://svgl.app/library/bash_dark.svg'}
    ]
  }
];

// Get category by index safely
const getCategory = (index: number) => {
  return skillCategories[index] ?? { name: '', skills: [] };
};

const SkillItem = ({ name, icon }: { name: string; icon: string }) => (
  <div className="flex flex-col items-center gap-2 group w-24 sm:w-20 md:w-24">
    <div className="relative w-12 h-12 sm:w-10 sm:h-10 md:w-12 md:h-12 transition-transform transform group-hover:scale-110">
      <Image
        src={icon}
        alt={`${name} logo`}
        fill
        className="object-contain drop-shadow-lg"
      />
    </div>
    <span className="text-xs sm:text-xs md:text-sm text-gray-300 group-hover:text-white text-center leading-tight">
      {name}
    </span>
  </div>
);

const SkillCategory = ({ name, skills }: { name: string; skills: { name: string; icon: string }[] }) => (
  <div className="relative">
    <div className="glass-panel p-4 sm:p-3 md:p-4 bg-opacity-80">
      <h3 className="text-sm sm:text-sm md:text-base font-semibold text-center mb-3 text-cyan-300">{name}</h3>
      <div className="flex flex-wrap justify-center gap-3 sm:gap-2 md:gap-4">
        {skills.map((skill) => (
          <SkillItem key={skill.name} name={skill.name} icon={skill.icon} />
        ))}
      </div>
    </div>
  </div>
);

const Skills = () => {
  // Extract categories safely
  const coreExpertiseCategory = getCategory(0);
  const devopsCategory = getCategory(1);
  const databasesCategory = getCategory(2);
  const machinelearningCategory = getCategory(3);
  const systemsCategory = getCategory(4);

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="section-title">Skills</h2>
      
      <div className="pt-1 pb-4 md:pb-6">
        {/* Grid layout for categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="md:col-span-2">
            <SkillCategory name={coreExpertiseCategory.name} skills={coreExpertiseCategory.skills} />
          </div>
          
          <div>
            <SkillCategory name={databasesCategory.name} skills={databasesCategory.skills} />
          </div>
          
          <div>
            <SkillCategory name={devopsCategory.name} skills={devopsCategory.skills} />
          </div>
          
          <div>
            <SkillCategory name={systemsCategory.name} skills={systemsCategory.skills} />
          </div>
          
          <div>
            <SkillCategory name={machinelearningCategory.name} skills={machinelearningCategory.skills} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills; 