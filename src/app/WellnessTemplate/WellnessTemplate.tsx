import Navbar from '../Navbar/Navbar';
import './WellnessTemplate.css';
import whatsappIcon from '../Images/WhatsappIcon.svg';
import WhatWeOffer from '../WhatWeOffer/WhatWeOffer';
import Footer from '../Footer/Footer';

type WellnessType={
    backgroundImage:React.CSSProperties;
    title:string;
    description:string;
    contentWidth:React.CSSProperties;
    data:{
      imageUrl?:string;
      title?:string
    }[];
    children:React.ReactNode;
}

export default function WellnessTemplate({backgroundImage,title,description,contentWidth,data,children}:WellnessType) {
  return (
    <div className='wellnessTemplate'>
        <div className='wellnessTemplateContainer'>
          <Navbar/>
          <div className='wellnessBackgroundDiv' style={backgroundImage}/>

          <div className='wellnessContentDiv'>
            <div className='wellnessTitleDiv'>
              <span>{title}</span>
            </div>

            <div className='wellnessContent'>
               <span style={contentWidth}>{description}</span>
            </div>

            <div className='whatsappIconContainer'>
              <img src={whatsappIcon} alt='whatsappIcon'/>
             </div>

             <div className='whatWeOfferDiv'>
              <WhatWeOffer data={data}/>
             </div>

             {children}

             <div className='footerContainer'>
              <Footer/>
             </div>
          </div>
        </div>
    </div>
  )
}
