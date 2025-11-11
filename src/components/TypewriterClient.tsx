'use client';

import dynamic from 'next/dynamic';

// Dynamically import Typewriter with SSR disabled to avoid localStorage issues in Node 25
const TypewriterText = dynamic(
  () => import('./TypewriterText'),
  {
    ssr: false,
    loading: () => <div className="text-base md:text-lg text-gray-200 leading-relaxed font-mono tracking-tight typewriter-content min-h-[200px]" />
  }
);

export default TypewriterText;