import Template2 from '../WellnessTemplate/Template2';
import './HormonalRetreat.css';
import flowerIcon from '../../../public/Images/FlowerIcon.svg';
import BookYourEscape from '../BookYourEscape/BookYourEscape';

export default function HormonalRetreat() {
    const backgroundImages={
        backgroundImage:`url('/Images/HormonalRetreatBackground.svg')`
    }

    const contenWidth={
        width:'78.469vw'
    }

    const content="This is the latest wellness trend as people are more concerned about their resilience to various diseases. No magic pill can boost your immunity overnight. You need to enhance it through proper habits, rest, and relaxation. The duration of immunity-boosting programs in wellness resorts can vary from a few weeks to a month."

  return (
    <div className='hormonalRetreat'>
      <Template2 backgroundImages={backgroundImages} title='HORMONAL/IMMUNITY RETREAT' content={content} contentWidth={contenWidth} secondTitle='PACKAGE INCLUSIONS'>
      <div className='packageInclusionDiv'>
            <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Holistic wellness consultation</span>
            </div>

            <span>|</span>

            <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Prescribed relaxation practices with mindfulness, yoga, and meditation</span>
            </div>

            <span>|</span>

            <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Massage therapies for stress reduction</span>
            </div>
        </div>
        
        <div className='packageInclusionDiv'>
            <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Aesthetic facial and beauty therapies</span>
            </div>

            <span>|</span>

            <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Body wraps and body polish treatments</span>
            </div>

            <span>|</span>

            <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Aesthetic facial and beauty therapies</span>
            </div>
            
            <span>|</span>

            <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Sound Healing Therapy</span>
            </div>
        </div>

        <div className='packageInclusionDiv'>
           <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Music Therapy</span>
            </div>

            <span>|</span>
            
            <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Herbal treatments</span>
            </div>

            <span>|</span>
            
            <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Thermal pool activities</span>
            </div>

            <span>|</span>
            
            <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Forest Walk or Nature Bathing</span>
            </div>

            <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Digital Detox Practices</span>
            </div>

            
        </div>

        <div className='packageInclusionDiv'>
           <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Forest Walk or Nature Bathing</span>
            </div>

            <span>|</span>
            
            <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Emotional Healing sessions</span>
            </div>

            <span>|</span>
            
            <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Music Therapy</span>
            </div>

            <span>|</span>
            
            <div className='packageFlexDiv'>
                <img src={flowerIcon} alt='flowerIcon'/>
                <span>Spiritual healing</span>
            </div>            
        </div>

        <div className='bookYourEscapeContainer'>
          <BookYourEscape/>
        </div>
      </Template2>
    </div>
  )
}
