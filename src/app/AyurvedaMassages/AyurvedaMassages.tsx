import AyurvedaTemplate from '../AyurvedaTemplate/AyurvedaTemplate';
import './AyurvedaMassages.css';
import ayurvedaMassageData from './AyurvedaMassages.json';

export default function AyurvedaMassages() {
    const gap = {
        gap:'3.203vw'
    }

     const descriptionWidth={
        width:'76vw'
     }

  return (
    <div className='ayurvedaMassages'>
      <AyurvedaTemplate data={ayurvedaMassageData} gap={gap} title='AYURVEDA MASSAGES' descriptionWidth={descriptionWidth} whatWeOfferData={ayurvedaMassageData.whatWeOffer}/>
    </div> 
  )
}
