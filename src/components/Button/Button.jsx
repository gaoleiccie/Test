import classes from "./Button.module.css";

export default function Button({ className, children, ...props }) {
  const buttonPrimary = `${classes.btn} ${classes['btn-primary']}`;

  const buttonOutlinePrimary = `${classes.btn} ${classes['btn-outline-primary']}`;

  const buttonGithub = `${classes.btn} ${classes['btn-github']}`;

  let buttonClass;

  switch (className) {
    case "btn-outline-primary":
      buttonClass = buttonOutlinePrimary;
      break;
      case "btn-github":
          buttonClass = buttonGithub;
          break;
    default:
      buttonClass = buttonPrimary;
  }

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
}
