import Button from "../Button/Button";
import { useState, useEffect } from "react";
import { Link } from "react-scoll";
import classes from "./NavBar.module.css";

export default function Navbar() {
  const [navActive, setNavActive] = useEffect(false);

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
        <img src="../../assets/logo.png" alt="Logo" />
      </div>
    </nav>
  );
}
