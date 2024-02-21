import React from "react";
import "./Buttons.css";

const Buttons = ({ size, text }) => {
  return (
    <div>
      <button className={`button-${size} button-common`}>{text}</button>
    </div>
  );
};

export default Buttons;
