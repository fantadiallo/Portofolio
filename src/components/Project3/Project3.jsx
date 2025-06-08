import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import styles from "../Project1/ProjectShowCase.module.scss";

export default function Project3() {
  return (
    <section className={styles.projectSection} id="project3">
      <motion.h2
        className={styles.projectTitle}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Pet Adoption Website
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
          <img src="/projectExam.png" alt="Pet Adoption Screenshot" />
        </motion.div>

        <motion.div
          className={styles.tools}
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <FaHtml5 title="HTML5" />
          <FaCss3Alt title="CSS3" />
          <FaJsSquare title="JavaScript" />
        </motion.div>
      </motion.div>

      <motion.div
        className={styles.projectDescription}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <p>
          A responsive pet adoption web app that allows users to browse pets, filter by type, and apply for adoption. Features admin login, pet management, and dynamic search using the Noroff API. Built with HTML, CSS, and vanilla JavaScript.
        </p>
        <div className={styles.links}>
          <a
            href="https://github.com/fantadiallo/pet-adoption-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub /> Code
          </a>
          <a
            href="https://petadopt.netlify.app/"
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
