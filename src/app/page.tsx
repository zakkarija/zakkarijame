import Hero from "~/components/Hero";
import About from "~/components/About";
import Projects from "~/components/Projects";
import Links from "~/components/Links";
import CV from "~/components/CV";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <Hero />
      <About />
      <CV />
      <Projects />
      <Links />
    </main>
  );
}
