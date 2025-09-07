import React from 'react';
import Link from 'next/link';

const CV = () => {
  return (
    <div className="max-w-2xl mx-auto">
      {/* <h2 className="section-title">Resume</h2> */}
      <div className="glass-panel p-4 md:p-6 flex justify-center">
        <Link
          href="https://nakv6s9tvu.ufs.sh/f/dWAZu4wE3JKxJCq2baEIbfhXNIRd0927apZygWQESMPDUHkv"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-md transition-all subtle-reveal shadow-md"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24
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
  );
};

export default CV; 