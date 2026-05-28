import Nav from "@/components/Nav";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Thesis from "@/components/sections/Thesis";
import Background from "@/components/sections/Background";
import Photography from "@/components/sections/Photography";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Thesis />
        <Skills />
        <Background />
        <Photography />
        <Contact />
      </main>
    </>
  );
}
