'use client';
// About.tsx - Client Component
import React from 'react';
import TypewriterText from './TypewriterText';

const About = () => {
  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
      
      {/* Terminal Window */}
      <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 shadow-xl">
        {/* Terminal Header */}
        <div className="bg-gray-800 px-4 py-2 flex items-center">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="mx-auto text-gray-400 text-sm font-mono">zak@portfolio ~ $</div>
        </div>
        
        {/* Terminal Content */}
        <div className="p-4 font-mono text-gray-100">
          <div className="flex">
            <span className="text-green-400 mr-2">$</span>
            <span className="text-blue-400 mr-2">cat</span>
            <span className="text-purple-400">about_me.txt</span>
          </div>
          <div className="mt-2">
            <TypewriterText />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 