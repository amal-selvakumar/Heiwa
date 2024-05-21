import { useDispatch } from 'react-redux';
import './WhatWeOffer.css';
import { setItem, setShowModal } from '../Redux/ModalSlice';

type WhatweOfferType={
    data:{
     imageUrl?:string;
     title?:string
    }[],
}

type ItemType={
  imageUrl?:string;
  title?:string;
}

export default function WhatWeOffer({data}:WhatweOfferType) {

  const dispatch = useDispatch();

  const handleItemClick=(data:ItemType)=>{
    dispatch(setShowModal(true));
    dispatch(setItem(data));
  }
  
  return (
    <div className='whatWeOffer'>
      <div className='whatWeOfferTitle'>
        <span>WHAT WE OFFER</span>
      </div>

      <div className='whatWeOfferGridContainer'>
        
        {data.map((item)=>(
           <div className='itemDiv'>
            {item.imageUrl && item.title ? (
                <div className='gridBackground' onClick={()=>handleItemClick(item)}>
                   <div className='gridInnerBackground'/>

                   <div className='gridImageContainer'>
                    <img src={item.imageUrl} alt='imageUrl'/>
                   </div>

                   <div className='gridContentDiv'>
                    <span>{item.title}</span>
                   </div>
                </div>
            ):null}
           </div>
        ))}
      </div>

    </div>
  )
}
