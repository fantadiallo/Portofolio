import React from "react";
import styles from "./HeroBanner.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bgAnimation}></div>

      <div className={styles.contentWrapper}>
        <div className={styles.textBox}>
          <h1 className={styles.heading}>Hi, I’m Fatou</h1>
          <h2 className={styles.title}>Software Developer</h2>
          <p className={styles.subheading}>Based in Norway • Age 24</p>
          <p className={styles.description}>
            I design and build responsive, user-focused web applications.  
            Passionate about clean code, fast performance, and elegant user experiences.
          </p>

          <a href="#contact" className={styles.cta}>Get in Touch</a>

          <div className={styles.links}>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        <div className={styles.imageBox}>
          <img
            src="https://via.placeholder.com/220"
            alt="Fatou profile"
            className={styles.profileImage}
          />
        </div>
      </div>
    </section>
  );
}
