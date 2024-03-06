import React from "react";
import { Link, NavLink } from "react-router-dom";
import heiwaLogo from "../../assets/logoHeiwa.svg";
import "../../index.css";
import Buttons from "../Buttons/Buttons";
import "./Navbar.css";

function Navbar() {

  return (
    <nav className="navbar-container">
      <div className="nav-logo">
        <Link to="/">
          <img src={heiwaLogo} alt="Logo" aria-label="logo"></img>
        </Link>
      </div>
      <ul className="navlinks">
        <li>
          <NavLink className="colour" to="/">
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink className="colour" to="/about">
            ABOUT US
          </NavLink>
        </li>
        <li>
          <NavLink className="colour" to="/">
            OUR SERVICES
          </NavLink>
        </li>
        <li>
          <Link to="/contact">
            <Buttons size="medium" text="CONTACT US" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
