import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import heiwaLogo from "../../assets/logoHeiwa.svg";
import "../../index.css";
import Buttons from "../Buttons/Buttons";
import "./Navbar.css";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
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
        <li className="navlink-with-dropdown" onClick={toggleDropdown}>
          <NavLink className="colour">
            OUR SERVICES
          </NavLink>
          <FontAwesomeIcon
            icon={faAngleDown}
            className={`colour down-icon ${
              isDropdownOpen ? "rotate-down" : ""
            }`}
          />
          {isDropdownOpen && (
            <ul className="navlinks-dropdown">
              <li>
                <NavLink className="colour" to="/">
                  WELLNESS PACKAGES
                </NavLink>
              </li>
              <li>
                <NavLink className="colour" to="/">
                  STAY PACKAGES
                </NavLink>
              </li>
              <li>
                <NavLink className="colour" to="/">
                  CONSULTATION PACKAGES
                </NavLink>
              </li>
            </ul>
          )}
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