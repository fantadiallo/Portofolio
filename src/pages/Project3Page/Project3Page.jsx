import React from "react";
import { FaGithub, FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import styles from "../Project1Page/ProjectPages.module.scss";

export default function Project3Page() {
  return (
    <section className={styles.projectSection} id="project3">
      <div className={styles.header}>
        <h2 className={styles.title}>Pet Adoption Website</h2>
      </div>

      <div className={styles.projectContent}>
        <div className={styles.description}>
          <p>
            A responsive pet adoption web application where users can browse pets available for adoption,
            filter by type, and apply for adoption. The site includes admin login, dynamic pet management,
            and real-time search functionality using the Noroff API.
            Built with vanilla JavaScript, HTML5, and CSS.
          </p>

          <div className={styles.projectLinks}>
            <a
              href="https://github.com/fantadiallo/SemesterProject2"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub /> Code (README)
            </a>
            <a
              href="https://mypetsemester2.netlify.app/"
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
              href="https://github.com/fantadiallo/SemesterProject2"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://mypetsemester2.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <BiLinkExternal />
            </a>
          </div>
          <img
            src="/projectExam.png"
            alt="Pet Adoption project screenshot"
            loading="lazy"
          />
          <figcaption className={styles.caption}>
            Screenshot of the live app (optimized image)
          </figcaption>
        </div>
      </div>

      <div className={styles.reflection}>
        <h3>Reflections & Improvements</h3>
        <p>
          Building this project was a great opportunity to apply core frontend skills without using frameworks.
          It taught me the importance of structuring HTML properly, writing reusable JavaScript functions,
          and managing user experience through interactive UI features.
        </p>
        <p>
          I implemented dynamic rendering of pets from the API, filtering and searching, and handling forms for both users and admin listings.
        </p>
        <p>
          Based on user experience issues I discovered during testing, I refined the search filter logic,
          improved the error messages, and ensured users are redirected correctly after registration.
          I also added clearer validation on forms and ensured logout properly clears data from localStorage.
        </p>
        <p>
          Overall, this project helped me grow more confident in managing real-world frontend logic and responsive UI layout.
        </p>
      </div>

      <div className={styles.tools}>
        <FaHtml5 title="HTML5" />
        <FaCss3Alt title="CSS3" />
        <FaJsSquare title="JavaScript" />
      </div>
    </section>
  );
}
