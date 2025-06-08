import React from "react";
import { motion } from "framer-motion";
import styles from "../Project1/Project1.module.scss";

export default function Project3() {
  return (
    <section className={styles.projectSection}>
      <motion.h2 
        className={styles.projectTitle}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Project Title
      </motion.h2>

      <div className={styles.projectVisuals}>
        <motion.div
          className={styles.imageContainer}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img src="https://via.placeholder.com/600x400" alt="Page Screenshot" />
        </motion.div>

        <motion.div
          className={styles.videoContainer}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img src="https://via.placeholder.com/600x400" alt="Video Screenshot" />
        </motion.div>
      </div>

      <motion.div 
        className={styles.projectDescription}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <p>This is a short description of the project, its purpose and what tech was used.</p>
        <a href="https://example.com" target="_blank" rel="noopener noreferrer">
          Visit Project →
        </a>
      </motion.div>
    </section>
  );
}