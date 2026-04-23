import styles from "../Style/programs.module.css";
import Button from "../Components/Button";
import { programs } from "../Utils/programs";

export default function Programs() {
  const repeated = [...programs, ...programs, ...programs, ...programs];

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Our Programs</h2>
      <div className={styles.carousel}>
        <div className={styles.track}>
          {repeated.map((program, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{program.title}</h3>
                <p className={styles.cardText}>{program.description}</p>
                <Button value={"Learn More"} text={"LEARN MORE"} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
