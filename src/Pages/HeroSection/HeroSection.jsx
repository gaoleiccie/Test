import myProfile from "../../assets/my-profile.webp";
import Button from "../../components/Button/Button";
import classes from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section>
      <div>
        <div >
          <p >Hey, I'm Leo</p>
          <h1>
            <span> Full stack</span>
            <br />
            Developer
          </h1>
          <p >
            Lorem ipsum dolor sit amet, consectetur adipisicing.
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            assumenda incidunt vitae dolorum recusandae?
          </p>
        </div>
      <Button>Get in Touch</Button>
      </div>
      <div>
        <img src={myProfile} alt="Hero Section" />
      </div>
    </section>
  );
}
