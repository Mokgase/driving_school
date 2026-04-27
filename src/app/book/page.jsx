import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Footer/Footer";
import Button from "../Components/Button";
import styles from "../Style/contact.module.css";
import Link from "next/link";

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
            <h1 className={styles.heading}>Book a Lesson</h1>
            <p className={styles.subheading}>
              Ready to get behind the wheel? Contact us to schedule your first lesson.
            </p>
          </div>
          <div style={{ maxWidth: '600px', margin: '0 auto', padding: '0 2rem 4rem', textAlign: 'center' }}>
            <p style={{ marginBottom: '2rem', fontSize: '1.05rem', color: '#555' }}>
              To book a lesson, get in touch with us via our contact page or call us directly at <strong>+27 12 345 6789</strong>.
            </p>
            <Link href="/contact">
              <Button text={"GO TO CONTACT"} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
