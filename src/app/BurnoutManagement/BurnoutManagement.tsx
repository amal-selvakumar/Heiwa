import BookYourEscape from '../BookYourEscape/BookYourEscape'
import Questions from '../Questions/Questions'
import Template2 from '../WellnessTemplate/Template2'
import './BurnoutManagement.css'
import flowerIcon from '../../../public/Images/FlowerIcon.svg';

export default function BurnoutManagement() {
    const backgroundImages={
        backgroundImage:`url('/Images/BurnoutRetreatManagement.svg')`
    }

    const contenWidth={
        width:'78.469vw'
    }

    const content="Stress is the root of all killer diseases. But can you imagine life without stress? Wellness resorts worldwide are rolling out great stress management programs of varying durations catering to a diverse category of individuals. Programs are personalized, allowing you to relax and unwind in your way. The duration of these programs can be as short as 2 days or as long as 1-2 months."
  return (
    <div className='burnoutManagement'>
      <Template2 backgroundImages={backgroundImages} title='BURNOUT MANAGEMENT RETREAT' content={content} contentWidth={contenWidth} secondTitle='PACKAGE INCLUSIONS'>

      <div className='packageInclusionDiv'>
            <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Psychological and emotional online and offlinecounseling</span>
            </div>

            <span>|</span>

            <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Wisdom sessions</span>
            </div>

            <span>|</span>

            <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Stress and anxiety management</span>
            </div>
        </div>

        <div className='packageInclusionDiv'>
           <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Stress management consultation</span>
            </div>

            <span>|</span>
            
            <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Sleep Medicine Consultation</span>
            </div>

            <span>|</span>
            
            <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Activity planning for rest, work, recreation, and sleep</span>
            </div>
        </div>

        <div className='packageInclusionDiv'>
           <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>General health and wellness assessment</span>
            </div>

            <span>|</span>
            
            <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Guided mindfulness and meditation program</span>
            </div>

            <span>|</span>
            
            <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Sleep Medicine Consultation</span>
            </div> 
        </div>

        <div className='packageInclusionDiv'>
           <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Nature bathing</span>
            </div>

            <span>|</span>
            
            <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Yoga Sessions</span>
            </div>

            <span>|</span>
            
            <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Deep Breathing programs</span>
            </div>

            <span>|</span>

            <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Traditional Massage Therapy</span>
            </div> 

            <span>|</span>

            <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Lymphatic Drainage Therapy</span>
            </div>  
        </div>

        <div className='packageInclusionDiv'>
           <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Sound Healing Therapy</span>
            </div>

            <span>|</span>
            
            <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Personality development sessions</span>
            </div>

            <span>|</span>
            
            <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Take-home guide and followups</span>
            </div>

            <span>|</span>

            <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Sound Healing</span>
            </div>
           </div>
      
       <div className='questionsDiv'>
        <Questions/>
       </div>
       
      </Template2>
    </div>
  )
}
