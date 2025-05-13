'use client';

import React from 'react';
import Typewriter from 'typewriter-effect';

const TypewriterText = () => {
  const fullText = 
    "I am a passionate software engineer with a strong foundation in modern web technologies. " +
    "I specialize in building scalable and user-friendly applications, focusing on clean code and best practices. " +
    "My experience spans across full-stack development, with a particular interest in creating intuitive user experiences and robust backend systems. " +
    "With a keen eye for detail and a passion for creating efficient solutions, I strive to build applications that not only meet but exceed user expectations. " +
    "My approach combines technical expertise with creative problem-solving to deliver high-quality software solutions.";

  return (
    <div className="text-lg text-gray-300 leading-relaxed min-h-[200px]">
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .changeDelay(20)
            .typeString(fullText)
            .start();
        }}
      />
    </div>
  );
};

export default TypewriterText; 