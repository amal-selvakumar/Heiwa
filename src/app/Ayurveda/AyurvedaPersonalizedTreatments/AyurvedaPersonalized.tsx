import AyurvedaTemplate from '../AyurvedaTemplate/AyurvedaTemplate';
import './AyurvedaPersonalized.css';
import personalizedData from './AyurvedaPersonalized.json';

export default function AyurvedaPersonalized() {

    const gap = {
        justifyContent:'space-evenly'
    }

    const descriptionWidth={
        width:'77.5vw'
     }

  return (
    <div className='ayurvedaPersonalized'>
      <AyurvedaTemplate data={personalizedData} gap={gap} title='AYURVEDA PERSONALIZED TREATMENT' descriptionWidth={descriptionWidth} whatWeOfferData={personalizedData.whatWeOffer}></AyurvedaTemplate>
    </div>
  )
}
