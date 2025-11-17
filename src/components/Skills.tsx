import React from 'react';
import Image from 'next/image';

interface Skill {
  name: string;
  icon: string;
  level?: 'expert' | 'advanced' | 'intermediate';
}

interface SkillCategory {
  name: string;
  description: string;
  skills: Skill[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    name: "Backend & Languages",
    description: "Primary backend technologies and programming languages",
    color: "from-cyan-500 to-blue-500",
    skills: [
      { name: 'Java', icon: 'https://cdn.simpleicons.org/openjdk/FFFFFF', level: 'expert' },
      { name: 'Spring', icon: 'https://cdn.simpleicons.org/spring/6DB33F', level: 'expert' },
      { name: 'Python', icon: 'https://cdn.simpleicons.org/python/3776AB', level: 'advanced' },
      { name: 'C', icon: 'https://cdn.simpleicons.org/c/A8B9CC', level: 'advanced' },
      { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E', level: 'intermediate' },
      { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/3178C6', level: 'intermediate' },
    ]
  },
  {
    name: "DevOps & Cloud",
    description: "Infrastructure, deployment, and cloud services",
    color: "from-orange-500 to-red-500",
    skills: [
      { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker/2496ED', level: 'expert' },
      { name: 'AWS', icon: 'https://cdn.simpleicons.org/amazonaws/FF9900', level: 'advanced' },
      { name: 'Git', icon: 'https://cdn.simpleicons.org/git/F05032', level: 'expert' },
      { name: 'GitHub', icon: 'https://cdn.simpleicons.org/github/FFFFFF', level: 'expert' },
      { name: 'Linux', icon: 'https://cdn.simpleicons.org/linux/FCC624', level: 'expert' },
      { name: 'Bash', icon: 'https://cdn.simpleicons.org/gnubash/4EAA25', level: 'advanced' },
    ]
  },
  {
    name: "Databases",
    description: "Database systems and data management",
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: 'MongoDB', icon: 'https://cdn.simpleicons.org/mongodb/47A248', level: 'advanced' },
      { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql/4169E1', level: 'advanced' },
      { name: 'MySQL', icon: 'https://cdn.simpleicons.org/mysql/4479A1', level: 'intermediate' },
    ]
  },
  {
    name: "AI & Machine Learning",
    description: "Artificial intelligence and computer vision",
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: 'TensorFlow', icon: 'https://cdn.simpleicons.org/tensorflow/FF6F00', level: 'intermediate' },
      { name: 'OpenCV', icon: 'https://cdn.simpleicons.org/opencv/5C3EE8', level: 'intermediate' },
      { name: 'PyTorch', icon: 'https://cdn.simpleicons.org/pytorch/EE4C2C', level: 'intermediate' },
    ]
  },
  {
    name: "Web & Frameworks",
    description: "Frontend and full-stack frameworks",
    color: "from-blue-500 to-indigo-500",
    skills: [
      { name: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB', level: 'intermediate' },
      { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs/FFFFFF', level: 'intermediate' },
      { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/5FA04E', level: 'intermediate' },
      { name: 'Tailwind CSS', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4', level: 'intermediate' },
    ]
  },
  {
    name: "Tools & Other",
    description: "Development tools and additional technologies",
    color: "from-yellow-500 to-orange-500",
    skills: [
      { name: 'Unity', icon: 'https://cdn.simpleicons.org/unity/FFFFFF', level: 'intermediate' },
      { name: 'VS Code', icon: 'https://cdn.simpleicons.org/visualstudiocode/007ACC', level: 'expert' },
      { name: 'Postman', icon: 'https://cdn.simpleicons.org/postman/FF6C37', level: 'advanced' },
    ]
  }
];

const SkillItem = ({ name, icon, level }: { name: string; icon: string; level?: string }) => (
  <div className="group relative">
    <div className="flex flex-col items-center gap-2 p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20">
      <div className="relative w-12 h-12 transition-transform">
        <Image
          src={icon}
          alt={`${name} logo`}
          fill
          className="object-contain drop-shadow-lg"
        />
      </div>
      <span className="text-xs text-gray-300 group-hover:text-white text-center font-medium transition-colors">
        {name}
      </span>
      {level && (
        <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      )}
    </div>
  </div>
);

const SkillCategory = ({ name, description, skills, color }: SkillCategory) => (
  <div className="group relative">
    {/* Gradient border effect */}
    <div className={`absolute -inset-0.5 bg-gradient-to-r ${color} rounded-2xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-300`}></div>

    <div className="relative glass-panel p-6 rounded-2xl border border-white/10 group-hover:border-white/20 transition-all duration-300">
      {/* Category header */}
      <div className="mb-5">
        <div className="flex items-center gap-2 mb-2">
          <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${color}`}></div>
          <h3 className="text-lg font-bold text-white">
            {name}
          </h3>
        </div>
        <p className="text-sm text-gray-400 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Skills grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {skills.map((skill) => (
          <SkillItem
            key={skill.name}
            name={skill.name}
            icon={skill.icon}
            level={skill.level}
          />
        ))}
      </div>

      {/* Skill count badge */}
      <div className="mt-4 flex justify-end">
        <span className="text-xs text-gray-500 font-medium">
          {skills.length} {skills.length === 1 ? 'skill' : 'skills'}
        </span>
      </div>
    </div>
  </div>
);

const Skills = () => {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Section header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
          Technical Skills
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          A comprehensive overview of my technical expertise across various domains
        </p>
      </div>

      {/* Skills grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {skillCategories.map((category) => (
          <SkillCategory
            key={category.name}
            name={category.name}
            description={category.description}
            skills={category.skills}
            color={category.color}
          />
        ))}
      </div>

      {/* Skills summary */}
      <div className="mt-12 text-center">
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full">
          <div className="flex -space-x-2">
            {skillCategories.slice(0, 4).map((category, index) => (
              <div
                key={category.name}
                className={`w-8 h-8 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center text-xs font-bold text-white border-2 border-black`}
                style={{ zIndex: 4 - index }}
              >
                {category.skills.length}
              </div>
            ))}
          </div>
          <span className="text-gray-400 text-sm font-medium">
            {skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)} total skills across {skillCategories.length} categories
          </span>
        </div>
      </div>
    </div>
  );
};

export default Skills; 