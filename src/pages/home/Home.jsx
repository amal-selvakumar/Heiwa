
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Buttons from "../../components/Buttons/Buttons";
import Navbar from "../../components/Navbar/Navbar";
import "./Home.css";

const images1 = [
  require("../../assets/landing-images/1-houseboat-2031055_1920.jpg"),
  require("../../assets/landing-images/2-mountain-7073990_1920.jpg"),
  require("../../assets/landing-images/3-Rectangle 38.png"),
  require("../../assets/landing-images/4-stones--2040340_1920.jpg"),
];

const images2 = [
  require("../../assets/landing-images/4-stones--2040340_1920.jpg"),
  require("../../assets/landing-images/3-Rectangle 38.png"),
  require("../../assets/landing-images/2-mountain-7073990_1920.jpg"),
  require("../../assets/landing-images/1-houseboat-2031055_1920.jpg"),
];

const serviceCards = [
  {
    image: require("../../assets/service-cards/Rectangle 21.png"),
    name: "Ayurveda Retreat",
  },
  {
    image: require("../../assets/service-cards/Rectangle 22.png"),
    name: "Cultural Retreat",
  },
  {
    image: require("../../assets/service-cards/Rectangle 23.png"),
    name: "Culinary Retreat",
  },
  {
    image: require("../../assets/service-cards/Rectangle 24.png"),
    name: "Modern Beauty Retreat",
  },
  {
    image: require("../../assets/service-cards/Rectangle 21.png"),
    name: "Ayurveda Retreat",
  },
  {
    image: require("../../assets/service-cards/Rectangle 22.png"),
    name: "Cultural Retreat",
  },
  {
    image: require("../../assets/service-cards/Rectangle 23.png"),
    name: "Culinary Retreat",
  },
  {
    image: require("../../assets/service-cards/Rectangle 24.png"),
    name: "Modern Beauty Retreat",
  },
];

function Home() {
  const [activeWelcomeText, setActiveWelcomeText] = useState(1);

  const handleDotClick = (index) => {
    setActiveWelcomeText(index);
  };

  const [startIndex, setStartIndex] = useState(0); // Index of the first visible card

  // Function to handle click event for the previous button
  const handlePrevClick = () => {
    console.log("Previous.")
    setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  // Function to handle click event for the next button
  const handleNextClick = () => {
    console.log("Next.")
    setStartIndex((prevIndex) =>
      Math.min(prevIndex + 1, serviceCards.length - 4)
    );
  };

  return (
    <div>
      <Navbar />
      {/* WELCOME TEXT CAROUSEL */}
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="carousel-welcome-text-container">
              <div
                className="welcome-texts"
                style={{
                  transform: `translateX(-${(activeWelcomeText - 1) * 50}%)`,
                }}
              >
                <div className="welcome-text-1">
                  <h1>Welcome to Kerala Wellness Retreats</h1>
                  <p>
                    Discover serenity, healing, and rejuvenation amidst Kerala’s
                    lush landscapes. 🌿✨ <br /> Our holistic wellness experiences
                    blend ancient traditions with modern comfort, offering you a
                    transformative journey for mind, body, and soul. From
                    Ayurvedic therapies to yoga Kerala awaits to nurture your
                    well-being.
                  </p>
                </div>
                <div className="welcome-text-2">
                  <h1>Welcome to Tourism Wellness Centers</h1>
                  <p>
                    Discover serenity, healing, and rejuvenation amidst Kerala’s
                    lush landscapes. 🌿✨ <br /> Our holistic wellness experiences
                    blend ancient traditions with modern comfort, offering you a
                    transformative journey for mind, body, and soul. From
                    Ayurvedic therapies to yoga Kerala awaits to nurture your
                    well-being.
                  </p>
                </div>
              </div>
              <div className="carousel-dots">
                <span
                  className={`dot ${activeWelcomeText === 1 ? "active" : ""}`}
                  onClick={() => handleDotClick(1)}
                ></span>
                <span
                  className={`dot ${activeWelcomeText === 2 ? "active" : ""}`}
                  onClick={() => handleDotClick(2)}
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* IMAGE SLIDERS */}
      <div className="landing-images-container">
        <div className="landing-images-1">
          <div className="landing-images-slider slider1">
            {images1.map((image, index) => (
              <img key={index} className="" src={image} alt={`Pic ${index}`} />
            ))}
            {images1.map((image, index) => (
              <img key={index} className="" src={image} alt={`Pic ${index}`} />
            ))}
            {images1.map((image, index) => (
              <img key={index} className="" src={image} alt={`Pic ${index}`} />
            ))}
            {images1.map((image, index) => (
              <img key={index} className="" src={image} alt={`Pic ${index}`} />
            ))}
            {images1.map((image, index) => (
              <img key={index} className="" src={image} alt={`Pic ${index}`} />
            ))}
          </div>
        </div>
        <div className="landing-images-2">
          <div className="landing-images-slider slider2">
            {images2.map((image, index) => (
              <img key={index} className="" src={image} alt={`Pic ${index}`} />
            ))}
            {images2.map((image, index) => (
              <img key={index} className="" src={image} alt={`Pic ${index}`} />
            ))}
            {images2.map((image, index) => (
              <img key={index} className="" src={image} alt={`Pic ${index}`} />
            ))}
            {images2.map((image, index) => (
              <img key={index} className="" src={image} alt={`Pic ${index}`} />
            ))}
            {images2.map((image, index) => (
              <img key={index} className="" src={image} alt={`Pic ${index}`} />
            ))}
          </div>
        </div>
      </div>

      {/* OUR SERVICES SECTION */}

      <div className="text-section">
        <h2>TOURISM AND WELLNESS CENTER</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
          consectetur cupiditate possimus sunt perspiciatis, atque eos odit
          minima illum ipsum, expedita est alias. Veniam sequi quibusdam,
          consequatur enim in iusto!
        </p>
      </div>

      <div className="our-services-section">
        <h2>OUR SERVICES</h2>
        <div className="our-services-cards">
          <div className="prevButton" onClick={handlePrevClick}>
            <FontAwesomeIcon className="prev-next-buttons" icon={faAngleLeft} />
          </div>
          {serviceCards.slice(startIndex, startIndex + 4).map((card, index) => (
            <div className="service-card" key={index}>
              <img src={card.image} alt={card.name} />
              <h5>{card.name}</h5>
            </div>
          ))}
          <div className="nextButton" onClick={handleNextClick}>
            <FontAwesomeIcon className="prev-next-buttons" icon={faAngleRight} />
          </div>
        </div>
        <div className="centered-button">
          <Buttons size="medium" text="VIEW ALL SERVICES" />
        </div>
      </div>

      
    </div>
  );
}

export default Home;
