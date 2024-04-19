import classes from "./Footer.module.css";
import { Link } from "react-scroll";
import logo from "../../assets/logo.svg";

export default function Footer() {
  return (
    <section className={classes["footer-section"]} id="FooterSection">
      <div className={classes["footer__link-container"]}>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className={classes["footer__link-items"]}>
          <ul>
            <li>
                <Link activeClass={classes["navbar__content--active"]}></Link>
            </li>
            <li>
              <Link></Link>
            </li>
            <li>
              <Link></Link>
            </li>
            <li>
              <Link></Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
