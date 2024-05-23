import Questions from '../../Questions/Questions';
import WellnessTemplate from '../../WellnessTemplate/WellnessTemplate';
import WhatWeOffer2 from '../../WhatWeOffer/WhatWeOffer2';
import './AyurvedaRetreat.css';
import ayurvedaData from './AyurvedaRetreat.json';

export default function AyurvedaRetreat() {
    const backgroundImage = {
        backgroundImage:`url('/Images/AyurvedaRetreatBackground.svg')`
    }

    const description = `<p style="font-family: 'Raleway Semibold'; margin-block-end:0;">What is Ayurveda?</p>Ayurveda, the ancient science of life, is a holistic approach to wellness that originated in India over 5,000 years ago. The term "Ayurveda" is derived from the Sanskrit words "ayur" meaning "life" and "veda" meaning "science" or "knowledge." It is a comprehensive system of natural healthcare that aims to balance the body, mind, and spirit to promote overall health and well-being. Ayurveda is based on the understanding that each individual is unique, with their own distinct constitution (known as "dosha") and life force (known as "prana"). It offers a personalized approach to health, using a combination of diet, lifestyle, herbal remedies, yoga, and meditation to restore balance and harmony.
    <div class='principlesDiv'>
    <div class='principlesTitle'>
      <span>The core principles of Ayurveda include</span>
    </div>

    <div class='principlesContent'>
     <ul>
        <li>The interconnectedness of all living things</li>
        <li>The importance of living in harmony with nature</li>
        <li>The concept of the three doshas (Vata, Pitta, and Kapha) and their role in maintaining health and balance</li>
        <li>The use of natural remedies and therapies to promote wellness</li>
        <li>The emphasis on prevention and self-care</li> 
     </ul>

     <div class='principlesBottomContent'>
     By embracing the wisdom of Ayurveda, you can embark on a journey of self-discovery and transformation, cultivating a deeper connection with your body, mind, and spirit. By partnering with the best in the industry, we're able to offer our guests a truly exceptional Ayurveda retreat experience. Join us and discover the transformative power of Ayurveda.
     </div>
    </div>
    </div>
    `;

    const contenWidth={
        width:'76.656vw'
      }

  return (
    <div className='ayurvedaRetreat'>
      <WellnessTemplate backgroundImage={backgroundImage} title='AYURVEDA RETREAT' description={description}
      contentWidth={contenWidth}>

        <div className='whatWeOfferDiv'>
          <WhatWeOffer2 data={ayurvedaData.cardItems}/>
        </div>
        
        <div className='questionsDiv'>
         <Questions/>
        </div>
        
      </WellnessTemplate>
    </div>
  )
}
