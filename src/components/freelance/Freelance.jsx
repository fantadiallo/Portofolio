import { motion } from "framer-motion";
import styles from "./Freelance.module.scss";

const packages = [
  {
    title: "Link Page",
    description: "Simple, mobile-first link page for social bios.",
    features: ["Custom design", "Up to 6 links", "Responsive layout"],
    price: "€20",
  },
  {
    title: "Landing Page",
    description: "1-page scrollable site — perfect for promos or events.",
    features: ["Responsive design", "CTA & contact", "Delivered fast"],
    price: "€100 – €1,000",
  },
  {
    title: "Portfolio Website",
    description: "Clean personal site to showcase projects and skills.",
    features: ["1-page or multi-section", "Framer Motion animations", "SEO-ready"],
    price: "€150 – €1,500",
  },
  {
    title: "Business Website",
    description: "3–5 page site for small businesses, salons, and services.",
    features: ["Pages: Home, About, Contact", "Map & form integrations", "Custom design"],
    price: "€800 – €2,000",
  },
  {
    title: "eCommerce Website",
    description: "Headless store using Shopify or WordPress + React.",
    features: ["Custom product page", "Checkout & cart", "Klarna or PayPal"],
    price: "€2,500 – €3,000",
  },
  {
    title: "Full-Stack Web App",
    description: "Custom app with login, dashboard, admin & CMS.",
    features: ["React + Supabase/Firebase", "User auth", "API integrations"],
    price: "€3,000 – €5,000+",
  },
];

const animationVariant = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function Freelance() {
  return (
    <section className={styles.packagesSection} id="packages">
      <motion.h2
        className={styles.heading}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        Freelance Packages
      </motion.h2>

      <div className={styles.cardGrid}>
        {packages.map((pkg, i) => (
          <motion.div
            key={pkg.title}
            className={styles.packageCard}
            custom={i}
            initial="hidden"
            whileInView="visible"
            variants={animationVariant}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className={styles.title}>{pkg.title}</h3>
            <p className={styles.description}>{pkg.description}</p>
            <ul className={styles.features}>
              {pkg.features.map((feat, j) => (
                <li key={j}>{feat}</li>
              ))}
            </ul>
            <p className={styles.price}>{pkg.price}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className={styles.addOns}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h3 className={styles.addOnsTitle}>Optional Add-ons</h3>
        <ul className={styles.addOnsList}>
          <li>🔗 <strong>Link Page:</strong> €20</li>
          <li>📈 <strong>SEO Optimization:</strong> from €100</li>
          <li>🛠️ <strong>Monthly Maintenance:</strong> from €50/month</li>
          <li>🌐 <strong>Hosting & Domain Setup:</strong> from €50</li>
          <li>📬 <strong>Contact Form Integration:</strong> €25</li>
          <li>🎥 <strong>CMS Training Videos:</strong> €30</li>
        </ul>
      </motion.div>
    </section>
  );
}
