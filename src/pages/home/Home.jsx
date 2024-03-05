import React, { useEffect, useRef, useState } from "react";
import downApostrophes from "../../assets/down-apostrophes.svg";
import upApostrophes from "../../assets/up-apostrophes.svg";
import whatsappPopup from "../../assets/whatsapp-popup.png";
import workflow from "../../assets/workflow.svg";
import { heroImage1, whyUsCards } from "../../components/Constants";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Services from "../../components/Services/Services";
import "./Home.css";

function Home() {
  //  To make the image right in the center of the two divs
  const imgRef = useRef(null);

  useEffect(() => {
    const imgElement = imgRef.current;
    console.log("imgElement: ", imgElement);
    if (imgElement) {
      const imgWidth = imgElement.clientWidth;
      const divElement = imgElement.parentElement;
      const marginRightValue = (1.3 * imgWidth) / 2;
      divElement.style.marginRight = `-${marginRightValue}px`;
      console.log(imgWidth, divElement, marginRightValue);
    }
  }, []);

  const [activeWelcomeText, setActiveWelcomeText] = useState(1);

  const handleDotClick = (index) => {
    setActiveWelcomeText(index);
  };

  console.log(activeWelcomeText);

  return (
    <div>
      <Navbar />

      <a href="/about">
        <div className="whatsapp-popup-container">
          <div className="whatsapp-popup-image">
            <img src={whatsappPopup} alt="whatsapp-popup"></img>
          </div>
        </div>
      </a>

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-left">
          <div className="welcome-text-image-combo">
            <div className="welcome-texts-dots-combo">
              <div className="welcome-texts-container">
                <div
                  className={`welcome-text ${
                    activeWelcomeText === 1 ? "active-left" : "inactive-left"
                  }`}
                  id="welcome-text-1"
                >
                  <h3>Welcome to Kerala Wellness Retreats</h3>
                  <p>
                    Discover serenity, healing, and rejuvenation amidst Kerala’s
                    lush landscapes. 🌿✨ Our holistic wellness experiences
                    blend ancient traditions with modern comfort, offering you a
                    transformative journey for mind, body, and soul. From
                    Ayurvedic therapies to yoga Kerala awaits to nurture your
                    well-being.
                  </p>
                </div>
                <div
                  className={`welcome-text ${
                    activeWelcomeText === 2 ? "active-right" : "inactive-right"
                  }`}
                  id="welcome-text-2"
                >
                  <h3>Welcome to Tourism and Wellness</h3>
                  <p>
                    Discover serenity, healing, and rejuvenation amidst Kerala’s
                    lush landscapes. 🌿✨ Our holistic wellness experiences
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

            <div className="hero-image">
              <img src={heroImage1} ref={imgRef} alt="Welcome" />
            </div>
          </div>
        </div>
        <div className="hero-right"></div>
      </section>

      {/* OUR SERVICES SECTION */}
      <section className="text-section">
        <h2>TOURISM AND WELLNESS CENTER</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
          consectetur cupiditate possimus sunt perspiciatis, atque eos odit
          minima illum ipsum, expedita est alias. Veniam sequi quibusdam,
          consequatur enim in iusto!
        </p>
      </section>

      <section className="our-services-section">
        <h2>OUR SERVICES</h2>
        <Services />
      </section>

      {/* Combo is made for common background image */}
      <div className="works-mission-sections-combo">
        {/* HOW IT WORKS SECTION */}

        <section className="how-it-works-section">
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
        </section>

        {/* MISSION-VISION SECTION */}

        <section className="mission-vision-section">
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
        </section>
      </div>

      {/* WHY US SECTION */}
      <section className="why-us-section">
        <h2>WHY US</h2>
        <p>
          Kerala, a global wellness hub, seamlessly blends authentic Ayurveda
          with serene landscapes, offering a transformative escape for those
          seeking holistic well-being.The state seamlessly integrates
          traditional practices with natural beauty, offering a unique haven for
          those seeking true wellness.
        </p>
        <div className="why-us-cards">
          {whyUsCards.map((whyUsCard, index) => (
            <div className="why-us-card">
              <img
                src={whyUsCard.image}
                alt={`${whyUsCard.title} service card`}
              ></img>
              <p className="black">{whyUsCard.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
