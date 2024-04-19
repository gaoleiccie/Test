import classes from "./MySkills.module.css";
import data from "../../data/index.json";

export default function MySkills() {
  return (
    <section className={classes["skills--section"]} id="mySkills">
      <div className={classes.portfolio__container}>
        <p className={classes.section__title}>My Skills</p>
        <h2 className={classes["skills--section__heading"]}>My Expertise</h2>
      </div>

      <div className={classes["skills--section__container"]}>
        {data?.skills?.map((skill) => {
          return (
            <div key={skill.id} className={classes["skills--section__card"]}>
              <div className={classes["skills--section__img"]}>
                <img src={skill.src} alt="product chain" />
              </div>
              <div className={classes["skills--section__card--content"]}>
                <h3 className={classes["skills--section__title"]}>
                  {skill.title}
                </h3>
                <p className={classes["skills--section__description"]}>
                  {skill.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
