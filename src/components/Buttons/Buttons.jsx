import React from 'react';
import "./Buttons.css";

const Buttons = ({ size, text }) => {
  return (
    <div>
      <Button size={size}>{text}</Button>
    </div>
  );
};

// Button component with size and text props
const Button = ({ size, children, ...props }) => (
  <button className={`button-${size} button-common` } {...props}>
    {children}
  </button>
);

export default Buttons;
