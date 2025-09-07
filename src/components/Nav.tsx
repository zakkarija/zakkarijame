'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Nav = () => {
  // STATE MANAGEMENT:
  // - isScrolled: adds background blur when user scrolls down
  // - isMenuOpen: controls mobile hamburger menu visibility
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Simple scroll handler - only adds background when scrolled
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // SCROLL HANDLER: Smoothly scrolls to target section when nav links are clicked
  const scrollToSection = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent default anchor link behavior
    setIsMenuOpen(false); // Close mobile menu if open
    
    // Find target section and scroll to it with offset for fixed navbar
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100, // 100px offset to account for fixed navbar height
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 nav-fade-in ${
        isScrolled 
          ? 'bg-black/70 backdrop-blur-xl shadow-2xl border-b border-cyan-500/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link 
              href="/" 
              className="text-white text-xl font-bold bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent hover:from-cyan-200 hover:to-white transition-all duration-300"
            >
              Z.M
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a 
                href="#about" 
                onClick={scrollToSection('about')}
                className="text-gray-300 hover:text-cyan-300 transition-colors duration-300 relative group"
              >
                About
                {/* Simple underline that appears on hover */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              
              <a 
                href="#skills" 
                onClick={scrollToSection('skills')}
                className="text-gray-300 hover:text-cyan-300 transition-colors duration-300 relative group"
              >
                Skills
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              
              <a 
                href="#timeline" 
                onClick={scrollToSection('timeline')}
                className="text-gray-300 hover:text-cyan-300 transition-colors duration-300 relative group"
              >
                Experience
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              
              <a 
                href="#projects" 
                onClick={scrollToSection('projects')}
                className="text-gray-300 hover:text-cyan-300 transition-colors duration-300 relative group"
              >
                Projects
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
          </div>
          
          {/* Mobile menu button - improved touch target */}
          <div className="md:hidden flex items-center">
            <button 
              className="text-gray-300 hover:text-cyan-300 focus:outline-none p-2 -m-2 transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile menu, show/hide based on menu state */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90 backdrop-blur-xl rounded-lg mt-2 border border-cyan-500/20">
              <a 
                href="#about" 
                onClick={scrollToSection('about')}
                className="text-gray-300 hover:text-cyan-300 hover:bg-cyan-500/10 block px-3 py-3 rounded-md text-base transition-all duration-300"
              >
                About
              </a>
              
              <a 
                href="#skills" 
                onClick={scrollToSection('skills')}
                className="text-gray-300 hover:text-cyan-300 hover:bg-cyan-500/10 block px-3 py-3 rounded-md text-base transition-all duration-300"
              >
                Skills
              </a>
              
              <a 
                href="#timeline" 
                onClick={scrollToSection('timeline')}
                className="text-gray-300 hover:text-cyan-300 hover:bg-cyan-500/10 block px-3 py-3 rounded-md text-base transition-all duration-300"
              >
                Experience
              </a>
              
              <a 
                href="#projects" 
                onClick={scrollToSection('projects')}
                className="text-gray-300 hover:text-cyan-300 hover:bg-cyan-500/10 block px-3 py-3 rounded-md text-base transition-all duration-300"
              >
                Projects
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav; 