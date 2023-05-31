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
        <NavLink to="Log in">
          <li>Log In</li>
        </NavLink>
      </ul>
    </nav>
  );
}
export default Nav;