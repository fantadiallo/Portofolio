import React from "react";
import styles from "./Project1Page.module.scss";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import { FaReact, FaSass, FaBootstrap } from "react-icons/fa";

export default function Project1Page() {
  return (
    <section className={styles.projectSection} id="project1">
      <h2 className={styles.title}>E-Commerce Store</h2>
      <div className={styles.projectContent}>
        <div className={styles.description}>
          <p>
            A fully functional e-commerce store built with React using the Noroff API.
            Includes dynamic product pages, cart functionality, checkout success flow, 
            and form validation. Designed with CSS Modules and responsive layout.
          </p>
          <div className={styles.projectLinks}>
            <a href="https://github.com/fantadiallo/project1" target="_blank" rel="noreferrer">
              <FaGithub /> Code
            </a>
            <a href="https://your-live-site.netlify.app" target="_blank" rel="noreferrer">
              <BiLinkExternal /> Live
            </a>
          </div>
        </div>

        <div className={styles.imageBox}>
          <div className={styles.imageOverlay}>
            <a href="https://github.com/fantadiallo/project1" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://your-live-site.netlify.app" target="_blank" rel="noreferrer">
              <BiLinkExternal />
            </a>
          </div>
          <img src="https://via.placeholder.com/600x400" alt="Project Screenshot" />
        </div>
      </div>

      <div className={styles.tools}>
        <FaReact />
        <FaSass />
        <FaBootstrap />
      </div>
    </section>
  );
}
