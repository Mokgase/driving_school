import styles from "../../Style/hero.module.css";
import Button from "../../Components/Button";
import Image from "next/image";
import heroImg from "../../../../public/Assets/images/heroImg.png";
import homepage from "../../../../public/Assets/images/homepage.png"
import PageBreak from "../PageBreak/pageBreak";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBanner}>
        <Image
          src={homepage}
          alt="home image"
          width={1500}
          height={900}
          placeholder="blur"
          className={styles.bannerImg}
        />
        <div className={styles.bannerOverlay}>
          <p className={styles.bannerSubtext}>Smart drivers start here</p>
          <h1 className={styles.bannerHeading}>
            <span style={{ color: '#DBB052' }}>Friendly</span> & <span style={{ color: '#DBB052' }}>Patient</span> Instructions
          </h1>
        </div>
      </div>
      <PageBreak/>
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
      <div className={styles.column2}>
      <div className={styles.contentPanel}>
        <h1 className={styles.heading}>Are you ready?</h1>
          <p className={styles.subtext}>
            You're ready to begin driving lessons when you're motivated to learn, build confidence, and take control behind the wheel.
            Whether you're starting from scratch or looking to improve your skills,
            Driving School supports you every step of the way at your pace, with patience and professional guidance.
          </p>
          <ul>
            <ol>
              Have a learner's license or are preparing to get one
            </ol>
            <ol>
              Want to gain confidence on real roads
            </ol>
            <ol>
              Feel nervous but are eager to learn and improve
            </ol>
            <ol>
              Need structured guidance for the K53 driving test
            </ol>
          </ul>
        <Button value={"BOOK NOW"} text={"BOOK NOW"}/>
      </div>
      </div>
      </div>
    </section>
  );
}
