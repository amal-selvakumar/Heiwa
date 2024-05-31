import BookYourEscape from '../BookYourEscape/BookYourEscape';
import Template2 from '../WellnessTemplate/Template2'
import './RelaxRetreat.css';
import flowerIcon from '../../../public/Images/FlowerIcon.svg';

export default function RelaxRetreat() {

    const backgroundImages={
        backgroundImage:`url('/Images/RelaxRetreatBackground.svg')`
    }

    const contenWidth={
        width:'80.469vw'
    }

    const content="This is a highly sought-after wellness resort and spa program among individuals looking for blissful experiences to achieve their desired level of relaxation. As an experienced wellness resort advisor, we strongly recommend including this program in your menu for its simplicity and wider acceptance. The duration can vary from 7 days to 1 month.";

  return (
    <div className='relaxRetreat'>
      <Template2 backgroundImages={backgroundImages} title='JUST RELAX RETREAT' content={content} contentWidth={contenWidth} secondTitle='PACKAGE INCLUSIONS'>
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
