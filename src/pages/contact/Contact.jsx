import React, { useState } from "react";
import contactLeft from "../../assets/contact/contact-left.png";
import Buttons from "../../components/Buttons/Buttons";
import { contactDetails } from "../../components/Constants";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import WhatsappPopup from "../../components/WhatsappPopup/WhatsappPopup";
import "./Contact.css";

function AnimatedInput({ label }) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    if (!value) {
      setFocused(false);
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={`animated-input ${focused ? "focused" : ""}`}>
      <label className={`label ${focused || value ? "active" : ""}`}>
        {label}
      </label>
      <input
        type="text"
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        value={value}
      />
    </div>
  );
}

function AnimatedTextArea({ label }) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    if (!value) {
      setFocused(false);
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={`animated-input ${focused ? "focused" : ""}`}>
      <label className={`label ${focused || value ? "active" : ""}`}>
        {label}
      </label>
      <textarea
        type="text"
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        value={value}
      />
      {/* {focused && !value && <span className="placeholder">{placeholder}</span>} */}
    </div>
  );
}

function Contact() {
  return (
    <div>
      <Navbar />

      <WhatsappPopup />

      <section className="contact-form-section">
        <div className="image-form-combo">
          <div className="contact-left-image">
            <img src={contactLeft} alt="Contact Form Left" />
          </div>
          <div className="contact-right-form">
            <h3>Get in touch</h3>
            <form className="contact-form">
              {/* <div className="form-grid"> */}
              <div className="form-grid input-group">
                <AnimatedInput
                  label="First Name"
                  // placeholder="Enter your first name"
                />
                <AnimatedInput
                  label="Last Name"
                  // placeholder="Enter your last name"
                />
                <AnimatedInput
                  label="Email"
                  // placeholder="Enter your email"
                />
                <AnimatedInput
                  label="Phone Number"
                  // placeholder="Enter your phone number"
                />
              </div>
              {/* </div> */}

              <div className="input-group message-input">
                {/* <label htmlFor="message">Message:</label>
                  <textarea id="message" name="message" rows="6" /> */}
                <AnimatedTextArea
                  label="Your Message"
                  // placeholder="Enter your message"
                ></AnimatedTextArea>
              </div>

              <div className="submit-button-wrapper">
                <Buttons text="SUBMIT" size="medium"></Buttons>
                <p>Leave us a message... We will get back to you shortly</p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* CONTACT DETAILS AND SOCIAL MEDIA SECTION */}
      <section className="contact-and-social-media-section">
        <div className="contact-social-media-combo">
          <div className="contact-details-container">
            {contactDetails.map((contactDetail) => (
              <div className="contact-detail">
                <img
                  src={contactDetail.svgIcon}
                  alt={`${contactDetail.title} svg`}
                />
                <p>{contactDetail.detail}</p>
              </div>
            ))}
          </div>
          <div className="social-media-container">
            <p>Follow us on</p>
            <div className="social-media-icons">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="../../assets/contact/facebook-brown.svg"
                  alt="Facebook icon"
                />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noreferrer"
              >
                <img src="../../assets/contact/x-brown.svg" alt="X icon" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="../../assets/contact/insta-brown.svg"
                  alt="Insta icon"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SELECTION SECTION */}
      <section className="contact-selection-section">
        <h5>HAVE A QUESTION?</h5>
        <h3>Talk to Us</h3>
        <p>How should we contact you?</p>

        <div className="phone-or-email-container">
          <div className="phone-or-email-select" id="phone-select">
            <img
              src="../../assets/contact/phone-select.svg"
              alt="Phone Select"
            />
            <span className="select-text">Phone</span>
          </div>
          <div className="phone-or-email-select" id="email-select">
            <img
              src="../../assets/contact/email-select.svg"
              alt="Email Select"
            />
            <span className="select-text">Email</span>
          </div>
        </div>
      </section>
      <section className="selected-contact-form-section">
        <form className="selected-contact-form">
          <div className="label-input-combo">
            <label htmlFor="name">YOUR FULL NAME</label>
            <input type="text" name="name" required />
            <br />
          </div>
          <div className="label-input-combo">
            <label htmlFor="name">YOUR MOBILE NUMBER</label>
            <input type="text" name="name" required />
            <br />
          </div>
          <div className="label-input-combo">
            <label htmlFor="name">CITY</label>
            <input type="text" name="name" required />
            <br />
          </div>
          <div className="label-input-combo">
            <label htmlFor="name">COUNTRY</label>
            <input type="text" name="name" required />
            <br />
          </div>
          <div className="label-input-combo">
            <label htmlFor="name">YOUR TIME ZONE</label>
            <input type="time" name="name" required />
            <br />
          </div>
          <div className="label-input-combo">
            <label htmlFor="name">PREFERRED DATE AND TIME</label>
            <input type="datetime-local" name="name" required />
            <br />
          </div>
          <div className="submit-button-wrapper">
            <button className="selected-contact-form-submit-button" type="s">SUBMIT</button>
          </div>
        </form>
      </section>

      <Footer />
    </div>
  );
}

export default Contact;
