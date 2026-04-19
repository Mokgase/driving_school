import styles from "../../Style/hero.module.css";
import Button from "../../Components/Button";
import Image from "next/image";
import heroImg from "../../../../public/Assets/images/heroImg.png";

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* <div className={styles.imagePanel}>
        <div className={styles.imagePlaceholder}></div>
        <div className={styles.stripeOverlay}></div>
      </div> */}
      <div className={styles.row}>
        <div className={styles.column1}>
          <div className={styles.hero_image}>
            <Image
              src={heroImg} 
              alt="hero image" 
              width={500} 
              height={370} 
              placeholder="blur" 
              className="w-[80%] h-auto"
            />
          </div>
        </div>
      </div>

      <div className={styles.contentPanel}>
        <h1 className={styles.heading}>Are you ready?</h1>
        <p className={styles.subtext}>
          You’re ready to begin driving lessons when you’re motivated to learn, build confidence, and take control behind the wheel. 
          Whether you’re starting from scratch or looking to improve your skills, 
          Driving School supports you every step of the way at your pace, with patience and professional guidance.
        </p>
      <Button value={"BOOK NOW"} text={"BOOK NOW"}/>
      </div>
    </section>
  );
}
