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
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div>
        <img src={logo} alt="Logo" />
      </div>
      <a className={`nav__hamburger ${navActive ? "active" : ""} `}>
        <span className="nav__hamburger--line"></span>
        <span className="nav__hamburger--line"></span>
        <span className="nav__hamburger--line"></span>
      </a>
      <div className={`navbar__items ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar-active__content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="heroSection"
              className="navbar__content"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar-active__content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="MyPortfolio"
              className="navbar__content"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar-active__content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="AboutMe"
              className="navbar__content"
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar-active__content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="Testimonals"
              className="navbar__content"
            >
              Testimonals
            </Link>
          </li>
        </ul>
      </div>
      <Button>
        <Link
          onClick={closeMenu}
          activeClass="navbar-active__content"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          to="Contact"
          className="navbar__content"
        >
          Contact Me
        </Link>
      </Button>
    </nav>
  );
}
