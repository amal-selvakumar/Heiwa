import './HowItWorks.css';
import howItWorksImage from '../Images/HowItWorksImage.svg';

export default function HowItWorks() {
  return (
    <div className='howItWorks'>
      <div className='workContainer'>
         <div className='howItWorksTitle'>
            <span>HOW IT WORKS</span>
         </div>

         <div className='howItWorksBottomDiv'>
            <div className='howItWorksTopContent'>
              <div className='worksTopFirstContent'>
                <span>Submit your questionnaire, and our team will guide you through the process, ensuring everything is in order for your convenience.</span>
              </div>

              <div className='workTopSecondContent'>
                <span>We effortlessly handles the visa process for your trip, and we ensures smoother travel arrangements.</span>
              </div>

              <div className='workTopThirdContent'>
                <span>Handles services upon your return, ensuring ongoing support for your well-being journey.</span>
              </div>
            </div>

            <div className='howItWorksImageDiv'>
              <img src={howItWorksImage} alt='howItWorksImage'/>
            </div>

            <div className='howItWorksBottomContent'>
               <div className='worksBottomFirstContent'>
                 <span>Reach out to us to discuss your needs and preferences  with our team.</span>
               </div>

               <div className='worksBottomSecondContent'>
                <span>A Pre-Consultation Call to discuss your wellness goals and preferences with specialists. </span>
               </div>

               <div className='worksBottomThirdContent'>
                <span>Upon your arrival, our dedicated team will be your hosts, ensuring a seamless experience throughout your stay.</span>
               </div>
            </div>
         </div>
      </div>
    </div>
  )
}
