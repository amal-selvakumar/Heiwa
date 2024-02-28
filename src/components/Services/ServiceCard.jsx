import React from "react";

const ServiceCard = ({ image, title }) => {
  return (
    <div className="service-card">
      <img src={image} alt={`${title} service card`}></img>
      <h5>{title}</h5>
    </div>
  );
};

export default ServiceCard;