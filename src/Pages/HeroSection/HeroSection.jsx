import myProfile from "../../assets/my-profile.webp";
import Button from "../../components/Button/Button";
import classes from "./HeroSection.module.css";
import "../../App.css";

export default function HeroSection() {
  return (
    <section id="heroSection" className={classes["hero-section"]}>
      <div className={classes["hero-section__content"]}>
        <div className={classes["hero-section__content--infobox"]}>
          <p className="section--title">Hey, I'm Leo</p>
          {/* double check the css name */}
          <h1 className={classes["hero-section__position"]}>
            <span className={classes["hero-section__position--color"]}> Full Stack </span>
            <br />Developer
          </h1>
          <p className={classes["hero-section__description"]}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Dolorum, quas. Amet soluta assumenda cum?
          </p>
        </div>
        <Button>Get in Touch</Button>
      </div>
      <div className={classes["hero-section__img--container"]}>
        <img src={myProfile} alt="Hero Section" />
      </div>
    </section>
  );
}
