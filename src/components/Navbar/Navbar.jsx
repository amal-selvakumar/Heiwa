import React from "react";
import { Link } from "react-router-dom";
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
          <Link className="colour" to="/">
            HOME
          </Link>
        </li>
        <li>
          <Link className="colour" to="/about">
            ABOUT US
          </Link>
        </li>
        <li>
          <Link className="colour" to="/">
            OUR SERVICES
          </Link>
        </li>
        <li>
          <Link to="/">
            <Buttons size="medium" text="BOOK NOW" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
