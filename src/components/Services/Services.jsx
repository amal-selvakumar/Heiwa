import React from "react";
import { Link } from "react-router-dom";
import { services } from "../Constants";
import ServiceCard from "./ServiceCard";


const Services = () => {
  return (
    <div className="services-container">
      {services.map((service, index) => (
        <Link to={service.path} key={index}>
          <ServiceCard
            image={service.image}
            title={service.title}
          />
        </Link>
      ))}
    </div>
  );
};

export default Services;
