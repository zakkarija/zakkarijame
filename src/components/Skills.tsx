import React from 'react';
import Image from 'next/image';

const skills = [
  {
    name: 'Java',
    icon: 'https://svgl.app/library/java.svg',
  },
  {
    name: 'Spring',
    icon: 'https://svgl.app/library/spring.svg',
  },
  {
    name: 'Python',
    icon: 'https://svgl.app/library/python.svg',
  },
  {
    name: 'MongoDB',
    icon: 'https://svgl.app/library/mongodb.svg',
  },
  {
    name: 'Git',
    icon: 'https://svgl.app/library/git.svg',
  },
  {
    name: 'Docker',
    icon: 'https://svgl.app/library/docker.svg',
  },
  {
    name: 'Linux',
    icon: 'https://svgl.app/library/linux.svg',
  },
  {
    name: 'C',
    icon: 'https://svgl.app/library/c.svg',
  },
];

const Skills = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-4">
      <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
      <div className="flex flex-wrap justify-center gap-12">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center gap-3 group"
          >
            <div className="relative w-16 h-16 transition-transform transform group-hover:scale-110">
              <Image
                src={skill.icon}
                alt={`${skill.name} logo`}
                fill
                className="object-contain drop-shadow-lg"
              />
            </div>
            <span className="text-sm text-gray-300 group-hover:text-white">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills; 