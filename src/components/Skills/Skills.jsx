import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import { motion } from "framer-motion";
import styles from "./Skills.module.scss";

const frontendSkills = [
  { name: "HTML5", icon: <FaIcons.FaHtml5 /> },
  { name: "CSS3", icon: <FaIcons.FaCss3Alt /> },
  { name: "SCSS", icon: <FaIcons.FaSass /> },
  { name: "JavaScript", icon: <FaIcons.FaJsSquare /> },
  { name: "React", icon: <FaIcons.FaReact /> },
  { name: "Vite", icon: <SiIcons.SiVite /> },
];

const toolsSkills = [
  { name: "Supabase", icon: <SiIcons.SiSupabase /> },
  { name: "Bootstrap", icon: <FaIcons.FaBootstrap /> },
  { name: "Git", icon: <FaIcons.FaGitAlt /> },
  { name: "Figma", icon: <SiIcons.SiFigma /> },
  { name: "Node.js", icon: <SiIcons.SiNodedotjs /> },
];

const animationVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
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

export default function SkillsSection() {
  return (
    <section className={styles.skillsSection} id="skills">
      <motion.h2
        className={styles.heading}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.4 }}
      >
        My Toolbox
      </motion.h2>

      <div className={styles.splitSection}>
        <motion.div className={styles.skillsGroup}>
          <h3 className={styles.subheading}>Frontend</h3>
          <div className={styles.skillsGrid}>
            {frontendSkills.map((skill, i) => (
              <motion.div
                key={skill.name}
                className={styles.skillCard}
                custom={i}
                initial="hidden"
                whileInView="visible"
                variants={animationVariant}
                viewport={{ once: false, amount: 0.3 }}
              >
                <span className={styles.icon}>{skill.icon}</span>
                <span className={styles.label}>{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div className={styles.skillsGroup}>
          <h3 className={styles.subheading}>Tools & Platforms</h3>
          <div className={styles.skillsGrid}>
            {toolsSkills.map((skill, i) => (
              <motion.div
                key={skill.name}
                className={styles.skillCard}
                custom={i}
                initial="hidden"
                whileInView="visible"
                variants={animationVariant}
                viewport={{ once: false, amount: 0.3 }}
              >
                <span className={styles.icon}>{skill.icon}</span>
                <span className={styles.label}>{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
