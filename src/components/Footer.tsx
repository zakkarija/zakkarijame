/**
 * Footer Component
 *
 * Provides site-wide footer with navigation links, social media connections, and contact information.
 * Features organized sections for About, Quick Links, and Connect options.
 * Includes decorative gradient and professional branding elements.
 */

import React from 'react';
import Link from 'next/link';
import { profile } from '~/data/profile';
import { footerQuickLinks } from '~/data/navigation';
import { GitHubIcon, LinkedInIcon, EmailIcon, DownloadIcon } from '~/components/icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20 border-t border-gray-800/50">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur opacity-50"></div>
                <div className="relative bg-gradient-to-br from-cyan-500 to-blue-600 p-2 rounded-lg shadow-lg">
                  <span className="text-white font-bold text-lg">ZM</span>
                </div>
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg">{profile.name}</h3>
                <p className="text-cyan-300 text-sm font-light">{profile.title}</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Passionate software engineer specializing in backend development, cloud infrastructure,
              and building scalable solutions. Based in {profile.location}.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {footerQuickLinks.map((link) => (
                <li key={link.id}>
                  {link.isRoute ? (
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-300 transition-colors duration-200 text-sm flex items-center group hover:underline"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-300 transition-colors duration-200 text-sm flex items-center group hover:underline"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Connect
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-300 transition-colors duration-200 text-sm flex items-center group"
                >
                  <GitHubIcon className="w-5 h-5 mr-2 fill-current" />
                  <span className="group-hover:underline">GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-300 transition-colors duration-200 text-sm flex items-center group"
                >
                  <LinkedInIcon className="w-5 h-5 mr-2 fill-current" />
                  <span className="group-hover:underline">LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-gray-400 hover:text-cyan-300 transition-colors duration-200 text-sm flex items-center group"
                >
                  <EmailIcon className="w-5 h-5 mr-2 fill-current" />
                  <span className="group-hover:underline">Email</span>
                </a>
              </li>
              <li>
                <a
                  href={profile.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-300 transition-colors duration-200 text-sm flex items-center group"
                >
                  <DownloadIcon className="w-5 h-5 mr-2 fill-current" />
                  <span className="group-hover:underline">Download CV</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800/50">
          <div className="flex justify-center items-center">
            <div className="text-gray-500 text-sm">
              © {currentYear} {profile.name}. All rights reserved.
            </div>
          </div>
        </div>
      </div>

      {/* Decorative gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-50"></div>
    </footer>
  );
};

export default Footer;
