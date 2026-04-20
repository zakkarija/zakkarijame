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

const classes = {
  section: 'py-6 md:py-8',
  container: 'glass-panel p-6 md:p-8 relative overflow-hidden',
  backgroundGradient: 'absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 z-0',
  content: 'relative z-10',
  mainRow: 'flex flex-col lg:flex-row items-center justify-between gap-6',
  nameWrapper: 'text-center lg:text-left',
  name: 'text-3xl sm:text-4xl md:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-200',
  title: 'text-lg sm:text-xl md:text-2xl text-cyan-200 font-light',
  buttonWrapper: 'flex flex-col md:flex-row items-center gap-4',
  cvButton:
    'inline-flex items-center px-5 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white rounded-md transition-all shadow-lg hover:shadow-cyan-500/20 subtle-reveal',
  socialSection: 'mt-6 pt-4 border-t border-white/10',
  socialList: 'flex flex-wrap justify-center lg:justify-start gap-6',
  socialLink: 'flex items-center space-x-2 text-gray-300 hover:text-white transition-colors group',
  socialIcon: 'w-5 h-5 fill-current transition-transform group-hover:scale-110',
  socialText: 'group-hover:underline',
} as const;

const socialLinks = [
  {
    href: profile.github,
    label: 'GitHub',
    Icon: GitHubIcon,
    external: true,
  },
  {
    href: profile.linkedin,
    label: 'LinkedIn',
    Icon: LinkedInIcon,
    external: true,
  },
  {
    href: `mailto:${profile.email}`,
    label: 'Email',
    Icon: EmailIcon,
    external: false,
  },
] as const;

const Hero = () => {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        {/* Background gradient effect */}
        <div className={classes.backgroundGradient}></div>
        
        <div className={classes.content}>
          {/* Main content */}
          <div className={classes.mainRow}>
            {/* Name and title */}
            <div className={classes.nameWrapper}>
              <h1 className={classes.name}>
                {profile.name}
              </h1>
              <h2 className={classes.title}>
                {profile.title} <span className="hidden sm:inline">|</span><br className="sm:hidden" /> {profile.location}
              </h2>
            </div>
            
            {/* CV download button */}
            <div className={classes.buttonWrapper}>
              <Link
                href={profile.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.cvButton}
              >
                <DownloadIcon className="w-5 h-5 mr-2" />
                Download CV
              </Link>
            </div>
          </div>
          
          {/* Social Links */}
          <div className={classes.socialSection}>
            <div className={classes.socialList}>
              {socialLinks.map(({ href, label, Icon, external }) => (
                <Link
                  key={label}
                  href={href}
                  className={classes.socialLink}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                >
                  <Icon className={classes.socialIcon} />
                  <span className={classes.socialText}>{label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
