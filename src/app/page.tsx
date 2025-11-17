'use client';
import { useEffect } from 'react';
import Hero from "~/components/Hero";
import About from "~/components/About";
import Projects from "~/components/Projects";
import Skills from "~/components/Skills";
import Nav from "~/components/Nav";
import Timeline from "~/components/Timeline";
import Footer from "~/components/Footer";

export default function HomePage() {
  // Simple intersection observer only for section fade-in animations
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

    // Watch all sections that have the fade-in animation
    document.querySelectorAll('.section-fade-in').forEach(section => {
      observer.observe(section);
    });

    // Cleanup when component unmounts
    return () => {
      document.querySelectorAll('.section-fade-in').forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Nav />

      {/* Main content with improved mobile padding and section spacing */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8 text-white w-full">
        <section id="hero" className="py-4">
          <Hero />
        </section>

        <section id="about" className="py-8 sm:py-12 scroll-mt-24 section-fade-in">
          <About />
        </section>

        <section id="skills" className="py-8 sm:py-12 scroll-mt-24 section-fade-in">
          <Skills />
        </section>

        <section id="timeline" className="py-8 sm:py-12 scroll-mt-24 section-fade-in">
          <Timeline />
        </section>

        <section id="projects" className="py-8 sm:py-12 scroll-mt-24 section-fade-in">
          <Projects />
        </section>
      </main>

      <Footer />
    </div>
  );
}
