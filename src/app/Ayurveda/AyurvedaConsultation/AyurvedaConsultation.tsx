import AyurvedaTemplate2 from '../AyurvedaTemplate/AyurvedaTemplate2';
import './AyurvedaConsultation.css';
import consultationData from './AyurvedaConsultation.json';
import flowerIcon from '../../../../public/Images/FlowerIcon.svg';

export default function AyurvedaConsultation() {

    const backgroundImages={
        backgroundImage:`url('../../../../public/Images/AyurvedaMassageVector.svg')`,
        backgroundPosition:'right center'
    }

    const contenWidth={
        width:'58.328vw'
    }

  return (
    <div className='ayurvedaConsultation'>
      <AyurvedaTemplate2 data={consultationData}backgroundImages={backgroundImages} title='AYURVEDA PRE-CONSULTATION' contentWidth={contenWidth} secondTitle='RECOMMENDED ADD-ONS' >
      <div className='packageInclusionDiv'>
            <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Dosha-specific yoga classes</span>
            </div>

            <span>|</span>

            <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Ayurvedic pulse diagnosis</span>
            </div>

            <span>|</span>

            <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Ayurvedic lifestyle counseling sessions</span>
            </div>
        </div>
        
        <div className='packageInclusionDiv'>
        <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Ayurvedic lifestyle counseling sessions</span>
            </div>

            <span>|</span>

            <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Customized herbal formulations</span>
            </div>
        </div>
      </AyurvedaTemplate2>
    </div>
  )
}
