import styles from "../Style/programs.module.css";
import Button from "../Components/Button";
import { socialImages } from "../Utils/ourprograms";
import Image from "next/image";

export default function Programs() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Our Programs</h2>
      <div className={styles.grid}>
        {socialImages.map((program) => (
          <div key={program.title} className={styles.card}>
            <div className={styles.cardImage}>
              <Image src={program.src} alt={program.title} width={400} height={180} className={styles.cardImg} />
            </div>
            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>{program.title}</h3>
              <p className={styles.cardText}>{program.description}</p>
              <Button value={"Learn More"} text={"BOOK NOW"}/>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
