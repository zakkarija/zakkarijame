import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="py-6 md:py-8">
      <div className="glass-panel p-6 md:p-8 relative overflow-hidden">
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20 z-0"></div>
        
        <div className="relative z-10">
          {/* Main content */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Name and title */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
                Zakkarija Micallef
              </h1>
              <h2 className="text-xl md:text-2xl text-purple-200 font-light">
                Software Engineer <span className="hidden sm:inline">|</span><br className="sm:hidden" /> Amsterdam, Netherlands
              </h2>
            </div>
            
            {/* CV download button */}
            <div className="flex flex-col md:flex-row items-center gap-4">
              <Link
                href="https://nakv6s9tvu.ufs.sh/f/dWAZu4wE3JKxrynFw6mVJlBOpKxtrTG8Sy0FIw2RzdLigknq"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-md transition-all shadow-lg hover:shadow-purple-500/20 subtle-reveal"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download CV
              </Link>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="mt-6 pt-4 border-t border-white/10">
            <div className="flex flex-wrap justify-center lg:justify-start gap-6">
              <Link 
                href="https://github.com/zakmic" 
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-current transition-transform group-hover:scale-110"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span className="group-hover:underline">GitHub</span>
              </Link>

              <Link 
                href="https://www.linkedin.com/in/zakkarija-micallef/" 
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-current transition-transform group-hover:scale-110"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span className="group-hover:underline">LinkedIn</span>
              </Link>

              <Link 
                href="mailto:zak.micallef27@gmail.com" 
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors group"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-current transition-transform group-hover:scale-110"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
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