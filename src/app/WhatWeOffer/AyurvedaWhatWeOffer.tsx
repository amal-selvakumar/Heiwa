import { NavLink } from 'react-router-dom';
import './AyurvedaWhatWeOffer.css';

type WhatWeOfferType = {
    data:{
        image:string;
        title:string;
        description:string;
        points:string;
    }[]
}

export default function AyurvedaWhatWeOffer({data}:WhatWeOfferType) {
  return (
    <div className='ayurvedaWhatWeOffer'>
      <div className='ayurvedaTitle'>
        <span>WHAT WE OFFER</span>
      </div>

      <div className='ayurvedaContent'>
       <div className='ayurvedaGridContainer'>
        {data.map((item)=>(
            <div className='ayurvedaItemBackground'>
               
               <div className='ayurvedaItemImage'>
                <img src={item.image} alt='image'/>
               </div>

               <div className='ayurvedaItemTitle'>
                <span>{item.title}</span>
               </div>

               <div className='ayurvedaItemContent'>
                <div className='ayurvedaItemTopContent'>
                    <span>{item.description}</span>
                </div>

                <div className='ayurvedaItemBottomContent' dangerouslySetInnerHTML={{__html:item.points}}>
                </div>
               </div>

               <div className='ayurvedaLinkDiv'>
                  <span>For more details:</span>
                  <NavLink to=''>Get Brochure</NavLink>
                </div>
            </div>
        ))}
       </div>
      </div>
    </div>
  )
}
