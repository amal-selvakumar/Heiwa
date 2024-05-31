import { QueryStatus } from '@reduxjs/toolkit/query';
import Template2 from '../WellnessTemplate/Template2';
import './ModernBeautyRetreat.css';
import Questions from '../Questions/Questions';
import flowerIcon from '../../../public/Images/FlowerIcon.svg';

export default function ModernBeautyRetreat() {
   
    const backgroundImage={
        backgroundImage:`url('/Images/ModernBeautyRetreatBackground.svg')`
    }

    const contenWidth={
        width:'70.469vw'
    }

    const content = "Reveal radiant, glowing skin with our advanced skin beauty treatments. Our company has partnered with the best skin spas and dermatologists to offer a range of cutting-edge treatments to address various skin concerns."
  return (
    <div className='modernBeautyRetreat'>
      <Template2 backgroundImages={backgroundImage} title='MODERN BEAUTY RETREAT' contentWidth={contenWidth} content={content} secondTitle='PACKAGE INCLUSIONS'>

      <div className='packageInclusionDiv'>
            <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Chemical Peels</span>
            </div>

            <span>|</span>

            <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Microdermabrasion</span>
            </div>

            <span>|</span>

            <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Microneedling</span>
            </div>

            <span>|</span>

            <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Laser Skin Resurfacing</span>
            </div>

            <span>|</span>

            <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>IPL Photofacial</span>
            </div>
        </div>
        
        <div className='packageInclusionDiv'>
            <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>LED Light Therapy</span>
            </div>

            <span>|</span>

            <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Hydrafacial</span>
            </div>
            
            <span>|</span>

            <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Dermaplaning</span>
            </div>

            <span>|</span>

            <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Botox and Fillers</span>
            </div>

            <span>|</span>

            <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Customized Facials</span>
            </div>
        </div>
        
        <div className='questionsDiv'>
          <Questions/>
        </div>

      </Template2>
    </div>
  )
}
