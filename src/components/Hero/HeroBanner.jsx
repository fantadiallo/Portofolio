import React from "react";
import { FaGithub } from "react-icons/fa";
import styles from "./HeroBanner.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero} id="about">
      <div className={styles.bgAnimation}></div>

      <div className={styles.contentWrapper}>
        <div className={styles.textBox}>
          <h1 className={styles.heading}>Hi, I’m Fatou</h1>
          <h2 className={styles.title}>Software Developer</h2>
          <p className={styles.subheading}>
            Based in Norway • Age 24
            <br />
            Noroff College
          </p>
          <p className={styles.description}>
            I design and build responsive, user-focused web applications.
            Passionate about clean code, fast performance, and elegant user
            experiences.
          </p>

          <div className={styles.ctaGroup}>
            <a href="#contact" className={styles.cta}>
              Get in Touch
            </a>
            <a
              href="https://github.com/fantadiallo"
              className={styles.cta}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub style={{ marginRight: "8px" }} />
              GitHub
            </a>
          </div>

          <div className={styles.links}>
            <a href="#skills">Skills</a>
            <a href="#project1">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>

      <div className={styles.imageBox}>
        <img
          src="/Screenshot 2025-06-08 162934.png"
          alt="Fatou profile"
          className={styles.profileImage}
        />
      </div>
    </section>
  );
}
