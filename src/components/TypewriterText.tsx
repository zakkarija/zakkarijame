'use client';

import React from 'react';
import Typewriter from 'typewriter-effect';

const TypewriterText = () => {
  // TODO Update this text
  // Hello! My name is Zak Micallef. I am a software developer with a lot of general intrests such as infrastructure, CI/CD, high availability, and distributed systems. I hold a Bachelor's degree in Artificial Intelligence from the University of Malta while interning at CCBill, which laid a solid academic foundation for my career. With two years of full-time experience at PhoenixNap, an IaaS company, I have gained extensive hands-on experience in leading features and working with technologies such as Spring Boot, NoSQL, and Kubernetes. Currently, I am pursuing a Master's degree in Computer Science at the University of Amsterdam while continuing to work part-time as a Java Engineer at PhoenixNap.
  const fullText = 
  "Hey, I am Zak Micallef, a software developer with a broad interest in cloud " +
  "infrastructure, CI/CD, software architecture, and distributed systems. I earned " +
  "a Bachelor's degree in Artificial Intelligence from the University of Malta, where " +
  "an internship at CCBill introduced me to production grade software. I then spent " +
  "two years at PhoenixNAP, a bare metal cloud provider, championing projects such as " +
  "automated RAID configuration, custom operating system images, and an internal " +
  "provisioning tool built with Spring Boot. I now juggle a part time role as a Java " +
  "engineer at PhoenixNAP while pursuing a Master's in Computer Science at the " +
  "University of Amsterdam and VU Amsterdam. When I am not coding or studying, you " +
  "will find me experimenting with new tools, AI models, Linux distros, game mods, or " +
  "any other digital gadget that crosses my desk.";
  
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