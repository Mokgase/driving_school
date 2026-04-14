import styles from "./hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.imagePanel}>
        <div className={styles.imagePlaceholder}></div>
        <div className={styles.stripeOverlay}></div>
      </div>

      <div className={styles.contentPanel}>
        <h1 className={styles.heading}>Are you ready?</h1>
        <p className={styles.subtext}>
          Finding the perfect driving instructor has never been easier. Our
          certified instructors are here to guide you every step of the way,
          from your very first lesson to passing your test with confidence.
        </p>
        <div className={styles.ctaBanner}>
          <p className={styles.ctaText}>Schedule Your Driving Lessons with Us!</p>
          <p className={styles.phone}>+27 12 345 6789</p>
        </div>
      </div>
    </section>
  );
}
