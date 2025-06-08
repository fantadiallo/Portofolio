import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        navRef.current &&
        !navRef.current.contains(event.target) &&
        !event.target.closest(`.${styles.hamburger}`)
      ) {
        setMenuOpen(false);
        setDropdownOpen(false);
      }
    }

    function handleScroll() {
      setMenuOpen(false);
      setDropdownOpen(false);
    }

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

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

        <nav ref={navRef} className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
          <Link to="/#about" className={styles.link} onClick={handleLinkClick}>
            About
          </Link>
          <Link to="/#skills" className={styles.link} onClick={handleLinkClick}>
            Skills
          </Link>

          <div
            className={`${styles.dropdown} ${dropdownOpen ? styles.dropdownOpen : ""}`}
          >
            <button
              type="button"
              className={styles.link}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Projects
            </button>
            <div className={`${styles.dropdownMenu} ${dropdownOpen ? styles.show : ""}`}>
              <Link to="/projects/project-1" className={styles.dropdownItem} onClick={handleLinkClick}>
                Holidaze Booking
              </Link>
              <Link to="/projects/project-2" className={styles.dropdownItem} onClick={handleLinkClick}>
                Modern Online Store
              </Link>
              <Link to="/projects/project-3" className={styles.dropdownItem} onClick={handleLinkClick}>
                Pet Care Platform
              </Link>
            </div>
          </div>

          <Link to="/#contact" className={styles.link} onClick={handleLinkClick}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
