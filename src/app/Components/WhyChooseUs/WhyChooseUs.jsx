import styles from "./whychooseus.module.css";

const reasons = [
  {
    icon: "🛡️",
    title: "Best Safety Measures",
    text: "All our vehicles are fitted with dual controls and regularly inspected to ensure the highest safety standards for every lesson.",
  },
  {
    icon: "👨‍🏫",
    title: "Experienced Instructors",
    text: "Our fully certified and background-checked instructors bring years of teaching experience to help you succeed.",
  },
  {
    icon: "⏰",
    title: "The Perfect Time",
    text: "We offer flexible scheduling including evenings and weekends so lessons fit around your life, not the other way around.",
  },
  {
    icon: "💰",
    title: "Affordable Pricing",
    text: "Competitive lesson rates with no hidden fees. We also offer package discounts to help you save more as you learn.",
  },
  {
    icon: "📅",
    title: "Flexible Lesson Options",
    text: "Choose from intensive crash courses, regular weekly lessons, or top-up sessions — whatever suits your learning style.",
  },
  {
    icon: "💳",
    title: "Easy Payment Options",
    text: "Pay online, by card, or via EFT. We make it simple and secure so you can focus on learning to drive.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Why Choose Us?</h2>
      <div className={styles.grid}>
        {reasons.map((reason) => (
          <div key={reason.title} className={styles.item}>
            <span className={styles.icon}>{reason.icon}</span>
            <h3 className={styles.title}>{reason.title}</h3>
            <p className={styles.text}>{reason.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
