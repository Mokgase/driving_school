import Link from "next/link";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <span className={styles.logoIcon}>🚗</span>
        <span className={styles.logoText}>DRIVING SCHOOL</span>
      </div>
      <ul className={styles.navLinks}>
        <li><Link href="/">HOME</Link></li>
        <li><Link href="/about">ABOUT US</Link></li>
        <li><Link href="/programs">PROGRAMS</Link></li>
        <li><Link href="/faqs">FAQS</Link></li>
        <li><Link href="/testimonials">TESTIMONIALS</Link></li>
        <li><Link href="/contact">CONTACT US</Link></li>
      </ul>
    </nav>
  );
}
