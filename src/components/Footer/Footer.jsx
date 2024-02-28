import React from "react";
import { Link } from "react-router-dom";
import Facebook from "../../assets/footer/facebook-svg.svg";
import footerLogo from "../../assets/footer/footerLogo.svg";
import Insta from "../../assets/footer/insta-svg.svg";
import Linkedin from "../../assets/footer/linkedin-svg.svg";
import WhatsApp from "../../assets/footer/whatsapp-svg.svg";
import Xtwitter from "../../assets/footer/x-svg.svg";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="social-media-images">
          <Link to="/about">
            <img src={WhatsApp} alt="WhatsApp svg"></img>
          </Link>
          <Link to="/about">
            <img src={Xtwitter} alt="Xtwitter svg"></img>
          </Link>
          <Link to="/about">
            <img src={Insta} alt="Insta svg"></img>
          </Link>
          <Link to="/about">
            <img src={Facebook} alt="Facebook svg"></img>
          </Link>
          <Link to="/about">
            <img src={Linkedin} alt="LinkedIn svg"></img>
          </Link>
        </div>
        <a href="mailto:heiwa.wellness@gmail.com">
          <p className="black company-email">heiwa.wellness@gmail.com</p>
        </a>
        <div className="important-links">
          <Link to="/">
            <p>Home</p>
          </Link>
          <Link to="/about">
            <p>About</p>
          </Link>
          <Link to="/">
            <p>Our Services</p>
          </Link>
        </div>
        <div className="footer-logo">
          <Link to={"/"}>
            <img src={footerLogo} alt="footerLogo"></img>
          </Link>
        </div>
        <p className="black copyrights">
          ©Heiwa Tourism & Wellness center, All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
