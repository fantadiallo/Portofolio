import { motion } from "framer-motion";
import styles from "./Contact.module.scss";

export default function ContactSection() {
  return (
    <section className={styles.contactSection} id="contact">
      <div className={styles.container}>
        <motion.div
          className={styles.info}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2>Contact Me</h2>
          <p>I’m open to freelance, collaborations, or full-time work. Let’s connect!</p>
          <p><strong>Email:</strong> fatou@example.com</p>
          <p>
            <strong>GitHub:</strong>{" "}
            <a href="https://github.com/fantadiallo" target="_blank" rel="noreferrer">
              github.com/fantadiallo
            </a>
          </p>
        </motion.div>

        <motion.form
          className={styles.form}
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          onSubmit={(e) => {
            e.preventDefault();
            alert("Message sent!");
          }}
        >
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </motion.form>
      </div>
    </section>
  );
}
