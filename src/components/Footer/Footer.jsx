import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.container}>
        <p className={styles.text}>Let’s connect!</p>
        <div className={styles.links}>
          <a href="https://github.com/fantadiallo" target="_blank" rel="noreferrer">
            <FaGithub /> GitHub
          </a>
          <a href="mailto:your@email.com">
            <MdEmail /> Email
          </a>
          <a href="https://linkedin.com/in/YOUR_PROFILE" target="_blank" rel="noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
        </div>
        <small className={styles.copyright}>
          &copy; {new Date().getFullYear()} Fatou — All rights reserved.
        </small>
      </div>
    </footer>
  );
}
