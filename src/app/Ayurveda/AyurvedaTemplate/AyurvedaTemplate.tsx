import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar';
import Questions from '../../Questions/Questions';
import AyurvedaWhatWeOffer from '../../WhatWeOffer/AyurvedaWhatWeOffer';
import './AyurvedaTemplate.css';
import whatsappIcon from '../../Images/WhatsappIcon.svg';

type TemplateData={
    data:{
    images:{
        imageUrl:string;
    }[],
    content:string;
},
    gap:React.CSSProperties;
    title:string;
    descriptionWidth:React.CSSProperties;
    whatWeOfferData:{
        image:string;
        title:string;
        description:string;
        points:string;
    }[]
}

export default function AyurvedaTemplate({data,gap,title,descriptionWidth,whatWeOfferData}:TemplateData) {
  return (
    <div className='ayurvedaTemplate'>
      <Navbar/>
      
      <div className='ayurvedaTemplateBackground' style={gap}>
         {data.images.map((image)=>(
            <img src={image.imageUrl} alt='image'/>
         ))}
      </div>

      <div className='ayurvedaTemplateContentDiv'>
        <div className='ayurvedaTemplateTitle'>
           <span>{title}</span>
        </div>

        <div className='ayurvedaTemplateDescription'>
           <span style={descriptionWidth}>{data.content}</span>
        </div>
      </div>

        <div className='whatsappIconContainer'>
          <img src={whatsappIcon} alt='whatsappIcon'/>
        </div>

      <div className='ayurvedaWhatWeOfferContainer'>
            <AyurvedaWhatWeOffer data={whatWeOfferData}/>
      </div>

      <div className='questionsDiv'>
         <Questions/>
        </div>

        <div className='footerContainer'>
         <Footer/>
        </div>
    </div>
  )
}
