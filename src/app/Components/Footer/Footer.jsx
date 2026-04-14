import Link from "next/link";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <span className={styles.logoIcon}>🚗</span>
            <span className={styles.logoText}>DRIVING SCHOOL</span>
          </div>
          <p className={styles.tagline}>
            Your journey to safe and confident driving starts here.
          </p>
        </div>

        <div className={styles.linksGroup}>
          <h4 className={styles.groupTitle}>Information</h4>
          <ul className={styles.linkList}>
            <li><Link href="/faqs">FAQ</Link></li>
            <li><Link href="/programs">Programs</Link></li>
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className={styles.linksGroup}>
          <h4 className={styles.groupTitle}>Customer Service</h4>
          <ul className={styles.linkList}>
            <li><Link href="/book">Book a Lesson</Link></li>
            <li><Link href="/testimonials">Testimonials</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Get in Touch</Link></li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} Driving School. All rights reserved.
        </p>
        <div className={styles.socials}>
          <a href="#" aria-label="Facebook" className={styles.socialIcon}>f</a>
          <a href="#" aria-label="Twitter" className={styles.socialIcon}>𝕏</a>
          <a href="#" aria-label="Instagram" className={styles.socialIcon}>in</a>
          <a href="#" aria-label="LinkedIn" className={styles.socialIcon}>li</a>
        </div>
      </div>
    </footer>
  );
}
