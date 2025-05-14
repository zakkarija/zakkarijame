'use client';
import { useEffect } from 'react';
import Hero from "~/components/Hero";
import About from "~/components/About";
import Projects from "~/components/Projects";
import Skills from "~/components/Skills";
import Nav from "~/components/Nav";
import Timeline from "~/components/Timeline";

export default function HomePage() {
  // Add intersection observer for section animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      rootMargin: '-50px 0px',
      threshold: 0.1
    });

    // Observe all sections with the section-fade-in class
    document.querySelectorAll('.section-fade-in').forEach(section => {
      observer.observe(section);
    });

    return () => {
      document.querySelectorAll('.section-fade-in').forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Nav />
      
      {/* Main content with consistent padding and section spacing */}
      <main className="max-w-6xl mx-auto px-6 md:px-10 pt-20 text-white">
        <section id="hero" className="py-4">
          <Hero />
        </section>
        
        <section id="about" className="py-4 scroll-mt-24 section-fade-in">
          <About />
        </section>
        
        <section id="skills" className="py-12 scroll-mt-24 section-fade-in">
          <Skills />
        </section>
        
        <section id="timeline" className="py-12 scroll-mt-24 section-fade-in">
          <Timeline />
        </section>
        
        <section id="projects" className="py-12 scroll-mt-24 section-fade-in">
          <Projects />
        </section>
        
        <footer className="py-8 text-center text-gray-400 text-sm border-t border-gray-800 mt-12">
          © {new Date().getFullYear()} Zakkarija Micallef. All rights reserved.
        </footer>
      </main>
    </div>
  );
}
