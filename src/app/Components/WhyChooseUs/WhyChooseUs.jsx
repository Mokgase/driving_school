import styles from "../../Style/whychooseus.module.css";

const reasons = [
  {
    icon: "🎓",
    title: "Certified Instructors",
    text: "All our instructors are fully licensed and experienced in teaching drivers of all skill levels.",
  },
  {
    icon: "🚗",
    title: "Modern Vehicles",
    text: "Learn in well-maintained, dual-control vehicles equipped with the latest safety features.",
  },
  {
    icon: "📅",
    title: "Flexible Scheduling",
    text: "Book lessons at times that suit you — mornings, evenings, or weekends.",
  },
  {
    icon: "✅",
    title: "High Pass Rate",
    text: "Our structured curriculum gives students the best chance of passing first time.",
  },
  {
    icon: "💰",
    title: "Affordable Packages",
    text: "Transparent pricing with no hidden fees. Pay per lesson or save with a package deal.",
  },
  {
    icon: "📍",
    title: "Local Knowledge",
    text: "Instructors familiar with local test routes so you practice exactly where it counts.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Why Choose Us</h2>
      <div className={styles.grid}>
        {reasons.map((reason, index) => (
          <div key={index} className={styles.item}>
            <span className={styles.icon}>{reason.icon}</span>
            <p className={styles.title}>{reason.title}</p>
            <p className={styles.text}>{reason.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
