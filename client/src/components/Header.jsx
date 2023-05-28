import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";
import Nav from "./Nav";

function Header() {
  return (
    <header className={`${classes.header} ${classes.sticky}`}>
      <NavLink className={classes.logoLink} to="/">
        <div className={classes.logoContainer}>
          <div className={classes.BCHLogo}></div>
        </div>
      </NavLink>
      <Nav />
    </header>
  );
}

export default Header;
