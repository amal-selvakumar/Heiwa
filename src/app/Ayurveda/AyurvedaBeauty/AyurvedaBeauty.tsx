import AyurvedaTemplate2 from '../AyurvedaTemplate/AyurvedaTemplate2';
import './AyurvedaBeauty.css';
import ayurvedaBeautyData from './AyurvedaBeauty.json';
import flowerIcon from '../../../../public/Images/FlowerIcon.svg';

export default function AyurvedaBeauty() {

    const backgroundImages = {
        backgroundImage: `url('../../../../public/Images/AyurvedaMassageVector.svg'), url('../../../../public/Images/AyurvedaBeautyVector.svg')`,
        backgroundPosition: 'right center , center'
    };
    
    const contenWidth={
        width:'58.328vw'
    }

  return (
    <div className='ayurvedaBeauty'>
      <AyurvedaTemplate2 data={ayurvedaBeautyData} backgroundImages={backgroundImages} title='AYURVEDA BEAUTY AND SKIN REJUVENATION'contentWidth={contenWidth} secondTitle='PACKAGE INCLUSIONS'>
        <div className='packageInclusionDiv'>
            <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Initial skin analysis and testing</span>
            </div>

            <span>|</span>

            <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Ayurvedic Facial rejuvenation therapy </span>
            </div>

            <span>|</span>

            <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Stress Reduction Massage </span>
            </div>
            
            <span>|</span>

            <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Facial workouts</span>
            </div>
        </div>
        
        <div className='packageInclusionDiv'>
        <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Body wraps</span>
            </div>

            <span>|</span>

            <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Body scrub</span>
            </div>

            <span>|</span>

            <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Foot massage</span>
            </div>
            
            <span>|</span>

            <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Sauna, Steam, or Hammam</span>
            </div>

            <span>|</span>

            <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Relaxation Techniques</span>
            </div>
        </div>

        <div className='packageInclusionDiv'>
        <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Cutting-edge aesthetic medicine for permanent removal of skin defects</span>
            </div>
        </div>
      </AyurvedaTemplate2>
    </div>
  )
}
