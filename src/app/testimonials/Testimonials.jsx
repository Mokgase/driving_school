import styles from "../Style/testimonials.module.css";
import testimonials from "../Utils/testimonials";


export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className={styles.hero}>
        <h1 className={styles.heading}>What Our Students Say</h1>
        <p className={styles.subheading}>
          Real stories from real drivers who trusted us with their journey.
        </p>
      </div>

      <div className={styles.grid}>
        {testimonials.map((t, i) => (
          <div key={i} className={styles.card}>
            <p className={styles.text}>"{t.text}"</p>
            <div className={styles.author}>
              <div
                className={styles.avatar}
                style={{ background: t.color }}
              >
                {t.initials}
              </div>
              <div>
                <p className={styles.name}>{t.name}</p>
                <p className={styles.role}>{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
