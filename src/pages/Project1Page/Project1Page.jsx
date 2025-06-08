import React from "react";
import { FaGithub, FaReact, FaSass, FaBootstrap } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import styles from "./ProjectPages.module.scss";

export default function Project1Page() {
  return (
    <section className={styles.projectSection} id="project1">
      <h2 className={styles.title}>Holidaze Booking App</h2>
      <div className={styles.projectContent}>
        <div className={styles.description}>
          <p>
            A full-featured accommodation booking app built with React. Users can register as customers or venue managers, browse and book venues, and manage listings. Venue managers can add, edit, or delete venues and view bookings. Includes role-based access, live calendar availability, and profile customization.
          </p>

          <div className={styles.projectLinks}>
            <a
              href="https://github.com/fantadiallo/HolidazeSemesterproject"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub /> Code
            </a>
            <a
              href="https://holidazebnb.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <BiLinkExternal /> Live
            </a>
          </div>
        </div>

        <div className={styles.imageBox}>
          <div className={styles.imageOverlay}>
            <a
              href="https://github.com/fantadiallo/HolidazeSemesterproject"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://holidazebnb.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <BiLinkExternal />
            </a>
          </div>
          <img
            src="/Holidaze.png"
            alt="Holidaze project screenshot"
          />
        </div>
      </div>

      <div className={styles.tools}>
        <FaReact title="React" />
        <FaSass title="SCSS" />
        <FaBootstrap title="Bootstrap" />
      </div>
    </section>
  );
}
