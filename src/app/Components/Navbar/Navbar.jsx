import Link from "next/link";
import Image from "next/image";
import styles from "../../Style/navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <Image 
            src="/Assets/images/website_logo.png" 
            alt="Driving School Logo" 
            width={100} 
            height={50} 
            className={styles.logoIcon} />
        </Link>
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
