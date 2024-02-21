import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import downApostrophes from "../../assets/down-apostrophes.svg";
import upApostrophes from "../../assets/up-apostrophes.svg";
import workflow from "../../assets/workflow.svg";
import Buttons from "../../components/Buttons/Buttons";
import { images1, images2, serviceCards } from "../../components/Constants";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./Home.css";

function Home() {
  const [activeWelcomeText, setActiveWelcomeText] = useState(1);

  const handleDotClick = (index) => {
    setActiveWelcomeText(index);
  };

  const [startIndex, setStartIndex] = useState(0); // Index of the first visible card

  // Function to handle click event for the previous button
  const handlePrevClick = () => {
    console.log("Previous.");
    setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  // Function to handle click event for the next button
  const handleNextClick = () => {
    console.log("Next.");
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
                    lush landscapes. 🌿✨ <br /> Our holistic wellness
                    experiences blend ancient traditions with modern comfort,
                    offering you a transformative journey for mind, body, and
                    soul. From Ayurvedic therapies to yoga Kerala awaits to
                    nurture your well-being.
                  </p>
                </div>
                <div className="welcome-text-2">
                  <h1>Welcome to Tourism Wellness Centers</h1>
                  <p>
                    Discover serenity, healing, and rejuvenation amidst Kerala’s
                    lush landscapes. 🌿✨ <br /> Our holistic wellness
                    experiences blend ancient traditions with modern comfort,
                    offering you a transformative journey for mind, body, and
                    soul. From Ayurvedic therapies to yoga Kerala awaits to
                    nurture your well-being.
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
            <FontAwesomeIcon
              className="prev-next-buttons"
              icon={faAngleRight}
            />
          </div>
        </div>
        <div className="centered-button">
          <Buttons size="medium" text="VIEW ALL SERVICES" />
        </div>
      </div>

      {/* Combo is made for common background image */}
      <div className="works-mission-sections-combo">
        {/* HOW IT WORKS SECTION */}

        <div className="how-it-works-section">
          <h2>HOW IT WORKS</h2>
          <div className="how-it-works">
            <div className="upper-text-container">
              <p>
                Submit your questionnaire, and our team will guide you through
                the process, ensuring everything is in order for your
                convenience.
              </p>
              <p>
                A Pre-Consultation Call to discuss your wellness goals and
                preferences.
              </p>
              <p>
                Handles services upon your return, ensuring ongoing support for
                your well-being journey.
              </p>
            </div>
            <div className="work-flow-image">
              <img src={workflow} alt="Work Flow" />
            </div>
            <div className="lower-text-container">
              <p>
                Reach out to us to discuss your needs & preferences with our
                team.
              </p>
              <p>
                We effortlessly handle the visa process for your trip, and we
                ensures smoother travel arrangements.
              </p>
              <p>
                Upon your arrival in India, our dedicated team will be your
                hosts, ensuring a seamless and stress-free experience by
                attending to your needs and preferences throughout your stay.
              </p>
            </div>
          </div>
        </div>

        {/* MISSION-VISION SECTION */}

        <div className="mission-vision-section">
          <div className="mission-vision-cards">
            <div className="mission-card">
              <div className="down-apostrophes">
                <img src={downApostrophes} alt="downApostrophes"></img>
              </div>
              <div className="mission-vision-text">
                <p>
                  Empowering individuals to achieve holistic well-being through
                  personalized, world-class healthcare and wellness solutions.
                </p>
              </div>
              <div className="up-apostrophes">
                <img src={upApostrophes} alt="upApostrophes"></img>
              </div>
              <div className="mission-vision-heading">
                <h4>OUR MISSION</h4>
              </div>
            </div>
            <div className="vision-card">
              <div className="down-apostrophes">
                <img src={downApostrophes} alt="downApostrophes"></img>
              </div>
              <div className="mission-vision-text">
                <p>
                  To become Kerala and India’s premier wellness tourism
                  facilitator. To craft transformative, holistic experiences for
                  global wellness seekers.
                </p>
              </div>
              <div className="up-apostrophes">
                <img src={upApostrophes} alt="upApostrophes"></img>
              </div>
              <div className="mission-vision-heading">
                <h4>OUR VISION</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WHY US SECTION */}
      <div className="why-us-section">
        <h2>WHY US</h2>
        <p>
        Kerala, a global wellness hub, seamlessly blends authentic Ayurveda with serene landscapes, offering a transformative escape for those seeking holistic well-being.The state seamlessly integrates traditional practices with natural beauty, offering a unique haven for those seeking true wellness.
        </p>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
