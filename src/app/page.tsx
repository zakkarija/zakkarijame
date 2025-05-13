import Hero from "~/components/Hero";
import About from "~/components/About";
import Projects from "~/components/Projects";
import Links from "~/components/Links";
import CV from "~/components/CV";
import Skills from "~/components/Skills";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <main className="max-w-6xl mx-auto p-6 md:p-10 text-white">
        <Hero />
        <About />
        <Skills />
        <CV />
        <Projects />
        <Links />
      </main>
    </div>
  );
}
