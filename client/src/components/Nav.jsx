import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Nav.module.css";

function Nav() {
  return (
    <nav className={classes.nav}>
      <ul>
        <NavLink to="seminars">
          <li>Seminars</li>
        </NavLink>
        <NavLink to="FAQ">
          <li>FAQ</li>
        </NavLink>
        <NavLink to="login">
          <li>Log In</li>
        </NavLink>
        <NavLink to="signup">
          <li>Sign Up</li>
        </NavLink>
      </ul>
    </nav>
  );
}
export default Nav;