import React from "react";
import { FaGithub, FaReact, FaSass, FaBootstrap } from "react-icons/fa";
import { BiLinkExternal, BiCopy } from "react-icons/bi";
import styles from "./ProjectPages.module.scss";

export default function Project1Page() {
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied to clipboard!");
  };

  return (
    <section className={styles.projectSection} id="project1">
      <div className={styles.header}>
        <h2 className={styles.title}>Holidaze Booking App</h2>
        <button className={styles.copyBtn} onClick={handleCopyLink}>
          <BiCopy /> Copy Link
        </button>
      </div>

      <div className={styles.projectContent}>
        <div className={styles.description}>
          <p>
            Holidaze is a full-featured accommodation booking app built with React, Vite, and Bootstrap.
            Users can browse, book, and manage venues. Venue managers can register,
            create listings, update their profile and view upcoming bookings. 
            The app includes role-based access, form validation, and real-time data fetching from the Noroff API.
          </p>
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
            loading="lazy"
          />
          <figcaption className={styles.caption}>
            Landing page of Holidaze – responsive, modern UI
          </figcaption>
        </div>
      </div>

      <div className={styles.tools}>
        <FaReact title="React" />
        <FaSass title="SCSS" />
        <FaBootstrap title="Bootstrap" />
      </div>

      <div className={styles.reflection}>
        <h3>Reflections & Improvements</h3>
        <p><em>Not marked yet.</em></p>
      </div>
    </section>
  );
}
