import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./WellnessPackages.css";

function WellnessPackages() {
  return (
    <>
      <Navbar />
      <section className="wellness-packages-section">
        <h1>OUR WELLNESS PACKAGES</h1>
        <div className="wellness-packages-container">
          <div className="wellness-package-card">
            {services.map((service, index) => (
              <Link to={service.path} key={index}>
                <ServiceCard image={service.image} title={service.title} />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default WellnessPackages;
