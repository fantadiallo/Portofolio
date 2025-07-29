import { motion } from "framer-motion";
import styles from "./Contact.module.scss";

export default function ContactSection() {
  return (
    <section className={styles.contactSection} id="contact">
      <div className={styles.container}>
        <motion.div
          className={styles.info}
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2>Contact Me</h2>
          <p>
            Ready to start your website or need something built?  
            Send me a Email with what you’re looking for — the more details the better!
          </p>

        <p>
  <strong>Email:</strong>{" "}
  <a href="mailto:shes.fato@gmail.com">shes.fato@gmail.com</a>  
  <br />
  <strong>Business:</strong>{" "}
  <a href="mailto:waloweb.3@gmail.com">waloweb.3@gmail.com</a>
</p>

          <p>
            <strong>Phone / WhatsApp:</strong>{" "}
            <a href="tel:+4794464132">+47 944 64 132</a> (I’m also on WhatsApp)
          </p>

          <p>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/fantadiallo"
              target="_blank"
              rel="noreferrer"
            >
              github.com/fantadiallo
            </a>
          </p>
        </motion.div>

        <motion.form
          className={styles.form}
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          onSubmit={(e) => {
            e.preventDefault();
            alert("Message sent! I'll get back to you shortly.");
          }}
        >
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea
            placeholder="Describe your project or idea..."
            rows="4"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </motion.form>
      </div>
    </section>
  );
}

