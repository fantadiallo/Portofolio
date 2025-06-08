import React from "react";
import { FaGithub, FaReact, FaSass, FaBootstrap } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import styles from "../Project1Page/ProjectPages.module.scss";

export default function Project2Page() {
  return (
    <section className={styles.projectSection} id="project2">
      <div className={styles.header}>
        <h2 className={styles.title}>Online E-commerce Store</h2>
      </div>

      <div className={styles.projectContent}>
        <div className={styles.description}>
          <p>
            A responsive online store built with React and the Noroff API.
            Users can browse product listings, view details, add items to cart,
            and proceed to checkout. The app includes dynamic routing, cart
            state management, search functionality, and a checkout success flow.
          </p>

          <div className={styles.projectLinks}>
            <a
              href="https://github.com/fantadiallo/my-ecommerce-store"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub /> Code (README)
            </a>
            <a
              href="https://onlinestore1230.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <BiLinkExternal /> Live Site
            </a>
          </div>
        </div>

        <div className={styles.imageBox}>
          <div className={styles.imageOverlay}>
            <a
              href="https://github.com/fantadiallo/my-ecommerce-store"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://onlinestore1230.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <BiLinkExternal />
            </a>
          </div>
          <img
            src="/onlinestore.png"
            alt="Online store screenshot"
            loading="lazy"
          />
          <figcaption className={styles.caption}>
            Screenshot of the e-commerce app (optimized)
          </figcaption>
        </div>
      </div>

      <div className={styles.reflection}>
        <h3>Reflections & Improvements</h3>
        <p>
          This project helped me build a complete front-end application with
          routing, API integration, and cart functionality. I used React for the
          structure and Bootstrap/SCSS for layout and styling.
        </p>
        <p>
          Through this process, I learned how to manage state effectively using
          context and hooks. I also practiced component organization and
          conditional rendering based on cart status or empty views.
        </p>
        <p>
          I improved the checkout experience by adding a success confirmation
          and validation, and I’ve now removed all unnecessary console logs from
          the live version.
        </p>
        <p>
          Going forward, I would like to add payment integration and better
          error handling. This project made me more confident using React in
          real-world scenarios and I now use JSDoc to document functions to
          maintain cleaner and scalable code.
        </p>
      </div>

      <div className={styles.tools}>
        <FaReact title="React" />
        <FaSass title="SCSS" />
        <FaBootstrap title="Bootstrap" />
      </div>
    </section>
  );
}
