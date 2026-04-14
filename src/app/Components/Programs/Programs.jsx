import styles from "../../Style/programs.module.css";

const programs = [
  {
    title: "Teen Drivers Education",
    description:
      "A comprehensive program designed specifically for new teen drivers. Build confidence, learn the rules of the road, and develop safe driving habits from day one.",
    bg: "#e3f2fd",
    icon: "🎓",
  },
  {
    title: "Adult In-Car Lessons",
    description:
      "Tailored one-on-one in-car lessons for adult learners at any skill level. Our patient instructors help you progress at your own pace.",
    bg: "#fce4ec",
    icon: "🚗",
  },
  {
    title: "Programs for Seniors",
    description:
      "Specialised refresher courses for senior drivers to stay safe, confident, and independent on the road with up-to-date driving knowledge.",
    bg: "#e8f5e9",
    icon: "🌟",
  },
];

export default function Programs() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Our Programs</h2>
      <div className={styles.grid}>
        {programs.map((program) => (
          <div key={program.title} className={styles.card}>
            <div className={styles.cardImage} style={{ background: program.bg }}>
              <span className={styles.cardIcon}>{program.icon}</span>
            </div>
            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>{program.title}</h3>
              <p className={styles.cardText}>{program.description}</p>
              <button className={styles.learnMore}>Learn More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
