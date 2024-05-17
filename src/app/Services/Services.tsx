import './Services.css';
import serviceData from './Services.json';
import frame1 from '../Images/Frame1.svg';
import frame2 from '../Images/Frame2.svg';
import { useState } from 'react';

export default function Services() {

  const [currentIndex,setCurrentIndex]=useState(0);
  const itemsPerPage = 3;

  const handleNextClick=()=>{
    if(currentIndex < serviceData.length - itemsPerPage){
      setCurrentIndex(currentIndex+1);
      console.log(currentIndex);
    }
  }

  const handlePreviousClick=()=>{
    if(currentIndex > 0){
      setCurrentIndex(currentIndex - 1);
    }
  }

  return (
    <div className='services'>
      <div className='serviceContainer'>
        <div className='serviceHeader'>
         <div className='serviceTitle'>
          <span>OUR SERVICES</span>
         </div>  
        </div>

        <div className='serviceBottomContainer'>
         <div className='sliderOuterContainer'>
          <div className='previousIcon'>
            <img src={frame1} alt='frame' onClick={handlePreviousClick}/>
          </div>

          <div className='sliderContainer'>
            {
              serviceData.map((item)=>(
                <div className='slider' style={{transform:`translateX(${- currentIndex * 24.153}vw)`}}>
                  <div className='sliderInnerDiv'></div>
                  
                  <div className='sliderImageDiv'>
                    <img src={item.imageUrl} alt='imageUrl'/>
                  </div>

                  <div className='sliderContentDiv'>
                    <span>{item.title}</span>
                  </div>  
                </div>
              ))
            }
          </div>

          <div className='nextIcon'>
            <img src={frame2} alt='frame' onClick={handleNextClick}/>
          </div>
         </div>

         
        </div>
      </div>
    </div>
  )
}
