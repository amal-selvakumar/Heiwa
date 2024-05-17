import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import WhatWeOffer from '../WhatWeOffer/WhatWeOffer';
import './WellnessTemplate.css';

type WellnessStyles={
   bgImage:React.CSSProperties;
   title:string,
   description:string,
   descriptionStyle:React.CSSProperties,
   data:{
      imageUrl?:string,
      title?:string
   }[],
   children:React.ReactNode
}

export default function WellnessTemplate({bgImage,title,description,descriptionStyle,data,children}:WellnessStyles) {

  return (
    <div className='wellnessTemplate'>
      <div className='wellnessTemplateContainer'>
         <Navbar/>

         <div className='wellnessTemplateBottomContainer'>
            <div className='wellnessTemplateBackgroundDiv' style={bgImage}/>
            <div className='wellnessContentDiv'>
               <div className='wellnessContentTitle'>
                  <span>{title}</span>
               </div>

               <div className='wellnessContent'>
                  <span style={descriptionStyle}>{description}</span>
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
    </div>
  )
}
