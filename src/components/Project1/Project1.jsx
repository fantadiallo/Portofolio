import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaReact, FaSass, FaBootstrap } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import styles from "./ProjectShowCase.module.scss";

export default function Project1() {
  return (
    <section className={styles.projectSection}>
      <motion.h2
        className={styles.projectTitle}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Accommodation Booking App
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
          <img src="/Holidaze.png" alt="Holidaze Screenshot" />
        </motion.div>

        <motion.div
          className={styles.tools}
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <FaReact title="React" />
          <FaSass title="Sass" />
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
          Holidaze is a full-featured accommodation booking platform where users can search, explore, and book stays. Venue managers can list, edit, and manage venues easily. Built with Vite, React, Bootstrap, and SCSS. It integrates the Noroff API for real-time data.
        </p>
        <div className={styles.links}>
          <a href="#project1-details">
            <FaGithub /> View Details
          </a>
          <a href="https://holidazebnb.netlify.app/" target="_blank" rel="noopener noreferrer">
            <BiLinkExternal /> Live Site
          </a>
        </div>
      </motion.div>
    </section>
  );
}
