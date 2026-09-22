import { LinkButton } from "../../ui/LinkButton";
import styles from "./Hero.module.scss";
import ArrowRightBlack from "../../assets/icons/arrow-right-black.svg?react";

import HeroVideo from "../../assets/videos/hero-placeholder.mp4";
import { CONTACTS } from "../../config/contacts";

interface HeroData {
  video: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonUrl: string;
}

const hero: HeroData = {
  video: HeroVideo,
  title: "Новый киноколледж — среда, где человек раскрывается как автор",
  subtitle: "Учеба как рост, кино как язык",
  buttonText: "Записаться",
  buttonUrl: CONTACTS.telegram,
};

const Hero: React.FC = () => (
  <section className={styles.hero}>
    <video
      className={styles["hero-video"]}
      autoPlay
      loop
      muted
      playsInline
      src={hero.video}
    >
      <source src={hero.video} type="video/mvo" />
      Ваш браузер не поддерживает тег видео.
    </video>
    <div className={styles["hero-overlay"]}></div>
    <div className={styles["hero-content"]}>
      <h1>{hero.title}</h1>
      <p>{hero.subtitle}</p>
      <div className={styles["hero-buttons"]}>
        <LinkButton
          href={hero.buttonUrl}
          icon={ArrowRightBlack}
          variant="simple"
          size="md"
        >
          <span className={styles["button-text"]}>{hero.buttonText}</span>
        </LinkButton>
      </div>
    </div>
  </section>
);

export default Hero;
