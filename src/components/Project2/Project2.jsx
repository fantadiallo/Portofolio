import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaSass, FaBootstrap, FaGitAlt } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import styles from  "../Project1/ProjectShowCase.module.scss";

export default function Project2() {
  return (
    <section className={styles.projectSection}>
      <motion.h2
        className={styles.projectTitle}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Inventory Management System
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
          <img src="/projectInventory.png" alt="Inventory System Screenshot" />
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
          <FaGitAlt title="Git" />
        </motion.div>
      </motion.div>

      <motion.div
        className={styles.projectDescription}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <p>
          This inventory system allows businesses to track stock, log daily usage, and approve updates through an admin dashboard. Built with React, SCSS, Bootstrap, and integrated with Supabase. It supports order reports, stock history, and multi-user roles for team management.
        </p>
        <div className={styles.links}>
          <a href="#project2-details">
            <FaReact /> View Details
          </a>
          <a
            href="https://inventory-gambia.netlify.app/"
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
