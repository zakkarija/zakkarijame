'use client';

import React, { useState, useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect';

// Extending the Options type to include the html property
interface ExtendedTypewriterOptions {
  cursor?: string;
  delay?: number;
  deleteSpeed?: number;
  loop?: boolean;
  autoStart?: boolean;
  devMode?: boolean;
  wrapperClassName?: string;
  cursorClassName?: string;
  html?: boolean;
}

const TypewriterText = () => {
  const [typingStage, setTypingStage] = useState<'typing_first' | 'awaiting_continue' | 'typing_remaining' | 'complete'>('typing_first');
  const continueButtonRef = useRef<HTMLButtonElement>(null);
  
  // First paragraph - typed first
  const firstParagraph = "Hey, I am Zak Micallef, <span class='text-cyan-300 font-semibold'>based in Amsterdam</span>. I'm currently pursuing a <span class='gradient-text font-semibold'>Master's in Computer Science</span> at the <span class='text-cyan-300 font-semibold'>University of Amsterdam and VU Amsterdam</span> while working part-time as a <span class='gradient-text font-semibold'>Java Engineer</span> at <span class='text-cyan-300 font-semibold'>PhoenixNAP</span>.";
  
  // Remaining paragraphs - typed after clicking continue
  const remainingParagraphs = 
    "I earned a <span class='gradient-text font-semibold'>Bachelor's degree in Artificial Intelligence</span> from the <span class='text-cyan-300 font-semibold'>University of Malta</span>, where an internship at CCBill introduced me to production grade software. I then spent two years at PhoenixNAP, a <span class='gradient-text font-semibold'>bare metal cloud provider</span>, championing projects such as <span class='text-cyan-300 font-semibold'>automated RAID configuration</span>, <span class='text-cyan-300 font-semibold'>custom operating system images</span>, and an <span class='text-cyan-300 font-semibold'>internal provisioning tool</span> built with <span class='gradient-text font-semibold'>Spring Boot</span>.<br/><br/>" +
    "My professional interests include <span class='gradient-text font-semibold'>cloud infrastructure</span>, <span class='gradient-text font-semibold'>CI/CD</span>, <span class='gradient-text font-semibold'>software architecture</span>, and <span class='gradient-text font-semibold'>distributed systems</span>. When I'm not coding or studying, you'll find me experimenting with <span class='text-cyan-300 font-semibold'>new tools</span>, <span class='text-cyan-300 font-semibold'>AI models</span>, <span class='text-cyan-300 font-semibold'>Linux distros</span>, <span class='text-cyan-300 font-semibold'>game mods</span>, or any other digital gadget that crosses my desk.";
  
  // All content for the complete view
  const fullContent = `${firstParagraph}<br/><br/>${remainingParagraphs}`;

  // Handle keyboard events for continuing with Enter key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && typingStage === 'awaiting_continue') {
        setTypingStage('typing_remaining');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [typingStage]);

  // Focus the continue button when it appears
  useEffect(() => {
    if (typingStage === 'awaiting_continue' && continueButtonRef.current) {
      continueButtonRef.current.focus();
    }
  }, [typingStage]);

  return (
    <div className="text-base md:text-lg text-gray-200 leading-relaxed font-mono tracking-tight typewriter-content min-h-[200px]">
      {typingStage === 'typing_first' && (
        <div className="typewriter-container">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .changeDelay(5)
                .callFunction(() => {
                  document.querySelector('.Typewriter__cursor')?.classList.add('animate-pulse');
                })
                .typeString(firstParagraph)
                .callFunction(() => {
                  setTypingStage('awaiting_continue');
                })
                .start();
            }}
            options={{
              cursor: '█',
              delay: 5,
              deleteSpeed: 10,
              wrapperClassName: "typewriter-wrapper",
              cursorClassName: "typewriter-cursor",
              html: true,
            } as ExtendedTypewriterOptions}
          />
        </div>
      )}
      
      {typingStage === 'awaiting_continue' && (
        <div className="typewriter-container">
          <div className="typewriter-wrapper" dangerouslySetInnerHTML={{ __html: firstParagraph }} />
          <div className="mt-4 flex items-center">
            <span className="text-green-400 mr-2">$</span>
            <button 
              ref={continueButtonRef}
              onClick={() => setTypingStage('typing_remaining')}
              className="bg-transparent border border-gray-700 px-3 py-1 text-gray-300 hover:text-white hover:bg-gray-800/50 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-colors rounded-sm text-sm font-mono"
            >
              continue --more
            </button>
            <span className="ml-2 text-gray-500 text-sm">[Press Enter]</span>
          </div>
        </div>
      )}

      {typingStage === 'typing_remaining' && (
        <div className="typewriter-container">
          <div className="typewriter-wrapper" dangerouslySetInnerHTML={{ __html: firstParagraph }} />
          <div className="mt-6">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(5)
                  .callFunction(() => {
                    document.querySelector('.Typewriter__cursor')?.classList.add('animate-pulse');
                  })
              .typeString("<br/>")
              .typeString(remainingParagraphs)
                  .callFunction(() => {
                    setTypingStage('complete');
                  })
                  .start();
              }}
              options={{
                cursor: '█',
                delay: 5,
                deleteSpeed: 10,
                wrapperClassName: "typewriter-wrapper",
                cursorClassName: "typewriter-cursor",
                html: true,
              } as ExtendedTypewriterOptions}
            />
          </div>
        </div>
      )}

      {typingStage === 'complete' && (
        <div className="typewriter-container">
          <div className="typewriter-wrapper" dangerouslySetInnerHTML={{ __html: fullContent }} />
        </div>
      )}
    </div>
  );
};

export default TypewriterText; 