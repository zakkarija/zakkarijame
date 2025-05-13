import React from 'react';
import Link from 'next/link';

const CV = () => {
  return (
    <section className="max-w-2xl mx-auto px-4 py-6">
      {/* <h2 className="text-3xl font-bold mb-8 text-center">Resume</h2> */}
      <div className="flex justify-center">
        <Link
          href="https://nakv6s9tvu.ufs.sh/f/dWAZu4wE3JKxrynFw6mVJlBOpKxtrTG8Sy0FIw2RzdLigknq"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-sm transition-colors"
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
          View CV
        </Link>
      </div>
    </section>
  );
};

export default CV; 