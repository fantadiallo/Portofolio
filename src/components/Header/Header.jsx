import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

/**
 * Header component that renders the site's navigation bar.
 *
 * Includes:
 * - Logo link to homepage
 * - Scroll-based section links (using hash anchors)
 * - Hamburger menu toggle for mobile
 * - Dropdown menu for project pages
 *
 * @component
 * @returns {JSX.Element} Rendered header/navigation element
 */
export default function Header() {
  /**
   * Tracks whether the mobile menu is open.
   * @type {[boolean, Function]} menuOpen
   */
  const [menuOpen, setMenuOpen] = useState(false);

  /**
   * Tracks whether the "Projects" dropdown is open.
   * @type {[boolean, Function]} dropdownOpen
   */
  const [dropdownOpen, setDropdownOpen] = useState(false);

  /**
   * Reference to the <nav> element to detect outside clicks.
   * @type {React.RefObject<HTMLDivElement>}
   */
  const navRef = useRef();

  /**
   * Handles clicks outside the nav or scroll events to close menus.
   * Adds and removes event listeners.
   */
  useEffect(() => {
    /**
     * Closes menus if clicking outside nav/hamburger.
     * @param {MouseEvent} event
     */
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

    /**
     * Closes menus on scroll.
     */
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

  /**
   * Closes all menus when a link is clicked.
   * Useful for mobile nav.
   */
  const handleLinkClick = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo / Home Link */}
        <Link to="/" className={styles.logo}>
          Fatou.<span>Developer</span>
        </Link>

        {/* Hamburger button for mobile menu */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* Navigation menu */}
        <nav
          ref={navRef}
          className={`${styles.nav} ${menuOpen ? styles.open : ""}`}
        >
          <Link to="/#about" className={styles.link} onClick={handleLinkClick}>
            About
          </Link>
          <Link to="/#packages" className={styles.link} onClick={handleLinkClick}>
            Packages
          </Link>
          <Link to="/#skills" className={styles.link} onClick={handleLinkClick}>
            Skills
          </Link>

          {/* Projects Dropdown */}
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
              <Link
                to="/projects/project-1"
                className={styles.dropdownItem}
                onClick={handleLinkClick}
              >
                Holidaze Booking
              </Link>
              <Link
                to="/projects/project-3"
                className={styles.dropdownItem}
                onClick={handleLinkClick}
              >
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
