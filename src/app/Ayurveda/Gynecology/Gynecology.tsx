import AyurvedaTemplate2 from '../AyurvedaTemplate/AyurvedaTemplate2';
import './Gynecology.css';
import gynecologyData from './Gynecology.json';
import flowerIcon from '../../../../public/Images/FlowerIcon.svg';

export default function Gynecology() {

    const backgroundImages={
        backgroundImage:`url('../../../../public/Images/AyurvedaMassageVector.svg')`,
        backgroundPosition: 'right center'
    }

    const contenWidth={
        width:'58.328vw'
    }

  return (
    <div className='gynecology'>
      <AyurvedaTemplate2 data={gynecologyData} backgroundImages={backgroundImages} title='GYNECOLOGICAL CONSULTATION' contentWidth={contenWidth} secondTitle='PACKAGE INCLUSIONS'>
      <div className='packageInclusionDiv'>
            <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Ayurvedic fertility treatments</span>
            </div>

            <span>|</span>

            <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Natural supplements for menstrual and hormonal balance</span>
            </div>
        </div>
        
        <div className='packageInclusionDiv'>
        <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Therapeutic Ayurvedic massages</span>
            </div>

            <span>|</span>

            <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Yoga and pranayama for menstrual pain and health</span>
            </div>
        </div>
      </AyurvedaTemplate2>
    </div>
  )
}
