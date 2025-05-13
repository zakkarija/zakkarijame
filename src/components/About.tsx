'use client';
// About.tsx - Client Component
import React from 'react';
import TypewriterText from './TypewriterText';

const About = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
      <div className="space-y-6">
        <TypewriterText />
      </div>
    </section>
  );
};

export default About; 