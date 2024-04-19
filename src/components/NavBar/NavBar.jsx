import Button from "../Button/Button";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import classes from "./NavBar.module.css";
import logo from "../../assets/logo.svg";

export default function Navbar() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const resizeHandle = () => {
      if (window.innerWidth <= 500) {
        closeMenu;
      }
    };

    window.addEventListener("resize", resizeHandle);

    return () => {
      window.removeEventListener("resize", resizeHandle);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu;
    }
  }, []);

  return (
    <nav className={`${classes.navbar} ${navActive ? classes.ative : ""}`}>
      <div>
        <img src={logo} alt="Logo" />
      </div>
      <a
        className={`${classes.nav__hamburger} ${
          navActive ? classes.active : ""
        } `}
      >
        <span className={classes["nav__hamburger--line"]}></span>
        <span className={`${classes["nav__hamburger--line"]}`}></span>
        <span className={`${classes["nav__hamburger--line"]}`}></span>
      </a>

      {/* <div className={`navbar__items ${navActive ? "active" : ""}`}> */}
      <div
        className={`${classes.navbar__items} ${
          navActive ? classes.active : ""
        }`}
      >
        <ul>
          <li>
            <Link
              onClick={closeMenu}
              activeClass={classes["navbar__content-active"]}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="heroSection"
              className={classes.navbar__content}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass={classes["navbar__content-active"]}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="MyPortfolio"
              className={classes.navbar__content}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass={classes["navbar__content-active"]}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="AboutMe"
              className={classes.navbar__content}
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass={classes["navbar__content-active"]}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="Achievements"
              className={classes.navbar__content}
            >
              Achievements
            </Link>
          </li>
        </ul>
      </div>

      <Link
        onClick={closeMenu}
        activeClass={classes["navbar-active__content"]}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        to="ContactMe"
        className={classes.navbar__content}
      >
        <Button className="btn-outline-primary"> Contact Me</Button>
      </Link>
    </nav>
  );
}
