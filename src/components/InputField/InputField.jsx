import React, { useState } from "react";
import classes from "./InputField.module.css";
import {
  validateName,
  validatePhoneNumber,
  validateEmail,
} from "../../utils/utility";

export default function InputFiled({ label, id, type }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  function handleChange(event) {
    setValue(event.target.value);
    validateInput(event.target.value);
  }

  function handleBlur(event) {
    const { value } = event.target;
    validateInput(value);
  }

  function validateInput(value) {
    let isValid = false;
    switch (type) {
      case "text":
        isValid = validateName(value);
        break;
      case "email":
        isValid = validateEmail(value);
        break;
      case "tel":
        isValid = validatePhoneNumber(value);
        break;
      default:
        isValid = true;
    }
    setError(isValid ? "" : "Please enter validate value");
  }

  return (
    <label htmlFor={id} className={classes["contactme-section__form-label"]}>
      <span className="text-md">{label}</span>
      <input
        type={type}
        className={`text-md ${classes["contactme-section__form-input"]}`}
        name={id}
        id={id}
        onChange={handleChange}
        onBlur={handleBlur}
        required
      />
      {error && (
        <p className={classes["contactme-section__form-error"]}>{error}</p>
      )}
    </label>
  );
}
