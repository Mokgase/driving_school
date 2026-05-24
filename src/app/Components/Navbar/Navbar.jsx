'use client';

import { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import styles from "../../Style/navbar.module.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <Image
            src="/Assets/images/website_logo.png"
            alt="Driving School Logo"
            width={100}
            height={50}
            className={styles.logoIcon}
          />
        </Link>
        <span className={styles.logoText}>DRIVING SCHOOL</span>
      </div>

      <button
        className={styles.hamburger}
        onClick={() => setOpen(o => !o)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        <span className={`${styles.bar} ${open ? styles.bar1Open : ''}`} />
        <span className={`${styles.bar} ${open ? styles.bar2Open : ''}`} />
        <span className={`${styles.bar} ${open ? styles.bar3Open : ''}`} />
      </button>

      <ul className={`${styles.navLinks} ${open ? styles.navOpen : ''}`}>
        <li><Link href="/" onClick={() => setOpen(false)}>HOME</Link></li>
        <li><Link href="/about" onClick={() => setOpen(false)}>ABOUT US</Link></li>
        <li><Link href="/programs" onClick={() => setOpen(false)}>PROGRAMS</Link></li>
        <li><Link href="/faqs" onClick={() => setOpen(false)}>FAQS</Link></li>
        <li><Link href="/testimonials" onClick={() => setOpen(false)}>TESTIMONIALS</Link></li>
        <li><Link href="/contact" onClick={() => setOpen(false)}>CONTACT US</Link></li>
      </ul>
    </nav>
  );
}
