import classes from "./Achievements.module.css";
import data from "../../data/index.json";
import sharedClasses from "../../styles/shared.module.css";

export default function Achievements() {
  return (
    <section
      className={classes["achievements-section"]}
      id="Achievements"
    >
      <div className={classes["achievements-section__box"]}>
        <p className="sub__title">The Power of Certiciation</p>
        <h2 className="section__heading">Peronal Achievements</h2>
      </div>
      <div className={classes["achievements-section__container"]}>
        {data?.achievements?.map((achievement) => {
          return (
            <div className={classes["achievements-section__card"]}>
              <div className={classes["achievements-section__card-content"]}>
                <h3 className={sharedClasses["portflio-section__card-title"]}>
                  {achievement.title}
                </h3>
                <p className="text-md">{achievement.description}</p>
              </div>
              <div className={classes["achievements-section__card-img"]}>
                <img src={achievement.src} alt="certification provider" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
