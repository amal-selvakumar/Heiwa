import BookYourEscape from '../BookYourEscape/BookYourEscape';
import WellnessTemplate from '../WellnessTemplate/WellnessTemplate';
import WhyChooseBoutiqueStays from '../WhyChooseBoutiqueStays/WhyChooseBoutiqueStays';
import './BoutiqueStay.css';
import boutiqueData from './BoutiqueStay.json';
import whatsappIcon from '../Images/WhatsappIcon.svg';
import { useSelector } from 'react-redux';
import ModalComponent from '../ModalComponent/ModalComponent';
import { RootState } from '../Redux/Store';


export default function BoutiqueStay() {  
  
  const styles={
    backgroundImage:`url('/src/app/Images/BoutiqueStay.svg')`
  }

  const descriptionStyle={
    width:'75.766vw'
  }

  const showModal = useSelector((state:RootState)=>state.modal.showModal);
  const selectedItem = useSelector((state:RootState)=>state.modal.item);

  const description = "Welcome to India, where lush greenery, serene backwaters, and ancient traditions converge. Our boutique stays are not your typical resorts; they are the well-kept secrets cherished by locals and discerning travelers alike. Each stay promises an intimate connection with nature, a glimpse into India’s soul, and a wellness journey like no other.";
    
  return (
    <div className='boutiqueStay'>
      <WellnessTemplate bgImage={styles} title='BOUTIQUE STAY RETREAT' description={description} 
      descriptionStyle={descriptionStyle} data={boutiqueData}>

        <div className='whyChooseBoutiqueStayDiv'>
          <WhyChooseBoutiqueStays/>
        </div>

        <div className='whatsappIconContainer'>
          <img src={whatsappIcon} alt='whatsappIcon'/>
        </div>

        <div className='bookYourEscapeDiv'>
          <BookYourEscape/>
        </div>
      
      </WellnessTemplate>  
      
      {showModal && selectedItem.title === 'ISLAND RETREATS' ? (
        <ModalComponent/>
      ):null}
      
    </div>
  )
}
