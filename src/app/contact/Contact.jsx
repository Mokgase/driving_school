import styles from "../Style/contact.module.css";

export default function Contact() {
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
          <h2>Get In Touch</h2>

          <div className={styles.infoItem}>
            <span className={styles.infoIcon}>📍</span>
            <div>
              <p className={styles.infoLabel}>Address</p>
              <p className={styles.infoText}>123 Main Street, Pretoria, 0001</p>
            </div>
          </div>

          <div className={styles.infoItem}>
            <span className={styles.infoIcon}>📞</span>
            <div>
              <p className={styles.infoLabel}>Phone</p>
              <p className={styles.infoText}>+27 12 345 6789</p>
            </div>
          </div>

          <div className={styles.infoItem}>
            <span className={styles.infoIcon}>✉️</span>
            <div>
              <p className={styles.infoLabel}>Email</p>
              <p className={styles.infoText}>info@drivingschool.co.za</p>
            </div>
          </div>

          <div className={styles.infoItem}>
            <span className={styles.infoIcon}>🕐</span>
            <div>
              <p className={styles.infoLabel}>Hours</p>
              <p className={styles.infoText}>Mon – Fri: 07:00 – 18:00</p>
              <p className={styles.infoText}>Sat: 08:00 – 14:00</p>
            </div>
          </div>
        </div>

        <form className={styles.form}>
          <h2>Send a Message</h2>

          <div className={styles.row}>
            <div className={styles.field}>
              <label htmlFor="firstName">First Name</label>
              <input id="firstName" type="text" placeholder="Your first name" />
            </div>
            <div className={styles.field}>
              <label htmlFor="lastName">Last Name</label>
              <input id="lastName" type="text" placeholder="Your last name" />
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="your@email.com" />
          </div>

          <div className={styles.field}>
            <label htmlFor="phone">Phone Number</label>
            <input id="phone" type="tel" placeholder="+27 ..." />
          </div>

          <div className={styles.field}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows={5}
              placeholder="Tell us how we can help..."
            />
          </div>

          <button type="submit" className={styles.submit}>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
