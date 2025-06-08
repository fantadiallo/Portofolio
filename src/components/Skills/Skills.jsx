import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import styles from "./Skills.module.scss";

const skills = [
  { name: "HTML5", icon: <FaIcons.FaHtml5 /> },
  { name: "CSS3", icon: <FaIcons.FaCss3Alt /> },
  { name: "SCSS", icon: <FaIcons.FaSass /> },
  { name: "JavaScript", icon: <FaIcons.FaJsSquare /> },
  { name: "React", icon: <FaIcons.FaReact /> },
  { name: "Vite", icon: <SiIcons.SiVite /> },
  { name: "Supabase", icon: <SiIcons.SiSupabase /> },
  { name: "Bootstrap", icon: <FaIcons.FaBootstrap /> },
  { name: "Git", icon: <FaIcons.FaGitAlt /> },
  { name: "Figma", icon: <SiIcons.SiFigma /> },
  { name: "Node.js", icon: <SiIcons.SiNodedotjs /> }, // ✅ Corrected icon
];

export default function SkillsSection() {
  return (
    <section className={styles.skillsSection} id="skills">
      <h2 className={styles.heading}>My Toolbox</h2>
      <div className={styles.skillsGrid}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.skillCard}>
            <span className={styles.icon}>{skill.icon}</span>
            <span className={styles.label}>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
