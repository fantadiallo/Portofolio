import { useEffect, useState } from "react";
import ContactSection from "../../components/Contact/Contact";
import Hero from "../../components/Hero/HeroBanner";
import Project1 from "../../components/Project1/Project1";
import Project3 from "../../components/Project3/Project3";
import SkillsSection from "../../components/Skills/Skills";
import styles from "./Home.module.scss";
import Freelance from "../../components/freelance/Freelance";


export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToHero = () => {
    document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className={styles.pageWrapper}>
      <section id="hero">
        <Hero />
      </section>

      <section id="skills">
        <SkillsSection />
      </section>
      <section id="packages">
  <Freelance />
</section>
      <section id="project1">
        <Project1 />
      </section>

      <section id="project3">
        <Project3 />
      </section>

      <section id="contact">
        <ContactSection />
      </section>

      {showScrollTop && (
        <button className={styles.scrollTopButton} onClick={scrollToHero}>
          ↑
        </button>
      )}
    </main>
  );
}
