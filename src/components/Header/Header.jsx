import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          Fatou.<span>Developer</span>
        </Link>

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
          <a href="#about" className={styles.link}>About</a>
          <a href="#skills" className={styles.link}>Skills</a>

          <div className={`${styles.dropdown} ${dropdownOpen ? styles.dropdownOpen : ""}`}>
            <button
              type="button"
              className={styles.link}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Projects
            </button>
            <div className={`${styles.dropdownMenu} ${dropdownOpen ? styles.show : ""}`}>
              <Link to="/projects/project-1" className={styles.dropdownItem}>E-Commerce Store</Link>
              <Link to="/projects/project-2" className={styles.dropdownItem}>Project 2</Link>
              <Link to="/projects/project-3" className={styles.dropdownItem}>Project 3</Link>
            </div>
          </div>

          <a href="#contact" className={styles.link}>Contact</a>
        </nav>
      </div>
    </header>
  );
}
