/**
 * Skills Data
 * Technical skills organized by category for the Skills component
 */

import type React from "react";
import { Java } from "~/components/logos/Java";
import { Spring } from "~/components/logos/Spring";
import { Python } from "~/components/logos/Python";
import { C } from "~/components/logos/C";
import { JavaScript } from "~/components/logos/JavaScript";
import { Docker } from "~/components/logos/Docker";
import { AmazonWebServices as AWS } from "~/components/logos/AWS";
import { Git } from "~/components/logos/Git";
import { GitHub } from "~/components/logos/GitHub";
import { Linux } from "~/components/logos/Linux";
import { Bash } from "~/components/logos/Bash";
import { MongoDB } from "~/components/logos/MongoDB";
import { PostgreSQL } from "~/components/logos/PostgreSQL";
import { Unity } from "~/components/logos/Unity";

export interface Skill {
  name: string;
  icon: string | React.ComponentType<React.SVGProps<SVGSVGElement>>;
  level?: "expert" | "advanced" | "intermediate";
}

export interface SkillCategory {
  name: string;
  description: string;
  skills: Skill[];
  color: string;
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Backend & Languages",
    description: "Primary backend technologies and programming languages",
    color: "from-cyan-500 to-blue-500",
    skills: [
      { name: "Java", icon: Java, level: "expert" },
      { name: "Spring", icon: Spring, level: "expert" },
      { name: "Python", icon: Python, level: "advanced" },
      { name: "C", icon: C, level: "advanced" },
      { name: "JavaScript", icon: JavaScript, level: "intermediate" },
    ]
  },
  {
    name: "DevOps & Cloud",
    description: "Infrastructure, deployment, and cloud services",
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "Docker", icon: Docker, level: "expert" },
      { name: "Temporal", icon: "/logos/image.png", level: "advanced" },
      { name: "AWS", icon: AWS, level: "advanced" },
      { name: "Git", icon: Git, level: "expert" },
      { name: "GitHub", icon: GitHub, level: "expert" },
      { name: "Linux", icon: Linux, level: "expert" },
      { name: "Bash", icon: Bash, level: "advanced" },
    ]
  },
  {
    name: "Databases & Other",
    description: "Database systems and additional technologies",
    color: "from-green-500 to-teal-500",
    skills: [
      { name: "MongoDB", icon: MongoDB, level: "advanced" },
      { name: "PostgreSQL", icon: PostgreSQL, level: "advanced" },
      { name: "Unity", icon: Unity, level: "intermediate" },
    ]
  }
];
