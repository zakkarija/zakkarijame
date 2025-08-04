"use client";

import React from 'react';

const Background = () => {
  return (
    <>
      {/* Animated gradient background */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-slate-900 via-cyan-950 to-slate-900">
        {/* Animated floating orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
        </div>
        
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>
      
      {/* Subtle backdrop blur overlay */}
      <div className="fixed inset-0 -z-10 bg-black/20 backdrop-blur-[1px] pointer-events-none"></div>
    </>
  );
};

export default Background; 