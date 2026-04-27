import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Footer/Footer";
import styles from "../Style/contact.module.css";

export const metadata = {
  title: "Privacy Policy | Driving School",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className={styles.section}>
          <div className={styles.hero}>
            <h1 className={styles.heading}>Privacy Policy</h1>
            <p className={styles.subheading}>
              How we collect, use, and protect your personal information.
            </p>
          </div>
          <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem 4rem' }}>
            <h2>Information We Collect</h2>
            <p>We collect personal information you provide when booking a lesson or contacting us, including your name, email address, and phone number.</p>
            <h2>How We Use Your Information</h2>
            <p>Your information is used solely to schedule lessons, communicate with you about your bookings, and improve our services. We do not sell or share your data with third parties.</p>
            <h2>Contact</h2>
            <p>For any privacy-related questions, contact us at info@drivingschool.co.za.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
