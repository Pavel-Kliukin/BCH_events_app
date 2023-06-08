import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./HeaderLoginAndSignUp.module.css";

function HeaderLoginAndSignUp() {
  return (
    <header className={`${classes.header} ${classes.sticky}`}>
      <NavLink className={classes.logoLink} to="/">
        <div className={classes.logoContainer}>
          <div className={classes.BCHLogo}></div>
        </div>
      </NavLink>
    </header>
  );
}

export default HeaderLoginAndSignUp;
