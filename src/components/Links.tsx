import React from 'react';
import Link from 'next/link';

const Links = () => {
  return (
    <section className="max-w-2xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Connect With Me</h2>
      <div className="flex flex-wrap justify-center gap-6">
        <Link 
          href="https://github.com/zakmic" 
          className="text-gray-300 hover:text-white transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </Link>
        <Link 
          href="https://www.linkedin.com/in/zakkarija-micallef/" 
          className="text-gray-300 hover:text-white transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </Link>
        <Link 
          href="mailto:zak.micallef27@gmail.com" 
          className="text-gray-300 hover:text-white transition-colors"
        >
          Email
        </Link>
      </div>
    </section>
  );
};

export default Links; 