import Button from "../../components/Button/Button";
import classes from "./ContactMe.module.css";

export default function ContactMe() {
  return (
    <section className={classes["contactme-section"]} id="ContactMe">
      <div className={classes["contactme-section__box"]}>
        <p className={classes["sub--title"]}>Get in touch</p>
        <h2>Contact Me</h2>
        <p className="text-lg">
          For web development assistance, please fill out the form to contact
          me.
        </p>
      </div>
      <form action="" className={classes["contactme-section__form"]}>
        <div className={classes["contactme-section__form-container"]}>
          <label
            htmlFor="first-name"
            className={classes["contactme-section__form-label"]}
          >
            <span className="text-md">First Name</span>
            <input
              type="text"
              className={`text-md ${classes["contactme-section__form-input"]}`}
              name="first-name"
              id="first-name"
              required
            />
          </label>
          <label
            htmlFor="last-name"
            className={classes["contactme-section__form-label"]}
          >
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className={`text-md ${classes["contactme-section__form-input"]}`}
              name="last-name"
              id="last-name"
              required
            />
          </label>
          <label
            htmlFor="email-address"
            className={classes["contactme-section__form-label"]}
          >
            <span className="text-md">Email Address</span>
            <input
              type="text"
              className={`text-md ${classes["contactme-section__form-input"]}`}
              name="email-Address"
              id="Emaill-Address"
              required
            />
          </label>
          <label
            htmlFor="phone-number"
            className={classes["contactme-section__form-label"]}
          >
            <span className="text-md">Phone Number</span>
            <input
              type="text"
              className={`text-md ${classes["contactme-section__form-input"]}`}
              name="phone-number"
              id="phone-number"
              required
            />
          </label>
        </div>
        <label
          htmlFor="choose-topic"
          className={classes["contactme-section__form-label"]}
        >
          <span className="text-md">Choose a Topic</span>
          <select
            id="choose-topic"
            className={`text-md ${classes["contactme-section__form-input"]}`}
          >
            <option>Select One...</option>
            <option>Item 1</option>
            <option>Item 2</option>
            <option>Item 3</option>
          </select>
        </label>
        <label
          htmlFor="messasge"
          className={classes["contactme-section__form-label"]}
        >
          <span className="text-md">Message</span>
          <textarea
            type="text"
            className={`text-md ${classes["contactme-section__form-input"]}`}
            id="phone-number"
            rows="8"
            placeholder="Type your message"
          />
        </label>
        <label
          htmlFor="checkbox"
          className={classes["contactme-section__form-checkbox"]}
        >
          <input
            type="checkbox"
            className={`text-md ${classes["contactme-section__form-input"]}`}
            name="checkbox"
            id="checkbox"
            required
          />
          <span className="text-md">I accept the terms</span>
        </label>
        <div>
          <Button>Submit</Button>
        </div>
      </form>
    </section>
  );
}
