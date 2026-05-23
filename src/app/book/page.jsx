import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Footer/Footer";
import BookingForm from "./BookingForm";
import styles from "../Style/book.module.css";

export const metadata = {
  title: "Book a Lesson | Driving School",
};

export default function BookPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className={styles.section}>
          <div className={styles.hero}>
            <h1 className={styles.heroHeading}>
              Book a <span>Lesson</span>
            </h1>
            <p className={styles.heroSubheading}>
              Fill in the form below and we&apos;ll confirm your session within 24 hours.
            </p>
          </div>

          <div className={styles.container}>
            <div className={styles.info}>
              <h2>What to Expect</h2>

              <div className={styles.infoItem}>
                <div>
                  <p className={styles.infoLabel}>Flexible Scheduling</p>
                  <p className={styles.infoText}>Lessons available Monday – Saturday, 08:00 – 17:00.</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div>
                  <p className={styles.infoLabel}>Confirmation Call</p>
                  <p className={styles.infoText}>We&apos;ll call or email you within 24 hours to confirm your booking.</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div>
                  <p className={styles.infoLabel}>Vehicle Provided</p>
                  <p className={styles.infoText}>Our dual-control training vehicle is available for your road test.</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div>
                  <p className={styles.infoLabel}>Location</p>
                  <p className={styles.infoText}>Lessons depart from your address or a agreed pickup point.</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div>
                  <p className={styles.infoLabel}>Contact Us Directly</p>
                  <p className={styles.infoText}>+27 12 345 6789</p>
                </div>
              </div>
            </div>

            <BookingForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
