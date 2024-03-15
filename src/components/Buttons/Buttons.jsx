import React from "react";
import "./Buttons.css";

const Buttons = ({ size, text }) => {
  return <button className={`button-${size} button-common`}>{text}</button>;
};

export default Buttons;
