import myProfile from "../../assets/my-profile.webp";
import Button from "../../components/Button/Button";
import classes from "./HeroSection.module.css";
import "../../App.css";

export default function HeroSection() {
  return (
    <section id="HeroSection" className={classes["hero-section"]}>
      <div className={classes["hero-section__content"]}>
        <div className={classes["hero-section__content--infobox"]}>
          <p className="section--title">Hey, I'm Leo</p>
          {/* double check the css name */}
          <h1 className={classes["hero-section__position"]}>
            <span className={classes["hero-section__position--color"]}>
              {" "}
              Full Stack{" "}
            </span>
            <br />
            Developer
          </h1>
          <p className={classes["hero-section__description"]}>
            Unleashing digital wonders with a sprinkle of humor, turning dreams
            into tech-tastic realities, one line of code at a time!
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
