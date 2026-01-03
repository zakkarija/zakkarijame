'use client';

/**
 * Nav Component
 *
 * Fixed navigation bar with logo, navigation links, and mobile menu.
 * Features scroll-based styling changes and smooth section scrolling.
 */

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { profile } from '~/data/profile';
import { navItems } from '~/data/navigation';

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMenuOpen(false);

    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-2xl shadow-2xl border-b border-cyan-500/30'
          : 'bg-gradient-to-b from-black/60 to-transparent backdrop-blur-md'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="flex items-center space-x-2 group"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-cyan-500 to-blue-600 p-2 rounded-lg shadow-lg">
                  <span className="text-white font-bold text-xl">ZM</span>
                </div>
              </div>
              <div className="hidden sm:block">
                <span className="text-white font-semibold text-lg tracking-tight">
                  {profile.name}
                </span>
                <div className="text-xs text-cyan-300 font-light -mt-1">
                  {profile.title}
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              item.type === "anchor" ? (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={scrollToSection(item.id)}
                  className="px-4 py-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 relative group font-medium"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 transition-all duration-300 group-hover:w-3/4"></span>
                </a>
              ) : (
                <Link
                  key={item.id}
                  href={item.href}
                  className="px-4 py-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 relative group font-medium"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 transition-all duration-300 group-hover:w-3/4"></span>
                </Link>
              )
            ))}

            {/* CTA Button */}
            <a
              href="#hero"
              onClick={scrollToSection('hero')}
              className="ml-4 px-6 py-2.5 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-lg font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 transform hover:scale-105"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className="p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={isMenuOpen}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 animate-in slide-in-from-top duration-200">
            <div className="space-y-1 bg-black/95 backdrop-blur-xl rounded-xl p-4 border border-cyan-500/20 shadow-2xl">
              {navItems.map((item) => (
                item.type === "anchor" ? (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={scrollToSection(item.id)}
                    className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-cyan-500/10 rounded-lg transition-all duration-200 font-medium"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.id}
                    href={item.href}
                    className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-cyan-500/10 rounded-lg transition-all duration-200 font-medium"
                  >
                    {item.label}
                  </Link>
                )
              ))}

              <div className="pt-2 mt-2 border-t border-gray-700">
                <a
                  href="#hero"
                  onClick={scrollToSection('hero')}
                  className="block px-4 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-center rounded-lg font-semibold shadow-lg hover:shadow-cyan-500/40 transition-all duration-300"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Nav;
