import './WhatWeOffer.css';

type WhatWeOfferType={
  data:{
   imageUrl?:string,
   title?:string
  }[]
}

export default function WhatWeOffer({data}:WhatWeOfferType) {

  return (
    <div className='whatWeOffer'>
      <div className='whatWeOfferTitle'>
        <span>WHAT WE OFFER</span>
      </div>

      <div className='whatWeOfferContent'>
          <div className='offerGridContainer'>
          {data.map((item,index)=>(
             <div className='offerGrid' key={index}>
             {item.imageUrl && item.title ? (
               <div className='itemBackground'>
                 <div className='itemInnerDiv'></div>
                 <div className='itemImageDiv'>
                   <img src={item.imageUrl} alt='image' />
                 </div>
                 <div className='itemTitleDiv'>
                   <span>{item.title}</span>
                 </div>
               </div>
             ) : null}
           </div>
          ))}
          </div>
      </div>

    </div>
  )
}
