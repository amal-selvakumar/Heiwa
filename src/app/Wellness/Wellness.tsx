import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './Wellness.css';
import wellnessData from './Wellness.json';
import whatsappIcon from '../Images/WhatsappIcon.svg';
import { NavLink } from 'react-router-dom';
import Questions from '../Questions/Questions';

type WellnessData={
  imageUrl?:string;
  content?:string;
  path?:string;
}


export default function Wellness() {
  return (
    <div className='wellness'>
      <div className='wellnessContainer'>
        <Navbar/>
        <div className='wellnessBottomContainer'>
        <div className='wellnessTitle'>
          <span>OUR WELLNESS PACKAGES</span>
        </div>

        <div className='whatsappIconContainer'>
              <img src={whatsappIcon} alt='whatsappIcon'/>
             </div>
        
        <div className='wellnessIconsContainer'>
           {wellnessData.map((data:WellnessData)=>(
            <div className='iconContainer'>
              <NavLink to={data.path}>
              <div className='iconImage'>
                <img src={data?.imageUrl}/>
              </div>

              <div className='iconTitle'>
                <span>{data.content}</span>
              </div>
              </NavLink>
            </div>
           ))}
        </div>
        </div>

        <div className='questionsDiv'>
          <Questions/>
        </div>

        <div className='footerContainer'>
          <Footer/>
        </div>

      </div>
    </div>
  )
}
