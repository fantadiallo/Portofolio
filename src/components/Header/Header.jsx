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
          <Link to="#about" className={styles.link}>About</Link>
          <Link to="/#skills" className={styles.link}>Skills</Link>

          <div className={`${styles.dropdown} ${dropdownOpen ? styles.dropdownOpen : ""}`}>
            <button
              type="button"
              className={styles.link}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Projects
            </button>
            <div className={`${styles.dropdownMenu} ${dropdownOpen ? styles.show : ""}`}>
              <Link to="/projects/project-1" className={styles.dropdownItem}>Holidaze Booking</Link>
              <Link to="/projects/project-2" className={styles.dropdownItem}>Modern Online Store</Link>
              <Link to="/projects/project-3" className={styles.dropdownItem}>Pet Care Platform</Link>
            </div>
          </div>

          <Link to="#contact" className={styles.link}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}
