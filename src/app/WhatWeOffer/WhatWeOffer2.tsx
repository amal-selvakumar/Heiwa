import { NavLink } from 'react-router-dom';
import './WhatWeOffer.css';

type WhatweOfferType={
    data:{
     imageUrl?:string;
     title?:string;
     path?:string;
    }[],
}

export default function WhatWeOffer2({data}:WhatweOfferType) {
  return (
    <div className='whatWeOffer'>
      <div className='whatWeOfferTitle'>
        <span>WHAT WE OFFER</span>
      </div>

    <div className='gridContainer'>
      <div className='whatWeOfferTopGridContainer'>
      {data.slice(0,4).map((item)=>(
           <div className='itemDiv'>
            {item.imageUrl && item.title && item.path ? (
              <NavLink to={item.path}>
                <div className='gridBackground'>
                   <div className='gridInnerBackground'/>

                   <div className='gridImageContainer'>
                    <img src={item.imageUrl} alt='imageUrl'/>
                   </div>

                   <div className='gridContentDiv2'>
                    <span dangerouslySetInnerHTML={{__html:item.title}}></span>
                   </div>
                </div>
                </NavLink>
            ):null}
           </div>
        ))}
      </div>

      <div className='whatWeOfferBottomGridContainer'>
        {data.slice(4,9).map((item)=>(
           <div className='itemDiv'>
            {item.imageUrl && item.title && item.path ? (
              <NavLink to={item.path}>
                <div className='gridBackground'>
                   <div className='gridInnerBackground'/>

                   <div className='gridImageContainer'>
                    <img src={item.imageUrl} alt='imageUrl'/>
                   </div>

                   <div className='gridContentDiv2'>
                    <span dangerouslySetInnerHTML={{__html:item.title}}></span>
                   </div>
                </div>
              </NavLink>
            ):null}
           </div>
        ))}
      </div>
        
    </div>
    </div>
  )
}
