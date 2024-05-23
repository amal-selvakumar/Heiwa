import { useSelector } from 'react-redux';
import BookYourEscape from '../BookYourEscape/BookYourEscape';
import WellnessTemplate from '../WellnessTemplate/WellnessTemplate';
import WhyChooseBoutiqueStays from '../WhyChooseBoutiqueStays/WhyChooseBoutiqueStays';
import './BoutiqueStay.css';
import boutiqueData from './BoutiqueStay.json';
import { RootState } from '../Redux/Store';
import ModalComponent from '../ModalComponent/ModalComponent';
import WhatWeOffer from '../WhatWeOffer/WhatWeOffer';

export default function BoutiqueStay() {
    const backgroundImage={
        backgroundImage:`url('/src/app/Images/BoutiqueStay.svg')`
    }

    const description="Welcome to India, where lush greenery, serene backwaters, and ancient traditions converge. Our boutique stays are not your typical resorts; they are the well-kept secrets cherished by locals and discerning travelers alike. Each stay promises an intimate connection with nature, a glimpse into India’s soul, and a wellness journey like no other.";

    const contenWidth={
      width:'75.766vw'
    }

    const showModal = useSelector((state:RootState)=>state.modal.showModal);
    const selectedItem = useSelector((state:RootState)=>state.modal.item);

    const itemData = boutiqueData.modalItems.find((item)=>item.title === selectedItem?.title);
  
    return (
    <div className='boutiqueStay'>
      <WellnessTemplate backgroundImage={backgroundImage} title='BOUTIQUE STAY RETREAT' description={description}
      contentWidth={contenWidth}>

      <div className='whatWeOfferDiv'>
        <WhatWeOffer data={boutiqueData.cardItems}/>
      </div>
      
      <div className='whyChooseContainer'>
        <WhyChooseBoutiqueStays/>
      </div>

      <div className='escapeContainer'>
        <BookYourEscape/>
      </div>
      
      </WellnessTemplate>

      {showModal && itemData ? (
          <ModalComponent imageUrl={itemData.imageUrl} title={itemData.title} shortDescription={itemData.smallDescription}
          firstListTitle={itemData.firstListTitle} firstDescription={itemData.firstListDescription} lastListTitle={itemData.secondListTitle}
          lastDescription={itemData.secondListDescription}/>
      ):null}
    </div>
  )
}
