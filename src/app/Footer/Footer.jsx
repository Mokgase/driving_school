import Link from "next/link";
import Image from "next/image";
import styles from "../Style/footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <Image 
              src="/Assets/images/website_logo.png" 
              alt="Driving School Logo" 
              width={130} 
              height={50} 
              className={styles.logoIcon} 
            />
            <span className={styles.logoText}>DRIVING SCHOOL</span>
          </div>
          <p className={styles.tagline}>
            We offer a reputable, professional driving service focused on building your confidence to pass your test and drive safely on South African roads.
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
          <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>f</a>
          <a href="https://x.com" aria-label="X / Twitter" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>𝕏</a>
          <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>in</a>
          <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>li</a>
        </div>
      </div>
    </footer>
  );
}
