import React from "react";
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const services = [
    {
      image: '../../assets/down-apostrophes.svg',
      title: "WELLNESS PACKAGES",
      path: "/about",
    },
    {
      image: "../../assets/service-cards/Rectangle 22.png",
      title: "RETREAT LIVING",
      path: "/about",
    },
    {
      image: "../../assets/service-cards/Rectangle 23.png",
      title: "CONSULTATION PACKAGES",
      path: "/about",
    },
  ];

  return (
    <div className="services-container">
      {services.map((service, index) => (
        <Link to={service.path} key={index}>
          <ServiceCard
            image={service.image} // Pass service.image instead of just image
            title={service.title} // Pass service.title instead of just title
          />
        </Link>
      ))}
    </div>
  );
};

export default Services;
