import ContactSection from "../../components/Contact/Contact";
import Hero from "../../components/Hero/HeroBanner";
import Project1 from "../../components/Project1/Project1";
import Project2 from "../../components/Project2/Project2";
import Project3 from "../../components/Project3/Project3";
import SkillsSection from "../../components/Skills/Skills";

export default function Home() {
  return (
    <main>
      <section id="hero">
        <Hero />
      </section>

      <section id="skills">
        <SkillsSection />
      </section>

      <section id="project1">
        <Project1 />
      </section>

      <section id="project2">
        <Project2 />
      </section>

      <section id="project3">
        <Project3 />
      </section>

      <section id="contact">
        <ContactSection />
      </section>
    </main>
  );
}
