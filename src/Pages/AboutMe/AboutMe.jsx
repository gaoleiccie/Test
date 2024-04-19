import classes from "./AboutMe.module.css";
import sharedClasses from "../../styles/shared.module.css";
import aboutMeImg from "../../assets/about-me.png";

export default function AboutMe() {
  return (
    <section className={classes["aboutme-section"]} id="AboutMe">
      <div className={classes["aboutme-section__img"]}>
        <img src={aboutMeImg} alt="About Me" />
      </div>
      <div className={classes["hero-section__title"]}>
        <p className={sharedClasses["skills--section__title"]}>About</p>
        <h1 className={sharedClasses["skills-section__heading"]}>About Me</h1>
        <p className={sharedClasses["hero-section__description"]}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores ut
          laudantium debitis iste quibusdam nulla tempora explicabo, totam sequi
          perferendis vero reprehenderit vel odit eligendi consequatur porro
          error minima non?
        </p>
        <p className={sharedClasses["hero-section__description"]}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores ut
          laudantium debitis iste quibusdam nulla tempora explicabo, totam sequi
          perferendis vero reprehenderit vel odit eligendi consequatur porro
          error minima non?
        </p>
      </div>
    </section>
  );
}
