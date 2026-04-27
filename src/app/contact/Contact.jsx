'use client';

import { useState } from "react";
import styles from "../Style/contact.module.css";
import Button from "../Components/Button";

export default function Contact() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.id]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className={styles.section}>
      <div className={styles.hero}>
        <h1 className={styles.heading}>Contact Us</h1>
        <p className={styles.subheading}>
          Ready to start your journey? Get in touch and we will set you up.
        </p>
      </div>

      <div className={styles.container}>
        <div className={styles.info}>
          <h2>Our Office</h2>

          <div className={styles.infoItem}>
            <div>
              <p className={styles.infoLabel}>Address</p>
              <p className={styles.infoText}>123 Main Street, Pretoria, 0001</p>
            </div>
          </div>

          <div className={styles.infoItem}>
            <div>
              <p className={styles.infoLabel}>Phone</p>
              <p className={styles.infoText}>+27 12 345 6789</p>
              <p className={styles.infoText}>011 345 6789</p>
            </div>
          </div>

          <div className={styles.infoItem}>
            <div>
              <p className={styles.infoLabel}>Email</p>
              <p className={styles.infoText}>info@drivingschool.co.za</p>
            </div>
          </div>

          <div className={styles.infoItem}>
            <div>
              <p className={styles.infoLabel}>Hours</p>
              <p className={styles.infoText}>Mon – Fri: 07:00 – 18:00</p>
              <p className={styles.infoText}>Sat: 08:00 – 14:00</p>
            </div>
          </div>
        </div>

        {submitted ? (
          <div className={styles.form}>
            <h2><span style={{ color: "#d4a23a" }}>Thank </span><span style={{ color: "#000000" }}>You!</span></h2>
            <p>We have received your message and will be in touch shortly.</p>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            <h2><span style={{ color: "#d4a23a" }}>Get in </span><span style={{ color: "#000000" }}>Touch</span></h2>

            <div className={styles.row}>
              <div className={styles.field}>
                <label htmlFor="firstName">First Name</label>
                <input id="firstName" type="text" placeholder="Your first name" value={form.firstName} onChange={handleChange} required />
              </div>
              <div className={styles.field}>
                <label htmlFor="lastName">Last Name</label>
                <input id="lastName" type="text" placeholder="Your last name" value={form.lastName} onChange={handleChange} required />
              </div>
            </div>

            <div className={styles.field}>
              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="your@email.com" value={form.email} onChange={handleChange} required />
            </div>

            <div className={styles.field}>
              <label htmlFor="phone">Phone Number</label>
              <input id="phone" type="tel" placeholder="+27 ..." value={form.phone} onChange={handleChange} />
            </div>

            <div className={styles.field}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows={5}
                placeholder="Tell us how we can help..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <Button text={"BOOK NOW"} type={"submit"} />
          </form>
        )}
      </div>
    </section>
  );
}
