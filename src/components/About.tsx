'use client';
// About.tsx - Client Component
import React from 'react';
import TypewriterText from './TypewriterText';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Terminal Window */}
      <div className="bg-gray-900/90 rounded-lg overflow-hidden border border-gray-700 shadow-xl subtle-reveal hover:shadow-cyan-900/20 hover:shadow-2xl">
        {/* Terminal Header */}
        <div className="bg-gray-800/90 px-4 py-3 flex items-center border-b border-gray-700">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="mx-auto text-gray-400 text-sm font-mono">about_me@zakkarija ~ $</div>
        </div>
        
        {/* Terminal Content */}
        <div className="p-4 md:p-6 font-mono text-gray-100">
          <div className="flex items-center mb-3">
            <span className="text-green-400 mr-2">$</span>
            <span className="text-cyan-400 mr-2">cat</span>
            <span className="text-cyan-300">about_me.txt</span>
          </div>
          <div className="mt-3">
            <TypewriterText />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 