import AyurvedaTemplate2 from '../Ayurveda/AyurvedaTemplate/AyurvedaTemplate2';
import BookYourEscape from '../BookYourEscape/BookYourEscape';
import Template2 from '../WellnessTemplate/Template2';
import './WellnessRetreat.css';
import wellnessRetreatData from './WellnessRetreat.json';
import flowerIcon from '../../../public/Images/FlowerIcon.svg';

export default function WellnessRetreat() {

  const backgroundImages={
    backgroundImage:`url('/Images/WellnessRetreatBackground.svg')`
  }

    const contenWidth={
        width:'80.469vw'
    }

    const content = "62% of adults worldwide report lack of quality sleep as they would like to have. The global sleep economy is a multi-billion dollar industry. Sleep deprivation may not have a direct impact on your health but if prolonged it can lead to life-threatening diseases. Wellness resort programs are including effective sleep-enhancing packages, making guests’ experiences worthwhile.";

  return (
    <div className='wellnessRetreat'>
      <Template2 backgroundImages={backgroundImages} title='WELLNESS SLEEP RETREAT' content={content} contentWidth={contenWidth} secondTitle='PACKAGE INCLUSION'>
      <div className='packageInclusionDiv'>
            <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Sleep medicine consultation</span>
            </div>

            <span>|</span>

            <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Customized sleep routine planning</span>
            </div>

            <span>|</span>

            <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Meal planning to induce sleep</span>
            </div>
            
            <span>|</span>

            <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Guided mind-body programs</span>
            </div>
        </div>
        
        <div className='packageInclusionDiv'>
        <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Massage Therapy</span>
            </div>

            <span>|</span>

            <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Acupuncture</span>
            </div>

            <span>|</span>

            <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Sleep ritual baths</span>
            </div>
            
            <span>|</span>

            <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Specially designed sleep suites or sleep rooms</span>
            </div>
        </div>

        <div className='packageInclusionDiv'>
           <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Comprehensive sleep concierge service</span>
            </div>
        </div>
    
        <div className='bookYourEscapeContainer'>
          <BookYourEscape/>
        </div>
      </Template2>
    </div>
  )
}
