import React from "react";
import whatsappPopup from "../../assets/whatsapp-popup.png";
import './WhatsappPopup.css';

function WhatsappPopup() {
  return (
    <a href="/contact">
      <div className="whatsapp-popup-container">
        <div className="whatsapp-popup-image">
          <img src={whatsappPopup} alt="whatsapp-popup"></img>
        </div>
      </div>
    </a>
  );
}

export default WhatsappPopup;
