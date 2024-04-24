import Button from "../../components/Button/Button";
import classes from "./ContactMe.module.css";
import inputFieldStyles from "../../components/InputField/InputField.module.css";
import InputFiled from "../../components/InputField/InputField";

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
          <InputFiled label="First Name" type="text" id="first-name" />
          <InputFiled label="Last Name" type="text" id="last-name" />
          <InputFiled label="Email Address" type="email" id="email-address" />
          <InputFiled label="Phone Number" type="tel" id="phone number" />
        </div>
        <label
          htmlFor="choose-topic"
          className={inputFieldStyles["contactme-section__form-label"]}
        >
          <span className="text-md">Choose a Topic</span>
          <select
            id="choose-topic"
            className={`text-md ${inputFieldStyles["contactme-section__form-input"]}`}
          >
            <option>Select One...</option>
            <option>Item 1</option>
            <option>Item 2</option>
            <option>Item 3</option>
          </select>
        </label>
        <label
          htmlFor="messasge"
          className={inputFieldStyles["contactme-section__form-label"]}
        >
          <span className="text-md">Message</span>
          <textarea
            type="text"
            className={`text-md ${inputFieldStyles["contactme-section__form-input"]}`}
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
            className={`text-md ${inputFieldStyles["contactme-section__form-input"]}`}
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
