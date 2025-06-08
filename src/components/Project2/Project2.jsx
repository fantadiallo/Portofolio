import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaSass, FaBootstrap } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import styles from "../Project1/ProjectShowCase.module.scss";

export default function Project2() {
  return (
    <section className={styles.projectSection}>
      <motion.h2
        className={styles.projectTitle}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        E-Commerce Store
      </motion.h2>

      <motion.div
        className={styles.projectGrid}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.div
          className={styles.imageContainer}
          initial={{ opacity: 0, x: -80, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <img src="/onlinestore.png" alt="E-Commerce Screenshot" />
        </motion.div>

        <motion.div
          className={styles.tools}
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <FaReact title="React" />
          <FaSass title="SCSS" />
          <FaBootstrap title="Bootstrap" />
        </motion.div>
      </motion.div>

      <motion.div
        className={styles.projectDescription}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <p>
          A fully functional online store built using React, Bootstrap, and SCSS. It features dynamic product pages, a working cart system, and a checkout confirmation flow. The design is responsive and follows clean UI principles.
        </p>
        <div className={styles.links}>
          <a href="#project2-details">
            View Details
          </a>
          <a
            href="https://onlinestore1230.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiLinkExternal /> Live Site
          </a>
        </div>
      </motion.div>
    </section>
  );
}
