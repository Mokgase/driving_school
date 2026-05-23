import styles from "../Style/about.module.css";
import Image from "next/image";
import aboutus from "../../../public/Assets/images/aboutus.png"
import { aboutUsImages, socialImages } from "../Utils/images";
import Button from "../Components/Button";
import PageBreak from "../Components/PageBreak/pageBreak";
import Link from "next/link";

export default function About() {
  return (
    <section className={styles.section}>
      <div className={styles.hero}>
        <div>
          <h1 className={styles.heading}>About Us</h1>
          <p className={styles.subheading}>
            Empowering drivers with confidence, safety, and skill since 2010.
          </p>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.column1}>
          <Image src={aboutus} alt="about us image" width={500} height={370} placeholder="blur" className={styles.aboutImg}/>
        </div>
        <div className={styles.column2}>
          <div className={styles.story}>
            <h2>Our Story</h2>
            <p>
              Driving School understands that learners have busy schedules. That's why our lessons are designed to be flexible, allowing students to learn at their own pace and book sessions when it suits them. Unlike rigid training programmes, we focus on convenience, making it easier to balance driving lessons with school, work, and daily life.
              -Convenient lesson scheduling available six days a week
              -Patient, supportive instruction for nervous drivers and elderly learners
              -High-quality driving lessons at fair, affordable rates
              -Use of our training vehicle for official road tests
            </p>
            <p>
              Every lesson is designed around you. We work at your pace, address
              your specific concerns, and celebrate every milestone with you on the
              journey to your licence.
            </p>
          </div>
        </div>
      </div>
      <PageBreak />
      <div className={styles.hero2}>
        <div>
          <h1 className={styles.heading}>Our Team</h1>
          <p className={styles.subheading}>
            We have the most experienced driving coaches in the industry.
          </p>
        </div>
      </div>
      <div className={styles.images_grid}>
        {aboutUsImages.map((ourTeam, index) => (
          <div key={index} className={styles.image}>
            <Image
              src={ourTeam.src}
              alt={ourTeam.title}
              className={styles.grid_image}
              height={300}
              width={600}
              quality={100}
            />
            <div className={styles.ourTeam_info}>
              <h1 className={styles.ourTeam_title}>{ourTeam.title}</h1>
              <p className={styles.members_job}>{ourTeam.job}</p>
              <p className={styles.members_status}>{ourTeam.status}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.hero2}>
        <div>
          <h1 className={styles.heading}>Start your Engine</h1>
          <p className={styles.subheading}>
            Choosing our driving School will put you on the road as a better driver
          </p>
          <Link href="/book"><Button text={"BOOK NOW"}/></Link>
        </div>
      </div>
      <PageBreak />
      <div className={styles.socials_grid}>
        {socialImages.map((social, index) => (
          <div key={index} className={styles.social_item}>
            <a href={social.url} target="_blank" rel="noopener noreferrer">
            <Image
              src={social.src}
              alt={social.title}
              height={240}
              width={240}
              quality={100}
              className={styles.social_image}
            />
            </a>
            <p className={styles.socials_title}>{social.title}</p>
          </div>
        ))}
      </div>
      <div className={styles.buttonCenter}>
        <Link href="/book"><Button text={"BOOK NOW"}/></Link>
      </div>
    </section>
  );
}
