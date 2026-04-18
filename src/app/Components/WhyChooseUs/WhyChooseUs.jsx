import styles from "../../Style/whychooseus.module.css";
import whychooseus from "../../Utils/whychooseus";

export default function WhyChooseUs() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Why Choose Us</h2>
      <p className={styles.subheading}>
        Driving School is committed to helping learners become confident, responsible, and safe drivers. 
        Our experienced instructors focus on practical skills, road awareness, and test readiness—ensuring you’re fully prepared for South African road conditions and the K53 driving test.
        We offer patient, personalised lessons designed to suit beginners and experienced learners alike, all at affordable and transparent rates.</p>
      <div className={styles.grid}>
        {whychooseus.map((reason, index) => (
          <div key={index} className={styles.item}>
            <p className={styles.title}>{reason.title}</p>
            <p className={styles.text}>{reason.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
