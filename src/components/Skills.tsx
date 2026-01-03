/**
 * Skills Component
 *
 * Displays technical skills organized by category in a responsive grid layout.
 * Each category contains multiple skill items with icons, names, and proficiency levels.
 * Features gradient borders, hover effects, and a clean, compact design.
 */

import React from 'react';
import Image from 'next/image';
import { skillCategories, type SkillCategory, type Skill } from '~/data/skills';

/**
 * SkillItem Component
 * Displays individual skill with icon, name, and optional proficiency indicator
 * Features hover effects for better interactivity
 */
const SkillItem = ({ name, icon, level }: Skill) => (
  <div className="group relative">
    <div className="flex flex-col items-center gap-1.5 p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20">
      <div className="relative w-10 h-10 transition-transform flex items-center justify-center">
        {typeof icon === 'string' ? (
          <Image
            src={icon}
            alt={`${name} logo`}
            fill
            className={`object-contain drop-shadow-lg ${name === 'Temporal' ? 'brightness-0 invert' : ''}`}
          />
        ) : (
          React.createElement(icon, { className: "w-full h-full object-contain drop-shadow-lg" })
        )}
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

/**
 * SkillCategoryCard Component
 * Groups related skills into categorized sections with gradient accents
 * Displays category name, description, and grid of skills
 */
const SkillCategoryCard = ({ name, description, skills, color }: SkillCategory) => (
  <div className="group relative">
    {/* Gradient border effect */}
    <div className={`absolute -inset-0.5 bg-gradient-to-r ${color} rounded-2xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-300`}></div>

    <div className="relative glass-panel p-4 rounded-2xl border border-white/10 group-hover:border-white/20 transition-all duration-300">
      {/* Category header */}
      <div className="mb-3">
        <div className="flex items-center gap-2 mb-1.5">
          <div className={`h-1 w-10 rounded-full bg-gradient-to-r ${color}`}></div>
          <h3 className="text-base font-bold text-white">
            {name}
          </h3>
        </div>
        <p className="text-xs text-gray-400 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Skills grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
        {skills.map((skill) => (
          <SkillItem
            key={skill.name}
            {...skill}
          />
        ))}
      </div>
    </div>
  </div>
);

/**
 * Main Skills Component
 * Renders the complete skills section with header and categorized skill grid
 * Uses a 2-column responsive layout for optimal space utilization
 */
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {skillCategories.map((category) => (
          <SkillCategoryCard
            key={category.name}
            {...category}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
