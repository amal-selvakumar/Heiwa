import './WhyChooseBoutiqueStays.css';
import checkMark from '../Images/CheckMark.svg';
import personalizedImg from '../Images/PersonalizedService.svg';
import wellnessImg from '../Images/Wellness.svg';

export default function WhyChooseBoutiqueStays() {
  return (
    <div className='whyChooseBoutiqueStays'>
      <div className='whyChooseBoutiqueStaysTitle'>
        <span>WHY CHOOSE BOUTIQUE STAYS</span>
      </div>

      <div className='whyChooseBoutiqueStaysContent'>
        
        <div className='authenticityDiv'>
         <div className='topDiv'>
           <div className='topImageDiv'>
            <img src={checkMark} alt='checkMark'/>
           </div>
         </div>

         <div className='bottomDiv'>
           <span className='bottomContentTitle'>Authenticity</span>
           <span className='bottomContent'>These stays are not mass-produced; they’re crafted with love and authenticity.</span>
         </div>
        </div>

        <div className='personalizedDiv'>
         <div className='topDiv'>
           <div className='topImageDiv'>
            <img src={personalizedImg} alt='checkMark'/>
           </div>
          </div>

          <div className='bottomDiv'>
           <span className='bottomContentTitle'>Personalized Service</span>
           <span className='bottomContent'>Expect personalized attention from hosts who treat you like family.</span>
          </div>
        </div>

        <div className='wellnessDiv'>
         <div className='topDiv'>
           <div className='topImageDiv'>
            <img src={wellnessImg} alt='checkMark'/>
           </div>
          </div>

          <div className='bottomDiv'>
           <span className='bottomContentTitle'>Wellness</span>
           <span className='bottomContent'>Whether it’s yoga by the river or meditation in a treehouse, these stays prioritize your well-being.</span>
          </div>
        </div>

      </div>
    </div>
  )
}
