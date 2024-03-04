import React from "react";
import "./Services.css";

const ServiceCard = ({ image, title }) => {
  return (
    <div className="service-card-wrapper">
      <div className="service-card">
        <span className="service-card-arch"></span>
        <div className="service-card-image">
          <img src={image} alt={`${title} service card`}></img>
        </div>
        <h5 className="black">{title}</h5>
      </div>
    </div>
  );
};

export default ServiceCard;
