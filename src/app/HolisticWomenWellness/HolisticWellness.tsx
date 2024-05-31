import Template2 from '../WellnessTemplate/Template2';
import './HolisticWellness.css';
import flowerIcon from '../../../public/Images/FlowerIcon.svg';
import BookYourEscape from '../BookYourEscape/BookYourEscape';

export default function HolisticWellness() {
    const backgroundImages={
        backgroundImage:`url('/Images/HolisticWellnessBackground.svg')`
    }

    const contenWidth={
        width:'80.469vw'
    }

    const content="Women's wellness is in the spotlight. A JAMA report says women are three times more likely to die from severe heart attacks than men due to unequal care and attention. They are also likely to undergo more stress than men. Wellness resorts all over the world are making sure to include holistic female wellness programs tailored to individual physical and emotional needs. The duration can vary between 7 and 30 days.";

  return (
    <div className='holisticWellness'>
      <Template2 backgroundImages={backgroundImages} title='HOLISTIC WOMEN WELLNESS RETREAT' contentWidth={contenWidth} content={content} secondTitle='PACKAGE INCLUSIONS'>
        <div className='packageInclusionDiv'>
            <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Gynecological consultation and ultrasound</span>
            </div>

            <span>|</span>

            <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Healing sessions with traditional medicine of choice</span>
            </div>

            <span>|</span>

            <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Evaluation of bone health</span>
            </div>

            <span>|</span>

            <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Culinary workshop</span>
            </div>
        </div>
        
        <div className='packageInclusionDiv'>
            <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Prescribed massage therapy sessions</span>
            </div>

            <span>|</span>

            <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Yoga and moderate to high-intensity workouts</span>
            </div>

            <span>|</span>

            <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Guidance on healthy pregnancy and childbirth</span>
            </div>
        </div>

        <div className='packageInclusionDiv'>
           <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Prescribed relaxation practices with mindfulness, yoga, and meditation</span>
            </div>

            <span>|</span>
            
            <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Natural facial and skin rejuvenation therapies</span>
            </div>

            <span>|</span>
            
            <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Special physiotherapy sessions</span>
            </div>
        </div>

        <div className='packageInclusionDiv'>
           <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span> Emotional management sessions</span>
            </div>

            <span>|</span>
            
            <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Guided mind-body sessions</span>
            </div>

            <span>|</span>
            
            <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Evaluation of reproductive health and fertility</span>
            </div> 
        </div>

        <div className='packageInclusionDiv'>
           <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Guidance for pre-menopause and menopause phases</span>
            </div>

            <span>|</span>
            
            <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Guidance on fertility management</span>
            </div>

            <span>|</span>
            
            <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span> Sexual wellness consultation</span>
            </div> 
        </div>

        <div className='packageInclusionDiv'>
           <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Curated age-based dietary guidance</span>
            </div>

            <span>|</span>
            
            <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Thyroid and Gut related medical assistances</span>
            </div>

            <span>|</span>
            
            <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Hormonal consultation and corrections</span>
            </div>
           </div>

        <div className='bookYourEscapeContainer'>
          <BookYourEscape/>
        </div>

      </Template2>
    </div>
  )
}
