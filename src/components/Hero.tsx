/**
 * Hero Component
 *
 * Main landing section with name, title, CV download, and social links.
 * Features glass-panel styling with gradient background effect.
 */

import React from 'react';
import Link from 'next/link';
import { profile } from '~/data/profile';
import { GitHubIcon, LinkedInIcon, EmailIcon, DownloadIcon } from '~/components/icons';

const Hero = () => {
  return (
    <section className="py-6 md:py-8">
      <div className="glass-panel p-6 md:p-8 relative overflow-hidden">
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 z-0"></div>
        
        <div className="relative z-10">
          {/* Main content */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Name and title */}
            <div className="text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-200">
                {profile.name}
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl text-cyan-200 font-light">
                {profile.title} <span className="hidden sm:inline">|</span><br className="sm:hidden" /> {profile.location}
              </h2>
            </div>
            
            {/* CV download button */}
            <div className="flex flex-col md:flex-row items-center gap-4">
              <Link
                href={profile.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white rounded-md transition-all shadow-lg hover:shadow-cyan-500/20 subtle-reveal"
              >
                <DownloadIcon className="w-5 h-5 mr-2" />
                Download CV
              </Link>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="mt-6 pt-4 border-t border-white/10">
            <div className="flex flex-wrap justify-center lg:justify-start gap-6">
              <Link 
                href={profile.github}
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon className="w-5 h-5 fill-current transition-transform group-hover:scale-110" />
                <span className="group-hover:underline">GitHub</span>
              </Link>

              <Link 
                href={profile.linkedin}
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon className="w-5 h-5 fill-current transition-transform group-hover:scale-110" />
                <span className="group-hover:underline">LinkedIn</span>
              </Link>

              <Link 
                href={`mailto:${profile.email}`}
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors group"
              >
                <EmailIcon className="w-5 h-5 fill-current transition-transform group-hover:scale-110" />
                <span className="group-hover:underline">Email</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
