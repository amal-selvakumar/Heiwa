import Navbar from '../Navbar/Navbar';
import './Home.css';
import heiwaHomeLogo from '../Images/HeiwaHomeLogo.svg';
import homeImg from '../Images/HomeImage.svg';
import whatsappIcon from '../Images/WhatsappIcon.svg';
import ellipse from '../Images/Ellipse 12.svg';
import Services from '../Services/Services';
import HowItWorks from '../HowItWorks/HowItWorks';
import About from '../About/About';
import Footer from '../Footer/Footer';

export default function Home() {
  return (
    <div className='home'>
      <div className='homeContainer'>
        <Navbar/>
        <div className='homeBottomContainer'>
          <div className='homeBottomLeftContainer'>
            <div className='heiwaHomeLogoContainer'>
              <img src={heiwaHomeLogo} alt='heiwaHomeLogo'/>
            </div>

            <div className='homeContent'>
              <div className='homeTitle'>
                <span>Welcome to India Wellness Retreats</span>
              </div>

              <div className='homeDescription'>
                <span>Discover serenity, healing, and rejuvenation amidst Kerala’s lush landscapes. 🌿✨
                 Our holistic wellness experiences blend ancient traditions with modern comfort, offering you a transformative journey for mind, body, and soul. From Ayurvedic therapies to yoga Kerala awaits to nurture your well-being.
                 </span>
              </div>

              <div className='changeContentDiv'>
                 <img src={ellipse} alt='ellipse'/>
                 <img src={ellipse} alt='ellipse'/>
              </div>
            </div>
          </div>

          <div className='homeBottomRightContainer'>
             <div className='homeContainerImage'>
              <img src={homeImg} alt='homeImg'/>
             </div>

             <div className='whatsappIconContainer'>
              <img src={whatsappIcon} alt='whatsappIcon'/>
             </div>
          </div>
        </div>

        <div className='servicesContainer'>
            <Services/>
        </div>

        <div className='howItWorksContainer'>
          <HowItWorks/>
        </div>

        <div className='aboutContainer'>
          <About/>
        </div>

        <div className='whyUsContainer'>

        </div>

        <div className='footerContainer'>
          <Footer/>
        </div>
      </div>
    </div>
  )
}
