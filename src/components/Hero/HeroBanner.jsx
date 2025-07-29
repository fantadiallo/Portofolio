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
          <h2 className={styles.title}>I Design & Build Websites</h2>

          <p className={styles.subheading}>
            Front-End Developer & Freelancer · ( Norwegian )  
            <br />
            Graduate – Noroff Front-End Development, 2025
          </p>

          <p className={styles.description}>
            I create responsive, user friendly websites for businesses, creators, and online stores.
            From simple landing pages to full eCommerce platforms I turn ideas into beautiful websites that convert.
          </p>

          <div className={styles.ctaGroup}>
            <a href="#packages" className={styles.cta}>
              View My Packages
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
            <a href="#packages">Services</a>
            <a href="#project1">Portfolio</a>
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
