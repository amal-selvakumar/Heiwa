import AyurvedaTemplate2 from '../AyurvedaTemplate/AyurvedaTemplate2';
import './AyurvedaWeightManagement.css';
import weightManagementData from './AyurvedaWeightManagement.json';
import flowerIcon from '../../../../public/Images/FlowerIcon.svg';

export default function AyurvedaWeightManagement() {

    const backgroundImages={
        backgroundImage:`url('../../../../public/Images/AyurvedaWeightManagementVector.svg'),url('../../../../public/Images/AyurvedaMassageVector.svg')`,
        backgroundPosition: 'center , right center'
    }

    const contenWidth={
        width:'58.328vw'
    }

  return (
    <div className='ayurvedaWeightManagement'>
      <AyurvedaTemplate2 data={weightManagementData} backgroundImages={backgroundImages} title='AYURVEDA WEIGHT MANAGEMENT' contentWidth={contenWidth} secondTitle='PACKAGE INCLUSIONS'>
      <div className='packageInclusionDiv'>
            <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Individualized holistic weight management analysis</span>
            </div>

            <span>|</span>

            <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Emotional wellness counseling</span>
            </div>

            <span>|</span>

            <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Circadian health planning</span>
            </div>
            
            <span>|</span>

            <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Culinary classes </span>
            </div>
        </div>
        
        <div className='packageInclusionDiv'>
        <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Nutritional guidance and counseling </span>
            </div>

            <span>|</span>

            <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Detoxification treatments for weight loss </span>
            </div>

            <span>|</span>

            <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Guided mind-body programs</span>
            </div>
            
            <span>|</span>

            <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Pottery making classes</span>
            </div>
        </div>

        <div className='packageInclusionDiv'>
        <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Stress-busting sessions</span>
            </div>

            <span>|</span>

            <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>High or moderate-intensity fitness sessions</span>
            </div>

            <span>|</span>

            <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Selected spa and beauty therapies</span>
            </div>

            <span>|</span>

            <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>De-addiction sessions</span>
            </div>
        </div>
      </AyurvedaTemplate2>
    </div>
  )
}
