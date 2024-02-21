import React from "react";
import { Link } from "react-router-dom";
import Buttons from "../Buttons/Buttons";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <footer>
        {/* Join Our Newsletter */}
        <div className="join-our-newsletter">
          <h3>JOIN OUR NEWSLETTER</h3>
          <div className="input-button-combo">
            <input
              className="email-address-input"
              placeholder="Email Address"
            ></input>
            <Buttons size="medium" text="SUBSCRIBE" />
          </div>
        </div>

        {/* 4 sections here */}
        <div className="footer-sections-container">
          <div className="footer-section-1">
            <h4>HEIWA</h4>
            <p>
              Lorem ipsum dolor sit amet, eum modus ludus efficiendi ad, in sea
              ceteros postulant imperdiet, mel ei harum appellantur
              disputationi.
            </p>
            <Buttons size="medium" text="BOOK NOW" />
          </div>

          <div className="footer-section-2">
            <h4>IMPORTANT LINKS</h4>
            <Link to="/about">
              <p>About Us</p>
            </Link>
            <Link to="/about">
              <p>Book Online</p>
            </Link>
            <Link to="/about">
              <p>Select Stay</p>
            </Link>
          </div>

          <div className="footer-section-3">
            <h4>FIND US AT</h4>
            <p>Heiwa Wellness, Trivandrum</p>
            <p>heiwa@wellness.com</p>
            <p>Phone: +351 258 548</p>
          </div>

          <div className="footer-section-4">
            <h4>FIND US AT</h4>
            <p>Heiwa Wellness, Trivandrum</p>
            <p>heiwa@wellness.com</p>
            <p>Phone: +351 258 548</p>
          </div>

        </div>

        {/* Copyrights */}
        <div className="copyrights-container">
          <hr className="divider" />
          <p>©Heiwa Tourism & Wellness center, All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
