'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll state for styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMenuOpen(false); // Close mobile menu when clicking a link
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100, // Offset for the navbar height
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/60 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link 
              href="/" 
              className="text-white text-xl font-bold"
            >
              Z.M
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a 
                href="#about" 
                onClick={scrollToSection('about')}
                className="text-gray-300 hover:text-white transition-colors"
              >
                About Me
              </a>
              
              <a 
                href="#skills" 
                onClick={scrollToSection('skills')}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Skills
              </a>
              
              <a 
                href="#timeline" 
                onClick={scrollToSection('timeline')}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Timeline
              </a>
              
              <a 
                href="#projects" 
                onClick={scrollToSection('projects')}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Projects
              </a>
              
              <a 
                href="#contact" 
                onClick={scrollToSection('contact')}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
          
          {/* Mobile menu button - only visible on small screens */}
          <div className="md:hidden flex items-center">
            <button 
              className="text-gray-300 hover:text-white focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
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
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/80 backdrop-blur-md rounded-lg mt-2">
              <a 
                href="#about" 
                onClick={scrollToSection('about')}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base"
              >
                About
              </a>
              
              <a 
                href="#skills" 
                onClick={scrollToSection('skills')}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base"
              >
                Skills
              </a>
              
              <a 
                href="#timeline" 
                onClick={scrollToSection('timeline')}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base"
              >
                Timeline
              </a>
              
              <a 
                href="#projects" 
                onClick={scrollToSection('projects')}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base"
              >
                Projects
              </a>
              
              <a 
                href="#contact" 
                onClick={scrollToSection('contact')}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav; 